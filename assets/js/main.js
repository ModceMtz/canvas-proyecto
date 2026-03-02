
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//CENTRO DEL SOL
const cx = canvas.width / 2;
const cy = canvas.height / 2;


//FONDO
ctx.fillStyle="#16cbce";
ctx.fillRect(0,0,600,600);


//SOL PRINCIPAL
ctx.beginPath();
ctx.arc(cx,cy,120,0,Math.PI*2);
ctx.fillStyle="gold";
ctx.fill();
ctx.stroke();


//RAYOS TRAPECIOS
function trapecio(x,y,rot){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(rot);

    ctx.beginPath();
    ctx.moveTo(-10,0);
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
        cx + Math.cos(i*Math.PI/4)*180,
        cy + Math.sin(i*Math.PI/4)*180,
        i*Math.PI/4
    );
}


//TRIANGULOS
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
        cx + Math.cos(i*Math.PI/4 + Math.PI/8)*150,
        cy + Math.sin(i*Math.PI/4 + Math.PI/8)*150,
        i*Math.PI/4
    );
}


//OJOS
ctx.beginPath();
ctx.arc(cx-40,cy-20,15,0,Math.PI*2);
ctx.fillStyle="#2c2c54";
ctx.fill();

ctx.beginPath();
ctx.arc(cx+40,cy-20,15,0,Math.PI*2);
ctx.fill();


//SONRISA
ctx.beginPath();
ctx.arc(cx,cy+25,35,0,Math.PI);
ctx.lineWidth=3;
ctx.stroke();


//ESTRELLAS
function estrella(x,y,r){
    ctx.beginPath();
    for(let i=0;i<5;i++){
        let ang=i*2*Math.PI/5-Math.PI/2;
        ctx.lineTo(x+Math.cos(ang)*r,
                   y+Math.sin(ang)*r);

        ang+=Math.PI/5;
        ctx.lineTo(x+Math.cos(ang)*(r/2),
                   y+Math.sin(ang)*(r/2));
    }
    ctx.closePath();
    ctx.stroke();
}

// 4 estrellas distribuidas
estrella(cx - 35, cy - 70, 10);
estrella(cx - 80, cy + 20, 12);
estrella(cx + 80, cy + 40, 12);
estrella(cx + 40, cy + 90, 9);


//HEXAGONOS
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

// 5 hexágonos mejor distribuidos
hexagono(cx + 45, cy - 75, 10);
hexagono(cx + 75, cy - 45, 9);
hexagono(cx - 55, cy + 40, 10);
hexagono(cx - 55, cy + 65, 10);
hexagono(cx - 30, cy + 90, 9);


//LUNA
ctx.beginPath();
ctx.arc(cx + 5, cy + 75, 12, 0, Math.PI * 2);
ctx.fillStyle = "orange";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.arc(cx + 10, cy + 72, 12, 0, Math.PI * 2);
ctx.fillStyle = "gold";
ctx.fill();


// CORAZON
ctx.beginPath();
ctx.moveTo(cx + 45, cy + 45);

ctx.bezierCurveTo(cx + 45, cy + 25, cx + 60, cy + 35, cx + 60, cy + 50);
ctx.bezierCurveTo(cx + 60, cy + 55, cx + 45, cy + 75, cx + 45, cy + 85);
ctx.bezierCurveTo(cx + 45, cy + 75, cx + 30, cy + 65, cx + 30, cy + 50);
ctx.bezierCurveTo(cx + 30, cy + 25, cx + 45, cy + 35, cx + 45, cy + 45);

ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();