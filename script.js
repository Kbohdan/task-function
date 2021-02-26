let f1 = document.querySelector('.f1');

function num(a, b, c) {
    a = prompt("Введите первое число");
    b = prompt("Введите второе число");
    c = prompt("Введите третье число");
    alert(a + b + c);
}

f1.onclick = num;