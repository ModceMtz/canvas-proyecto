/* ======================================================
   Archivo: main.js
   Autor: Agustin
   Descripción:
   Dibujo de automóvil deportivo utilizando
   la API Canvas 2D.
   Se emplean más de 30 figuras básicas.
====================================================== */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* =====================
   FONDO
=====================*/
ctx.fillStyle="#f5f5f5";
ctx.fillRect(0,0,500,350);


/* =====================
   CARROCERIA
=====================*/
ctx.beginPath();
ctx.moveTo(60,240);
ctx.lineTo(140,180);
ctx.lineTo(310,170);
ctx.lineTo(420,210);
ctx.lineTo(450,240);
ctx.lineTo(60,240);
ctx.closePath();

ctx.fillStyle="#27b3a7";
ctx.fill();
ctx.stroke();


/* =====================
   TECHO
=====================*/
ctx.beginPath();
ctx.moveTo(160,180);
ctx.lineTo(230,140);
ctx.lineTo(340,150);
ctx.lineTo(290,180);
ctx.closePath();

ctx.fillStyle="#3a8fd8";
ctx.fill();


/* =====================
   VENTANAS
=====================*/
ctx.fillStyle="#1e5c91";

ctx.beginPath();
ctx.moveTo(180,175);
ctx.lineTo(230,145);
ctx.lineTo(260,150);
ctx.lineTo(220,175);
ctx.fill();

ctx.beginPath();
ctx.moveTo(260,150);
ctx.lineTo(330,155);
ctx.lineTo(290,175);
ctx.lineTo(220,175);
ctx.fill();


/* =====================
   FRANJA AMARILLA
=====================*/
ctx.beginPath();
ctx.moveTo(90,240);
ctx.lineTo(150,190);
ctx.lineTo(190,190);
ctx.lineTo(130,240);
ctx.closePath();

ctx.fillStyle="yellow";
ctx.fill();


/* =====================
   DEFENSA
=====================*/
ctx.fillStyle="#1b2a41";
ctx.fillRect(60,225,90,15);


/* =====================
   FAROS
=====================*/
ctx.fillStyle="orange";
ctx.fillRect(120,205,25,10);
ctx.fillRect(150,200,20,8);


/* =====================
   PUERTA
=====================*/
ctx.strokeRect(210,195,90,45);


/* =====================
   ESPEJO
=====================*/
ctx.fillStyle="orange";
ctx.fillRect(255,185,15,10);


/* =====================
   LLANTA DELANTERA
=====================*/
ctx.beginPath();
ctx.arc(140,240,38,0,Math.PI*2);
ctx.fillStyle="red";
ctx.fill();

ctx.beginPath();
ctx.arc(140,240,15,0,Math.PI*2);
ctx.fillStyle="yellow";
ctx.fill();


/* =====================
   LLANTA TRASERA
=====================*/
ctx.beginPath();
ctx.arc(350,240,38,0,Math.PI*2);
ctx.fillStyle="red";
ctx.fill();

ctx.beginPath();
ctx.arc(350,240,15,0,Math.PI*2);
ctx.fillStyle="yellow";
ctx.fill();


/* =====================
   SPOILER
=====================*/
ctx.fillStyle="#7c5cff";
ctx.fillRect(400,200,45,10);


/* =====================
   DETALLES DECORATIVOS
=====================*/
for(let i=0;i<8;i++){
    ctx.beginPath();
    ctx.moveTo(250+i*5,205);
    ctx.lineTo(260+i*5,235);
    ctx.stroke();
}