//SHOW POEM

let poemButtons = document.getElementsByClassName("poemButton");
let poemNumber;

let databasePoem = function(numberOfPoem){
    poemNumber = numberOfPoem;
    document.getElementById("shownPoem").src = `./mcdatabase/${poemNumber}.jpg`;
    document.getElementById("monkepic").style.display = "block";
}

poemButtons.onclick = databasePoem;

//HIDE POEM

let hider = document.getElementsByClassName("hidePoem");

let hidePoem = function(){
    document.getElementById("monkepic").style.display = "none";
}

hider.onclick = hidePoem;