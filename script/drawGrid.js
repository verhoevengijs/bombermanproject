const drawGrid = function (height, width) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    const wall = new Image();
    wall.addEventListener('load', function() {
        for (let x=0;x<=width;x+=50){
            for (let y=0;y<=height;y+=50) {
                ctx.drawImage(wall,x, y, 50, 50);
            }
        }
    });
    wall.src = '../images/tile_wall.png';

};
drawGrid(650,750);
