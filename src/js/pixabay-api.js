import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';
import renderCard from './render-functions.js';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const loadmoreBtn = document.querySelector('.load-more-btn');
const newCard = document.querySelector('.card');
const bottomLoader = document.querySelector('.bottom-loader')
let lastScrollPosition = window.pageYOffset;

let page = 1;
let perPage = 15;
let userInput = '';

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    userInput = event.target.elements.search.value.trim();
    page = 1;


    
    if (userInput === "") {
        iziToast.show({
            title: 'Error',
            backgroundColor: '#EF4040',
            messageColor: '#FFFFFF',
            titleColor: '#FFFFFF',
            message: 'Please enter a search query!',
            position: 'bottomRight'
        });
        return;
    }

    showLoader();

    const options = {
        key: '42328453-99f2c5c34c77a0496905bbef3',
        q: userInput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: perPage,
    }

    const PARAMS = new URLSearchParams(options);

    try {
        const response = await axios.get(`https://pixabay.com/api/?${PARAMS}`)
        const data = response.data;
        window.scrollTo({ top: 0, behavior: 'smooth' });
            
        if (data.hits.length === 0) {
            const gallery = document.querySelector('.cards');
            gallery.innerHTML = '';  
            hideLoader();
            hideLoadBtn();
            iziToast.show({
                title: 'Error',
                backgroundColor: '#EF4040',
                messageColor: '#FFFFFF',
                titleColor: '#FFFFFF',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'bottomRight'
            })
        } else {
            const gallery = document.querySelector('.cards');
            gallery.innerHTML = '';
            renderCard(data.hits);
            const lightbox = new SimpleLightbox(".cards a", { captionsData: "alt", captionDelay: 250, captionPosition: 'bottom' });
            lightbox.refresh();
            hideLoader();
            showLoadBtn();
            form.reset();

            if (perPage > data.hits.length && response.status === 200) {
                hideLoadBtn();
                form.reset();
                return iziToast.error({
                position: "bottomRight",
                    message: "We're sorry, but you've reached the end of search results."
                })
            }
        }
        
        page += 1;

        
        
    } catch (error) {
        console.log(error);
        hideLoadBtn();
        hideChangeLoader();
        hideLoader();
        form.reset();
        return iziToast.error({
        position: "bottomRight",
            message: "Sorry, something went wrong..."
        })
    }
    
})

loadmoreBtn.addEventListener('click', async (event) => {
    showChangeLoader();
    hideLoadBtn();
    
    const options = {
        key: '42328453-99f2c5c34c77a0496905bbef3',
        q: userInput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: perPage,
    }

    const PARAMS = new URLSearchParams(options);

    try {
        if (page > 1) {
            const response = await axios.get(`https://pixabay.com/api/?${PARAMS}`)
            const data = response.data;
            const totalPages = Math.ceil(data.totalHits / perPage);
            if (page > totalPages) {
                hideLoadBtn();
                hideLoader();
                hideChangeLoader();
                return iziToast.error({
                position: "bottomRight",
                    message: "We're sorry, but you've reached the end of search results."
                })
            } else {
                renderCard(data.hits);
                const lightbox = new SimpleLightbox(".cards a", { captionsData: "alt", captionDelay: 250, captionPosition: 'bottom' });
                lightbox.refresh();
                showLoadBtn();
                hideChangeLoader();
                hideLoader();
                scroll();
                page += 1;

                if (perPage > data.hits.length && response.status === 200) {
                hideLoadBtn();
                form.reset();
                return iziToast.error({
                position: "bottomRight",
                    message: "We're sorry, but you've reached the end of search results."
                })
                }
            }

        }

    } catch (error) {
        console.log(error);
        hideLoadBtn();
        hideChangeLoader();
        hideLoader();
        form.reset();
        return iziToast.error({
        position: "bottomRight",
            message: "Sorry, something went wrong..."
        })
    }
})

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}

function showLoadBtn() {
    loadmoreBtn.style.display = 'flex';   
}

function hideLoadBtn() {
    loadmoreBtn.style.display = 'none';   
}

function showChangeLoader() {
    bottomLoader.style.display = 'flex';
}

function hideChangeLoader() {
    bottomLoader.style.display = 'none';
}

function scroll() {
    const gallery = document.querySelector('.cards');
    const cardHeight = gallery.firstElementChild.getBoundingClientRect().height;
    window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
}
