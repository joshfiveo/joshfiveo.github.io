//SHOW POEM

let poem1 = document.getElementsByClassName("poem1");

let showPoem = function(){
    document.getElementById("shownPoem").src = "./mcdatabase/poem1.jpg"
    document.getElementById("monkepic").style.display = "block";
}

poem1.onclick = showPoem;

//HIDE POEM

let hider = document.getElementsByClassName("hidePoem");

let hidePoem = function(){
    document.getElementById("monkepic").style.display = "none";
}

hider.onclick = hidePoem;