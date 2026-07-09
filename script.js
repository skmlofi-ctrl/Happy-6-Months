/* ==========================================================
                HAPPY 6 MONTHS ❤️
                PREMIUM WEBSITE
                SCRIPT PART - 1
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================================
                    LOADER
    =========================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 1800);

    });


    /* ===========================================
                BEGIN JOURNEY BUTTON
    =========================================== */

    const startBtn = document.getElementById("startBtn");

    if (startBtn) {

        startBtn.addEventListener("click", () => {

            const nextSection =
                document.querySelector(".quote-section");

            if (nextSection) {

                nextSection.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    }


    /* ===========================================
                LOVE COUNTER
    =========================================== */

    const relationshipDate = new Date("January 10, 2026 00:00:00").getTime();

    function updateCounter() {

        const now = new Date().getTime();

        const distance = now - relationshipDate;

        if (distance < 0) return;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        const dayEl = document.getElementById("days");
        const hourEl = document.getElementById("hours");
        const minuteEl = document.getElementById("minutes");
        const secondEl = document.getElementById("seconds");

        if (dayEl) dayEl.textContent = days;
        if (hourEl) hourEl.textContent = hours;
        if (minuteEl) minuteEl.textContent = minutes;
        if (secondEl) secondEl.textContent = seconds;

    }

    updateCounter();

    setInterval(updateCounter, 1000);


    /* ===========================================
            ACTIVE BUTTON EFFECT
    =========================================== */

    document.querySelectorAll("button").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "scale(1.05)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "";

        });

    });


    /* ===========================================
                SMOOTH REVEAL
    =========================================== */

    const revealItems = document.querySelectorAll(

        ".quote-card, .counter-card, .photo"

    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0px)";

            }

        });

    }, {

        threshold: 0.2

    });

    revealItems.forEach(item => {

        item.style.opacity = "0";

        item.style.transform = "translateY(40px)";

        item.style.transition = "0.8s ease";

        observer.observe(item);

    });

});
/* ==========================================================
                SCRIPT PART - 2
        Floating Hearts + Mouse Glow
        Gallery Lightbox + Surprise
========================================================== */


/* ===========================================
            FLOATING HEARTS
=========================================== */

const heartsContainer = document.querySelector(".floating-hearts");

function createHeart() {

    if (!heartsContainer) return;

    const heart = document.createElement("span");

    heart.innerHTML = "❤";

    heart.style.position = "absolute";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.bottom = "-30px";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heart.style.color = "#ff4d88";

    heart.style.opacity = Math.random();

    heart.style.animation =
        `heartFloat ${4 + Math.random() * 5}s linear forwards`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 350);



/* ===========================================
                MOUSE GLOW
=========================================== */

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});



/* ===========================================
            GALLERY IMAGE CLICK
=========================================== */

const galleryImages = document.querySelectorAll(".photo img");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        const overlay = document.createElement("div");

        overlay.className = "lightbox";

        overlay.innerHTML =

        `
        <img src="${img.src}">
        `;

        document.body.appendChild(overlay);

        overlay.addEventListener("click",()=>{

            overlay.remove();

        });

    });

});



/* ===========================================
            SURPRISE BUTTON
=========================================== */

const surpriseBtn =
document.getElementById("surpriseBtn");

if(surpriseBtn){

surpriseBtn.addEventListener("click",()=>{

    alert("❤️ Happy 6 Months My Love ❤️");

});

}



/* ===========================================
        HEART FLOAT ANIMATION
=========================================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes heartFloat{

0%{

transform:
translateY(0)
scale(.5);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:
translateY(-110vh)
scale(1.4)
rotate(360deg);

opacity:0;

}

}

.cursor-glow{

position:fixed;

width:140px;

height:140px;

border-radius:50%;

background:
radial-gradient(circle,
rgba(255,77,136,.28),
transparent 70%);

pointer-events:none;

transform:translate(-50%,-50%);

z-index:999;

transition:
left .05s linear,
top .05s linear;

}

.lightbox{

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:rgba(0,0,0,.92);

display:flex;

justify-content:center;

align-items:center;

z-index:99999;

animation:fade .4s;

}

.lightbox img{

max-width:90%;

max-height:90%;

border-radius:20px;

box-shadow:0 20px 60px rgba(0,0,0,.6);

}

@keyframes fade{

from{

opacity:0;

}

to{

opacity:1;

}

}

`;

document.head.appendChild(style);
/* ==========================================================
                SCRIPT PART - 3
        Fireworks + Confetti + Typewriter
        Heart Explosion + Rose Petals
========================================================== */


/* ===========================================
                TYPEWRITER EFFECT
=========================================== */



setTimeout(typing,1200);





/* ===========================================
            FALLING ROSE PETALS
=========================================== */

function createPetal(){

const petal = document.createElement("div");

petal.innerHTML="🌹";

petal.style.position="fixed";

petal.style.left=Math.random()*100+"vw";

petal.style.top="-50px";

petal.style.fontSize=(20+Math.random()*18)+"px";

petal.style.pointerEvents="none";

petal.style.zIndex="999";

petal.style.animation=
`petalFall ${6+Math.random()*4}s linear forwards`;

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(createPetal,1800);



/* ===========================================
            HEART EXPLOSION
=========================================== */

const finalBtn =
document.getElementById("surpriseBtn");

if(finalBtn){

finalBtn.addEventListener("click",()=>{

for(let i=0;i<40;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left="50%";

heart.style.top="50%";

heart.style.fontSize=
(18+Math.random()*18)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";

heart.style.transition="all 2s ease";

document.body.appendChild(heart);

const x=(Math.random()-0.5)*700;

const y=(Math.random()-0.5)*700;

setTimeout(()=>{

heart.style.transform=
`translate(${x}px,${y}px)
scale(0)`;

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},2200);

}

});

}



/* ===========================================
                SIMPLE FIREWORKS
=========================================== */

function firework(){

const fw=document.createElement("div");

fw.style.position="fixed";

fw.style.left=Math.random()*100+"vw";

fw.style.top=Math.random()*60+"vh";

fw.style.width="12px";

fw.style.height="12px";

fw.style.borderRadius="50%";

fw.style.background="#fff";

fw.style.boxShadow=`

0 0 20px #ff4d88,

0 0 40px #ff4d88,

0 0 60px #ffd700,

0 0 80px #8a5cff

`;

fw.style.zIndex="9999";

fw.style.animation="boom 1s forwards";

document.body.appendChild(fw);

setTimeout(()=>{

fw.remove();

},1000);

}



/* ===========================================
            SURPRISE BUTTON
=========================================== */

if(finalBtn){

finalBtn.addEventListener("click",()=>{

for(let i=0;i<12;i++){

setTimeout(firework,i*180);

}

});

}



/* ===========================================
            CONFETTI
=========================================== */

function confetti(){

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-10px";

c.style.width="8px";

c.style.height="16px";

c.style.background=

["#ff4d88","#ffd700","#8a5cff","#00e5ff"][

Math.floor(Math.random()*4)

];

c.style.zIndex="9999";

c.style.animation=

`confettiFall ${4+Math.random()*2}s linear forwards`;

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},7000);

}

}

if(finalBtn){

finalBtn.addEventListener("click",confetti);

}



/* ===========================================
        REQUIRED ANIMATION CSS
=========================================== */

const animationCSS=document.createElement("style");

animationCSS.innerHTML=`

@keyframes petalFall{

0%{

transform:translateY(-50px)
rotate(0deg);

opacity:1;

}

100%{

transform:
translateY(110vh)
rotate(360deg);

opacity:0;

}

}

@keyframes boom{

0%{

transform:scale(.2);

opacity:1;

}

100%{

transform:scale(10);

opacity:0;

}

}

@keyframes confettiFall{

0%{

transform:translateY(-20px)
rotate(0deg);

opacity:1;

}

100%{

transform:
translateY(110vh)
rotate(720deg);

opacity:0;

}

}

`;

document.head.appendChild(animationCSS);



/* ===========================================
            END MESSAGE
=========================================== */

console.log("❤️ Happy 6 Months Aasvi ❤️");
console.log("Made with Love by Sunny ❤️");