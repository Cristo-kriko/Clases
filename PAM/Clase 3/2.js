let dia;
dia = Number(prompt(
    "ELIJJA UN NUMERO:\n"+
    "1. Lunes\n"+
    "2. Martes\n"+
    "3. Miercoles\n"+
    "4. Jueves\n"+
    "5. Viernes\n"+
    "6. Sabado\n"+
    "7. Domingo"
));

switch(dia) {
    case 1: 
    alert("Lunes");
    break;

    case 2:
        alert("Martes");
    break;
        
    case 3:
        alert("Miercoles");
    break;
    case 4:
        alert("Feliz Jueves");
    break;
    case 5:
        alert("Viernes");
    break;
    case 6:
        alert("Sabado");
    break;
    case 7:
        alert("Domingo");
    break;
    default:
        alert("Tas tonto we");
}