import getCourses from "./service.js";
import createCard from "./card.js";

const initFilter = hash => {
    try {
        const coursesList = document.querySelector('[data-project="parent"]');
        coursesList.classList.add('is-active');

        const renderCoursesList = data => {
            coursesList.textContent = '';
            const courses = data.map(createCard);
            coursesList.append(...courses)
        }

        let filterBtns = document.querySelectorAll('[data-filter="link"]');

        window.addEventListener('hashchange', () => {
            coursesList.classList.remove('is-active');
            hash = location.hash;

            setTimeout(() => {
                coursesList.classList.add('is-active');
                getCourses(renderCoursesList, 'tags', hash);
            }, 100)

            getCourses(renderCoursesList, 'tags', hash);
            filterBtns.forEach((el) => el.classList.remove('is-active'))
            filterBtns.forEach((btn) => {
                if (btn.href.split('#')[1] === hash.substring(1)) {
                    btn.classList.add('is-active')
                }
            })
        })

        getCourses(renderCoursesList, 'tags', hash)

    } catch (err) {
        console.log(err)
    }

}

export {initFilter}

