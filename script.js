const menuItems = document.querySelectorAll(".menu-item");

const infoBox = document.getElementById("info-box");

const infoContent = document.getElementById("info-content");
const infoTitle = document.getElementById("info-title");
const closeBtn = document.getElementById("close-btn");

const pages = {

    about: `
I'm a 17y.o game developer (specifically, programmer, artist, and animator, 
POSSIBLY composer in the future), content creator and Dead By Daylight Competetive player.
`,

    discord: `
<a href="https://discord.gg/JZr8ukwP2Q" target="_blank">
Click here to join my discord server.
</a>
`,

    contact: `
Steam: wrightistheidiot
Discord: wrightistheidiot
Roblox: wrightisthesomething
`,

    dbd: `
I'm a killer main, but right now, I play about 60% of killer, and 40% of surv.
My favorite killers are Ghoul, Onryo, Deathslinger, Pih, and Blight.
My favorite survivors are Alan, Ace, Vee, Cheryl and Nancy.
`,

    me: `
I really enjoy the aesthetics of autumn / winter, silent hill, frutiger aero, dreamcore, Alice in Wonderland, etc.
I mostly listen to ambient music and prefer it when nothing is too loud, I'm not a big fan of loud sounds / bright lights, tbf. 
I love coffee and jazz, I love interacting with people and hearing them out / or just their opinions!
I'm always open to having conversations and I don't judge.
`

};  

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        const page = item.dataset.page;

        infoTitle.textContent = page.toUpperCase();

        infoContent.innerHTML = pages[page];

        infoBox.style.display = "block";

    });

});

const hoverSound = new Audio("hover.mp3");

menuItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        hoverSound.currentTime = 0;

        hoverSound.volume = 1;

        hoverSound.play();

    });

});

const clickSound = new Audio("click.mp3");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        clickSound.currentTime = 0;

        clickSound.play();

    });

});

const music = new Audio("menu.mp3");

music.loop = true;

music.volume = 0.4;

document.addEventListener("click", () => {

    music.play();

}, { once: true });

closeBtn.addEventListener("click", () => {

    infoBox.style.display = "none";

});

let dragging = false;

let offsetX;
let offsetY;


infoHeader = document.getElementById("info-header");


infoHeader.addEventListener("mousedown", (e) => {

    dragging = true;

    offsetX = e.clientX - infoBox.offsetLeft;
    offsetY = e.clientY - infoBox.offsetTop;

});


document.addEventListener("mousemove", (e) => {

    if (!dragging) return;

    infoBox.style.left = e.clientX - offsetX + "px";
    infoBox.style.top = e.clientY - offsetY + "px";

});


document.addEventListener("mouseup", () => {

    dragging = false;

});