// WardCalc Main Engine

let currentLang = 'en'; // Default language
const dictionaries = { en, ru, uz }; // Connect our dictionary files

document.addEventListener("DOMContentLoaded", () => {
    renderDashboard();
    applyTranslations(currentLang); // Translate immediately when page loads
});

function renderDashboard() {
    const directory = document.getElementById("calculator-directory");
    if (!directory) return;

    let html = '<div class="grid grid-cols-12 gap-6">';
    
    // Draw the tools
    clinicalTools.forEach(tool => {
        html += `
        <div class="col-span-12 md:col-span-6 lg:col-span-4 rounded-xl bg-surface-container/40 backdrop-blur-[8px] border border-outline-variant/20 p-6 hover:border-secondary/50 hover:bg-surface-container/60 hover:shadow-[0_0_20px_rgba(79,219,200,0.15)] transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div class="flex justify-between items-start mb-6">
                <div class="w-10 h-10 rounded border border-secondary/30 flex items-center justify-center bg-secondary/10 group-hover:bg-secondary/20 transition-colors shadow-[0_0_10px_rgba(79,219,200,0.1)]">
                    <span class="material-symbols-outlined text-secondary text-[20px]">${tool.icon}</span>
                </div>
                <span class="font-mono text-[10px] text-secondary uppercase border border-secondary/20 bg-secondary/5 px-2 py-1 rounded tracking-widest">${tool.category}</span>
            </div>
            
            <h3 class="text-xl font-bold text-on-surface mb-2" data-i18n="${tool.titleKey}">${tool.defaultTitle}</h3>
            <p class="text-sm text-on-surface-variant opacity-80 leading-relaxed" data-i18n="${tool.descKey}">${tool.defaultDesc}</p>
        </div>
        `;
    });

    html += '</div>';
    directory.innerHTML = html;
}

// --- THE TRANSLATION ENGINE ---

function applyTranslations(lang) {
    const dict = dictionaries[lang];
    if (!dict) return;

    // 1. Translate all standard text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerText = dict[key];
        }
    });

    // 2. Translate placeholders (like the search bar)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
        }
    });
}

function changeLang(lang) {
    currentLang = lang;
    applyTranslations(lang); // Run the translation sweep

    // Update the UI to highlight the active language button
    const buttons = document.querySelectorAll('#language-switcher button');
    buttons.forEach(btn => {
        btn.className = "px-3 py-1 rounded-full text-on-surface-variant hover:text-secondary transition-colors"; // Reset to inactive
    });
    
    // Find the button we just clicked and highlight it
    const activeBtn = Array.from(buttons).find(b => b.innerText.toLowerCase() === lang);
    if (activeBtn) {
        activeBtn.className = "px-3 py-1 rounded-full bg-primary/20 text-primary transition-colors shadow-[0_0_10px_rgba(208,188,255,0.2)]";
    }
}
