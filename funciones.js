export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function imgDados(numero) {
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
