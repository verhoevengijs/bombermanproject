const drawGrid = function (height, width) {
    const canvas = document.getElementById('canvas');

    const ctx = canvas.getContext('2d');
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    for (let x=0;x<=width;x+=50){
        for (let y=0;y<=height;y+=50) {
            ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * y) + ', ' +
                Math.floor(255 - 42.5 * x) + ', 0)';
            ctx.fillRect(x, y, 50, 50);
        }
    }
};

drawGrid(650,750);
