const Bomb = function (x, y, strength) {
    this.position = {x: x, y: y};
    this.time = 3000;
    let img = new Image();
    img = document.getElementById('bomb');
    ctx.drawImage(img, this.position.x, this.position.y);

    this.drop = function (){
        if (this.time !== 0){
            this.time--;
        }else {
            
        }

    }
};