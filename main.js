// EL JUEGO CONSISTE EN UN SIMULADOR DE TIRAR DADOS.
// LAS REGLAS SON FACILES, EL DADO SE VA TIRANDO HASTA QUE EL JUGADOR LE TOQUE DOS VECES EL NUMERO 1.
// UNA VEZ QUE EL JUGADOR LE TOCA DOS VECES 1 LE TOCA AL SIGUIENTE JUGADOR
// EL QUE JUNTE MAS PUNTAJE EN TODOS SUS LANZAMIENTOS !GANA!

// FUNCIONES //
import { random, imgDados } from "./funciones.js";

// CREANDO CLASE DE JUGADORES CON UN METODO PARA SUMAR LOS PUNTOS
import { Jugador } from "./clases.js";

// ARRANCA EL PROGRAMA

let fin = "S";

while (fin) {
  const jugadores = [];
  for (let i = 0; i < 2; i++) {
    alert(`INGRESE LOS DATOS DEL JUGADOR ${i + 1}`);
    let nombre = prompt("Nombre");
    let edad = "";
    do {
      edad = parseInt(prompt("Edad"));
    } while (isNaN(edad));
    jugadores.push(new Jugador(nombre, edad, 0));
  }
  for (let i = 0; i < 2; i++) {
    let cont = 0;
    while (cont < 2) {
      alert(`Tira el jugador ${i + 1}`);
      let num = random(1, 6);
      imgDados(num);
      jugadores[i].sumarPuntos(num);
      if (num === 1) {
        cont++;
      }
    }
  }

  alert("EL SIMULADOR A TERMINADO");
  console.log(jugadores);

  if (jugadores[0].puntaje > jugadores[1].puntaje) {
    alert(
      `EL GANADOR DEL JUEGO ES EL JUGADOR ${jugadores[0].nombre} \n CON UN PUNTAJE DE ${jugadores[0].puntaje}`
    );
  } else {
    alert(
      `EL GANADOR DEL JUEGO ES EL JUGADOR ${jugadores[1].nombre} \n CON UN PUNTAJE DE ${jugadores[1].puntaje}`
    );
  }

  fin = prompt(
    "SI DESEA JUGAR NUEVAMENTE PRESIONE CUALQUIER LETRAS \nSI DESEA SALIR PRESIONE ENTER"
  );
}

alert("EL JUEGO A FINALIZADO, MUCHAS GRACIAS POR JUGAR!!!");
