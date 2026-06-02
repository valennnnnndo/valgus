const persona = {
  nombre: Valentina,
  edad: 18,
  estudia: true,

  hobbies: ["Escuchar música", "Leer", "gym", "Salir con amigos"],

  direccion: {
    calle: "San Martín 123",
    ciudad: "Baradero",
    codigoPostal: "2942",
  },
  idiomas: ["Español", "Inglés", "Guraní"],
  notas: [8, 9, 10, 9, 10],
  contacto: {
    email: "valenjacobdo07@gmail.com",
    telefono: "3421234567",
    redesSociales: ["@valdomiinguez", "@vlenlamascapa"],
  },

  experiencias: [
    {
      lugar: "Escuela ",
      rol: "Estudiante",
      anios: 7,
    },
    {
      lugar: "Casa",
      rol: "Niñera",
      anios: 3,
    },
    {
      lugar: "Curso de Programación",
      rol: "Alumno",
      anios: 2,
    },
  ],

  mascotas: [
    {
      nombre: "Violeta",
      especie: "Perro csniche",
      edad: 14,
    },
    {
      nombre: "Milu",
      especie: "Gato",
      edad: 8,
    },
  ],
};

console.log("nombre", persona.nombre);
console.log("edad", persona.edad);
console.log("ciudad", persona.ciudad);
console.log("hobbies", persona.hobbies[1]);
console.log(
  "mascotas",
  persona.mascotas[0].nombre,
  "-",
  persona.mascotas[0].especie,
);
console.log("experiencias", persona.experiencias.length);

persona.experiencias.forEach((exper) => {
  console.log(exper.lugar);
});

persona.hobbies.push("ver series");
