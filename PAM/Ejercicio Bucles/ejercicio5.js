let contarPesados = 0;

for(let i = 1; i<= 8; i++){
    let valor =Number(prompt("Ingrese el tamaño del archivo: "));
    if(valor>100){
        contarPesados++;
    }
}

alert("Tienes: " + contarPesados + " archivos pesados de mas de 100mb");