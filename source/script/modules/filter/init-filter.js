import getCourses from "./service.js";
import createCard from "./card.js";

let hash = location.hash;

try {
    const coursesList = document.querySelector('[data-project="parent"]');
    coursesList.classList.add('is-active');

    const renderCoursesList = data => {
        coursesList.textContent = '';
        const courses = data.map(createCard);
        coursesList.append(...courses)
    }

    window.addEventListener('hashchange', () => {
        hash = location.hash;
        getCourses(renderCoursesList, 'tags', hash);
    })

    getCourses(renderCoursesList, 'tags', hash)

} catch (err) {
    console.log(err)
}


