---
theme: default
background: https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2000
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev 演示
  一个简单的Slidev演示页面
  展示如何在静态网页项目中使用Slidev
drawings:
  persist: false
transition: slide-left
title: Slidev 演示 - 静态网页集成
---

# Slidev 演示

## 在静态网页项目中使用Slidev

一个简单的演示，展示如何将Slidev集成到GitHub Pages项目中

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    按空格键继续 <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="在编辑器中打开" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
</div>

---
layout: two-cols
---

# 什么是Slidev？

Slidev是一个基于Web的幻灯片制作工具，专为开发者设计。

## 主要特点

- 📝 **使用Markdown编写** - 专注于内容
- 🎨 **主题系统** - 可自定义样式
- 🚀 **快速开发** - 热重载支持
- 🌈 **交互式** - 支持Vue组件
- 🎯 **演讲者模式** - 专业演示功能

::right::

# 静态部署优势

## 完全静态
- 构建为SPA单页应用
- 无需服务器端渲染
- 支持GitHub Pages

## 功能完整
- 代码高亮保留
- 动画效果保留
- 交互功能保留

## 易于集成
- 可嵌入现有项目
- 支持子目录部署
- 响应式设计

---
layout: image-right
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800
---

# 代码演示

## 支持代码高亮

```javascript {all|2|4-6|8}
// 这是一个JavaScript示例
function greet(name) {
  return `Hello, ${name}!`;
}

// 使用箭头函数
const greetArrow = (name) => {
  return `Hello, ${name}!`;
};

// 调用函数
console.log(greet("World"));
console.log(greetArrow("Slidev"));
```

代码逐步显示，适合教学演示。

---
layout: center
class: text-center
---

# 集成到GitHub Pages

## 构建命令

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建静态页面
npm run build --base /nanobot-test-repo/slidev-demo/
```

## 部署流程

1. 编写 `slides.md`
2. 运行 `npm run build`
3. 推送到GitHub
4. 启用GitHub Pages

---
layout: statement
---

# 感谢观看！

## 了解更多

- [Slidev 官网](https://sli.dev)
- [GitHub 仓库](https://github.com/slidevjs/slidev)
- [在线演示](https://sli.dev/demo/starter)

<br>

<div class="text-2xl">
  按 <kbd>ESC</kbd> 进入概览模式
</div>