// WardCalc Main Engine

document.addEventListener("DOMContentLoaded", () => {
    renderDashboard();
});

function renderDashboard() {
    const directory = document.getElementById("calculator-directory");
    if (!directory) return; // If we aren't on the dashboard, do nothing

    let html = '<div class="grid grid-cols-12 gap-6">';
    
    // Loop through the database and draw a premium card for each tool
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

// Placeholder for the language switcher so the buttons don't cause errors yet
function changeLang(lang) {
    console.log("Language engine will switch to: " + lang);
}
