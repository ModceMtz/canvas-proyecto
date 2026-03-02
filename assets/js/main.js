/* =====================================================
   PROYECTO CANVAS API
   Figura: Sol decorativo
   Autor: Agustin
   Figuras utilizadas:
   - Circulos
   - Trapecios
   - Triangulos
   - Estrellas
   - Hexagonos
   - Arcos
=====================================================*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* =====================
   FONDO
=====================*/
ctx.fillStyle="#f2f2f2";
ctx.fillRect(0,0,600,600);


/* =====================
   SOL PRINCIPAL
=====================*/
ctx.beginPath();
ctx.arc(250,200,120,0,Math.PI*2);
ctx.fillStyle="gold";
ctx.fill();
ctx.stroke();


/* =====================
   RAYOS TRAPECIOS
=====================*/
function trapecio(x,y,rot){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(rot);

    ctx.beginPath();
    ctx.moveTo(-25,0);
    ctx.lineTo(60,0);
    ctx.lineTo(40,80);
    ctx.lineTo(-25,40);
    ctx.closePath();

    ctx.fillStyle="#f5b041";
    ctx.fill();
    ctx.stroke();

    ctx.restore();
}

for(let i=0;i<8;i++){
    trapecio(
        300 + Math.cos(i*Math.PI/4)*180,
        300 + Math.sin(i*Math.PI/4)*180,
        i*Math.PI/4
    );
}


/* =====================
   TRIANGULOS
=====================*/
function triangulo(x,y,rot){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(rot);

    ctx.beginPath();
    ctx.moveTo(0,-20);
    ctx.lineTo(20,20);
    ctx.lineTo(-20,20);
    ctx.closePath();

    ctx.fillStyle="orange";
    ctx.fill();
    ctx.stroke();

    ctx.restore();
}

for(let i=0;i<8;i++){
    triangulo(
        300 + Math.cos(i*Math.PI/4 + Math.PI/8)*150,
        300 + Math.sin(i*Math.PI/4 + Math.PI/8)*150,
        i*Math.PI/4
    );
}


/* =====================
   OJOS
=====================*/
ctx.beginPath();
ctx.arc(260,280,15,0,Math.PI*2);
ctx.fillStyle="#2c2c54";
ctx.fill();

ctx.beginPath();
ctx.arc(340,280,15,0,Math.PI*2);
ctx.fill();


/* =====================
   SONRISA (ARCO)
=====================*/
ctx.beginPath();
ctx.arc(300,320,45,0,Math.PI);
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.stroke();


/* =====================
   ESTRELLA
=====================*/
function estrella(cx,cy,r){
    ctx.beginPath();
    for(let i=0;i<5;i++){
        let ang=i*2*Math.PI/5-Math.PI/2;
        ctx.lineTo(
            cx+Math.cos(ang)*r,
            cy+Math.sin(ang)*r
        );
        ang+=Math.PI/5;
        ctx.lineTo(
            cx+Math.cos(ang)*(r/2),
            cy+Math.sin(ang)*(r/2)
        );
    }
    ctx.closePath();
    ctx.stroke();
}

estrella(240,330,12);
estrella(360,330,12);
estrella(270,240,10);
estrella(330,360,10);


/* =====================
   HEXAGONOS
=====================*/
function hexagono(x,y,r){
    ctx.beginPath();
    for(let i=0;i<6;i++){
        let ang=i*Math.PI/3;
        ctx.lineTo(
            x+Math.cos(ang)*r,
            y+Math.sin(ang)*r
        );
    }
    ctx.closePath();
    ctx.fillStyle="#f39c12";
    ctx.fill();
    ctx.stroke();
}

hexagono(350,250,10);
hexagono(260,360,10);
hexagono(330,230,10);
hexagono(280,350,10);


/* =====================
   CORAZON
=====================*/
ctx.beginPath();
ctx.moveTo(330,340);
ctx.bezierCurveTo(330,330,350,330,350,345);
ctx.bezierCurveTo(350,360,330,370,330,380);
ctx.bezierCurveTo(330,370,310,360,310,345);
ctx.bezierCurveTo(310,330,330,330,330,340);
ctx.fillStyle="orange";
ctx.fill();
ctx.stroke();