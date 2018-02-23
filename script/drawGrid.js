const drawArena = function (height, width) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    const wall = new Image();

    wall.addEventListener('load', function() {
        for (let xs=0;xs<=width;xs+=50){
            for (let ys=0;ys<=height;ys+=50) {
                ctx.strokeRect(xs,ys,50,50);    
                ctx.drawImage(wall, 0, ys, 50, 50);
                ctx.drawImage(wall, xs, 0, 50, 50);
                ctx.drawImage(wall, ys, 600, 50, 50);
                ctx.drawImage(wall, 700, xs, 50, 50);
            }
        }
        
    });
    wall.src = 'images/tile_wall.png';
};
drawArena(650,750);
