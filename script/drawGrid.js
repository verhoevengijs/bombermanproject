const drawArena = function (height, width) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    const wall = new Image();

    wall.addEventListener('load', function() {
        const grid = [
            [{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'}],
            [{k:'muur'},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:'muur'}],
            [{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:'muur'}],
            [{k:'muur'},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:'muur'}],
            [{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:''},{k:'muur'}],
            [{k:'muur'},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:'muur'}],
            [{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:''},{k:'muur'}],
            [{k:'muur'},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:'muur'}],
            [{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:''},{k:'muur'}],
            [{k:'muur'},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:'muur'}],
            [{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:''},{k:'muur'}],
            [{k:'muur'},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:'muur'}],
            [{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:'muur'},{k:''},{k:''},{k:'muur'}],
            [{k:'muur'},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:''},{k:'muur'}],
            [{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'}],
        ];

        grid.forEach(function (rows, rowindex) {
            rows.forEach(function (obj, colindex) {
                if (obj.k === 'muur') {
                    new Muur(ctx, rowindex, colindex);
                }
                ctx.strokeRect(rowindex * 50, colindex * 50, 50 ,50);
                console.log(rowindex + ' - ' + colindex)
            })
        });
    });
    wall.src = 'images/tile_wall.png';
};
drawArena(650,750);
