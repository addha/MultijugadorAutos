//previo
//RETO ALUMNO:https://github.com/byjusmx/Actividad-del-alumno-1-C41-V2
 // DISMINUIR  LA GAS GAME.JS
 //PLNTILLA PRO41:  MIS: https://github.com/byjusmx/Actividad-de-la-maestra-2-C41-V2
 //anexo index Alert!

//Final
 //Pro final 42  ruta original https://github.com/byjusmx/Actividad-de-la-maestra-2-C42-V2

var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
//Pro42 explocion  y end
var blastImage;



function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
  blastImage = loadImage("./assets/blast.png");//anexo imagen PRo42
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}
/*
///pro 42 anexo 
if (gameState === 2) {
  game.showLeaderboard();
  game.end();
  console.log("entro a qui game ove");
}
*/


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
