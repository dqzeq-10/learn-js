//Destucturing is a way to unpack array, object and then assigning to distinct variable

const numbers = [1,2,3,4,5]
let [n1, n2, n3, n4, n5] = numbers
console.log(n1) //1
console.log(n2) //2

let [n11,,,,n55] = numbers
console.log(n11) //1
console.log(n55) //5

const names = ['quy', 'zeq', 'dinh', 'tran']

let [fn, sn, tn, ln] = names

console.log(fn) //quy
console.log(tn) //dinh

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
const [e, pi, g, bodyTemp, boilingTemp] = scientificConstants
console.log(e)
console.log(g)
console.log(bodyTemp)
console.log(pi)
console.log(boilingTemp)

const fullStack = ['a', 'b', 'c', 'd', 'e']
let [fe, be] = fullStack
console.log(fe) //a
console.log(be) //b

//default value for undefined
const names2 = [undefined, 'ok2', 'ok3', 'ok4', 'ok5']
let [ok1 = 'okkkk', ok2, ok3, ok4, ok5] = names2

console.log(ok1, ok2, ok3, ok4, ok5)

const numbers1 = [1,2,3,4,5,6,7,8,9,10]
let [num1, num2, num3,...rest] = numbers1
console.log(num1, num2, num3) //1 2 3
console.log(rest) // [4,5,6,7,8,9,10]

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
for (const [country, city] of countries){
    console.log(country, city)
}
//Finland Helsinki
//Sweden Stockholm
//Norway Oslo

const fullStack2 = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']  
]

for (const [f, s, t] of fullStack2){
    console.log(f, s, t)
}
//HTML CSS JS
//Node Express MongoDB


//DESTUCTURING OBJECT 
//khi dùng destructuring cho object thì các biến phải đúng tên theo các properties của object
const rectangle = {
    width: 20, 
    height: 10,
    area: 200
}
let {width, height} = rectangle
console.log(width, height) //20 10

let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter) //20 10 20 undefined

//renaming during structuring, vừa destructuring vừa sửa tên biến!
let {width: w1, height: h1, area: a1, perimeter: p1} = rectangle
console.log(w1,h1,a1, p1) //20 10 200 undefined

//give a default value during declaration
let {width, height, area, perimeter = 60} = rectangle
console.log(width, height, area, perimeter) //20 10 200 60


//object parameter without destructuring: Tham số đối tượng mà không dùng destructuring
const rect = {
    width: 20,
    height: 10
}
const calculatePerimeter = rectangle =>{
    return 2*(rectangle.width + rectangle.height)
}
console.log(calculatePerimeter(rect)) //60


//object parameter with destructuring: Tham số đối tượng bằng destructuring
const rect2 = {
    width: 30,
    height: 15
}
const calculatePerimeterWDestructuring = ({width, height}) => { //({x,y,z})
    return 2*(width+height)
}
console.log(calculatePerimeterWDestructuring(rect2)) //90

//array parameter with destructuring: test thử cũng có áp dụng cho destructuring array
const ns = [1,2,3,4,5]
const s = ([f,s]) => f+s
console.log(s(ns)) //3


const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
]

for (const {task, time, completed} of todoList){
    console.log(task, time, completed)
}
// => lặp các object trong mảng object (destructure thuộc tính của object)


//SPREAD or REST OPERATOR
//destructure an array => use spread operator to get the rest elements as array. OR use spread operator to spread array elements to another array

const nums = [1,2,3,4,5,6,7,8,9,10]
let [numb1, numb2, numb3, ...restt] = nums
let [nu1, ...resttt] = nums
let [...restttt]  = nums
console.log(numb1, numb2, numb3, numb3) //1 2 3 3
console.log(restt) //[4,5,6,7,8,9,10]
console.log(nu1) //1
console.log(resttt) //[2,3,4,5,6,7,8,9,10]
console.log(restttt) //[1,2,3,4,5,6,7,8,9,10]
console.log(restttt[1]) //2
//=>  vận dụng: lấy phần tử, đồng thời bỏ những phần tử không cần !


const evens = [0, 2, 4, 6, 8, 10]
const eN = [...evens]
const odds = [1, 3, 5, 7, 9]
const oN = [...odds]

const wholeN = [...evens, ...odds]

console.log(eN)
console.log(oN)
console.log(wholeN)

//copy object
const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsi'
}
const copiedU = {...user}
console.log(copiedU)

//copy and modifying object 
const copiedAModified = {...user, name: 'zeq'}
console.log(copiedAModified) //copy user và sửa name thành zeq

//spread operator w arrow function
const writeAllNums = (...args) => {
    console.log(args)
}
writeAllNums(1,2,3,4,5,6,7,8,9,10) //[1,2,3,4,5,6,7,8,9,10]
// => change to an array

const sumAllNums = (...ns)  => {
    let sum = 0
    for (const n of ns){
        sum +=n
    }
    return sum
}

console.log(sumAllNums(1,2,3,4,5)) //15