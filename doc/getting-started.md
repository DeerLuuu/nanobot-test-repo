# Godot 快速入门指南

欢迎使用 Godot 游戏引擎！本指南将帮助你快速上手。

## 什么是 Godot？

Godot 是一个完全免费、开源的游戏引擎，提供：

- **2D 和 3D 游戏开发** - 统一的工作流
- **轻量级** - 整个引擎不到 100MB
- **跨平台** - 支持 Windows、macOS、Linux、移动端和 Web
- **自包含** - 无需安装额外依赖

## 安装 Godot

1. 访问 [Godot 官网](https://godotengine.org/download)
2. 选择适合你操作系统的版本
3. 下载并解压（无需安装）
4. 直接运行 `Godot.exe`

## 第一个项目

### 创建项目

```
文件 → 新建项目 → 选择路径 → 创建并编辑
```

### 场景结构

Godot 使用**场景**作为基本单位：

- 每个场景包含一个或多个**节点**
- 节点可以嵌套形成**节点树**
- 场景可以实例化到其他场景中

### 常用节点类型

| 节点类型 | 用途 |
|---------|------|
| Node2D | 2D 变换节点 |
| Sprite2D | 显示 2D 图像 |
| AnimatedSprite2D | 播放动画 |
| CollisionShape2D | 碰撞形状 |
| Camera2D | 2D 摄像机 |

## GDScript 基础

### Hello World

```gdscript
extends Node2D

func _ready():
    print("Hello, Godot!")
```

### 变量声明

```gdscript
# 类型推断
var player_name = "冒险者"

# 显式类型
var health: int = 100
var speed: float = 5.5
```

### 常用生命周期函数

```gdscript
func _ready():
    # 节点进入场景树时调用一次
    pass

func _process(delta):
    # 每帧调用
    pass

func _physics_process(delta):
    # 每个物理帧调用（固定时间步长）
    pass
```

## 下一步

- [GDScript 语法详解](syntax-reference.html)
- [信号与节点通信](signals.html)
- [资源管理系统](resources.html)
