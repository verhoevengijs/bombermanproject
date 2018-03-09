const Muur = function (ctx, rowindex, colindex) {
    let img = new Image();
    img = document.getElementById('wall');
    ctx.drawImage(img, rowindex * 50, colindex * 50, 50, 50);
};