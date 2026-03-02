/* =====================================================
   PROYECTO CANVAS API
   Figura: Sol decorativo (VERSIÓN CENTRADA)
   Autor: Agustin
=====================================================*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* =====================
   CENTRO DEL SOL
=====================*/
const cx = canvas.width / 2;
const cy = canvas.height / 2;


/* =====================
   FONDO
=====================*/
ctx.fillStyle = "#f2f2f2";
ctx.fillRect(0, 0, canvas.width, canvas.height);


/* =====================
   SOL PRINCIPAL
=====================*/
ctx.beginPath();
ctx.arc(cx, cy, 120, 0, Math.PI * 2);
ctx.fillStyle = "gold";
ctx.fill();
ctx.stroke();


/* =====================
   RAYOS TRAPECIOS
=====================*/
function trapecio(x, y, rot) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);

    ctx.beginPath();
    ctx.moveTo(-10, 0);
    ctx.lineTo(60, 0);
    ctx.lineTo(40, 80);
    ctx.lineTo(-25, 40);
    ctx.closePath();

    ctx.fillStyle = "#f5b041";
    ctx.fill();
    ctx.stroke();

    ctx.restore();
}

for (let i = 0; i < 8; i++) {
    trapecio(
        cx + Math.cos(i * Math.PI / 4) * 180,
        cy + Math.sin(i * Math.PI / 4) * 180,
        i * Math.PI / 4
    );
}


/* =====================
   TRIANGULOS
=====================*/
function triangulo(x, y, rot) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);

    ctx.beginPath();
    ctx.moveTo(0, -20);
    ctx.lineTo(20, 20);
    ctx.lineTo(-20, 20);
    ctx.closePath();

    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.stroke();

    ctx.restore();
}

for (let i = 0; i < 8; i++) {
    triangulo(
        cx + Math.cos(i * Math.PI / 4 + Math.PI / 8) * 150,
        cy + Math.sin(i * Math.PI / 4 + Math.PI / 8) * 150,
        i * Math.PI / 4
    );
}


/* =====================
   OJOS
=====================*/
ctx.beginPath();
ctx.arc(cx - 40, cy - 20, 15, 0, Math.PI * 2);
ctx.fillStyle = "#2c2c54";
ctx.fill();

ctx.beginPath();
ctx.arc(cx + 40, cy - 20, 15, 0, Math.PI * 2);
ctx.fill();


/* =====================
   SONRISA
=====================*/
ctx.beginPath();
ctx.arc(cx, cy + 40, 45, 0, Math.PI);
ctx.lineWidth = 3;
ctx.stroke();


/* =====================
   ESTRELLAS (CENTRADAS)
=====================*/
function estrella(x, y, r) {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
        let ang = i * 2 * Math.PI / 5 - Math.PI / 2;
        ctx.lineTo(
            x + Math.cos(ang) * r,
            y + Math.sin(ang) * r
        );

        ang += Math.PI / 5;
        ctx.lineTo(
            x + Math.cos(ang) * (r / 2),
            y + Math.sin(ang) * (r / 2)
        );
    }
    ctx.closePath();
    ctx.stroke();
}

estrella(cx, cy - 60, 12);        // Superior
estrella(cx - 40, cy + 40, 12);   // Inferior izquierda
estrella(cx + 40, cy + 40, 12);   // Inferior derecha


/* =====================
   HEXAGONOS (ORDENADOS)
=====================*/
function hexagono(x, y, r) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        let ang = i * Math.PI / 3;
        ctx.lineTo(
            x + Math.cos(ang) * r,
            y + Math.sin(ang) * r
        );
    }
    ctx.closePath();
    ctx.fillStyle = "#f39c12";
    ctx.fill();
    ctx.stroke();
}

hexagono(cx - 30, cy - 10, 10);
hexagono(cx + 30, cy - 10, 10);
hexagono(cx, cy + 60, 10);


/* =====================
   CORAZON (CENTRADO)
=====================*/
ctx.beginPath();
ctx.moveTo(cx, cy + 70);

ctx.bezierCurveTo(cx, cy + 60, cx + 20, cy + 60, cx + 20, cy + 75);
ctx.bezierCurveTo(cx + 20, cy + 90, cx, cy + 100, cx, cy + 110);
ctx.bezierCurveTo(cx, cy + 100, cx - 20, cy + 90, cx - 20, cy + 75);
ctx.bezierCurveTo(cx - 20, cy + 60, cx, cy + 60, cx, cy + 70);

ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();