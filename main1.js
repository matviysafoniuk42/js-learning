class Human {
    isHuman = true
}

class Person extends Human {
    constructor(name, age) {
        super()
        this.name = name ?? 'undefined name'
        this.age = age ?? 'undefined age'
    }

    sayHello() {
        console.log('Hello from', this.name)
    }
}

const person1 = new Person('Matviy', 15)

// person1.sayHello()

console.log(person1)




