let a = 'js'
let b = 10
function letsLearnScope(){
    console.log(a,b)
    if(true){
        let a = 'python'
        let b = 100
        console.log(a,b)
    }
    console.log(a,b)
}

// ============= OBJECT

const person = {} //an empty object
const rectangle = {
    length: 10,
    width: 11
}
console.log( rectangle) //{length: 10, width: 11}
console.log(typeof rectangle) //object

const person2 ={
    firstName: 'Quy', //string
    lastName: 'Tran', //string
    age: 20, //number
    country: 'Vietnam', //string
    city: 'Danang', //string
    skills:[
        'html',
        'css',
        'java',
        'c#',
        'mssql'
    ], //array
    isMarried: false,
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}
//object methods
const copyPerson = Object.assign({}, person2) //sao chep mot doi tuong ma khong lam thay doi doi tuong goc
console.log(copyPerson)

//to get the keys or properties of and object  as an array
const keys = Object.keys(copyPerson) //lay keys or properties cua mot doi tuong duoi dang mot array
console.log(keys) //['firstName','lastName', ...]

//to get values of an objects as an array
const values = Object.values(copyPerson) //lay gia tri cua tung keys or properties cua mot doi tuong duoi dang array
console.log(values) //[  'Quy',  'Tran',  20,  'Vietnam', ...]

//to get the keys and values in an array
const entries = Object.entries(copyPerson) //ket hop Object.keys() and .value() tra ve mang, moi phan tu la mot mang chua keys/properties and values
console.log(entries) //[[ 'firstName', 'Quy' ],[ 'lastName', 'Tran' ],[ 'age', 20 ], ...]

//to check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty('name')) //false: khong ton tai keys 'name' trong copyPerson
console.log(copyPerson.hasOwnProperty('score')) //false
console.log(copyPerson.hasOwnProperty('firstName')) //true



//setting new key for an object
person2.nickname = 'zeq' // add "nickname = 'zeq'" into object 'person2'
person2.quote = 'work hard' //add "quote = 'work hard'" into object 'person2'
person2.skills.push('a little of js')

person2.getPersonInfo = function(){
    let skillsWithOutLastSkill = this.skills.splice(0, this.skills.length -1).join(', ')
    let lastSkill = this.skills.splice(this.skills.length-1)[0]
    
    let skills = `${skillsWithOutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.nickname}. He learn ${skills}`
    return statement
}





console.log(person2.getPersonInfo()) //Quy Tran is a zeq. He learn html, css, java, c#, mssql, and a little of js
console.log(person2)







console.log(person2.getFullName()) //Quy Tran
console.log(person2['country']) //Vietnam
console.log(person2.skills)
console.log(person2.age)
console.log(person2)


