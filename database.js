//SHOW POEM

let poemButtons = document.getElementsByClassName("poemButton");
let poemNumber;

let databasePoem = function (numberOfPoem) {
    poemNumber = numberOfPoem;
    document.getElementById("shownPoem").src = `./mcdatabase/${poemNumber}.jpg`;
    document.getElementById("monkepic").style.display = "flex";
    document.getElementById('hider').style.display = "block";
    document.getElementById('next').style.display = "block";
    document.getElementById('prev').style.display = "block";
}

poemButtons.onclick = databasePoem;

//HIDE POEM

let hider = document.getElementById('hidePoem')

let hidePoem = function () {
    document.getElementById("monkepic").style.display = "none";
    document.getElementById('hider').style.display = "none";
    document.getElementById('next').style.display = "none";
    document.getElementById('prev').style.display = "none";
}

hider.onclick = hidePoem;

// NEXT POEM

let next = document.getElementById('nextPoem')

let nextPoem = function () {
    let srcString = document.getElementById('shownPoem').src;
    let srcNumber = srcString.replace(/[^0-9]/g, '')
    let srcNumberPlusOne = parseInt(srcNumber) + 1;

    document.getElementById('shownPoem').src = `./mcdatabase/poem(${srcNumberPlusOne}).jpg`
    document.getElementById('shownPoem').style.display = "flex";
}

next.onclick = nextPoem;

//PILETAST FUNKTIONER

document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "ArrowRight") {
        nextPoem();
    }
    if (key === "ArrowLeft") {
        prevPoem();
    }
    if (key === "Escape") {
        hidePoem();
    }
});

// PREV POEM

let prev = document.getElementById('prevPoem')

let prevPoem = function () {
    let srcString = document.getElementById('shownPoem').src;
    let srcNumber = srcString.replace(/[^0-9]/g, '')
    let srcNumberMinusOne = parseInt(srcNumber) - 1;

    document.getElementById('shownPoem').src = `./mcdatabase/poem(${srcNumberMinusOne}).jpg`;
    document.getElementById('shownPoem').style.display = "flex";
}

prev.onclick = prevPoem;