const toggleNav = document.querySelector('.toggle-nav'),
        nav = document.querySelector('.nav');

toggleNav.addEventListener('click', () => {
    const exp = 'true' === toggleNav.getAttribute('aria-expanded');

    toggleNav.setAttribute('aria-expanded', !exp);

    nav.classList.toggle('opened');

    exp ? toggleNav.setAttribute('aria-label', 'Відкрити меню')
        : toggleNav.setAttribute('aria-label', 'Закрити меню')
});

const closeMenu = document.querySelectorAll('.nav__item');

/* closeMenu.forEach(el => el.addEventListener('click', ()=> {
        nav.classList.remove('opened');
})); */