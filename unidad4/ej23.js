do{
    var extremo1 = prompt("Ingrese el primer extremo de un rango numerico");
    extremo1=validarNum(extremo1);
}while(extremo1==false);

do{
   var extremo2 = prompt("Ingrese el segundo extremo de un rango numerico");
    extremo2=validarNum(extremo2); 
}while(extremo2==false);

if(extremo2-extremo1<5){
    alert("Los numeros extremos deben tener 5 enteros de diferencia");
}
else{
    var resp='s'; 
    while(resp=='s'||resp=='S'){      
        
        do{
            var num = prompt("Ingrese un numero");
            num=validarNum(num);
        }while(num==false);
        
        if(num>extremo1 && num<extremo2){
            if(num % 2 == 0) alert ("El numero se encuentra DENTRO del rango y es PAR");
            else alert("El numero se encuentra dentro del rango");
        }
        else{
            if(num % 3 == 0) alert ("El numero  se encuentra FUERA del rango y es IMPAR"); 
            else alert("El numero se encuentra fuera del rango");       
        }
        resp = prompt("Desea volver a ingresar un numero S/N");
        if(resp!='s'&& resp!='S') alert("Fin del programa ADIOS!");             
    } 
}    

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

   
       
   