const carrusel = document.querySelector('.carrusel');
const imagenes = carrusel.querySelectorAll('img');
const botonIzquierda = document.querySelector('.boton-izquierda');
const botonDerecha = document.querySelector('.boton-derecha');

let indiceActual = 0;

botonIzquierda.addEventListener('click', () => {
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }
  actualizarCarrusel();
});

botonDerecha.addEventListener('click', () => {
  indiceActual++;
  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }
  actualizarCarrusel();
});

function actualizarCarrusel() {
  imagenes.forEach((imagen, indice) => {
    if (indice === indiceActual) {
      imagen.classList.add('active');
    } else {
      imagen.classList.remove('active');
    }
  });
}