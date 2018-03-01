'use strict';

const drawArena = function (height, width) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    const wall = new Image();
    const grid = [
        [{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'}],
        [{k:'muur'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'muur'}],
        [{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'}],
        [{k:'muur'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'muur'}],
        [{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'grond'},{k:'muur'}],
        [{k:'muur'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'muur'}],
        [{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'grond'},{k:'muur'}],
        [{k:'muur'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'muur'}],
        [{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'grond'},{k:'muur'}],
        [{k:'muur'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'muur'}],
        [{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'grond'},{k:'muur'}],
        [{k:'muur'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'muur'}],
        [{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'muur'},{k:'grond'},{k:'grond'},{k:'muur'}],
        [{k:'muur'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'grond'},{k:'muur'}],
        [{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'},{k:'muur'}],
    ];

    document.addEventListener('load', function() {
    grid.forEach(function (rows, rowindex) {
        rows.forEach(function (obj, colindex) {
            if (obj.k === 'muur') {
                new Muur(ctx, rowindex, colindex);
            }
            if (obj.k === 'grond') {
                new Grond(ctx, rowindex, colindex);
            }
        })
        });
    });
};
drawArena(650,750);
