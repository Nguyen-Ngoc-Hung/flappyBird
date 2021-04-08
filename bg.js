var bg = function(game){
    this.x=0
    this.game=game;
    this.loaded=false;
    this.image=null;
    var self = this;
    this.checkLoad = function (){
        this.image = new Image();
        this.image.onload=function(){
            self.loaded=true;
        }
        this.image.src='images/bg.png';
    }
    
    this.init=function(){
        this.checkLoad();
    }

    this.loop = function(){
    
        this.draw();
        setTimeout(self.loop(),30);
    }
    this.draw = function(){
        if(this.loaded == true){
        this.game.context.drawImage(this.image,this.x,0);
        this.game.context.drawImage(this.image,this.x+900,0);
        this.x--;
        if(this.x<-900) this.x=0;
        }
    }
}