class Animal{
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    run(){
        return 'Running'
    }

    eat(){
        return 'Eating'
    }
    
    sound(){
        return ''
    }
}

class Dog extends Animal{
    constructor(name, age, color, legs){
        super(name, age, color, legs)
    }
    sound(){
        return 'woof woof'
    }
}

class Cat extends Animal{
    constructor(name, age, color, legs){
        super(name, age, color, legs)
    }
    sound(){
        return 'meow meow'
    }
}

const d1 = new Dog('Map', 1, 'Brown', 4)
const c1 = new Cat('Muop', 2, 'Black', 4)

console.log(d1) //Dog { name: 'Map', age: 1, color: 'Brown', legs: 4 }
console.log(d1.sound()) //woof woof
console.log(c1) //Cat { name: 'Muop', age: 2, color: 'Black', legs: 4 }
console.log(c1.sound()) //meow meow