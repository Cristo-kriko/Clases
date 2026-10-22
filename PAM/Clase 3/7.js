let figura;
figura = Number(prompt(
    "ELIJJA UN NUMERO:\n"+
    "1. Cuadrado\n"+
    "2. Rectangulo\n"+
    "3. Triangulo\n"+
    "4. Circulo"
));

switch(figura) {
    case 1:
        let lado = Number(promopt("Ingresa la medidas del lado:"))
        area = lado^2;      
    break;

    case 2:
        let base = Number(promopt("Ingresa la medida de la base:"));
        let altura = Number(promopt("Ingresa la medida de la altura:"));
        area = base * altura;      
    break;
        
    case 3:
        let base = Number(promopt("Ingresa la medida de la base:"));
        let altura = Number(promopt("Ingresa la medida de la altura:"));
        area = (base * altura)/2;   
    break;
    case 4:
        let radio = Number(promopt("Ingresa la medida del radio:"));
        area = Math.PI * radio^2; 
    break;
    default:
        alert("Operacion Inexistente");
    break;
}
alert("Area: "+area);