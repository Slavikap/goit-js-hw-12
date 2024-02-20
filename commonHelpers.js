import{a as m,S as g,i}from"./assets/vendor-7d84507d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function d(s,o=1){try{const a="https://pixabay.com",t="/api/";return(await m.get(`${a}${t}`,{params:{key:"42343826-37f50c073d3cb7aafd48234dd",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:15}})).data.hits}catch(a){return console.error("Error fetching images:",a),[]}}function p(s){const o=document.querySelector(".cards");s.forEach(t=>{const e=`<li class="card"> 
                <a class="card-link" href="${t.largeImageURL}">
                    <img class="card-img" src="${t.webformatURL}" alt="${t.tags}" data-source="${t.largeImageURL}" />
                </a>
                <div class="card-data">
                    <div class="data-wrap">
                        <p>Likes: </p>
                        <span>${t.likes}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Views: </p>
                        <span>${t.views}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Comments: </p>
                        <span>${t.comments}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Downloads: </p>
                        <span>${t.downloads}</span>
                    </div>
                </div>
             </li>`;o.insertAdjacentHTML("beforeend",e)}),new g(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}const f=document.querySelector(".form");document.querySelector(".loader");const c=document.querySelector(".load-more-btn");let l=1,u="";f.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements.search.value.trim();if(o===""){i.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Please enter your search!",position:"bottomRight"});return}u=o,l=1;const a=await d(o);if(a.length===0){i.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search. Please try again!",position:"bottomRight"});return}const t=document.querySelector(".cards");t.innerHTML="",p(a),c.style.display="flex",window.scrollTo({top:t.offsetTop,behavior:"smooth"})});c.addEventListener("click",async()=>{l++;const s=await d(u,l);if(s.length===0){c.style.display="none",i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"});return}p(s),window.scrollBy({top:document.querySelector(".card").getBoundingClientRect().height*2,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
