//PASSAGE AND POEM INVOKERS
let invokeButton = document.getElementsByClassName("invokeButton");
let passageButton = document.getElementsByClassName("passageButton");

function getRandomIntInclusive() {
    return Math.floor(Math.random() * 100);
}

function invokePoem(){
    alert("Poem " + getRandomIntInclusive() + " has been invoked!")
}

function invokePassage(){
    alert("Passage " + getRandomIntInclusive() + " was summoned forth.")
}

invokeButton.onclick = invokePoem;
passageButton.onclick = invokePassage;



//SUBMIT PASSAGE
let submitButton = document.getElementsByClassName("submitButton");

function submitPassage(){
    alert("Function under McDevelopment...")
}

submitButton.onclick = submitPassage;