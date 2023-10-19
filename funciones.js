export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function imgDados(numero) {
  let container = document.querySelector("#imagenDados");
  if (numero == 1) {
    container.innerHTML =
      '<img src="./imagenes/dado1.png" alt="dado1"><p>SALIO EL 1</p>';
  } else if (numero == 2) {
    container.innerHTML =
      '<img src="./imagenes/dado2.png" alt="dado2"><p>SALIO EL 2</p>';
  } else if (numero == 3) {
    container.innerHTML =
      '<img src="./imagenes/dado3.png" alt="dado3"><p>SALIO EL 3</p>';
  } else if (numero == 4) {
    container.innerHTML =
      '<img src="./imagenes/dado4.png" alt="dado4"><p>SALIO EL 4</p>';
  } else if (numero == 5) {
    container.innerHTML =
      '<img src="./imagenes/dado5.png" alt="dado5"><p>SALIO EL 5</p>';
  } else if (numero == 6) {
    container.innerHTML =
      '<img src="./imagenes/dado6.png" alt="dado6"><p>SALIO EL 6</p>';
  }
}
