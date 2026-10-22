let duracion;
let FPS;
let proyecto;

proyecto = prompt("Ingresa el nombre de tu proyecto");
duracion = Number(prompt("Escribe la duracion en segundos"));
FPS = Number(prompt("Escribe los FPS"));

let fotogramas = duracion * FPS;

console.log("Proyecto: " + proyecto);
console.log("Duracion: " + duracion);
console.log("FPS: " + FPS);
console.log("Fotogramas totales: " + fotogramas);