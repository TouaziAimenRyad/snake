function Fruit() {
    this.x;
    this.y;

    this.picklocation=function () {
        this.x=(Math.floor(Math.random()*rows-1)+1)*scale;
        this.y=(Math.floor(Math.random()*columns-1)+1)*scale;


    }
    this.draw=function () {
        ctx.fillStyle='#37d6ff';
        ctx.fillRect(this.x,this.y,scale,scale);
        
    }

}