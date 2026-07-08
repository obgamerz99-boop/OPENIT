// ===============================
// Get Elements
// ===============================

const welcome = document.getElementById("welcome");
const question = document.getElementById("question");
const memoryPage = document.getElementById("memoryPage");
const finalPage = document.getElementById("finalPage");

const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const catPopup = document.getElementById("catPopup");
const continueBtn = document.getElementById("continueBtn");

const flowersBtn = document.getElementById("flowersBtn");

const catSound = document.getElementById("catSound");

const petals = document.querySelector(".petals");


// ===============================
// Change Pages
// ===============================

function changePage(oldPage, newPage){

    oldPage.classList.remove("active");

    setTimeout(() => {

        newPage.classList.add("active");

    },500);

}


// ===============================
// Start Button
// ===============================

startBtn.addEventListener("click",()=>{

    // Unlock audio for browser
    if(catSound){
        catSound.load();
    }

    changePage(welcome,question);

});


// ===============================
// No Button Escape
// ===============================

let noMoves = 0;


function moveNoButton(){

    if(noMoves < 2){

        noMoves++;

        let x = Math.random() * 300 - 150;
        let y = Math.random() * 200 - 100;


        noBtn.style.transform =
        `translate(${x}px, ${y}px)`;


    }

}


// Mouse

noBtn.addEventListener("mouseover",()=>{

    moveNoButton();

});


// Mobile

noBtn.addEventListener("touchstart",()=>{

    moveNoButton();

});



// ===============================
// Cat Popup + Sound
// ===============================

noBtn.addEventListener("click",()=>{


    if(noMoves >= 2){


        catPopup.style.display="flex";


        // Play laughing sound

        if(catSound){

            catSound.pause();

            catSound.currentTime = 0;


            catSound.play()
            .then(()=>{

                console.log("Cat laugh playing");

            })
            .catch((error)=>{

                console.log("Sound blocked:",error);

            });

        }


    }


});


// Close Cat

continueBtn.addEventListener("click",()=>{


    catPopup.style.display="none";


    noMoves=0;


    noBtn.style.transform="translate(0,0)";


});


// ===============================
// YES Button
// ===============================

yesBtn.addEventListener("click",()=>{


    // Confetti

    confetti({

        particleCount:250,

        spread:120,

        origin:{
            y:0.6
        }

    });


    setTimeout(()=>{


        changePage(question,memoryPage);


    },1000);


});



// ===============================
// Final Page
// ===============================


flowersBtn.addEventListener("click",()=>{


    changePage(memoryPage,finalPage);


    confetti({

        particleCount:150,

        spread:100

    });


});



// ===============================
// Falling Flowers
// ===============================


const flowerList=[

    "🌸",
    "🌷",
    "💜",
    "🌺"

];


function createPetal(){


    let petal=document.createElement("span");


    petal.innerHTML =
    flowerList[Math.floor(Math.random()*flowerList.length)];


    petal.style.position="absolute";


    petal.style.left =
    Math.random()*100+"vw";


    petal.style.top="-50px";


    petal.style.fontSize =
    (20 + Math.random()*25)+"px";


    petal.style.animation =
    `fall ${5 + Math.random()*5}s linear`;


    petals.appendChild(petal);



    setTimeout(()=>{

        petal.remove();

    },10000);


}


setInterval(createPetal,500);



// ===============================
// Cursor Sparkles
// ===============================


document.addEventListener("mousemove",(e)=>{


    let sparkle=document.createElement("div");


    sparkle.innerHTML="✨";


    sparkle.style.position="fixed";


    sparkle.style.left=e.clientX+"px";


    sparkle.style.top=e.clientY+"px";


    sparkle.style.pointerEvents="none";


    sparkle.style.fontSize="15px";


    document.body.appendChild(sparkle);



    setTimeout(()=>{

        sparkle.remove();

    },700);

document.addEventListener("click", () => {

    let sound = document.getElementById("catSound");

    sound.play();

});
});