const display = document.getElementById('display');

function appendValue(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        if (display.value.includes('/0')) {
            display.value = 'Error: Div by 0';
            return;
        }
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}