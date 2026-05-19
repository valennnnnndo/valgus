const alumnos = ["Ana", "Juan", "Lucas", "Maris"];

alumnos.forEach((alumno) => {
  console.log(alumno);
});

const nombresMayusculas = alumnos.map((alumno) => {
  return alumno.toUpperCase();
});

console.log(nombresMayusculas);

const nombresLargos = alumnos.filter((alumno) => {
  return alumno.length > 4;
});

console.log(nombresLargos);

const encontrado = alumnos.find((alumno) => {
  return alumno === "Juan";
});

console.log(encontrado);

const hayNombreLargo = alumnos.some((alumno) => {
  return alumno.length > 5;
});

console.log(hayNombreLargo);

const todosTienen4Letras = alumnos.every((alumno) => {
  return alumno.length >= 4;
});

console.log(todosTienen4Letras);
