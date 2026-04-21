import { useEffect, useMemo, useState } from 'react';
import { Compass, FileText, House, NotebookPen } from 'lucide-react';
import homeOverviewImage from './assets/home-overview.png';
import synesisLogoImage from './assets/synesis-logo.svg';
import homeSidebarNavigationImage from './assets/home-sidebar-navigation.jpeg';
import homeSidebarHistoryImage from './assets/home-sidebar-history.jpeg';
import homeThemeToggleImage from './assets/home-theme-toggle.jpeg';
import homeThemeDarkImage from './assets/home-theme-dark.png';
import homeUserSettingsImage from './assets/home-user-settings.jpeg';
import homeChatInputImage from './assets/home-chat-input.jpeg';
import homeChatPromptsImage from './assets/home-chat-prompts.jpeg';
import homeChatOverviewImage from './assets/home-chat-overview.jpeg';
import homeRightPlanImage from './assets/home-right-plan.jpeg';
import plansGenerateOverviewImage from './assets/plans-generate-overview.png';
import homeRightHeatImage from './assets/home-right-heat.jpeg';
import homeSubjectSelectionImage from './assets/home-subject-selection.jpeg';
import homeSubjectTopButtonImage from './assets/home-subject-top-button.jpeg';
import plansAdjustAgentImage from './assets/plans-adjust-agent.png';
import plansAdjustEditImage from './assets/plans-adjust-edit.png';
import plansGenerateDayImage from './assets/plans-generate-day.png';
import plansGenerateWeekImage from './assets/plans-generate-week.png';
import homeGgbButtonImage from './assets/home-ggb-button.jpeg';
import homeGgbPreviewEntryImage from './assets/home-ggb-preview-entry.jpeg';
import homeGgb2dImage from './assets/home-ggb-2d.jpeg';
import homeGgb3dImage from './assets/home-ggb-3d.jpeg';
import homeManimButtonImage from './assets/home-manim-button.jpeg';
import homeManimPreviewVideo from './assets/home-manim-preview.mp4';
import homeManimPreviewStillImage from './assets/home-manim-preview-still.png';
import homeManimRenderImage from './assets/home-manim-render.jpeg';
import homeFormulaButtonImage from './assets/home-formula-button.jpeg';
import homeFormulaLibraryImage from './assets/home-formula-library.jpeg';
import homeFormulaInsertImage from './assets/home-formula-insert.jpeg';
import homeFormulaHandwritingImage from './assets/home-formula-handwriting.jpeg';
import homeFileButtonImage from './assets/home-file-button.jpeg';
import homeSettingsMenuImage from './assets/home-settings-menu.jpeg';
import homeSettingsProfileImage from './assets/home-settings-profile.jpeg';
import notesCreateSidebarImage from './assets/notes-create-sidebar-entry.jpeg';
import notesCreateTagImage from './assets/notes-create-tag-import.jpeg';
import notesCreateSelectionImage from './assets/notes-create-selection.jpeg';
import notesUsageSearchImage from './assets/notes-usage-search.jpeg';
import notesUsageExportImage from './assets/notes-usage-export-pdf.jpeg';
import learningPathModeSelectImage from './assets/learning-path-mode-select.jpeg';
import learningPathManualChildImage from './assets/learning-path-manual-child.png';
import learningPathManualDeleteImageOne from './assets/learning-path-manual-delete-1.png';
import learningPathManualDeleteImageTwo from './assets/learning-path-manual-delete-2.png';
import learningPathManualLayoutImageOne from './assets/learning-path-manual-layout-1.png';
import learningPathManualLayoutImageTwo from './assets/learning-path-manual-layout-2.png';
import learningPathManualToolbarImage from './assets/learning-path-manual-toolbar.jpeg';
import learningPathManualStructureImage from './assets/learning-path-manual-structure.jpeg';
import learningPathSmartStepOneImage from './assets/learning-path-smart-step-1.jpeg';
import learningPathSmartStepTwoImage from './assets/learning-path-smart-step-2.jpeg';
import learningPathSmartStepThreeImage from './assets/learning-path-smart-step-3.jpeg';
import learningPathSmartConfirmDraftImage from './assets/learning-path-smart-confirm-draft.jpeg';
import learningPathSmartResultImage from './assets/learning-path-smart-result.jpeg';

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

type PreviewImage = {
  src: string;
  alt: string;
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
      '计划与总结模块帮助用户把学习目标变成当天或本周可执行的安排，并在完成学习后留下清晰回顾。它更关注“今天做什么、怎么推进、学完后记住什么”这条完整学习链路。',
    purpose: [
      '帮助用户把模糊的学习目标拆成更清晰的日计划或周计划。',
      '帮助用户在学习过程中持续查看进度、调整节奏和优化安排。',
      '帮助用户在学习结束后沉淀每日总结，形成后续复习依据。',
    ],
    entry: [
      '从左侧导航栏进入计划与总结相关页面。',
      '也可以从主页右侧“今日计划”卡片进入相关操作。',
      '已有计划后，还可以继续围绕当前计划提出新的调整诉求。',
    ],
    actions: [
      '先根据今天或本周的学习需求生成一版计划安排。',
      '查看系统给出的计划方案，并决定是否继续确认执行。',
      '在执行过程中按计划逐项推进，必要时继续调整内容。',
      '学习完成后查看总结内容，回顾当天收获与下一步方向。',
    ],
    tips: [
      '建议单独拆成“生成计划”“执行与优化”“学习总结”三个小节来说明。',
      '整段说明应突出用户体验和使用流程，而不是实现方式。',
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
const plansSubsections: HomeSubsection[] = [
  {
    id: 'plans-generate',
    label: '生成计划',
    title: '生成计划',
    intro: '学习计划支持按日计划和周计划两种方式生成内容，用户可以先表达自己的学习需求，再查看系统给出的一版方案。',
    bullets: [
      '日计划更适合安排今天可投入的时间和具体任务。',
      '周计划更适合梳理这一周的学习重点和整体节奏。',
      '系统会先给出一版方案，用户确认后再正式生成计划。',
    ],
  },
  {
    id: 'plans-adjust',
    label: '执行与优化',
    title: '执行与优化',
    intro: '计划生成后，用户可以一边执行一边调整，让计划始终贴合自己的真实学习节奏。',
    bullets: [
      '可以直接勾选完成状态，随时知道自己推进到了哪里。',
      '如果安排不合适，可以继续修改计划内容，而不是整份重来。',
      '优化后的结果仍然围绕当前计划展开，更适合连续推进学习。',
    ],
  },
  {
    id: 'plans-summary',
    label: '学习总结',
    title: '学习总结',
    intro: '学习总结用于在完成学习后回看当天内容，把执行过的任务、重点结论和后续方向沉淀下来。',
    bullets: [
      '总结会按天积累，方便之后回看和复习。',
      '它更适合帮助用户整理“今天学了什么、还差什么、下一步做什么”。',
      '和学习计划配合使用时，更容易形成完整的学习闭环。',
    ],
  },
];
const notesSubsections: HomeSubsection[] = [
  {
    id: 'notes-create',
    label: '笔记创建',
    title: '笔记创建',
    intro: '智能笔记支持把当前学习过程中的重点内容沉淀为结构化笔记，方便后续持续补充与回看。',
    bullets: [
      '可以从智能笔记模块中直接发起新建笔记。',
      '也可以在聊天、学习路径或计划总结等使用过程中，把值得保留的内容进一步整理到笔记里。',
      '创建时建议优先围绕一个明确主题，避免把过多零散内容混在同一篇笔记中。',
    ],
  },
  {
    id: 'notes-usage',
    label: '使用方法',
    title: '使用方法',
    intro: '创建完成后，智能笔记既可以作为阶段性学习记录，也可以作为后续复习、整理和查找的重要资料入口。',
    bullets: [
      '可以回看已保存的重点内容，并继续补充理解、例题和结论。',
      '适合在复习前快速浏览关键知识点，帮助用户恢复上下文。',
      '建议把笔记和学习路径、每日计划配合使用，让记录、执行和复习形成连续闭环。',
    ],
  },
];
const learningPathSubsections: HomeSubsection[] = [
  {
    id: 'learning-path-manual',
    label: '手动生成',
    title: '手动生成',
    intro: '学习路径支持用户手动编辑路径结构，适合在已有思路基础上自行搭建知识框架。',
    bullets: [
      '支持围绕当前节点继续补充下级节点与平级节点。',
      '支持自动平和布局，帮助整体结构更清晰。',
      '支持删除不需要的节点，方便随时调整路径。',
    ],
  },
  {
    id: 'learning-path-smart',
    label: '智能生成',
    title: '智能生成',
    intro: '智能生成适合快速搭建学习路径草稿，用户可以沿着系统步骤逐步确认后再执行生成。',
    bullets: [
      '按照页面流程逐步输入主题、范围与生成要求。',
      '在最终确认前，可以补充用户自己的想法和目标。',
      '生成后仍可继续手动调整，使路径更贴合个人计划。',
    ],
  },
  {
    id: 'learning-path-recommendation',
    label: '建议使用方式',
    title: '建议使用方式',
    intro: '建议先借助智能生成得到一版基础路径，再结合 Synesis 的输出与自己的计划继续修正。',
    bullets: [
      '先用智能生成快速建立初始框架。',
      '在确认执行前，结合 Synesis 输出补充自己的学习想法。',
      '生成完成后，再根据个人节奏和计划手动调整学习路径。',
    ],
  },
];
const defaultHomeSubsectionId = homeSubsections[0].id;
const defaultPlansSubsectionId = plansSubsections[0].id;
const defaultNotesSubsectionId = notesSubsections[0].id;
const defaultLearningPathSubsectionId = learningPathSubsections[0].id;
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

const getPlansSubsectionFromHash = (hash: string): HomeSubsection => {
  const matchedSubsection = plansSubsections.find((item) => item.id === hash);
  return matchedSubsection ?? plansSubsections[0];
};

const getNotesSubsectionFromHash = (hash: string): HomeSubsection => {
  const matchedSubsection = notesSubsections.find((item) => item.id === hash);
  return matchedSubsection ?? notesSubsections[0];
};

const getLearningPathSubsectionFromHash = (hash: string): HomeSubsection => {
  const matchedSubsection = learningPathSubsections.find((item) => item.id === hash);
  return matchedSubsection ?? learningPathSubsections[0];
};

function App() {
  const [currentHash, setCurrentHash] = useState<string>(getHashValue);
  const [previewImage, setPreviewImage] = useState<PreviewImage | null>(null);

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
    if (currentHash === 'learning-path') {
      window.location.replace(`#${defaultLearningPathSubsectionId}`);
    }
    if (currentHash === 'plans') {
      window.location.replace(`#${defaultPlansSubsectionId}`);
    }
    if (currentHash === 'notes') {
      window.location.replace(`#${defaultNotesSubsectionId}`);
    }
  }, [currentHash]);

  useEffect(() => {
    if (!previewImage) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPreviewImage(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewImage]);

  const activeSectionId = useMemo(() => getSectionFromHash(currentHash), [currentHash]);
  const activeSection = useMemo(
    () => guideSections.find((section) => section.id === activeSectionId) ?? guideSections[0],
    [activeSectionId],
  );
  const activeHomeSubsection = useMemo(() => getHomeSubsectionFromHash(currentHash), [currentHash]);
  const activePlansSubsection = useMemo(() => getPlansSubsectionFromHash(currentHash), [currentHash]);
  const activeNotesSubsection = useMemo(() => getNotesSubsectionFromHash(currentHash), [currentHash]);
  const activeLearningPathSubsection = useMemo(
    () => getLearningPathSubsectionFromHash(currentHash),
    [currentHash],
  );
  const ActiveIcon = activeSection.icon;
  const isHomeSection = activeSection.id === 'home';
  const isPlansSection = activeSection.id === 'plans';
  const isLearningPathSection = activeSection.id === 'learning-path';
  const isNotesSection = activeSection.id === 'notes';
  const isHomePageIntro = activeHomeSubsection.id === 'home-page-intro';
  const isHomeSubjectPage = activeHomeSubsection.id === 'home-subject';
  const isHomeGgbPage = activeHomeSubsection.id === 'home-ggb';
  const isHomeFormulaPage = activeHomeSubsection.id === 'home-formula';
  const isHomeFilePage = activeHomeSubsection.id === 'home-image';
  const isHomeSettingsPage = activeHomeSubsection.id === 'home-settings';
  const isHomeChatPage = activeHomeSubsection.id === 'home-chat';
  const isHomeManimPage = activeHomeSubsection.id === 'home-manim';
  const activeSubsection = isHomeSection
    ? activeHomeSubsection
    : isPlansSection
      ? activePlansSubsection
    : isLearningPathSection
      ? activeLearningPathSubsection
    : isNotesSection
      ? activeNotesSubsection
      : null;
  const pageTitle = activeSubsection ? activeSubsection.title : activeSection.title;
  const pageIntro = activeSubsection
    ? activeSubsection.intro
    : '当前页面采用分页面说明结构。点击左侧目录或顶部导航后，会直接切换到对应说明页，而不是继续在同一页面里堆叠内容。';

  const handleImagePreview = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLImageElement)) return;

    const isPreviewable =
      target.classList.contains('help-inline-feature-image') ||
      target.classList.contains('help-overview-image');

    if (!isPreviewable) return;

    setPreviewImage({
      src: target.currentSrc || target.src,
      alt: target.alt || '图片预览',
    });
  };

  return (
    <div className="help-shell" onClick={handleImagePreview}>
      <header className="help-topbar">
        <div className="help-topbar-inner">
          <a className="help-brand" href={`#${defaultHomeSubsectionId}`}>
            <span className="help-brand-mark">
              <img className="help-brand-logo" src={synesisLogoImage} alt="Synesis logo" />
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
                href={
                  section.id === 'home'
                    ? `#${defaultHomeSubsectionId}`
                    : section.id === 'plans'
                      ? `#${defaultPlansSubsectionId}`
                    : section.id === 'learning-path'
                      ? `#${defaultLearningPathSubsectionId}`
                    : section.id === 'notes'
                      ? `#${defaultNotesSubsectionId}`
                      : `#${section.id}`
                }
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
                    href={
                      section.id === 'home'
                        ? `#${defaultHomeSubsectionId}`
                        : section.id === 'plans'
                          ? `#${defaultPlansSubsectionId}`
                        : section.id === 'learning-path'
                          ? `#${defaultLearningPathSubsectionId}`
                        : section.id === 'notes'
                          ? `#${defaultNotesSubsectionId}`
                          : `#${section.id}`
                    }
                    className={`help-sidebar-link ${section.id === activeSection.id ? 'is-active' : ''}`}
                  >
                    <Icon size={16} />
                    <span>{section.navLabel}</span>
                  </a>
                );
              })}
            </div>

            {isHomeSection || isPlansSection || isLearningPathSection || isNotesSection ? (
              <div className="help-sidebar-subnav-group">
                <p className="help-sidebar-label">
                  {isHomeSection
                    ? '主页目录'
                    : isPlansSection
                      ? '计划与总结目录'
                    : isLearningPathSection
                      ? '学习路径目录'
                      : '智能笔记目录'}
                </p>
                <div className="help-sidebar-subnav">
                  {(isHomeSection
                    ? homeSubsections
                    : isPlansSection
                      ? plansSubsections
                    : isLearningPathSection
                      ? learningPathSubsections
                      : notesSubsections).map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`help-sidebar-sublink ${
                        item.id === (
                          isHomeSection
                            ? activeHomeSubsection.id
                            : isPlansSection
                              ? activePlansSubsection.id
                            : isLearningPathSection
                              ? activeLearningPathSubsection.id
                              : activeNotesSubsection.id
                        )
                          ? 'is-active'
                          : ''
                      }`}
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
            {activeSubsection ? `  >  ${activeSubsection.label}` : ''}
          </div>

          <section className="help-hero">
            <p className="help-kicker">How To Use Synesis</p>
            <h1 className={activeSubsection ? 'help-hero-title-subpage' : undefined}>{pageTitle}</h1>
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

                      <article id="home-manim-preview" className="help-content-card help-feature-card">
                        <div className="help-feature-copy">
                          <p className="help-section-mini">视频预览</p>
                          <h3>生成完成后可直接预览教学动画视频</h3>
                          <p>当 Manim 任务生成完成后，用户可以直接在页面中预览结果视频，更直观地查看讲解动画、图形变化和整体节奏。</p>
                          <ul>
                            <li>适合快速确认生成结果是否符合当前学习需求。</li>
                            <li>如果视频方向还需要调整，也可以继续补充新的生成要求。</li>
                          </ul>
                        </div>
                        <div className="help-theme-stack">
                          <div className="help-image-placeholder help-inline-image-placeholder">
                            <img className="help-inline-feature-image" src={homeManimPreviewStillImage} alt="Manim 视频预览界面截图" />
                          </div>
                          <div className="help-image-placeholder help-inline-image-placeholder">
                            <video
                              className="help-inline-feature-video"
                              src={homeManimPreviewVideo}
                              controls
                              playsInline
                              preload="metadata"
                            />
                          </div>
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
                        <a href="#home-manim-preview" className="help-doc-toc-link">视频预览</a>
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

          {isPlansSection ? (
            <section className="help-overview">
              {activePlansSubsection.id === 'plans-generate' ? (
                <div className="help-doc-layout">
                  <div className="help-doc-main">
                    <article id="plans-generate-overview" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">生成计划</p>
                        <h3>学习计划支持日计划与周计划两种生成方式</h3>
                        <p>
                          用户进入学习计划后，可以先选择“日计划”或“周计划”。无论选择哪一种，系统都会先整理出一版方案，让用户先看过一遍，再决定是否正式生成。
                        </p>
                        <ul>
                          <li>日计划更适合安排今天能投入多少时间、每段时间做什么。</li>
                          <li>周计划更适合安排这一周的重点学科和整体学习方向。</li>
                          <li>第一次生成时，系统会先给出一版方案，方便用户先判断是否合适。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={plansGenerateOverviewImage} alt="学习计划页面中的日计划与周计划切换空状态" />
                      </div>
                    </article>

                    <article id="plans-generate-entry" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">入口位置</p>
                        <h3>可从主页“今日计划”卡片进入，也可直接打开学习计划页</h3>
                        <p>
                          用户既可以从主页右侧的“今日计划”卡片进入，也可以直接进入学习计划页面。进入后，页面左侧会帮助用户切换模式、查看进度并继续调整当前计划。
                        </p>
                        <ul>
                          <li>主页卡片适合从工作台快速进入当天计划。</li>
                          <li>计划页更适合在生成之后持续查看、执行和调整。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={homeRightPlanImage} alt="主页右侧今日计划卡片入口" />
                      </div>
                    </article>

                    <article id="plans-generate-day" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">日计划流程</p>
                        <h3>日计划会按模板与参数逐步引导生成</h3>
                        <p>
                          日计划更强调“今天具体怎么安排”。系统会一步步引导用户设置学习时长、专注节奏、可用时间段和学科偏好，帮助用户把今天的任务安排得更清楚。
                        </p>
                        <ul>
                          <li>如果之前有类似安排，可以继续沿用上次配置或模板。</li>
                          <li>也可以重新设置今天可投入的时间和重点学科。</li>
                          <li>最后再补充一句今天的具体学习诉求，让生成结果更贴合当下状态。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={plansGenerateDayImage} alt="日计划生成流程中的参数配置与输入界面" />
                      </div>
                    </article>

                    <article id="plans-generate-week" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">周计划流程</p>
                        <h3>周计划表单更简洁，重点在学科和本周建议</h3>
                        <p>
                          周计划更适合用来安排这一周的大方向。相比日计划，它不强调具体到每一个时间段，而是更关注“这周重点学什么、怎么推进更合适”。
                        </p>
                        <ul>
                          <li>先确定本周重点关注的学科。</li>
                          <li>再补充这一周的学习重点、目标或想调整的节奏。</li>
                          <li>生成后同样会先看到一版方案，再决定是否正式采用。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={plansGenerateWeekImage} alt="周计划生成流程中的学科选择与本周建议输入界面" />
                      </div>
                    </article>

                    <article id="plans-generate-proposal" className="help-content-card help-content-card-soft">
                      <p className="help-section-mini">先看方案</p>
                      <h3>系统会先给你一版计划草稿，确认后才正式生成</h3>
                      <p>
                        计划生成不是用户一点击就直接完成。系统会先整理出一版草稿，让用户先看大致安排是否合理；如果觉得方向合适，再继续确认执行，正式生成完整计划。
                      </p>
                      <ul>
                        <li>这样可以减少“一键生成后完全不符合预期”的情况。</li>
                        <li>确认后，系统才会把这份计划正式安排到页面里。</li>
                      </ul>
                    </article>
                  </div>

                  <aside className="help-doc-toc">
                    <p className="help-doc-toc-label">目录</p>
                    <div className="help-doc-toc-list">
                      <a href="#plans-generate-overview" className="help-doc-toc-link">生成计划概览</a>
                      <a href="#plans-generate-entry" className="help-doc-toc-link">入口位置</a>
                      <a href="#plans-generate-day" className="help-doc-toc-link">日计划流程</a>
                      <a href="#plans-generate-week" className="help-doc-toc-link">周计划流程</a>
                      <a href="#plans-generate-proposal" className="help-doc-toc-link">待确认方案</a>
                    </div>
                  </aside>
                </div>
              ) : activePlansSubsection.id === 'plans-adjust' ? (
                <div className="help-doc-layout">
                  <div className="help-doc-main">
                    <article id="plans-adjust-overview" className="help-content-card help-home-topic-card">
                      <p className="help-section-mini">执行与优化</p>
                      <h3>计划生成后可以继续执行、修改和优化</h3>
                      <p>
                        学习计划不是一次性静态结果。生成之后，用户可以边执行边调整：有些内容可以直接在计划里改，有些更适合继续告诉系统“我想怎么调整”，再让系统给出新的安排方案。
                      </p>
                      <ul>
                        <li>计划列表适合处理单项完成状态和少量内容修改。</li>
                        <li>进一步优化时，更适合围绕整体节奏和优先级继续调整。</li>
                        <li>系统给出的优化结果也会先让用户看一遍，再继续执行。</li>
                      </ul>
                    </article>

                    <article id="plans-adjust-edit" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">列表内操作</p>
                        <h3>计划项支持勾选完成与直接编辑</h3>
                        <p>
                          在计划列表中，用户可以直接勾选某项是否完成，也可以打开编辑面板修改单条计划内容。这样更适合在真实学习过程中一边做一边微调，而不是每次都重新生成整份计划。
                        </p>
                        <ul>
                          <li>完成一项就勾选一项，能更直观看到当前进度。</li>
                          <li>如果某个任务安排不合适，可以直接修改内容再继续推进。</li>
                          <li>这种方式更适合处理中途的小调整，而不是大幅重排。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={plansAdjustEditImage} alt="学习计划列表中的完成勾选与编辑操作" />
                      </div>
                    </article>

                    <article id="plans-adjust-agent" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">计划助手</p>
                        <h3>优化当前计划时，AI 会先出方案，再按确认结果执行</h3>
                        <p>
                          当用户觉得当前计划整体还需要调整时，可以继续提出新的修改诉求，例如“把周末安排轻一点”“增加英语听力时间”“减少连续学习时长”。系统会先整理出调整方案，再由用户决定是否采用。
                        </p>
                        <ul>
                          <li>适合处理“整体节奏要改”“优先级要调”“安排不够合理”这类问题。</li>
                          <li>如果新方案还不满意，也可以继续补充想法。</li>
                          <li>只有用户确认之后，系统才会把修改真正应用到当前计划里。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={plansAdjustAgentImage} alt="计划助手中的方案调整与确认执行" />
                      </div>
                    </article>

                    <article id="plans-adjust-stream" className="help-content-card">
                      <p className="help-section-mini">执行过程</p>
                      <h3>执行修改时会逐步返回工具调用和计划更新</h3>
                      <p>
                        当用户确认采用新方案后，页面会逐步刷新当前计划内容。对用户来说，这更像是在看“系统正在根据你的要求重排计划”，而不是突然出现一份完全陌生的新结果。
                      </p>
                      <ul>
                        <li>用户可以清楚知道当前修改还在进行中，还是已经完成。</li>
                        <li>修改完成后，计划列表会更新成新的结果。</li>
                        <li>如果还想继续优化，也可以直接在当前基础上再来一轮。</li>
                      </ul>
                    </article>

                    <article id="plans-adjust-revert" className="help-content-card help-content-card-soft">
                      <p className="help-section-mini">撤销更改</p>
                      <h3>AI 修改前会保留快照，支持恢复到修改前状态</h3>
                      <p>
                        如果这轮优化后的结果并不理想，用户还可以把计划恢复到调整之前的状态。这样在尝试不同安排方式时，会更有安全感，也不容易因为一次修改就把原来的安排彻底打乱。
                      </p>
                      <ul>
                        <li>适合在反复尝试不同安排方式时使用。</li>
                        <li>让用户更敢于尝试优化，而不用担心一改就回不去。</li>
                      </ul>
                    </article>
                  </div>

                  <aside className="help-doc-toc">
                    <p className="help-doc-toc-label">目录</p>
                    <div className="help-doc-toc-list">
                      <a href="#plans-adjust-overview" className="help-doc-toc-link">执行与优化概览</a>
                      <a href="#plans-adjust-edit" className="help-doc-toc-link">列表内操作</a>
                      <a href="#plans-adjust-agent" className="help-doc-toc-link">计划助手</a>
                      <a href="#plans-adjust-stream" className="help-doc-toc-link">执行过程</a>
                      <a href="#plans-adjust-revert" className="help-doc-toc-link">撤销更改</a>
                    </div>
                  </aside>
                </div>
              ) : activePlansSubsection.id === 'plans-summary' ? (
                <div className="help-doc-layout">
                  <div className="help-doc-main">
                    <article id="plans-summary-overview" className="help-content-card help-home-topic-card">
                      <p className="help-section-mini">学习总结</p>
                      <h3>学习总结用于回看当天内容，把学习结果真正沉淀下来</h3>
                      <p>
                        学习计划解决的是“今天做什么”，学习总结解决的是“今天学到了什么”。当一天的学习任务推进之后，系统会把当天的完成情况、重点内容和下一步方向整理成总结，方便用户回看和延续后续学习。
                      </p>
                      <ul>
                        <li>它更适合承担回顾、整理和复习前回看这类任务。</li>
                        <li>相比计划，学习总结更关注已经完成的内容和实际收获。</li>
                        <li>计划与总结结合使用时，更容易形成完整的学习闭环。</li>
                      </ul>
                    </article>

                    <article id="plans-summary-create" className="help-content-card">
                      <p className="help-section-mini">自动沉淀</p>
                      <h3>完成学习任务后，系统会逐步沉淀出每日总结</h3>
                      <p>
                        用户不需要每次都从零开始写回顾。系统会围绕当天的学习内容，把重点任务、完成情况和当天的结果逐步沉淀成一份总结，让回顾动作更轻量，也更容易坚持。
                      </p>
                      <ul>
                        <li>适合在一天学习结束后快速回顾主要收获。</li>
                        <li>也适合在第二天继续学习前，先回看上一天的推进情况。</li>
                      </ul>
                    </article>

                    <article id="plans-summary-review" className="help-content-card">
                      <p className="help-section-mini">回看方式</p>
                      <h3>总结会按日期积累，方便之后集中回看</h3>
                      <p>
                        学习总结不是一次性提示，而是适合被持续积累和回看的内容。按日期保存后，用户之后可以更容易回顾某一天到底学了什么、卡在了哪里、下一步要继续什么。
                      </p>
                      <ul>
                        <li>适合在复习前快速找回之前的学习状态。</li>
                        <li>也适合把零散的每天进展逐步串成阶段性回顾。</li>
                      </ul>
                    </article>

                    <article id="plans-summary-value" className="help-content-card help-content-card-soft">
                      <p className="help-section-mini">使用价值</p>
                      <h3>总结不是重复计划，而是帮助用户看见真实学习结果</h3>
                      <p>
                        计划更关注“接下来做什么”，总结更关注“已经做成了什么”。当用户把这两部分连起来使用时，就更容易把学习从一次次零散执行，变成可回顾、可调整、可持续积累的过程。
                      </p>
                      <ul>
                        <li>它能帮助用户知道自己一天不是“忙过了”，而是真的“学到了”。</li>
                        <li>也能帮助用户把下一步安排建立在真实完成情况之上。</li>
                      </ul>
                    </article>
                  </div>

                  <aside className="help-doc-toc">
                    <p className="help-doc-toc-label">目录</p>
                    <div className="help-doc-toc-list">
                      <a href="#plans-summary-overview" className="help-doc-toc-link">学习总结概览</a>
                      <a href="#plans-summary-create" className="help-doc-toc-link">自动沉淀</a>
                      <a href="#plans-summary-review" className="help-doc-toc-link">回看方式</a>
                      <a href="#plans-summary-value" className="help-doc-toc-link">使用价值</a>
                    </div>
                  </aside>
                </div>
              ) : null}
            </section>
          ) : null}

          {isNotesSection ? (
            <section className="help-overview">
              {activeNotesSubsection.id === 'notes-create' ? (
                <div className="help-doc-layout">
                  <div className="help-doc-main">
                    <article id="notes-create-overview" className="help-content-card help-home-topic-card">
                      <p className="help-section-mini">笔记创建</p>
                      <h3>智能笔记支持三种创建方式</h3>
                      <p>
                        用户可以直接进入智能笔记新建内容，也可以在与 Synesis 的对话过程中把完整回复或局部重点内容沉淀到笔记中，让记录动作尽量发生在学习当下。
                      </p>
                      <ul>
                        <li>支持从左侧导航直接进入智能笔记并开始创建。</li>
                        <li>支持对 Synesis 的整条回复一键加入笔记。</li>
                        <li>支持选中回复中的部分内容，通过划词工具条摘录到笔记。</li>
                      </ul>
                    </article>

                    <article id="notes-create-sidebar-entry" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">方式一</p>
                        <h3>点击左侧“笔记创建”，自动跳转到智能笔记</h3>
                        <p>
                          用户可以通过左侧导航进入智能笔记模块，进入后可直接开始新建笔记。这种方式适合已经明确要整理内容，准备集中编写或补充笔记的场景。
                        </p>
                        <ul>
                          <li>适合从产品主流程中主动进入笔记区域，进行系统整理。</li>
                          <li>进入智能笔记后，可围绕当前主题持续编辑、补充和回看。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={notesCreateSidebarImage} alt="从左侧导航进入智能笔记并创建笔记" />
                      </div>
                    </article>

                    <article id="notes-create-tag-import" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">方式二</p>
                        <h3>点击 Synesis 回复旁的小标签，整条内容自动导入笔记</h3>
                        <p>
                          在 Synesis 的回复区域中，如果当前回复内容适合沉淀为笔记，可以直接点击消息旁的“加入笔记”小标签，将整条回复快速导入智能笔记，无需手动复制整理。
                        </p>
                        <ul>
                          <li>适合整段解释、总结结论或完整解题思路的保存。</li>
                          <li>可以减少重复复制内容的步骤，让对话结果更快沉淀下来。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={notesCreateTagImage} alt="点击回复旁的小标签自动导入笔记" />
                      </div>
                    </article>

                    <article id="notes-create-selection" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">方式三</p>
                        <h3>选中 Synesis 回复中的部分内容，摘录加入笔记</h3>
                        <p>
                          当用户只想保留回复中的某一段重点内容时，可以直接按住并选中该部分文本。选中后会出现摘录工具条，点击后即可把局部内容加入智能笔记。
                        </p>
                        <ul>
                          <li>适合保留定义、关键步骤、易错点或一句高价值结论。</li>
                          <li>相比整条导入，更适合做精简摘录和重点整理。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={notesCreateSelectionImage} alt="划词选择部分 Synesis 回复并加入笔记" />
                      </div>
                    </article>
                  </div>

                  <aside className="help-doc-toc">
                    <p className="help-doc-toc-label">目录</p>
                    <div className="help-doc-toc-list">
                      <a href="#notes-create-overview" className="help-doc-toc-link">笔记创建概览</a>
                      <a href="#notes-create-sidebar-entry" className="help-doc-toc-link">左侧入口创建</a>
                      <a href="#notes-create-tag-import" className="help-doc-toc-link">整条回复导入</a>
                      <a href="#notes-create-selection" className="help-doc-toc-link">划词摘录加入</a>
                    </div>
                  </aside>
                </div>
              ) : activeNotesSubsection.id === 'notes-usage' ? (
                <div className="help-doc-layout">
                  <div className="help-doc-main">
                    <article id="notes-usage-overview" className="help-content-card help-home-topic-card">
                      <p className="help-section-mini">使用方法</p>
                      <h3>智能笔记适合长期保存、持续整理和后续输出</h3>
                      <p>
                        智能笔记不是一次性记录工具，而是用户在学习过程中持续沉淀内容的长期空间。创建后的笔记会被保留下来，用户可以在后续学习中不断补充、修改、检索和导出。
                      </p>
                      <ul>
                        <li>笔记内容会长期保存，方便反复回看和继续积累。</li>
                        <li>支持自由增删修改，适合把零散学习结果逐步整理成稳定资料。</li>
                        <li>支持搜索和导出 PDF，便于后续复习、打印和实体使用。</li>
                      </ul>
                    </article>

                    <article id="notes-usage-storage" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">长期保存</p>
                        <h3>笔记会被持续保留，方便后续反复使用</h3>
                        <p>
                          用户创建完成的笔记不会因为一次学习结束而消失，而是会作为长期资料保留下来。后续无论是回顾旧知识、继续补充内容，还是整理阶段总结，都可以直接基于已有笔记继续推进。
                        </p>
                        <ul>
                          <li>适合把一次次对话结果沉淀成长期可复用的学习资料。</li>
                          <li>用户无需重复整理同样内容，可以在原有笔记基础上持续完善。</li>
                        </ul>
                      </div>
                    </article>

                    <article id="notes-usage-edit" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">编辑管理</p>
                        <h3>支持自由增删修改，笔记可以持续更新</h3>
                        <p>
                          智能笔记支持用户按自己的需要自由调整内容。无论是补充新的理解、删除无用片段，还是修改标题与正文，都可以直接在笔记区域中完成，让笔记随着学习过程不断演进。
                        </p>
                        <ul>
                          <li>适合把初始摘录逐步整理成更清晰、更完整的个人版本。</li>
                          <li>编辑后的内容可继续作为复习、总结和输出的基础材料。</li>
                        </ul>
                      </div>
                    </article>

                    <article id="notes-usage-search" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">搜索查找</p>
                        <h3>支持按标题和内容搜索，快速定位已有笔记</h3>
                        <p>
                          当笔记数量逐渐增多后，用户可以通过搜索功能快速查找需要的记录内容。无论是按标题回找某篇笔记，还是按正文关键词检索过去保存的知识点，都能更高效地定位目标资料。
                        </p>
                        <ul>
                          <li>适合在复习前快速找回某个知识点、题型或历史总结。</li>
                          <li>也方便在已有笔记中继续补充，而不是重复新建相似内容。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={notesUsageSearchImage} alt="智能笔记中的搜索笔记功能" />
                      </div>
                    </article>

                    <article id="notes-usage-export" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">导出 PDF</p>
                        <h3>支持导出为 PDF，方便打印和线下实体使用</h3>
                        <p>
                          用户可以将当前笔记导出为 PDF 文件，便于后续打印、归档或在线下场景中继续使用。对于希望把电子笔记转成纸质资料进行复习、批注和携带的用户来说，这一能力会更加方便。
                        </p>
                        <ul>
                          <li>适合在考试前、阶段复习前或集中整理后导出成实体资料。</li>
                          <li>导出后的 PDF 更方便打印、分享和离线阅读。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={notesUsageExportImage} alt="智能笔记导出为 PDF" />
                      </div>
                    </article>
                  </div>

                  <aside className="help-doc-toc">
                    <p className="help-doc-toc-label">目录</p>
                    <div className="help-doc-toc-list">
                      <a href="#notes-usage-overview" className="help-doc-toc-link">使用方法概览</a>
                      <a href="#notes-usage-storage" className="help-doc-toc-link">长期保存</a>
                      <a href="#notes-usage-edit" className="help-doc-toc-link">增删修改</a>
                      <a href="#notes-usage-search" className="help-doc-toc-link">搜索查找</a>
                      <a href="#notes-usage-export" className="help-doc-toc-link">导出 PDF</a>
                    </div>
                  </aside>
                </div>
              ) : (
                <article className="help-content-card help-home-topic-card">
                  <p className="help-section-mini">{activeNotesSubsection.label}</p>
                  <h3>{activeNotesSubsection.title}</h3>
                  <p>{activeNotesSubsection.intro}</p>
                  <ul>
                    {activeNotesSubsection.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              )}
            </section>
          ) : null}

          {isLearningPathSection ? (
            <section className="help-overview">
              {activeLearningPathSubsection.id === 'learning-path-manual' ? (
                <div className="help-doc-layout">
                  <div className="help-doc-main">
                    <article id="learning-path-manual-overview" className="help-content-card help-home-topic-card">
                      <p className="help-section-mini">手动生成</p>
                      <h3>手动编辑学习路径，适合按自己的思路逐步搭建</h3>
                      <p>
                        手动生成适合已经有大致学习框架的用户。用户可以围绕当前路径节点自行补充新节点、调整结构并删除不需要的内容，让学习路径更贴近自己的理解方式。
                      </p>
                      <ul>
                        <li>可以围绕已有节点继续扩展路径结构。</li>
                        <li>适合边思考边调整，逐步完善知识框架。</li>
                        <li>生成后的结构也更容易和个人计划保持一致。</li>
                      </ul>
                    </article>

                    <article id="learning-path-manual-mode" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">左上角选择</p>
                        <h3>先在左上角选择“手动创建”进入手动生成模式</h3>
                        <p>
                          学习路径支持在左上角切换“智能生成”和“手动创建”。如果用户已经有比较明确的结构思路，可以先切换到手动创建，再围绕当前图谱自行补充和调整路径内容。
                        </p>
                        <ul>
                          <li>适合已经有初步思路，想直接手动搭建路径的场景。</li>
                          <li>进入后可继续围绕当前图谱进行节点编辑与结构调整。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={learningPathModeSelectImage} alt="学习路径左上角选择手动创建" />
                      </div>
                    </article>

                    <article id="learning-path-manual-toolbar" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">顶部操作区</p>
                        <h3>顶部工具栏提供下级节点、平级节点、自动调整布局和删除选中</h3>
                        <p>
                          进入手动创建后，用户可以直接通过顶部工具栏管理学习路径结构。这里集中放置了常用的编辑按钮，方便在搭建过程中快速补充和修正节点。
                        </p>
                        <ul>
                          <li>下级节点：围绕当前节点继续向下细化内容。</li>
                          <li>平级节点：补充与当前节点同一层级的并列内容。</li>
                          <li>自动调整布局：重新整理整体图谱排布。</li>
                          <li>删除选中：移除当前不需要的节点。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={learningPathManualToolbarImage} alt="学习路径手动创建顶部工具栏" />
                      </div>
                    </article>

                    <article id="learning-path-manual-child" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">下级节点</p>
                        <h3>通过顶层节点继续补充下级节点</h3>
                        <p>
                          用户可以从当前顶层节点继续向下扩展，把某个较大的学习主题拆成更具体的下级知识点或步骤。这样可以帮助学习路径从总体方向逐步细化到可执行层面。
                        </p>
                        <ul>
                          <li>适合把抽象主题继续拆解成更具体的小模块。</li>
                          <li>有助于形成更有层级感的学习路径结构。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={learningPathManualChildImage} alt="学习路径中补充下级节点" />
                      </div>
                    </article>

                    <article id="learning-path-manual-sibling" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">平级节点</p>
                        <h3>在同一层级补充平级节点</h3>
                        <p>
                          如果某个阶段下还有并列的重要内容，用户可以直接补充平级节点。这样更适合表达同一层次上的多个并行学习主题，避免误把并列关系写成上下级关系。
                        </p>
                        <ul>
                          <li>适合同一阶段内并列存在的多个知识模块。</li>
                          <li>能让学习路径的结构关系更准确、更清晰。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={learningPathManualStructureImage} alt="学习路径中补充平级节点" />
                      </div>
                    </article>

                    <article id="learning-path-manual-layout" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">自动平和布局</p>
                        <h3>使用自动平和布局整理整体结构</h3>
                        <p>
                          当路径节点逐渐变多后，用户可以借助自动平和布局让整体结构重新排布，使各层级关系更容易阅读和理解。这有助于在继续编辑前先把结构整理清楚。
                        </p>
                        <ul>
                          <li>适合在节点增多后快速整理视觉布局。</li>
                          <li>有助于用户从全局视角查看当前学习路径结构。</li>
                        </ul>
                      </div>
                      <div className="help-theme-stack">
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={learningPathManualLayoutImageOne} alt="学习路径自动平和布局前的图谱结构" />
                        </div>
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={learningPathManualLayoutImageTwo} alt="学习路径自动平和布局后的图谱结构" />
                        </div>
                      </div>
                    </article>

                    <article id="learning-path-manual-delete" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">删除节点</p>
                        <h3>删除不需要的节点，持续修正路径内容</h3>
                        <p>
                          如果某个节点不再需要，或者当前结构需要重新调整，用户可以直接删除对应节点。这样可以避免路径越来越冗余，也方便在生成后继续做个性化修正。
                        </p>
                        <ul>
                          <li>适合清理重复、无关或不再需要的内容。</li>
                          <li>让学习路径在反复调整中保持简洁和可执行。</li>
                        </ul>
                      </div>
                      <div className="help-theme-stack">
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={learningPathManualDeleteImageOne} alt="学习路径中删除节点前的图谱结构" />
                        </div>
                        <div className="help-image-placeholder help-inline-image-placeholder">
                          <img className="help-inline-feature-image" src={learningPathManualDeleteImageTwo} alt="学习路径中删除节点后的图谱结构" />
                        </div>
                      </div>
                    </article>
                  </div>

                  <aside className="help-doc-toc">
                    <p className="help-doc-toc-label">目录</p>
                    <div className="help-doc-toc-list">
                      <a href="#learning-path-manual-overview" className="help-doc-toc-link">手动生成概览</a>
                      <a href="#learning-path-manual-mode" className="help-doc-toc-link">左上角选择</a>
                      <a href="#learning-path-manual-toolbar" className="help-doc-toc-link">顶部操作区</a>
                      <a href="#learning-path-manual-child" className="help-doc-toc-link">下级节点</a>
                      <a href="#learning-path-manual-sibling" className="help-doc-toc-link">平级节点</a>
                      <a href="#learning-path-manual-layout" className="help-doc-toc-link">自动平和布局</a>
                      <a href="#learning-path-manual-delete" className="help-doc-toc-link">删除节点</a>
                    </div>
                  </aside>
                </div>
              ) : activeLearningPathSubsection.id === 'learning-path-smart' ? (
                <div className="help-doc-layout">
                  <div className="help-doc-main">
                    <article id="learning-path-smart-overview" className="help-content-card help-home-topic-card">
                      <p className="help-section-mini">智能生成</p>
                      <h3>按照页面步骤逐步确认后，快速生成学习路径</h3>
                      <p>
                        智能生成适合希望快速获得一版学习路径草稿的用户。用户可以按照页面中的流程逐步输入主题、范围和目标，再在确认执行前补充自己的想法，最后生成学习路径结果。
                      </p>
                      <ul>
                        <li>适合从零开始快速建立一版基础路径。</li>
                        <li>可以结合系统步骤逐步明确学习范围和目标。</li>
                        <li>在确认前保留人工补充空间，让结果更贴合个人需求。</li>
                      </ul>
                    </article>

                    <article id="learning-path-smart-mode" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">左上角选择</p>
                        <h3>先在左上角选择“智能生成”进入流程</h3>
                        <p>
                          如果用户希望系统先给出一版学习路径草稿，可以在左上角切换到“智能生成”。进入后页面会按步骤引导输入学习内容、偏好和个性化要求。
                        </p>
                        <ul>
                          <li>适合从零开始快速生成一版学习路径。</li>
                          <li>后续仍然可以结合个人想法继续补充与修正。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={learningPathModeSelectImage} alt="学习路径左上角选择智能生成" />
                      </div>
                    </article>

                    <article id="learning-path-smart-step-one" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">第一步</p>
                        <h3>先填写学习内容与具体主题</h3>
                        <p>
                          在第一步中，用户需要先确定学习科目和具体学习内容，例如某个章节、某类题型或某一知识主题。这个输入会成为后续路径生成的基础。
                        </p>
                        <ul>
                          <li>建议尽量明确主题范围，避免输入过于宽泛。</li>
                          <li>主题越清晰，生成出的学习路径通常越贴合目标。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={learningPathSmartStepOneImage} alt="学习路径智能生成第一步" />
                      </div>
                    </article>

                    <article id="learning-path-smart-step-two" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">第二步</p>
                        <h3>继续设置学习偏好、难度级别和学习目标</h3>
                        <p>
                          在第二步中，用户可以进一步说明自己更偏向系统化学习、快速入门、项目驱动还是考试导向，同时设置难度级别和学习目标，让路径方向更准确。
                        </p>
                        <ul>
                          <li>适合把“怎么学”“学到什么程度”一起表达清楚。</li>
                          <li>这一步会直接影响路径的节奏、层次和侧重点。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={learningPathSmartStepTwoImage} alt="学习路径智能生成第二步" />
                      </div>
                    </article>

                    <article id="learning-path-smart-step-three" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">第三步</p>
                        <h3>补充重点关注领域、想跳过的内容和已有基础</h3>
                        <p>
                          在第三步中，用户可以继续补充更个性化的配置，例如重点关注哪些内容、希望跳过哪些部分，以及自己已经掌握了哪些基础知识。
                        </p>
                        <ul>
                          <li>适合让路径更贴合真实基础，而不是从完全统一的模板出发。</li>
                          <li>也有助于减少不必要的重复学习内容。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={learningPathSmartStepThreeImage} alt="学习路径智能生成第三步" />
                      </div>
                    </article>

                    <article id="learning-path-smart-confirm" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">确认执行前</p>
                        <h3>在最终确认前，可手动输入用户自己的想法</h3>
                        <p>
                          在正式执行生成之前，页面会先展示系统整理后的阶段方案、预期结果和重点范围。用户可以在这一阶段结合 Synesis 的输出，继续加入自己的学习想法，再决定是否确认执行。
                        </p>
                        <ul>
                          <li>适合补充个人节奏、重点章节、考试目标或时间限制。</li>
                          <li>能让最终生成结果更符合用户自己的实际安排。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={learningPathSmartConfirmDraftImage} alt="学习路径确认执行前输入个人想法" />
                      </div>
                    </article>

                    <article id="learning-path-smart-result" className="help-content-card help-feature-card">
                      <div className="help-feature-copy">
                        <p className="help-section-mini">生成结果</p>
                        <h3>确认执行后，系统会生成可继续调整的学习路径</h3>
                        <p>
                          确认执行后，系统会正式生成学习路径结果。得到的路径并不是完全固定的终稿，用户后续仍然可以结合自己的学习计划继续补充、删减和调整。
                        </p>
                        <ul>
                          <li>适合把智能生成结果作为基础草稿，再继续个性化完善。</li>
                          <li>这样更容易兼顾系统建议与个人执行习惯。</li>
                        </ul>
                      </div>
                      <div className="help-image-placeholder help-inline-image-placeholder">
                        <img className="help-inline-feature-image" src={learningPathSmartResultImage} alt="学习路径智能生成结果" />
                      </div>
                    </article>
                  </div>

                  <aside className="help-doc-toc">
                    <p className="help-doc-toc-label">目录</p>
                    <div className="help-doc-toc-list">
                      <a href="#learning-path-smart-overview" className="help-doc-toc-link">智能生成概览</a>
                      <a href="#learning-path-smart-mode" className="help-doc-toc-link">左上角选择</a>
                      <a href="#learning-path-smart-step-one" className="help-doc-toc-link">第一步</a>
                      <a href="#learning-path-smart-step-two" className="help-doc-toc-link">第二步</a>
                      <a href="#learning-path-smart-step-three" className="help-doc-toc-link">第三步</a>
                      <a href="#learning-path-smart-confirm" className="help-doc-toc-link">确认执行前补充想法</a>
                      <a href="#learning-path-smart-result" className="help-doc-toc-link">生成结果</a>
                    </div>
                  </aside>
                </div>
              ) : activeLearningPathSubsection.id === 'learning-path-recommendation' ? (
                <div className="help-doc-layout">
                  <div className="help-doc-main">
                    <article id="learning-path-recommendation-overview" className="help-content-card help-home-topic-card">
                      <p className="help-section-mini">建议使用方式</p>
                      <h3>先智能生成，再结合自己的计划继续调整</h3>
                      <p>
                        学习路径最推荐的使用方式，是先让系统给出一版结构化结果，再由用户结合 Synesis 的输出和自己的实际目标进行二次修正。这样既能提高效率，也能保留路径的个性化程度。
                      </p>
                      <ul>
                        <li>先通过智能生成快速得到初始路径。</li>
                        <li>在确认执行前，把 Synesis 的建议和用户自己的想法结合起来。</li>
                        <li>路径生成后，再按个人计划继续补充、删减和调整。</li>
                      </ul>
                    </article>

                    <article id="learning-path-recommendation-flow" className="help-content-card">
                      <h3>推荐使用流程</h3>
                      <ol>
                        <li>先使用智能生成，快速建立一版基础学习路径。</li>
                        <li>在确认执行前，根据 Synesis 的输出加入自己的学习想法、目标和限制条件。</li>
                        <li>生成完成后，再结合自己的学习计划手动调整学习路径结构。</li>
                      </ol>
                    </article>

                    <article id="learning-path-recommendation-benefit" className="help-content-card help-content-card-soft">
                      <h3>为什么推荐这样使用</h3>
                      <ul>
                        <li>既能利用系统生成的效率，又不会丢掉用户自己的学习判断。</li>
                        <li>最终得到的学习路径更容易真正落到日常学习执行中。</li>
                      </ul>
                    </article>
                  </div>

                  <aside className="help-doc-toc">
                    <p className="help-doc-toc-label">目录</p>
                    <div className="help-doc-toc-list">
                      <a href="#learning-path-recommendation-overview" className="help-doc-toc-link">建议使用方式概览</a>
                      <a href="#learning-path-recommendation-flow" className="help-doc-toc-link">推荐使用流程</a>
                      <a href="#learning-path-recommendation-benefit" className="help-doc-toc-link">为什么推荐这样使用</a>
                    </div>
                  </aside>
                </div>
              ) : null}
            </section>
          ) : null}

          {!isHomeSection && !isPlansSection && !isLearningPathSection && !isNotesSection ? (
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

      {previewImage ? (
        <div
          className="help-image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={previewImage.alt}
          onClick={() => setPreviewImage(null)}
        >
          <button
            type="button"
            className="help-image-lightbox-close"
            onClick={() => setPreviewImage(null)}
            aria-label="关闭图片预览"
          >
            关闭
          </button>
          <div
            className="help-image-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              className="help-image-lightbox-image"
              src={previewImage.src}
              alt={previewImage.alt}
            />
            <p className="help-image-lightbox-caption">{previewImage.alt}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
