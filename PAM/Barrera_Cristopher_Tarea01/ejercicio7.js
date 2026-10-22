let fotogramas;
let FPS;
fotogramas = Number(prompt("Escribe los fotogramas"));

FPS = Number(prompt("Escribe los FPS"));

let duracion = fotogramas / FPS;

console.log("fotogramas: " + fotogramas);
console.log("FPS: " + FPS);
console.log("duracion total: " + duracion + "segundos");