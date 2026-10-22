let resolucion;
resolucion = Number(prompt("Ingrese la resolucion de su imagen"));

if(resolucion < 0){
    alert("Resolucion no valida")
}else if(resolucion < 1280){
    alert("Resolución baja")}
else if(resolucion <= 1919){
    alert("Resolucion HD");
}else{
    alert("Resolucion Full HD o superior");
}
console.log("Resolucion: " + resolucion)