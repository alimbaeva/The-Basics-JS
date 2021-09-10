
// МАССИВЫ

var mas = [1, 2, 3, 'test', true];
console.log(mas)
alert(mas.length); // длина массива
alert(mas[mas.length - 1]); //получаем последний элемент 

// Удаление элементов массива

var deleted = mas.pop();
alert('Вы удалили элемент ' + deleted + '\nВ массиве остались элементы ' + mas);

// удаление по индексу

alert(mas.splice(2, 2)); // удаляем со 2шо элемента и возвращаем удаленный массив

//Добавление элементов

mas.push('777');
alert(mas);

mas[mas.length - 1] = 10; //
alert(mas);

mas[1] = 20;
alert(mas);

mas[4] = null;
console.log(mas);

mas[200] = 1;
console.log(mas);// не корректно 
// преоброзавание строки в массив
var fio = 'Иванов Иван Иванович';
console.log(fio.split(' ')[0]);
var x = fio.split(' ');
alert(x[0]);

var fioAfterParse = x.join('\n'); // присвоить и разделить их '\n' тоесть с новой строкой
alert(fioAfterParse);



// // из текушего массива получаем новый массив
var mas2 = [];
for (var i = 0; i < mas.length; i++) {
    if (i >= 2 && i < 4) {
        mas2.push(mas[i]);
    }
}


//проход по каждой значении

for (var item of mas) {
    console.log(item);
}

var goods = [
    {
        title: 'товар 1',
        price: 100
    },
    {
        title: 'товар 2',
        price: 200
    },
    {
        title: 'товар 3',
        price: 300
    },
];

//Обойти все элементы массива и найти сумму
var s = 0;
for (var item of goods) {
    s += title.price;
    console.log(item.title + 'стоит' + item.price);
}
alert(s);


//-----------------------------------------


// break continue;

var table = '<table border="1" width="700">';
var tr = 1;//счетчик строк
while (tr <= 100) {
    if (tr == 6) {
        break;
    }
    table += '<tr>';
    var td = 1; // счетчик столбцов
    while (td <= 10) {
        table += '<td>' + (tr * td) + '</td>';
        td++;
    }
    table += '</tr>';
    tr++;
}
table += "</table>";
document.write(table);


var table = '<table border="1" width="700">';
var tr = 1;//счетчик строк
while (tr <= 100) {
    if (tr == 6) {
        break;
    }
    table += '<tr>';
    var td = 1; // счетчик столбцов
    while (td <= 10) {
        if (td == 5) {
            td++;
            continue;
        }
        table += '<td>' + (tr * td) + '</td>';
        td++;
    }
    table += '</tr>';
    tr++;
}
table += "</table>";
document.write(table);


var table = '<table border="1" width="700">';
var tr = 1;//счетчик строк
while (tr <= 100) {
    if (tr == 6) {
        break;
    }
    table += '<tr>';
    var td = 1; // счетчик столбцов
    while (td <= 10) {
        var color = td % 2 == 0 ? 'red' : 'blue';
        table += "<td style='color:" + color + ";'>" + (tr * td) + '</td>';
        td++;
    }
    table += '</tr>';
    tr++;
}
table += "</table>";
document.write(table);


//----------------------------------

// РЕККРУЦИЯ - - - ЭТО ФУНКЦИЯ КОТОРОЕ ВЫЗЫВАЕТ САМОГО СЕБЯ

/**
 * 
 * @param {*} n - выводим числа от этого параметра до 0
 */
function showNumbersUnilZerro(n) {
    if (n == 0) {
        return 0;
    }
    console.log(n);
    showNumbersUnilZerro(n - 1);

}

showNumbersUnilZerro(5);

//---------------------------------

//КАНКОТЕНАЦИЯ

var admin, name;
name = 'Василий';
admin = name;
alert(admin);

var a = 1000
var b = "108"
var c = a + b
var x = 1000 + "108"
console.log("Сумма 1000 и '108' равна ", c)
console.log(x)
alert(c)
alert(x)
// а это цифра, b это строка, и идет конкатенация, т.е не арефметическое действие
// а проста склеивание 2х объектов. (108 надо преоброзить на цифру с помощю )
// "+" или parseInt, parseLoat

//-------------------------------------


//ELSE IF
var a = 2;
var b = 3;
alert('a=' + a);
alert('b=' + b);
[a, b] = [b, a];
alert('a=' + a);
alert('b=' + b);

var day = +prompt('Введите номер дня недели');
if (day > 0 && day < 6) {
    alert('Будний день.');
} else if (day == 6 || day == 7) {
    alert('Выходной день');
} else {
    alert('Вы ввели не коректный номер дня недели!')
}


//


var x = 10, check = true;
if (x >= 10) {
    x++;
    if (x < 15) {
        if (!(100)) {
            if (!check) {
                x = 20;
            } else {
                if (10) {
                    x = 1;
                }
                x++;
            }
        }
        if ("") {
            x = 0
        }
        x++
    }

}
alert(x++);

//

var price = prompt('Введите стоимость товара');

if (price >= 1000) {
    price = price * 0.1;
} else if (price >= 500) {
    price = price * 0.05;
}

alert(price);

//-------------------------------



// ФАКТОРИАЛ

// 5 != 1 * 2 * 3 * 4 * 5=5 * 4
// n != n * (n - 1)!;

function fuct(n) {
    if (n == 1 || n == 0) {
        return 1;
    }
    return n * fuct(n - 1);
}

alert(fuct(3));


//--------------------------

//ФУНКЦИЯ
/**
 * функция сумма двух чисел
 * 2 варианта написания
*/
function sum(a = null, b = null) {
    var res = a + b;
    alert(res);
}

sum();

function sum(a, b) {
    return a + b;
    // Оператор return завершает работу функции и присваивает ей значение
}

var res = 2 * sum(2, 3);
alert(res);


/**
 * переопределяет переменную 
*/
var outer = 2;
function sum(a, b) {
    // Переопределяет переменную outer
    outer = 1
    return a + b + outer;
    // Оператор return завершает работу функции и присваивает ей значение
}

var res = 2 * sum(2, 3);
alert(res)
alert(outer);

/** 
 * Функция if else &&
*/


function calc(a, b) {
    if (isEven(a) && isEven(b)) {
        //  если а true четное
        return a + b;
    }
    // if (!isEven(a))
    //  если а False, т.е не  true нечетное
    return a * b;
}


function isEven(n) {
    // if (n % 2 == 0) {
    //     return true;
    // }
    // return false;
    // Можно все это написать 1 строкой
    return n % 2 == 0;

}

alert(calc(2, 3));
alert(calc(2, 8));


//-------------------------------


// Логические операторры ТЕРНАРНЫЕ ? : (IF ELSE)

var year = +prompt('Введите год');
alert(year % 4 == 0 ? "Вы ввели високостный год" : "Год не високостный")
var x = 0;
var y = x < 10 ? (!x ? 1 : 0) : 100;
alert(y);


//-----------------------------------



// infinity бесконечный
while (1) {
    var age = +prompt('Ваш возраст?');
    if (!isNaN(age) && age < 65 && age > 20) {
        alert(' Вам осталось до пенсии ' + (65 - age));
        break;
    }
    alert('Вы ввели некоректное значение. Попробуйте снова');
}


function deposit(money, years) {
    var rate = years > 3 ? 6 : 5;
    for (var i = 1; i <= years; i++) {
        var profit = money * rate / 100; //доход
        money += profit;
        document.write('<h2>Доход за ' + i +
            " год = " + profit.toFixed(2) + ", сумма = " + money.toFixed(2) + "</h2>");

    }
}

var sum = +prompt('Ваша сумма');
var term = +prompt('Срок вклада');
deposit(sum, term);


//----------------

var svetofor = prompt('Какой цвет сейчас горит? (red/green/yellow)');
switch (svetofor) {
    case "red":
        console.log('Стоп');
        break;
    case "green":
        console.log('Вперед');
        break;
    case "yellow":
        console.log('Внимание');
        break;
    default:
        console.log('Поломка цветофора');
}

//---------------------------------


// ТАБЛИЦА

var table = '<table border="1" width="700">';
var tr = 1;//счетчик строк
while (tr <= 100) {
    table += '<tr>';
    var td = 1; // счетчик столбцов
    while (td <= 10) {
        table += '<td>' + (tr * td) + '</td>';
        td++;
    }
    table += '</tr>';
    tr++;
}
table += "</table>";
document.write(table);

//------------------------------------


//  цикл WILE - блок кода который выполняется многократно
// Счетчик цикла - это переменна от которой зависит количество выполнений
// Итерация цикла - один проход по циклу

var i = 1;
while (i <= 5) {
    console.log("Элемент №" + 1);
    i++;
}
console.log(i)

var i = 1, list = '<ul>';
while (i <= 10) {
    list += '<li> Элемент№' + i + '</li>';
    i++;
}
list += '</ul>'
document.write(list);

