//INDEX TING
let currentlyShowing;
let srcNr;

//Import arrays
import { textArray, passagesArray } from "./textArray.js";

//preloading
function preloadImages(url){
    let img = new Image();
    img.src = url;
}

for (let i=1;i<43;i++){
    preloadImages(`./mcdatabase/poem(${i}).jpg`)
}

//button functions
function close(){
    document.getElementById('poemImgDiv').style.display = "none";
    while (document.getElementById('poemImgDiv').firstElementChild !== null) {
        document.getElementById('poemImgDiv').firstElementChild.remove();
    }

    currentlyShowing = "";

}

function rerollImg(){
    srcNr = randomIntPoems();
    document.getElementById('img').src = `./mcdatabase/poem(${srcNr}).jpg`;
    document.getElementById('poemNrTextTwo').innerHTML = `${srcNr}`;
}

function rerollP(){
    document.getElementById('poemImgDiv').firstElementChild.innerHTML = passagesArray[randomIntPassages()];
}

function rerollTextPoem(){
    document.getElementById('poemImgDiv').firstElementChild.innerHTML = textArray[randomTextInt()];
}

//Random integer
function randomIntPoems(){ //amount of poem documents
    return Math.floor(Math.random() * 42) + 1; //Need to change if more poems
}

function randomTextInt(){
    return Math.floor(Math.random() * 42) + 1; //Need to change if more poems
}

//get random poem
let randomPoem = function(){
    //making img and setting src
    if (document.getElementById('poemImgDiv').firstElementChild === null) {
        let img = document.createElement('img');
        img.id = "img";

        srcNr = randomIntPoems();
        img.src = `./mcdatabase/poem(${srcNr}).jpg`;

        //appending img to div and making div visible
        document.getElementById('poemImgDiv').appendChild(img);

        document.getElementById('poemImgDiv').style.display = "block";

        //<p>'s
        let poemNrText = document.createElement('p');
        poemNrText.innerHTML = 'P <br> O <br> E <br> M';
        poemNrText.id = "poemNrText";

        //<p>'s
        let poemNrTextTwo = document.createElement('p');
        poemNrTextTwo.innerHTML = `${srcNr}`;
        poemNrTextTwo.id = "poemNrTextTwo";

        document.getElementById('poemImgDiv').appendChild(poemNrText);
        document.getElementById('poemImgDiv').appendChild(poemNrTextTwo);

        currentlyShowing = "imgPoem";
    }
}

let randomPoemButton = document.getElementById('randomPoem');

randomPoemButton.addEventListener('click', randomPoem);

//close and reroll

let currentlyShowingContainer = document.getElementById('poemImgDiv');

let hidePoem = function(){
    if (currentlyShowing === "imgPoem"){
        rerollImg();
    } else if (currentlyShowing === "passage"){
        rerollP();
    } else if (currentlyShowing === "textPoem"){
        rerollTextPoem();
    }
}

currentlyShowingContainer.addEventListener('click', hidePoem);
currentlyShowingContainer.addEventListener('dblclick', close);

//get random line(s)

function randomIntPassages(){
    return Math.floor(Math.random() * passagesArray.length);
}

let randomLineButton = document.getElementById('randomLine');

let randomLine = function(){
    //making paragraph and adding text
    if (document.getElementById('poemImgDiv').firstElementChild === null) {
        let lines = document.createElement('p');
        lines.innerHTML = passagesArray[randomIntPassages()];
        lines.id = "lines";
        lines.style.fontSize = "25px";

        //appending
        document.getElementById('poemImgDiv').appendChild(lines);
        document.getElementById('poemImgDiv').style.display = "block";

        currentlyShowing = "passage";
    }
}

randomLineButton.addEventListener('click', randomLine);

//Keyboard commands

document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "Enter" && currentlyShowing === "passage") {
        rerollP();
    }
    if (key === "Enter" && currentlyShowing === "textPoem") {
        rerollTextPoem();
    }
    if (key === "Enter" && currentlyShowing === "imgPoem") {
        rerollImg();
    }
    if (key === "Escape") {
        close();
    }
});

//SEARCH FUNCTION GENERIC
function searchArrayForMatch(formToUse, array){
    let passageReturned;
    let formInput = document.getElementById(`${formToUse}`).value.toLowerCase();
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(formInput)) {
            let lines = document.createElement('p');
            lines.innerHTML = array[i];
            lines.id = "lines";
            lines.style.fontSize = "25px";

            //appending
            if (document.getElementById('poemImgDiv').firstElementChild === null) {
                document.getElementById('poemImgDiv').appendChild(lines);
                document.getElementById('poemImgDiv').style.display = "block";
            }

            passageReturned = true;
        }
    }

    if (passageReturned !== true) {
        alert(`No passage with keyword "${formInput}" found, hoebag.`);
    }
}
//FORM 1
let form = document.getElementById('form');

let searchArray = function (event) {
    searchArrayForMatch("formInput", passagesArray);

    form.reset();
    event.preventDefault();
}

form.addEventListener('submit', searchArray);

//FORM 2
let form2 = document.getElementById('form2');

let searchArray2 = function (event) {
    searchArrayForMatch("formInput2", textArray);

    form2.reset();
    event.preventDefault();
}

form2.addEventListener('submit', searchArray2);

// get text poem

let textPoemButton = document.getElementById('poemsText');

function textPoem(){
    if (document.getElementById('poemImgDiv').firstElementChild === null) {
        let lines = document.createElement('p');
        lines.innerHTML = textArray[randomTextInt()];
        lines.id = "lines";
        lines.style.fontSize = "25px";

        //appending
        document.getElementById('poemImgDiv').appendChild(lines);
        document.getElementById('poemImgDiv').style.display = "block";

        currentlyShowing = "textPoem";
}}

textPoemButton.addEventListener('click', textPoem);