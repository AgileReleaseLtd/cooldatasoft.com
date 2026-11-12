// Cooldatasoft — static marketing site. Self-contained: mobile menu (the cookie banner is js/consent.js).
// A static site with no backend.
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('mobile-menu-button');
    const icon = document.getElementById('mobile-menu-icon');
    if (!menu || !button || !icon) return;
    const isOpen = menu.classList.toggle('hidden') === false;
    button.setAttribute('aria-expanded', String(isOpen));
    icon.classList.toggle('fa-bars', !isOpen);
    icon.classList.toggle('fa-xmark', isOpen);
}

(function () {
    const menuButton = document.getElementById('mobile-menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMobileMenu);
    }
    document.querySelectorAll('#mobile-menu a').forEach(function (link) {
        link.addEventListener('click', toggleMobileMenu);
    });
    // Escape closes the open menu and puts focus back on its button.
    document.addEventListener('keydown', function (event) {
        const menu = document.getElementById('mobile-menu');
        if (event.key !== 'Escape' || !menu || menu.classList.contains('hidden')) return;
        toggleMobileMenu();
        if (menuButton) menuButton.focus();
    });

    // The cookie banner is in js/consent.js: it exists only when a GA4 measurement id is
    // configured (js/ga4-config.js), and asks for opt-in consent to Google Analytics.
})();
