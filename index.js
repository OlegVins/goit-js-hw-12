import{a as w,S as v,i}from"./assets/vendor-CRJeqrVC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const S="https://pixabay.com/api/",q="54587804-730d69b5b34cc935cc62fa273";async function d(s,r){return(await w.get(S,{params:{key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-more"),E=new v(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const r=s.map(e=>`<li class="gallery-item">
        <a href="${e.largeImageURL}">
        <img
        src="${e.webformatURL}"
        alt="${e.tags}"
        loading="lazy"
        />
        </a>
        <div class="info">
        <p><b>Likes:</b> ${e.likes}</p>
        <p><b>Views:</b> ${e.views}</p>
        <p><b>Comments:</b> ${e.comments}</p>
        <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
        </li>`).join("");u.insertAdjacentHTML("beforeend",r),E.refresh()}function B(){u.innerHTML=""}function h(){f.classList.remove("is-hidden")}function p(){f.classList.add("is-hidden")}function g(){m.classList.remove("is-hidden")}function L(){m.classList.add("is-hidden")}const M=document.querySelector(".form"),P=document.querySelector(".load-more");let a=1,b="",l=0;M.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(r){b=r,a=1,B(),L(),h();try{const e=await d(r,a);if(l=e.totalHits,!e.hits.length){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits),l>15&&g()}catch{i.error({message:"Error fetching images"})}finally{p()}}});P.addEventListener("click",async()=>{a+=1,h(),L();try{const s=await d(b,a);y(s.hits);const r=Math.ceil(l/15);a>=r?i.info({message:"We're sorry, but you've reached the end of search results."}):g();const n=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}catch{i.error({message:"Error fetching images"})}finally{p()}});
//# sourceMappingURL=index.js.map
