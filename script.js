/* Declare variables below to save the different sections (divs) of your story*/
let runTime = false;
let time = 50;
let maxTime = 100;
let winTime = 25;
let spacebarPressed = false;
let skull = document.querySelector(".skull");
let spongebob = document.querySelector(".spongebob");
let tiktok = document.querySelector(".tiktok");
let counter = document.querySelector(".Counter");
let title = document.querySelector(".title");
let title2 = document.querySelector(".title2");
let title3 = document.querySelector(".title3");
let startImage = document.querySelector(".startImage");
let option1Screen = document.querySelector(".option-one-screen");
let option2Screen = document.querySelector(".option-two-screen");
let start2 = document.querySelector(".start2");
let image2 = document.querySelector(".image2");
let startText = document.querySelector(".startText");
let option1 = document.querySelector(".option-one");
let option2 = document.querySelector(".option-two");
let option1End = document.querySelector(".option-one-end");
let option2End = document.querySelector(".option-two-end");
let option2secondending = document.querySelector(".option2SecondEnding");

option1.style.display = "none";
option2.style.display = "none";
option1Screen.style.display = "none";
option2Screen.style.display = "none";
option1End.style.display = "none";
option2End.style.display = "none";
title2.style.display = "none";
start2.style.display = "none";
image2.style.display = "none";


let start = document.querySelector(".Start");
option2secondending.style.display = "none";

start.onclick=function(){
    title.style.display = "none";
    startImage.style.display = "none";
    startText.style.display = "none";
    start.style.display = "none";
    start2.style.display = "block";
    option1.style.display = "block";
    option2.style.display = "block";
};

option2.onclick=function(){
    option1.style.display = "none";
    start2.style.display = "none";
    option2Screen.style.display = "block";
    option2.style.display = "none";
    title3.innerHTML = "Quickly! Spam space to regain your focus.";
    runTime = true;
};

start.onmousedown=function(){
    start.style.backgroundColor="DimGray";
};
start.onmouseover=function(){
    start.style.backgroundColor="gray";
};
start.onmouseout=function(){
    start.style.backgroundColor="white";
};

option1.onmousedown=function(){
    option1.style.backgroundColor="DimGray";
};
option1.onmouseover=function(){
    option1.style.backgroundColor="gray";
};
option1.onmouseout=function(){
    option1.style.backgroundColor="white";
};
option2.onmousedown=function(){
    option2.style.backgroundColor="DimGray";
};
option2.onmouseover=function(){
    option2.style.backgroundColor="gray";
};
option2.onmouseout=function(){
    option2.style.backgroundColor="white";
};

document.addEventListener("keydown", function(event) {
    if (event.code === "Space" && time < maxTime && runTime===true && spacebarPressed===false) {
        time++;
        spacebarPressed=true;
        counter.innerHTML = time;
    }
});

document.addEventListener("keyup", function() {
        spacebarPressed=false;
});

console.log("this works");

let timer = setInterval(function(){
    if (runTime ===true) {
        if (time <= 0) {
            runTime=false;
            endGame();
            clearInterval(timer);
        }
        if(time >= 90 && time <= 100) {
            winTime--;
            counter.style.color="lawngreen";
            tiktok.style.opacity = (winTime/100)*4;
        }
        else {
           	winTime=25;
           	
        }
        if (winTime === 0) {
            endGame();
            runTime=false;
            clearInterval(timer);
        }
        time -= 1;
        counter.innerHTML=time;
    }
},200);


function endGame() {
    option2Screen.style.display = "none";
    if (time === 0) {
        skull.style.display ="block";
        option2End.style.display = "block";
        skull.style.animation="swapImage 5s";
		spongebob.style.animation="changeImage 5s";
    }
    else {
		
    }
}

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


