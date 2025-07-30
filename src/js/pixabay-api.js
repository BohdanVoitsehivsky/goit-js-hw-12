import axios from "axios"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const API_KEY = "51465381-3669693f35fe6c0ef244a196a"
const BASE_URL = 'https://pixabay.com/api/'

export const PER_PAGE = 15;
export async function getImagesByQuery(query, page = 1) {
    try {
        
    const res = await axios.get('https://pixabay.com/api/', {
        params:{
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: PER_PAGE,
        
        }
      
        
    });
  console.log(res.data);
    const {hits, totalHits} = res.data
    
        if(hits.length === 0) {
            iziToast.show({
    title: 'Ой, що це коїться???',
    message: 'Sorry, there are no images matching your search query. Please try again!',
    color: 'red',  
    position: 'topRight',

});
return[];
        }
        return {hits, totalHits};
        
    } catch(error) {
        console.log(error);
        
    }
}