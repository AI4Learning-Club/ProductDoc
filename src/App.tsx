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
import homeChatOverviewImage from './assets/home-chat-overview.jpeg';
import homeRightPlanImage from './assets/home-right-plan.jpeg';
import homeRightHeatImage from './assets/home-right-heat.jpeg';
import homeSubjectSelectionImage from './assets/home-subject-selection.jpeg';
import homeSubjectTopButtonImage from './assets/home-subject-top-button.jpeg';
import homeGgbButtonImage from './assets/home-ggb-button.jpeg';
import homeGgbPreviewEntryImage from './assets/home-ggb-preview-entry.jpeg';
import homeGgb2dImage from './assets/home-ggb-2d.jpeg';
import homeGgb3dImage from './assets/home-ggb-3d.jpeg';
import homeManimButtonImage from './assets/home-manim-button.jpeg';
import homeManimRenderImage from './assets/home-manim-render.jpeg';
import homeFormulaButtonImage from './assets/home-formula-button.jpeg';
import homeFormulaLibraryImage from './assets/home-formula-library.jpeg';
import homeFormulaInsertImage from './assets/home-formula-insert.jpeg';
import homeFormulaHandwritingImage from './assets/home-formula-handwriting.jpeg';
import homeFileButtonImage from './assets/home-file-button.jpeg';
import homeSettingsMenuImage from './assets/home-settings-menu.jpeg';
import homeSettingsProfileImage from './assets/home-settings-profile.jpeg';

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
      '查看中间主区域的输入框与快捷操作入口。',
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
    label: '插入文件',
    title: '插入文件',
    intro: '插入文件功能用于把图片、文档或其他学习资料带入当前对话流程，帮助 Synesis 基于文件内容继续分析和处理。',
    bullets: [
      '适合上传题目截图、资料文件或需要结合上下文分析的学习内容。',
      '文件插入后会进入当前对话上下文，便于继续围绕文件内容提问。',
      '可用于配合讲解、分析、识别和整理等后续操作。',
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
  const isHomeGgbPage = activeHomeSubsection.id === 'home-ggb';
  const isHomeFormulaPage = activeHomeSubsection.id === 'home-formula';
  const isHomeFilePage = activeHomeSubsection.id === 'home-image';
  const isHomeSettingsPage = activeHomeSubsection.id === 'home-settings';
  const isHomeChatPage = activeHomeSubsection.id === 'home-chat';
  const isHomeManimPage = activeHomeSubsection.id === 'home-manim';
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
                          <li>中间大区域用于发起提问、使用快捷功能和组织当前学习任务。</li>
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
              ) : isHomeGgbPage ? (
                <>
                  <div className="help-doc-layout">
                    <div className="help-doc-main">
                      <article id="home-ggb-overview" className="help-content-card help-home-topic-card">
                        <p className="help-section-mini">GGB 功能</p>
                        <h3>仅数学学科支持使用 GGB</h3>
                        <p>GGB 功能是主页中用于图形绘制和交互展示的数学专属能力。用户需要先切换到数学学科，再通过聊天框下方的 `GGB` 按钮进入相关流程。</p>
                        <ul>
                          <li>该功能仅在数学学科下提供，不同学科不会显示为主要绘图入口。</li>
                          <li>适合用于几何构图、函数图像、立体图形和交互式数学探索。</li>
                        </ul>
                      </article>

                      <article id="home-ggb-entry" className="help-content-card help-feature-card">
                        <div className="help-feature-copy">
                          <p className="help-section-mini">功能入口</p>
                          <h3>点击聊天框下方的 GGB 按钮</h3>
                          <p>用户在数学学科下进入主页后，可以通过聊天框下方的 `GGB` 按钮发起图形绘制请求，并让 Synesis 根据输入内容生成可交互的图形结果。</p>
                          <ul>
                            <li>`GGB` 按钮位于聊天框底部功能区，与其他辅助按钮并列显示。</li>
                            <li>输入绘图需求后，可以进入生成与预览流程。</li>
                          </ul>
                        </div>
                        <div className="help-theme-stack">
                          <div className="help-image-placeholder help-inline-image-placeholder">
                            <img className="help-inline-feature-image" src={homeGgbButtonImage} alt="聊天框下方的 GGB 按钮" />
                          </div>
                          <div className="help-image-placeholder help-inline-image-placeholder">
                            <img className="help-inline-feature-image" src={homeGgbPreviewEntryImage} alt="GGB 生成功能预览入口" />
                          </div>
                        </div>
                      </article>

                      <article id="home-ggb-2d" className="help-content-card help-feature-card">
                        <div className="help-feature-copy">
                          <p className="help-section-mini">2D 图形</p>
                          <h3>支持 2D 图形绘制</h3>
                          <p>GGB 可以生成平面几何和函数类的 2D 图形，适合用于点、线、圆、角度关系和函数图像等内容的展示与验证。</p>
                          <ul>
                            <li>用户可以围绕题目条件生成对应图形，并继续观察图中关系。</li>
                            <li>生成后的 2D 图形支持进一步调整和创作，不局限于一次性静态结果。</li>
                          </ul>
                        </div>
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={homeGgb2dImage} alt="GGB 2D 图形预览" />
                        </div>
                      </article>

                      <article id="home-ggb-3d" className="help-content-card help-feature-card">
                        <div className="help-feature-copy">
                          <p className="help-section-mini">3D 图形</p>
                          <h3>支持 3D 图形绘制与动态展示</h3>
                          <p>GGB 同样支持 3D 图形绘制，适合用来展示空间几何、立体结构和三维坐标关系。生成后的图形具有动态效果，用户可以继续操作、旋转和自由发挥创作。</p>
                          <ul>
                            <li>适合用于空间几何题、立体模型和三维关系的可视化表达。</li>
                            <li>图形不是固定图片，而是可交互的动态对象，便于继续观察和修改。</li>
                          </ul>
                        </div>
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={homeGgb3dImage} alt="GGB 3D 图形预览" />
                        </div>
                      </article>
                    </div>

                    <aside className="help-doc-toc">
                      <p className="help-doc-toc-label">目录</p>
                      <div className="help-doc-toc-list">
                        <a href="#home-ggb-overview" className="help-doc-toc-link">GGB 概览</a>
                        <a href="#home-ggb-entry" className="help-doc-toc-link">功能入口</a>
                        <a href="#home-ggb-2d" className="help-doc-toc-link">2D 图形</a>
                        <a href="#home-ggb-3d" className="help-doc-toc-link">3D 图形</a>
                      </div>
                    </aside>
                  </div>
                </>
              ) : isHomeFormulaPage ? (
                <>
                  <div className="help-doc-layout">
                    <div className="help-doc-main">
                      <article id="home-formula-overview" className="help-content-card help-home-topic-card">
                        <p className="help-section-mini">公式库功能</p>
                        <h3>公式库包含基础公式与手写识别功能</h3>
                        <p>公式库功能用于帮助用户快速查找本学科常用公式，并支持将手写公式自动识别为可编辑内容，方便继续插入到当前学习流程中使用。</p>
                        <ul>
                          <li>基础公式库适合快速查阅本学科常用公式与表达式。</li>
                          <li>手写识别适合将纸面或手写输入内容转换为可继续编辑的公式结果。</li>
                        </ul>
                      </article>

                      <article id="home-formula-entry" className="help-content-card help-feature-card">
                        <div className="help-feature-copy">
                          <p className="help-section-mini">功能入口</p>
                          <h3>点击聊天框下方的公式库按钮</h3>
                          <p>用户可以通过聊天框下方的公式库按钮进入公式面板，在这里切换查看基础公式库或使用手写识别功能。</p>
                          <ul>
                            <li>该按钮位于聊天框底部功能区，适合作为公式相关操作的统一入口。</li>
                            <li>进入后可以在“公式库”和“手写识别”两个标签间切换。</li>
                          </ul>
                        </div>
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={homeFormulaButtonImage} alt="聊天框下方的公式库按钮" />
                        </div>
                      </article>

                      <article id="home-formula-library" className="help-content-card help-feature-card">
                        <div className="help-feature-copy">
                          <p className="help-section-mini">基础公式库</p>
                          <h3>查看该学科会用到的基本公式</h3>
                          <p>公式库会按照当前学科整理常用公式内容，用户可以在列表中查看对应章节的基础公式，并将需要的公式直接插入到当前使用场景中。</p>
                          <ul>
                            <li>适合在解题、复习或整理知识点时快速查找对应公式。</li>
                            <li>点击某条公式后，可以查看公式内容及简要说明，并执行插入操作。</li>
                          </ul>
                        </div>
                        <div className="help-theme-stack">
                          <div className="help-image-placeholder help-inline-image-placeholder">
                            <img className="help-inline-feature-image" src={homeFormulaLibraryImage} alt="基础公式库列表" />
                          </div>
                          <div className="help-image-placeholder help-inline-image-placeholder">
                            <img className="help-inline-feature-image" src={homeFormulaInsertImage} alt="公式插入示意" />
                          </div>
                        </div>
                      </article>

                      <article id="home-formula-handwriting" className="help-content-card help-feature-card">
                        <div className="help-feature-copy">
                          <p className="help-section-mini">手写识别</p>
                          <h3>支持手写公式自动识别</h3>
                          <p>在“手写识别”标签下，用户可以书写公式内容，系统会自动识别并将结果转换为可继续编辑的数学表达式。</p>
                          <ul>
                            <li>适合处理键盘不方便直接输入的公式内容。</li>
                            <li>识别结果会显示在下方区域，用户也可以继续手动编辑 LaTeX 表达式。</li>
                          </ul>
                        </div>
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={homeFormulaHandwritingImage} alt="手写公式识别界面" />
                        </div>
                      </article>
                    </div>

                    <aside className="help-doc-toc">
                      <p className="help-doc-toc-label">目录</p>
                      <div className="help-doc-toc-list">
                        <a href="#home-formula-overview" className="help-doc-toc-link">公式库概览</a>
                        <a href="#home-formula-entry" className="help-doc-toc-link">功能入口</a>
                        <a href="#home-formula-library" className="help-doc-toc-link">基础公式库</a>
                        <a href="#home-formula-handwriting" className="help-doc-toc-link">手写识别</a>
                      </div>
                    </aside>
                  </div>
                </>
              ) : isHomeFilePage ? (
                <>
                  <div className="help-doc-layout">
                    <div className="help-doc-main">
                      <article id="home-file-overview" className="help-content-card help-home-topic-card">
                        <p className="help-section-mini">插入文件</p>
                        <h3>通过插入文件补充学习材料</h3>
                        <p>插入文件功能用于把图片、文档或其他学习资料带入当前对话流程，帮助 Synesis 基于文件内容继续分析、讲解和处理。</p>
                        <ul>
                          <li>适合在仅靠文字难以完整表达题目或资料内容时使用。</li>
                          <li>文件进入当前对话后，用户可以继续围绕文件内容发起追问。</li>
                        </ul>
                      </article>

                      <article id="home-file-entry" className="help-content-card help-feature-card">
                        <div className="help-feature-copy">
                          <p className="help-section-mini">功能入口</p>
                          <h3>点击聊天框下方的插入文件按钮</h3>
                          <p>用户可以通过聊天框下方的插入文件按钮，把需要分析的学习材料加入当前会话。按钮位于聊天框底部功能区，适合作为文件类输入的统一入口。</p>
                          <ul>
                            <li>可用于上传题目截图、练习材料、讲义内容或其他学习相关文件。</li>
                            <li>文件插入后，Synesis 可以继续结合文件内容生成回答。</li>
                          </ul>
                        </div>
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={homeFileButtonImage} alt="聊天框下方的插入文件按钮" />
                        </div>
                      </article>

                      <article id="home-file-usage" className="help-content-card help-home-topic-card">
                        <p className="help-section-mini">使用场景</p>
                        <h3>适合配合题目、资料和图片内容使用</h3>
                        <p>当用户需要让系统直接读取图像、文件或资料内容时，可以通过插入文件功能补充上下文，再继续进行讲解、分析和问答。</p>
                        <ul>
                          <li>适合处理题目截图、课堂笔记、资料片段和需要结合原始内容理解的问题。</li>
                          <li>文件输入可以减少手动转写内容的步骤，提高提问效率。</li>
                        </ul>
                      </article>
                    </div>

                    <aside className="help-doc-toc">
                      <p className="help-doc-toc-label">目录</p>
                      <div className="help-doc-toc-list">
                        <a href="#home-file-overview" className="help-doc-toc-link">插入文件概览</a>
                        <a href="#home-file-entry" className="help-doc-toc-link">功能入口</a>
                        <a href="#home-file-usage" className="help-doc-toc-link">使用场景</a>
                      </div>
                    </aside>
                  </div>
                </>
              ) : isHomeSettingsPage ? (
                <>
                  <div className="help-doc-layout">
                    <div className="help-doc-main">
                      <article id="home-settings-overview" className="help-content-card help-home-topic-card">
                        <p className="help-section-mini">个人设置</p>
                        <h3>点击左下角账户进入个人设置</h3>
                        <p>用户可以点击左下角的账户区域打开菜单，并从中进入个人设置相关页面。这里主要包含 `Account Settings` 和 `Help & Support` 两个常用入口。</p>
                        <ul>
                          <li>`Account Settings` 用于管理个人信息与账户资料。</li>
                          <li>`Help & Support` 用于获取团队帮助与支持信息。</li>
                        </ul>
                      </article>

                      <article id="home-settings-entry" className="help-content-card help-feature-card">
                        <div className="help-feature-copy">
                          <p className="help-section-mini">功能入口</p>
                          <h3>通过左下角账户打开设置菜单</h3>
                          <p>左下角账户区域是个人设置的统一入口。点击后可以展开菜单，并继续进入账户设置或帮助支持页面。</p>
                          <ul>
                            <li>适合在完成主页操作后进入个人资料与帮助相关内容。</li>
                            <li>菜单中同时提供 `Account Settings`、`Help & Support` 和退出登录等选项。</li>
                          </ul>
                        </div>
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={homeSettingsMenuImage} alt="左下角账户菜单" />
                        </div>
                      </article>

                      <article id="home-settings-account" className="help-content-card help-feature-card">
                        <div className="help-feature-copy">
                          <p className="help-section-mini">Account Settings</p>
                          <h3>设置个人信息</h3>
                          <p>`Account Settings` 页面用于管理用户的个人资料和账户信息。用户可以在这里查看或修改头像、昵称、个人简介、学习目标和所在地等内容。</p>
                          <ul>
                            <li>适合用于维护个人资料和学习者展示信息。</li>
                            <li>个人信息更新后，可以更好地匹配后续的个性化学习体验。</li>
                          </ul>
                        </div>
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={homeSettingsProfileImage} alt="Account Settings 页面" />
                        </div>
                      </article>

                      <article id="home-settings-support" className="help-content-card help-home-topic-card">
                        <p className="help-section-mini">Help & Support</p>
                        <h3>获取团队帮助与支持</h3>
                        <p>`Help & Support` 用于帮助用户在使用过程中获取团队支持。当用户遇到问题、需要反馈或希望获得进一步帮助时，可以通过这一入口继续联系和获取说明。</p>
                        <ul>
                          <li>适合用于处理使用疑问、问题反馈和帮助获取。</li>
                          <li>这一入口让用户能够在需要时快速找到支持渠道。</li>
                        </ul>
                      </article>
                    </div>

                    <aside className="help-doc-toc">
                      <p className="help-doc-toc-label">目录</p>
                      <div className="help-doc-toc-list">
                        <a href="#home-settings-overview" className="help-doc-toc-link">个人设置概览</a>
                        <a href="#home-settings-entry" className="help-doc-toc-link">功能入口</a>
                        <a href="#home-settings-account" className="help-doc-toc-link">Account Settings</a>
                        <a href="#home-settings-support" className="help-doc-toc-link">Help & Support</a>
                      </div>
                    </aside>
                  </div>
                </>
              ) : isHomeChatPage ? (
                <>
                  <div className="help-doc-layout">
                    <div className="help-doc-main">
                      <article id="home-chat-overview" className="help-content-card help-home-topic-card">
                        <p className="help-section-mini">与 Synesis 聊天</p>
                        <h3>可以围绕学习问题持续对话</h3>
                        <p>与 Synesis 聊天是用户最直接的学习入口。用户可以围绕题目、知识点、公式、做题思路、错题整理和复习规划等内容持续发起对话。</p>
                        <ul>
                          <li>适合在学习过程中随时提问、追问和继续展开某个主题。</li>
                          <li>用户无需一次性把问题表达得非常完整，也可以通过连续对话逐步明确需求。</li>
                        </ul>
                      </article>

                      <article id="home-chat-topics" className="help-content-card help-feature-card">
                        <div className="help-feature-copy">
                          <p className="help-section-mini">能聊什么</p>
                          <h3>可以讨论题目、概念、公式和做题思路</h3>
                          <p>Synesis 支持围绕不同类型的学习内容进行交流，不仅能回答单个问题，也能陪伴用户逐步推进理解和练习。</p>
                          <ul>
                            <li>可以聊题目讲解、知识概念、公式含义、解题思路和错题订正。</li>
                            <li>也可以围绕某个章节、某类题型或一个学习目标持续展开讨论。</li>
                          </ul>
                        </div>
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={homeChatOverviewImage} alt="Synesis 聊天示例" />
                        </div>
                      </article>

                      <article id="home-chat-solutions" className="help-content-card help-home-topic-card">
                        <p className="help-section-mini">能解决什么问题</p>
                        <h3>帮助用户完成讲解、分析与学习推进</h3>
                        <p>Synesis 不只是回答问题，还可以帮助用户把学习过程继续推进下去。无论是遇到不会做的题目，还是需要梳理概念、总结错题或组织复习，都可以通过聊天来完成。</p>
                        <ul>
                          <li>可以帮助用户理解题目、拆解步骤、澄清概念和定位错误原因。</li>
                          <li>也可以用于整理知识点、生成学习思路，并辅助后续学习安排。</li>
                        </ul>
                      </article>
                    </div>

                    <aside className="help-doc-toc">
                      <p className="help-doc-toc-label">目录</p>
                      <div className="help-doc-toc-list">
                        <a href="#home-chat-overview" className="help-doc-toc-link">聊天概览</a>
                        <a href="#home-chat-topics" className="help-doc-toc-link">能聊什么</a>
                        <a href="#home-chat-solutions" className="help-doc-toc-link">能解决什么问题</a>
                      </div>
                    </aside>
                  </div>
                </>
              ) : isHomeManimPage ? (
                <>
                  <div className="help-doc-layout">
                    <div className="help-doc-main">
                      <article id="home-manim-overview" className="help-content-card help-home-topic-card">
                        <p className="help-section-mini">Manim 功能</p>
                        <h3>通过 Manim 生成为学习服务的视频内容</h3>
                        <p>Manim 功能用于把题目讲解或概念解析转成视频内容，帮助用户通过更直观的动画方式理解过程和变化。</p>
                        <ul>
                          <li>适合处理需要通过动态演示来理解的学习内容。</li>
                          <li>支持围绕题目讲解和概念解析生成对应视频。</li>
                        </ul>
                      </article>

                      <article id="home-manim-entry" className="help-content-card help-feature-card">
                        <div className="help-feature-copy">
                          <p className="help-section-mini">启动入口</p>
                          <h3>先点击聊天框下方的 Manim 按钮</h3>
                          <p>用户需要先点击聊天框下方的 `Manim` 按钮启动 Manim 功能，然后再输入希望生成的视频内容。</p>
                          <ul>
                            <li>`Manim` 按钮位于聊天框底部功能区，与其他辅助按钮并列显示。</li>
                            <li>启动后即可继续输入想要的视频讲解需求。</li>
                          </ul>
                        </div>
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={homeManimButtonImage} alt="聊天框下方的 Manim 按钮" />
                        </div>
                      </article>

                      <article id="home-manim-content" className="help-content-card help-home-topic-card">
                        <p className="help-section-mini">支持内容</p>
                        <h3>支持题目讲解和概念解析</h3>
                        <p>在启动 Manim 后，用户可以直接输入希望生成的视频内容。例如某道题的讲解视频，或者某个知识概念的解析视频。</p>
                        <ul>
                          <li>适合将解题过程、变化过程和抽象概念转成更清晰的视频表达。</li>
                          <li>用户可以根据自己的学习重点决定视频需要讲解的侧重点。</li>
                        </ul>
                      </article>

                      <article id="home-manim-render" className="help-content-card help-feature-card">
                        <div className="help-feature-copy">
                          <p className="help-section-mini">生成过程</p>
                          <h3>视频渲染时间较长，需要耐心等待</h3>
                          <p>Manim 视频生成需要经过渲染过程，因此整体等待时间会比普通文本回答更长。用户提交需求后，可以在页面中查看当前生成状态。</p>
                          <ul>
                            <li>渲染过程会显示当前生成进度，便于了解任务状态。</li>
                            <li>由于视频生成耗时较长，使用时需要适当耐心等待结果完成。</li>
                          </ul>
                        </div>
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={homeManimRenderImage} alt="Manim 视频渲染过程" />
                        </div>
                      </article>
                    </div>

                    <aside className="help-doc-toc">
                      <p className="help-doc-toc-label">目录</p>
                      <div className="help-doc-toc-list">
                        <a href="#home-manim-overview" className="help-doc-toc-link">Manim 概览</a>
                        <a href="#home-manim-entry" className="help-doc-toc-link">启动入口</a>
                        <a href="#home-manim-content" className="help-doc-toc-link">支持内容</a>
                        <a href="#home-manim-render" className="help-doc-toc-link">生成过程</a>
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
                        <li>第四个按钮用于插入文件，适合上传题目截图、资料文件或其他学习材料。</li>
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
              ) : !isHomeSubjectPage && !isHomeGgbPage && !isHomeFormulaPage && !isHomeFilePage && !isHomeSettingsPage && !isHomeChatPage && !isHomeManimPage ? (
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
