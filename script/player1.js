const Player1 = function (health) {

        if (health !== 10){
            window.alert('Somehow you cheated ya nasty!')
        }
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const img = document.getElementById('birdie');
        ctx.drawImage(img, 50, 50);

    };
Player1(10);



// var c=document.getElementById("myCanvas");
// var ctx=c.getContext("2d");
// var img=document.getElementById("scream");
// ctx.drawImage(img,10,10);