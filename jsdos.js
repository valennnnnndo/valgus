const alumnos = [];
function agregarAlumno(nombre1, nombre2, nombre3, nombre4, nombre5) {
  alumnos.push(nombre1);
  alumnos.push(nombre2);
  alumnos.push(nombre3);
  alumnos.push(nombre4);
  alumnos.push(nombre5);
}

agregarAlumno("Valentina", "agu", "milton", "luz", "juan");

function mostrarAlumnos() {
  for (let index = 0; index < alumnos.length; index++) {
    console.log(alumnos[index]);
  }
}
mostrarAlumnos();

function cant() {
  console.log(alumnos.length);
}

cant();

function mostrar() {
  console.log("Primer alumno:", alumnos[0]);
  console.log("Último alumno:", alumnos[alumnos.length - 1]);
}
mostrar();

function posicion(nombre) {
  alumnos.indexOf(nombre);
}
posicion();

function eliminar() {
  alumnos.shift();
  alumnos.pop();

  console.log("Se eliminó el primer y último alumno.");
}
eliminar();

function agregarinicio(nombre) {
  alumnos.unshift(nombre);

  console.log("alumn agregado al inicio ");
}
agregarinicio();

function agregarfinal(nombre) {
  alumnos.push(nombre);

  console.log("alumno agregado al final ");
}
agregarfinal();

function cambiarnombre(nombre) {
  alumnos[0] = nombre;
  console.log("se cambbio el nombre");
}
cambiarnombre();
