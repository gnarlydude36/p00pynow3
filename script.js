/* LOADING SCREEN 

                    */

const loadingMessages = [
    "Loading the Cantina™ Crispy Chicken Taco Luxe Box with extra Avacado Verde Salsa and a Mug™ Root Beer order from Taco Bell™...", 
    "Loading awesome-ish games...",
    "Fixing a LOT of bugs...",
    "Making Things actually work...",
    "Eaglercraft GOAT...",
    "Spawning demons...",
    "Want a break from the ads, not here...",
    "Visiting Your Mother...",
    "Making squares float...", 
    "Gnarly Dude and Kynd Dude Bro Yay...",
    "Loading Something idk...",
    "The movies aren't pirated, okay...",
    "WILLLLSSSOOOOOOOOOOOOONNNNNNNNN!!!",
    "Loading the pain I went through to make this website for you..."
];

const randomMessage =
    loadingMessages[Math.floor(Math.random() * loadingMessages.length)];

document.getElementById("loadingText").textContent =
    randomMessage;

const loadTime = Math.random() * 5000 + 6000;

// FIXED LOADING SCREEN
window.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {

        const loadingScreen = document.getElementById("loadingScreen");

        if (!loadingScreen) return;

        loadingScreen.style.opacity = "0";

        setTimeout(() => {
            loadingScreen.remove(); // stronger than display:none
        }, 800);

    }, loadTime);

});

const gameList = [
    {
        title: "Tetris",
        url: "https://djblue.github.io/tetris/",
        img: "https://www.datocms-assets.com/145957/1744284280-tetris-mobile.png?auto=format&fit=max&w=1200"
    },
    {
        title: "Level Devil",
        url: "https://html5.gamedistribution.com/3ffc5c0944f54f06afb212ca7d80bb00/?gd_sdk_referrer_url=https://leveldevil-game.io/level-devil#goog_fullscreen_ad",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3242750/header.jpg?t=1774446792"
    },
    {
        title: "Snake",
        url: "https://snake-game.io/",
        img: "https://static.boredpanda.com/blog/wp-content/uploads/2026/04/google-year-of-the-snake-game-how-to-master-the-retro-doodle-and-beat-your-high-score_wide-WideImage_16-9-69d66e6724e84.jpg"
    },
    {
        title: "Escape Road",
        url: "https://escaperoadx.github.io/escaperoad/index.html",
        img: "https://imgs.crazygames.com/escape-road-asm_16x9/20250724105031/escape-road-asm_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop"
    },
    {
        title: "Raft",
        url: "https://blooket.study/storage/Raft.html",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSFqcr2j13ttx6euqDNDh8PebcLlPlTiL1w&s"
    },
    {
        title: "Rail in The Air",
        url: "https://gamulo.com/wp-content/uploads/2025/game/Rail-in-the-Air.html",
        img: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/0ac52582b500eefc23b6df0e0d35cfe8/rail-in-the-air-logo.png"
    },
    {
        title: "Watermelon Merge",
        url: "https://bitlifeonline.github.io/watermelon-drop/",
        img: "https://suikagame.io/data/image/posts/suikagame-banner1.jpg"
    },
    {
        title: "Stickman Kombat 2D",
        url: "https://html5.gamedistribution.com/6d3928f393774157a7aed692f08ee011/?gd_sdk_referrer_url=https://geometry-games.io/stick-kombat-2d",
        img: "https://imgs.crazygames.com/stickman-kombat-2d_16x9/20250826034901/stickman-kombat-2d_16x9-cover?metadata=none&quality=60&height=5424"
    },
    {
        title: "Redcoats.io",
        url: "https://redcoats.io/app",
        img: "https://images.twoplayergames.org/files/games/other/redcoast-io.jpg?auto=format&w=200"
    },
    {
        title: "Ships 3D",
        url: "https://yp3d.com/ships3d/",
        img: "https://imgs.crazygames.com/games/ships-3d/cover_1x1-1732704910713.png?format=auto&quality=100&metadata=none&width=1200"
    },
    {
        title: "Mazean.com",
        url: "https://mazean.com/",
        img: "https://mazean.com/data/512x512.png"
    },
    {
        title: "Tribals.io Survival",
        url: "https://webecomewhatwebehold.online/tribalsio.embed",
        img: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/a70806db5d8812ac66118f99dc8e590c/tribals-io-logo.png"
    },
    {
        title: "BuildNow GG",
        url: "https://soulpeacemind.com/games/buildnow-gg-gpotty/",
        img: "https://scout.wgimager.com/f_webp/w_420/q_90/https://agaronline.io/data/image/game/buildnow-gg.png"
    },
    {
        title: "Striker Dummies",
        url: "https://23azostore.github.io/s3/striker-dummies/",
        img: "https://img.gamedistribution.com/5395ef221e064277b8d8d7a6ba0496c9-512x340.jpeg"
    },
    {
        title: "A Gun in Time",
        url: "https://ubg66ez.gitlab.io/a-gun-in-time/",
        img: "https://gamemedia.armorgames.com/17944/icn_heroimage.png"
    },
    {
        title: "2048",
        url: "https://zv1y2i8p.play.gamezop.com/g/NyM_JGWcx",
        img: "https://www.coolmathgames.com/sites/default/files/2048_OG-logo.jpg"
    },
    {
        title: "Pac-Man",
        url: "https://freepacman.org/",
        img: "https://i0.wp.com/gamingrespawn.com/wp-content/uploads/2021/04/Pac-Man.png?fit=960%2C720&ssl=1"
    },
    {
        title: "Smash Carts",
        url: "https://smashkarts.io",
        img: "https://imgs.crazygames.com/smash-karts_16x9/20260210123937/smash-karts_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop"
    },
    {
        title: "Flappy Bird",
        url: "https://flappybird.io/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNHw_JRhuDtsjBBoajXcgMjM1X6Q0S5crEA&s"
    },
    {
        title: "Crossy Road",
        url: "https://blooket.study/storage/Crossy%20Road.html",
        img: "https://static1.squarespace.com/static/5cedd5e7c6e7df0001bbb67c/t/675b681dbe3e687a57ff005c/1734043683478/CrossyRoad_Banner.png?format=1500w"
    },
    {
        title: "Five Nights at Epsteins",
        url: "https://blooket.study/storage/fivenightsatepsteins.html",
        img: "https://amongusfree.io/data/image/five-nights-at-epsteins.jpg"
    },
    {
        title: "Geometry Dash",
        url: "https://geometrylitepc.io/geo-dash-lite-pc.embed",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/322170/capsule_616x353.jpg?t=1775300400"
    },
    {
        title: "Eaglercraft",
        url: "https://geometrylitepc.io/minecraft.embed",
        img: "https://dashmetry.com/cache/data/image/game/eaglercraft/eaglercraft-m320x180.webp"
    },
    {
        title: "Drive Mad",
        url: "https://lnahtml.github.io/a77/drive-mad/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NS_4WY5JvUojX_6UYjGknVXP3hR91n4AdQ&s"
    },
    {
        title: "BitLife",
        url: "https://htmlxm.github.io/h/bitlife/",
        img: "https://goodgamestudios.com/wp-content/uploads/2022/11/BitLife-INT-1920.jpg"
    },
    {
        title: "Tag",
        url: "https://htmlxm.github.io/h3/tag/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnv5dEDOurGtf2ftRLZDASTNMHsTCh8eDhg&s"
    },
    {
        title: "Getaway Shootout",
        url: "https://23azostore.github.io/s4/getaway-shootout/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOVz0LRKVNo_3OO0672CJgY-7nJR9Jn3Zzw&s"
    },
    {
        title: "Gladihoppers",
        url: "https://gladihoppersgames.com/loader1.php?id=45550",
        img: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/c4158282ee354873ed29da8852457eb5/gladihoppers-logo.png"
    },
    {
        title: "Space Waves",
        url: "https://spacewavesgame.io/game/space-waves/",
        img: "https://i.ytimg.com/vi/0L885f9nUI8/maxresdefault.jpg"
    },
    {
        title: "8 Ball Pool",
        url: "https://sudoku-online.github.io/a8/8-ball-pool/",
        img: "https://imgs.crazygames.com/8-ball-pool-wyr_16x9/20251027031134/8-ball-pool-wyr_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop"
    },
    {
        title: "SuperHot",
        url: "https://math.canvas-lms.22web.org/stuff/selfhosted/super-hot/",
        img: "https://m.media-amazon.com/images/M/MV5BYzk1NjM5MjktN2YzMC00YzcyLWFjNTEtM2IzNDE3NmIxZGQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        title: "Subway Surfers",
        url: "https://geometrylitepc.io/subway-surfers.embed",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCxKnhHPqpBAVI38ilfSP97Z1b3F9dG2L2g&s"
    },
    {
        title: "Undead Invasion",
        url: "https://azgames.io/undead-invasion.embed",
        img: "https://spacewavesgame.io/data/image/game/undead-invasion.png"
    },
    {
        title: "2v2.io",
        url: "https://2v2.io/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj6zBM2zHQAm1n08LfeNg-wfQ9tlBGxjBKtw&s"
    },
    {
        title: "Golf Orbit",
        url: "https://7e0r297sgk0j0.h5games.usercontent.goog/v/1976bdao4gtf0/?origin=https%3A%2F%2Fgamesnacks.com&gameCenterId=gamesnacks&userActivityMetrics=true&eids=95322736%2C95336219&features=GameRendering__enforce_csp%2CGameRendering__support_offline_feature%2CInterstitialFreqCap__freq_cap_60s%2CMonetization__run_slotcar_ads_in_game_center#pc=592873959890527&preStart=1778894837170&enable-backend-update-score=true",
        img: "https://www.onlinegames.io/media/posts/953/Golf-Orbit-Play-Online.jpg"
    },
    {
        title: "Capybara Clicker",
        url: "https://capybaragame.io/capybara-clicker.embed/",
        img: "https://capybaragame.io/data/image/options/capybara-clicker.png"
    }
];

//search?

const searchBar =
    document.getElementById("searchBar");

const games =
    document.querySelectorAll(".game");

const featuredSection =
    document.getElementById("featuredSection");

function filterGames() {

    const text =
        searchBar.value.toLowerCase().trim();

    let showFeatured =
        text === "" &&
        currentCategory === "all";

    featuredSection.style.display =
        showFeatured
        ? "grid"
        : "none";

    hotRightNowTitle.style.display =
    showFeatured
    ? "block"
    : "none";

    games.forEach(game => {

        const title =
            game.querySelector("h3")
            .textContent
            .toLowerCase();

        const category =
            game.dataset.category;

        const searchMatch =
            title.includes(text);

        const categoryMatch =
            currentCategory === "all" ||
            category === currentCategory;

        game.style.display =
            searchMatch && categoryMatch
            ? "block"
            : "none";

    });

}

searchBar.addEventListener("keyup", filterGames);

const categoryButtons =
document.querySelectorAll(".category-btn");

let currentCategory = "all";

const gamesTitle =
    document.getElementById("gamesTitle");

categoryButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        categoryButtons.forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        currentCategory =
            btn.dataset.category;

        if (currentCategory === "all") {

            gamesTitle.textContent =
                "All Games";

        } else {

            gamesTitle.textContent =
                btn.textContent.trim() + " Games";

        }

        filterGames();

    });

});

// GAME LAUNCH

function launchGame(title, url) {renderMiniGames(title);

    document.getElementById("homeScreen")
        .style.display = "none";

    document.getElementById("playerScreen")
        .style.display = "block";

    document.getElementById("gameFrame")
        .src = url;

    document.getElementById("gameTitle")
        .textContent = title;

}

// RETURN HOME

function goHome() {

    document.getElementById("playerScreen")
        .style.display = "none";

    document.getElementById("homeScreen")
        .style.display = "block";

}

// FULLSCREEN

function fullscreenGame() {

    const iframe =
        document.getElementById("gameFrame");

    if (iframe.requestFullscreen) {

        iframe.requestFullscreen();

    }

}

// OPEN IN ABOUT:BLANK TAB

function openBlankCloak() {

    const iframe =
        document.getElementById("gameFrame");

    const currentURL = iframe.src;

    if (!currentURL) return;

    const win =
        window.open("about:blank", "_blank");

    if (!win) {
        alert("Popups are blocked.");
        return;
    }

    const html = `
    <!DOCTYPE html>
    <html>
    <head>

        <title>Google Drive</title>

        <link rel="icon"
        href="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png">

        <style>

            body {
                margin: 0;
                overflow: hidden;
                background: black;
            }

            iframe {
                width: 100vw;
                height: 100vh;
                border: none;
            }

        </style>

    </head>

    <body>

        <iframe
            src="${currentURL}"
            allowfullscreen>
        </iframe>

    </body>
    </html>
    `;

    win.document.write(html);

    win.document.close();

}

// SHOOTING STARS

const shootingStars =
    document.querySelectorAll(".shooting-star");

shootingStars.forEach((star) => {

    function launchStar() {

        star.style.animation = "none";
        star.style.opacity = "0";

        const randomX =
            Math.random() * window.innerWidth;

        const duration =
            3 + Math.random() * 4;

        const delay =
            Math.random() * 4000;

        const height =
            80 + Math.random() * 120;

        setTimeout(() => {

            star.style.left = `${randomX}px`;

            star.style.top = `-150px`;

            star.style.height = `${height}px`;

            void star.offsetWidth;

            star.style.animation =
                `meteorFall ${duration}s linear`;

        }, delay);

        setTimeout(
            launchStar,
            duration * 1000 + delay
        );

    }

    launchStar();

});

// METEOR ANIMATION

const style =
document.createElement("style");

style.innerHTML = `
@keyframes meteorFall {

    0% {
        transform: translate(0,0) rotate(-25deg);
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    100% {
        transform: translate(350px,120vh) rotate(-25deg);
        opacity: 0;
    }

}
`;

document.head.appendChild(style);

// CANVAS BACKGROUND

const canvas =
    document.getElementById("backgroundCanvas");

const ctx =
    canvas.getContext("2d");

let width =
    canvas.width = window.innerWidth;

let height =
    canvas.height = window.innerHeight;

const squares = [];

for (let i = 0; i < 50; i++) {

    squares.push({

        x: Math.random() * width,
        y: Math.random() * height,
        size: 10 + Math.random() * 20,
        speed: 0.5 + Math.random(),
        opacity: 0.2 + Math.random() * 0.5,
        angle: Math.random() * 6.28,
        rotationSpeed: (Math.random() - 0.5) * 0.05

    });

}

function animate() {

    ctx.clearRect(0,0,width,height);

    const gradient =
        ctx.createRadialGradient(
            width/2,
            height,
            50,
            width/2,
            height,
            width*0.8
        );

    gradient.addColorStop(0,"rgba(255,255,255,0.08)");
    gradient.addColorStop(1,"rgba(255,255,255,0)");

    ctx.fillStyle = gradient;

    ctx.fillRect(0,0,width,height);

    for (let sq of squares) {

        ctx.save();

        ctx.translate(
            sq.x + sq.size / 2,
            sq.y + sq.size / 2
        );

        ctx.rotate(sq.angle);

        ctx.globalAlpha = sq.opacity;

        ctx.fillStyle = "#fff";

        ctx.fillRect(
            -sq.size / 2,
            -sq.size / 2,
            sq.size,
            sq.size
        );

        ctx.restore();

        sq.y -= sq.speed;

        sq.angle += sq.rotationSpeed;

        sq.size *= 0.995;

        sq.opacity -= 0.002;

        if (
            sq.y + sq.size < 0 ||
            sq.opacity <= 0 ||
            sq.size < 2
        ) {

            sq.x = Math.random() * width;
            sq.y = height + 50;

            sq.size = 10 + Math.random() * 20;

            sq.speed = 0.5 + Math.random();

            sq.opacity =
                0.2 + Math.random() * 0.5;

            sq.angle =
                Math.random() * 6.28;

            sq.rotationSpeed =
                (Math.random() - 0.5) * 0.05;

        }

    }

    requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize", () => {

    width = canvas.width = window.innerWidth;

    height = canvas.height = window.innerHeight;

});
function renderMiniGames(currentTitle) {

    const container = document.getElementById("miniGames");

    let pool = gameList.filter(g => g.title !== currentTitle);

    pool = pool.sort(() => Math.random() - 0.5).slice(0, 3);

    container.innerHTML = "";

    pool.forEach(game => {

        const card = document.createElement("div");
        card.className = "mini-game-card";

        card.innerHTML = `
            <img src="${game.img}">
            <span>${game.title}</span>
        `;

        card.onclick = () => launchGame(game.title, game.url);

        container.appendChild(card);

    });
}
// FEATURED GAME ROTATOR

const featuredGames = [

    {
        title: "Striker Dummies",
        url: "https://23azostore.github.io/s3/striker-dummies/",
        img: "https://img.gamedistribution.com/5395ef221e064277b8d8d7a6ba0496c9-512x340.jpeg"
    },

    {
        title: "Escape Road",
        url: "https://escaperoadx.github.io/escaperoad/index.html",
        img: "https://imgs.crazygames.com/escape-road-asm_16x9/20250724105031/escape-road-asm_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop"
    },

    {
        title: "Geometry Dash",
        url: "https://geometrylitepc.io/geo-dash-lite-pc.embed",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/322170/capsule_616x353.jpg?t=1775300400"
    },

    {
        title: "BuildNow GG",
        url: "https://soulpeacemind.com/games/buildnow-gg-gpotty/",
        img: "https://scout.wgimager.com/f_webp/w_420/q_90/https://agaronline.io/data/image/game/buildnow-gg.png"
    }

];

let featuredIndex = 0;

function updateFeaturedGame() {

    const game = featuredGames[featuredIndex];

    document.getElementById("featuredImage").src =
        game.img;

    document.getElementById("featuredTitle").textContent =
        game.title;

}

function launchFeaturedGame() {

    const game = featuredGames[featuredIndex];

    launchGame(game.title, game.url);

}
const progressDots =
    document.querySelectorAll(".featured-progress span");

function updateFeaturedGame() {

    const game = featuredGames[featuredIndex];

    document.getElementById("featuredImage").src =
        game.img;

    document.getElementById("featuredTitle").textContent =
        game.title;

    progressDots.forEach(dot =>
        dot.classList.remove("active")
    );

    progressDots[featuredIndex]
        .classList.add("active");
}

setInterval(() => {

    featuredIndex++;

    if (featuredIndex >= featuredGames.length) {
        featuredIndex = 0;
    }

    updateFeaturedGame();

}, 4000);

updateFeaturedGame();


/******************************
 * INTERACTIVE LOADING STARS
 ******************************/

let loadingCanvas;
let loadingCtx;

let gap = 80;
let radiusVmin = 30;
let speedIn = 0.5;
let speedOut = 0.6;
let restScale = 0.09;
let minHoverScale = 1;
let maxHoverScale = 3;
let waveSpeed = 1200;
let waveWidth = 180;

let PALETTE = [
  { type: "solid", value: "#4f46e5" },
  { type: "solid", value: "#3b82f6" },
  { type: "solid", value: "#06b6d4" },
  { type: "solid", value: "#14b8a6" },
  { type: "solid", value: "#8b5cf6" },
  { type: "solid", value: "#7c3aed" },
  { type: "solid", value: "#6366f1" },
  { type: "solid", value: "#0ea5e9" },
  { type: "solid", value: "#2dd4bf" },
  { type: "solid", value: "#a78bfa" },

  { type: "gradient", stops: ["#4f46e5", "#06b6d4"] },
  { type: "gradient", stops: ["#8b5cf6", "#3b82f6"] },
  { type: "gradient", stops: ["#14b8a6", "#6366f1"] },
  { type: "gradient", stops: ["#7c3aed", "#0ea5e9"] }
];

let grid = null;
let pointer = null;
let activity = 0;
let waves = [];

function rnd(min, max) {
  return Math.random() * (max - min) + min;
}

function rndInt(min, max) {
  return Math.floor(rnd(min, max + 1));
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function smoothstep(t) {
  const c = Math.max(0, Math.min(1, t));
  return c * c * (3 - 2 * c);
}

function durationToFactor(seconds) {
  if (seconds <= 0) return 1;
  return 1 - Math.pow(0.05, 1 / (60 * seconds));
}

function drawStar(ctx, size, points, innerRatio) {

  ctx.beginPath();

  for (let i = 0; i < points * 2; i++) {

    const angle =
      (i * Math.PI) / points - Math.PI / 2;

    const r =
      i % 2 === 0
        ? size
        : size * innerRatio;

    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;

    i === 0
      ? ctx.moveTo(x, y)
      : ctx.lineTo(x, y);

  }

  ctx.closePath();
  ctx.fill();

}

function resolveFill(ctx, colorDef, size) {

  if (colorDef.type === "solid") {
    return colorDef.value;
  }

  const grad =
    ctx.createRadialGradient(
      0,
      -size * 0.3,
      0,
      0,
      size * 0.3,
      size * 1.5
    );

  grad.addColorStop(0, colorDef.stops[0]);
  grad.addColorStop(1, colorDef.stops[1]);

  return grad;

}

function randomStarProps() {

  return {
    points: rndInt(4, 10),
    innerRatio: rnd(0.15, 0.5)
  };

}

function initLoadingCanvas() {

  loadingCanvas =
    document.getElementById("loadingCanvas");

  if (!loadingCanvas) return;

  loadingCtx =
    loadingCanvas.getContext("2d");

  const dpr =
    window.devicePixelRatio || 1;

  const W = window.innerWidth;
  const H = window.innerHeight;

  loadingCanvas.width = W * dpr;
  loadingCanvas.height = H * dpr;

  loadingCanvas.style.width = W + "px";
  loadingCanvas.style.height = H + "px";

  loadingCtx.setTransform(1,0,0,1,0,0);
  loadingCtx.scale(dpr, dpr);

  buildGrid(W, H);

}

function buildGrid(W, H) {

  const cols = Math.floor(W / gap);
  const rows = Math.floor(H / gap);

  const offsetX =
    (W - (cols - 1) * gap) / 2;

  const offsetY =
    (H - (rows - 1) * gap) / 2;

  const shapes = [];

  for (let row = 0; row < rows; row++) {

    for (let col = 0; col < cols; col++) {

      const props =
        randomStarProps();

      shapes.push({

        x: offsetX + col * gap,
        y: offsetY + row * gap,

        size: gap * 0.38,

        scale: restScale,

        maxScale:
          rnd(minHoverScale, maxHoverScale),

        angle:
          rnd(0, Math.PI * 2),

        color: pick(PALETTE),

        hovered: false,

        ...props

      });

    }

  }

  grid = { shapes, W, H };

}

function triggerWave(x, y) {

  waves.push({
    x,
    y,
    startTime: performance.now()
  });

}

function tickLoading() {

  if (!grid) return;

  const { shapes, W, H } = grid;

  const radius =
    Math.min(W, H) * (radiusVmin / 100);

  const now = performance.now();

  loadingCtx.clearRect(0,0,W,H);

  loadingCtx.fillStyle = "#080808";
  loadingCtx.fillRect(0,0,W,H);

  activity *= 0.93;

  waves = waves.filter(w => {

    return (
      ((now - w.startTime) / 1000)
      * waveSpeed
    ) < Math.sqrt(W*W + H*H);

  });

  for (const s of shapes) {

    let pointerInfluence = 0;

    if (pointer && activity > 0.001) {

      const dx = s.x - pointer.x;
      const dy = s.y - pointer.y;

      const dist =
        Math.sqrt(dx*dx + dy*dy);

      pointerInfluence =
        smoothstep(1 - dist / radius)
        * activity;

    }

    let waveInfluence = 0;

    for (const wave of waves) {

      const waveRadius =
        ((now - wave.startTime) / 1000)
        * waveSpeed;

      const dx = s.x - wave.x;
      const dy = s.y - wave.y;

      const dist =
        Math.sqrt(dx*dx + dy*dy);

      const t =
        1 -
        Math.abs(dist - waveRadius)
        / waveWidth;

      if (t > 0) {

        waveInfluence =
          Math.max(
            waveInfluence,
            Math.sin(Math.PI * t)
          );

      }

    }

    const target =
      Math.max(
        restScale
        + pointerInfluence
        * (s.maxScale - restScale),

        restScale
        + waveInfluence
        * (s.maxScale - restScale)
      );

    const factor =
      target > s.scale
        ? durationToFactor(speedIn)
        : durationToFactor(speedOut);

    s.scale +=
      (target - s.scale) * factor;

    loadingCtx.save();

    loadingCtx.translate(s.x, s.y);

    loadingCtx.rotate(s.angle);

    loadingCtx.scale(s.scale, s.scale);

    loadingCtx.fillStyle =
      resolveFill(
        loadingCtx,
        s.color,
        s.size
      );

    drawStar(
      loadingCtx,
      s.size,
      s.points,
      s.innerRatio
    );

    loadingCtx.restore();

  }

  requestAnimationFrame(tickLoading);

}

function onMove(e) {

  pointer = {
    x: e.clientX,
    y: e.clientY
  };

  activity = 1;

}

function onClick(e) {

  triggerWave(
    e.clientX,
    e.clientY
  );

}

window.addEventListener("DOMContentLoaded", () => {

  initLoadingCanvas();

  tickLoading();

  triggerWave(
    window.innerWidth / 2,
    window.innerHeight / 2
  );

});

window.addEventListener("resize", initLoadingCanvas);

window.addEventListener("pointermove", onMove);

window.addEventListener("click", onClick);

const DEFAULT_LOGO =
    "https://i.imgur.com/aPaGxmn.png";

const MOVIES_LOGO =
    "https://i.imgur.com/BI3nSUb.png";

const CHAT_LOGO =
    "https://i.imgur.com/3MHEzIQ.png";

function showGames() {

    document.getElementById("siteLogo").src =
        DEFAULT_LOGO;

    document.getElementById("moviesPage")
        .style.display = "none";

    document.getElementById("gamesPage")
        .style.display = "block";

}

function showMovies() {

    document.getElementById("siteLogo").src =
        MOVIES_LOGO;

    document.getElementById("gamesPage")
        .style.display = "none";

    document.getElementById("moviesPage")
        .style.display = "block";

}

function showChat() {

     document.getElementById("siteLogo").src =
        CHAT_LOGO;

    console.log("Chat page");
}

function launchMovie(title, url) {

    document.getElementById("mainHeader").style.display = "none";

    document.getElementById("moviesPage").style.display = "none";

    document.getElementById("moviePlayerScreen").style.display = "block";

    document.getElementById("movieTitle").textContent = title;
    document.getElementById("movieFrame").src = url;
}

function closeMovie() {

    document.getElementById("moviePlayerScreen").style.display = "none";

    document.getElementById("mainHeader").style.display = "flex";
    // use "block" instead if your header isn't flex

    document.getElementById("moviesPage").style.display = "block";

    document.getElementById("movieFrame").src = "";
}

function fullscreenMovie() {

    const iframe =
        document.getElementById("movieFrame");

    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    }

}

function openMovieBlank() {

    const iframe =
        document.getElementById("movieFrame");

    const currentURL =
        iframe.src;

    if (!currentURL) return;

    const win =
        window.open(
            "about:blank",
            "_blank"
        );

    win.document.write(`
    <!DOCTYPE html>
    <html>
    <body style="
        margin:0;
        overflow:hidden;
        background:black;
    ">
        <iframe
            src="${currentURL}"
            style="
                width:100vw;
                height:100vh;
                border:none;
            "
            allowfullscreen>
        </iframe>
    </body>
    </html>
    `);

    win.document.close();

}
