// 24. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice un programa para calcular e informar cada operación deseada entre los dos números. Ese proceso se puede repetir mientras lo desee el usuario. Todos los valores deben ser validados.   

do{    
    
    do{
        var num1 = prompt("Ingrese un primer numero");
        num1=validarNum(num1);
    }while(num1==false);
    
    do{
        var num2 = prompt("Ingrese un segundo numero");
        num2=validarNum(num2);
    }while(num2==false);
    
    do{
       var operador = prompt("Ingrese operacion (+, -, *, /)"); 
    }while(operador!='+' && operador!='-' && operador!='*' && operador!='/' );
    
    if(operador=='+') 
        var calculo=num1+num2;
    else if(operador=='-')
        var calculo=num1-num2;
    else if(operador=='*')
        var calculo=num1*num2;
    else if(operador=='/')
        var calculo=num1/num2;

    alert("El resultado de la operacion es: "+calculo);

    var resp=prompt("Desea realizar otra operación S/N");

    if(resp!='s'&& resp!='S') alert("Fin del programa");

}while(resp=='s'||resp=='S');  
       
//funcion para validar numeros
function validarNum(num){
    num=Number(num);
    if(isNaN(num)){
        alert("No es un numero valido");
        return false;
    }        
    else{
        return num;
    }            
}   