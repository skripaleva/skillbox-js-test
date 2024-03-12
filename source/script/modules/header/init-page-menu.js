const body = document.body;
const burger = document.querySelector('[data-sandwich="data-sandwich"]');
const menu = document.querySelector('[data-main-nav="nav"]');
const logo = document.querySelector('[data-header-logo="data-header-logo"]');
const links = document.querySelectorAll('[data-nav-item="item"]');

const burgerInit = () => {
    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active')
        menu.classList.toggle('is-active')
        body.classList.toggle('scroll-lock')
        logo.classList.toggle('is-menu')

        let del = 0;

        links.forEach((item) => {
            del += 150;

            setTimeout(() => {
                item.classList.toggle('is-active');
            }, del)

        });
    })

    const closeMenu = () => {
        burger.classList.remove('is-active')
        menu.classList.remove('is-active')
        body.classList.remove('scroll-lock')
        logo.classList.remove('is-menu')
        links.forEach(item => item.classList.remove('is-active'))
    }

    burger.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            console.log("Closing window...");
            closeMenu()
        }
    });

    const ro = new ResizeObserver(entries => {
        for (let entry of entries) {
            if (!entry.contentRect.width) {
                closeMenu()
            }
        }
    })

    ro.observe(burger)
}

export {burgerInit}
