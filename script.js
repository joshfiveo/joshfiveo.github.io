//INDEX TING

//Random integer
function randomIntPoems(){ //amount of poem documents
    return Math.floor(Math.random() * 42) + 1; //Need to change if more poems
}

//get random poem
let srcNr;

let randomPoem = function(){
    //making img and setting src
    if (document.getElementById('poemImgDiv').firstElementChild === null) {
        let img = document.createElement('img');
        img.id = "img";

        srcNr = randomIntPoems();
        img.src = `./mcdatabase/poem(${srcNr}).jpg`;
        img.style.height = "100%";

        //appending img to div and making div visible
        document.getElementById('poemImgDiv').appendChild(img);

        document.getElementById('poemImgDiv').style.display = "block";

        //close button
        let escape = document.createElement('button');
        escape.innerHTML = "Close";

        //REROLL BUTTON
        let reroll = document.createElement('button');
        reroll.innerHTML = "reroll";
        reroll.id = "reroll";

        //<a>'s
        let poemNrText = document.createElement('p');
        poemNrText.innerHTML = 'P <br> O <br> E <br> M';
        poemNrText.id = "poemNrText";

        //<a>'s
        let poemNrTextTwo = document.createElement('p');
        poemNrTextTwo.innerHTML = `${srcNr}`;
        poemNrTextTwo.id = "poemNrTextTwo";

        document.body.appendChild(escape);
        document.body.appendChild(reroll);
        document.getElementById('poemImgDiv').appendChild(poemNrText);
        document.getElementById('poemImgDiv').appendChild(poemNrTextTwo);

    }
}

let randomPoemButton = document.getElementById('randomPoem');

randomPoemButton.addEventListener('click', randomPoem);

//close

let hidePoem = function(event){
    if (event.target.innerHTML === "Close") {
        document.getElementById('poemImgDiv').style.display = "none";
        while (document.getElementById('poemImgDiv').firstElementChild !== null) {
            document.getElementById('poemImgDiv').firstElementChild.remove();
        }
        document.body.lastElementChild.remove();
        document.body.lastElementChild.remove();
    } else if (event.target.innerHTML === "reroll" && document.getElementById('poemImgDiv').firstElementChild.tagName === "IMG"){
        srcNr = randomIntPoems();
        document.getElementById('img').src = `./mcdatabase/poem(${srcNr}).jpg`;
        document.getElementById('poemNrTextTwo').innerHTML = `${srcNr}`;
    } else if (event.target.innerHTML === "reroll" && document.getElementById('poemImgDiv').firstElementChild.tagName === "P"){
        document.getElementById('poemImgDiv').firstElementChild.innerHTML = passagesArray[randomIntPassages()];
    }
}

document.addEventListener('click', hidePoem);

//get random line(s)
let passagesArray = ["he was a fur venerate / an utter degenerate", "they gargled the jizzom / but read no john grisham", "limp dick doug dimmadomes get sliced like cabbage", "i have one rule Brr / i spend all souls on Strr / Big pecs = big checks and fat stacks", "to plow with his stick / until he was sick", "drip drop, slip slop, woop-de-scoop-de-meme'in / knick-knack paddy whack, lickety-split, hacks eat shit", "big dick monkey samba flatten bipedal bitches / [..] / Bonobo bimbo bitches blow benis", "Hillary's clit smells like sardines / flush her down the pipes / shit on the kikes / finish the show with combat wipes", "a man did scam a dyke; what sham! FUCK him!", '"copacetic cephalopod cunts" harkd Jim', "call me Ted Munky, the twisted Simian Serial Killer [..] Bombing the loo, like I'm Ted Kachimpsky", "Hey! Sergei: my name isphone please tell my mom", "unbearably loud I coomed on my couch / when I saw Jenna Haze, I was left in a daze / and died with my peener ablaze", "so I strangle my stiffy until it goes bendy / I'm dissappointing a wench named Wendy", "pop fat souls to increase your swole, hoebag", "a wreckening reckoning: bumhole banishment", "His name: Larry Snakes. His testicles bloom'd / Bloom'd they did, women swoon'd; love reborn and: / five-finger fist fucks, a tongue-punch'd fartbox", "seasoned with suffering, an inhuman McOffering", "there once was a cuck in a town", "I blew out the shitter / I don't know what hit her", "with whip in hand, he prepares for hate crime", "the untimely termination of fellatio gave the erstwhile guzzler leverage", "you're left cooming in your room in a jizz salto", "blow your rectal trumpets Gabriel", "to poke and prod with massive, pulsing rod", "eldritch effluviate engulfed England / Rich royal rightous racists repress'd Rembrandt / painting purple pompous painful ass", "'to check yourself before you wreck yourself is sound advice' hark'd Snakes and took a shit", "And met a lad nam'd Lee who was to be / a cocksman of the highest order", "Paul Bunyuns bunion for the rings of McOnion", "Angela Merkel nukes the Ukranians", "it rot, then smell'd, then he said: lets have fun / we'll have loads of fun with rape and pillage", "a kike he drew a knife to fight, and lurk", "the world is dark and black with death, it sucks / I hate these fucking cooming zoomer cucks", "'Laughing, Larry cut of his head, then said / You're dead, you fuck, I got the balls of gods' / while ye coomers were masturbating, I be decapitatin'", "My pleasure is my dick in a mouse trap", "'O, Ye Old God of Cod: Ye hath harness'd / The power of the ass' stated Larry", "finger much but hole? dat ass", "he took their wives, the chink, the horse the coon / He met zizek, he sniff'd a sea of coke", "Shaking his fist at the paleblood sky, he said: / 'with slugs, and his fav'rit weapon: pencils / from the depths of hell, I relieve at thee my guts", "follow the path of living[Larry] snakes", "all work and no play makes jack a mad breh"];

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

        //close button
        let escape = document.createElement('button');
        escape.innerHTML = "Close";

        //REROLL BUTTON
        let reroll = document.createElement('button');
        reroll.innerHTML = "reroll";
        reroll.id = "reroll";

        document.body.appendChild(escape);
        document.body.appendChild(reroll);
    }
}

randomLineButton.addEventListener('click', randomLine);

//Keyboard commands

document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "Enter" && document.getElementById('poemImgDiv').firstElementChild.tagName === "P") {
        document.getElementById('lines').innerHTML = passagesArray[randomIntPassages()];
    }
    if (key === "Enter" && document.getElementById('poemImgDiv').firstElementChild.tagName === "IMG") {
        srcNr = randomIntPoems();
        document.getElementById('img').src = `./mcdatabase/poem(${srcNr}).jpg`;
        document.getElementById('poemNrTextTwo').innerHTML = `${srcNr}`;
    }
    if (key === "Escape") {
        document.getElementById('poemImgDiv').style.display = "none";
        while (document.getElementById('poemImgDiv').firstElementChild !== null) {
            document.getElementById('poemImgDiv').firstElementChild.remove();
        }
        document.body.lastElementChild.remove();
        document.body.lastElementChild.remove();
    }
});

// MUSIC

let musicButton = document.getElementById('musicButton');

let playMusic = function() {
    document.getElementById('musicTag').play();
}

musicButton.addEventListener('click', playMusic);