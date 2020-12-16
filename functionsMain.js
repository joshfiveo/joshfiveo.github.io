import {passagesArray, textArray} from "./textArray.js";

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

function close(){
    document.getElementById('poemImgDiv').style.display = "none";
    while (document.getElementById('poemImgDiv').firstElementChild !== null) {
        document.getElementById('poemImgDiv').firstElementChild.remove();
    }
}

function rerollImg(){
    let srcNr = randomIntPoems();
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

function randomIntPassages(){
    return Math.floor(Math.random() * passagesArray.length);
}

function preloadImages(url){
    let img = new Image();
    img.src = url;
}

export { randomTextInt, close, rerollTextPoem, rerollImg, rerollP, randomIntPoems, randomIntPassages, searchArrayForMatch, preloadImages };
