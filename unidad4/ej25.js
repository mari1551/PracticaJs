// 25. Se le solicita al usuario que ingrese las notas del parcial de los alumnos de una comisión. Se desconoce la cantidad de alumnos. Realice el algoritmo para informar:
//  El porcentaje de alumnos aprobados (nota igual o superior a 4).
//  El porcentaje de alumnos desaprobados (nota inferior a 4).
//  El promedio de las notas.
// Tenga en cuenta que solamente las notas pueden ir del 1 al 10.

var sumatoria=0;
var cant_aprob=0;
var cant_desap=0;

do{    
    
    do{
        var nota = prompt("Ingrese nota");
        nota=validarNum(nota);
        if(nota==false) alert("No es un numero valido");
        else if(nota<0 || nota>10){
            alert("La nota debe estar entre 1 y 10");
            nota=false;
        }
    }while(nota==false);
    
    sumatoria+=nota;
    if(nota>=4){
        cant_aprob++;
    }else cant_desap++;
    
    var resp=prompt("Desea ingresar otra nota S/N");

}while(resp=='s'||resp=='S');  

var cant_total=cant_aprob+cant_desap;
var porc_aprob=(cant_aprob/cant_total)*100;
var porc_desap=(cant_desap/cant_total)*100;
alert("La cantidad de notas registradas: "+cant_total+"\nEl porcentaje de aprobados es: "+porc_aprob+"%"+"\nEl porcentaje de reprobados es: "+porc_desap+"%"+"\nEl promedio de notas es: "+sumatoria/cant_total);
       
//funcion para validar numeros
function validarNum(num){
    num=Number(num);
    if(isNaN(num)){
        return false;
    }        
    else{
        return num;
    }            
}   
