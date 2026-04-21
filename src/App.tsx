import { useEffect, useMemo, useState } from 'react';
import { Compass, FileText, House, NotebookPen, Sparkles } from 'lucide-react';
import homeOverviewImage from './assets/home-overview.png';
import homeSidebarNavigationImage from './assets/home-sidebar-navigation.jpeg';
import homeSidebarHistoryImage from './assets/home-sidebar-history.jpeg';
import homeThemeToggleImage from './assets/home-theme-toggle.jpeg';
import homeThemeDarkImage from './assets/home-theme-dark.png';
import homeUserSettingsImage from './assets/home-user-settings.jpeg';
import homeChatInputImage from './assets/home-chat-input.jpeg';
import homeChatPromptsImage from './assets/home-chat-prompts.jpeg';
import homeRightPlanImage from './assets/home-right-plan.jpeg';
import homeRightHeatImage from './assets/home-right-heat.jpeg';
import homeSubjectSelectionImage from './assets/home-subject-selection.jpeg';
import homeSubjectTopButtonImage from './assets/home-subject-top-button.jpeg';

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
  imageSrc?: string;
  imageAlt?: string;
};

type HomeSubsection = {
  id: string;
  label: string;
  title: string;
  intro: string;
  bullets: string[];
  imageSrc?: string;
  imageAlt?: string;
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
    imageSrc: homeOverviewImage,
    imageAlt: 'Synesis 主页整体示意图',
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
  },
];

const homeSubsections: HomeSubsection[] = [
  {
    id: 'home-page-intro',
    label: '页面介绍',
    title: '页面介绍',
    intro: '主页说明将分为左侧栏、中间大区域和右侧栏三部分。当前先介绍左侧栏，后续再分别补充中间区域和右侧栏。',
    bullets: [
      '左侧栏承担导航、历史记录、主题切换和用户设置入口。',
      '这一页先聚焦左侧栏，暂不展开中间主工作区和右侧信息栏。',
      '后续收到截图后，可以把当前占位区域替换成真实界面图。',
    ],
  },
  {
    id: 'home-subject',
    label: '选择学科',
    title: '选择学科',
    intro: '进入主页后的第一步是确认当前学科。只有学科上下文明确后，后续聊天、路径生成和计划安排才会更准确。',
    bullets: [
      '可从左侧“学科”入口进入选择。',
      '也可从页面右上角的学科标签区域直接切换。',
      '说明文案里建议强调“先选学科，再开始提问”。',
    ],
  },
  {
    id: 'home-chat',
    label: '与 Synesis 聊天',
    title: '与 Synesis 聊天',
    intro: '主页中间的大输入框是用户最直接的交互入口，适合提问、追问、发起讲解或继续当前学习主题。',
    bullets: [
      '可以说明输入问题后会进入持续对话。',
      '适合强调它是主页最核心的开始动作。',
      '后续如果有示例问题，可以直接放在这一节下方。',
    ],
  },
  {
    id: 'home-manim',
    label: 'Manim 功能',
    title: 'Manim 功能',
    intro: 'Manim 入口适合用于生成或调用数学动画相关能力，帮助用户把抽象概念转换成更直观的动态表达。',
    bullets: [
      '建议说明它适用于几何、函数变化、证明过程等动态展示场景。',
      '如果有生成流程，后续可以补一张从提问到动画输出的截图。',
      '文案上可以强调“更适合需要可视化演示的内容”。',
    ],
  },
  {
    id: 'home-formula',
    label: '公式库功能',
    title: '公式库功能',
    intro: '公式库入口适合快速查找、引用和整理常用公式，让用户在提问或复习时更容易定位关键表达式。',
    bullets: [
      '适合强调“快速查公式”和“按学科使用”的场景。',
      '可以补充说明它与聊天区配合使用的方式。',
      '后续可加入公式展示页或检索结果截图。',
    ],
  },
  {
    id: 'home-ggb',
    label: 'GGB 功能',
    title: 'GGB 功能',
    intro: 'GGB 功能适合处理几何构图、函数图像和交互式数学探索，是主页中的一个可视化辅助入口。',
    bullets: [
      '建议说明它更适合图形验证和图像观察。',
      '如果后续有案例，可以用“输入命题 -> 生成图形 -> 观察结论”的方式来写。',
      '和 Manim 的区别可以后续单独补充到这一节。',
    ],
  },
  {
    id: 'home-image',
    label: '插入图片',
    title: '插入图片',
    intro: '插入图片功能用于把题目截图、图形材料或板书照片带入当前学习流程，帮助 Synesis 基于视觉内容继续分析。',
    bullets: [
      '建议写清楚“适合上传什么类型的图片”。',
      '可以强调图片插入后会进入当前对话上下文。',
      '后续如有上传状态或识别效果图，可直接替换成截图展示。',
    ],
  },
  {
    id: 'home-checkin',
    label: '学习打卡',
    title: '学习打卡',
    intro: '学习打卡模块位于主页下方，主要用于记录近期学习连续性，让用户快速感知自己的学习节奏和完成情况。',
    bullets: [
      '可说明打卡在主页中的位置和基本动作。',
      '适合强调它与计划推进、学习习惯形成之间的关系。',
      '如果后续规则更明确，可以再补充打卡成功后的状态变化。',
    ],
  },
  {
    id: 'home-settings',
    label: '个人设置',
    title: '个人设置',
    intro: '个人设置区域用于管理头像、昵称、偏好和账号相关信息，是用户维护个人学习环境的重要入口。',
    bullets: [
      '这一节适合采用 Notion 风格的简洁条目说明。',
      '后续可以细拆为账号信息、学习偏好和通知设置。',
      '如果设置页暂未定稿，这里先保留结构，后续再补截图即可。',
    ],
  },
];
const defaultHomeSubsectionId = homeSubsections[0].id;
const defaultSectionId = guideSections[0].id;

const getHashValue = (): string => {
  if (typeof window === 'undefined') return defaultHomeSubsectionId;
  return window.location.hash.replace('#', '');
};

const getSectionFromHash = (hash: string): string => {
  if (!hash) return 'home';
  const matchedSection = guideSections.find(
    (section) => hash === section.id || hash.startsWith(`${section.id}-`),
  );
  return matchedSection?.id ?? defaultSectionId;
};

const getHomeSubsectionFromHash = (hash: string): HomeSubsection => {
  const matchedSubsection = homeSubsections.find((item) => item.id === hash);
  return matchedSubsection ?? homeSubsections[0];
};

function App() {
  const [currentHash, setCurrentHash] = useState<string>(getHashValue);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(getHashValue());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (currentHash === '' || currentHash === 'home') {
      window.location.replace(`#${defaultHomeSubsectionId}`);
    }
  }, [currentHash]);

  const activeSectionId = useMemo(() => getSectionFromHash(currentHash), [currentHash]);
  const activeSection = useMemo(
    () => guideSections.find((section) => section.id === activeSectionId) ?? guideSections[0],
    [activeSectionId],
  );
  const activeHomeSubsection = useMemo(() => getHomeSubsectionFromHash(currentHash), [currentHash]);
  const ActiveIcon = activeSection.icon;
  const isHomeSection = activeSection.id === 'home';
  const isHomePageIntro = activeHomeSubsection.id === 'home-page-intro';
  const isHomeSubjectPage = activeHomeSubsection.id === 'home-subject';
  const pageTitle = isHomeSection ? activeHomeSubsection.title : activeSection.title;
  const pageIntro = isHomeSection
    ? activeHomeSubsection.intro
    : '当前页面采用分页面说明结构。点击左侧目录或顶部导航后，会直接切换到对应说明页，而不是继续在同一页面里堆叠内容。';

  return (
    <div className="help-shell">
      <header className="help-topbar">
        <div className="help-topbar-inner">
          <a className="help-brand" href={`#${defaultHomeSubsectionId}`}>
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
                href={section.id === 'home' ? `#${defaultHomeSubsectionId}` : `#${section.id}`}
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
                    href={section.id === 'home' ? `#${defaultHomeSubsectionId}` : `#${section.id}`}
                    className={`help-sidebar-link ${section.id === activeSection.id ? 'is-active' : ''}`}
                  >
                    <Icon size={16} />
                    <span>{section.navLabel}</span>
                  </a>
                );
              })}
            </div>

            {isHomeSection ? (
              <div className="help-sidebar-subnav-group">
                <p className="help-sidebar-label">主页目录</p>
                <div className="help-sidebar-subnav">
                  {homeSubsections.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`help-sidebar-sublink ${item.id === activeHomeSubsection.id ? 'is-active' : ''}`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </aside>

        <main className="help-main">
          <div className="help-breadcrumb">
            帮助文档 &nbsp;&gt;&nbsp; 产品使用说明 &nbsp;&gt;&nbsp; Synesis &nbsp;&gt;&nbsp; {activeSection.navLabel}
            {isHomeSection ? `  >  ${activeHomeSubsection.label}` : ''}
          </div>

          <section className="help-hero">
            <p className="help-kicker">How To Use Synesis</p>
            <h1 className={isHomeSection ? 'help-hero-title-subpage' : undefined}>{pageTitle}</h1>
            <p className="help-hero-copy">{pageIntro}</p>
          </section>

          {isHomeSection ? (
            <section className="help-overview">
              {isHomePageIntro ? (
                <>
                  <div className="help-image-placeholder hero-image">
                    <div className="help-image-canvas help-image-canvas-photo">
                      <img className="help-overview-image" src={homeOverviewImage} alt="Synesis 主页总览图" />
                    </div>
                  </div>

                  <div className="help-doc-layout">
                    <div className="help-doc-main">
                      <article id="home-layout" className="help-content-card help-home-topic-card">
                        <p className="help-section-mini">页面结构</p>
                        <h3>主页分为三部分</h3>
                        <p>主页由左侧栏、中间大区域和右侧栏组成。三个区域分别承担导航、学习交互和信息提醒功能，共同构成完整的主页使用体验。</p>
                        <ul>
                          <li>左侧栏集中放置页面导航、历史记录、主题切换和用户设置入口。</li>
                          <li>中间大区域用于发起提问、使用快捷功能和查看学习打卡内容。</li>
                          <li>右侧栏用于展示学习目标、今日计划和学习热度等提醒信息。</li>
                        </ul>
                      </article>

                      <article id="home-sidebar" className="help-content-card help-home-topic-card">
                        <p className="help-section-mini">左侧栏</p>
                        <h3>左侧栏说明</h3>
                        <p>左侧栏用于帮助用户快速切换功能页面、查看本学科历史记录、调整显示主题，并进入个人设置入口。</p>
                      </article>

                      <div className="help-feature-grid">
                        <article id="home-sidebar-top" className="help-content-card help-feature-card">
                          <div className="help-feature-copy">
                            <p className="help-section-mini">顶部区域</p>
                            <h3>左上角区域</h3>
                            <p>左上角区域展示产品标识，并提供主页、学科、制定学习路径、计划与总结、智能笔记等主要功能入口。</p>
                            <ul>
                              <li>用户可以从这里快速判断自己当前所在的产品环境。</li>
                              <li>点击对应导航项后，可以在不同功能页面之间切换。</li>
                            </ul>
                          </div>
                          <div className="help-image-placeholder help-inline-image-placeholder">
                            <img className="help-inline-feature-image" src={homeSidebarNavigationImage} alt="主页左侧导航区域" />
                          </div>
                        </article>

                        <article id="home-history" className="help-content-card help-feature-card">
                          <div className="help-feature-copy">
                            <p className="help-section-mini">历史记录</p>
                            <h3>保留当前学科的所有对话记录</h3>
                            <p>历史记录区域会保留当前学科下的对话内容，便于用户回看已经进行过的问题讨论、讲解过程和学习记录。</p>
                            <ul>
                              <li>记录会按照当前学科进行保留，方便在同一学科内持续学习。</li>
                              <li>右上角的搜索按钮可用于快速查找已有对话内容。</li>
                            </ul>
                          </div>
                          <div className="help-image-placeholder help-inline-image-placeholder">
                            <img className="help-inline-feature-image" src={homeSidebarHistoryImage} alt="主页历史记录区域" />
                          </div>
                        </article>

                        <article id="home-theme" className="help-content-card help-feature-card">
                          <div className="help-feature-copy">
                            <p className="help-section-mini">主题色切换</p>
                            <h3>支持浅色与深色主题切换</h3>
                            <p>主题切换按钮用于切换界面的显示主题，用户可以根据使用环境和阅读习惯选择更合适的视觉模式。</p>
                            <ul>
                              <li>点击切换按钮后，可以快速进入深色主题模式。</li>
                              <li>主题切换能够提升在不同光线环境下的阅读舒适度。</li>
                            </ul>
                          </div>
                          <div className="help-theme-stack">
                            <div className="help-image-placeholder help-inline-image-placeholder">
                              <img className="help-inline-feature-image" src={homeThemeToggleImage} alt="主题切换按钮" />
                            </div>
                            <div className="help-image-placeholder help-inline-image-placeholder">
                              <img className="help-inline-feature-image" src={homeThemeDarkImage} alt="深色主题效果图" />
                            </div>
                          </div>
                        </article>

                        <article id="home-user-settings" className="help-content-card help-feature-card">
                          <div className="help-feature-copy">
                            <p className="help-section-mini">用户设置</p>
                            <h3>用户设置入口</h3>
                            <p>用户设置入口位于左侧栏底部，用于进入个人学习者信息页面，并查看与个人使用相关的设置内容。</p>
                            <ul>
                              <li>用户可以从这里进入个人资料相关页面。</li>
                              <li>后续如扩展更多设置项，也会继续从这一入口进入。</li>
                            </ul>
                          </div>
                          <div className="help-image-placeholder help-inline-image-placeholder">
                            <img className="help-inline-feature-image" src={homeUserSettingsImage} alt="用户设置入口" />
                          </div>
                        </article>
                      </div>
                    </div>

                    <aside className="help-doc-toc">
                      <p className="help-doc-toc-label">目录</p>
                      <div className="help-doc-toc-list">
                        <a href="#home-layout" className="help-doc-toc-link">主页分为三部分</a>
                        <a href="#home-sidebar" className="help-doc-toc-link">左侧栏说明</a>
                        <a href="#home-sidebar-top" className="help-doc-toc-link">左上角区域</a>
                        <a href="#home-history" className="help-doc-toc-link">历史记录</a>
                        <a href="#home-theme" className="help-doc-toc-link">主题色切换</a>
                        <a href="#home-user-settings" className="help-doc-toc-link">用户设置</a>
                        <a href="#home-main-area" className="help-doc-toc-link">中间大区域</a>
                        <a href="#home-chat-box" className="help-doc-toc-link">中间聊天框</a>
                        <a href="#home-chat-tools" className="help-doc-toc-link">聊天框按钮</a>
                        <a href="#home-chat-prompt-buttons" className="help-doc-toc-link">快捷提示按钮</a>
                        <a href="#home-right-area" className="help-doc-toc-link">右侧栏</a>
                        <a href="#home-right-plan" className="help-doc-toc-link">学习计划</a>
                        <a href="#home-right-heat" className="help-doc-toc-link">学习热度</a>
                      </div>
                    </aside>
                  </div>
                </>
              ) : isHomeSubjectPage ? (
                <>
                  <div className="help-doc-layout">
                    <div className="help-doc-main">
                      <article id="home-subject-overview" className="help-content-card help-home-topic-card">
                        <p className="help-section-mini">学科选择</p>
                        <h3>可通过两个入口选择学科</h3>
                        <p>在主页中，用户可以通过左侧栏的“学科”入口进入学科选择，也可以通过页面右上角的学科按钮快速切换当前学科。</p>
                        <ul>
                          <li>进入系统后，建议先完成学科选择，再开始后续提问和学习操作。</li>
                          <li>切换学科后，后续对话和学习内容会基于当前学科继续展开。</li>
                        </ul>
                      </article>

                      <article id="home-subject-sidebar-entry" className="help-content-card help-feature-card">
                        <div className="help-feature-copy">
                          <p className="help-section-mini">左侧栏入口</p>
                          <h3>通过左侧栏进入学科选择</h3>
                          <p>用户可以点击左侧栏中的“学科”导航项，打开学科选择面板，并从中选择当前要学习的学科。</p>
                          <ul>
                            <li>这一入口适合在浏览左侧导航时直接进入学科切换。</li>
                            <li>打开后可以看到全部学科列表，并选择目标学科。</li>
                          </ul>
                        </div>
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={homeSubjectSelectionImage} alt="左侧栏学科选择入口" />
                        </div>
                      </article>

                      <article id="home-subject-top-entry" className="help-content-card help-feature-card">
                        <div className="help-feature-copy">
                          <p className="help-section-mini">右上角入口</p>
                          <h3>通过右上角按钮切换学科</h3>
                          <p>页面右上角的学科按钮同样可以作为当前学科的切换入口，用户可以从这里快速查看并切换当前所选学科。</p>
                          <ul>
                            <li>这一入口更适合在主页中间操作过程中快速调整当前学科。</li>
                            <li>当用户已经在主页中进行学习时，无需返回左侧栏也可以完成切换。</li>
                          </ul>
                        </div>
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={homeSubjectTopButtonImage} alt="右上角学科切换按钮" />
                        </div>
                      </article>
                    </div>

                    <aside className="help-doc-toc">
                      <p className="help-doc-toc-label">目录</p>
                      <div className="help-doc-toc-list">
                        <a href="#home-subject-overview" className="help-doc-toc-link">学科选择概览</a>
                        <a href="#home-subject-sidebar-entry" className="help-doc-toc-link">左侧栏入口</a>
                        <a href="#home-subject-top-entry" className="help-doc-toc-link">右上角入口</a>
                      </div>
                    </aside>
                  </div>
                </>
              ) : activeHomeSubsection.imageSrc ? (
                <div className="help-image-placeholder hero-image">
                  <div className="help-image-canvas help-image-canvas-photo">
                    <img
                      className="help-overview-image"
                      src={activeHomeSubsection.imageSrc}
                      alt={activeHomeSubsection.imageAlt ?? activeHomeSubsection.title}
                    />
                  </div>
                </div>
              ) : null}

              {isHomePageIntro ? (
                <div className="help-doc-main">
                  <article id="home-main-area" className="help-content-card help-home-topic-card">
                    <p className="help-section-mini">中间大区域</p>
                    <h3>中间大区域说明</h3>
                    <p>中间大区域是主页的主要学习交互区，用户可以在这里输入问题、调用辅助能力，并使用快捷按钮快速组织提问内容。</p>
                  </article>

                  <article id="home-chat-box" className="help-content-card help-feature-card">
                    <div className="help-feature-copy">
                      <p className="help-section-mini">聊天框</p>
                      <h3>通过中间聊天框发起提问</h3>
                      <p>中间聊天框是主页最核心的交互入口。用户可以直接在这里输入问题、补充要求，或继续当前学习主题的对话。</p>
                      <ul>
                        <li>聊天框适合用于提问、追问、发起讲解和组织学习任务。</li>
                        <li>输入内容后，Synesis 会基于当前学科和对话上下文继续响应。</li>
                      </ul>
                    </div>
                    <div className="help-image-placeholder help-inline-image-placeholder">
                      <img className="help-inline-feature-image" src={homeChatInputImage} alt="主页聊天框区域" />
                    </div>
                  </article>

                  <article id="home-chat-tools" className="help-content-card help-feature-card">
                    <div className="help-feature-copy">
                      <p className="help-section-mini">聊天框按钮</p>
                      <h3>四个小按钮与开启思考按钮</h3>
                      <p>聊天框底部提供多个辅助按钮，帮助用户在同一个提问入口中快速切换不同输入方式和回答模式。</p>
                      <ul>
                        <li>左侧第一个按钮可用于调用 Manim 相关能力，适合需要数学动画或动态演示的内容。</li>
                        <li>第二个按钮用于调用公式库能力，适合快速查找、引用或整理公式。</li>
                        <li>第三个按钮用于调用 GGB 功能，适合几何构图、函数图像和交互式探索。</li>
                        <li>第四个按钮用于插入图片，适合上传题目截图、图形材料或板书照片。</li>
                        <li>右侧“开启思考”按钮用于切换更强调推理过程的回答方式，适合需要更完整分析步骤的问题。</li>
                      </ul>
                    </div>
                    <div className="help-image-placeholder help-inline-image-placeholder">
                      <img className="help-inline-feature-image" src={homeChatInputImage} alt="聊天框按钮与开启思考按钮" />
                    </div>
                  </article>

                  <article id="home-chat-prompt-buttons" className="help-content-card help-feature-card">
                    <div className="help-feature-copy">
                      <p className="help-section-mini">快捷提示</p>
                      <h3>下方四个按钮可直接为用户生成提示词</h3>
                      <p>聊天框下方的四个快捷按钮用于帮助用户快速组织问题表达。点击后可以直接生成对应类型的提示词，减少手动组织提问的成本。</p>
                      <ul>
                        <li>“公式推导”适合让系统从定义、定理、步骤说明和应用场景等角度完整推导一个公式。</li>
                        <li>“解题思路”适合先获取解题方法、思考路线和切入角度，再决定是否继续展开详细步骤。</li>
                        <li>“错题分析”适合围绕错误原因、知识漏洞和改进建议进行复盘。</li>
                        <li>“知识串联”适合把多个知识点放在一起理解它们之间的关系与应用脉络。</li>
                      </ul>
                    </div>
                    <div className="help-image-placeholder help-inline-image-placeholder">
                      <img className="help-inline-feature-image" src={homeChatPromptsImage} alt="聊天框下方的快捷提示按钮" />
                    </div>
                  </article>

                  <article id="home-right-area" className="help-content-card help-home-topic-card">
                    <p className="help-section-mini">右侧栏</p>
                    <h3>右侧栏说明</h3>
                    <p>右侧栏用于展示学习过程中的关键信息提醒。当前重点包括学习计划和学习热度两个模块，帮助用户了解当前安排与近期学习状态。</p>
                  </article>

                  <article id="home-right-plan" className="help-content-card help-feature-card">
                    <div className="help-feature-copy">
                      <p className="help-section-mini">学习计划</p>
                      <h3>查看并生成今日学习计划</h3>
                      <p>学习计划模块用于展示当天的计划状态。当还没有生成今日计划时，用户可以直接点击按钮开始生成计划。</p>
                      <ul>
                        <li>这个区域帮助用户快速判断今天是否已经安排了学习任务。</li>
                        <li>点击“生成计划”后，可以进入当天学习计划的生成流程。</li>
                      </ul>
                    </div>
                    <div className="help-image-placeholder help-inline-image-placeholder">
                      <img className="help-inline-feature-image" src={homeRightPlanImage} alt="右侧栏学习计划模块" />
                    </div>
                  </article>

                  <article id="home-right-heat" className="help-content-card help-feature-card">
                    <div className="help-feature-copy">
                      <p className="help-section-mini">学习热度</p>
                      <h3>查看近期学习活跃情况</h3>
                      <p>学习热度模块用于展示最近一段时间的学习活跃情况，帮助用户直观看到自己的学习频率和持续状态。</p>
                      <ul>
                        <li>用户可以通过热度分布快速了解近期学习是否保持连续。</li>
                        <li>该模块适合用于观察最近学习投入的整体趋势。</li>
                      </ul>
                    </div>
                    <div className="help-image-placeholder help-inline-image-placeholder">
                      <img className="help-inline-feature-image" src={homeRightHeatImage} alt="右侧栏学习热度模块" />
                    </div>
                  </article>
                </div>
              ) : !isHomeSubjectPage ? (
                <article className="help-content-card help-home-topic-card">
                  <p className="help-section-mini">{activeHomeSubsection.label}</p>
                  <h3>{activeHomeSubsection.title}</h3>
                  <p>{activeHomeSubsection.intro}</p>
                  <ul>
                    {activeHomeSubsection.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ) : null}
            </section>
          ) : null}

          {!isHomeSection ? (
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

                {activeSection.imageSrc ? (
                  <aside className="help-section-media">
                    <div className="help-image-placeholder">
                      <div className="help-image-canvas help-image-canvas-photo">
                        <img
                          className="help-overview-image"
                          src={activeSection.imageSrc}
                          alt={activeSection.imageAlt ?? activeSection.title}
                        />
                      </div>
                    </div>
                  </aside>
                ) : null}
              </div>
            </section>
          ) : null}
        </main>
      </div>
    </div>
  );
}

export default App;
