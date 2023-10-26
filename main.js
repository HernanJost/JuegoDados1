import { Jugador } from "./clases.js";
// FUNCIONES

import { random, imgDados } from "./funciones.js";

function enviarFormulario(event) {
  //asigna elemtos del input a variables
  let nombre1 = document.getElementById("nombre1").value;
  let edad1 = document.getElementById("edad1").value;
  let nombre2 = document.getElementById("nombre2").value;
  let edad2 = document.getElementById("edad2").value;

  //verifica que los campos esten completos
  if (nombre1 === "" || edad1 === "" || nombre2 === "" || edad2 === "") {
    alert("Por favor, completa todos los campos.");
    event.preventDefault(); // Cancelar el envío del formulario
  } else {
    //Agrega al array los objetos de jugadores
    jugadores.push(new Jugador(nombre1, edad1, 0));
    jugadores.push(new Jugador(nombre2, edad2, 0));

    //Elimina de la pantalla el formulario una vez completado los jugadores
    eliminarElemento();
  }
}
// funcion para eliminar la seccion del formulario
function eliminarElemento() {
  let elemento = document.querySelector(".input-jugadores");
  if (elemento) {
    elemento.remove();
  }
}
//INICIA EL JUEGO

//creo array de objetos jugadores
const jugadores = [];
const btnFormulario = document.querySelector("#btnFormulario");

//agrego al evento click en el boton para enviar el formulario
btnFormulario.onclick = function () {
  enviarFormulario();
  botonTirar.removeAttribute("disabled");
};
console.log(jugadores);

let num = 0,
  contVueltas = 0;
const botonTirar = document.querySelector("#botonTirar");
botonTirar.onclick = function () {
  contVueltas++;
  num = random(1, 6);
  imgDados(num);
  console.log(num);

  if (contVueltas <= 10) {
    if (contVueltas <= 5) {
      let contenidoNombreJugador = `Tira el jugador ${jugadores[0].nombre}`;
      let nombreJugador = document.querySelector("#cartelNombre");
      nombreJugador.textContent = contenidoNombreJugador;

      jugadores[0].sumarPuntos(num);
    } else {
      let contenidoNombreJugador = `Tira el jugador ${jugadores[1].nombre}`;
      let nombreJugador = document.querySelector("#cartelNombre");
      nombreJugador.textContent = contenidoNombreJugador;
      jugadores[1].sumarPuntos(num);
    }
  }
  if (contVueltas == 10) {
    botonTirar.remove();
    console.log(jugadores);
    alert("El juego termino");
    //separo el array por jugadores individuales y lo guardo en el sesionstorage
    jugadores.forEach((jugador) => {
      let clave = jugador.nombre;
      sessionStorage.setItem(clave, JSON.stringify(jugador));
    });
  }
  let clave1 = jugadores[0].nombre;
  let clave2 = jugadores[1].nombre;
  let objeto1 = JSON.parse(sessionStorage.getItem(clave1));
  let objeto2 = JSON.parse(sessionStorage.getItem(clave2));
  // Compara los datos de los objetos
  if (objeto1 && objeto2) {
    if (objeto1.puntaje > objeto2.puntaje) {
      let contenidoNombreJugador = `El ganador es ${jugadores[0].nombre}`;
      let ganador = document.querySelector("#nombreGanador");
      ganador.textContent = contenidoNombreJugador;
    } else {
      let contenidoNombreJugador = `El ganador es ${jugadores[1].nombre}`;
      let ganador = document.querySelector("#nombreGanador");
      ganador.textContent = contenidoNombreJugador;
    }
  }
};
