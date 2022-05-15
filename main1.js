// Поле введення
let input = document.querySelector('.input');
// Збережена частина виразу для приведення в ступінь
let power = "";

// Вставка символа
function insert(num) {  // функція добавляє до поля введення символи які були нажаті користувачем
    if(input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else {
        input.textContent += num;
    }
}

// Очищаємо поле введення
function clean() {  // функція очищає все поле введення
    input.textContent = "0";
    let power = "";
}

// Удаляєм 1 символ
function back() {
    let exp = input.textContent;  // змінна яка зберігає в собі поточний стан нашої текстової строки
    input.textContent = exp.substring(0, exp.length-1);  // повертає вирізану строку без останнього символу
    if(input.textContent == 0) {
        input.textContent = "0";
    }
}

// Вираховуємо вираз
function equal() {
    let exp = input.textContent;
    if(input.textContent.includes('^')) {  // підносить число в задану степінь
        let tmp = input.textContent.split('^'),  // розділяє строку введену в поле на масив підстрок за вказаним сепаратором
            num = eval(power),  // вираховує число задане в глобальній змінній, а саме: перше введене число з виразу
            pow = +tmp[1];  // вибирає з масиву tmp 2-у строку і перетворює його в число
        input.textContent = Math.pow(num, pow);  // підносить число в задану степінь 
        power = "";
        return;
    }
    if(exp) {  //якщо в полі є якийсь текст, вона не пуста
        input.textContent = eval(exp);  // функція eval виконує/підраховує код JS але код буде заданий звичайною строкою
    }
}
// Вираховуємо відсоток
function percent() {
    input.textContent = eval(input.textContent)/100;
}

// Добавляєм константи

// function pi() {
//     if(input.textContent == 0) {  // перевірка якщо в строці є 0 то його забираєм
//         input.textContent = "";
//     }
//     input.textContent = input.textContent + Math.PI.toFixed(8);  // константа ПІ є в математичній бібліотеці JS, метод toFixed обрізає лишні знаки після коми
// }
// function e() {
//     if(input.textContent == 0) {
//         input.textContent = "";
//     }
//     input.textContent = input.textContent + Math.E.toFixed(8);  // константа E є в математичній бібліотеці JS
// }
// АБО СКОРОЧЕНА ВЕРСІЯ >>>

function constant(name) {
    if(input.textContent == 0) {
        input.textContent = "";
    }
    if(name == "pi") {
        input.textContent += Math.PI.toFixed(8);
    }
    if(name == "e") {
        input.textContent += Math.E.toFixed(8);
    }
}

// Вираховуємо корінь квадратний
// function sqrt(){
//     input.textContent = Math.sqrt(eval(input.textContent));  //  метод sqrt для вираховування кореня квадратного від числа
// }
function operation(name) {
    if(name == "sqrt") {  // вираховуємо корінь квадратний
        input.textContent = Math.sqrt(eval(input.textContent));
    }
    if(name == "sqr") {  // підносим в квадрат
        input.textContent = Math.pow(eval(input.textContent), 2);  // метод pow підносить число в любу степінь, ми підносим в квадрат
    }
    if(name == "^-1") {  // підносим в -1 степінь, те саме що 1/x
        input.textContent = Math.pow(eval(input.textContent), -1);  // метод pow підносить число в любу степінь, ми підносим в -1 степінь
    }
    if(name == "^") {  // при виявленні операції "^"(піднесення в степінь)
        power = input.textContent;  //  зберігає в глобальну змінну power введене число 
        input.textContent += "^";  // та додає символ ^ до поля введення
    }
}

// Факторіал числа - множить кожне порядкове число по порядку (5! = 1*2*3*4*5 = 120)
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;  // рекурсивна функція яка вираховує факторіал з нету
}
function fact() {
    input.textContent = factorial(+eval(input.textContent));  
}

// Логарифми
function log(name) {
    if(name == 'lg') {
        input.textContent = Math.log10(eval(input.textContent)).toFixed(8);  // функція log10 для вираховування логарифмів на основі 10
    }
    if(name == 'ln') {  //натуральний логарифм
        input.textContent = Math.log(eval(input.textContent)).toFixed(8);  // функція log для вираховування натуральних логарифмів
    }
}

// Переключення з градусів на радіани
document.querySelector('.type').addEventListener('click', function() {  // обробник подій при кліку
    if (document.querySelector('.type').textContent == 'deg') {
        this.textContent = 'rad';
        console.log('Degree');
    } else if (document.querySelector('.type').textContent == 'rad') {
        this.textContent = 'deg';
        console.log('Radians');
    }
})

// Синуси і косинуси
function f(name) {
    if(name == 'sin') {
        if (document.querySelector('.type').textContent == 'deg') {
            // В градусах
            input.textContent = parseFloat(Math.sin(eval(input.textContent)/180*Math.PI).toFixed(8).toString()); // обрізали лишні нулі
        } else {
            // В радіанах
            input.textContent = Math.sin(eval(input.textContent)).toFixed(8);  // стандартна функція Math.sin() вираховує синус
        }}
    if(name == 'cos') {
        if (document.querySelector('.type').textContent == 'deg') {
            // В градусах
            input.textContent = parseFloat(Math.cos(eval(input.textContent)/180*Math.PI).toFixed(8).toString()); // обрізали лишні нулі
        } else {
            // В радіанах
            input.textContent = Math.cos(eval(input.textContent)).toFixed(8);  // стандартна функція Math.cos() вираховує косинус
        }}
    if(name == 'tan') {
        if (document.querySelector('.type').textContent == 'deg') {
            // В градусах
            input.textContent = parseFloat(Math.tan(eval(input.textContent)/180*Math.PI).toFixed(8).toString()); // обрізали лишні нулі
        } else {
            // В радіанах
            input.textContent = Math.tan(eval(input.textContent)).toFixed(8);  // стандартна функція Math.tan() вираховує тангенс
        }}
    if(name == 'ctg') {
        if (document.querySelector('.type').textContent == 'deg') {
            // В градусах
            input.textContent = parseFloat(1/Math.tan(eval(input.textContent)/180*Math.PI).toFixed(8).toString()); // обрізали лишні нулі
        } else {
            // В радіанах
            input.textContent = 1/Math.tan(eval(input.textContent)).toFixed(8);  // стандартна функція 1/Math.tan() вираховує котангенс
        }}
}