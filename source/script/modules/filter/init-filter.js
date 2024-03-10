import getCourses from "./service.js";
import createCard from "./card.js";
import observer from "./animation.js";

let hash = location.hash;

try {
    const coursesList = document.querySelector('[data-project="parent"]');
    coursesList.classList.add('is-active');

    const renderCoursesList = data => {
        coursesList.textContent = '';
        const courses = data.map(createCard);
        coursesList.append(...courses)

        let elements = document.querySelectorAll('.courses__item');
        for (let elm of elements) {
            observer.observe(elm);
        }
    }

    window.addEventListener('hashchange', () => {
        hash = location.hash;
        getCourses(renderCoursesList, 'tags', hash);
    })

    getCourses(renderCoursesList, 'tags', hash)

} catch (err) {
    console.log(err)
}

let filterBtns = document.querySelectorAll('[data-filter="link"]');
filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        filterBtns.forEach((el) => el.classList.remove('is-active'))
        btn.classList.add('is-active')
    })
})

