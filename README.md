# AI4Learning Product Doc

这是一个独立于 `AI4Learning-Frontend` 的产品说明书项目，用于承载 `AI4Learning` 的中文产品介绍页面。

它的定位是：

- 独立专题页
- 不接入现有业务前端路由
- 适合单独预览、单独部署、单独分享

---

## 项目结构

当前核心文件如下：

- [index.html](/e:/Ai4learning/sum/AI4Learning-ProductDoc/index.html)
- [package.json](/e:/Ai4learning/sum/AI4Learning-ProductDoc/package.json)
- [vite.config.ts](/e:/Ai4learning/sum/AI4Learning-ProductDoc/vite.config.ts)
- [src/App.tsx](/e:/Ai4learning/sum/AI4Learning-ProductDoc/src/App.tsx)
- [src/styles.css](/e:/Ai4learning/sum/AI4Learning-ProductDoc/src/styles.css)

职责说明：

- `src/App.tsx`
  页面主结构、区块内容、文案数据、FAQ、场景切换逻辑

- `src/styles.css`
  页面整体视觉样式、布局、响应式、按钮、卡片、区块风格

- `vite.config.ts`
  本地开发和打包配置

- `dist/`
  执行构建后生成的静态部署产物

---

## 环境要求

建议环境：

- `Node.js 18+`
- `npm 9+`

如果本机已经可以运行现有前端项目，通常也可以直接运行这个项目。

---

## 如何启动

### 1. 进入项目目录

```powershell
cd e:\Ai4learning\sum\AI4Learning-ProductDoc
```

### 2. 安装依赖

首次启动需要安装依赖：

```powershell
npm install
```

### 3. 启动开发环境

```powershell
npm run dev
```

启动后，Vite 会输出本地访问地址。默认配置端口是：

```text
http://localhost:4174
```

如果端口被占用，Vite 会提示实际可用端口。

### 4. 本地预览生产包

如果你想用接近正式部署的方式预览：

先构建：

```powershell
npm run build
```

再预览：

```powershell
npm run preview
```

---

## 如何改文案

这个项目当前把“页面结构”和“文案内容”都写在 [src/App.tsx](/e:/Ai4learning/sum/AI4Learning-ProductDoc/src/App.tsx) 里，因此改文案主要改这个文件。

### 1. 改导航文案

修改 `navItems`：

```ts
const navItems = [
  { label: '产品介绍', href: '#hero' },
  { label: '核心能力', href: '#capabilities' },
  { label: '使用场景', href: '#scenarios' },
  { label: '常见问题', href: '#faq' },
];
```

### 2. 改首屏文案

在 `App()` 组件里的 `hero` 区块修改：

- 主标题
- 副标题
- 标签
- 按钮文字

其中标签来自：

```ts
const heroTags = [...]
```

### 3. 改痛点内容

修改：

```ts
const painPoints = [...]
```

每一项包含：

- `title`
- `description`

### 4. 改核心能力

修改：

```ts
const capabilities = [...]
```

每一项包含：

- `title`
- `description`
- `detail`
- `icon`

如果只是改文案，不需要动 `icon`。

### 5. 改典型场景

修改：

```ts
const scenarios = { ... }
```

每个场景包含：

- `label`
- `title`
- `summary`
- `response`
- `outcome`

### 6. 改对比区内容

修改：

```ts
const comparisonItems = [...]
```

每一项是左右对比的一行：

```ts
['普通 AI 的描述', 'AI4Learning 的描述']
```

### 7. 改适用对象和边界说明

修改：

```ts
const fitFor = [...]
const boundaries = [...]
```

### 8. 改 FAQ

修改：

```ts
const faqs = [...]
```

每项包含：

- `question`
- `answer`

### 9. 改结尾 CTA

在 `#cta` 对应的 JSX 区块中直接修改：

- 标题
- 收束段落
- 按钮文字

---

## 如何改 UI

UI 基本都集中在 [src/styles.css](/e:/Ai4learning/sum/AI4Learning-ProductDoc/src/styles.css)。

### 常改的几个部分

#### 1. 改整体颜色

直接修改 `:root` 里的变量：

```css
:root {
  --bg: ...;
  --text: ...;
  --accent: ...;
  --accent-strong: ...;
}
```

#### 2. 改页面宽度

修改：

```css
.container {
  width: min(1180px, calc(100% - 40px));
}
```

#### 3. 改首屏布局

修改：

```css
.hero {
  display: grid;
  grid-template-columns: ...;
}
```

#### 4. 改卡片风格

主要看：

```css
.card
.hero-copy
.hero-panel
.cta-card
```

#### 5. 改移动端表现

看底部的响应式部分：

```css
@media (max-width: 1024px) { ... }
@media (max-width: 760px) { ... }
```

---

## 如何构建

执行：

```powershell
npm run build
```

构建成功后会生成：

- [dist/index.html](/e:/Ai4learning/sum/AI4Learning-ProductDoc/dist/index.html)
- `dist/assets/*`

这就是最终的静态部署产物。

---

## 如何部署

这个项目是纯静态前端页面，没有服务端依赖，所以部署方式非常简单。

### 方案一：直接部署 `dist/` 到静态服务器

适合：

- Nginx
- Apache
- 宝塔静态站点
- 云服务器静态目录

流程：

1. 本地执行 `npm run build`
2. 把 `dist/` 目录下所有文件上传到服务器站点目录
3. 配置站点根目录指向这些静态文件

### 方案二：部署到 Vercel / Netlify

适合：

- 快速预览
- 临时对外分享
- 不想手动配服务器

构建命令：

```text
npm run build
```

输出目录：

```text
dist
```

### 方案三：挂到现有域名的子路径

如果后续要把说明书挂到主站下面，例如：

```text
https://your-domain.com/product-doc/
```

需要额外确认静态资源路径策略。

当前项目默认按根路径部署，如果要部署到子路径，建议调整 [vite.config.ts](/e:/Ai4learning/sum/AI4Learning-ProductDoc/vite.config.ts)：

```ts
export default defineConfig({
  base: '/product-doc/',
  plugins: [react()],
  ...
});
```

改完以后重新执行：

```powershell
npm run build
```

### 方案四：本机直接演示

如果只是答辩、汇报、内部演示，也可以直接：

```powershell
npm run dev
```

或者：

```powershell
npm run preview
```

再通过本机局域网地址访问。

---

## 推荐发布流程

推荐每次发布按这个顺序：

1. 修改 [src/App.tsx](/e:/Ai4learning/sum/AI4Learning-ProductDoc/src/App.tsx) 中的文案
2. 修改 [src/styles.css](/e:/Ai4learning/sum/AI4Learning-ProductDoc/src/styles.css) 中的样式
3. 本地执行 `npm run dev` 检查页面
4. 执行 `npm run build`
5. 用 `npm run preview` 或服务器环境确认最终效果
6. 上传 `dist/` 进行部署

---

## 后续建议

如果后续继续迭代，建议按这个顺序优化：

1. 把文案数据从 `App.tsx` 中拆到单独的 `content.ts`
2. 把每个区块拆成独立组件
3. 补充项目 logo、品牌图形和更正式的元信息
4. 增加 README 中的截图或页面示意
5. 如果要长期维护，再补 ESLint、Prettier 和自动部署流程

---

## 当前状态

当前这个说明书项目已经具备：

- 独立运行
- 独立构建
- 独立部署
- 独立修改文案和样式

适合作为第一版产品说明书原型继续往正式版本推进。

