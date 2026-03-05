// 课件数据
const slides = [
    {
        id: 1,
        title: "课程概述",
        subtitle: "第一课时：基础准备与环境搭建",
        icon: "fas fa-bullseye",
        badge: { icon: "fas fa-clock", text: "预计2-3小时" },
        content: `
            <div class="content-section">
                <div class="learning-objectives">
                    <h3 class="section-title"><i class="fas fa-star"></i> 学习目标</h3>
                    <ul class="content-list">
                        <li>完成所有开发工具的安装和配置</li>
                        <li>创建并初始化Godot项目</li>
                        <li>创建标准项目文件夹结构</li>
                        <li>掌握基础版本控制流程</li>
                        <li>运行第一个Godot程序</li>
                    </ul>
                </div>
            </div>
            <div class="tip-box success">
                <h5><i class="fas fa-lightbulb" style="color: var(--success-color);"></i> 学习建议</h5>
                <p>建议按照顺序完成每个步骤，遇到问题可以在GitHub Issues提问。本课时是整个教程的基础，请务必完成所有练习。</p>
            </div>
        `
    },
    {
        id: 2,
        title: "安装 Godot 引擎",
        subtitle: "方式一：从官网下载",
        icon: "fas fa-download",
        badge: { icon: "fas fa-globe", text: "官网下载" },
        content: `
            <div class="content-section">
                <h3 class="section-title"><i class="fas fa-list-ol"></i> 下载步骤</h3>
                <ul class="content-list">
                    <li><span class="step-badge">1</span>访问 <a href="https://godotengine.org/download" class="link-item" target="_blank">Godot官网下载页 <i class="fas fa-external-link-alt"></i></a></li>
                    <li><span class="step-badge">2</span>选择 Godot 4.x 版本（推荐最新稳定版）</li>
                    <li><span class="step-badge">3</span>下载 Standard version（标准版），选择对应操作系统</li>
                    <li><span class="step-badge">4</span>解压到合适位置（建议：D:\\Godot\\ 或 ~/Godot/）</li>
                    <li><span class="step-badge">5</span>双击 Godot_v4.x.x_stable_win64.exe 启动引擎</li>
                </ul>
            </div>
            <div class="tip-box">
                <h5><i class="fas fa-info-circle" style="color: var(--primary-color);"></i> 提示</h5>
                <p>建议将Godot添加到系统PATH环境变量，方便从命令行启动。Windows用户可以将Godot文件夹添加到系统环境变量中。</p>
            </div>
        `
    },
    {
        id: 3,
        title: "安装 Godot 引擎",
        subtitle: "方式二：通过Steam安装",
        icon: "fab fa-steam",
        badge: { icon: "fab fa-steam", text: "Steam安装" },
        content: `
            <div class="content-section">
                <h3 class="section-title"><i class="fab fa-steam"></i> Steam安装步骤</h3>
                <ul class="content-list">
                    <li><span class="step-badge">1</span>打开 Steam 客户端</li>
                    <li><span class="step-badge">2</span>在商店中搜索 "Godot Engine"</li>
                    <li><span class="step-badge">3</span>点击"安装"按钮（完全免费）</li>
                    <li><span class="step-badge">4</span>等待下载和安装完成</li>
                    <li><span class="step-badge">5</span>在游戏库中找到并启动 Godot</li>
                </ul>
            </div>
            <div class="tip-box success">
                <h5><i class="fas fa-check-circle" style="color: var(--success-color);"></i> Steam安装优点</h5>
                <p>通过Steam安装可以自动更新到最新版本，方便管理，适合经常使用Steam的用户。Steam还会自动处理依赖项。</p>
            </div>
        `
    },
    {
        id: 4,
        title: "安装 Git 和 SourceTree",
        subtitle: "版本控制工具安装",
        icon: "fab fa-git-alt",
        badge: { icon: "fas fa-code-branch", text: "版本控制" },
        content: `
            <div class="content-section">
                <h3 class="section-title"><i class="fab fa-git-alt"></i> 安装 Git</h3>
                <ul class="content-list">
                    <li>访问 <a href="https://git-scm.com/" class="link-item" target="_blank">Git官网 <i class="fas fa-external-link-alt"></i></a></li>
                    <li>下载对应操作系统的安装包</li>
                    <li>运行安装程序，使用默认设置即可</li>
                    <li>安装完成后，打开命令行输入 <code>git --version</code> 验证</li>
                </ul>
            </div>
            <div class="content-section">
                <h3 class="section-title"><i class="fas fa-code-branch"></i> 安装 SourceTree（可选GUI工具）</h3>
                <ul class="content-list">
                    <li>访问 <a href="https://www.sourcetreeapp.com/" class="link-item" target="_blank">SourceTree官网 <i class="fas fa-external-link-alt"></i></a></li>
                    <li>下载对应平台的版本</li>
                    <li>安装并登录你的Git账户（GitHub/GitLab/Bitbucket）</li>
                </ul>
            </div>
        `
    },
    {
        id: 5,
        title: "Git 基础命令",
        subtitle: "版本控制核心操作",
        icon: "fas fa-terminal",
        badge: { icon: "fas fa-terminal", text: "命令行" },
        content: `
            <div class="content-section">
                <h3 class="section-title"><i class="fas fa-terminal"></i> 常用Git命令</h3>
                <div class="code-block">
                    <code><span class="code-comment"># 克隆远程仓库到本地</span>
<span class="code-function">git clone</span> https://github.com/用户名/项目名.git

<span class="code-comment"># 查看当前状态</span>
<span class="code-function">git status</span>

<span class="code-comment"># 添加所有修改到暂存区</span>
<span class="code-function">git add</span> .

<span class="code-comment"># 提交更改（附带说明）</span>
<span class="code-function">git commit</span> -m <span class="code-string">"提交说明"</span>

<span class="code-comment"># 推送到远程仓库</span>
<span class="code-function">git push</span> origin main

<span class="code-comment"># 拉取远程更新</span>
<span class="code-function">git pull</span> origin main</code>
                </div>
            </div>
            <div class="tip-box">
                <h5><i class="fas fa-info-circle" style="color: var(--primary-color);"></i> 记忆技巧</h5>
                <p>Git工作流程：修改 → add(添加) → commit(提交) → push(推送)。可以理解为：把文件放进盒子，封箱，寄出。</p>
            </div>
        `
    },
    {
        id: 6,
        title: "创建 Godot 项目",
        subtitle: "项目初始化步骤",
        icon: "fas fa-folder-plus",
        badge: { icon: "fas fa-folder-plus", text: "项目创建" },
        content: `
            <div class="content-section">
                <h3 class="section-title"><i class="fas fa-list-ol"></i> 项目创建步骤</h3>
                <ul class="content-list">
                    <li><span class="step-badge">1</span>打开Godot引擎项目管理器</li>
                    <li><span class="step-badge">2</span>点击右侧"新建项目"按钮</li>
                    <li><span class="step-badge">3</span>设置项目名称：<code>godot-hd2d-survival</code></li>
                    <li><span class="step-badge">4</span>选择项目保存路径（避免中文路径）</li>
                    <li><span class="step-badge">5</span>选择渲染器：<strong>Forward+</strong>（推荐）</li>
                    <li><span class="step-badge">6</span>点击"创建并编辑"进入编辑器</li>
                </ul>
            </div>
            <div class="tip-box warning">
                <h5><i class="fas fa-exclamation-triangle" style="color: var(--warning-color);"></i> 注意</h5>
                <p>避免使用中文路径和中文项目名称，可能导致资源加载问题和跨平台兼容性问题。</p>
            </div>
        `
    },
    {
        id: 7,
        title: "项目文件夹结构",
        subtitle: "标准化项目组织",
        icon: "fas fa-folder-tree",
        badge: { icon: "fas fa-folder-tree", text: "目录结构" },
        content: `
            <div class="content-section">
                <h3 class="section-title"><i class="fas fa-folder-tree"></i> 推荐目录结构</h3>
                <div class="code-block">
                    <code>godot-hd2d-survival/
├── <span class="code-function">project.godot</span>     <span class="code-comment"># 项目配置文件</span>
├── <span class="code-type">scenes/</span>           <span class="code-comment"># 场景文件</span>
│   ├── player/      <span class="code-comment"># 玩家相关场景</span>
│   ├── enemies/     <span class="code-comment"># 敌人相关场景</span>
│   └── world/       <span class="code-comment"># 世界/关卡场景</span>
├── <span class="code-type">scripts/</span>          <span class="code-comment"># GDScript脚本</span>
│   ├── player/
│   ├── enemies/
│   └── utils/
├── <span class="code-type">assets/</span>           <span class="code-comment"># 资源文件</span>
│   ├── sprites/     <span class="code-comment"># 精灵图片</span>
│   ├── audio/       <span class="code-comment"># 音效音乐</span>
│   └── fonts/       <span class="code-comment"># 字体文件</span>
├── <span class="code-type">resources/</span>        <span class="code-comment"># Godot资源</span>
└── <span class="code-type">addons/</span>           <span class="code-comment"># 插件目录</span></code>
                </div>
            </div>
            <div class="tip-box success">
                <h5><i class="fas fa-lightbulb" style="color: var(--success-color);"></i> 最佳实践</h5>
                <p>保持文件夹结构清晰有助于项目管理。建议按照功能模块组织文件，便于团队协作和后期维护。</p>
            </div>
        `
    },
    {
        id: 8,
        title: "运行第一个程序",
        subtitle: "Hello World in Godot",
        icon: "fas fa-play-circle",
        badge: { icon: "fas fa-play-circle", text: "实践操作" },
        content: `
            <div class="content-section">
                <h3 class="section-title"><i class="fas fa-list-ol"></i> 创建第一个场景</h3>
                <ul class="content-list">
                    <li>在场景面板中点击"2D场景"创建根节点</li>
                    <li>右键点击根节点 → 添加子节点 → 搜索"Label"</li>
                    <li>在检查器面板设置Label的Text属性为"Hello Godot!"</li>
                    <li>调整Label的位置、字体大小和颜色</li>
                    <li>保存场景：<code>scenes/Main.tscn</code></li>
                </ul>
            </div>
            <div class="content-section">
                <h3 class="section-title"><i class="fas fa-code"></i> 添加简单脚本</h3>
                <div class="code-block">
                    <code><span class="code-keyword">extends</span> Label

<span class="code-comment"># 当节点进入场景树时调用</span>
<span class="code-keyword">func</span> <span class="code-function">_ready</span>():
    <span class="code-function">print</span>(<span class="code-string">"Hello from Godot!"</span>)
    text = <span class="code-string">"Welcome to HD2D Survival!"</span>
    modulate = Color.YELLOW  <span class="code-comment"># 设置文字颜色为黄色</span></code>
                </div>
            </div>
        `
    },
    {
        id: 9,
        title: "课程总结",
        subtitle: "第一课时完成",
        icon: "fas fa-check-circle",
        badge: { icon: "fas fa-clipboard-check", text: "课时总结" },
        content: `
            <div class="content-section">
                <h3 class="section-title"><i class="fas fa-check-circle"></i> 本课时完成事项</h3>
                <ul class="content-list">
                    <li class="completed">安装了Godot引擎</li>
                    <li class="completed">安装了Git和SourceTree</li>
                    <li class="completed">学习了基础Git命令</li>
                    <li class="completed">创建了Godot项目</li>
                    <li class="completed">设置了项目文件夹结构</li>
                    <li class="completed">初始化了版本控制</li>
                    <li class="completed">运行了第一个Godot程序</li>
                </ul>
            </div>
            <div class="content-section">
                <h3 class="section-title"><i class="fas fa-forward"></i> 下一课时预告</h3>
                <ul class="content-list">
                    <li>学习Godot节点系统</li>
                    <li>创建玩家角色</li>
                    <li>实现基础移动控制</li>
                    <li>添加摄像机跟随</li>
                </ul>
            </div>
        `
    },
    {
        id: 10,
        title: "恭喜完成！",
        subtitle: "第一课时学习结束",
        icon: "fas fa-trophy",
        badge: { icon: "fas fa-trophy", text: "完成!" },
        content: `
            <div class="learning-objectives">
                <h3 class="section-title"><i class="fas fa-star"></i> 恭喜完成第一课时！</h3>
                <p style="color: rgba(255,255,255,0.95); margin-top: var(--space-4); font-size: var(--text-lg); line-height: var(--leading-relaxed);">
                    你已经成功搭建了开发环境，为后续的HD2D生存游戏开发打下了坚实基础。继续加油！
                </p>
            </div>
            <div class="content-section" style="margin-top: var(--space-8);">
                <h3 class="section-title"><i class="fas fa-rocket"></i> 继续学习</h3>
                <ul class="content-list">
                    <li><a href="godot-tutorial/index.html" class="link-item"><i class="fas fa-gamepad"></i> 返回教程主页 - 开始下一课时</a></li>
                    <li><a href="godot-tutorial/interactive.html" class="link-item"><i class="fas fa-code"></i> 代码练习 - 巩固GDScript基础</a></li>
                    <li><a href="https://github.com/DeerLuuu/nanobot-test-repo" class="link-item" target="_blank"><i class="fab fa-github"></i> GitHub仓库 - 查看完整代码</a></li>
                    <li><a href="https://docs.godotengine.org/" class="link-item" target="_blank"><i class="fas fa-book"></i> Godot官方文档 - 深入学习</a></li>
                </ul>
            </div>
        `
    }
];

// 状态管理
let currentSlide = 0;
const totalSlides = slides.length;

// DOM 元素
let slideNumber = null;
let titleText = null;
let slideTitle = null;
let slideSubtitle = null;
let slideContent = null;
let slideBadge = null;
let prevBtn = null;
let nextBtn = null;
let progressFill = null;
let progressStart = null;
let indicators = null;
let keyboardHint = null;
let slideCard = null;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化 DOM 元素
    slideNumber = document.getElementById('slideNumber');
    titleText = document.getElementById('titleText');
    slideTitle = document.getElementById('slideTitle');
    slideSubtitle = document.getElementById('slideSubtitle');
    slideContent = document.getElementById('slideContent');
    slideBadge = document.getElementById('slideBadge');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    progressFill = document.getElementById('progressFill');
    progressStart = document.getElementById('progressStart');
    indicators = document.getElementById('indicators');
    keyboardHint = document.getElementById('keyboardHint');
    slideCard = document.getElementById('slideCard');
    
    init();
});

function init() {
    createIndicators();
    updateSlide();
    setupEventListeners();
    showKeyboardHint();
}

// 创建指示器
function createIndicators() {
    indicators.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const btn = document.createElement('button');
        btn.className = 'indicator' + (i === 0 ? ' active' : '');
        btn.setAttribute('aria-label', `跳转到第 ${i + 1} 页`);
        btn.addEventListener('click', () => goToSlide(i));
        indicators.appendChild(btn);
    }
}

// 更新幻灯片
function updateSlide() {
    const slide = slides[currentSlide];
    
    // 更新标题
    slideNumber.textContent = slide.id;
    titleText.textContent = slide.title;
    slideTitle.querySelector('i').className = slide.icon;
    slideSubtitle.textContent = slide.subtitle;
    slideBadge.innerHTML = `<i class="${slide.badge.icon}"></i><span>${slide.badge.text}</span>`;
    slideContent.innerHTML = slide.content;

    const progress = ((currentSlide + 1) / totalSlides) * 100;
    progressFill.style.width = `${progress}%`;
    progressStart.textContent = currentSlide + 1;
    prevBtn.disabled = currentSlide === 0;
    if (currentSlide === totalSlides - 1) {
        nextBtn.innerHTML = '<span>完成</span><i class="fas fa-check"></i>';
    } else {
        nextBtn.innerHTML = '<span>下一页</span><i class="fas fa-chevron-right"></i>';
    }
    document.querySelectorAll('.indicator').forEach((ind, i) => {
        ind.classList.toggle('active', i === currentSlide);
    });
    slideContent.scrollTop = 0;
    slideCard.style.animation = 'none';
    slideCard.offsetHeight; // 强制重绘
    slideCard.style.animation = 'slideIn 0.4s ease-out';
}

// 跳转到指定幻灯片
function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
        currentSlide = index;
        updateSlide();
    }
}

// 上一页
function goToPrev() {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
}

// 下一页
function goToNext() {
    if (currentSlide < totalSlides - 1) {
        goToSlide(currentSlide + 1);
    } else {
        showCompletion();
    }
}

// 显示完成提示
function showCompletion() {
    alert('🎉 恭喜完成第一课时！\n\n你已经掌握了Godot开发环境的基础配置。\n继续前往教程主页开始下一课时的学习！');
}

// 显示键盘提示
function showKeyboardHint() {
    setTimeout(() => {
        keyboardHint.classList.add('visible');
        setTimeout(() => {
            keyboardHint.classList.remove('visible');
        }, 4000);
    }, 1000);
}

// 设置事件监听
function setupEventListeners() {
    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowLeft':
                goToPrev();
                break;
            case 'ArrowRight':
            case ' ':
                e.preventDefault();
                goToNext();
                break;
            case 'Home':
                e.preventDefault();
                goToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                goToSlide(totalSlides - 1);
                break;
        }
    });
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                goToNext();
            } else {
                goToPrev();
            }
        }
    }, { passive: true });
}