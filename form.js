class Form{
constructor(){
    this.input = createInput("Name");
this.greeting = createElement('h2');
this.button = createButton("Start");
}
formHide(){
    this.button.hide();
    this.input.hide();
    this.greeting.hide();
}

display(){
    var title = createElement('h1');
    title.html("Car Racing Game");
    title.position(displayWidth/2-150,displayHeight/2-400);
    this.input.position(displayWidth/2-150,displayHeight/2-100);
    this.button.position(displayWidth/2-150,displayHeight/2-50);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
     
        player.name = this.input.value();
        playerCount = playerCount+1;
        player.index = playerCount;
        player.update();
        player.updateCount(player.index);
        this.greeting.html("Welcome "+player.name)
        this.greeting.position(displayWidth/2-150,displayHeight/2-200);

    })
}



}