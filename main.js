// -------------------FUNCIONES----------------

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function imgDados(numero) {
  if (numero == 1) {
    alert(
      " +=======+ \n |                    | \n |         X         | \n |                    | \n +=======+"
    );
  } else if (numero == 2) {
    alert(
      " +=======+ \n |         X         | \n |                    | \n |         X         | \n +=======+"
    );
  } else if (numero == 3) {
    alert(
      " +=======+ \n |         X         | \n |         X         | \n |         X         | \n +=======+"
    );
  } else if (numero == 4) {
    alert(
      " +=======+ \n |    X         X   | \n |                     | \n |    X         X   | \n +=======+"
    );
  } else if (numero == 5) {
    alert(
      " +=======+ \n |    X         X   | \n |         X         | \n |    X         X   | \n +=======+"
    );
  } else if (numero == 6) {
    alert(
      " +=======+ \n |    X         X   | \n |    X         X   | \n |    X         X   | \n +=======+"
    );
  }
}
// ----------------------PROGRAMA-----------------------

let v1 = 1,
  v6 = 6;
let seguir = 1;

let nombreJugador = prompt(" SIMULADOR DE TIRAR DADOS \n INGRESE SU NOMBRE \n");
let valor = prompt(
  "SIMULADOR DE TIRAR DADOS \n \n" +
    "NOMBRE DEL JUGADOR : " +
    nombreJugador.toUpperCase() +
    " \n \n \n 1 TIRAR EL DADO \n 2 SALIR \n \n"
);

if (valor == 1) {
  while (seguir === 1) {
    let num = random(v1, v6);
    imgDados(num);

    seguir = prompt(
      " " +
        nombreJugador.toUpperCase() +
        " EL DADO DIO " +
        num +
        "\n \n 1 PARA SEGUIR TIRANDO \n \n 0 PARA SALIR"
    );

    if (seguir != 0 && seguir != 1) {
      seguir = prompt(
        " LA OPCION INGRESADA ES INCORRECTA \n  VUELVA A INGRESAR UNA OPCION \n \n 1 PARA SEGUIR TIRANDO \n \n CUALQUIER CARACTER PARA SALIR"
      );
    }
  }
} else {
  alert("Esta por salir ");
}

alert("Esta por salir ");
