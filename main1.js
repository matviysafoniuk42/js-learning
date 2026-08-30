class Human {
    isHuman = true
}

class Person extends Human {
    constructor(name, age) {
        super()
        this.name = name ?? 'undefined name'
        this.age = age ?? 'undefined age'
    }
}

const person1 = new Person('Matviy', 15)

// person1.sayHello()

console.log(person1)




let fruits = ["яблуко", "банан", "апельсин"];

console.log(fruits[2]); // перевірити що знаходиться під індексом

console.log(fruits.length); // дізнатися довжину масиву

fruits.push("груша"); // додає елемент

// fruits.unshift("груша"); додає елемент на початок

// fruits.pop(); видаляє останній об'єкт з масиву

// fruits.shift(); видаляє перший об'єкт з масиву

console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
// }

// перебрати масив ^^^

console.log(fruits.includes("банан")); // перевіряє чи є елемент

console.log(fruits.includes("кавун")); // перевіряє чи є елемент

console.log(fruits.indexOf("банан")); // показує індекс елемента