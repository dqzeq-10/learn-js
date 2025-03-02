const dog = {
    name: 'm',
    legs: 4,
    color: 'brown',
    age: 1,
    bark: function () {
        return 'woof woof'
    }
}

console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark()) //woof woof

dog.breed = 'Vietnam'
dog.getDogInfo = function(){
    return `Dog's name is ${this.name}, color is ${this.color}`
}

console.log(dog)
console.log(dog.getDogInfo())
