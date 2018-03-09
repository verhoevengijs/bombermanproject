const Grass = function (ctx, rowindex, colindex) {
    let img = new Image();
    img = document.getElementById('grass');
    ctx.drawImage(img, rowindex * 50, colindex * 50, 50, 50);
};