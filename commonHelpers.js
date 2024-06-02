import{a as B,A as C,S as q,N as T,K as S,E as W,i as H,P as z,b as F}from"./assets/vendor-8e9b1286.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();async function U(){const o="https://portfolio-js.b.goit.study/api/reviews";return(await B.get(o)).data}async function G(e,t){const s="https://portfolio-js.b.goit.study/api/requests",a={email:e,comment:t},l={"Content-Type":"application/json",Accept:"application/json"};return(await B.post(s,a,{headers:l})).data}function P(e,t){if(e.target.matches(t)){e.preventDefault();const o=e.target.getAttribute("href"),r=document.querySelector(o);if(r){const s=r.offsetTop;window.scrollTo({top:s,behavior:"smooth"})}}}const Y=document.querySelector(".menu-btn"),d=document.querySelector(".menu-list"),K=document.querySelector(".order-btn");let L=!1;function J(){L?(d.style.opacity="0",d.style.pointerEvents="none",L=!1):(d.style.opacity="1",d.style.pointerEvents="auto",L=!0)}d.style.opacity="0";d.style.pointerEvents="none";Y.addEventListener("click",J);d.addEventListener("click",e=>P(e,".menu-list-link"));K.addEventListener("click",e=>P(e,".order-btn"));const Q=document.querySelector(".menu-burger"),y=document.querySelector(".modal-mob-menu"),X=document.querySelector(".modal-button"),Z=document.querySelector(".mob-menu-list"),ee=document.querySelector(".order-btn-mob");Q.addEventListener("click",function(){y.classList.toggle("is-open")});X.addEventListener("click",function(){y.classList.remove("is-open")});Z.addEventListener("click",function(e){e.target.classList.contains("mob-list-link")&&y.classList.remove("is-open")});ee.addEventListener("click",function(){y.classList.remove("is-open")});const te=[{title:"About me",content:["I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.","Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."]},{title:"Role",content:["Frontend development","HeadlessCMS,Wordpress","Blender(enjoy)"]},{title:"Education",content:["2018 - 2019  / Frontend Development Diploma, GoIT IT School, New York","2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York","2020 - 2022 / Advanced Blender Animation Techniques, Udemy"]}],oe=document.querySelector("ul.about-me-list");function se(e){oe.innerHTML=re(e)}const ie='<button class="arrow-button"><svg class="arrow-icon js-down" width="20" height="20"><use href="./img/icons.svg#arrow"></use></svg></button>';function ne({content:e}){return`<div class="ac-panel about-list-text-box"><div class="ac-text"><p>${e.join("</p><p>")}</p></div></div>`}function re(e){let t="";return e.forEach(o=>{const r=ne(o),s=`<li class="ac about-me-item"><div class="ac-header ac-trigger about-list-header-box"><h4 class="about-title grey-accent-text">${o.title}</h4>${ie}</div>${r}</li>`;t+=s}),t}const ae={beforeOpen:function(e){e.querySelector(".js-down").setAttribute("transform","rotate(180)")},beforeClose:function(e){e.querySelector(".js-down").setAttribute("transform","rotate(0)")}};se(te);const ce=new C(".accordion-container",ae);ce.open(0);const f={nextButton:document.querySelector(".js-arrow"),slidesList:document.querySelector(".js-stack-list")},i={first:{object(){return f.slidesList.children[0]}},active:{object(){return f.slidesList.querySelector(".slide-active")}},sibling:{object(){return f.slidesList.querySelector(".slide-active").nextElementSibling}},clickedIndex:0,activeIndex:0},j=new q("#stack",{modules:[T,S],direction:"horizontal",loop:!0,spaceBetween:10,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{375:{slidesPerView:2,spaceBetween:5,slidesPerGroup:2},768:{slidesPerView:3,slidesPerGroup:3},1440:{slidesPerView:6}},on:{init(){i.first.object().classList.add("slide-active")},click(){i.clickedIndex=this.clickedIndex,i.clickedIndex!==void 0&&(i.activeIndex=i.clickedIndex,this.activeIndex=i.activeIndex,i.active.object().classList.remove("slide-active"),this.slides[i.clickedIndex].classList.add("slide-active"))}}});f.nextButton.addEventListener("click",()=>{const e=ue();e==="mobile"&&le(),e==="tablet"&&de(),e==="desktop"&&ge()});function le(){i.activeIndex<5&&i.sibling.object()?(g.activeToSibling(),(i.activeIndex===2||i.activeIndex===4)&&j.slideNext()):(g.activeToFirst(),j.slideNext())}function de(){i.activeIndex<5&&i.sibling.object()?(g.activeToSibling(),i.activeIndex===3&&j.slideNext()):(g.activeToFirst(),j.slideNext())}function ge(){i.sibling.object()?g.activeToSibling():g.activeToFirst()}const g={activeToSibling(){i.sibling.object().classList.add("slide-active"),i.active.object().classList.remove("slide-active"),i.activeIndex+=1},activeToFirst(){i.active.object().classList.remove("slide-active"),i.first.object().classList.add("slide-active"),i.activeIndex=0}};function ue(){const e=window.innerWidth;return e<768?"mobile":e<1440?"tablet":"desktop"}const N={ulEl:document.querySelector(".js-benefits-list"),btnEl:document.querySelector(".benefits-btn")},k="/project-digital-dragons-portfolio-js/assets/icons-d830d6cb.svg",pe=[{iconName:"expertise",title:"Expertise",text:"As a highly experienced developer, I have deep knowledge of programming and website development."},{iconName:"communication",title:"Communication",text:" Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{iconName:"art",title:"Art",text:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. "},{iconName:"execution",title:"Urgent execution",text:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}];function me({iconName:e,title:t,text:o}){return`
  <li class="benefits-list-item">
  <svg
    class="benefits-item-icon icon-${e}">
    <use href="${k}#${e}"></use>
  </svg>
  <h5 class="benefits-item-title">${t}</h5>
        <p class="benefits-item-text">${o}</p>
      </li>`}function fe(e){return e.map(me).join("")}function he(){const e=fe(pe);N.ulEl.innerHTML=e}window.addEventListener("DOMContentLoaded",he);N.btnEl.addEventListener("click",e=>P(e,".benefits-btn"));const p={projectSectionContainer:document.querySelector(".projects-js"),arrowContainer:document.querySelector(".arrow-js")},be=[{iconName:"arrow-left",svgWidth:68,svgHeight:68},{iconName:"arrow-right",svgWidth:68,svgHeight:68}];function je({iconName:e,svgHeight:t,svgWidth:o}){return`
  <button class="btn-${e} btn-project-${e}">
<svg class="icon-arrow icon-${e}" width="${o}" height="${t}">
  <use href="${k}#${e}"></use>
</svg>
</button>
`}function ve(e){return e.map(je).join("")}function we(e){const t=ve(be);e.insertAdjacentHTML("beforeend",t)}const ye="/project-digital-dragons-portfolio-js/assets/book-tab@1x-c04604e1.png",ke="/project-digital-dragons-portfolio-js/assets/book-tab@2x-4dbbd96c.png",xe="/project-digital-dragons-portfolio-js/assets/book-tab@1x-c04604e1.png",Le="/project-digital-dragons-portfolio-js/assets/book-tab@2x-4dbbd96c.png",qe="/project-digital-dragons-portfolio-js/assets/book-mob@1x-a957310f.png",Te="/project-digital-dragons-portfolio-js/assets/book-mob@2x-3d4e8716.png",Se="/project-digital-dragons-portfolio-js/assets/dog-tab@1x-8719993c.png",Pe="/project-digital-dragons-portfolio-js/assets/dog-tab@2x-99ec8bfa.png",Ee="/project-digital-dragons-portfolio-js/assets/dog-tab@1x-8719993c.png",Ie="/project-digital-dragons-portfolio-js/assets/dog-tab@2x-99ec8bfa.png",Re="/project-digital-dragons-portfolio-js/assets/dog-mob@1x-6bbe7939.png",Me="/project-digital-dragons-portfolio-js/assets/dog-mob@2x-fded5c40.png",De="/project-digital-dragons-portfolio-js/assets/register-tab@1x-61932908.png",$e="/project-digital-dragons-portfolio-js/assets/register-tab@2x-de033da4.png",_e="/project-digital-dragons-portfolio-js/assets/register-tab@1x-61932908.png",Ae="/project-digital-dragons-portfolio-js/assets/register-tab@2x-de033da4.png",Be="/project-digital-dragons-portfolio-js/assets/register-mob@1x-134771c3.png",Ce="/project-digital-dragons-portfolio-js/assets/register-mob@2x-8cf969fe.png",n={imgBookDesk:ye,imgBookDeskRetina:ke,imgBookTab:xe,imgBookTabRetina:Le,imgBookMob:qe,imgBookMobRetina:Te,imgDogDesk:Se,imgDogDeskRetina:Pe,imgDogTab:Ee,imgDogTabRetina:Ie,imgDogMob:Re,imgDogMobRetina:Me,imgRegisterDesk:De,imgRegisterDeskRetina:$e,imgRegisterTab:_e,imgRegisterTabRetina:Ae,imgRegisterMob:Be,imgRegisterMobRetina:Ce},He=[{imgLinkDesk:n.imgBookDesk,imgLinkDeskRetina:n.imgBookDeskRetina,imgLinkTab:n.imgBookTab,imgLinkTabRetina:n.imgBookTabRetina,imgLinkMob:n.imgBookMob,imgLinkMobRetina:n.imgBookMobRetina,linkProject:"https://github.com/anastasiia-riabokon/project-digital-dragons-portfolio-js/",titleImage:"project book",hashtags:["#react","#js","#node js","#git"],title:"Programming Across Borders:&nbsp;Ideas, Technologies, Innovations"},{imgLinkDesk:n.imgDogDesk,imgLinkDeskRetina:n.imgDogDeskRetina,imgLinkTab:n.imgDogTab,imgLinkTabRetina:n.imgDogTabRetina,imgLinkMob:n.imgDogMob,imgLinkMobRetina:n.imgDogMobRetina,linkProject:"https://github.com/anastasiia-riabokon/project-digital-dragons-portfolio-js/",titleImage:"project dog",hashtags:["#react","#js","#node js","#git"],title:"Programming Across Borders:&nbsp;Ideas, Technologies, Innovations"},{imgLinkDesk:n.imgRegisterDesk,imgLinkDeskRetina:n.imgRegisterDeskRetina,imgLinkTab:n.imgRegisterTab,imgLinkTabRetina:n.imgRegisterTabRetina,imgLinkMob:n.imgRegisterMob,imgLinkMobRetina:n.imgRegisterMobRetina,linkProject:"https://github.com/anastasiia-riabokon/project-digital-dragons-portfolio-js/",titleImage:"project register",hashtags:["#react","#js","#node js","#git"],title:"Programming Across Borders:&nbsp;Ideas, Technologies, Innovations"}];function Ne(e){return`
    <li class="item-project swiper-slide" id="item-slider">
      <div class="white-block">
        <ul class="list-hashtag">
          ${e.hashtags.map(o=>`<li class="item-hashtag"><p class="text-hashtag">${o}</p></li>`).join("")}
        </ul>
        <h3 class="subtitle-projects">${e.title}</h3>
        <a
          class="link-project"
          href="${e.linkProject}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link see project"
        >
          See project
        </a>
      </div>
        <picture class="dark-block">
          <source
            class="lazyload"
            media="(min-width: 1440px)"
            data-srcset="
              ${e.imgLinkDesk} 1x,
              ${e.imgLinkDeskRetina} 2x"
          />
          <source
            class="lazyload"
            media="(min-width: 768px)"
            data-srcset="
              ${e.imgLinkTab} 1x,
              ${e.imgLinkTabRetina} 2x"
          />
          <source
            class="lazyload"
            media="(max-width: 767px)"
            data-srcset="
              ${e.imgLinkMob} 1x,
              ${e.imgLinkMobRetina} 2x"
          />
          <img
            class="lazyload"
            src="${e.imgLinkDesk}"
            alt="${e.titleImage}"
            width="614"
            height="385"
            loading="lazy"
          />
        </picture>
   
    </li>
  `}function Oe(e){return e.map(Ne).join("")}function Ve(e){const t=Oe(He);e.insertAdjacentHTML("beforeend",t)}function v(e,t,o){e.isEnd?o.classList.remove("active"):o.classList.add("active"),e.isBeginning?t.classList.remove("active"):t.classList.add("active")}window.addEventListener("DOMContentLoaded",()=>{Ve(p.projectSectionContainer),we(p.arrowContainer);const e=p.arrowContainer.querySelector(".btn-project-arrow-right"),t=p.arrowContainer.querySelector(".btn-project-arrow-left"),o=new q(".mySwiper",{modules:[T,S,W],direction:"horizontal",slidesPerView:1,slidesPerGroup:1,speed:500,navigation:{nextEl:".btn-project-arrow-right",prevEl:".btn-project-arrow-left"},keyboard:{enabled:!0},effect:"creative",grabCursor:!0,creativeEffect:{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}}});v(o,t,e),o.on("reachBeginning slideChange reachEnd",()=>v(o,t,e))});const We=[{title:"What programming languages ​​are most often used in your project?",content:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"How can I contact you?",content:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{title:"What are the deadlines for the project?",content:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"Do you provide advice or support?",content:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{title:"What payment methods do you accept?",content:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{title:"What does the process of developing a software product look like from idea to implementation?",content:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}],ze=document.querySelector("ul.faq-list");function Fe(e){ze.innerHTML=Ye(e)}const Ue=`<button class="arrow-button"><svg class="arrow-icon js-down" width="20" height="20"><use href="${k}#arrow"></use></svg></button>`;function Ge({content:e}){return`<div class="faq-list-content-box ac-panel"><p class="faq-list-content ac-text">${e}</p></div>`}function Ye(e){let t="";return e.forEach(o=>{const r=Ge(o),s=`<li class="faq-list-item ac"><div class="faq-list-header-box ac-header ac-trigger"><h5 class="faq-list-header">${o.title}</h5>${Ue}</div>${r}</li>`;t+=s}),t}const Ke={showMultiple:!0,beforeOpen:function(e){e.querySelector(".js-down").setAttribute("transform","rotate(180)")},beforeClose:function(e){e.querySelector(".js-down").setAttribute("transform","rotate(0)")}};Fe(We);new C(".accordion-container-faq",Ke);const E="/project-digital-dragons-portfolio-js/assets/project1-d66cc38a.png",I="/project-digital-dragons-portfolio-js/assets/project1@2x-d1690dad.png",R="/project-digital-dragons-portfolio-js/assets/project2-58668f28.png",M="/project-digital-dragons-portfolio-js/assets/project2@2x-85af1fa2.png",D="/project-digital-dragons-portfolio-js/assets/project3-2df0f355.png",$="/project-digital-dragons-portfolio-js/assets/project3@2x-9699a170.png",Je="/project-digital-dragons-portfolio-js/assets/project4-cc3318fa.png",Qe="/project-digital-dragons-portfolio-js/assets/project4@2x-e71c34ae.png",Xe="/project-digital-dragons-portfolio-js/assets/project5-57ccfbfd.png",Ze="/project-digital-dragons-portfolio-js/assets/project5@2x-4179e559.png",et="/project-digital-dragons-portfolio-js/assets/project6-608633fc.png",tt="/project-digital-dragons-portfolio-js/assets/project6@2x-32f39408.png",ot="/project-digital-dragons-portfolio-js/assets/project7-d0985618.png",st="/project-digital-dragons-portfolio-js/assets/project7@2x-a35f9797.png",it="/project-digital-dragons-portfolio-js/assets/project8-11daa7f5.png",nt="/project-digital-dragons-portfolio-js/assets/project8@2x-4a2592a8.png",rt="/project-digital-dragons-portfolio-js/assets/project9-839c73f9.png",at="/project-digital-dragons-portfolio-js/assets/project9@2x-6776a243.png",ct="/project-digital-dragons-portfolio-js/assets/project10-0093a58f.png",lt="/project-digital-dragons-portfolio-js/assets/project10@2x-f4eb82ec.png",dt=[{src:E,srcset:I,alt:"Project 1"},{src:R,srcset:M,alt:"Project 2"},{src:D,srcset:$,alt:"Project 3"},{src:Je,srcset:Qe,alt:"Project 4"},{src:Xe,srcset:Ze,alt:"Project 5"},{src:et,srcset:tt,alt:"Project 6"},{src:ot,srcset:st,alt:"Project 7"},{src:it,srcset:nt,alt:"Project 8"},{src:rt,srcset:at,alt:"Project 9"},{src:ct,srcset:lt,alt:"Project 10"},{src:E,srcset:I,alt:"Project 1"},{src:R,srcset:M,alt:"Project 2"},{src:D,srcset:$,alt:"Project 3"}];function gt(e){return e.map(t=>`<img src="${t.src}" alt="${t.alt}" class="marquee__line">`).join("")}const x=gt(dt),ut=document.querySelector(".marquee__inner"),pt=document.querySelector(".marquee__inner_one"),mt=document.querySelector(".marquee__inner_two"),ft=document.querySelector(".marquee__inner_three");ut.innerHTML=x;pt.innerHTML=x;mt.innerHTML=x;ft.innerHTML=x;function ht(){const t=document.querySelector(".marquee__inner").getBoundingClientRect(),o=t.top,r=t.bottom,s=window.innerHeight||document.documentElement.clientHeight,a=r-s,l=o+s;return a<=0&&l>=0}function m(e){ht()?e.classList.add("animate"):e.classList.remove("animate")}function O(){const e=document.querySelector(".marquee__inner"),t=document.querySelector(".marquee__inner_one"),o=document.querySelector(".marquee__inner_two"),r=document.querySelector(".marquee__inner_three");m(e),m(t),m(o),m(r)}window.addEventListener("scroll",O);O();const c={ulEl:document.querySelector(".js-reviews__list"),btnPrev:document.querySelector(".btn-left-js"),btnNext:document.querySelector(".btn-right-js")};function bt(e){return`
        <li id='reviews__item' class="swiper-slide ">
        <img class="reviews__img" src="${e.avatar_url}" alt="${e._id}" />
        <h5 class="reviews__caption">${e.author}</h5>
        <p class="reviews__text">${e.review}</p>
        </li>`}function jt(e){return e.map(bt).join("")}function _(){H.error({title:"",message:"Error fetching reviews. Server isn`t working",position:"topRight",backgroundColor:"#ED3B44",messageColor:"white"})}function vt(){c.btnNext.classList.add("visually-hidden"),c.btnPrev.classList.add("visually-hidden")}function wt(){const e=new q(".js-swiper__reviews",{modules:[T,z,S],direction:"horizontal",slidesPerView:4,simulateTouch:!0,spaceBetween:16,speed:1e3,navigation:{nextEl:".btn-right-js",prevEl:".btn-left-js"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}});v(e,c.btnPrev,c.btnNext),e.on("reachBeginning slideChange reachEnd",()=>v(e,c.btnPrev,c.btnNext))}window.addEventListener("DOMContentLoaded",yt);async function yt(){try{const e=await U();if(e.length===0){_();return}const t=jt(e);c.ulEl.innerHTML=t,wt()}catch(e){vt(),c.ulEl.innerHTML="<li class='not-found'>Not found reviews</li>",console.log(e),_()}}const u=document.querySelector(".footer-form"),h=document.querySelector(".form-success-text"),b=document.querySelector(".form-error-text"),kt=F.create(`
    <div class="modal">
        <svg class="icon">
          <use href="../../img/icons.svg#icon-close-modal"></use>
        </svg>
        <h5>Thank you for your interest in cooperation!</h5>
        <p>
            The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.
        </p>
    </div>
`,{onShow:e=>{e.element().querySelector(".icon").onclick=e.close}});u.addEventListener("input",()=>{const e=u.querySelector("#email"),t=u.querySelector("#comment"),o=e.value.trim();t.value.trim(),o!==""?e.validity.valid?(h.style.opacity="1",b.style.opacity="0"):(h.style.opacity="0",b.style.opacity="1"):(h.style.opacity="0",b.style.opacity="0")});u.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.email.value.trim(),o=e.target.comment.value.trim();try{await G(t,o),kt.show(),u.reset(),h.style.opacity="0",b.style.opacity="0"}catch(r){xt(),console.error("Error sending request:",r)}});function xt(){H.warning({title:"Warning",titleColor:"white",message:"Unknown error",messageColor:"white",color:"#ED3B44",closeOnClick:!0,position:"topRight",timeout:4e3})}const V={iconName:"arrow-down",svgWidth:52,svgHeight:52,sizeScreen(){window.matchMedia("(max-width: 767px)").matches?this.svgWidth=this.svgHeight=42:window.matchMedia("(min-width: 768px) and (max-width: 1439px)").matches?this.svgWidth=this.svgHeight=52:this.svgWidth=this.svgHeight=72}};V.sizeScreen();const w=document.body;function Lt({iconName:e,svgHeight:t,svgWidth:o}){return`
  <button class="scroll-${e}" id="${e}">
<svg class="icon-arrow icon-${e}" width="${o}" height="${t}">
  <use href="${k}#${e}"></use>
</svg>
</button>
`}function qt(){const e=Lt(V);w.insertAdjacentHTML("beforeend",e)}function A(e){const t=(w.scrollHeight-window.innerHeight)/2;window.scrollY>=t?e.classList.add("up"):e.classList.remove("up")}window.addEventListener("DOMContentLoaded",()=>{qt();const e=document.querySelector("#arrow-down");A(e),e.addEventListener("click",()=>{const t=(w.scrollHeight-window.innerHeight)/2;window.scrollY>=t?window.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:w.offsetHeight,behavior:"smooth"})}),window.addEventListener("scroll",()=>A(e))});
//# sourceMappingURL=commonHelpers.js.map
