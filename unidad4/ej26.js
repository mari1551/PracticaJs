//  26. Se le solicita al usuario que ingrese una cantidad desconocida de números. Realice un programa para calcular e informar:
// a. La sumatoria de los valores ingresados.
// b. El menor valor ingresado.
// c. El mayor valor ingresado.

var sumatoria=0;
var menor=1000;
var mayor=0;

do{    
    
    do{
        var num = prompt("Ingrese un numero");
        num=validarNum(num);
    }while(num==false);
    
    sumatoria+=num;
    if(num>mayor){
        mayor=num;
    }else if(num<menor) menor=num;
    
    var resp=prompt("Desea ingresar otro numero S/N");

}while(resp=='s'||resp=='S');  

alert("La sumatoria de los numeros es: "+sumatoria+"\nEl menor numero: "+menor+"\nEl mayor numero: "+mayor);
       
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
