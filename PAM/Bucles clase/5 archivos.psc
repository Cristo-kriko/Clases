Algoritmo sin_titulo
	definir archivos, total, promedio como real;
	definir i, j como entero;
	Para i<-1 Hasta 5 Con Paso 1 Hacer
		escribir "Ingrese tamaño del archivo"
		leer archivos
		total= total+archivos
		j=j+1
	Fin Para
	promedio=total/j
	escribir "el total de archivos es: ", total, " y su promedio es ", promedio
FinAlgoritmo
