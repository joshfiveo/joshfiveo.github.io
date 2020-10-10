//PASSAGE AND POEM INVOKERS
let passageButton = document.getElementsByClassName("passageButton");

function getRandomIntInclusive() {
    return Math.floor(Math.random() * 4) + 1;
}

function invokePassage(){
    alert("Passage " + getRandomIntInclusive() + " was summoned forth.")
}

passageButton.onclick = invokePassage;

//SUBMIT PASSAGE
let submitButton = document.getElementsByClassName("submitButton");

function submitPassage(){
    alert("Function under McDevelopment...")
}

submitButton.onclick = submitPassage;

//HIDER AND SHOWER

//SHOW POEM

let invokeButton = document.getElementsByClassName("invokeButton");

let showPoem = function(){
    let randomNumber = getRandomIntInclusive()
    document.getElementById("shownPoem").src = `./mcdatabase/poem${randomNumber}.jpg`
    document.getElementById("monkepic").style.display = "block";
}

invokeButton.onclick = showPoem;

//HIDE POEM

let hider = document.getElementsByClassName("hidePoem");

let hidePoem = function(){
    document.getElementById("monkepic").style.display = "none";
}

hider.addEventListener("click", hidePoem());