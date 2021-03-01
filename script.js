let f1 = document.querySelector('.f1');

function num(a) {
    a = prompt("Введите число");
    let b = 1;
    for (let i = 1; i <= a; i = i + 1) {
        b *= i
    }
    alert(b);
}



f1.onclick = num;