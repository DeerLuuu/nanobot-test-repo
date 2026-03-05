# HD2D 游戏开发指南

HD2D (High-Definition 2D) 是一种独特的游戏美术风格，在 2D 游戏中融入 3D 元素，创造出独特的视觉体验。《八方旅人》、《三角战略》都是这种风格的代表作。

## HD2D 核心概念

### 什么是 HD2D？

HD2D 结合了：

- **2D 角色精灵** - 像素艺术或高清 2D 绘图
- **3D 环境** - 多边形建模的场景
- **光影效果** - 动态光照和阴影
- **后处理** - 景深、泛光、色彩校正

### 视觉层次

```
后处理效果 (Post-Processing)
    ↓
3D 场景层 (3D Environment)
    ↓
2D 角色层 (2D Sprites)
    ↓
UI 层 (Interface)
```

## Godot 实现 HD2D

### 项目设置

```
项目设置 → 渲染：
- 渲染器：Forward+ 或 Mobile
- 抗锯齿：MSAA 4x
- 阴影：启用
```

### 2D 角色设置

```gdscript
# 在 3D 场景中渲染 2D 精灵
extends Sprite3D

func _ready():
    # 面向摄像机
    billboard = BaseMaterial3D.BILLBOARD_ENABLED
    
    # 固定 Y 轴朝向
    billboard_mode = BaseMaterial3D.BILLBOARD_FIXED_Y
    
    # 透明处理
    transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
```

### 摄像机设置

```gdscript
# 3D 摄像机
extends Camera3D

func _ready():
    # 正交投影（类似 2D 视角）
    projection = Camera3D.PROJECTION_ORTHOGONAL
    
    # 斜角视角
    rotation_degrees = Vector3(-30, 45, 0)
```

## 灯光系统

### 三点光源

```gdscript
# 主光源（太阳光）
var sun = DirectionalLight3D.new()
sun.light_color = Color(1.0, 0.95, 0.8)
sun.light_energy = 1.2
sun.shadow_enabled = true

# 补光
var fill = DirectionalLight3D.new()
fill.light_color = Color(0.6, 0.7, 1.0)
fill.light_energy = 0.4

# 背光（轮廓光）
var back = DirectionalLight3D.new()
back.light_color = Color(1.0, 0.8, 0.6)
back.light_energy = 0.6
```

### 环境光

```gdscript
var env = WorldEnvironment.new()
var sky = Sky.new()

# 渐变天空
sky.sky_material = GradientTexture2D.new()
env.environment.background_mode = Environment.BG_SKY
env.environment.background_sky = sky
```

## 后处理效果

### 景深效果

```gdscript
# 项目设置或代码启用
var env = $WorldEnvironment.environment

env.dof_blur_far_enabled = true
env.dof_blur_far_distance = 20.0
env.dof_blur_near_enabled = true
env.dof_blur_near_distance = 2.0
```

### 泛光效果

```gdscript
env.glow_enabled = true
env.glow_intensity = 0.8
env.glow_bloom = 0.5
env.glow_threshold = 0.8
```

### 色彩校正

```gdscript
# 使用 ColorCorrection 资源
var correction = ColorCorrection.new()
correction.saturation = 1.2
correction.contrast = 1.1
correction.brightness = 0.05

env.adjustment_enabled = true
env.adjustment_color_correction = correction
```

## 精灵渲染技巧

### Billboarding

确保角色始终面向摄像机：

```gdscript
extends Sprite3D

@export var lock_y_axis: bool = true

func _process(_delta):
    if lock_y_axis:
        # 只绕 Y 轴旋转
        var cam_pos = get_viewport().get_camera_3d().global_position
        look_at(cam_pos, Vector3.UP)
        rotation_degrees.x = 0
        rotation_degrees.z = 0
```

### 精灵动画

```gdscript
extends Sprite3D

var animations = {
    "idle": preload("res://animations/idle.tres"),
    "walk": preload("res://animations/walk.tres"),
    "attack": preload("res://animations/attack.tres")
}

func play_animation(name: String):
    if animations.has(name):
        texture = animations[name]
```

## 生存游戏系统

### 核心系统架构

```
GameManager
├── TimeManager (时间/季节)
├── WeatherManager (天气)
├── InventoryManager (背包)
├── CraftingManager (制作)
└── SaveManager (存档)
```

### 状态机

```gdscript
class_name StateMachine

var current_state: State
var states: Dictionary = {}

func _ready():
    for child in get_children():
        if child is State:
            states[child.name.to_lower()] = child

func change_state(state_name: String):
    if current_state:
        current_state.exit()
    
    current_state = states[state_name]
    current_state.enter()

func _physics_process(delta):
    if current_state:
        current_state.physics_update(delta)
```

### 背包系统

```gdscript
class_name Inventory

signal item_added(item: Item, count: int)
signal item_removed(item: Item, count: int)

var items: Dictionary = {}  # { item_id: { item, count } }
var max_slots: int = 20

func add_item(item: Item, count: int = 1) -> bool:
    if items.has(item.id):
        items[item.id].count += count
    elif items.size() < max_slots:
        items[item.id] = { item = item, count = count }
    else:
        return false
    
    item_added.emit(item, count)
    return true

func remove_item(item_id: String, count: int = 1) -> bool:
    if not items.has(item_id):
        return false
    
    items[item_id].count -= count
    if items[item_id].count <= 0:
        items.erase(item_id)
    
    item_removed.emit(items[item_id].item, count)
    return true
```

## 性能优化

### 渲染优化

- 使用 **LOD** (Level of Detail) 系统
- 合并静态网格
- 使用遮挡剔除
- 限制动态光源数量

### 精灵优化

```gdscript
# 使用图集减少绘制调用
var atlas = Texture2DArray.new()
atlas.create_from_images([tex1, tex2, tex3])

# 使用实例化渲染
var multimesh = MultiMesh.new()
multimesh.mesh = sprite_mesh
multimesh.instance_count = 100
```

## 总结

HD2D 风格要点：

1. **层次分明** - 前景、中景、背景清晰分离
2. **光影统一** - 2D 精灵与 3D 环境共享光照
3. **后处理增强** - 景深、泛光提升氛围
4. **风格一致** - 保持整体美术风格统一
