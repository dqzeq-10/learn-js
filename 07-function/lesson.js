function square(){
    return 10
}

console.log(square())
//function with 1 parameter
function areaOfCircle(r){
    let area = Math.PI * r *r
    return area
}

console.log(areaOfCircle(10))

//function with 2 parameters
function sumTwoNumber(a, b){
    return a*b
}
console.log(sumTwoNumber(5,5))


//function with many parameters
function sumArrayValues(a){
    let sum  = 0
    for(let i = 0; i< a.length; i++){
        sum += a[i]
    }
    return sum;
}

console.log(sumArrayValues([1,2,3,4,5]))

const numbers = [1,2,3,4,5]
console.log(sumArrayValues(numbers))

function sumThreeNumber(a,b,c){
    return a+b+c
}

console.log(sumThreeNumber(1,2,3))

const a = (a) =>{
    return a
}
console.log(a(100000))


//Nếu muốn dùng 'không giới hạn tham số truyền vào hàm ở hàm thông thường thì dùng tới arguments:
//arguments (đối tượng giống mảng) array-like-object nhưng k dùng đc các method của mảng hỗ trợ
function summAllNums(){
    console.log(arguments)
}
summAllNums(1,2,3,4,5)

function sumAllNums2(){
    let sum = 0
    for (let i = 0; i< arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums2(1,2,3,4,5))


//Không giới hạn số lượng tham số trong Arrow function (hàm mũi tên)

const sumAllNums3 = (...args) => {
    console.log(args)
}

sumAllNums3(1,2,3,4) //[1,2,3,4]

const sumAllNums4 = (...args) =>{
    let sum = 0
    for(let i = 0; i< args.length; i++){
        sum += args[i]
    }
    return sum
}
console.log(sumAllNums4(1,2,3,4,5,5)) //20


// hàm ẩn danh là hàm k cần đặt tên

const anonymousFun = function(){
    console.log('I am an anonymos function and my value is stored in anonymosFun')
}
anonymousFun() //I am an anonymos function and my value is stored in anonymosFun

const anonymousFun2 = () =>{
    console.log('rut gon ham an danh bang arrow function:))')
}
anonymousFun2()

// hàm biểu thức: hàm ẩn danh là hàm biểu thức (nếu k có tên hàm)
const square = function(n){
    return n*n
}
console.log(square(2)) //4


//hàm tự gọi: chắc là định nghĩa hàm xong truyền tham số vô gọi luôn. mục đích là để tránh làm ô nhiễm phạm vi toàn cục và tạo ra một phạm vị cục bộ cho các biến và hàm
(function(n){
    console.log(n*n)
})(2) //4

((n) =>{
    console.log(n*n)
})(10) //100

let squareNum = (function(n){
    return n*n
})(10)
console.log(squareNum) //100


//Arrow function: hàm mũi tên hàm rút gọn

const square = n =>{
    return n *n
}
console.log(square(2)) //4

const square = n => n*n
console.log(square(2)) //4


const changeToUpperCase = arr =>{
    const newArr = []
    for (const e of arr){
        newArr.push(e.toUpperCase())
    }
    return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']

console.log(changeToUpperCase(countries)) // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

const printFullName = (fn, ln) =>{
    return `${fn} ${ln}`
}
console.log(printFullName('zeq', 'tran'))

const printFullName2 = (fn, ln) => `${fn} ${ln}`
console.log(printFullName2('quy', 'tran'))

//Hàm với thông số mặc định: đôi khi chúng ta không truyền đối số thì giá trị mặc định sẽ được sử dụng
function greetings (name = 'Zeq'){
    return `${name}, welcome to 30 days of javascript!`
}
console.log(greetings()) //Zeq, welcome to 30 days of javascript!
console.log(greetings('Quy')) //Quy, welcome to 30 days of javascript!


function calculateAge(birthYear, currentYear = 2025){
    return currentYear - birthYear
}
console.log(calculateAge(2004, 2030)) //26
console.log(calculateAge(2004))//21  //như vậy, nếu chỉ chuyền birthYear vào vẫn được, currentYear = 2025 sẽ đc dùng



//hàm với đối số có giá trị mặc định + hàm mũi tên
const greetings = (name = 'zeq')=>{
    return `${name}, welcome to 30days of js`
}
console.log(greetings()) //zeq, welcome to 30days of js
console.log(greetings('Quy')) //Quy, welcome to 30days of js

const calculateAge = (birthYear, currentYear = 2025) => currentYear-birthYear
console.log(calculateAge(2004, 2030)) //26
console.log(calculateAge(2004))//21

