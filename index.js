import{a as M,i as n,S as P}from"./assets/vendor-DDdXnYQq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const B="51465381-3669693f35fe6c0ef244a196a",u=15;async function h(o,t=1){try{const r=await M.get("https://pixabay.com/api/",{params:{key:B,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:u}});console.log(r.data);const{hits:i,totalHits:e}=r.data;return i.length===0?(n.show({title:"Ой, що це коїться???",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),[]):{hits:i,totalHits:e}}catch(r){console.log(r)}}const R=new P(".gallery a",{captions:!0,captionDelay:250}),m=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=document.querySelector(".loadMoreBtn");function y(o){const t=o.map(({webformatURL:r,largeImageURL:i,tags:e,likes:s,views:c,comments:q,downloads:w})=>`
                <div class="cards">
                <a href="${i}"> <img src="${r}" alt="${e}" class="card-image"/></a>
                <div class="commments">
                <div class="card-comment">
                <h2>Likes</h2>
                <p>${s}</p>
                </div>

                <div class="card-comment">
                <h2>Views</h2>
                <p>${c}</p>
                </div>

                

                <div class="card-comment">
                <h2>Comments</h2>
                <p>${q}</p>
                </div>

                <div class="card-comment">
                <h2>Downloads</h2>
                <p>${w}</p>
                
                </div>
                </div>
                </div>
                `).join("");m.insertAdjacentHTML("beforeend",t),R.refresh()}function $(){m.innerHTML=""}function g(){f.classList.remove("hidden")}function v(){f.classList.add("hidden")}function L(){p.classList.remove("hidden")}function d(){p.classList.add("hidden")}const H=document.querySelector(".form"),E=document.querySelector('input[name="search-text"]');document.querySelector('button[type="submit"]');document.querySelector(".gallery");const S=document.querySelector(".loadMoreBtn");S.classList.add("hidden");let b="",a=1,l=0;H.addEventListener("submit",O);S.addEventListener("click",x);async function O(o){o.preventDefault();const t=E.value.trim();if(t===""){n.show({title:"Ой, що це коїться???",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}b=t,a=1,l=0,$(),d(),g();try{const{hits:r,totalHits:i}=await h(t,a);if(r.length===0){n.error({title:"Немає результатів",message:`Зображень за Вашим запитом ${t} не знайдено `,position:"topRight"});return}y(r),l=i,a<Math.ceil(l/u)?L():(d(),n.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"})),a++}catch(r){n.error({message:"Щось пішло не так при завантаженні зображень",position:"topRight"}),console.log(r)}finally{v()}}async function x(){g();try{const{hits:o}=await h(b,a);y(o),A(),a<Math.ceil(l/u)?L():(d(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),a++}catch(o){n.error({message:" Не вдалося завантажити більше зображень",position:"topRight"}),console.log(o)}finally{v()}}function A(){const o=document.querySelector(".cards");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
