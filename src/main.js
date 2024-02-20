import { getImages } from './js/pixabay-api.js';
import renderCard from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');
let page = 1;
let currentSearchQuery = '';

function showLoader() {
    loader.style.display = 'inline-block';
}

function hideLoader() {
    loader.style.display = 'none';
}

form.addEventListener('submit', async event => {
    event.preventDefault();
    const userInput = event.target.elements.search.value.trim();

    if (userInput === "") {
        iziToast.show({
            title: 'Error',
            backgroundColor: '#EF4040',
            messageColor: '#FFFFFF',
            titleColor: '#FFFFFF',
            message: 'Please enter your search!',
            position: 'bottomRight'
        });
        return;
    }

    currentSearchQuery = userInput;
    page = 1;

    const images = await getImages(userInput);
    if (images.length === 0) {
        iziToast.show({
            title: 'Error',
            backgroundColor: '#EF4040',
            messageColor: '#FFFFFF',
            titleColor: '#FFFFFF',
            message: 'Sorry, there are no images matching your search. Please try again!',
            position: 'bottomRight'
        });
        return;
    }

    const gallery = document.querySelector('.cards');
    gallery.innerHTML = '';
    renderCard(images);
    loadMoreBtn.style.display = 'flex';
    window.scrollTo({
        top: gallery.offsetTop,
        behavior: 'smooth'
    });
});

loadMoreBtn.addEventListener('click', async () => {
    page++;
    const images = await getImages(currentSearchQuery, page);
    if (images.length === 0) {
        loadMoreBtn.style.display = 'none';
        iziToast.info({
            title: 'Info',
            message: 'We\'re sorry, but you\'ve reached the end of search results.',
            position: 'bottomRight'
        });
        return;
    }
    renderCard(images);
    window.scrollBy({
        top: document.querySelector('.card').getBoundingClientRect().height * 2,
        behavior: 'smooth'
    });
});
