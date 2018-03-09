const Grond = function (ctx, rowindex, colindex) {
    let img = new Image();
    img = document.getElementById('wood');
    ctx.drawImage(img, rowindex * 50, colindex * 50, 50, 50);
};