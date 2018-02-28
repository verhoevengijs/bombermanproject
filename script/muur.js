const Muur = function (ctx, rowindex, colindex) {
    let img = new Image();
    img.src = 'images/tile_wall.png';
        ctx.drawImage(img, rowindex * 50, colindex * 50, 50, 50);
};