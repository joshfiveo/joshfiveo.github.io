//INDEX TING
let currentlyShowing;





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

//button functions
function close(){
    document.getElementById('poemImgDiv').style.display = "none";
    while (document.getElementById('poemImgDiv').firstElementChild !== null) {
        document.getElementById('poemImgDiv').firstElementChild.remove();
    }
    while (document.body.lastElementChild.tagName === "BUTTON") {
        document.body.lastElementChild.remove();
    }

    currentlyShowing = "";

}

function rerollImg(){
    srcNr = randomIntPoems();
    document.getElementById('img').src = `./mcdatabase/poem(${srcNr}).jpg`;
    document.getElementById('poemNrTextTwo').innerHTML = `${srcNr}`;
}

function rerollP(){
    document.getElementById('poemImgDiv').firstElementChild.innerHTML = passagesArray[randomIntPassages()];
}

function rerollTextPoem(){
    document.getElementById('poemImgDiv').firstElementChild.innerHTML = textArray[randomTextInt()];
}

//Random integer
function randomIntPoems(){ //amount of poem documents
    return Math.floor(Math.random() * 42) + 1; //Need to change if more poems
}

function randomTextInt(){
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

        currentlyShowing = "imgPoem";
    }
}

let randomPoemButton = document.getElementById('randomPoem');

randomPoemButton.addEventListener('click', randomPoem);

//close and reroll

let hidePoem = function(event){
    if (event.target.innerHTML === "Close") {
        close();
    } else if (event.target.innerHTML === "reroll" && currentlyShowing === "imgPoem"){
        rerollImg();
    } else if (event.target.innerHTML === "reroll" && currentlyShowing === "passage"){
        rerollP();
    } else if (event.target.innerHTML === "reroll" && currentlyShowing === "textPoem"){
        rerollTextPoem();
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

        currentlyShowing = "passage";
    }
}

randomLineButton.addEventListener('click', randomLine);

//Keyboard commands

document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "Enter" && currentlyShowing === "passage") {
        rerollP();
    }
    if (key === "Enter" && currentlyShowing === "textPoem") {
        rerollTextPoem();
    }
    if (key === "Enter" && currentlyShowing === "imgPoem") {
        rerollImg();
    }
    if (key === "Escape") {
        close();
    }
});

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

        //REROLL BUTTON
        let reroll = document.createElement('button');
        reroll.innerHTML = "reroll";
        reroll.id = "reroll";

        document.body.appendChild(escape);
        document.body.appendChild(reroll);

        currentlyShowing = "textPoem";
}}

textPoemButton.addEventListener('click', textPoem);