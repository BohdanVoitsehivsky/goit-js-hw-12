import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  
  captionDelay: 250,
});

const galleryContainer = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".loadMoreBtn");



export function createGallery(images) { 
    const markUp = images
    .map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {

                return`
                <div class="cards">
                <a href="${largeImageURL}"> <img src="${webformatURL}" alt="${tags}" class="card-image"/></a>
                <div class="commments">
                <div class="card-comment">
                <h2>Likes</h2>
                <p>${likes}</p>
                </div>

                <div class="card-comment">
                <h2>Views</h2>
                <p>${views}</p>
                </div>

                

                <div class="card-comment">
                <h2>Comments</h2>
                <p>${comments}</p>
                </div>

                <div class="card-comment">
                <h2>Downloads</h2>
                <p>${downloads}</p>
                
                </div>
                </div>
                </div>
                `
                ;
                }).join("");
               galleryContainer.insertAdjacentHTML("beforeend", markUp);
               lightbox.refresh();
            } 




            export function clearGallery() {
                galleryContainer.innerHTML= "";

            }

            export function showLoader() {
                loader.classList.remove("hidden")

            }

             export function hideLoader() {
                loader.classList.add("hidden");
             }

             export function showLoadMoreButton() {
                loadMoreBtn.classList.remove("hidden");

             };

             export function hideLoadMoreButton() {
                loadMoreBtn.classList.add("hidden");

             }
