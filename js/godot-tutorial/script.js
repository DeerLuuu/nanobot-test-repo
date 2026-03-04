// Godot教程网站 - 增强交互功能

// 初始化函数
function initTutorial() {
    console.log('Godot教程网站初始化...');
    
    // 检查本地存储的学习进度
    loadProgress();
    
    // 设置事件监听器
    setupEventListeners();
    
    // 初始化代码编辑器
    initCodeEditors();
    
    // 显示欢迎消息
    showWelcomeMessage();
    
    // 开始学习计时
    startLearningTimer();
}

// 加载学习进度
function loadProgress() {
    const savedProgress = localStorage.getItem('godotTutorialProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        
        // 恢复复选框状态
        if (progress.checkboxes) {
            progress.checkboxes.forEach((isChecked, index) => {
                const checkbox = document.querySelector(`.checklist input[type="checkbox"]:nth-child(${index + 1})`);
                if (checkbox) {
                    checkbox.checked = isChecked;
                }
            });
        }
        
        // 恢复其他状态
        if (progress.folders) {
            progress.folders.forEach(folder => {
                createFolderUI(folder);
            });
        }
        
        // 更新进度显示
        updateProgress();
        
        console.log('已恢复学习进度:', progress);
    }
}

// 保存学习进度
function saveProgress() {
    const checkboxes = Array.from(document.querySelectorAll('.checklist input[type="checkbox"]'))
        .map(cb => cb.checked);
    
    const folders = [];
    const folderElements = document.querySelectorAll('#folder-structure .folder-item');
    folderElements.forEach(el => {
        folders.push(el.dataset.folderName);
    });
    
    const progress = {
        checkboxes: checkboxes,
        folders: folders,
        timestamp: new Date().toISOString(),
        totalTime: getTotalLearningTime()
    };
    
    localStorage.setItem('godotTutorialProgress', JSON.stringify(progress));
    console.log('学习进度已保存');
}

// 设置事件监听器
function setupEventListeners() {
    // 复选框变化时保存进度
    document.querySelectorAll('.checklist input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateProgress();
            saveProgress();
            showAchievement(checkbox.id);
        });
    });
    
    // 按钮点击效果
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // 添加点击效果
            this.classList.add('btn-clicked');
            setTimeout(() => {
                this.classList.remove('btn-clicked');
            }, 300);
        });
    });
    
    // 页面离开时保存进度
    window.addEventListener('beforeunload', saveProgress);
    
    // 页面可见性变化
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            saveProgress();
        }
    });
}

// 初始化代码编辑器
function initCodeEditors() {
    // 为所有代码块添加复制按钮
    document.querySelectorAll('.code-editor').forEach(editor => {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'btn btn-small';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i> 复制代码';
        copyBtn.style.position = 'absolute';
        copyBtn.style.top = '10px';
        copyBtn.style.right = '10px';
        copyBtn.style.zIndex = '10';
        copyBtn.style.padding = '5px 10px';
        copyBtn.style.fontSize = '0.8rem';
        
        copyBtn.addEventListener('click', function() {
            const code = editor.querySelector('.editor-content').textContent;
            navigator.clipboard.writeText(code).then(() => {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> 已复制';
                this.style.background = '#27ae60';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = '';
                }, 2000);
            });
        });
        
        editor.style.position = 'relative';
        editor.appendChild(copyBtn);
    });
}

// 显示欢迎消息
function showWelcomeMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().toISOString();
    
    if (!lastVisit) {
        // 首次访问
        setTimeout(() => {
            alert('🎉 欢迎来到Godot HD2D生存游戏教程！\n\n开始你的游戏开发之旅吧！');
        }, 1000);
    } else {
        const daysSinceLastVisit = Math.floor((new Date(now) - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
        
        if (daysSinceLastVisit > 0) {
            setTimeout(() => {
                alert(`欢迎回来！\n上次学习是在 ${daysSinceLastVisit} 天前。\n继续你的学习进度吧！`);
            }, 1000);
        }
    }
    
    localStorage.setItem('lastVisit', now);
}

// 开始学习计时
function startLearningTimer() {
    const startTime = localStorage.getItem('learningStartTime');
    if (!startTime) {
        localStorage.setItem('learningStartTime', new Date().toISOString());
    }
}

// 获取总学习时间
function getTotalLearningTime() {
    const startTime = localStorage.getItem('learningStartTime');
    if (startTime) {
        const diff = new Date() - new Date(startTime);
        return Math.floor(diff / 1000); // 返回秒数
    }
    return 0;
}

// 显示成就
function showAchievement(goalId) {
    const achievements = {
        'goal1': { title: '环境搭建大师', message: '成功安装所有开发工具！' },
        'goal2': { title: '项目创建者', message: '创建了第一个Godot项目！' },
        'goal3': { title: '组织专家', message: '建立了规范的项目结构！' },
        'goal4': { title: '版本控制专家', message: '掌握了Git基础操作！' },
        'goal5': { title: 'Hello World完成者', message: '运行了第一个Godot程序！' }
    };
    
    const achievement = achievements[goalId];
    if (achievement) {
        showNotification(achievement.title, achievement.message, 'success');
    }
}

// 显示通知
function showNotification(title, message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        </div>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        padding: 15px;
        display: flex;
        align-items: center;
        gap: 15px;
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // 自动消失
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// 创建文件夹UI
function createFolderUI(folderName) {
    const structure = document.getElementById('folder-structure');
    let current = structure.innerHTML;
    
    if (!current.includes(folderName + '/')) {
        const lines = current.split('<br>');
        const lastLineIndex = lines.length - 2;
        
        if (lines[lastLineIndex].includes('(等待创建文件夹...)')) {
            lines[lastLineIndex] = lines[lastLineIndex].replace('(等待创建文件夹...)', '├── ' + folderName + '/');
            lines.push('└── (等待创建文件夹...)');
        } else {
            // 替换最后一行
            lines[lines.length - 2] = lines[lines.length - 2].replace('└──', '├──');
            lines[lines.length - 1] = '└── ' + folderName + '/';
            lines.push('&nbsp;&nbsp;&nbsp;&nbsp;(等待创建文件夹...)');
        }
        
        structure.innerHTML = lines.join('<br>');
        
        // 添加文件夹项标记
        const folderItem = document.createElement('span');
        folderItem.className = 'folder-item';
        folderItem.dataset.folderName = folderName;
        folderItem.style.display = 'none';
        structure.appendChild(folderItem);
    }
}

// 增强的Git命令执行
function executeEnhancedCommand(cmd) {
    const output = document.getElementById('terminal-output');
    let message = '';
    let success = true;
    
    switch(cmd) {
        case 'clone':
            message = `
$ git clone https://github.com/你的用户名/godot-hd2d-survival.git
Cloning into 'godot-hd2d-survival'...
remote: Enumerating objects: 45, done.
remote: Counting objects: 100% (45/45), done.
remote: Compressing objects: 100% (38/38), done.
remote: Total 45 (delta 15), reused 30 (delta 10), pack-reused 0
Receiving objects: 100% (45/45), 15.67 KiB | 2.23 MiB/s, done.
Resolving deltas: 100% (15/15), done.
✅ 仓库克隆成功！`;
            break;
        case 'add':
            message = `
$ git add .
✅ 所有更改已添加到暂存区
📁 已暂存文件: project.godot, README.md, .gitignore`;
            break;
        case 'commit':
            message = `
$ git commit -m "初始项目设置"
[main 1234567] 初始项目设置
 3 files changed, 150 insertions(+)
 create mode 100644 project.godot
 create mode 100644 README.md
 create mode 100644 .gitignore
✅ 提交成功！`;
            break;
        case 'status':
            message = `
$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
✅ 工作区干净`;
            break;
        case 'log':
            message = `
$ git log --oneline
1234567 (HEAD -> main) 初始项目设置
abcdef0 初始化仓库
✅ 提交历史查看成功`;
            break;
        default:
            message = `❌ 命令未找到: ${cmd}\n💡 输入 'help' 查看可用命令`;
            success = false;
    }
    
    output.innerHTML += '\n' + message;
    output.scrollTop = output.scrollHeight;
    
    if (success && ['clone', 'add', 'commit'].includes(cmd)) {
        document.getElementById('goal4').checked = true;
        updateProgress();
        saveProgress();
    }
    
    return success;
}

// 增强的终端命令处理
function executeEnhancedTerminalCommand() {
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');
    const command = input.value.trim();
    
    if (command) {
        // 添加命令到输出
        const commandLine = document.createElement('div');
        commandLine.textContent = '$ ' + command;
        commandLine.style.color = '#4CAF50';
        commandLine.style.fontWeight = 'bold';
        output.appendChild(commandLine);
        
        // 处理命令
        let response = '';
        let isError = false;
        
        const cmd = command.toLowerCase().split(' ')[0];
        const args = command.split(' ').slice(1);
        
        switch(cmd) {
            case 'help':
                response = `
可用命令:
  help                    - 显示帮助信息
  pwd                     - 显示当前目录
  ls [目录]               - 列出文件
  mkdir <目录名>          - 创建目录
  cd <目录>               - 切换目录
  clear                   - 清屏
  git <命令>              - Git相关命令
  echo <文本>             - 显示文本
  date                    - 显示当前日期时间
  whoami                  - 显示当前用户`;
                break;
            case 'pwd':
                response = '/home/user/godot-hd2d-survival';
                break;
            case 'ls':
                if (args.length > 0) {
                    response = `ls: 无法访问 '${args[0]}': 没有那个文件或目录`;
                    isError = true;
                } else {
                    response = 'project.godot\nREADME.md\n.gitignore\nassets/\nscenes/\nscripts/';
                }
                break;
            case 'mkdir':
                if (args.length === 0) {
                    response = 'mkdir: 缺少操作数\n请尝试 "mkdir 目录名"';
                    isError = true;
                } else {
                    response = `✅ 已创建目录: ${args[0]}`;
                    createFolderUI(args[0]);
                }
                break;
            case 'cd':
                if (args.length === 0) {
                    response = 'cd: 缺少参数\n请指定要切换的目录';
                    isError = true;
                } else {
                    response = `✅ 已切换到目录: ${args[0]}`;
                }
                break;
            case 'clear':
                output.innerHTML = '<span style="color: #4CAF50; font-weight: bold;">$</span> 终端已清空\n<span style="color: #4CAF50; font-weight: bold;">$</span> 输入 \'help\' 查看可用命令';
                input.value = '';
                return;
            case 'git':
                if (args.length === 0) {
                    response = 'git: 缺少命令\n请指定Git命令，如 "git status"';
                    isError = true;
                } else {
                    executeEnhancedCommand(args[0]);
                    input.value = '';
                    return;
                }
                break;
            case 'echo':
                response = args.join(' ');
                break;
            case 'date':
                response = new Date().toLocaleString('zh-CN');
                break;
            case 'whoami':
                response = 'tutorial-user';
                break;
            default:
                response = `❌ 命令未找到: ${command}\n💡 输入 'help' 查看可用命令`;
                isError = true;
        }
        
        // 添加响应到输出
        const responseLine = document.createElement('div');
        responseLine.textContent = response;
        responseLine.style.color = isError ? '#F44336' : '#FFFFFF';
        responseLine.style.whiteSpace = 'pre-wrap';
        output.appendChild(responseLine);
        
        // 滚动到底部
        output.scrollTop = output.scrollHeight;
        input.value = '';
    }
}

// 生成详细的学习报告
function generateLearningReport() {
    const totalGoals = document.querySelectorAll('.checklist input[type="checkbox"]').length;
    const completedGoals = document.querySelectorAll('.checklist input[type="checkbox"]:checked').length;
    const percentage = Math.round((completedGoals / totalGoals) * 100);
    
    const totalTime = getTotalLearningTime();
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = totalTime % 60;
    
    const folders = Array.from(document.querySelectorAll('#folder-structure .folder-item'))
        .map(el => el.dataset.folderName)
        .filter(name => name);
    
    const report = `
=== Godot教程学习报告 ===

📊 学习进度: ${percentage}%
✅ 完成目标: ${completedGoals}/${totalGoals}
⏱️ 学习时间: ${hours}小时 ${minutes}分钟 ${seconds}秒
📁 创建文件夹: ${folders.length}个
${folders.map(f => `  - ${f}/`).join('\n')}

📅 报告生成时间: ${new Date().toLocaleString('zh-CN')}

💡 学习建议:
${percentage < 50 ? '继续努力，完成更多学习目标！' : 
  percentage < 80 ? '做得不错，快要完成了！' : 
  '太棒了！你已经掌握了大部分内容！'}

🎯 下一步建议:
1. 复习未完成的目标
2. 尝试实际编写代码
3. 参与社区讨论
4. 开始下一个课时

=== 报告结束 ===
`;
    
    return report;
}

// 导出学习报告
function exportLearningReport() {
    const report = generateLearningReport();
    const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `godot-tutorial-report-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('报告导出', '学习报告已成功导出！', 'success');
}

// 重置学习进度
function resetProgress() {
    if (confirm('确定要重置所有学习进度吗？这将清除所有已保存的数据。')) {
        localStorage.clear();
        location.reload();
    }
}

// 添加键盘快捷键
document.addEventListener('keydown', function(e) {
    // Ctrl + S: 保存进度
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        saveProgress();
        showNotification('自动保存', '学习进度已保存！', 'success');
    }
    
    // Ctrl + R: 生成报告
    if (e.ctrlKey && e.key === 'r') {
        e.preventDefault();
        exportLearningReport();
    }
    
    // Ctrl + L: 清空终端
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        document.getElementById('terminal-output').innerHTML = 
            '<span style="color: #4CAF50; font-weight: bold;">$</span> 终端已清空\n' +
            '<span style="color: #4CAF50; font-weight: bold;">$</span> 输入 \'help\' 查看可用命令';
    }
    
    // Tab键在终端中自动补全
    if (e.key === 'Tab' && document.activeElement.id === 'terminal-input') {
        e.preventDefault();
        const input = document.getElementById('terminal-input');
        const commands = ['help', 'pwd', 'ls', 'mkdir', 'cd', 'clear', 'git', 'echo', 'date', 'whoami'];
        const current = input.value.trim();
        
        if (current) {
            const matches = commands.filter(cmd => cmd.startsWith(current));
            if (matches.length === 1) {
                input.value = matches[0] + ' ';
            }
        }
    }
});

// 更新进度函数
function updateProgress() {
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
    const total = checkboxes.length;
    const percentage = (checked / total) * 100;
    
    const progressBar = document.getElementById('progress');
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
    
    // 更新子进度条
    updateSubProgress();
}

// 更新子进度条
function updateSubProgress() {
    // 环境安装进度（目标1-3）
    const envGoals = ['goal1', 'goal2', 'goal3'];
    const envChecked = envGoals.filter(id => {
        const checkbox = document.getElementById(id);
        return checkbox ? checkbox.checked : false;
    }).length;
    const envPercentage = (envChecked / envGoals.length) * 100;
    
    const progressBar1 = document.getElementById('progress-bar1');
    const progressText1 = document.getElementById('progress1');
    if (progressBar1) progressBar1.style.width = envPercentage + '%';
    if (progressText1) progressText1.textContent = Math.round(envPercentage) + '%';
    
    // Git掌握进度（目标4-5）
    const gitGoals = ['goal4', 'goal5'];
    const gitChecked = gitGoals.filter(id => {
        const checkbox = document.getElementById(id);
        return checkbox ? checkbox.checked : false;
    }).length;
    const gitPercentage = (gitChecked / gitGoals.length) * 100;
    
    const progressBar2 = document.getElementById('progress-bar2');
    const progressText2 = document.getElementById('progress2');
    if (progressBar2) progressBar2.style.width = gitPercentage + '%';
    if (progressText2) progressText2.textContent = Math.round(gitPercentage) + '%';
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initTutorial);

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
@keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
}

.btn-clicked {
    animation: clickEffect 0.3s;
}

@keyframes clickEffect {
    0% { transform: scale(1); }
    50% { transform: scale(0.95); }
    100% { transform: scale(1); }
}

.notification-success .notification-icon {
    color: #27ae60;
}

.notification-info .notification-icon {
    color: #3498db;
}

.notification-warning .notification-icon {
    color: #f39c12;
}

.notification-error .notification-icon {
    color: #e74c3c;
}

.notification-close {
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
    padding: 0;
    margin-left: auto;
}

.notification-close:hover {
    color: #333;
}
`;
document.head.appendChild(style);

// 导出函数供HTML使用
window.executeEnhancedCommand = executeEnhancedCommand;
window.executeEnhancedTerminalCommand = executeEnhancedTerminalCommand;
window.exportLearningReport = exportLearningReport;
window.resetProgress = resetProgress;