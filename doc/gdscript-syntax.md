# GDScript 语法详解

GDScript 是 Godot 专用的脚本语言，语法类似于 Python。

## 基本语法

### 变量

```gdscript
# 类型推断
var name = "玩家"
var score = 100

# 显式类型声明
var health: int = 100
var speed: float = 5.5
var is_alive: bool = true

# 常量
const MAX_HEALTH = 100
const GRAVITY = 980.0
```

### 数据类型

| 类型 | 描述 | 示例 |
|------|------|------|
| `int` | 整数 | `42`, `-10` |
| `float` | 浮点数 | `3.14`, `-0.5` |
| `bool` | 布尔值 | `true`, `false` |
| `String` | 字符串 | `"Hello"` |
| `Array` | 数组 | `[1, 2, 3]` |
| `Dictionary` | 字典 | `{"key": "value"}` |
| `Vector2` | 2D向量 | `Vector2(10, 20)` |

### 数组操作

```gdscript
var items = ["剑", "盾", "药水"]

# 访问元素
print(items[0])  # 输出: 剑

# 添加元素
items.append("弓箭")

# 删除元素
items.erase("盾")

# 数组长度
print(items.size())

# 遍历数组
for item in items:
    print(item)
```

### 字典操作

```gdscript
var player = {
    "name": "冒险者",
    "level": 5,
    "health": 100
}

# 访问值
print(player["name"])
print(player.level)  # 等效写法

# 添加/修改
player["mana"] = 50

# 遍历
for key in player:
    print(key, ": ", player[key])
```

## 控制流

### 条件语句

```gdscript
var health = 75

if health <= 0:
    print("死亡")
elif health < 30:
    print("危险")
else:
    print("健康")

# 三元运算符
var status = health > 0 ? "存活" : "死亡"
```

### 循环语句

```gdscript
# for 循环
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# 遍历数组
var items = ["A", "B", "C"]
for item in items:
    print(item)

# while 循环
var count = 0
while count < 3:
    print(count)
    count += 1
```

### match 语句

```gdscript
var state = "idle"

match state:
    "idle":
        print("待机中")
    "run":
        print("奔跑中")
    "jump":
        print("跳跃中")
    _:
        print("未知状态")
```

## 函数

### 函数定义

```gdscript
# 无返回值
func say_hello():
    print("Hello!")

# 有返回值
func add(a: int, b: int) -> int:
    return a + b

# 默认参数
func create_player(name: String = "玩家"):
    print("创建玩家: ", name)
```

### 调用函数

```gdscript
say_hello()
var result = add(10, 20)
create_player()  # 使用默认值
create_player("英雄")  # 传入参数
```

## 类

### 定义类

```gdscript
class_name Player

var name: String = ""
var health: int = 100

func _init(player_name: String):
    name = player_name

func take_damage(amount: int):
    health -= amount
    if health < 0:
        health = 0

func is_alive() -> bool:
    return health > 0
```

### 继承

```gdscript
class_name Enemy extends Player

var attack_power: int = 10

func attack(target: Player):
    target.take_damage(attack_power)
```

## 信号

### 定义信号

```gdscript
signal health_changed(new_health)
signal died

func take_damage(amount: int):
    health -= amount
    health_changed.emit(health)
    
    if health <= 0:
        died.emit()
```

### 连接信号

```gdscript
func _ready():
    player.health_changed.connect(_on_health_changed)
    player.died.connect(_on_player_died)

func _on_health_changed(new_health: int):
    print("生命值: ", new_health)

func _on_player_died():
    print("玩家死亡!")
```

## 最佳实践

1. **使用类型提示** - 提高代码可读性和性能
2. **遵循命名规范** - 函数用 snake_case，类用 PascalCase
3. **善用注释** - 解释复杂逻辑
4. **避免全局变量** - 使用单例或自动加载代替
