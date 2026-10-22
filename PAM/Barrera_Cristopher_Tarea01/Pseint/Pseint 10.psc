Algoritmo ejercicio10
	definir proyecto como cadena;
	definir horas Como real;
	definir valor como real;
	definir recursos como real;
	definir CT como real;
	definir total como real;
	
	escribir "Escriba el nombre de su proyecto";
	leer proyecto;
	
	escribir "Escriba sus horas trabajadas";
	leer horas;
	
	escribir "Escribe tu valor por hora";
	leer valor;
	
	escribir "Escriba el costo de los recursos adicionales";
	leer recursos;
	
	CT = horas * valor;
	total = CT + recursos;
	Escribir "================================";
	Escribir "      PRESUPUESTO MULTIMEDIA";
	Escribir "================================";
	escribir " "
	escribir "Proyecto: ", proyecto;
	escribir "Horas Trabajadas: ", horas;
	escribir "Costo por Hora: ", valor;
	escribir " ";
	escribir "Costo del Trabajo: ", CT;
	escribir "Recursos: ", recursos;
	escribir " ";
	escribir "Total: ", total;
	Escribir "================================";
FinAlgoritmo
