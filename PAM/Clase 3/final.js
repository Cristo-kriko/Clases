let categoria;
categoria = Number(prompt(
    "================================\n"+
    "    CENTRO MULTIMEDIA UPS\n       "+
    "================================\n"+
    "1. Diseño gráfico\n"+
    "2. Producción audiovisual\n"+
    "3. Desarrollo web\n"+
    "4. Realidad extendida\n"+
    "5. Salir"
));

switch(categoria) {
    case 1:
      let subcategoria;
      subcategoria = Number(prompt(
          "    DISEÑO GRAFICO\n       "+
          "1. After Effects\n"+
          "2. Illustrator\n"+
          "3. Photoshop"
      ));      
    break;

    case 2:
      subcategoria = Number(prompt(
          "    PRODUCCION AUDIOVISUAL\n       "+
          "1. After Effects\n"+
          "2. Illustrator\n"+
          "3. Photoshop"
      ));    
    break;
        
    case 3:
      subcategoria = Number(prompt(
          "    DESARROLLO WEB\n       "+
          "1. After Effects\n"+
          "2. Illustrator\n"+
          "3. Photoshop"
      )); 
    break;
    case 4:
      subcategoria = Number(prompt(
          "    REALIDAD EXTENDIDA\n       "+
          "1. After Effects\n"+
          "2. Illustrator\n"+
          "3. Photoshop"
      )); 
    break;
        case 5:
          alert("Salir");
    break;
    default:
        alert("Operacion Inexistente");
    break;
}