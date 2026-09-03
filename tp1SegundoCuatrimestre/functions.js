function calcularPosicion(x, velocidad) {
  return x + velocidad;
}

function elegirFrame(frames, velocidad) {
  let indice = floor(frameCount / velocidad) % frames.length;
  return indice;
}

function reset() {
  posX = -100;
  xFondo = 0;
  yTitulo = -150;
  animar = 0;
  estadoA = 0;
  agumonQuieto = 0;
}
