let nombre;
let contraseña;
let correcto1;
let correcto2;

nombre = prompt("Elija su nombre");
contraseña = Number(prompt("Elija una contraseña"));
correcto1 = prompt ("Ingrese su nombre");
correcto2 = Number(prompt("Ingrese su contraseña"));
if (correcto1 === nombre && correcto2 === contraseña){
    alert("Acceso Permitido");
}else{
    alert("Intente otra vez");
}