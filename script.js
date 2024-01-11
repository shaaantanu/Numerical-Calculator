function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function appendValue(value) {
    document.getElementById('display').value += value;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function calculate() {
    var expression = document.getElementById('display').value;

    try {
        var result = eval(expression);

        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid result');
        }

        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}