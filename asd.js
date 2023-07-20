
   
notebook();
function notebook(){
 let notebook = prompt ("Selecciona una marca de notebook")
 if(notebook)
 switch(notebook){
    case"hp":
    prompt("selecione categoria") 
    break;

    case"lenovo":
    prompt("selecione categoria")  
    break;

    case"asus": 
    prompt("selecione categoria") 
    break;

    case"bgh": 
    prompt("selecione categoria") 
    break;

    case"dell": 
    prompt("selecione categoria") 
    break;

    

    default:
        alert("No has seleccionado una marca válida. Las marcas disponibles son: hp, lenovo, apple, bgh, dell")
        break;
     
     
        
     
}

        
}

