import { getImages } from './js/pixabay-api.js';
import renderCard from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"; 

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');
let page = 1;
let currentSearchQuery = '';
let lightbox;

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

    if (currentSearchQuery !== userInput) {
        currentSearchQuery = userInput;
        page = 1;
        document.querySelector('.cards').innerHTML = ''; 
    }

    showLoader();

    try {
        const images = await getImages(userInput);
        hideLoader();

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

        renderCard(images);

        if (!lightbox) {
            lightbox = new SimpleLightbox(".cards a", { captionsData: "alt", captionDelay: 250, captionPosition: 'bottom' });
        } else {
            lightbox.refresh();
        }

        loadMoreBtn.style.display = 'flex';
        window.scrollTo({
            top: document.querySelector('.cards').offsetTop,
            behavior: 'smooth'
        });
    } catch (error) {
        hideLoader();
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Please try again later.',
            position: 'bottomRight'
        });
        console.error('Error fetching images:', error);
    }
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
    lightbox.refresh();

    window.scrollBy({
        top: document.querySelector('.card').getBoundingClientRect().height * 2,
        behavior: 'smooth'
    });
});

