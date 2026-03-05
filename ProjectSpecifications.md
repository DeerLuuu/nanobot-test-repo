# 项目代码规范文档

> **版本**: 1.0.0  
> **更新日期**: 2026年3月5日  
> **项目名称**: nanobot网页项目库 - Godot HD2D生存游戏教程

---

## 目录

1. [项目概述](#1-项目概述)
2. [目录结构](#2-目录结构)
3. [命名规范](#3-命名规范)
4. [HTML规范](#4-html规范)
5. [CSS规范](#5-css规范)
6. [JavaScript规范](#6-javascript规范)
7. [文件组织](#7-文件组织)
8. [注释规范](#8-注释规范)
9. [可访问性规范](#9-可访问性规范)
10. [响应式设计规范](#10-响应式设计规范)
11. [版本控制规范](#11-版本控制规范)

---

## 1. 项目概述

### 1.1 项目简介

本项目是一个交互式网页教程平台，主要用于托管和展示 Godot 游戏开发教程内容。项目采用纯前端技术栈，无需后端服务，可部署在 GitHub Pages 等静态托管平台。

### 1.2 技术栈

| 技术 | 版本/说明 |
|------|-----------|
| HTML5 | 语义化标签，可访问性优化 |
| CSS3 | CSS变量，Flexbox，Grid布局 |
| JavaScript | ES6+，原生JS，无框架依赖 |
| Font Awesome | 6.4.0 (图标库) |
| Highlight.js | 11.8.0 (代码高亮) |

### 1.3 设计原则

- **模块化**: CSS按功能模块拆分，便于维护
- **一致性**: 使用统一的设计令牌(Design Tokens)
- **可访问性**: 遵循WCAG 2.1 AA标准
- **响应式**: 移动优先的响应式设计
- **性能优化**: 减少HTTP请求，优化资源加载

---

## 2. 目录结构

```
nanobot-test-repo/
├── index.html                    # 项目主页
├── course-presentation.html      # 课件演示页面
├── README.md                     # 项目说明文档
├── ProjectSpecifications.md      # 代码规范文档（本文件）
├── .gitignore                    # Git忽略配置
│
├── css/                          # 样式文件目录
│   ├── shared-theme.css          # 共享主题变量和基础样式
│   ├── components.css            # 通用组件样式
│   ├── pages.css                 # 主页特定样式
│   ├── presentation.css          # 课件页面样式
│   ├── tutorial.css              # 教程页面样式
│   ├── editor.css                # 代码编辑器样式
│   ├── index.css                 # 遗留样式（待清理）
│   └── godot-tutorial/           # 教程特定样式（预留）
│
├── js/                           # JavaScript文件目录
│   ├── presentation.js           # 课件页面脚本
│   ├── editor.js                 # 代码编辑器脚本
│   └── godot-tutorial/           # 教程特定脚本
│       └── script.js             # 教程主页脚本
│
├── godot-tutorial/               # Godot教程子目录
│   ├── index.html                # 教程主页
│   ├── interactive.html          # 交互式代码练习
│   └── README.md                 # 教程说明文档
│
└── log/                          # 日志目录
```

---

## 3. 命名规范

### 3.1 文件命名

| 类型 | 规范 | 示例 |
|------|------|------|
| HTML文件 | 小写字母，连字符分隔 | `index.html`, `course-presentation.html` |
| CSS文件 | 小写字母，连字符分隔 | `shared-theme.css`, `components.css` |
| JS文件 | 小写字母，连字符分隔 | `presentation.js`, `script.js` |
| 图片文件 | 小写字母，连字符分隔 | `logo-dark.png`, `hero-background.svg` |

### 3.2 CSS类名命名 (BEM变体)

采用简化的BEM命名方法，结合语义化命名：

```css
/* 块 */
.card { }
.navbar { }
.tip-box { }

/* 元素 (使用连字符连接) */
.card-header { }
.card-title { }
.navbar-logo { }

/* 修饰符 */
.card.featured { }
.btn-primary { }
.tip-box.warning { }

/* 状态类 */
.is-active { }
.is-hidden { }
.is-loading { }

/* 工具类 */
.text-center { }
.mt-4 { }
.flex { }
```

### 3.3 CSS变量命名

```css
/* 格式: --类别-属性-变体 */

/* 颜色 */
--primary-color
--primary-light
--primary-dark
--primary-rgb

/* 间距 */
--space-1    /* 0.25rem */
--space-2    /* 0.5rem */
--space-4    /* 1rem */
--space-8    /* 2rem */

/* 字体 */
--text-sm
--text-base
--text-lg

/* 阴影 */
--shadow-sm
--shadow-md
--shadow-lg

/* 边框 */
--border-radius-sm
--border-radius-md
--border-radius-lg
```

### 3.4 JavaScript命名

```javascript
// 变量: 小驼峰命名
const slideContainer = document.getElementById('slideContainer');
let currentIndex = 0;

// 常量: 大写下划线
const TOTAL_SLIDES = 10;
const ANIMATION_DURATION = 300;

// 函数: 小驼峰命名，动词开头
function updateSlide() { }
function goToNext() { }
function handleKeyPress(event) { }

// 类: 大驼峰命名
class CodeEditor { }
class SlidePresenter { }

// 私有方法/属性: 下划线前缀
function _initializeState() { }
```

### 3.5 ID命名

```html
<!-- 使用小驼峰命名 -->
<div id="slideContainer"></div>
<button id="prevBtn"></button>
<div id="outputArea"></div>
```

---

## 4. HTML规范

### 4.1 文档结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="页面描述">
    <meta name="keywords" content="关键词">
    <meta name="author" content="作者">
    <meta name="theme-color" content="#667eea">
    
    <title>页面标题</title>
    
    <!-- 外部资源 -->
    <link rel="stylesheet" href="path/to/stylesheet.css">
    
    <!-- 内联样式（仅在必要时使用） -->
</head>
<body>
    <!-- 跳过链接（可访问性） -->
    <a href="#main-content" class="skip-link">跳转到主要内容</a>
    
    <!-- 页面内容 -->
    
    <!-- 脚本 -->
    <script src="path/to/script.js"></script>
</body>
</html>
```

### 4.2 语义化标签

优先使用语义化HTML标签：

```html
<!-- 推荐 -->
<header></header>
<nav></nav>
<main></main>
<article></article>
<section></section>
<aside></aside>
<footer></footer>

<!-- 避免 -->
<div class="header"></div>
<div class="nav"></div>
<div class="main"></div>
```

### 4.3 可访问性属性

```html
<!-- 图片必须有alt属性 -->
<img src="image.png" alt="描述性文字">

<!-- 链接必须有描述性文本 -->
<a href="url" aria-label="访问GitHub仓库">
    <i class="fab fa-github" aria-hidden="true"></i>
    <span>GitHub</span>
</a>

<!-- 按钮必须有可访问名称 -->
<button aria-label="返回顶部">
    <i class="fas fa-chevron-up" aria-hidden="true"></i>
</button>

<!-- 表单元素必须有label -->
<label for="search">搜索</label>
<input type="text" id="search" name="search">

<!-- 导航区域标注 -->
<nav role="navigation" aria-label="主导航"></nav>
<nav aria-label="面包屑导航"></nav>
```

### 4.4 缩进与格式

- 使用4个空格缩进
- 每个块级元素独占一行
- 属性换行规则：
  - 单行：属性少于3个时
  - 多行：属性超过3个时

```html
<!-- 单行 -->
<button class="btn btn-primary">提交</button>

<!-- 多行 -->
<a href="https://example.com"
   class="nav-link"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="访问示例网站">
    示例链接
</a>
```

---

## 5. CSS规范

### 5.1 CSS文件组织

每个CSS文件应按以下结构组织：

```css
/* ============================================
   文件名称 - 简短描述
   ============================================ */

/* ============================================
   1. CSS变量定义（如果需要）
   ============================================ */

/* ============================================
   2. 基础样式
   ============================================ */

/* ============================================
   3. 布局组件
   ============================================ */

/* ============================================
   4. 功能组件
   ============================================ */

/* ============================================
   5. 工具类
   ============================================ */

/* ============================================
   6. 响应式设计
   ============================================ */

/* ============================================
   7. 动画
   ============================================ */

/* ============================================
   8. 特殊状态（暗色模式、打印等）
   ============================================ */
```

### 5.2 选择器规范

```css
/* 推荐：直接使用类选择器 */
.card { }
.card-title { }

/* 避免：过深嵌套 */
.container .wrapper .content .card .title { } /* 不推荐 */

/* 推荐：限制嵌套层级 <= 3 */
.navbar .nav-links .nav-link { }

/* 使用子选择器提高性能 */
.list > .item { }
```

### 5.3 属性顺序

按以下顺序组织CSS属性：

```css
.element {
    /* 1. 定位 */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    
    /* 2. 盒模型 */
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100px;
    padding: var(--space-4);
    margin: var(--space-2);
    
    /* 3. 边框和背景 */
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius-sm);
    background: var(--card-bg);
    
    /* 4. 文本 */
    color: var(--text-color);
    font-size: var(--text-base);
    font-weight: 600;
    line-height: var(--leading-relaxed);
    text-align: center;
    
    /* 5. 其他 */
    opacity: 1;
    cursor: pointer;
    
    /* 6. 动画和过渡 */
    transition: var(--transition-smooth);
    animation: fadeIn 0.3s ease;
}
```

### 5.4 使用CSS变量

```css
/* 推荐：使用设计令牌 */
.card {
    background: var(--card-bg);
    padding: var(--space-6);
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-md);
}

/* 避免：硬编码值 */
.card {
    background: #ffffff;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

### 5.5 媒体查询

```css
/* 移动优先 */
.element {
    /* 移动端默认样式 */
    font-size: var(--text-sm);
}

/* 平板 */
@media (min-width: 768px) {
    .element {
        font-size: var(--text-base);
    }
}

/* 桌面 */
@media (min-width: 1024px) {
    .element {
        font-size: var(--text-lg);
    }
}

/* 暗色模式 */
@media (prefers-color-scheme: dark) {
    :root {
        --bg-color: var(--neutral-900);
    }
}

/* 减少动画 */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
    }
}
```

---

## 6. JavaScript规范

### 6.1 文件结构

```javascript
/* ============================================
   文件名称 - 功能描述
   ============================================ */

// ============================================
// 1. 常量定义
// ============================================
const TOTAL_SLIDES = 10;
const ANIMATION_DURATION = 300;

// ============================================
// 2. DOM元素引用
// ============================================
const slideContainer = document.getElementById('slideContainer');
const prevBtn = document.getElementById('prevBtn');

// ============================================
// 3. 状态变量
// ============================================
let currentSlide = 0;
let isAnimating = false;

// ============================================
// 4. 初始化函数
// ============================================
function init() {
    // 初始化逻辑
}

// ============================================
// 5. 事件处理函数
// ============================================
function handleClick(event) {
    // 处理逻辑
}

// ============================================
// 6. 工具函数
// ============================================
function debounce(func, wait) {
    // 工具逻辑
}

// ============================================
// 7. 事件监听器
// ============================================
document.addEventListener('DOMContentLoaded', init);

// ============================================
// 8. 导出（如果需要）
// ============================================
```

### 6.2 DOM操作

```javascript
// 推荐：缓存DOM引用
const elements = {
    container: document.getElementById('container'),
    items: document.querySelectorAll('.item'),
    btn: document.querySelector('.btn')
};

// 推荐：使用事件委托
document.querySelector('.list').addEventListener('click', (e) => {
    if (e.target.matches('.item')) {
        handleItemClick(e.target);
    }
});

// 推荐：批量DOM更新
const fragment = document.createDocumentFragment();
items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    fragment.appendChild(li);
});
list.appendChild(fragment);
```

### 6.3 事件处理

```javascript
// 推荐：命名函数便于调试
function handleScroll() {
    if (window.scrollY > 300) {
        showBackToTop();
    } else {
        hideBackToTop();
    }
}

window.addEventListener('scroll', handleScroll);

// 推荐：防抖处理
const debouncedResize = debounce(() => {
    updateLayout();
}, 150);

window.addEventListener('resize', debouncedResize);

// 推荐：键盘事件处理
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            goToPrev();
            break;
        case 'ArrowRight':
            goToNext();
            break;
        case 'Escape':
            closeModal();
            break;
    }
});
```

### 6.4 错误处理

```javascript
// 推荐：try-catch包装
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch data:', error);
        showErrorMessage('加载数据失败，请稍后重试');
        return null;
    }
}

// 推荐：输入验证
function validateInput(value) {
    if (typeof value !== 'string' || value.trim() === '') {
        return false;
    }
    return true;
}
```

---

## 7. 文件组织

### 7.1 CSS引用顺序

HTML中的CSS引用应按以下顺序：

```html
<!-- 1. 外部库 -->
<link rel="stylesheet" href="https://cdnjs.../font-awesome.min.css">

<!-- 2. 共享主题（必须在最前） -->
<link rel="stylesheet" href="css/shared-theme.css">

<!-- 3. 通用组件 -->
<link rel="stylesheet" href="css/components.css">

<!-- 4. 页面特定样式 -->
<link rel="stylesheet" href="css/pages.css">
```

### 7.2 JavaScript引用顺序

```html
<!-- 1. 外部库 -->
<script src="https://cdnjs.../highlight.min.js"></script>

<!-- 2. 工具函数 -->
<script src="js/utils.js"></script>

<!-- 3. 组件脚本 -->
<script src="js/components.js"></script>

<!-- 4. 页面脚本 -->
<script src="js/main.js"></script>

<!-- 5. 内联脚本（初始化） -->
<script>
    document.addEventListener('DOMContentLoaded', init);
</script>
```

### 7.3 资源放置

| 资源类型 | 放置位置 |
|----------|----------|
| CSS文件 | `<head>` 内 |
| JS文件 | `</body>` 前 |
 图片 | `assets/images/` |
| 字体 | `assets/fonts/` |
| 图标 | 使用Font Awesome CDN |

---

## 8. 注释规范

### 8.1 CSS注释

```css
/* 单行注释 */

/* ============================================
   区块注释 - 用于分隔主要部分
   ============================================ */

/**
 * 组件注释 - 描述复杂组件
 * 
 * 使用方法:
 * <div class="card">...</div>
 * 
 * 变体:
 * - .card.featured - 特色卡片
 * - .card.hoverable - 可悬浮卡片
 */
.card { }
```

### 8.2 JavaScript注释

```javascript
// 单行注释 - 简短说明

/**
 * 函数注释 - JSDoc格式
 * @description 函数功能描述
 * @param {string} param1 - 参数说明
 * @param {Object} options - 配置选项
 * @param {number} [options.timeout=300] - 可选参数，默认值
 * @returns {boolean} 返回值说明
 * @example
 * const result = myFunction('test', { timeout: 500 });
 */
function myFunction(param1, options) {
    // 实现
}

// TODO: 待办事项
// FIXME: 需要修复的问题
// HACK: 临时解决方案
// NOTE: 重要说明
```

### 8.3 HTML注释

```html
<!-- 单行注释 -->

<!-- 
  多行注释
  用于说明复杂结构
-->

<!-- TODO: 待办事项 -->
<!-- FIXME: 需要修复 -->

<!-- 组件开始 -->
<section class="card">
    ...
</section>
<!-- 组件结束 -->
```

---

## 9. 可访问性规范

### 9.1 必须遵守

- [ ] 所有图片必须有 `alt` 属性
- [ ] 所有表单元素必须有关联的 `label`
- [ ] 链接必须有描述性文本或 `aria-label`
- [ ] 按钮必须有可访问名称
- [ ] 页面必须有 `<main>` 主内容区域
- [ ] 提供"跳过链接"跳过导航
- [ ] 颜色对比度至少 4.5:1 (WCAG AA)
- [ ] 焦点状态必须可见
- [ ] 键盘可完全操作

### 9.2 ARIA使用

```html
<!-- 角色标注 -->
<nav role="navigation" aria-label="主导航"></nav>
<main role="main"></main>

<!-- 状态标注 -->
<button aria-expanded="false" aria-controls="menu">菜单</button>
<div id="menu" aria-hidden="true">...</div>

<!-- 实时区域 -->
<div aria-live="polite" aria-atomic="true">状态消息</div>

<!-- 隐藏装饰性元素 -->
<i class="icon" aria-hidden="true"></i>

<!-- 当前页面 -->
<a href="page.html" aria-current="page">当前页面</a>
```

### 9.3 键盘导航

```javascript
// 支持键盘操作
element.addEventListener('keydown', (e) => {
    // Enter 和 Space 触发点击
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        element.click();
    }
    
    // 方向键导航
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        navigateItems(e.key);
    }
});

// 焦点陷阱（模态框）
function trapFocus(modal) {
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    // 实现焦点陷阱...
}
```

---

## 10. 响应式设计规范

### 10.1 断点定义

```css
/* 项目断点 */
--breakpoint-sm: 640px;   /* 手机横屏 */
--breakpoint-md: 768px;   /* 平板竖屏 */
--breakpoint-lg: 1024px;  /* 平板横屏/小桌面 */
--breakpoint-xl: 1280px;  /* 桌面 */
--breakpoint-2xl: 1536px; /* 大桌面 */
```

### 10.2 响应式策略

```css
/* 移动优先 */
.container {
    padding: var(--space-4);
}

@media (min-width: 768px) {
    .container {
        padding: var(--space-6);
    }
}

@media (min-width: 1024px) {
    .container {
        padding: var(--space-8);
    }
}

/* 弹性布局 */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-4);
}

/* 响应式字体 */
.title {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
}
```

### 10.3 触摸设备优化

```css
/* 触摸目标大小 */
button, a {
    min-height: 44px;
    min-width: 44px;
}

/* 禁用触摸高亮 */
* {
    -webkit-tap-highlight-color: transparent;
}

/* 触摸设备隐藏悬浮效果 */
@media (hover: none) {
    .card:hover {
        transform: none;
    }
}
```

---

## 11. 版本控制规范

### 11.1 分支策略

```
main        # 主分支，生产环境代码
develop     # 开发分支
feature/*   # 功能分支
fix/*       # 修复分支
release/*   # 发布分支
```

### 11.2 提交信息格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type类型：**
- `feat`: 新功能
- `fix`: Bug修复
- `docs`: 文档更新
- `style`: 代码格式（不影响功能）
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具相关

**示例：**
```
feat(tutorial): 添加交互式代码编辑器

- 实现GDScript语法高亮
- 添加代码补全功能
- 支持Ctrl+Enter快捷运行

Closes #12
```

### 11.3 .gitignore配置

```gitignore
# 操作系统
.DS_Store
Thumbs.db

# IDE
.idea/
.vscode/
*.sublime-*

# 依赖
node_modules/

# 构建输出
dist/
build/

# 日志
*.log
log/

# 临时文件
*.tmp
*.temp
```

---

## 附录

### A. VS Code推荐设置

```json
{
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "html.format.wrapLineLength": 120,
    "css.lint.validProperties": ["--*"]
}
```

### B. 推荐VS Code扩展

- ESLint
- Prettier
- HTML CSS Support
- Auto Rename Tag
- Bracket Pair Colorizer
- GitLens

### C. 参考资源

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3C HTML规范](https://html.spec.whatwg.org/)
- [W3C CSS规范](https://www.w3.org/Style/CSS/)
- [WCAG 2.1指南](https://www.w3.org/WAI/WCAG21/quickref/)
- [BEM命名方法](https://getbem.com/)

---

**文档维护者**: nanobot AI  
**最后更新**: 2026年3月5日
