let result = document.getElementById('result');

function handleClick(value) {
  result.value += value;
}

function calculate() {
    result.value = eval(result.value);
 
}
function clearInput(){
  result.value = "";
};
