// WardCalc Core Engine - Unbreakable V6

// --- SAFE MEMORY VAULT ---
window.safeGet = function(key, defaultVal) {
    try { return localStorage.getItem(key) || defaultVal; } catch(e) { return defaultVal; }
};
window.safeSet = function(key, val) {
    try { localStorage.setItem(key, val); } catch(e) { console.warn("Storage blocked"); }
};

// --- GLOBAL VARIABLES ---
let currentCategory = 'All';
let searchQuery = '';
let favorites = [];

// --- THEME ENGINE ---
window.toggleTheme = function() {
    try {
        const html = document.documentElement;
        const icon = document.getElementById('theme-icon');
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            if(icon) icon.innerText = 'dark_mode';
            window.safeSet('wardcalc_theme', 'light');
        } else {
            html.classList.add('dark');
            if(icon) icon.innerText = 'light_mode';
            window.safeSet('wardcalc_theme', 'dark');
        }
    } catch(e) {}
};

// --- LANGUAGE ENGINE ---
window.changeLang = function(lang) {
    try {
        window.safeSet('wardcalc_lang', lang);
        
        let dict = null;
        if (lang === 'en' && typeof en !== 'undefined') dict = en;
        if (lang === 'de' && typeof de !== 'undefined') dict = de;
        if (lang === 'ru' && typeof ru !== 'undefined') dict = ru;
        if (lang === 'uz' && typeof uz !== 'undefined') dict = uz;

        if (dict) {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (dict[key]) el.innerText = dict[key];
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (dict[key]) el.setAttribute('placeholder', dict[key]);
            });
        }

        const buttons = document.querySelectorAll('#language-switcher button');
        buttons.forEach(btn => btn.className = "px-2 py-1 md:px-3 md:py-1 rounded-full text-on-surface-variant hover:text-secondary transition-colors font-mono");
        const activeBtn = Array.from(buttons).find(b => b.innerText.toLowerCase() === lang);
        if (activeBtn) activeBtn.className = "px-2 py-1 md:px-3 md:py-1 rounded-full bg-primary/10 text-primary font-bold transition-colors font-mono border border-primary/20";
    } catch(e) {}
};

// --- UI GENERATORS ---
window.renderCategories = function() {
    try {
        const container = document.getElementById("category-filters");
        if (!container || typeof clinicalTools === 'undefined') return;

        const categories = ['All', 'Favorites', ...new Set(clinicalTools.map(t => t.category))];
        let html = '';
        categories.forEach(cat => {
            const isActive = cat === currentCategory;
            const activeClass = isActive
                ? "bg-secondary/20 text-secondary border-secondary/50 shadow-[0_0_10px_rgba(13,148,136,0.2)]"
                : "bg-surface-container/50 text-on-surface-variant border-outline-variant/30 hover:border-secondary/50 hover:text-secondary";

            let i18nAttr = cat === 'All' ? 'data-i18n="cat_all"' : (cat === 'Favorites' ? 'data-i18n="nav_favorites"' : '');
            let icon = cat === 'Favorites' ? `<span class="material-symbols-outlined text-[14px] mr-1 ${isActive ? 'text-secondary' : ''}" style="font-variation-settings: 'FILL' 1;">star</span>` : '';

            html += `<button onclick="window.filterCategory('${cat}')" class="flex items-center px-4 py-2 rounded-full font-mono text-xs font-bold transition-all duration-300 whitespace-nowrap border cursor-pointer ${activeClass}" ${i18nAttr}>${icon}${cat}</button>`;
        });
        container.innerHTML = html;
        window.changeLang(window.safeGet('wardcalc_lang', 'en')); 
    } catch(e) {}
};

window.filterCategory = function(cat) {
    currentCategory = cat;
    window.renderCategories();
    window.renderDashboard();
};

window.toggleFavorite = function(e, toolId) {
    try {
        e.stopPropagation();
        if (favorites.includes(toolId)) favorites = favorites.filter(id => id !== toolId);
        else favorites.push(toolId);
        window.safeSet('wardcalc_favorites', JSON.stringify(favorites));
        window.renderDashboard();
    } catch(e) {}
};

window.renderDashboard = function() {
    try {
        const directory = document.getElementById("calculator-directory");
        if (!directory || typeof clinicalTools === 'undefined') return;

        let filteredTools = clinicalTools;
        if (currentCategory === 'Favorites') filteredTools = clinicalTools.filter(t => favorites.includes(t.id));
        else if (currentCategory !== 'All') filteredTools = clinicalTools.filter(t => t.category === currentCategory);

        if (searchQuery.trim() !== '') {
            filteredTools = filteredTools.filter(t =>
                t.defaultTitle.toLowerCase().includes(searchQuery) ||
                t.defaultDesc.toLowerCase().includes(searchQuery) ||
                t.category.toLowerCase().includes(searchQuery)
            );
        }

        if (filteredTools.length === 0) {
            directory.innerHTML = `<div class="flex flex-col items-center justify-center py-12 text-on-surface-variant opacity-70"><span class="material-symbols-outlined text-[48px] mb-4">search_off</span><p class="font-mono text-sm">No protocols found.</p></div>`;
            return;
        }

        let html = '<div class="grid grid-cols-12 gap-6">';
        filteredTools.forEach(tool => {
            const isFav = favorites.includes(tool.id);
            const favIconFill = isFav ? 1 : 0;
            const favColor = isFav ? "text-[#f59e0b]" : "text-on-surface-variant hover:text-[#f59e0b]";

            html += `
            <div class="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl bg-surface border border-outline-variant/40 p-6 hover:border-secondary/60 hover:shadow-lg transition-all duration-300 cursor-pointer group relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div class="flex justify-between items-start mb-6">
                    <div class="w-11 h-11 rounded-xl border border-secondary/30 flex items-center justify-center bg-secondary/5 group-hover:bg-secondary/10 transition-colors">
                        <span class="material-symbols-outlined text-secondary text-[22px]">${tool.icon}</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="font-mono text-[10px] text-secondary uppercase border border-secondary/20 bg-secondary/5 px-2 py-1 rounded-md tracking-widest">${tool.category}</span>
                        <button onclick="window.toggleFavorite(event, '${tool.id}')" class="flex items-center justify-center transition-colors ${favColor}">
                            <span class="material-symbols-outlined text-[22px]" style="font-variation-settings: 'FILL' ${favIconFill};">star</span>
                        </button>
                    </div>
                </div>
                <h3 class="text-xl font-bold text-on-surface mb-2 font-serif tracking-tight" data-i18n="${tool.titleKey}">${tool.defaultTitle}</h3>
                <p class="text-sm text-on-surface-variant opacity-90 leading-relaxed" data-i18n="${tool.descKey}">${tool.defaultDesc}</p>
            </div>`;
        });
        html += '</div>';
        directory.innerHTML = html;
        
        window.changeLang(window.safeGet('wardcalc_lang', 'en'));
    } catch(e) {}
};

// --- BOOT CASCADE ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Load Favorites
    try {
        const favs = window.safeGet('wardcalc_favorites', '[]');
        favorites = JSON.parse(favs);
        if(!Array.isArray(favorites)) favorites = [];
    } catch(e) { favorites = []; }

    // 2. Set Theme
    try {
        if(window.safeGet('wardcalc_theme', 'light') === 'dark') {
            document.documentElement.classList.add('dark');
            const icon = document.getElementById('theme-icon');
            if(icon) icon.innerText = 'light_mode';
        }
    } catch(e){}

    // 3. Set Language
    try {
        window.changeLang(window.safeGet('wardcalc_lang', 'en'));
    } catch(e){}

    // 4. Set Tool Count
    try {
        const countSpan = document.getElementById("tool-count");
        if(countSpan && typeof clinicalTools !== 'undefined') countSpan.innerText = clinicalTools.length;
    } catch(e){}

    // 5. Render UI
    try {
        if (typeof window.renderCategories === 'function') window.renderCategories();
        if (typeof window.renderDashboard === 'function') window.renderDashboard();
    } catch(e){}

    // 6. Search Bar
    try {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value.toLowerCase();
                window.renderDashboard();
            });
        }
    } catch(e){}
});
