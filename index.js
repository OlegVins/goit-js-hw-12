import{a as v,S as w,i}from"./assets/vendor-CRJeqrVC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const S="https://pixabay.com/api/",q="54587804-730d69b5b34cc935cc62fa273";async function u(s,r){return(await v.get(S,{params:{key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),E=new w(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const r=s.map(e=>`<li class="gallery-item">
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
        </li>`).join("");f.insertAdjacentHTML("beforeend",r),E.refresh()}function M(){f.innerHTML=""}function p(){m.classList.remove("is-hidden")}function g(){m.classList.add("is-hidden")}function b(){h.classList.remove("is-hidden")}function L(){h.classList.add("is-hidden")}const P=document.querySelector(".form"),B=document.querySelector(".load-more");let n=1,l="",d=0;P.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(r){l=r,n=1,M(),L(),p();try{const e=await u(l,n);if(d=e.totalHits,!e.hits.length){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits);const a=Math.ceil(d/15);n<a?b():i.info({message:"We're sorry, but you've reached the end of search results."})}catch{i.error({message:"Error fetching images"})}finally{g()}}});B.addEventListener("click",async()=>{n+=1,p(),L();try{const s=await u(l,n);y(s.hits);const r=Math.ceil(d/15);n<r?b():i.info({message:"We're sorry, but you've reached the end of search results."});const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}catch{i.error({message:"Error fetching images"})}finally{g()}});
//# sourceMappingURL=index.js.map
