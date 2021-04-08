var base = function(game){
    this.game=game;
    this.x=0;
    this.loaded=false;
    this.image=null;
    var self = this;
    this.checkLoad = function (){
        this.image = new Image();
        this.image.onload=function(){
            self.loaded=true;
        }
        this.image.src='images/base.png';
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
        this.game.context.drawImage(self.image,this.x,500);
        this.game.context.drawImage(self.image,this.x+900,500);
        this.x-=3;
        if(this.x<-900)this.x=0;
        }
    }
}