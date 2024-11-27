const display=document.getElementById("display");

function appendtodispaly(input){
    display.value += input;
}

function cleard(){
    display.value= "";
}

function del(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch{
        display.value="MathError";
    }
}
