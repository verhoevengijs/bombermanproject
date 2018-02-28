function Muur(ctx, rowindex, colindex) {
    let img = new Image();
    img.src = '../images/tile_wall.png';
    // ctx.drawImage(img,50,50);
    ctx.fillRect(rowindex * 50, colindex * 50, 50, 50)
}