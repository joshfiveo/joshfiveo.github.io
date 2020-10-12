let passagesArray = ["he is a fur venerate / an utter degenerate","they gargled the jizzom / but read no john grisham","limp dick doug dimmadomes get sliced like cabbage"];

//PASSAGE AND POEM INVOKERS
let passageButton = document.getElementsByClassName("passageButton");

function getRandomIntInclusive() {
    return Math.floor(Math.random() * 42) + 1;
}

function getRandomIntInclusivePassages() {
    return Math.floor(Math.random() * 3);
}

function invokePassage(){
    let i = getRandomIntInclusivePassages();
    document.getElementById("passageboxtext").innerHTML = passagesArray[i];
    document.getElementById("passageBox").style.display = "block";
}

passageButton.onclick = invokePassage;

//MUSIC

let musicButton = document.getElementsByClassName("musicButton");

let playMusic = function(url) {
    new Audio(url).play();
}

musicButton.onclick = playMusic;

//HIDER AND SHOWER

//SHOW POEM

let invokeButton = document.getElementsByClassName("invokeButton");

let showPoem = function(){
    let randomNumber = getRandomIntInclusive()
    document.getElementById("shownPoem").src = `./mcdatabase/poem (${randomNumber}).jpg`
    document.getElementById("monkepic").style.display = "block";
}

invokeButton.onclick = showPoem;

//HIDE POEM

let hider = document.getElementsByClassName("hidePoem");

let hidePoem = function(){
    document.getElementById("monkepic").style.display = "none";
    document.getElementById("passageBox").style.display ="none";
}

hider.onclick = hidePoem;


//MORE PASSAGES

let morePassages = document.getElementById("passageBox");

morePassages.onclick = invokePassage;
