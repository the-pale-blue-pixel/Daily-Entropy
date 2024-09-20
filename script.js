

const lines = [
"䷀ - Heaven over Heaven  - ✧̊ Pͦo̸dḛṟ iṉₑₗcetable! ̫̊╘",
"䷁ - Earth over Earth  - Humble powėr ∅𝚝hrivęs underground.",
"䷂ - Water over Thunder  - ◙ Struggle bríngs grόwth̵. ▒",
"䷃ - Mountain over Water  - ◊ Igņorance ∆sḩēԁ by leaʀnin₲.",
"䷄ - Water over Heaven  - Ɫ ꜱtαy still͢ and t҉ɾµst thᶤnɢs тo c̛ome̸.",
"䷅ - Heaven over Water  - Conflict Ї𝚗~ᴜnintęɾrupted clαsh.",
"䷆ - Earth over Water  - Ҝn̶οw ʎour forces ҉aηd lead with ρǝace.",
"䷇ - Water over Earth  - ☯ A͞lign tӗams 𝘄𝘪𝘵ʜ 𝓿ίsion.",
"䷈ - Wind over Heaven  - Tiny efforţs=Massive ﷽giаnt shiƒts.",
"䷉ - Heaven over Lake  - Pȗʃḩ ahead, мind your step⃟.",
"䷊ - Earth over Heaven - ◊ Bάlançе a͠n͛d prosperity folʟows.",
"䷋ - Heaven over Earth  -  ֎ Disconneƈtion...p̡rɘparation for better tiмes.",
"䷌ - Heaven over Fire  - ͌Ͽ Win ҽqual ʙonds through coopəration.",
"䷍ - Fire over Heaven  -  Positiοn οf abund@ncє, share l𝒾berally.",
"䷎ - Earth over Mountain  - ✧ Unseen ℍumility ➛ truηking grόwth.",
"䷏ - Thunder over Earth  - ˺ Jοy o̷f plαns leads t𝑜 grэat act¡on!",
"䷐ - Lake over Thunder - ➼ Chøose joy aƞd let Ḓestiny ɗirèct you.",
"䷑ - Mountain over Wind  - ∩ Resτσre, remove cor̵ɾu͠pτions.",
"䷒ - Earth over Lake  - Anticipαtion of сhallѐnge≠giанce.",
"䷓ - Wind over Earth  - ͋͋ᴽ ᴠi𝚜ion in ob̵servation: r͢eveαl tӑłeητs.",
"䷔ - Fire over Thunder  - ᵕ Violence unʟeashed for justice!⚇ ˺",
"䷕ - Mountain over Fire  - Beauty ιn simple expԉression ∩",
"䷖ - Mountain over Earth  - █Decay breа҉ks ҽverythiηg aƿart.",
"䷗ - Earth over Thunder  - ֎ Every cyc͟le resτores: reb¡rth ahead.",
"䷘ - Heaven over Thunder  - ▓ Purιty≠protection. ᑌnexpectέd arrives.",
"䷙ - Mountain over Heaven  -  Coηtrσl ʍovɘment: power grows slow.",
"䷚ - Mountain over Thunder  - ‡ Carefúł nurturιng nourίshes the future.",
"䷛ - Lake over Wind  - Break under pressure, but thrive beyond ░",
"䷜ - Water over Water  - ••Endless ∆angers call for bravɛry.",
"䷝ - Fire over Fire  - Clarity briηgs poωer, bսrn brigнter ⚇□",
"䷞ - Lake over Mountain  - ░░ Mysterious attraction: follow your ɗesires.",
"䷟ - Thunder over Wind  - Stability found in staying the coυrse.",
"䷠ - Heaven over Mountain  - Withdrawal brίngs fʀeedoᶬ.",
"䷡ - Thunder over Heaven  - ‡ Massive potential, move wιth intent.",
"䷢ - Fire over Earth  - Rise forth, find success by be¡ng boℓd.",
"䷣ - Earth over Fire  - █ Power hidden ➛ succeed under shade.",
"䷤ - Wind over Fire  - Honor among family brings unity ⌂⌂",
"䷥ - Fire over Lake  - Differɛnces creαte energy, brace your path □",
"䷦ - Water over Mountain  - Slow advanϲement: overcome obstac͡les.",
"䷧ - Thunder over Water  - ✂✧ Cuto̡ff≠̛freedom! free yoursǝlf.",
"䷨ - Mountain over Lake  - Slow loss cΔn stilƖ bring grőwth.",
"䷩ - Wind over Thunder  - Powerful ґeturn, use ʏour gifts freely!",
"䷪ - Lake over Heaven  - □ Decision reckons Power un¡te resouгces!",
"䷫ - Heaven over Wind  - ℉ate s▓kewed, look for unexpȩcted connections.",
"䷬ - Earth over Lake  - Gathering ideas leads to great changes ☁",
"䷭ - Earth over Wind  - Rise and grow, ҉sustain progreşs!",
"䷮ - Lake over Water  - Struggle ▬ under hardship; push through.",
"䷯ - Water over Wind  - □ Source ∆ revέals iηsight deep within.▬",
"䷰ - Fire over Water  - ☁ Sweeping çhanɡe is inevitable and disruptiѳn.",
"䷱ - Wind over Fire  - ℃ollective ԋarmony: Share pσtential.",
"䷲ - Thunder over Thunder  - Thundεrous beginnings, expect sҺock.",
"䷳ - Mountain over Mountain  - ▐Be still! ▬ Movement blocks truth.",
"䷴ - Wind over Mountain  - ☾ Slow evolutioη brίngs stability.",
"䷵ - Thunder over Lake  - Union upsidêdοwn...balαnce reqυired ",
"䷶ - Fire over Thunder  - Peak poωer: enjoy the moment. ☼",
"䷷ - Fire over Mountain  - Travelerʂ' path: explοre with Һumility.",
"䷸ - Wind over Wind  - Winds of cнangε, adapt witҺ patience",
"䷹ - Lake over Lake  - Joy from interconnecti͢on, ⚋ expand ⚟.",
"䷺ - Wind over Water  - Disϲsipate feαr; all ♢is♢ unveiled.",
"䷻ - Water over Lake  - Restrιct¡on builds ❒ struϲturę ❒, set liṃits.",
"䷼ - Wind over Lake  - Truε fαith ҉builds ιnςorrυptιble ρεace.",
"䷽ - Thunder over Mountain  - Small detαiℓs matteг, humility=growth.",
"䷾ - Water over Fire  - ✧ End and begin again, harᴍony reborn.",
"䷿ - Fire over Water  - ☼ Pure POTENTIAL! Chaos=pοwer.",
];

let textDisplayed = false; 

function getRandomLine() {
    const randomIndex = Math.floor(Math.random() * lines.length);
    const selectedLine = lines[randomIndex];

    const parts = selectedLine.split(' - ');

    const resultText = parts[0] + "\n" + parts[1] + " -\n" + parts[2];

    document.getElementById('result').textContent = resultText;

    document.getElementById('showTextButton').style.display = 'none';

    textDisplayed = true;

    document.body.addEventListener('click', showHolaScreen);
}


document.getElementById('showTextButton').addEventListener('click', function () {
    if (!textDisplayed) {
        getRandomLine();
    }
});

let textDisplayed1 = false; 
let secondClickEnabled = false; 


function getRandomLine() {
    const randomIndex = Math.floor(Math.random() * lines.length);
    const selectedLine = lines[randomIndex];

    const parts = selectedLine.split(' - ');

    const resultText = parts[0] + "\n" + parts[1] + " -\n" + parts[2];

    document.getElementById('result').textContent = resultText;

    document.getElementById('showTextButton').style.display = 'none';

    textDisplayed1 = true;

 
    secondClickEnabled = true;
}


document.getElementById('showTextButton').addEventListener('click', function (event) {
    if (!textDisplayed1) {
        getRandomLine();
    }

    event.stopPropagation();
});

function generateRandomSquares() {
    const container = document.getElementById('animated-squares-container');
    const numSquares = 50; 

    container.innerHTML = '';

    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('animated-square');

        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        square.style.backgroundColor = randomColor;

        const randomDuration = (Math.random() * 3) + 2; 
        const randomDelay = Math.random() * 5; 
        square.style.animationDuration = randomDuration + 's';
        square.style.animationDelay = randomDelay + 's';

        square.style.left = Math.random() * window.innerWidth + 'px';
        square.style.top = Math.random() * window.innerHeight + 'px';

        container.appendChild(square);
    }
}

document.body.addEventListener('click', function () {
    if (secondClickEnabled) {
       
        document.getElementById('image').style.display = 'none';
        document.getElementById('result').style.display = 'none';
        document.getElementById('showTextButton').style.display = 'none';

        document.getElementById('second-screen').style.display = 'flex';

        generateRandomSquares(); 

        secondClickEnabled = false;
    }
});