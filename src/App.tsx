import { useEffect, useMemo, useState } from 'react';
import { Compass, FileText, House, NotebookPen, Sparkles } from 'lucide-react';
import homeOverviewImage from './assets/home-overview.png';

type GuideSection = {
  id: string;
  navLabel: string;
  title: string;
  icon: React.ComponentType<{ size?: number }>;
  intro: string;
  purpose: string[];
  entry: string[];
  actions: string[];
  tips: string[];
  imageTitle: string;
  imageHint: string;
};

const guideSections: GuideSection[] = [
  {
    id: 'home',
    navLabel: '主页',
    title: '主页如何使用',
    icon: House,
    intro:
      '主页是用户进入 Synesis 后最先接触的工作台，它负责把当天学习状态、当前学科、常用入口和右侧关键提醒集中在一个页面中。',
    purpose: [
      '快速查看今天的学习状态与当前学科。',
      '进入核心功能入口，而不需要在多个页面之间来回切换。',
      '作为后续进入学习路径、计划与总结、智能笔记的总入口。',
    ],
    entry: [
      '从左侧导航栏进入“主页”。',
      '首次进入系统时，默认优先到达主页。',
      '进入主页后的第一步是先选择学科。',
    ],
    actions: [
      '先选择学科。可以通过左侧栏中的“学科”进入选择，也可以通过页面右上方的“无学科”入口直接选择学科。',
      '确认当前学科已经切换成功，再开始后续提问、学习路径或计划相关操作。',
      '查看中间主区域的输入框、快捷操作和学习打卡模块。',
      '查看右侧信息栏中的学习目标、今日计划和学习热度。',
    ],
    tips: [
      '这张图已经作为主页总览图放入页面，后续可以继续在图上增加编号标注。',
      '主页页的下一步建议是继续拆出“左侧导航区”“中间主工作区”“右侧信息区”三个子模块说明。',
    ],
    imageTitle: '主页整体示意图',
    imageHint: '当前已接入主页截图，后续可继续在图上标出左侧学科入口和右上方无学科入口。',
  },
  {
    id: 'learning-path',
    navLabel: '制定学习路径',
    title: '制定学习路径如何使用',
    icon: Compass,
    intro:
      '学习路径模块用于把零散知识点组织成更连贯的学习路线。它更适合章节梳理、阶段目标规划和长期学习推进。',
    purpose: [
      '帮助用户从“零散提问”过渡到“系统学习”。',
      '让知识点之间的关系更清楚，知道应该先学什么、后学什么。',
      '为后续的计划生成与复习安排提供结构基础。',
    ],
    entry: [
      '从左侧导航栏点击“制定学习路径”。',
      '也可以在已有学科上下文后，从相关入口进入路径生成流程。',
    ],
    actions: [
      '先明确当前学科和学习目标。',
      '输入当前想整理的知识范围、章节或主题。',
      '等待系统生成学习路径结果。',
      '查看生成后的结构，并继续用于后续计划安排或复习推进。',
    ],
    tips: [
      '后续很适合加入“输入目标 -> 生成路径 -> 查看结果”的连续截图。',
      '如果后面确定具体交互，还可以拆成“创建路径”和“查看路径”两个小节。',
    ],
    imageTitle: '学习路径流程示意图',
    imageHint: '建议放 1 张主图，或 3 张连续截图，展示从输入到生成结果的流程。',
  },
  {
    id: 'plans',
    navLabel: '计划与总结',
    title: '计划与总结如何使用',
    icon: FileText,
    intro:
      '计划与总结模块主要服务于阶段安排和每日推进。它帮助用户把目标拆成更清晰的任务，并在使用后形成回顾与总结。',
    purpose: [
      '帮助用户把学习目标转化为更可执行的计划。',
      '帮助用户查看今天该做什么，以及后续如何推进。',
      '通过总结让学习结果不止停留在执行过程里。',
    ],
    entry: [
      '从左侧导航栏点击“计划与总结”。',
      '也可以从主页右侧“今日计划”卡片进入相关操作。',
    ],
    actions: [
      '先查看当前是否已有今日计划。',
      '如果没有，可以从入口生成计划。',
      '根据计划内容逐项执行。',
      '在使用后查看阶段总结或学习结果整理。',
    ],
    tips: [
      '建议至少准备两张图：一张是“生成计划前”，一张是“生成计划后”。',
      '后续文案可以再区分“计划怎么生成”和“总结怎么看”。',
    ],
    imageTitle: '计划与总结示意图',
    imageHint: '建议突出今日计划卡片、计划生成按钮，以及生成后的计划展示区域。',
  },
  {
    id: 'notes',
    navLabel: '智能笔记',
    title: '智能笔记如何使用',
    icon: NotebookPen,
    intro:
      '智能笔记用于把学习过程中有价值的内容沉淀下来。它不是单独的一份静态笔记，而是围绕用户学习过程持续积累的记录入口。',
    purpose: [
      '减少提问内容在对话结束后直接流失。',
      '帮助用户把解释、总结、关键知识点保留下来。',
      '让后续复习和回看有更明确的资料基础。',
    ],
    entry: [
      '从左侧导航栏点击“智能笔记”。',
      '也可以从其他功能模块中，把重要内容进一步沉淀到笔记里。',
    ],
    actions: [
      '进入笔记模块后查看已有记录。',
      '把学习过程中的重点内容整理为笔记。',
      '对笔记进行回看、补充和后续复习使用。',
      '把笔记作为学习路径和计划之外的长期积累部分。',
    ],
    tips: [
      '适合放“笔记列表”与“笔记详情”两种截图。',
      '后续文案可以继续补：哪些内容适合记到笔记里，哪些不需要。',
    ],
    imageTitle: '智能笔记示意图',
    imageHint: '建议放智能笔记页面截图，突出记录入口、列表区和内容详情区。',
  },
];

const overviewCards = [
  {
    title: '进入主页后先做什么',
    description: '第一步先选择学科，只有明确当前学科后，后续学习动作才会更连贯。',
  },
  {
    title: '学科从哪里选择',
    description: '可以通过左侧导航栏中的“学科”进入，也可以直接点击右上角的“无学科”入口切换。',
  },
  {
    title: '选择学科后做什么',
    description: '确认学科后，再开始提问、查看快捷操作、制定学习路径或生成学习计划。',
  },
  {
    title: '主页的作用是什么',
    description: '主页不是单独功能页，而是整个学习流程的起点和总入口。',
  },
];

const defaultSectionId = guideSections[0].id;

const getSectionFromHash = (): string => {
  if (typeof window === 'undefined') return defaultSectionId;
  const hash = window.location.hash.replace('#', '');
  return guideSections.some((section) => section.id === hash) ? hash : defaultSectionId;
};

function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>(getSectionFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSectionId(getSectionFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const activeSection = useMemo(
    () => guideSections.find((section) => section.id === activeSectionId) ?? guideSections[0],
    [activeSectionId],
  );

  const ActiveIcon = activeSection.icon;

  return (
    <div className="help-shell">
      <header className="help-topbar">
        <div className="help-topbar-inner">
          <a className="help-brand" href={`#${defaultSectionId}`}>
            <span className="help-brand-mark">
              <Sparkles size={18} />
            </span>
            <span className="help-brand-text">
              <strong>Synesis</strong>
              <span>使用说明书</span>
            </span>
          </a>

          <nav className="help-primary-nav">
            {guideSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={section.id === activeSection.id ? 'is-active' : ''}
              >
                {section.navLabel}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="help-page" id="top">
        <aside className="help-sidebar">
          <div className="help-sidebar-card">
            <p className="help-sidebar-label">说明书目录</p>
            <div className="help-sidebar-nav">
              {guideSections.map((section) => {
                const Icon = section.icon;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`help-sidebar-link ${section.id === activeSection.id ? 'is-active' : ''}`}
                  >
                    <Icon size={16} />
                    <span>{section.navLabel}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </aside>

        <main className="help-main">
          <div className="help-breadcrumb">
            帮助文档 &nbsp;&gt;&nbsp; 产品使用说明 &nbsp;&gt;&nbsp; Synesis &nbsp;&gt;&nbsp; {activeSection.navLabel}
          </div>

          <section className="help-hero">
            <p className="help-kicker">How To Use Synesis</p>
            <h1>{activeSection.title}</h1>
            <p className="help-hero-copy">
              当前页面采用分页面说明结构。点击左侧目录或顶部导航后，会直接切换到对应说明页，而不是继续在同一页面里堆叠内容。
            </p>
          </section>

          {activeSection.id === 'home' ? (
            <section className="help-overview">
              <div className="help-image-placeholder hero-image">
                <div className="help-image-toolbar">
                  <span>总览示意区</span>
                  <span>主页截图已接入</span>
                </div>
                <div className="help-image-canvas help-image-canvas-photo">
                  <img className="help-overview-image" src={homeOverviewImage} alt="Synesis 主页截图" />
                </div>
              </div>

              <div className="help-card-grid">
                {overviewCards.map((card) => (
                  <article className="help-info-card" key={card.title}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section className="help-section help-section-single">
            <div className="help-section-header">
              <div className="help-section-title-row">
                <span className="help-section-icon">
                  <ActiveIcon size={18} />
                </span>
                <div>
                  <p className="help-section-mini">{activeSection.navLabel}</p>
                  <h2>{activeSection.title}</h2>
                </div>
              </div>
              <p className="help-section-intro">{activeSection.intro}</p>
            </div>

            <div className="help-section-layout">
              <div className="help-section-content">
                <article className="help-content-card">
                  <h3>这个部分是做什么的</h3>
                  <ul>
                    {activeSection.purpose.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>

                <article className="help-content-card">
                  <h3>入口在哪里</h3>
                  <ul>
                    {activeSection.entry.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>

                <article className="help-content-card">
                  <h3>基本使用方式</h3>
                  <ol>
                    {activeSection.actions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </article>

                <article className="help-content-card help-content-card-soft">
                  <h3>当前这一栏后续补充建议</h3>
                  <ul>
                    {activeSection.tips.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>

              <aside className="help-section-media">
                <div className="help-image-placeholder">
                  <div className="help-image-toolbar">
                    <span>{activeSection.imageTitle}</span>
                    <span>{activeSection.id === 'home' ? '已接入图片' : '图片占位'}</span>
                  </div>
                  <div className={`help-image-canvas ${activeSection.id === 'home' ? 'help-image-canvas-photo' : ''}`}>
                    {activeSection.id === 'home' ? (
                      <img className="help-overview-image" src={homeOverviewImage} alt="Synesis 主页整体示意图" />
                    ) : (
                      <div className="help-image-caption">{activeSection.imageHint}</div>
                    )}
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
