//INDEX TING

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

//button functions
function close(){
    document.getElementById('poemImgDiv').style.display = "none";
    while (document.getElementById('poemImgDiv').firstElementChild !== null) {
        document.getElementById('poemImgDiv').firstElementChild.remove();
    }
    while (document.body.lastElementChild.tagName === "BUTTON") {
        document.body.lastElementChild.remove();
    }
}

function rerollImg(){
    srcNr = randomIntPoems();
    document.getElementById('img').src = `./mcdatabase/poem(${srcNr}).jpg`;
    document.getElementById('poemNrTextTwo').innerHTML = `${srcNr}`;
}

function rerollP(){
    document.getElementById('poemImgDiv').firstElementChild.innerHTML = passagesArray[randomIntPassages()];
}

//Random integer
function randomIntPoems(){ //amount of poem documents
    return Math.floor(Math.random() * 42) + 1; //Need to change if more poems
}

function randomTextInt(){
    return Math.floor(Math.random() * 5) + 1; //Need to change if more poems
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

        //<p>'s
        let poemNrText = document.createElement('p');
        poemNrText.innerHTML = 'P <br> O <br> E <br> M';
        poemNrText.id = "poemNrText";

        //<p>'s
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
        close();
    } else if (event.target.innerHTML === "reroll" && document.getElementById('poemImgDiv').firstElementChild.tagName === "IMG"){
        rerollImg();
    } else if (event.target.innerHTML === "reroll" && document.getElementById('poemImgDiv').firstElementChild.tagName === "P"){
        rerollP();
    }
}

document.addEventListener('click', hidePoem);

//get random line(s)
let passagesArray = ["he was a fur venerate / an utter degenerate", "they gargled the jizzom / but read no john grisham", "limp dick doug dimmadomes get sliced like cabbage", "i have one rule brr / i spend all souls on strr / big pecs = big checks and fat stacks", "to plow with his stick / until he was sick", "drip drop, slip slop, woop-de-scoop-de-meme'in / knick-knack paddy whack, lickety-split, hacks eat shit", "big dick monkey samba flatten bipedal bitches / [..] / bonobo bimbo bitches blow benis", "hillary's clit smells like sardines / flush her down the pipes / shit on the kikes / finish the show with combat wipes", "a man did scam a dyke; what sham! fuck him!", '"copacetic cephalopod cunts" harkd jim', "call me ted munky, the twisted simian serial killer [..] bombing the loo, like i'm ted kachimpsky", "hey! sergei: my name isphone please tell my mom", "unbearably loud i coomed on my couch / when i saw jenna haze, i was left in a daze / and died with my peener ablaze", "so i strangle my stiffy until it goes bendy / i'm dissappointing a wench named wendy", "pop fat souls to increase your swole, hoebag", "a wreckening reckoning: bumhole banishment", "his name: larry snakes. his testicles bloom'd / bloom'd they did, women swoon'd; love reborn and: / five-finger fist fucks, a tongue-punch'd fartbox", "seasoned with suffering, an inhuman mcoffering", "there once was a cuck in a town", "i blew out the shitter / i don't know what hit her", "with whip in hand, he prepares for hate crime", "the untimely termination of fellatio gave the erstwhile guzzler leverage", "you're left cooming in your room in a jizz salto", "blow your rectal trumpets gabriel", "to poke and prod with massive, pulsing rod", "eldritch effluviate engulfed england / rich royal rightous racists repress'd rembrandt / painting purple pompous painful ass", "'to check yourself before you wreck yourself is sound advice' hark'd snakes and took a shit", "and met a lad nam'd lee who was to be / a cocksman of the highest order", "paul bunyuns bunion for the rings of mconion", "angela merkel nukes the ukranians", "it rot, then smell'd, then he said: lets have fun / we'll have loads of fun with rape and pillage", "a kike he drew a knife to fight, and lurk", "the world is dark and black with death, it sucks / i hate these fucking cooming zoomer cucks", "'laughing, larry cut of his head, then said / you're dead, you fuck, i got the balls of gods' / while ye coomers were masturbating, i be decapitatin'", "my pleasure is my dick in a mouse trap", "'o, ye old god of cod: ye hath harness'd / the power of the ass' stated larry", "finger much but hole? dat ass", "he took their wives, the chink, the horse the coon / he met zizek, he sniff'd a sea of coke", "shaking his fist at the paleblood sky, he said: / 'with slugs, and his fav'rit weapon: pencils / from the depths of hell, i relieve at thee my guts", "follow the path of living[larry] snakes", "all work and no play makes jack a mad breh"];

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
    if (key === "Enter" && document.getElementById('poemImgDiv').firstElementChild.tagName === "P" && document.body.lastElementChild.innerHTML === "reroll") {
        rerollP();
    }
    if (key === "Enter" && document.getElementById('poemImgDiv').firstElementChild.tagName === "IMG") {
        rerollImg();
    }
    if (key === "Escape") {
        close();
    }
});

// MUSIC
/*
let musicButton = document.getElementById('musicButton');

let playMusic = function() {
    document.getElementById('musicTag').play();
}

musicButton.addEventListener('click', playMusic);
*/
//SEARCH FUNCTION
let form = document.getElementById('form');

let searchArray = function (event) {
    let formInput = document.getElementById('formInput').value.toLowerCase();
    let passageReturned;

    if (formInput !== '') {
        for (i = 0; i < passagesArray.length; i++) {
            if (passagesArray[i].includes(formInput)) {
                let lines = document.createElement('p');
                lines.innerHTML = passagesArray[i];
                lines.id = "lines";
                lines.style.fontSize = "25px";

                //close button
                let escape = document.createElement('button');
                escape.innerHTML = "Close";

                //appending
                if (document.getElementById('poemImgDiv').firstElementChild === null) {
                    document.getElementById('poemImgDiv').appendChild(lines);
                    document.getElementById('poemImgDiv').style.display = "block";
                    document.body.appendChild(escape);
                }

                passageReturned = true;
            }
        }

        if (passageReturned !== true) {
            alert(`No passage with keyword "${formInput}" found, hoebag.`);
        }
    }

    form.reset();
    event.preventDefault();
}

form.addEventListener('submit', searchArray);

// get text poem

let textPoemButton = document.getElementById('poemsText');

function textPoem(){
    if (document.getElementById('poemImgDiv').firstElementChild === null) {
        let lines = document.createElement('p');
        lines.innerHTML = textArray[randomTextInt()];
        lines.id = "lines";
        lines.style.fontSize = "25px";

        //appending
        document.getElementById('poemImgDiv').appendChild(lines);
        document.getElementById('poemImgDiv').style.display = "block";

        //close button
        let escape = document.createElement('button');
        escape.innerHTML = "Close";

        document.body.appendChild(escape);
}}

textPoemButton.addEventListener('click', textPoem);