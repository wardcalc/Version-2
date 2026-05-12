// WardCalc Super Engine V2.0

// 1. MEMORY BANK (Local Storage State)
let currentLang = localStorage.getItem('wardcalc_lang') || 'en';
let emergencyActive = localStorage.getItem('wardcalc_emergency') === 'true';
let favorites = JSON.parse(localStorage.getItem('wardcalc_favorites')) || [];
let currentCategory = 'All';
let searchQuery = '';

const dictionaries = { en, ru, uz };

// 2. INITIALIZATION (When the page loads)
document.addEventListener("DOMContentLoaded", () => {
    if (emergencyActive) activateEmergencyUI();
    changeLang(currentLang);
    
    setupEmergencyToggle();
    setupLiveSearch();

    renderCategories();
    renderDashboard();
});

// --- AUTO-CATEGORIZATION SYSTEM ---
function renderCategories() {
    const container = document.getElementById("category-filters");
    if (!container) return;

    // Automatically extract categories + add 'All' and 'Favorites'
    const categories = ['All', 'Favorites', ...new Set(clinicalTools.map(t => t.category))];

    let html = '';
    categories.forEach(cat => {
        const isActive = cat === currentCategory;
        const activeClass = isActive 
            ? "bg-secondary/20 text-secondary border-secondary/50" 
            : "bg-surface-container/50 text-on-surface-variant border-outline-variant/30 hover:border-secondary/50 hover:text-secondary";

        // Dictionary Tags
        let i18nAttr = '';
        if (cat === 'All') i18nAttr = 'data-i18n="cat_all"';
        if (cat === 'Favorites') i18nAttr = 'data-i18n="nav_favorites"';

        // Add Star Icon to Favorites Tab
        let icon = '';
        if (cat === 'Favorites') icon = `<span class="material-symbols-outlined text-[14px] mr-1 ${isActive ? 'text-secondary' : ''}" style="font-variation-settings: 'FILL' 1;">star</span>`;

        html += `<button onclick="filterCategory('${cat}')" class="flex items-center px-4 py-2 rounded-full font-mono text-xs font-bold transition-all duration-300 whitespace-nowrap border cursor-pointer ${activeClass}" ${i18nAttr}>${icon}${cat}</button>`;
    });

    container.innerHTML = html;
    applyTranslations(currentLang); 
}

function filterCategory(cat) {
    currentCategory = cat;
    renderCategories();
    renderDashboard();
}

// --- LIVE SEARCH ENGINE ---
function setupLiveSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderDashboard(); 
    });
}

// --- FAVORITES ENGINE ---
function toggleFavorite(e, toolId) {
    e.stopPropagation(); // Stops the tool from opening when you click the star
    
    if (favorites.includes(toolId)) {
        favorites = favorites.filter(id => id !== toolId);
    } else {
        favorites.push(toolId);
    }
    
    localStorage.setItem('wardcalc_favorites', JSON.stringify(favorites));
    renderDashboard(); // Instantly update the screen
}

// --- DASHBOARD RENDERER ---
function renderDashboard() {
    const directory = document.getElementById("calculator-directory");
    if (!directory) return;

    // Filter 1: Categories & Favorites
    let filteredTools = clinicalTools;
    if (currentCategory === 'Favorites') {
        filteredTools = clinicalTools.filter(t => favorites.includes(t.id));
    } else if (currentCategory !== 'All') {
        filteredTools = clinicalTools.filter(t => t.category === currentCategory);
    }

    // Filter 2: Live Search Text
    if (searchQuery.trim() !== '') {
        filteredTools = filteredTools.filter(t => 
            t.defaultTitle.toLowerCase().includes(searchQuery) || 
            t.defaultDesc.toLowerCase().includes(searchQuery) ||
            t.category.toLowerCase().includes(searchQuery)
        );
    }

    // Empty State (If search finds nothing)
    if (filteredTools.length === 0) {
        directory.innerHTML = `
            <div class="flex flex-col items-center justify-center py-12 text-on-surface-variant opacity-70">
                <span class="material-symbols-outlined text-[48px] mb-4">search_off</span>
                <p class="font-mono text-sm">No protocols found matching the current criteria.</p>
            </div>
        `;
        return;
    }

    // Draw the Tools
    let html = '<div class="grid grid-cols-12 gap-6">';
    
    filteredTools.forEach(tool => {
        // Check if this tool is favorited to draw a solid gold star
        const isFav = favorites.includes(tool.id);
        const favIconFill = isFav ? 1 : 0;
        const favColor = isFav ? "text-[#f59e0b]" : "text-on-surface-variant hover:text-[#f59e0b]";

        html += `
        <div class="col-span-12 md:col-span-6 lg:col-span-4 rounded-xl bg-surface-container/40 backdrop-blur-[8px] border border-outline-variant/20 p-6 hover:border-secondary/50 hover:bg-surface-container/60 transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div class="flex justify-between items-start mb-6">
                <div class="w-10 h-10 rounded border border-secondary/30 flex items-center justify-center bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <span class="material-symbols-outlined text-secondary text-[20px]">${tool.icon}</span>
                </div>
                
                <div class="flex items-center gap-3">
                    <span class="font-mono text-[10px] text-secondary uppercase border border-secondary/20 bg-secondary/5 px-2 py-1 rounded tracking-widest">${tool.category}</span>
                    <button onclick="toggleFavorite(event, '${tool.id}')" class="flex items-center justify-center transition-colors ${favColor}">
                        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' ${favIconFill};">star</span>
                    </button>
                </div>
            </div>
            
            <h3 class="text-xl font-bold text-on-surface mb-2" data-i18n="${tool.titleKey}">${tool.defaultTitle}</h3>
            <p class="text-sm text-on-surface-variant opacity-80 leading-relaxed" data-i18n="${tool.descKey}">${tool.defaultDesc}</p>
        </div>
        `;
    });

    html += '</div>';
    directory.innerHTML = html;
    applyTranslations(currentLang);
}

// --- EMERGENCY TOGGLE ---
function activateEmergencyUI() {
    const btn = document.getElementById('emergency-toggle');
    if(!btn) return;
    btn.className = "flex items-center gap-1 px-2 py-1.5 md:px-4 md:py-1.5 rounded-full transition-all font-mono text-[10px] md:text-xs font-bold cursor-pointer bg-error text-white";
    document.body.classList.add("emergency-active");
}

function deactivateEmergencyUI() {
    const btn = document.getElementById('emergency-toggle');
    if(!btn) return;
    btn.className = "flex items-center gap-1 border border-error/50 text-error bg-error/5 px-2 py-1.5 md:px-4 md:py-1.5 rounded-full hover:bg-error/20 hover:border-error transition-all font-mono text-[10px] md:text-xs font-bold cursor-pointer";
    document.body.classList.remove("emergency-active");
}

function setupEmergencyToggle() {
    const btn = document.getElementById('emergency-toggle');
    if(!btn) return;

    btn.addEventListener('click', () => {
        emergencyActive = !emergencyActive;
        localStorage.setItem('wardcalc_emergency', emergencyActive);
        if(emergencyActive) activateEmergencyUI();
        else deactivateEmergencyUI();
    });
}

// --- THE TRANSLATION ENGINE ---
function applyTranslations(lang) {
    const dict = dictionaries[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.innerText = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });
}

function changeLang(lang) {
    currentLang = lang;
    localStorage.setItem('wardcalc_lang', lang);
    applyTranslations(lang); 
    
    const buttons = document.querySelectorAll('#language-switcher button');
    buttons.forEach(btn => btn.className = "px-2 py-1 md:px-3 md:py-1 rounded-full text-on-surface-variant hover:text-secondary transition-colors");
    
    const activeBtn = Array.from(buttons).find(b => b.innerText.toLowerCase() === lang);
    if (activeBtn) activeBtn.className = "px-2 py-1 md:px-3 md:py-1 rounded-full bg-primary/20 text-primary transition-colors";
}
