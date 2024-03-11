const createCard = ({classes, href, title, src, height, width, alt, label, date, hit}) => {

    const li = document.createElement('li');
    li.classList.add("courses__item");
    li.dataset.template = 'element';
    li.innerHTML = `
      <div class="product-card ${classes.join('')}">
        <div class="product-card__inner">
          <div class="product-card__box">
            <span class="product-card__label">${label}</span>
            ${hit ?
        `<span class="product-card__hit">
              <svg width="12" height="12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path xmlns="http://www.w3.org/2000/svg" d="M10 5H7.149l.867-5L1 7h2.851l-.867 5L10 5z"
                      fill="currentColor"/>
              </svg>
              <span class="product-card__hit-text">Хит продаж</span>
            </span>` : ''
    } 
          </div>
          <h2 class="product-card__title">${title}</h2>
          <img class="product-card__img" src="${src}" height="${height}" width="${width}"
               alt="${alt}">
        </div>
        <span class="product-card__date">${date}</span>
        <a href="${href}" class="product-card__shadow-link" target="_blank"></a>
      </div>
    `;


    return li
};

export default createCard;
