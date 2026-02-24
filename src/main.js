import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
} from './js/render-functions';

const formEl = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

formEl.addEventListener('submit', async e => {
    e.preventDefault();

    const query = e.target.elements['search-text'].value.trim();
    if (!query) return;

    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(query, currentPage);
        totalHits = data.totalHits;

        if (!data.hits.length) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return;
        }
        
        createGallery(data.hits);

        if (totalHits > 15) {
            showLoadMoreButton();
        }

    } catch (error) {
        iziToast.error({
            message: 'Error fetching images'
        });
    } finally {
        hideLoader();
    }
});
        
loadMoreBtn.addEventListener('click', async () => {
    currentPage += 1;

    showLoader();
    hideLoadMoreButton();

    try {
        const data = await getImagesByQuery(currentQuery, currentPage);

        createGallery(data.hits);

        const totalPages = Math.ceil(totalHits / 15);

        if (currentPage >= totalPages) {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
        } else {
            showLoadMoreButton();
        }

        const card = document.querySelector('.gallery-item');
        const cardHeight = card.getBoundingClientRect().height;

        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth',
        });
    } catch (error) {
        iziToast.error({
            message: "Error fetching images"
        });
    } finally {
        hideLoader();
    }
});

    