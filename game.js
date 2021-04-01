class Game{

constructor(){



}
getState(){
   var  gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){gameState = data.val();});
}

update(state){
    database.ref('/').set({gameState:state});
}

start(){
    if(gameState===0){
        form = new Form();
        form.display();
        player = new Player();
        player.getCount();
        car1 = createSprite(400,800,50,50);
        car1.addImage(Img1);
        car2 = createSprite(600,800,50,50);
        car2.addImage(Img2);
        car3 = createSprite(800,800,50,50);
        car3.addImage(Img3);
        car4 = createSprite(1000,800,50,50);
        car4.addImage(Img4);
        cars = [car1,car2,car3,car4];
    }
}
play(){
    background("brown");
    image(track,0,-4*displayHeight,displayWidth,displayHeight*5);
    form.formHide();
console.log(player.distance);
    text("Game Start",200,50);
    Player.getPlayerInfo();
    var y_position = 100;
    var x =200;
    var y;
    //I not understand this for condition 
    var iteration = 0;
    for(var i in allPlayers){
        x+=200;
        y = displayHeight-allPlayers[i].distance;
        iteration +=1;
        cars[iteration-1].x = x;
        cars[iteration-1].y = y;
        
        if(iteration === player.index){
            cars[iteration-1].shapeColor = "red";
camera.position.x = displayWidth/2;
camera.position.y = cars[iteration-1].y;
        }
        else {
            cars[iteration-1].shapeColor = "black";
        }
       
  
        
    }
    if(player.distance>4350){
        this.update(2);
    }
    
    drawSprites();
if(keyDown(UP_ARROW)){
    player.distance+=50;
    player.update();
}
}
end(){
    console.log("Game Ended");
}
}