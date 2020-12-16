// DATABASE STUFF
//IMPORT
import { textArray, numberOfPoems } from "./textArray.js";

import { preloadImages } from "./functionsMain.js";

//GLOBAL VARIABLES
let srcNr;

//preloading
for (let i=1;i<numberOfPoems;i++){
    preloadImages(`./mcdatabase/poem(${i}).jpg`)
}

//Generic functions (next, prev, and close poems)
function next(){
    //new src
    srcNr++;
    document.getElementById('imgDatabase').src = `./mcdatabase/poem(${srcNr}).jpg`;
    document.getElementById('poemText').innerHTML = textArray[srcNr];

    //Head
    let headTitle = document.querySelector('title');
    headTitle.innerHTML = `Poem ${srcNr}`;
}

function prev(){
    //new src
    srcNr--;
    document.getElementById('imgDatabase').src = `./mcdatabase/poem(${srcNr}).jpg`;
    document.getElementById('poemText').innerHTML = textArray[srcNr];

    //Head
    let headTitle = document.querySelector('title');
    headTitle.innerHTML = `Poem ${srcNr}`;
}

function close(){
    document.getElementById('poemImgDiv').style.display = "none";
    while (document.getElementById('poemImgDiv').firstElementChild !== null) {
        document.getElementById('poemImgDiv').firstElementChild.remove();
    }

    //Head
    let headTitle = document.querySelector('title');
    headTitle.innerHTML = "Larry's Archives";
}

// Making buttons
let makeButtons = function(){
    for (let i = 1; i < numberOfPoems+1; i++){ //Need to change in case of more poems
        let button = document.createElement('a');
        button.innerHTML = `Poem ${i}`;
        button.setAttribute('data-value', `${i}`);

        document.getElementById('poemsContainer').appendChild(button);
    }
}

window.onload = makeButtons;

//Clicking poem button

let poemButtons = document.getElementsByTagName('a');

let showPoem = function(event){
    //making img and setting src
    let img = document.createElement('img');
    let poemNr = event.target.getAttribute('data-value');
    srcNr = parseInt(poemNr);
    img.id = "imgDatabase";

    // making text and setting src
    let text = document.createElement('p');
    text.innerHTML = textArray[srcNr];
    text.id = "poemText";

    //Head
    let headTitle = document.querySelector('title');
    headTitle.innerHTML = event.target.innerHTML;

    img.src = `./mcdatabase/poem(${srcNr}).jpg`;

    //appending img to div and making div visible
    document.getElementById('poemImgDiv').appendChild(text);
    document.getElementById('poemImgDiv').appendChild(img);

    document.getElementById('poemImgDiv').style.display = "block";
}

window.addEventListener('load', function (){
    for (let i = 0; i < poemButtons.length; i++){
        poemButtons[i].addEventListener('click', showPoem);
    }
});


// HIDER and next and prev
let poemImgDiv = document.getElementById('poemImgDiv');

let hidePoem = function(event){
    if ((window.innerWidth / 2) < event.clientX && srcNr !== numberOfPoems){
        next();
    } else if ((window.innerWidth / 2) > event.clientX && srcNr !== 1){
        prev();
    }
}

poemImgDiv.addEventListener('click', hidePoem);
poemImgDiv.addEventListener('dblclick', close);
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "ArrowRight" && srcNr !== numberOfPoems) { //Need to change if more poems
        next();
    }
    if (key === "ArrowLeft" && srcNr !== 1) {
        prev();
    }
    if (key === "Escape") {
        close();
    }
});