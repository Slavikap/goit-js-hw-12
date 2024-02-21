import{a as h,i,S as y}from"./assets/vendor-527658dd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();async function m(s,r=1){try{const e="https://pixabay.com",a="/api/";return(await h.get(`${e}${a}`,{params:{key:"42343826-37f50c073d3cb7aafd48234dd",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15}})).data.hits}catch(e){return console.error("Error fetching images:",e),[]}}function f(s){const r=document.querySelector(".cards");s.forEach(e=>{const a=`<li class="card"> 
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
             </li>`;r.insertAdjacentHTML("beforeend",a)})}const F=document.querySelector(".form"),g=document.querySelector(".loader"),l=document.querySelector(".load-more-btn");let d=1,u="",n;function b(){g.style.display="inline-block"}function p(){g.style.display="none"}F.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements.search.value.trim();if(r===""){i.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Please enter your search!",position:"bottomRight"});return}u!==r&&(u=r,d=1,document.querySelector(".cards").innerHTML=""),b();try{const e=await m(r);if(p(),e.length===0){i.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search. Please try again!",position:"bottomRight"});return}f(e),n?n.refresh():n=new y(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}),l.style.display="flex",window.scrollTo({top:document.querySelector(".cards").offsetTop,behavior:"smooth"})}catch(e){p(),i.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"bottomRight"}),console.error("Error fetching images:",e)}});l.addEventListener("click",async()=>{d++;const s=await m(u,d);if(s.length===0){l.style.display="none",i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"});return}f(s),n.refresh(),window.scrollBy({top:document.querySelector(".card").getBoundingClientRect().height*2,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
