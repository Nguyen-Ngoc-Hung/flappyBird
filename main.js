var game = function(){
    this.height = 600;
    this.width = 900;
    this.bg=null;
    this.base=null;
    this.bird=null;
    var self = this;

    this.init = function(){
        this.canvas = document.getElementById('game-zone');
        this.context = this.canvas.getContext('2d');
        this.canvas.width=this.width;
        this.canvas.height=this.height;
        this.bg=new bg(this);
        this.bg.init();
        this.base=new base(this);
        this.base.init();
        this.bird = new bird(this);
        this.bird.init();
        this.loop();

    }

    this.loop = function(){
        self.draw();
        setTimeout(self.loop,30);
    }

    this.draw = function(){
        this.bg.draw();
        this.base.draw();
        this.bird.draw();
    }

}


var g = new game();
g.init();