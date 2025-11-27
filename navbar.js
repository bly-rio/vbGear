// Navbar Component - Dynamically generated
(function() {
    const navSections = [
        {
            label: 'Projects',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
            items: [
                { name: 'Notes', href: 'notes.html' },
                { name: 'Calendar', href: 'calendar.html' }
            ]
        },
        {
            label: 'Tools',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
            items: [
                { name: 'IP Checker', href: 'ip.html' },
                { name: 'Beautifier', href: 'beautifier.html' },
                { name: 'Visualizer', href: 'visualizer.html' }
            ]
        }
    ];

    // Get current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Generate navigation dropdowns
    const dropdownsHTML = navSections.map(section => {
        const itemsHTML = section.items.map(item => {
            const isActive = currentPage === item.href ? ' active' : '';
            return `<a href="${item.href}" class="dropdown-item${isActive}">${item.name}</a>`;
        }).join('');
        
        // Check if any item in this section is active
        const sectionActive = section.items.some(item => item.href === currentPage) ? ' active' : '';
        
        return `
                <div class="nav-dropdown">
                    <button class="nav-dropdown-btn${sectionActive}">
                        ${section.icon}
                        <span>${section.label}</span>
                        <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div class="dropdown-menu">
                        ${itemsHTML}
                    </div>
                </div>`;
    }).join('');

    // Get page title for logo
    const allItems = navSections.flatMap(s => s.items);
    const currentItem = allItems.find(item => item.href === currentPage);
    const logoText = currentPage === 'index.html' ? 'vbGear' : (currentItem ? currentItem.name : 'vbGear');

    // Navbar HTML
    const navbarHTML = `
    <nav class="navbar">
        <div class="container navbar-content">
            <div class="nav-header">
                <a href="index.html" class="logo">${logoText}</a>
                <button class="mobile-menu-btn" aria-label="Toggle menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
            </div>
            <div class="nav-links">
                ${dropdownsHTML}
            </div>
        </div>
    </nav>`;

    // Insert navbar at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Mobile menu toggle logic
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            menuBtn.classList.toggle('active');
        });
    }
})();
