# 信号与节点通信

信号是 Godot 中实现节点间通信的核心机制，基于观察者模式设计。

## 什么是信号？

信号是节点发送的**事件通知**，其他节点可以**监听**并**响应**这些事件。

### 核心概念

```
发送者 → 发射信号 → 接收者
  (Signal)    →    (Slot/Callback)
```

## 内置信号

### 按钮点击

```gdscript
func _ready():
    $Button.pressed.connect(_on_button_pressed)

func _on_button_pressed():
    print("按钮被点击了!")
```

### 碰撞检测

```gdscript
func _ready():
    # Area2D 信号
    body_entered.connect(_on_body_entered)
    body_exited.connect(_on_body_exited)

func _on_body_entered(body):
    print("进入: ", body.name)

func _on_body_exited(body):
    print("离开: ", body.name)
```

### 动画完成

```gdscript
func _ready():
    $AnimationPlayer.animation_finished.connect(_on_animation_finished)

func _on_animation_finished(anim_name):
    print("动画完成: ", anim_name)
```

## 自定义信号

### 定义和发射

```gdscript
# 定义信号
signal health_changed(old_health, new_health)
signal player_died
signal item_collected(item_name, count)

var health: int = 100

func take_damage(amount: int):
    var old = health
    health -= amount
    health_changed.emit(old, health)
    
    if health <= 0:
        player_died.emit()

func collect_item(name: String):
    item_collected.emit(name, 1)
```

### 带参数的信号

```gdscript
signal level_up(new_level: int)
signal score_updated(score: int, high_score: int)

func add_score(points: int):
    score += points
    score_updated.emit(score, high_score)
```

## 连接信号

### 方式一：代码连接

```gdscript
func _ready():
    player.health_changed.connect(_on_health_changed)
    player.player_died.connect(_on_player_died)
```

### 方式二：编辑器连接

1. 选择节点
2. 切换到 **Node** 面板
3. 双击信号
4. 选择接收节点和方法

### 方式三：Callable

```gdscript
func _ready():
    # 使用 Callable
    var callable = Callable(self, "_on_health_changed")
    player.health_changed.connect(callable)
    
    # 绑定额外参数
    var bound_callable = callable.bind("extra_param")
```

## 断开连接

```gdscript
func disable_listeners():
    if player.health_changed.is_connected(_on_health_changed):
        player.health_changed.disconnect(_on_health_changed)
```

## 连接标志

```gdscript
# 单次连接（触发后自动断开）
button.pressed.connect(_on_click, CONNECT_ONE_SHOT)

# 延迟连接（等待当前代码执行完成）
signal_name.connect(callback, CONNECT_DEFERRED)
```

## 实际示例

### 玩家生命值系统

```gdscript
# Player.gd
class_name Player

signal health_changed(current: int, max_health: int)
signal died
signal respawned

var max_health: int = 100
var health: int:
    set(value):
        var old = health
        health = clamp(value, 0, max_health)
        if old != health:
            health_changed.emit(health, max_health)
            if health == 0:
                died.emit()

func heal(amount: int):
    health += amount

func take_damage(amount: int):
    health -= amount

func respawn():
    health = max_health
    respawned.emit()
```

### UI 监听

```gdscript
# HealthUI.gd
extends Control

@onready var health_bar = $ProgressBar
@onready var health_label = $Label

func _ready():
    var player = get_tree().get_first_node_in_group("player")
    player.health_changed.connect(_update_display)
    player.died.connect(_show_death_screen)

func _update_display(current: int, max_health: int):
    health_bar.value = current
    health_bar.max_value = max_health
    health_label.text = "%d / %d" % [current, max_health]

func _show_death_screen():
    $DeathScreen.visible = true
```

## 信号 vs 直接调用

| 方式 | 优点 | 缺点 |
|------|------|------|
| 信号 | 解耦、灵活、多接收者 | 调试较难 |
| 直接调用 | 简单直接、易调试 | 耦合度高 |

### 建议

- **使用信号**：跨节点通信、事件通知
- **直接调用**：同一节点内、父子节点简单操作

## 常见陷阱

### 忘记连接

```gdscript
# 错误：信号定义了但没有连接
signal my_signal

# 正确：记得连接
func _ready():
    my_signal.connect(_on_my_signal)
```

### 参数不匹配

```gdscript
signal example(a: int, b: String)

# 错误：参数数量不匹配
func _on_example(a: int):  # 缺少 b 参数
    pass

# 正确
func _on_example(a: int, b: String):
    pass
```

### 循环触发

```gdscript
# 危险：可能导致无限循环
signal value_changed

var value:
    set(v):
        value = v
        value_changed.emit()  # 触发信号
```
