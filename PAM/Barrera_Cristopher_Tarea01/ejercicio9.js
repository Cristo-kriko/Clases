let pixeles;
let PPI;
pixeles = Number(prompt("Escribe los pixeles"));

PPI = Number(prompt("Escribe el PPI"));

let pulgadas = pixeles / PPI;

let cm = pulgadas * 2.54;

console.log("Pixeles: " + pixeles);
console.log("PPI: " + PPI);
console.log("pulgadas totales: " + pulgadas);
console.log("centimetros totales: " + cm );