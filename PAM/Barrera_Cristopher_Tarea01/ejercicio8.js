let pixeles;
let PPI;
pixeles = Number(prompt("Escribe los pixeles"));

PPI = Number(prompt("Escribe el PPI"));

let pulgadas = pixeles / PPI;

console.log("Pixeles: " + pixeles);
console.log("PPI: " + PPI);
console.log("pulgadas totales: " + pulgadas);