//callback

const callback = (n) => {
    return n**2
}
function cube(callback, n){
    return callback(n)*n
}
console.log(cube(callback, 3)) //27

//returning function
const higherOrder =  n => { //n = 2
    const doSomething = m =>{ //m = 3
        const doWhatEver = t =>{ //t = 10
            return 2*n +3 *m + t  //2*2 + 3*3 + 10 
        }
        return doWhatEver //23
    }
    return doSomething //23
}

console.log(higherOrder(2)(3)(10)) //23


const number = [1,2,3,4,5]
const sumArray = arr =>{
    let sum = 0
    let callback = function(element){{
        sum +=element
    }}
    arr.forEach(callback)
    return sum
}

console.log(sumArray(number))

const sumArr = arr =>{
    let sum = 0
    arr.forEach(function(element){
        sum += element
    })
    return sum
}

//setting time
function sayHello(){
    console.log('Hello')
}
setInterval(sayHello, 1000) //cứ mỗi 1000ms thì gọi sayHello(), không dừng
setInterval(sayHello, 5000) //cứ mỗi 5000ms thì gọi sayHello(), không dừng

setTimeout(sayHello, 1000) //đếm ngược 1s xong thì gọi sayHello(), kết thúc
setTimeout(sayHello, 5000) //đếm ngược 5s xong thì gọi sayHello(), kết thúc

//functional programing 
const arr = [1,2,3,4,5]
arr.forEach(function(element, index, arr){
    console.log(index, element, arr)
})
// 0 1 [ 1, 2, 3, 4, 5 ]
// 1 2 [ 1, 2, 3, 4, 5 ]
// 2 3 [ 1, 2, 3, 4, 5 ]
// 3 4 [ 1, 2, 3, 4, 5 ]
// 4 5 [ 1, 2, 3, 4, 5 ]

arr.forEach((element, index, arr)=>{
    console.log(index, element, arr)
})

arr.forEach((element, index, arr) => console.log(index, element, arr))

let sum = 0
const numbers = [1,2,3,4,5]
numbers.forEach(num => console.log(num))
numbers.forEach(num => sum+=num)
console.log(sum) //15

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((E) => console.log(E.toUpperCase()))


const arr2 = [1,2,3,4,5]
const modifiedArray = arr2.map(function(e, index, arr){
    return e
})
console.log(modifiedArray)

const numbers2 = [1, 2, 3, 4, 5]
const numbersSquare = numbers2.map((num) => num*num)
console.log(numbersSquare) //[ 1, 4, 9, 16, 25 ]

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesUpperCase = names.map(e => e.toUpperCase())
console.log(namesUpperCase)


const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

const countriesFirstThreeLetters = countries.map((country) => country.toUpperCase().slice(0, 3))
console.log(countriesFirstThreeLetters)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  


const countriesContainingLand = countries.filter(country => country.includes('land'))
console.log(countriesContainingLand) //[ 'Finland', 'Ireland' ]

const countriesHaveFiveLetter = countries.filter(country => country.length === 5)
console.log(countriesHaveFiveLetter) //[ 'Japan', 'Kenya' ]

const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]

const scoreGreaterEighty = scores.filter(score => score.score> 80)
console.log(scoreGreaterEighty)
// [{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]

const numbers3 = [1,2,3,4,5]
const sum = numbers3.reduce((acc, cur) => acc+cur, 0) //reduce gồm 3 tham số (accumulator: tích lũy giữ kết quả từ lần lặp trước, current: giá trị hiện tại, initialValue: giá trị khởi tạo ban đầu cho accumulator) vì nó cũng duyệt qua từng mảng
console.log(sum) //15 

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every(n => typeof n === 'string') //every: kiểm tra tất cả phần tử có giống nhau theo một aspect không: boolean
console.log(areAllStr) //true

const bools = [true, true, true, true]
const areAllTrue = bools.every(b => b === true)
console.log(areAllTrue) //true

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find(age => age< 20) //find: trả về phần tử đầu tiên thỏa mãn điều kiện
console.log(age) //18

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names.find(n => n.length>7)
console.log(result) //trả về phần tử ĐẦU TIÊN thỏa mãn điều kiện

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
] 
const s = scores.find(u => u.score > 80)
console.log(s) //{ name: 'Asabeneh', score: 95 }

const s2 = scores.findIndex(u => u.score >80) //trả về vị trí phần tử thỏa mãn điều kiện
console.log(s2) //0

const a = [1,2,3, 'a', 'b']
const as = a.some(e => typeof e === 'number') //kiểm trả nếu có ít nhất 1 phần tử thỏa mãn điều kiện
console.log(as) ///true 


const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) //[ 'Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar' ]

console.log(numbers5.sort()) //[ 100, 3.14, 37, 9.81 ] it's not good
const numbers5 = [9.81, 3.14, 100, 37]
numbers5.sort((a,b) => a-b)
console.log(numbers5) //[ 3.14, 9.81, 37, 100 ]

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
users.sort((a,b) => {
    if(a.age < b.age) return 1
    if(a.age > b.age) return -1
    return 0
})
console.log(users)