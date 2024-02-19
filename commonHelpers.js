import{i as n,a as y,S as f}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function b(a){const s=document.querySelector(".cards");a.forEach(o=>{const r=`<li class="card"> 
                    <a class="card-link" href="${o.largeImageURL}">
                        <img class="card-img" src="${o.webformatURL}" alt="${o.tags}" data-source="${o.largeImageURL}" />
                    </a>
                    <div class="card-data">
                        <div class="data-wrap">
                            <p>Likes: </p>
                            <span>${o.likes}</span>
                        </div>
                        <div class="data-wrap">
                            <p>Views: </p>
                            <span>${o.views}</span>
                        </div>
                        <div class="data-wrap">
                            <p>Comments: </p>
                            <span>${o.comments}</span>
                        </div>
                        <div class="data-wrap">
                            <p>Downloads: </p>
                            <span>${o.downloads}</span>
                        </div>
                    </div>
                 </li>`;s.innerHTML+=r})}const l=document.querySelector(".form"),w=document.querySelector(".loader"),m=document.querySelector(".load-more-btn");document.querySelector(".card");const F=document.querySelector(".bottom-loader");let i=1,p=15,h="";l.addEventListener("submit",async a=>{if(a.preventDefault(),h=a.target.elements.search.value.trim(),i=1,h===""){n.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Please enter a search query!",position:"bottomRight"});return}v();const s={key:"42328453-99f2c5c34c77a0496905bbef3",q:h,image_type:"photo",orientation:"horizontal",safesearch:"true",page:i,per_page:p},o=new URLSearchParams(s);try{const r=await y.get(`https://pixabay.com/api/?${o}`),e=r.data;if(window.scrollTo({top:0,behavior:"smooth"}),e.hits.length===0){const t=document.querySelector(".cards");t.innerHTML="",d(),c(),n.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"})}else{const t=document.querySelector(".cards");if(t.innerHTML="",b(e.hits),new f(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),d(),L(),l.reset(),p>e.hits.length&&r.status===200)return c(),l.reset(),n.error({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}i+=1}catch(r){return console.log(r),c(),g(),d(),l.reset(),n.error({position:"bottomRight",message:"Sorry, something went wrong..."})}});m.addEventListener("click",async a=>{S(),c();const s={key:"42328453-99f2c5c34c77a0496905bbef3",q:h,image_type:"photo",orientation:"horizontal",safesearch:"true",page:i,per_page:p},o=new URLSearchParams(s);try{if(i>1){const r=await y.get(`https://pixabay.com/api/?${o}`),e=r.data,t=Math.ceil(e.totalHits/p);if(i>t)return c(),d(),g(),n.error({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."});if(b(e.hits),new f(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),L(),g(),d(),R(),i+=1,p>e.hits.length&&r.status===200)return c(),l.reset(),n.error({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}}catch(r){return console.log(r),c(),g(),d(),l.reset(),n.error({position:"bottomRight",message:"Sorry, something went wrong..."})}});function v(){w.style.display="block"}function d(){w.style.display="none"}function L(){m.style.display="flex"}function c(){m.style.display="none"}function S(){F.style.display="flex"}function g(){F.style.display="none"}function R(){const s=document.querySelector(".cards").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
