import{a as f,i,S as g}from"./assets/vendor-527658dd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();async function d(s,o=1){try{const e="https://pixabay.com",a="/api/";return(await f.get(`${e}${a}`,{params:{key:"42343826-37f50c073d3cb7aafd48234dd",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:15}})).data.hits}catch(e){return console.error("Error fetching images:",e),[]}}function p(s){const o=document.querySelector(".cards");s.forEach(e=>{const a=`<li class="card"> 
                <a class="card-link" href="${e.largeImageURL}">
                    <img class="card-img" src="${e.webformatURL}" alt="${e.tags}" data-source="${e.largeImageURL}" />
                </a>
                <div class="card-data">
                    <div class="data-wrap">
                        <p>Likes: </p>
                        <span>${e.likes}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Views: </p>
                        <span>${e.views}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Comments: </p>
                        <span>${e.comments}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Downloads: </p>
                        <span>${e.downloads}</span>
                    </div>
                </div>
             </li>`;o.insertAdjacentHTML("beforeend",a)})}const h=document.querySelector(".form");document.querySelector(".loader");const c=document.querySelector(".load-more-btn");let l=1,u="",m;h.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements.search.value.trim();if(o===""){i.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Please enter your search!",position:"bottomRight"});return}u=o,l=1;const e=await d(o);if(e.length===0){i.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search. Please try again!",position:"bottomRight"});return}const a=document.querySelector(".cards");p(e),c.style.display="flex",window.scrollTo({top:a.offsetTop,behavior:"smooth"}),m=new g(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})});c.addEventListener("click",async()=>{l++;const s=await d(u,l);if(s.length===0){c.style.display="none",i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"});return}p(s),window.scrollBy({top:document.querySelector(".card").getBoundingClientRect().height*2,behavior:"smooth"}),m.refresh()});
//# sourceMappingURL=commonHelpers.js.map
