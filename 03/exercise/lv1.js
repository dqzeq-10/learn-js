//1
let firstName = 'Zeq'
let lastName = 'Tran'
let country = 'Vietnam'
let age = '20'
let isMarried = false
let year = 2025

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

//2
console.log(typeof 10) //number
console.log(typeof '10') //string

//3
console.log(parseInt('9,8') == 10) //false

//4
console.log(true)
console.log(1>0)
console.log(10 == '10')

console.log(false)
console.log(4<3)
console.log(10 === '10')

//5
4 > 3 //true
4 >= 3 // true
4 < 3 //false
4 <= 3 // false
4 == 4 // true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' //false
4 == '4' //true
4 === '4' //false

console.log('python'.length)
console.log('biệt ngữ'.length)
console.log('python' >= 'biệt ngữ') //true

console.log('Baadifhkdsff'>'Aojf') //true do so sánh mã ascii của kí tự đầu tiên của 2 chuỗi

//6

// 4 > 3 && 10 < 12 true
// 4 > 3 && 10 > 12 false
// 4 > 3 || 10 < 12 true
// 4 > 3 || 10 > 12 true
// !(4 > 3) false
// !(4 < 3) true
// !(false) true
// !(4 > 3 && 10 < 12) false
// !(4 > 3 && 10 > 12) true
// !(4 === '4') true
// Không có 'on' trong cả 2 từ dragon và python: false

//7

let now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())

