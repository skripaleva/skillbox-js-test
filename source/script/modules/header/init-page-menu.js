const body = document.body;
const burger = document.querySelector('[data-sandwich="data-sandwich"]');
const menu = document.querySelector('[data-main-nav="nav"]');
const logo = document.querySelector('[data-header-logo="data-header-logo"]');
const links = document.querySelectorAll('[data-nav-item="item"]');
links.forEach((link, index) => {
    link.style.transitionDelay=`${0.15 * index}s`
})

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active')
    menu.classList.toggle('is-active')
    body.classList.toggle('scroll-lock')
    logo.classList.toggle('is-menu')
})

const closeMenu = () => {
    burger.classList.remove('is-active')
    menu.classList.remove('is-active')
    body.classList.remove('scroll-lock')
    logo.classList.remove('is-menu')
}

burger.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        console.log("Closing window...");
        closeMenu()
    }
});

const ro = new ResizeObserver(entries => {
    for(let entry of entries){
        if (!entry.contentRect.width) {
            closeMenu()
        }
    }
})

ro.observe(burger)


