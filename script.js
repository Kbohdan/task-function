let f1 = document.querySelector('.f1');

function num(a, b) {
    a = prompt("Введите первое число");
    b = prompt("Введите второе число");
    if (a < b) {
        alert("-1");
    } else if (a > b) {
        alert('1');
    } else if (a = b) {
        alert('0');
    }

}

f1.onclick = num;