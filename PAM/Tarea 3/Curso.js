let edad = Number(prompt("Cuantos años tienes"));
if(edad>= 16){
    let computadora = prompt("Tienes compu pa? si/no")
    .trim().toLowerCase();
    if(computadora === "si"){
        alert ("Inscripcion permitida");

    }else{
        alert("Necesitas compu men");
    }
        

}else{
    alert("No cumples la edad mae")
}