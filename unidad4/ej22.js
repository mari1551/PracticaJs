    
for(var i=0;i<3;i++){
        
    do{
        var num = prompt(i+1+"- Ingrese un numero");  
        num=validarNum(num);

        if(num!=false){    
            if((num % 3 ==0) && ( num % 5 == 0)){
                alert("El numero "+num+" es multiplo de 5 y 3");
            }
            else if(num % 3 ==0){
                alert("El numero "+num+" es multiplo de 3");
            }
            else if( num % 5 == 0){
                alert("El numero "+num+" es multiplo de 5");
            }
            else{
                alert("El numero "+num+" No es multiplo de 3 o 5");
            }
        }
    }while(num==false);
}   

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
   