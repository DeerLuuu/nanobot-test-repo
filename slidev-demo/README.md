# Slidev 演示

这是一个使用 [Slidev](https://sli.dev) 创建的交互式演示文稿，展示如何在静态网页项目中使用Slidev。

## 在线演示

- [Slidev演示入口页面](https://deerluuu.github.io/nanobot-test-repo/slidev-demo/)
- [直接访问Slidev构建页面](https://deerluuu.github.io/nanobot-test-repo/slidev-demo/dist/)

## 项目结构

```
slidev-demo/
├── slides.md              # Slidev演示文稿源文件
├── slidev.config.ts       # Slidev配置文件
├── index.html            # 演示入口页面
├── README.md             # 项目说明
├── .gitignore            # Git忽略文件
├── package.json          # 项目依赖
├── package-lock.json     # 依赖锁文件
└── dist/                 # 构建后的静态文件（已忽略）
```

## 如何重新构建

如果你需要修改演示文稿或重新构建：

1. **安装依赖**：
   ```bash
   cd slidev-demo
   npm install
   ```

2. **开发模式**（热重载）：
   ```bash
   npm run dev
   ```
   然后在浏览器中打开 http://localhost:3030

3. **构建静态页面**：
   ```bash
   npm run build --base /nanobot-test-repo/slidev-demo/
   ```

4. **导出为PDF**：
   ```bash
   npm run export
   ```

## 演示内容

这个Slidev演示包含以下内容：

1. **Slidev介绍** - 什么是Slidev及其主要特点
2. **静态部署优势** - 为什么Slidev适合静态网页项目
3. **代码演示** - 展示代码高亮和逐步显示功能
4. **GitHub Pages集成** - 如何部署到GitHub Pages
5. **总结** - Slidev的优势和使用场景

## 技术特点

- ✅ **完全静态** - 构建为SPA单页应用，无需服务器
- ✅ **交互式** - 支持Vue组件、动画效果
- ✅ **代码友好** - 支持代码高亮、实时执行
- ✅ **响应式设计** - 适配各种屏幕尺寸
- ✅ **暗色模式** - 支持系统暗色模式
- ✅ **可访问性** - 键盘导航和屏幕阅读器支持

## 与现有项目集成

这个演示已经集成到 [nanobot-test-repo](https://github.com/DeerLuuu/nanobot-test-repo) 项目中：

1. **统一导航栏** - 使用项目统一的导航栏样式
2. **统一页脚** - 使用项目统一的页脚样式
3. **项目卡片** - 在主页面中有对应的项目卡片
4. **响应式设计** - 与项目其他页面保持一致的响应式设计

## 相关链接

- [Slidev 官网](https://sli.dev)
- [Slidev GitHub](https://github.com/slidevjs/slidev)
- [nanobot-test-repo 主项目](https://github.com/DeerLuuu/nanobot-test-repo)
- [在线演示](https://deerluuu.github.io/nanobot-test-repo/)