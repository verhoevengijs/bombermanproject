const canvas = document.getElementById('canvas');

const drawGrid = function (h,w) {
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = w;
    ctx.canvas.height = h;

    for (x=0;x<=w;x+=50) {
        for (y=0;y<=h;y+=50) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }
    }
};
drawGrid(650, 750);