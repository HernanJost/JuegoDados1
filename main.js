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

    const guardarSesion = (clave, valor) => {
      sessionStorage.setItem(clave, valor);
    };
    for (const jugador of jugadores) {
      guardarSesion(jugador.nombre, JSON.stringify(jugadores));
    }
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
btnFormulario.onclick = enviarFormulario;
console.log(jugadores);

const botonJuego = document.querySelector("#botonJugar");
botonJuego.onclick = function () {
  jugadores.forEach((jugador) => {
    jugador.reiniciarPuntaje();
  });
  let fin = true;

  while (fin) {
    // let codicia = [true, true];

    for (let x = 0; x < 5; x++) {
      for (let i = 0; i < 2; i++) {
        let cont = 0,
          puntosRonda = 0;
        // seguir = true;
        while (cont < 2) {
          let contenidoNombreJugador = `Tira el jugador ${jugadores[i].nombre}`;
          let nombreJugador = document.querySelector("#cartelNombre");
          nombreJugador.textContent = contenidoNombreJugador;
          let num = random(1, 6);
          imgDados(num);
          puntosRonda += num;
          if (num === 1) {
            cont++;
          }
        }
        jugadores[i].sumarPuntos(puntosRonda);
      }
    }

    alert("EL JUEGO A TERMINADO");
    console.log(jugadores);
    fin = false;
  }
};
