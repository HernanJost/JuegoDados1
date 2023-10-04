export class Jugador {
  constructor(nombre, edad, puntaje) {
    this.nombre = nombre.toUpperCase();
    this.edad = parseInt(edad);
    this.puntaje = parseInt(puntaje);
  }
  sumarPuntos(valor) {
    this.puntaje += valor;
  }
}
