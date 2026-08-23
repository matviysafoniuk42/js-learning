// document.write("Hello, World!"); 
// console.log("Hello, World!"); 
// console.info("Hello, World!"); 
// console.error("Hello, World!"); 
// console.warn("Hello, World!"); 

// var num; //
// num = 10; //

var num = 10;
num = 20;
console.log("Змінна num дорівнює: " + num + "."); 

const number = 10;
console.log("Змінна number дорівнює: " + number + "."); 

var str;
// str = true; 
// str = false; 
// str = "word"; 

var num_1 = 10;
var num_2 = 20;
var sum = num_1 + num_2;
console.log("Сума чисел: " + sum + ".");

var num_1 = 10;
var num_2 = 20;
var res = num_1 - num_2;
console.log("Різниця чисел: " + res + ".");

var num_1 = 10;
var num_2 = 20;
var res = num_1 * num_2;
console.log("Добуток чисел: " + res + ".");

var num_1 = 10;
var num_2 = 20;
var res = num_1 / num_2;
console.log("Частка чисел: " + res + ".");

var num_3 = 5;
// num_3 += 10; 
// num_3 -= 10; 
// num_3 *= 10; 
// num_3 /= 10; 
// num_3 %= 10; 
// num_3++; Додавання 1 (скорочено) 
// num_3--; Віднімання 1 (скорочено) 
num_3 = num_3 + 10;
console.log("Змінна num_3 дорівнює: " + num_3 + ".");

var str_1 = "12";
// var str_1 = Number("12"); //
var str_2 = "2";
console.log("Результат конкатенації: " + (str_1 + str_2) + ".");

console.log ("Math: " + Math.PI);
console.log ("Math: " + Math.E);
console.log ("Math: " + Math.min(6, 2, 3, 4, 5));
console.log ("Math: " + Math.max(6, 2, 3, 4, 5));

var num_4 = 15;
var isHasHouse = true;

if(num_4 == 5 || isHasHouse == true) { 
    console.log("Ok!");
}

// if(num_4 == 5 &&(2 значення правильні (та)) ||(одне з них (або)) isHasHouse == true) {
//     console.log("Ok!");
// }

if(num_4 > 5) {
    console.log("num_4 більше 5.");
}

if(num_4 != 15) {
    console.log("Помилка! num_4 не дорівнює 15.");
} else if(num_4 < 10) {
    console.log("num_4 менше 10.");
} else if(num_4 == 7) {
    console.log("num_4 дорівнює 7.");
} else if(num_4 >= 15) {
    console.log("num_4 більше або дорівнює 15.");
} else {
    console.log("num_4 дорівнює 15.");
}

// < > <= >= == != 

var stroka = "";
switch(stroka) {
    case "word":
        console.log("Змінна stroka дорівнює: word.");
        break;
    case "hello":
        console.log("Змінна stroka дорівнює: hello.");
        break;
    default:
        console.log("Змінна stroka не дорівнює: word або hello.");
}

// alert("Hello, World!"); 
// confirm("Hello, World!"); 

// var data = confirm("Hello, World!");
// if(data == true) {
//     console.log("Ok!");
// } else {
//     console.log("Cancel!");
// } 

// var data = confirm("Hello, World!");
// if(data == true) {
//     alert("Ok!");
// } else {
//     alert("Cancel!");
// } 

// var data = prompt("Hello, World!");
// console.log("Введено: " + data);

// var person = null;
// if(confirm("Ви хочете ввести дані?")) {
//     person = prompt("Введіть дані:");
//     alert("Введено: " + person);
// }
// else {
//   alert("Ви не ввели дані.");
// }

function info() {
    console.log("Hello, World");
    console.log("!");
}

info();
// можна викликати функцію кілька разів