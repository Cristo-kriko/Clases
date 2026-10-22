// ENTRADA
let opcion = Number(prompt(
  "Seleccione un formato:\n" +
  "1. Fotografía\n" +
  "2. Imagen transparente\n" +
  "3. Audio\n" +
  "4. Video"
));

// PROCESO
switch (opcion) {
  case 1:
    alert("Formato recomendado: JPG");
    break;
  case 2:
    alert("Formato recomendado: PNG");
    break;
  case 3:
    alert("Formato recomendado: MP3");
    break;
  case 4:
    alert("Formato recomendado: MP4");
    break;
  default:
    alert("Opción no válida");
}