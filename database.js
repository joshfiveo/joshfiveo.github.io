// DATABASE STUFF

//Generic functions (next, prev, and close poems)
function next(){
    //new src
    srcNr++;
    document.getElementById('img').src = `./mcdatabase/poem(${srcNr}).jpg`;

    //Head
    let headTitle = document.querySelector('title');
    headTitle.innerHTML = `Poem ${srcNr}`;
}

function prev(){
    //new src
    srcNr--;
    document.getElementById('img').src = `./mcdatabase/poem(${srcNr}).jpg`;

    //Head
    let headTitle = document.querySelector('title');
    headTitle.innerHTML = `Poem ${srcNr}`;
}

function close(){
    document.getElementById('poemImgDiv').style.display = "none";
    document.getElementById('poemImgDiv').firstElementChild.remove();
    document.body.lastElementChild.remove();
    document.body.lastElementChild.remove();
    document.body.lastElementChild.remove();

    //Head
    let headTitle = document.querySelector('title');
    headTitle.innerHTML = "Larry's Archives";
}

// Making buttons
let makeButtons = function(){
    for (i = 1; i < 43; i++){ //Need to change in case of more poems
        let button = document.createElement('a');
        button.innerHTML = `Poem ${i}`;
        button.setAttribute('data-value', `${i}`);

        document.getElementById('poemsContainer').appendChild(button);
    }
}

window.onload = makeButtons;

//Clicking poem button
let srcNr;

let poemButtons = document.getElementsByTagName('a');

let showPoem = function(event){
    //making img and setting src
    let img = document.createElement('img');
    let poemNr = event.target.getAttribute('data-value');
    srcNr = poemNr;
    img.id = "img";

    //Head
    let headTitle = document.querySelector('title');
    headTitle.innerHTML = event.target.innerHTML;

    img.src = `./mcdatabase/poem(${poemNr}).jpg`;
    img.style.height = "100%";

    //appending img to div and making div visible
    document.getElementById('poemImgDiv').appendChild(img);

    document.getElementById('poemImgDiv').style.display = "block";

    //close button
    let escape = document.createElement('button');
    escape.innerHTML = "Close";

    //Nnext button
    let next = document.createElement('button');
    next.innerHTML = ">";
    next.id = "next";

    //Prev Button
    let prev = document.createElement('button');
    prev.innerHTML = "<";
    prev.id = "prev";

    document.body.appendChild(escape);
    document.body.appendChild(next);
    document.body.appendChild(prev);
}

window.addEventListener('load', function (){
    for (i = 0; i < poemButtons.length; i++){
        poemButtons[i].addEventListener('click', showPoem);
    }
});


// HIDER and next and prev


let hidePoem = function(event){
    if (event.target.innerHTML === "Close") {
        close();
    } else if (event.target.id === "next" && srcNr !== 42){ //Need to change if more poems
        next();
    } else if (event.target.id === "prev" && srcNr !== 1){
        prev();
    }
}

document.addEventListener('click', hidePoem);
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "ArrowRight" && srcNr !== 42) { //Need to change if more poems
        next();
    }
    if (key === "ArrowLeft" && srcNr !== 1) {
        prev();
    }
    if (key === "Escape") {
        close();
    }
});


// SWIPE SHIT

var container = document.querySelector("#poemImgDiv");

container.addEventListener("touchstart", startTouch, false);
container.addEventListener("touchmove", moveTouch, false);

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
}

function moveTouch(e) {
    if (initialX === null) {
        return;
    }

    if (initialY === null) {
        return;
    }

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0 && srcNr !== 42) {
            // swiped left
            next();
        } else {
            // swiped right
            if (srcNr !== 1) {
                prev();
            }
        }
    } else {
        // sliding vertically
        if (diffY > 0) {
            // swiped up
            console.log("swiped up");
        } else {
            // swiped down
            console.log("swiped down");
        }
    }

    initialX = null;
    initialY = null;

    e.preventDefault();
}
