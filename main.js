let display = document.getElementById("display");

function displayInput(i){
    display.value += i;
}
function clearInput(){
    display.value = "";
}
function dele(){
   display.value= display.value.toString().slice(0,-1)
}
function calc(){
    display.value = eval(display.value)
}

