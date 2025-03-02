
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
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))
console.log(copyPerson.hasOwnProperty('firstName'))