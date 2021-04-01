class Player{
constructor(){
this.name = null;
this.distance = 0;
this.index = null;
}

updateCount(count){
    database.ref('/').update({playerCount:count});
}
getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){playerCount = data.val();})
}
update(){
    var playerIndex = "players/player"+this.index;
    database.ref(playerIndex).set({name:this.name,distance:this.distance})
}
static getPlayerInfo(){
    
    var playerInfo = database.ref('players');
    playerInfo.on("value",(data)=>{ allPlayers = data.val();});
}
}
