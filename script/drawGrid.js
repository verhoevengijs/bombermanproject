// const canvas = document.getElementById('canvas');
//
// const drawGrid = function (h,w) {
//     const ctx = canvas.getContext('2d');
//     ctx.canvas.width = w;
//     ctx.canvas.height = h;
//
//     for (x=0;x<=w;x+=50) {
//         for (y=0;y<=h;y+=50) {
//             ctx.moveTo(x, 0);
//             ctx.lineTo(x, h);
//             ctx.stroke();
//             ctx.moveTo(0, y);
//             ctx.lineTo(w, y);
//             ctx.stroke();
//         }
//     }
// };
// drawGrid(650, 750);


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
