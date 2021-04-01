var database;
var game,gameState = 0,form,player,playerCount = 0;
var allPlayers;
var car1,car2,car3,car4;
var cars = [];
var Img1,Img2,Img3,Img4,track;

function preload(){
Img1 = loadImage("images/car1.png");
Img2 = loadImage("images/car2.png");
Img3 = loadImage("images/car3.png");
Img4 = loadImage("images/car4.png");
track = loadImage("images/track.jpg");
}

function setup(){
createCanvas(displayWidth,displayHeight);
database = firebase.database();
game = new Game()
game.getState();
game.start();

}

function draw(){
  background("white");
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
if(gameState === 2){
  game.end();
}







}