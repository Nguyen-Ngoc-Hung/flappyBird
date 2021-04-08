var bird = function(game){
    this.game = game;
    var self=this;
    this.y=100;
    this.loaded1=false;
    this.loaded2=false;
    this.loaded3=false;
    this.image1=null;
    this.image2=null;
    this.image3=null;
    this.time=0;
    this.y=100;
    this.speedY=1;
    
    this.checkLoad1=function(){
        this.image1=new Image();
        this.image1.onload = function(){
            self.loaded1=true;
        }
        this.image1.src='images/chim1.png';
    }

    this.checkLoad2=function(){
        this.image2=new Image();
        this.image2.onload = function(){
            self.loaded2=true;
        }
        this.image2.src='images/chim2.png';
    }

    this.checkLoad3=function(){
        this.image3=new Image();
        this.image3.onload = function(){
            self.loaded3=true;
        }
        this.image3.src='images/chim3.png';
    }

    this.init=function(){
        this.checkLoad1();
        this.checkLoad2();
        this.checkLoad3();

    }

    this.loop=function(){

    }

    this.draw=function(){
        this.update();
        if(this.loaded3 == true && this.time<3){
            this.game.context.drawImage(this.image1,200,this.y); 
            ++this.time;
        }else if(this.loaded3 == true && this.time<6){
            this.game.context.drawImage(this.image2,200,this.y);++this.time;
        }else if(this.loaded3 == true && this.time<9){
            this.game.context.drawImage(this.image3,200,this.y);++this.time;
        }
        if(this.time>=9) this.time=0;
        if(this.y<455){
            this.y=this.speedY+this.y;
        this.speedY=this.speedY*0.1+this.speedY;
        }

    }
    
    this.update=function(){
        self.game.canvas.onclick=function(){
            console.log('click');
            self.y-=50;

            self.speedY=1;
        }
    }
}