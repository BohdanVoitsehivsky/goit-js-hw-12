import{a as w,i as n,S as M}from"./assets/vendor-DDdXnYQq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const B="51465381-3669693f35fe6c0ef244a196a";async function m(o,t=1){try{const r=await w.get("https://pixabay.com/api/",{params:{key:B,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});console.log(r.data);const{hits:i,totalHits:e}=r.data;return i.length===0?(n.show({title:"Ой, що це коїться???",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),[]):{hits:i,totalHits:e}}catch(r){console.log(r)}}const $=new M(".gallery a",{captions:!0,captionDelay:250}),f=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=document.querySelector(".loadMoreBtn");function g(o){const t=o.map(({webformatURL:r,largeImageURL:i,tags:e,likes:s,views:c,comments:b,downloads:q})=>`
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
                <p>${b}</p>
                </div>

                <div class="card-comment">
                <h2>Downloads</h2>
                <p>${q}</p>
                
                </div>
                </div>
                </div>
                `).join("");f.insertAdjacentHTML("beforeend",t),$.refresh()}function h(){f.innerHTML=""}function v(){p.classList.remove("hidden")}function L(){p.classList.add("hidden")}function P(){y.classList.remove("hidden")}function l(){y.classList.add("hidden")}const R=document.querySelector(".form"),H=document.querySelector('input[name="search-text"]');document.querySelector('button[type="submit"]');document.querySelector(".gallery");const S=document.querySelector(".loadMoreBtn");S.classList.add("hidden");let d="",a=1,u=0;R.addEventListener("submit",O);S.addEventListener("click",x);async function O(o){o.preventDefault();const t=H.value.trim();if(t!==d&&(d=t,a=1,h(),l()),t===""){n.show({title:"Ой, що це коїться???",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}h(),v();try{const{hits:r,totalHits:i}=await m(t,a);if(r.length===0){n.error({title:"Немає результатів",message:`Зображень за Вашим запитом ${t} не знайдено `,position:"topRight"});return}g(r),a++,u=i,a<=Math.ceil(u/15)?P():(l(),n.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"}))}catch(r){n.error({message:"Щось пішло не так при завантаженні зображень",position:"topRight"}),console.log(r)}finally{L()}}async function x(){v();try{const{hits:o}=await m(d,a);g(o),a++,E(),a>Math.ceil(u/15)&&(l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(o){n.error({message:" Не вдалося завантажити більше зображень",position:"topRight"}),console.log(o)}finally{L()}}function E(){const o=document.querySelector(".cards");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
