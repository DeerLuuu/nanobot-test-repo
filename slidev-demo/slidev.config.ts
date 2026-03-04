import { defineConfig } from '@slidev/cli'

export default defineConfig({
  title: 'Slidev 演示 - 静态网页集成',
  description: '一个简单的Slidev演示，展示如何在静态网页项目中使用Slidev',
  author: 'nanobot',
  favicon: 'https://sli.dev/favicon.png',
  
  // 构建配置
  build: {
    outDir: 'dist',
    base: '/nanobot-test-repo/slidev-demo/',
  },
  
  // 主题配置
  theme: 'default',
  
  // 绘图配置
  drawings: {
    enabled: true,
    persist: false,
  },
  
  // 快捷键
  shortcuts: {
    'toggle-dark': 'd',
  },
})