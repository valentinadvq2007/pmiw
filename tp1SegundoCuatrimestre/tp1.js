//Valentina del Valle Quintana
//comision: 2
//legajo: 126977/7


let sprite = [];
let animar;
let imagenFondo;
let xFondo = 0;
let imagenTitulo;
let yTitulo = -150;
let posX, posY, vel;
let estadoA = 0;
let agumonQuieto = 0;


const tam = 0.3;
const velocidadTitulo = 0.8;
const velocidadFondo = 0.4;
const yFinal =20;
const velocidadA = 6;


function preload() {
  imagenFondo = loadImage("data/fondo.png.png");
  imagenTitulo = loadImage("data/titulo.png.png");

  for (let i = 0; i < 8; i++) {
    sprite[i] = loadImage("data/agumon_" + i + ".png");
  }
}

function setup() {
  createCanvas(800, 600);

  posX = -100;
  posY = 250;
  vel = 1.8;
  animar = 0;
}

function draw() {
  background(200);

  xFondo -= velocidadFondo;

  if (xFondo <= -width) {
    xFondo = 20;
  }

  image(imagenFondo, xFondo, 0, width, height);
  image(imagenFondo, xFondo + width, 0, width, height);

if (estadoA == 0) {
  posX = calcularPosicion(posX, vel);

  if (posX >= width - 200) {
    posX = width - 200;
    estadoA = 1;
    contadorQuieto = 0;
  }
}

if (estadoA == 0) {
  animar = elegirFrame(sprite, velocidadA);
}

if (estadoA == 1) {
  agumonQuieto++;

  if (agumonQuieto >= 60) {
    reset();
  }
}

image(sprite[animar], posX, posY);

if (yTitulo < yFinal) {
  yTitulo += velocidadTitulo;
}

image(imagenTitulo, width / 2 - imagenTitulo.width * tam / 2, yTitulo,
  imagenTitulo.width * tam, imagenTitulo.height * tam);
}
