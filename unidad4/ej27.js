// 27. Como resultado de una encuesta se recogen los siguientes datos: sexo (H: Hombre, M: Mujer), edad (en años) y altura (en centímetros). Realice un programa para calcular e informar:

// a. El porcentaje de mujeres mayores a 25 años.
// b. El porcentaje de hombres menores de 18 años.
var porcMujerMas25=0;
var porcHombreMenor18=0;

// c. El promedio de edad de las mujeres.
// d. El promedio de altura de los hombres.
var cant_hombre=0;
var cant_mujer=0;
var sumaEdadMujer=0;
var sumaAlturaHombre=0;
var promEdadmujer=0;
var promAlturaHombre=0;

// e. La menor edad ingresada.
// f. La mayor altura ingresada
var menorEdad=100;
var mayorAltura=0;



do{    
    do{
        var sexo = prompt("Seleccione sexo H / M");
        if(sexo!='H'&& sexo!='h'&& sexo!='M' && sexo!='m'){
            alert("Opcion no valida debe seleccionar H o M");
            sexo=false;
        }            
    }while(sexo==false);
  
    do{
        var edad = prompt("Ingrese edad");
        edad=validarNum(edad);
        if(edad==false) alert("Numero no valido");
    }while(edad==false);
    
    do{
        var altura = prompt("Ingrese altura en cm");
        altura=validarNum(altura);
        if(altura==false) alert("Numero no valido");
    }while(altura==false);

    if (sexo=='H'||sexo=='h'){
        cant_hombre++;
        sumaAlturaHombre+=altura;
        if(edad<18){
            porcHombreMenor18++;
        }
    }
    else{
      cant_mujer++;  
      sumaEdadMujer+=edad;
      if(edad>25){
        porcMujerMas25++;
      }
    } 
    
    if(edad<menorEdad) menorEdad=edad;
    if(altura>mayorAltura) mayorAltura=altura;
    
    var resp=prompt("Desea registrar a otra persona S/N");

}while(resp=='s'||resp=='S');  

var total_pers=cant_mujer+cant_hombre;

if(cant_mujer!=0){
    porcMujerMas25=(porcMujerMas25/cant_mujer)*100;
    promEdadmujer=sumaEdadMujer/cant_mujer;
}
if(cant_hombre!=0){
    porcHombreMenor18=(porcHombreMenor18/cant_hombre)*100;
    promAlturaHombre=sumaAlturaHombre/cant_hombre;
}

document.write("<br>Se registraron: "+total_pers+" personas en total");
document.write("<br>El porcentaje de mujeres mayores de 25 años: "+porcMujerMas25+" %");
document.write("<br>El porcentaje de hombres menores a 18 años: "+porcHombreMenor18+" %");
document.write("<br>El promedio de edad de las mujeres: "+promEdadmujer+" años");
document.write("<br>El promedio de altura de los hombres: "+promAlturaHombre+" cm");
document.write("<br>La menor edad registrada: "+menorEdad+" años");
document.write("<br>La mayor altura registrada: "+mayorAltura+" cm");


       
//------------------------------funcion para validar numeros
function validarNum(num){
    num=Number(num);
    if(isNaN(num)){
        return false;
    }        
    else{
        return num;
    }            
}   
