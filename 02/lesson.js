let word = 'trandinhquy'
word[0] = 'q' //Không thể thực hiện được vì đây là kiểu dữ liệu nguyên thủy, nó bất biến
console.log(word[0]) // vẫn là 't'

////////////////
let numOne = 3
let numTwo = 3
console.log(numOne == numTwo)

let js = 'JavaScript'
let py ='Python'

console.log(js == py)

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff)


//array
let nums = [1,2,3]
let numbers = [1,2,3]
console.log(nums == numbers) //false. Bởi vì chúng là kiểu dữ liệu không nguyên thủy nên không thể so sánh theo giá trị được
// Btw, == là so sánh tham chiếu của chúng

nums[0]= 10 // có thể thay đổi được vì mảng là kiểu dữ liệu không nguyên thủy nên có thể thay đổi giá trị các phần tử trong nó
console.log(nums)


let userOne = {name: 'Zeq', role: 'student', country: 'Vietnam'}

let userTwo = {
    name:'Zeq',
    role:'student',
    country:'Vietnam'
}

console.log(userOne == userTwo)

//fix to true
let numss = [1,2,3]
let numberss = numss
console.log(numss == numberss)

let userThree = {
    
    name:'Zeq',
    role:'student',
    country:'Vietnam'
}

let userFour = userThree

console.log(userThree == userFour) //true. vì giờ 2 đối tượng cùng tham chiếu đến 1 đối tượng trong bộ nhớ

//Numbers

let age = 20
const gravity = 9.81
let mass = 72
const PI2 = 3.14

const boilingPoint = 100
const bodyTemp = 37

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)

//math

const PI = Math.PI
console.log(PI)

console.log(Math.round(PI))
console.log(Math.round(9.81))
console.log(Math.floor(PI))
console.log(Math.ceil(PI))
console.log(Math.min(-5,3,20,10,19)) //min is -5
console.log(Math.max(1,2,3,4,5,6,7,8,9,10)) //max is 10
const randNum = Math.random()
console.log(randNum)
const num = Math.floor(Math.random()*11)
console.log(num)
console.log(Math.abs(-10))
console.log(Math.sqrt(25))
console.log(Math.pow(3,2))
console.log(Math.pow(2,Math.E))
console.log(Math.log(2))
console.log(Math.log(Math.E))
console.log(Math.LN10)
console.log(Math.sin(90))
console.log(Math.cos(0))

let randN = Math.random()
let numBtnZeroAndTen = randN*11
console.log(numBtnZeroAndTen)

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)

let space = ' '
let firstName = "ZEQ"
let lastName = `Tran`
let fullNam = firstName+space+lastName
console.log(fullNam)

const paragraph = "My name is Zeq. I live in Quang Tri, VietNam.\
 I am a student and I love study. I'am learning\
 the JavaScript programming language during the Lunar New Year holiday."
// dùng \ để xuống dòng không lỗi trong lúc code. Nhưng khi hiển thị vẫn hiển thị trên 1 dòng nhé!
console.log(paragraph)

console.log('Iam \n Zeq')
console.log('Iam \\ Zeq')
console.log('Iam \t Zeq')
console.log('Iam \' Zeq')
console.log('Iam \" Zeq')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('1\t2\t3')
console.log('day 1\t2\t3')
console.log('12345678\t9')

console.log(`The sum of 2 and 3 is 5`)
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a+b}`)

let c = 2
let d = 3
console.log(`${c} is greater than ${d}: ${c > d}`)

let JS = 'JavaScript'
console.log(JS.length)  // 10
console.log(JS.at(3))   // a

let string = 'Learn JavaScript in 30 Days, JavaScript is not easy but you can.'
console.log(string.repeat(10))
console.log(string.match(/Javascript/gi))
console.log(string.match('in'))
console.log(string.search(/java/gi)) //cũng là tìm nhưng dùng Regular Expressions 'g': Tìm tất cả các lần khớp (global). 'i': Không phân biệt hoa/thường (case-insensitive). 'm': Xem xét nhiều dòng (multiline).
console.log(string.search('Java')) //tìm chuỗi 'Java' trong string và trả về vị trí bắt đầu
console.log(string.endsWith('can.')) //check boolean chuỗi string có két thúc bằng 'can.' hay không
console.log(string.startsWith('Learn')) //check boolean chuỗi string có bắt đầu bằng 'Learn' hay không
console.log(string.concat(" I belive you")) //nối chuỗi truyền vào đuôi của 'string'
console.log(string.lastIndexOf('Java')) //return vị trí bắt đầu của 'Java' là 29 tìm thấy cuối cùng
console.log(string.indexOf('Java')) //return vị trí bắt đầu của 'Java' là 6 tìm thấy đầu tiên
console.log(string.charCodeAt(0)) //return mã ASCII của L là 76
console.log(string.charAt(0)) // L
console.log(string.replace(' ',"123"))
console.log(string.includes('Learn')) // tìm trong chuỗi có tồn tại chuỗi con truyền vào hay không (true/false)
console.log(string.split('')) //Tách chuỗi theo kí tự chỉ định
console.log(string.substring(0,4))
console.log(string.substr(5,3))
console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(string.toLocaleLowerCase())

let firstLetter = string[0]
console.log(firstLetter)
console.log(string.lastIndexOf('t')) // 9
console.log(string[string.length-1]) // in ra kí tự cuối cùng của chuỗi

let txt = '0.5 0,5 3A.In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
console.log(txt.match(/\d+/g)) //['0','5','0','5','3','2019','30', '2020' ]

console.log(typeof 'okok') //string
console.log(typeof 10) //number
console.log(typeof 9.9) //number
console.log(typeof true) //boolean
console.log(typeof NaN) //number
console.log(typeof null) //object
console.log(typeof undefined) //undefined

let n = '10'
console.log(parseFloat(n))
let nIntp = parseInt(n)
let nIntn = Number(n)
let nIntplus = +n
console.log(nIntplus)

let nF = '9.81'
console.log(parseInt(nF))
console.log(Number(nF))
console.log(parseFloat(nF))
console.log(+nF)

console.log(10.0) //10 int hay float đều thuộc type: number

