// DATABASE STUFF
//preloading
function preloadImages(url){
    let img = new Image();
    img.src = url;
}

for (i=1;i<43;i++){
    preloadImages(`./mcdatabase/poem(${i}).jpg`)
}

//
let srcNr;



// ARRAY OG POEM OBJEKTER

let textArray = ["zeroDoesntExist",
    "There was a man who was curly <br> with effort he also burly <br> he fought back against coomers <br> no patience with boomers <br> of spirits he was a consoomer <br> <br> m'bosso he was a grand lad <br> he could fuck up a big ass Brad <br> with a big ass meat stick <br> dick is soup-can thicc <br> he could spitroast even great chud <br> <br> asses to asses, dusk to dusk (?) <br> a dick like an elephant tusk <br> to spitroast a bitch <br> to scratch a great itch <br> he fuck like the great Elon Musk",
    "Ode to Strr: a dagger or rapier perhaps? <br> Hark! No! that would make us dex-fags! <br> i have one rule Brr <br> i spend all souls on Strr <br> big pecs = big check and fat stacks",
    "i ain't never seen no swine like them there pigs <br> ain't swindling no kindling, throwing pearls for pigs <br> louisana pedo don't need door <br> he smash the walls, and breaks you like a twig <br> proud mullet wearin redneck, but aint no hick <br> sees doors of perception, minds drifts ashore <br> consooms copious kegs, coors light galore <br> a southern Zarathustra, moonshine he swigs <br> black cop be like, 'missing persons, lol, sike!' <br> he dont believe, so aint no reprieve, for steve <br> he gon' be dead, made into cornbread <br> pedos and swamp things I with my knife strike <br> it's raining chainsaws in the Quoral Quee <br> the quota of beer <br> oh what a relief <br> we'll reach it <br> just grind up the dead",
    "his visage beastly was a snarlin' <br> he found himself a cute darlin' <br> to plow with his stick <br> until he was sick <br> with his dick he was himself harmin' <br> <br> there once was a dog from the sea <br> a dank man, everybody can see <br> he completed uncharted <br> 'tis so retarded <br> but based and redpill'd stay'd he <br> <br> there once was an african dog <br> who fearlessly braved the boss-fog <br> he challeng'd the boss <br> without purple moss <br> and never gave the singlest of fuck",
    "covertly concealed his constipation <br> coagulated crap in colon creepeth <br> and loosened so soon the septic sewage seepeth <br> septuangenarian stool soon sloshed the nation <br> nary a nook or neck of wood withstood contamination <br> as Allans anal abomination did deepenth <br> so did sleazy sickos sickly sleuzen <br> and showered the shower of shit in sick adulation <br> ravenously did they revel in his rectal refuge <br> posthaste these perverse peckerwoods politizises <br> looking to legitimize: leave lort an elected official <br> orificial offering ornate in haute cauture <br> mayhaps this hubris might materialize <br> and soon much sicker shit was shat from the [redacted] <br> the humbled heretics hark'd and drowned in divine manure",
    "did the axe done good? yes it done did <br> doth the hack scum Schemeth? some say Schemem. <br> you cucks you coom with whitegray semen <br> you'll end in deepest hell, the darkest pit <br> where devils will on your cock lava spit <br> where cucks hath made sure you get no seamen <br> drip drop, slip slop, woop-de-scoop-de-meme'in <br> knick knack paddy whack, lickety-split, hacks eat shit <br> new-york city gritty comity, pity the fool that <br> get pants shat by madlad, some say ladm <br> textin' and drivin' down mulholland drive <br> thats why I take the 405, sick hat <br> fuckboy cucks, I take a bat and bat 'em <br> Ice cold, bad cats, when I rap, it's jig'n jive",
    "fuck the coom-freaks, coomin' straight outta underground <br> the monk-e with more dope than Eazy-E <br> blink and you'll miss it, big-biz gorilla biscuit, see? <br> bonobo in a suit, pro bono, the count <br> cook the books on the coconut-amount, white-wash bananas by the pound <br> humility must be in lost and not found, you see, G? <br> the fate of man eventually, will be determined by the flows of chimpanze causality <br> hitman harambe racking up a headcount <br> big dick monkey samba flatten bipedal bitches <br> clap cheeks, stack checks, rhymes dirtier than herpes but harder to catch <br> bonobo bimbo bitches blow benis <br> we got the damn monkey-gene, you're a hack, man. Gene [redacted] here snitches <br> imprison the humans, and never open the latch <br> primate power-cleaners, chimpanzee-curl-machines <br> howler-monkeys hack homo sapiens-peeners",
    "imma be honest, im kinda retarded <br> went to take a shit but only farted, yet i rock on <br> a stiffy appears, and I summon the porn <br> a rock hard hard-on, my coom-stick larded <br> intergalactic vampires departed <br> from outer space, the moon call'd Orion <br> fake school shootings, get my thought on <br> gay frogs, you lame fucks, just getting started <br> built like gorilla, mind like a chimp <br> affinities in tactical hygiene <br> the destroyer of thug-scum with mad swipes <br> I deep dick statists and wealthfare simps <br> obamas from nigeria, hillarys clit smells like sardines <br> flush her down pipes <br> shit on the kikes <br> finish the show with combat wipes",
    "from the french-frie-fryer, rose an itchyoid figure <br> drenched in trans-fat sweat, it left an itchy trail <br> cheddar-tentacled, clutching paper cup grail <br> sodastream ichor filled with bitch vigor <br> as the orchard of the obese overlord grows bigger <br> grilled cheese comes across the sky, nuggets fall like hail <br> in bondage humanity quivers, from his chickenfried flail <br> man's back is striped like beefs on a grill, sicker <br> more putrid by the hour, the gut of man grows thiccer <br> with every happy meal comes a forced smile <br> force fed Franks, the mouth of a man of ghastly grimace <br> Ghoulishly the god of gouda, finger on the trigger <br> hits a K-O with the mayo, better lay low while <br> row row with the fat fuck B.O. <br> the greasy fingers of providence mold mans soul like play-doh",
    "Shall I compare thee to a summers wine? <br> dost not that tentacled thing thine loins moisten <br> figen shot is a vile and toxic poison <br> your rhyme's the opposite of very fine <br> oh, these incomparable invertebrates <br> A man did scam a dyke; what sham! Fuck him! <br> you write such lines, the puke will not subside <br> upon my brain Rupi Kaur grates <br> 'copacetic cephalopod cunts' hark'd Jim <br> I love milk and honey, I have no pride",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "20",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "30",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "40",
    "",
    "42"
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
    document.getElementById('imgDatabase').src = `./mcdatabase/poem(${srcNr}).jpg`;
    document.getElementById('poemText').innerHTML = textArray[srcNr];

    //Head
    let headTitle = document.querySelector('title');
    headTitle.innerHTML = `Poem ${srcNr}`;
}

function prev(){
    //new src
    srcNr--;
    document.getElementById('imgDatabase').src = `./mcdatabase/poem(${srcNr}).jpg`;
    document.getElementById('poemText').innerHTML = textArray[srcNr];

    //Head
    let headTitle = document.querySelector('title');
    headTitle.innerHTML = `Poem ${srcNr}`;
}

function close(){
    document.getElementById('poemImgDiv').style.display = "none";
    while (document.getElementById('poemImgDiv').firstElementChild !== null) {
        document.getElementById('poemImgDiv').firstElementChild.remove();
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
    img.id = "imgDatabase";

    // making text and setting src
    let text = document.createElement('p');
    text.innerHTML = textArray[srcNr];
    text.id = "poemText";

    //Head
    let headTitle = document.querySelector('title');
    headTitle.innerHTML = event.target.innerHTML;

    img.src = `./mcdatabase/poem(${srcNr}).jpg`;

    //appending img to div and making div visible
    document.getElementById('poemImgDiv').appendChild(text);
    document.getElementById('poemImgDiv').appendChild(img);

    document.getElementById('poemImgDiv').style.display = "block";
}

window.addEventListener('load', function (){
    for (i = 0; i < poemButtons.length; i++){
        poemButtons[i].addEventListener('click', showPoem);
    }
});


// HIDER and next and prev
let poemImgDiv = document.getElementById('poemImgDiv');

let hidePoem = function(event){
    if ((window.innerWidth / 2) < event.clientX && srcNr !== 42){
        next();
    } else if ((window.innerWidth / 2) > event.clientX && srcNr !== 1){
        prev();
    }
}

poemImgDiv.addEventListener('click', hidePoem);
poemImgDiv.addEventListener('dblclick', close);
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
