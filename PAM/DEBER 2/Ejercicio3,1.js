let nombre;
let contrasena;

nombre = prompt("Ingrese su usuario");
contrasena = Number(prompt("Ingrese su contraseña"));

if (nombre === "admin" && contrasena === 1234){
    alert("Acceso Permitido");
}else{
    alert("Intente otra vez");
}