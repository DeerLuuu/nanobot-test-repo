const examples = [
    {
        title: "基础打印",
        icon: "fas fa-play-circle",
        preview: 'print("Hello Godot!")',
        difficulty: "easy",
        code: `# 示例1: 基础打印
print("欢迎来到 Godot 游戏开发世界！")
print("================================")
print("游戏名称:", "HD2D生存游戏")
print("版本:", "1.0.0")`
    },
    {
        title: "变量与数据类型",
        icon: "fas fa-database",
        preview: 'var name = "玩家"',
        difficulty: "easy",
        code: `# 示例2: 变量与数据类型
var game_title = "HD2D生存游戏"
var player_count = 100
var version = 1.0
var is_running = true

print("游戏名称:", game_title)
print("玩家数量:", player_count)
print("版本:", version)
print("运行中:", is_running)`
    },
    {
        title: "数学运算",
        icon: "fas fa-calculator",
        preview: "var a = 10; print(a + 5)",
        difficulty: "easy",
        code: `# 示例3: 数学运算
var a = 15
var b = 4

print("加法: a + b =", a + b)
print("减法: a - b =", a - b)
print("乘法: a * b =", a * b)
print("除法: a / b =", a / b)
print("随机数:", randi() % 100)`
    },
    {
        title: "条件语句",
        icon: "fas fa-code-branch",
        preview: "if health > 0: print('存活')",
        difficulty: "medium",
        code: `# 示例4: 条件语句
var health = 75

if health <= 0:
    print("玩家已死亡！")
elif health < 30:
    print("危险！生命值过低！")
elif health < 70:
    print("生命值偏低，请注意")
else:
    print("生命值健康")`
    },
    {
        title: "循环语句",
        icon: "fas fa-redo",
        preview: "for i in range(5): print(i)",
        difficulty: "medium",
        code: `# 示例5: 循环语句
print("=== For 循环 ===")
for i in range(5):
    print("计数:", i)

print()
var items = ["剑", "盾", "药水"]
for item in items:
    print("物品:", item)`
    },
    {
        title: "数组操作",
        icon: "fas fa-cubes",
        preview: 'var items = ["剑", "盾"]',
        difficulty: "medium",
        code: `# 示例6: 数组操作
var inventory = ["木剑", "布甲", "面包"]

print("物品数量:", inventory.size())
print("背包:", inventory)

inventory.append("药水")
print("添加药水后:", inventory)
print("第一个物品:", inventory[0])`
    },
    {
        title: "函数定义",
        icon: "fas fa-cog",
        preview: "func add(a, b): return a + b",
        difficulty: "medium",
        code: `# 示例7: 函数定义
func say_hello():
    print("你好，冒险者！")

func add(a, b):
    return a + b

say_hello()
var sum = add(10, 20)
print("10 + 20 =", sum)`
    },
    {
        title: "玩家类",
        icon: "fas fa-dragon",
        preview: "class_name Player",
        difficulty: "hard",
        code: `# 示例8: 玩家类定义
class_name Player

var name: String = "冒险者"
var health: int = 100
var attack_power: int = 25

func _init(player_name = "勇者"):
    name = player_name
    print("玩家", name, "已创建！")

func take_damage(amount: int):
    health -= amount
    print(name, "受到了", amount, "点伤害")

print("=== 创建角色 ===")`
    }
];

// 代码补全数据
const completions = [
    { text: "var", type: "keyword", detail: "声明变量" },
    { text: "func", type: "keyword", detail: "定义函数" },
    { text: "class", type: "keyword", detail: "定义类" },
    { text: "class_name", type: "keyword", detail: "类名声明" },
    { text: "extends", type: "keyword", detail: "继承" },
    { text: "if", type: "keyword", detail: "条件判断" },
    { text: "elif", type: "keyword", detail: "否则如果" },
    { text: "else", type: "keyword", detail: "否则" },
    { text: "for", type: "keyword", detail: "for循环" },
    { text: "while", type: "keyword", detail: "while循环" },
    { text: "return", type: "keyword", detail: "返回值" },
    { text: "pass", type: "keyword", detail: "占位符" },
    { text: "true", type: "keyword", detail: "布尔真" },
    { text: "false", type: "keyword", detail: "布尔假" },
    { text: "null", type: "keyword", detail: "空值" },
    { text: "and", type: "keyword", detail: "逻辑与" },
    { text: "or", type: "keyword", detail: "逻辑或" },
    { text: "not", type: "keyword", detail: "逻辑非" },
    { text: "const", type: "keyword", detail: "常量" },
    { text: "enum", type: "keyword", detail: "枚举" },
    { text: "print", type: "builtin", detail: "输出到控制台" },
    { text: "str", type: "builtin", detail: "转字符串" },
    { text: "int", type: "builtin", detail: "转整数" },
    { text: "float", type: "builtin", detail: "转浮点" },
    { text: "bool", type: "builtin", detail: "转布尔" },
    { text: "range", type: "builtin", detail: "数字范围" },
    { text: "len", type: "builtin", detail: "获取长度" },
    { text: "abs", type: "builtin", detail: "绝对值" },
    { text: "min", type: "builtin", detail: "最小值" },
    { text: "max", type: "builtin", detail: "最大值" },
    { text: "sqrt", type: "builtin", detail: "平方根" },
    { text: "randi", type: "builtin", detail: "随机整数" },
    { text: "randf", type: "builtin", detail: "随机浮点" },
    { text: "String", type: "type", detail: "字符串类型" },
    { text: "int", type: "type", detail: "整数类型" },
    { text: "float", type: "type", detail: "浮点类型" },
    { text: "bool", type: "type", detail: "布尔类型" },
    { text: "Array", type: "type", detail: "数组类型" },
    { text: "Dictionary", type: "type", detail: "字典类型" },
    { text: "Vector2", type: "type", detail: "2D向量" },
    { text: "Vector3", type: "type", detail: "3D向量" },
    { text: "Color", type: "type", detail: "颜色" },
    { text: "_ready", type: "function", detail: "节点进入场景树时调用" },
    { text: "_process", type: "function", detail: "每帧调用" },
    { text: "_physics_process", type: "function", detail: "物理帧调用" },
    { text: "get_node", type: "function", detail: "获取节点" },
    { text: "queue_free", type: "function", detail: "延迟释放" },
];

// DOM 元素
let codeEditor = null;
let outputArea = null;
let lineNumbers = null;
let highlightLayer = null;
let autocompleteDropdown = null;
let autocompleteItems = [];
let selectedIndex = 0;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    codeEditor = document.getElementById('codeEditor');
    outputArea = document.getElementById('outputArea');
    lineNumbers = document.getElementById('lineNumbers');
    highlightLayer = document.getElementById('highlightLayer');
    autocompleteDropdown = document.getElementById('autocompleteDropdown');
    
    initEditor();
    initExampleDropdown();
    initBackToTop();
    updateHighlight();
    updateLineNumbers();
});

// 语法高亮
function highlightCode(code) {
    let html = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    html = html.replace(/(#.*$)/gm, '<span class="hl-comment">$1</span>');
    html = html.replace(/("(?:[^"\\]|\\.)*")/g, '<span class="hl-string">$1</span>');
    html = html.replace(/('(?:[^'\\]|\\.)*')/g, '<span class="hl-string">$1</span>');
    const keywords = ['var', 'func', 'class', 'class_name', 'extends', 'if', 'elif', 'else', 
                   'for', 'while', 'return', 'pass', 'true', 'false', 'null', 'and', 'or', 
                   'not', 'const', 'enum', 'export', 'onready', 'signal', 'static', 'break', 
                   'continue', 'match', 'is', 'as', 'in'];
    keywords.forEach(kw => {
        const regex = new RegExp('\\b(' + kw + ')\\b', 'g');
        html = html.replace(regex, '<span class="hl-keyword">$1</span>');
    });
    const types = ['String', 'int', 'float', 'bool', 'Array', 'Dictionary', 
                  'Vector2', 'Vector3', 'Vector2i', 'Vector3i', 'Color', 'Rect2', 
                  'Transform2D', 'Transform3D', 'NodePath', 'Object', 'Callable'];
    types.forEach(t => {
        const regex = new RegExp('\\b(' + t + ')\\b', 'g');
        html = html.replace(regex, '<span class="hl-type">$1</span>');
    });
    const builtins = ['print', 'str', 'int', 'float', 'bool', 'range', 'len', 'abs', 
                     'min', 'max', 'sqrt', 'pow', 'randi', 'randf', 'rand_range',
                     'sin', 'cos', 'tan', 'round', 'floor', 'ceil', 'typeof', 'typeof'];
    builtins.forEach(fn => {
        const regex = new RegExp('\\b(' + fn + ')\\b', 'g');
        html = html.replace(regex, '<span class="hl-builtin">$1</span>');
    });
    html = html.replace(/\b(\d+\.?\d*)\b/g, '<span class="hl-number">$1</span>');
    html = html.replace(/\b(func\s+)(\w+)/g, '$1<span class="hl-function">$2</span>');
    html = html.replace(/\b(class_name\s+)(\w+)/g, '$1<span class="hl-class">$2</span>');
    
    return html;
}

function updateHighlight() {
    const code = codeEditor.value;
    highlightLayer.innerHTML = highlightCode(code);
}

function updateLineNumbers() {
    const lines = codeEditor.value.split('\n').length;
    let numbers = '';
    for (let i = 1; i <= lines; i++) {
        numbers += i + '\n';
    }
    lineNumbers.textContent = numbers;
}

// 编辑器功能
function initEditor() {
    codeEditor.addEventListener('input', function() {
        updateHighlight();
        updateLineNumbers();
    });
    codeEditor.addEventListener('scroll', function() {
        highlightLayer.scrollTop = codeEditor.scrollTop;
        highlightLayer.scrollLeft = codeEditor.scrollLeft;
        lineNumbers.scrollTop = codeEditor.scrollTop;
    });
    codeEditor.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') {
            e.preventDefault();
            runCode();
            return;
        }
        
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            saveCode();
            return;
        }
        
        if (e.key === 'Tab') {
            e.preventDefault();
            insertAtCursor('    ');
            return;
        }
        
        if (autocompleteDropdown.classList.contains('visible')) {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                navigateAutocomplete(e.key === 'ArrowDown' ? 1 : -1);
                return;
            }
            if (e.key === 'Enter' || e.key === 'Tab') {
                e.preventDefault();
                selectAutocompleteItem();
                return;
            }
            if (e.key === 'Escape') {
                hideAutocomplete();
                return;
            }
        }
    });
    codeEditor.addEventListener('input', function(e) {
        const cursorPos = codeEditor.selectionStart;
        const textBefore = codeEditor.value.substring(0, cursorPos);
        const lastWord = textBefore.match(/[\w]*$/)?.[0] || '';
        
        if (lastWord.length >= 2) {
            showAutocomplete(lastWord);
        } else {
            hideAutocomplete();
        }
    });
    document.addEventListener('click', function(e) {
        if (!autocompleteDropdown.contains(e.target) && e.target !== codeEditor) {
            hideAutocomplete();
        }
    });
}

function insertAtCursor(text) {
    const start = codeEditor.selectionStart;
    const end = codeEditor.selectionEnd;
    codeEditor.value = codeEditor.value.substring(0, start) + text + codeEditor.value.substring(end);
    codeEditor.selectionStart = codeEditor.selectionEnd = start + text.length;
    updateHighlight();
    updateLineNumbers();
}

// 代码补全
function showAutocomplete(prefix) {
    const filtered = completions.filter(item => 
        item.text.toLowerCase().startsWith(prefix.toLowerCase())
    );
    
    if (filtered.length === 0) {
        hideAutocomplete();
        return;
    }
    
    autocompleteItems = filtered;
    selectedIndex = 0;
    
    let html = '';
    filtered.forEach((item, index) => {
        html += `
            <div class="autocomplete-item ${index === 0 ? 'selected' : ''}" 
                 data-index="${index}" 
                 onclick="selectAutocompleteByIndex(${index})">
                <div class="autocomplete-icon ${item.type}">${item.text.charAt(0).toUpperCase()}</div>
                <span>${item.text}</span>
                <span class="autocomplete-detail">${item.detail}</span>
            </div>
        `;
    });
    
    autocompleteDropdown.innerHTML = html;
    
    const rect = codeEditor.getBoundingClientRect();
    autocompleteDropdown.style.left = Math.min(rect.left + 60, window.innerWidth - 270) + 'px';
    autocompleteDropdown.style.top = (rect.top + 100) + 'px';
    
    autocompleteDropdown.classList.add('visible');
}

function hideAutocomplete() {
    autocompleteDropdown.classList.remove('visible');
}

function navigateAutocomplete(direction) {
    const items = autocompleteDropdown.querySelectorAll('.autocomplete-item');
    items[selectedIndex].classList.remove('selected');
    selectedIndex = (selectedIndex + direction + autocompleteItems.length) % autocompleteItems.length;
    items[selectedIndex].classList.add('selected');
    items[selectedIndex].scrollIntoView({ block: 'nearest' });
}

function selectAutocompleteItem() {
    if (autocompleteItems.length === 0) return;
    selectAutocompleteByIndex(selectedIndex);
}

function selectAutocompleteByIndex(index) {
    const item = autocompleteItems[index];
    if (!item) return;
    
    const cursorPos = codeEditor.selectionStart;
    const textBefore = codeEditor.value.substring(0, cursorPos);
    const wordMatch = textBefore.match(/([\w]*)$/);
    const wordStart = wordMatch ? cursorPos - wordMatch[1].length : cursorPos;
    
    const textAfter = codeEditor.value.substring(cursorPos);
    codeEditor.value = codeEditor.value.substring(0, wordStart) + item.text + textAfter;
    
    const newPos = wordStart + item.text.length;
    codeEditor.selectionStart = codeEditor.selectionEnd = newPos;
    
    hideAutocomplete();
    updateHighlight();
    updateLineNumbers();
    codeEditor.focus();
}

// 示例下拉菜单
function initExampleDropdown() {
    const menu = document.getElementById('exampleMenu');
    let html = '<div class="dropdown-header">选择示例代码</div>';
    
    examples.forEach((ex, index) => {
        html += `
            <div class="dropdown-item" onclick="loadExample(${index})">
                <i class="${ex.icon}"></i>
                <div class="dropdown-item-content">
                    <div class="dropdown-item-title">${ex.title}</div>
                    <div class="dropdown-item-preview">${ex.preview}</div>
                </div>
                <span class="dropdown-item-badge badge-${ex.difficulty}">
                    ${ex.difficulty === 'easy' ? '简单' : ex.difficulty === 'medium' ? '中等' : '困难'}
                </span>
            </div>
        `;
    });
    
    menu.innerHTML = html;
}

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('open');
}

document.addEventListener('click', function(e) {
    document.querySelectorAll('.dropdown').forEach(d => {
        if (!d.contains(e.target)) {
            d.classList.remove('open');
        }
    });
});

function loadExample(index) {
    if (index >= 0 && index < examples.length) {
        codeEditor.value = examples[index].code;
        updateHighlight();
        updateLineNumbers();
        clearOutput();
        addOutputLine("✅ 已加载示例: " + examples[index].title, "info");
        addOutputLine("点击 '运行代码' 按钮执行", "info");
        document.getElementById('exampleDropdown').classList.remove('open');
    }
}

// 代码执行
function runCode() {
    const code = codeEditor.value;
    clearOutput();
    
    addOutputLine("🚀 开始执行代码...", "info");
    addOutputLine("═".repeat(50), "info");
    
    try {
        const lines = code.split('\n');
        let variables = {};
        
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();
            
            if (!line || line.startsWith('#')) continue;
            
            if (line.startsWith('print(') || line.includes('print(')) {
                handlePrint(line, variables);
            }
            else if (line.startsWith('var ')) {
                handleVarDeclaration(line, variables);
            }
            else if (line.match(/^\w+\s*[+\-*/]?=/) && !line.includes('==')) {
                handleAssignment(line, variables);
            }
            else if (line.startsWith('func ')) {
                const funcMatch = line.match(/func\s+(\w+)\s*\(([^)]*)\)/);
                if (funcMatch) {
                    addOutputLine(`[函数定义] ${funcMatch[1]}(${funcMatch[2]})`, "info");
                }
            }
            else if (line.startsWith('class_name ')) {
                addOutputLine(`[类定义] ${line.substring(11)}`, "info");
            }
        }
        
        addOutputLine("═".repeat(50), "info");
        addOutputLine("✅ 代码执行完成!", "info");
        
    } catch (error) {
        addOutputLine("═".repeat(50), "info");
        addOutputLine("❌ 执行错误: " + error.message, "error");
    }
}

function handlePrint(line, variables) {
    const printMatch = line.match(/print\s*\((.+)\)/s);
    if (!printMatch) return;
    
    let content = printMatch[1];
    
    if (content.includes(',')) {
        const parts = splitPrintArgs(content);
        let result = '';
        parts.forEach((part, index) => {
            if (index > 0) result += ' ';
            result += evaluateExpression(part.trim(), variables);
        });
        addOutputLine(result, "success");
    } else {
        const result = evaluateExpression(content.trim(), variables);
        addOutputLine(String(result), "success");
    }
}

function splitPrintArgs(content) {
    const parts = [];
    let current = '';
    let depth = 0;
    let inString = false;
    let stringChar = '';
    
    for (let i = 0; i < content.length; i++) {
        const char = content[i];
        
        if ((char === '"' || char === "'") && content[i-1] !== '\\') {
            if (!inString) {
                inString = true;
                stringChar = char;
            } else if (char === stringChar) {
                inString = false;
            }
        }
        
        if (char === '(' || char === '[') depth++;
        if (char === ')' || char === ']') depth--;
        
        if (char === ',' && !inString && depth === 0) {
            parts.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    if (current) parts.push(current);
    
    return parts;
}

function handleVarDeclaration(line, variables) {
    const match = line.match(/var\s+(\w+)(?::\s*\w+)?\s*(?:=\s*(.+))?$/);
    if (match) {
        const varName = match[1];
        const valueExpr = match[2];
        if (valueExpr) {
            variables[varName] = evaluateExpression(valueExpr, variables);
        }
    }
}

function handleAssignment(line, variables) {
    const match = line.match(/^(\w+)\s*([+\-*/]?=)\s*(.+)$/);
    if (match) {
        const varName = match[1];
        const operator = match[2];
        const value = evaluateExpression(match[3], variables);
        
        if (operator === '+=') {
            variables[varName] = (variables[varName] || 0) + value;
        } else if (operator === '-=') {
            variables[varName] = (variables[varName] || 0) - value;
        } else if (operator === '*=') {
            variables[varName] = (variables[varName] || 0) * value;
        } else if (operator === '/=') {
            variables[varName] = (variables[varName] || 0) / value;
        } else {
            variables[varName] = value;
        }
    }
}

function evaluateExpression(expr, variables) {
    expr = expr.trim();
    
    if ((expr.startsWith('"') && expr.endsWith('"')) || 
        (expr.startsWith("'") && expr.endsWith("'"))) {
        return expr.slice(1, -1);
    }
    
    if (expr === 'true') return true;
    if (expr === 'false') return false;
    
    if (!isNaN(expr) && expr !== '') {
        return parseFloat(expr);
    }
    
    if (expr.startsWith('str(')) {
        const inner = expr.match(/str\((.+)\)/)?.[1];
        return inner ? String(evaluateExpression(inner, variables)) : '';
    }
    if (expr.startsWith('int(')) {
        const inner = expr.match(/int\((.+)\)/)?.[1];
        return inner ? parseInt(evaluateExpression(inner, variables)) : 0;
    }
    if (expr.startsWith('float(')) {
        const inner = expr.match(/float\((.+)\)/)?.[1];
        return inner ? parseFloat(evaluateExpression(inner, variables)) : 0;
    }
    if (expr === 'randi()') return Math.floor(Math.random() * 1000000);
    if (expr === 'randf()') return Math.random();
    if (expr.startsWith('max(')) {
        const argsMatch = expr.match(/max\((.+)\)/);
        if (argsMatch) {
            const args = splitPrintArgs(argsMatch[1]).map(a => evaluateExpression(a.trim(), variables));
            return Math.max(...args);
        }
    }
    if (expr.startsWith('min(')) {
        const argsMatch = expr.match(/min\((.+)\)/);
        if (argsMatch) {
            const args = splitPrintArgs(argsMatch[1]).map(a => evaluateExpression(a.trim(), variables));
            return Math.min(...args);
        }
    }
    if (expr.startsWith('abs(')) {
        const inner = expr.match(/abs\((.+)\)/)?.[1];
        return inner ? Math.abs(evaluateExpression(inner, variables)) : 0;
    }
    if (expr.startsWith('sqrt(')) {
        const inner = expr.match(/sqrt\((.+)\)/)?.[1];
        return inner ? Math.sqrt(evaluateExpression(inner, variables)) : 0;
    }
    
    if (expr.includes(' + ')) {
        const parts = expr.split(' + ').map(p => evaluateExpression(p.trim(), variables));
        if (parts.every(p => typeof p === 'string' || typeof p === 'number')) {
            return parts.join('');
        }
    }
    
    if (/^[\d\s+\-*/.]+$/.test(expr)) {
        try { return eval(expr); } catch (e) { return expr; }
    }
    
    if (variables.hasOwnProperty(expr)) {
        return variables[expr];
    }
    
    return expr;
}

function addOutputLine(text, type = "info") {
    const line = document.createElement('div');
    line.className = 'output-line ' + type;
    line.textContent = text;
    outputArea.appendChild(line);
    outputArea.scrollTop = outputArea.scrollHeight;
}

function clearOutput() {
    outputArea.innerHTML = '';
}

function clearCode() {
    codeEditor.value = '';
    updateHighlight();
    updateLineNumbers();
    addOutputLine("📝 代码编辑器已清空", "info");
}

// 格式化代码
function formatCode() {
    let code = codeEditor.value;
    const lines = code.split('\n');
    let formattedLines = [];
    let indentLevel = 0;
    const indentStr = '    ';
    
    const decreaseKeywords = ['elif', 'else', 'except', 'finally'];
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        const trimmedLine = line.trim();
        
        if (!trimmedLine) {
            formattedLines.push('');
            continue;
        }
        
        if (trimmedLine.startsWith('#')) {
            formattedLines.push(indentStr.repeat(indentLevel) + trimmedLine);
            continue;
        }
        
        let shouldDecrease = decreaseKeywords.some(kw => 
            trimmedLine.startsWith(kw + ':') || trimmedLine.startsWith(kw + ' ')
        );
        
        let currentIndent = shouldDecrease && indentLevel > 0 ? indentLevel - 1 : indentLevel;
        
        formattedLines.push(indentStr.repeat(currentIndent) + trimmedLine);
        
        if (trimmedLine.endsWith(':') && !trimmedLine.startsWith('#')) {
            indentLevel++;
        }
    }
    
    codeEditor.value = formattedLines.join('\n');
    updateHighlight();
    updateLineNumbers();
    addOutputLine("✨ 代码已格式化", "info");
}

// 保存和分享
function saveCode() {
    const code = codeEditor.value;
    if (!code.trim()) {
        alert('代码编辑器为空，无法保存。');
        return;
    }
    
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'script.gd';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    addOutputLine("💾 代码已保存为 script.gd", "info");
}

function shareCode() {
    const code = codeEditor.value;
    if (!code.trim()) {
        alert('代码编辑器为空，无法分享。');
        return;
    }
    
    try {
        const encoded = btoa(unescape(encodeURIComponent(code)));
        const shareUrl = window.location.href.split('?')[0] + '?code=' + encoded;
        
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('分享链接已复制到剪贴板！');
        }).catch(() => {
            prompt('分享链接:', shareUrl);
        });
    } catch (e) {
        alert('分享链接生成失败');
    }
}

// 面板切换
function switchPanel(panel) {
    const codePanel = document.getElementById('codePanel');
    const tutorialPanel = document.getElementById('tutorialPanel');
    
    document.querySelectorAll('.sidebar-nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.sidebar-nav-item').classList.add('active');
    
    if (panel === 'code') {
        codePanel.classList.remove('hidden');
        tutorialPanel.classList.remove('visible');
    } else if (panel === 'tutorial') {
        codePanel.classList.add('hidden');
        tutorialPanel.classList.add('visible');
    }
}

function scrollToSection(sectionId) {
    const codePanel = document.getElementById('codePanel');
    const tutorialPanel = document.getElementById('tutorialPanel');
    
    codePanel.classList.add('hidden');
    tutorialPanel.classList.add('visible');
    
    document.querySelectorAll('.sidebar-nav-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.sidebar-submenu-item').forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
    
    setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}

// 返回顶部
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}