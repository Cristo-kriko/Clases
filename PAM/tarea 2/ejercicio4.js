let suscripcion = prompt("¿Esta activa tu suscripcion? si/no")
.trim().toLowerCase();
let cuenta = prompt("¿Cuenta bloqueada? si/no ")
.trim().toLowerCase();
let bloqueada = (cuenta === "si" );
let activa = ( suscripcion === "no");

if (!bloqueada && !activa) {
    alert("Pasas pa");
}else {
    alert("No pasas pa");
}