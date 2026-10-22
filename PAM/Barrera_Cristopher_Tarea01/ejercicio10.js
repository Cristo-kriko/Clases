let proyecto;
let horas;
let valor;
let adicional;

proyecto = prompt("Ingresa el nombre de tu proyecto");
horas = Number(prompt("Escribe las horas trabajadas"));
valor = Number(prompt("Ingressa tu valor por hora"));
adicional = Number(prompt("Escribe el costo de recursos adicionales"));

let costotrabajo = horas * valor;
let total = costotrabajo + adicional;

console.log("================================")
console.log("    PRESUPUESTO MULTIMEDIA")
console.log("================================")
console.log(" ")
console.log("Proyecto: " + proyecto)
console.log("Horas Trabajadas:" + horas)
console.log("Costo por hora: " + valor)
console.log(" ")
console.log("Costo del Trabajo: " + costotrabajo)
console.log("Recursos: " + adicional)
console.log(" ")
console.log("TOTAL: " + total)
console.log("================================")