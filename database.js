// DATABASE STUFF
let srcNr;

let textArray = ["zeroDoesntExist",
    "There was a man who was curly / with effort he also burly / he fought back against coomers / no patience with boomers / of spirits he was a consoomer /// m'bosso he was a grand lad / he could fuck up a big ass Brad / with a big ass meat stick / dick is soup-can thicc / he could spitroast even great chud /// asses to asses, dusk to dusk (?) / a dick like an elephant tusk / to spitroast a bitch / to scratch a great itch / he fuck like the great Elon Musk",
    "Ode to Strr: a dagger or rapier perhaps? / Hark! No! that would make us dex-fags! / i have one rule Brr / i spend all souls on Strr / big pecs = big check and fat stacks",
    "i ain't never seen no swine like them there pigs / ain't swindling no kindling, throwing pearls for pigs / louisana pedo don't need door / he smash the walls, and breaks you like a twig / proud mullet wearin redneck, but aint no hick / sees doors of perception, minds drifts ashore / consooms copious kegs, coors light galore / a southern Zarathustra, moonshine he swigs / black cop be like, 'missing persons, lol, sike!' / he dont believe, so aint no reprieve, for steve / he gon' be dead, made into cornbread / pedos and swamp things I with my knife strike / it's raining chainsaws in the Quoral Quee / the quota of beer / oh what a relief / we'll reach it / just grind up the dead",
    "his beastly was a snarlin' / he found himself a cute darlin' / to plow with his stick / until he was sick / with his dick he was himself harmin' /// there once was a dog from the sea / a danm man, everybody can see / he completed uncharted / 'tis so retarded / but based and redpill'd stay'd he /// there once was an african dog / who fearlessly braved the boss-fog / he challeng'd the boss / without purple moss / and never gave the singlest of fuck",
    "covertly concealed his constipation"
]

let poemsArray = [];

for (i=1;i<43;i++){
    poemsArray.push(
        {
            poemNr: `${i}`,
            poemSrc: `./mcdatabase/poem(${i}).jpg`,
            poemText: textArray[i]
        });
}

console.log(poemsArray);

//Generic functions (next, prev, and close poems)
function next(){
    //new src
    srcNr++;
    document.getElementById('img').src = `./mcdatabase/poem(${srcNr}).jpg`;
    document.getElementById('poemText').innerHTML = textArray[srcNr];
    console.log(textArray[srcNr]);

    //Head
    let headTitle = document.querySelector('title');
    headTitle.innerHTML = `Poem ${srcNr}`;
}

function prev(){
    //new src
    srcNr--;
    document.getElementById('img').src = `./mcdatabase/poem(${srcNr}).jpg`;
    document.getElementById('poemText').innerHTML = textArray[srcNr];
    console.log(textArray[srcNr]);

    //Head
    let headTitle = document.querySelector('title');
    headTitle.innerHTML = `Poem ${srcNr}`;
}

function close(){
    document.getElementById('poemImgDiv').style.display = "none";
    document.getElementById('poemImgDiv').firstElementChild.remove();
    while (document.body.lastElementChild.tagName === "BUTTON") {
        document.body.lastElementChild.remove();
    }

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

let poemButtons = document.getElementsByTagName('a');

let showPoem = function(event){
    //making img and setting src
    let img = document.createElement('img');
    let poemNr = event.target.getAttribute('data-value');
    srcNr = parseInt(poemNr);
    img.id = "img";

    // making text and setting src
    let text = document.createElement('p');
    text.innerHTML = textArray[srcNr];
    text.id = "poemText";

    //Head
    let headTitle = document.querySelector('title');
    headTitle.innerHTML = event.target.innerHTML;

    img.src = `./mcdatabase/poem(${poemNr}).jpg`;
    img.style.height = "100%";

    //appending img to div and making div visible
    document.getElementById('poemImgDiv').appendChild(text);
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
        if (diffX > 0) {
            // swiped left
            if (srcNr !== 42) {
                next();
            }
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
