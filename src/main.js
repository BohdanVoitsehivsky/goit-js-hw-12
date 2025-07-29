import {getImagesByQuery} from './js/pixabay-api.js';
import {createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton} from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const input = document.querySelector('input[name="search-text"]');
const button = document.querySelector('button[type="submit"]');
const gallery = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".loadMoreBtn");
loadMoreBtn.classList.add("hidden");
let currentQuery = "";
let currentPage = 1;
let totalHits = 0;

form.addEventListener("submit", handlerSubmit);
loadMoreBtn.addEventListener("click", loadMoreImages);


async function handlerSubmit(event) {
    event.preventDefault();
    const query = input.value.trim();

    if(query !== currentQuery) {
        currentQuery = query;
        currentPage = 1;
        clearGallery();
        hideLoadMoreButton();
    }
    if(query === "") {
        iziToast.show({
        title: 'Ой, що це коїться???',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        color: 'red',
        position: 'topRight',
    });
        return;
    } 
    clearGallery();
    showLoader();
try{
        const {hits, totalHits: newTotalHits} = await getImagesByQuery(query, currentPage);
        
        
            if(hits.length === 0) {
               iziToast.error ({
                title: "Немає результатів",
                message: `Зображень за Вашим запитом ${query} не знайдено `,
                position: 'topRight',
    

               });
               return;
            } 
            createGallery(hits);
            currentPage++;
            totalHits = newTotalHits;
            if (currentPage <= Math.ceil(totalHits / 15)) {
                showLoadMoreButton();
            } else {
                hideLoadMoreButton();
                iziToast.info({
                    message: "We're sorry, but you've reached the end of search results",
                    position: 'topRight',

                });
            }
        } catch (error) {
            iziToast.error({
                message: "Щось пішло не так при завантаженні зображень",
                position: 'topRight',
            });
        
                console.log(error);
                } finally {
                    hideLoader();
                }
            }
                
           

    async function loadMoreImages() {
        showLoader();
        try{

        const {hits} = await getImagesByQuery(currentQuery, currentPage);
        createGallery(hits);
        currentPage++;

        scroll();

        

        if(currentPage > Math.ceil(totalHits / 15)) {
            hideLoadMoreButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
        }
    } catch (error) {
        iziToast.error({
            message: " Не вдалося завантажити більше зображень",
            position: "topRight",
        });
        console.log(error);
        
    } finally{
        hideLoader();
    }
}



function scroll() {
  const card = document.querySelector(".cards");
  if (card) {
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });
  }
}
    