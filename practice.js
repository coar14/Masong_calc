let result = document.getElementById('result');

function appendValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function calculate() {
  try {
    let expression = result.value;
    let answer = eval(expression);
    result.value = answer;
  } catch (error) {
    document.getElementById('result').value = 'error';
  }
}

function deleteNumber(){
  document.getElementById('result').value='';
}

