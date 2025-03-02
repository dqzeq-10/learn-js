let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = false
let trueValue = 4 > 3 //true
let falseValue = 4 < 3 //false

let firstName
console.log(firstName)

let empty = null
console.log(empty)

let firstNamee = 'Zeq' // =
let x,y
x +=y // += : x=x+y
x -=y // -= : x=x-y
x *=y // *= : x=x*y
x /=y // /= : x=x/y
x %=y // %= : x=x%y
x **=y // **= : x=x**y
let a = 2 
a **= 2
console.log(a) // 2^2: 4

console.log(true == '1') //true: so sánh giá trị (tự động ép kiểu để về chung 1 kiểu)
console.log(10 === '10') //false: so sánh giá trị và kiểu dữ liệu (rcm)

console.log('1a' == '1a') //true
console.log('1a' === '1a') //true

console.log(undefined == null) //true
console.log(undefined === null) //false vì khác kiểu dữ liệu


console.log(NaN == NaN) //false vì NaN không bằng bất kỳ giá trị nào, kể cả chính nó
console.log(NaN === NaN) //false vì NaN không bằng bất kỳ giá trị nào, kể cả chính nó
console.log(typeof NaN) //kieu du lieu: number

console.log('mango'.length == 'avocado'.length) //false
console.log('mango'.length < 'avocado'.length) //true


let demT = 0
console.log(++demT) //1
console.log(demT) //1

let demTT = 0
console.log(--demT) //-1
console.log(demT) //-1

let demS = 0
console.log(demS++) //0 (c)
console.log(demS) //1 

let demST = 0
console.log(demS--) //0 (c)
console.log(demS) //-1 

//(a?x:y) if a == true then return x, else return y
10>1 ? console.log(true) : console.log(false) //true

alert("Hello DQ") // hộp thông báo

prompt('Nhập n:','number goes here') //hộp input

const agree = confirm("Ok or cancel") //hộp chọn OK hoặc Cancel
console.log(agree)

//Date

const now = new Date()
console.log(now) //2025-01-12T16:10:47.981Z
console.log(now.getFullYear()) //2025
console.log(now.getMonth()) //0 (0-11)
console.log(now.getDate()) //12 date là ngày
console.log(now.getDay())  //0 day là thứ (0->6) sunday: 0
console.log(now.getTime()) //1736698247981 : số giây đã trôi kể từ ngày 1/1/1970 cho đến hiện tại
console.log(now.getTimezoneOffset()) //-420
console.log(now.getUTCDate()) //12

console.log(Date.now()) // số giây đã trôi kể từ ngày 1/1/1970 cho đến hiện tại: thời gian Unix
