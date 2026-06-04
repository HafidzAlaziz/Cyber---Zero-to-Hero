// Configuration: List of available modules and documents
const MODULE_MANIFEST = [
    { id: 'home', title: 'Dashboard Utama', file: 'home.md', type: 'dashboard' },
    { id: 'day-1', title: 'Hari 1: Setup & Instalasi Burp Suite', file: 'materi/01_setup_instalasi.md', type: 'materi' },
    { id: 'day-2', title: 'Hari 2: Navigasi Interface & Site Map', file: 'materi/02_interface_navigation.md', type: 'materi' },
    { id: 'day-3', title: 'Hari 3: HTTP Proxy & Interception', file: 'materi/03_proxy_intercept.md', type: 'materi' },
    { id: 'day-4', title: 'Hari 4: Burp Repeater - Analisis Manual', file: 'materi/04_repeater_manual.md', type: 'materi' },
    { id: 'day-5', title: 'Hari 5: Burp Intruder - Otomatisasi & Fuzzing', file: 'materi/05_intruder_bruteforce.md', type: 'materi' },
    { id: 'day-6', title: 'Hari 6: Menguasai Burp Decoder & Comparer', file: 'materi/06_portswigger_basics.md', type: 'materi' },
    { id: 'day-7', title: 'Hari 7: Praktik PortSwigger Academy', file: 'materi/07_portswigger_labs.md', type: 'materi' },
    { id: 'day-8', title: 'Hari 8: Common Mistakes & Integrasi AI', file: 'materi/08_common_mistakes_ai.md', type: 'materi' },
    { id: 'day-9', title: 'Hari 9: Bug Bounty & Pentesting Workflow', file: 'materi/09_bug_bounty_workflow.md', type: 'materi' },
    { id: 'day-10', title: 'Hari 10: Tantangan Final PortSwigger Academy', file: 'materi/10_tantangan_portswigger.md', type: 'materi' }
];

// Global States
let glossaryData = [];
let progressState = {};

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initClock();
    loadProgress();
    renderSidebarMenu();
    loadContent('home'); // Load default dashboard
    loadGlossaryData();
});

// 1. Live System Clock
function initClock() {
    const clockEl = document.getElementById('live-clock');
    const updateClock = () => {
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        const secs = String(now.getSeconds()).padStart(2, '0');
        clockEl.textContent = `${hrs}:${mins}:${secs}`;
    };
    updateClock();
    setInterval(updateClock, 1000);
}

// 2. Load & Save Learning Progress
function loadProgress() {
    const defaultProgress = {
        'day-1': false,
        'day-2': false,
        'day-3': false,
        'day-4': false,
        'day-5': false,
        'day-6': false,
        'day-7': false,
        'day-8': false,
        'day-9': false,
        'day-10': false
    };

    const stored = localStorage.getItem('cyber_academy_progress');
    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            progressState = { ...defaultProgress, ...parsed };
        } catch (e) {
            progressState = defaultProgress;
        }
    } else {
        progressState = defaultProgress;
    }
    updateProgressBar();
}

function saveProgress(moduleId, completed) {
    progressState[moduleId] = completed;
    localStorage.setItem('cyber_academy_progress', JSON.stringify(progressState));
    updateProgressBar();
    renderSidebarMenu(); // Re-render to update completion styling
}

function updateProgressBar() {
    const total = Object.keys(progressState).length;
    if (total === 0) return;
    
    const completedCount = Object.values(progressState).filter(val => val === true).length;
    const percentage = Math.round((completedCount / total) * 100);
    
    document.getElementById('progress-percentage').textContent = `${percentage}%`;
    document.getElementById('progress-bar-fill').style.width = `${percentage}%`;
}

// 3. Render Sidebar Menu
function renderSidebarMenu() {
    const listEl = document.getElementById('materi-list');
    listEl.innerHTML = '';
    
    const materiModules = MODULE_MANIFEST.filter(m => m.type === 'materi');
    
    materiModules.forEach(mod => {
        const li = document.createElement('li');
        li.className = 'menu-item';
        if (mod.planned) {
            li.classList.add('planned-item');
            li.style.opacity = '0.5';
            li.style.cursor = 'not-allowed';
        }
        
        // Active highlight checked inside loadContent
        li.setAttribute('data-id', mod.id);
        
        const isCompleted = progressState[mod.id] === true;
        if (isCompleted) {
            li.classList.add('completed');
        }
        
        const iconClass = isCompleted ? 'ri-checkbox-circle-fill' : 'ri-book-open-line';
        const iconColor = isCompleted ? 'style="color: var(--accent-neon);"' : '';
        
        li.innerHTML = `
            <i class="${iconClass}" ${iconColor}></i>
            <span>${mod.title}</span>
            ${mod.planned ? '<span style="font-size: 0.65rem; margin-left: auto; color: var(--text-muted);">PLANNED</span>' : ''}
        `;
        
        if (!mod.planned) {
            li.addEventListener('click', () => loadContent(mod.id));
        }
        
        listEl.appendChild(li);
    });
}

// Toggle active menu states
function updateActiveMenuItem(id) {
    document.querySelectorAll('.menu-item').forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-id') === id) {
            el.classList.add('active');
        }
    });
    
    // Handle home/kamus specifically
    const homeBtn = document.querySelector('.sidebar-menu .menu-item[onclick*="home"]');
    const kamusBtn = document.querySelector('.sidebar-menu .menu-item[onclick*="kamus"]');
    
    if (homeBtn) homeBtn.classList.toggle('active', id === 'home');
    if (kamusBtn) kamusBtn.classList.toggle('active', id === 'kamus');
}

// 4. Load Markdown Content and Render
async function loadContent(id) {
    const mdContainer = document.getElementById('markdown-container');
    const kamusContainer = document.getElementById('kamus-container');
    const titleEl = document.getElementById('current-materi-title');
    
    updateActiveMenuItem(id);
    
    if (id === 'kamus') {
        mdContainer.classList.remove('active');
        kamusContainer.classList.add('active');
        titleEl.textContent = 'Kamus Istilah';
        return;
    }
    
    // Show markdown container, hide others
    kamusContainer.classList.remove('active');
    mdContainer.classList.add('active');
    
    const config = MODULE_MANIFEST.find(m => m.id === id);
    if (!config) {
        mdContainer.innerHTML = `<p style="color: var(--accent-pink)">Error: Modul "${id}" tidak ditemukan.</p>`;
        return;
    }
    
    titleEl.textContent = config.title;
    mdContainer.innerHTML = `
        <div class="loading-spinner-container">
            <div class="spinner"></div>
            <p>Mengambil file ${config.file}...</p>
        </div>
    `;
    
    try {
        const response = await fetch(config.file);
        if (!response.ok) {
            throw new Error(`Gagal memuat file: ${response.status} ${response.statusText}`);
        }
        const markdownText = await response.text();
        const parsedHtml = parseAndRenderMarkdown(markdownText, id);
        mdContainer.innerHTML = parsedHtml;
        
        // Bind event listeners to newly rendered interactive checkboxes & local links
        bindInteractiveContent(id);
        
    } catch (err) {
        mdContainer.innerHTML = `
            <div style="border: 1px solid var(--accent-pink); padding: 24px; border-radius: 8px; background: rgba(255,0,127,0.05);">
                <h3 style="color: var(--accent-pink); margin-top:0;"><i class="ri-error-warning-line"></i> Hubungan Terputus</h3>
                <p>Gagal membaca file dari server lokal. Pastikan server python berjalan di komputer Anda.</p>
                <p style="font-family: var(--font-code); font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0;">Detail: ${err.message}</p>
            </div>
        `;
    }
}

// Pre-process and render Markdown text
function parseAndRenderMarkdown(markdownText, moduleId) {
    // 1. Process GitHub-style alerts in markdown
    // Examples:
    // > [!NOTE]
    // > Content
    let processed = markdownText;
    
    // Regular expression to catch multi-line blockquotes and identify alert tokens
    // Replace markdown alerts with custom wrapper
    const alertTypes = ['NOTE', 'TIP', 'IMPORTANT', 'WARNING', 'CAUTION'];
    alertTypes.forEach(type => {
        const regex = new RegExp(`> \\[\\!${type}\\]\\n(>.*\\n?)*`, 'g');
        processed = processed.replace(regex, (match) => {
            // Remove the blockquote marker and token, wrap content in specific classes
            const cleanContent = match
                .replace(new RegExp(`> \\[\\!${type}\\]\\n?`), '')
                .replace(/^>\s?/gm, '');
            
            // Re-wrap so marked.js processes markdown inside it, but with a custom wrapper
            return `<blockquote class="alert-${type.toLowerCase()}">\n\n**${type}**\n${cleanContent}\n</blockquote>`;
        });
    });

    // 2. Parse using marked.js
    let html = marked.parse(processed);
    
    // 3. Add module completion button if it's a module
    if (moduleId !== 'home') {
        const isCompleted = progressState[moduleId] === true;
        const buttonHtml = `
            <hr>
            <div class="completion-zone" style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.02); padding: 20px; border-radius: 8px; border: 1px solid var(--border-color);">
                <div>
                    <h4 style="margin: 0; color: var(--text-primary);">Selesaikan Pembelajaran Modul Ini?</h4>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">Tandai modul ini sebagai selesai untuk melacak progress belajar Anda.</p>
                </div>
                <button id="toggle-complete-btn" class="menu-item ${isCompleted ? 'active' : ''}" style="padding: 10px 20px; border-radius: 6px;">
                    <i class="${isCompleted ? 'ri-checkbox-circle-line' : 'ri-checkbox-blank-circle-line'}"></i>
                    <span>${isCompleted ? 'Selesai' : 'Tandai Selesai'}</span>
                </button>
            </div>
        `;
        html += buttonHtml;
    }
    
    return html;
}

// Intercept clicks on links, and wire up completion button
function bindInteractiveContent(moduleId) {
    const mdContainer = document.getElementById('markdown-container');
    
    // Intercept internal markdown links to prevent full page reload or file-opening errors
    mdContainer.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('file:///')) {
            const decodedHref = decodeURIComponent(href);
            
            // Cek apakah tautan mengarah ke Kamus
            if (decodedHref.includes('kamus_cyber.md')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    loadContent('kamus');
                });
                return;
            }
            
            // Cocokkan secara dinamis dengan daftar modul di manifest
            const matchedMod = MODULE_MANIFEST.find(m => decodedHref.endsWith(m.file));
            if (matchedMod) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    loadContent(matchedMod.id);
                });
            }
        }
    });
    
    // Wire up the manual completion button at the bottom of a module
    const completeBtn = document.getElementById('toggle-complete-btn');
    if (completeBtn) {
        completeBtn.addEventListener('click', () => {
            const isCompleted = progressState[moduleId] === true;
            saveProgress(moduleId, !isCompleted);
            
            // Re-load the content immediately to update the button status
            loadContent(moduleId);
        });
    }
}

// 5. Load and Parse Glossary from kamus_cyber.md
async function loadGlossaryData() {
    try {
        const response = await fetch('kamus_cyber.md');
        if (!response.ok) throw new Error('Gagal mengambil kamus');
        
        const markdown = await response.text();
        const lines = markdown.split('\n');
        
        glossaryData = [];
        let inTable = false;
        
        for (let line of lines) {
            // Detect table rows
            if (line.trim().startsWith('|')) {
                const parts = line.split('|').map(p => p.trim());
                
                // Skip table header, separator lines, and outer boundaries
                if (parts.length >= 4) {
                    const termRaw = parts[1];
                    const definition = parts[2];
                    const analogy = parts[3];
                    
                    if (termRaw && definition && analogy && 
                        !termRaw.includes('Istilah') && 
                        !termRaw.includes(':---') && 
                        !termRaw.includes('---')) {
                        
                        // Extract term name (remove markdown bold **)
                        const termName = termRaw.replace(/\*\*/g, '');
                        
                        glossaryData.push({
                            term: termName,
                            definition: definition,
                            analogy: analogy
                        });
                    }
                }
            }
        }
        
        // Render terms in the Grid
        renderGlossaryList(glossaryData);
        
    } catch (err) {
        console.error('Glossary load error:', err);
        document.getElementById('kamus-items-list').innerHTML = `
            <p style="color: var(--accent-pink);">Gagal memuat kamus istilah. Pastikan file kamus_cyber.md berada di folder yang sama.</p>
        `;
    }
}

// Render glossary cards in UI
function renderGlossaryList(items) {
    const listEl = document.getElementById('kamus-items-list');
    listEl.innerHTML = '';
    
    if (items.length === 0) {
        listEl.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted); font-family: var(--font-ui);">
                <i class="ri-search-eye-line" style="font-size: 2rem;"></i>
                <p style="margin-top: 10px;">Istilah tidak ditemukan. Coba kata kunci lain.</p>
            </div>
        `;
        return;
    }
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'kamus-card';
        
        card.innerHTML = `
            <div class="kamus-card-header">
                <span class="kamus-term">${item.term}</span>
                <span class="kamus-category">CYBER_TERM</span>
            </div>
            <div class="kamus-definition">${item.definition}</div>
            <div class="kamus-analogy">
                <strong>💡 Analogi:</strong> ${item.analogy}
            </div>
        `;
        listEl.appendChild(card);
    });
}

// Filter/Search glossary items
function filterKamus() {
    const query = document.getElementById('kamus-search-input').value.toLowerCase().trim();
    if (query === '') {
        renderGlossaryList(glossaryData);
        return;
    }
    
    const filtered = glossaryData.filter(item => {
        return item.term.toLowerCase().includes(query) || 
               item.definition.toLowerCase().includes(query) ||
               item.analogy.toLowerCase().includes(query);
    });
    
    renderGlossaryList(filtered);
}

// 6. Navigation Sidebar Toggle (for Mobile Viewports)
let sidebarOpen = false;
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebarOpen = !sidebarOpen;
    if (sidebarOpen) {
        sidebar.classList.add('open');
    } else {
        sidebar.classList.remove('open');
    }
}

// Close sidebar on mobile when click item
document.querySelectorAll('.sidebar-menu .menu-item').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            document.querySelector('.sidebar').classList.remove('open');
            sidebarOpen = false;
        }
    });
});


