let passagesArray = ["he was a fur venerate / an utter degenerate", "they gargled the jizzom / but read no john grisham", "limp dick doug dimmadomes get sliced like cabbage", "i have one rule Brr / i spend all souls on Strr / Big pecs = big checks and fat stacks", "to plow with his stick / until he was sick", "drip drop, slip slop, woop-de-scoop-de-meme'in / knick-knack paddy whack, lickety-split, hacks eat shit", "big dick monkey samba flatten bipedal bitches / [..] / Bonobo bimbo bitches blow benis", "Hillary's clit smells like sardines / flush her down the pipes / shit on the kikes / finish the show with combat wipes", "a man did scam a dyke; what sham! FUCK him!", '"copacetic cephalopod cunts" harkd Jim', "call me Ted Munky, the twisted Simian Serial Killer [..] Bombing the loo, like I'm Ted Kachimpsky", "Hey! Sergei: my name isphone please tell my mom", "unbearably loud I coomed on my couch / when I saw Jenna Haze, I was left in a daze / and died with my peener ablaze", "so I strangle my stiffy until it goes bendy / I'm dissappointing a wench named Wendy", "pop fat souls to increase your swole, hoebag", "a wreckening reckoning: bumhole banishment", "His name: Larry Snakes. His testicles bloom'd / Bloom'd they did, women swoon'd; love reborn and: / five-finger fist fucks, a tongue-punch'd fartbox", "seasoned with suffering, an inhuman McOffering", "there once was a cuck in a town", "I blew out the shitter / I don't know what hit her", "with whip in hand, he prepares for hate crime", "the untimely termination of fellatio gave the erstwhile guzzler leverage", "you're left cooming in your room in a jizz salto", "blow your rectal trumpets Gabriel", "to poke and prod with massive, pulsing rod", "eldritch effluviate engulfed England / Rich royal rightous racists repress'd Rembrandt / painting purple pompous painful ass", "'to check yourself before you wreck yourself is sound advice' hark'd Snakes and took a shit", "And met a lad nam'd Lee who was to be / a cocksman of the highest order", "Paul Bunyuns bunion for the rings of McOnion", "Angela Merkel nukes the Ukranians", "it rot, then smell'd, then he said: lets have fun / we'll have loads of fun with rape and pillage", "a kike he drew a knife to fight, and lurk", "the world is dark and black with death, it sucks / I hate these fucking cooming zoomer cucks", "'Laughing, Larry cut of his head, then said / You're dead, you fuck, I got the balls of gods' / while ye coomers were masturbating, I be decapitatin'", "My pleasure is my dick in a mouse trap", "'O, Ye Old God of Cod: Ye hath harness'd / The power of the ass' stated Larry", "finger much but hole? dat ass", "he took their wives, the chink, the horse the coon / He met zizek, he sniff'd a sea of coke", "Shaking his fist at the paleblood sky, he said: / 'with slugs, and his fav'rit weapon: pencils / from the depths of hell, I relieve at thee my guts", "follow the path of living[Larry] snakes", "all work and no play makes jack a mad breh"];

//PASSAGE AND POEM INVOKERS
let passageButton = document.getElementsByClassName("passageButton");

function getRandomIntInclusive() {
    return Math.floor(Math.random() * 42) + 1;
}

function getRandomIntInclusivePassages() {
    return Math.floor(Math.random() * passagesArray.length);
}

function invokePassage() {
    let i = getRandomIntInclusivePassages();
    document.getElementById("passageboxtext").innerHTML = passagesArray[i];
    document.getElementById("passageBox").style.display = "block";
    document.getElementById('hidePoem').style.display = "block";
    document.getElementById('rerollPassage').style.display = "block";
    document.getElementById('rerollButton').style.display = "none";
    if (document.getElementById("monkepic").style.display === "block") {
        document.getElementById("monkepic").style.display = "none";
    }
}

passageButton.onclick = invokePassage;

//MUSIC

let musicButtonJS = document.getElementById('musicButton')

let playMusic = function () {
    document.getElementById('musicTag').play();

    let ciaArray = ["Who can kill a general in his bed?", "Overthrow dictators if they're Red?", "Who can buy a government so cheap?", "Change a cabinet without a squeak?", "Who can train guerrillas by the dozens?", "Who can get a budget that's so great?", "Who has got the secret-est service?", "Who can take the sugar from a sack / Pour in LSD and put it back?"]
    let i = Math.floor(Math.random() * ciaArray.length);
    document.getElementById('musicButton').innerHTML = ciaArray[i];
}

musicButtonJS.onclick = playMusic;

// REAL MUSIC

let realMusicButtonJS = document.getElementById('realMusicButton')

let playRealMusic = function () {
    document.getElementById('realMusicTag').play();
}

realMusicButtonJS.onclick = playRealMusic;

//SHOW POEM

let invokeButton = document.getElementsByClassName("invokeButton");

let showPoem = function () {
    let randomNumber = getRandomIntInclusive()
    document.getElementById("shownPoem").src = `./mcdatabase/poem(${randomNumber}).jpg`
    document.getElementById("monkepic").style.display = "flex";
    document.getElementById('hidePoem').style.display = "block";
    document.getElementById('rerollButton').style.display = "block";
    document.getElementById('rerollPassage').style.display = "none";
    if (document.getElementById("passageBox").style.display === "block") {
        document.getElementById("passageBox").style.display = "none";
    }
}

invokeButton.onclick = showPoem;

//HIDE POEM

let hider = document.getElementById('hidePoem');

let hidePoem = function () {
    document.getElementById("monkepic").style.display = "none";
    document.getElementById("passageBox").style.display = "none";
    document.getElementById('hidePoem').style.display = "none";
    document.getElementById('rerollButton').style.display = "none";
    document.getElementById('rerollPassage').style.display = "none";
}

hider.onclick = hidePoem;


//MORE PASSAGES

let morePassages = document.getElementById("passageBox");

morePassages.onclick = invokePassage;

// ESCAPE KEY HIDE

document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "Escape") {
        hidePoem();
    }
    if (key === "Enter") {
        showPoem();
    }
    if (key === " ") {
        invokePassage();
    }
    if (key === "c") {
        playMusic();
        ciaMan();
    }
    if (key === "i") {
        playMusic();
        ciaMan();
    }
    if (key === "a") {
        playMusic();
        ciaMan();
    }
});

// CIA MAN

let ciaMan = function () {
    setTimeout(function () {
        hidePoem();
    }, 50);
    document.getElementById('shownPoem').src = "./ciaman.jpg";
    document.getElementById('monkepic').style.display = "block";
}