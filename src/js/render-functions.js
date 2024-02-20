export default function renderCard(cards) {
    const gallery = document.querySelector('.cards');
    cards.forEach(card => {
        const cardHTML =
            `<li class="card"> 
                <a class="card-link" href="${card.largeImageURL}">
                    <img class="card-img" src="${card.webformatURL}" alt="${card.tags}" data-source="${card.largeImageURL}" />
                </a>
                <div class="card-data">
                    <div class="data-wrap">
                        <p>Likes: </p>
                        <span>${card.likes}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Views: </p>
                        <span>${card.views}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Comments: </p>
                        <span>${card.comments}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Downloads: </p>
                        <span>${card.downloads}</span>
                    </div>
                </div>
             </li>`;
        gallery.insertAdjacentHTML('beforeend', cardHTML);
    });
}
