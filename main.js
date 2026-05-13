const alumnos = ["val", "milton", "juana", "maria", "enzo"];

console.log(alumnos[0]);
console.log(alumnos[1]);
console.log(alumnos[2]);
console.log(alumnos[3]);
console.log(alumnos[4]);

console.log(alumnos[0]);
console.log(alumnos[4]);
console.log(alumnos.length);

alumnos[3] = "jose";

alumnos.pop();
alumnos.shift();
alumnos.unshift("pablo");

alumnos.push("camila");

for (let index = 0; index < alumnos.length; index++) {
  const alu = alumnos[index];
  console.log(alumnos);
}
console.log(alumnos.includes("maria"));
console.log(alumnos.indexOf("milton"));
