//1
let day = prompt('nhap day')
let cao = prompt('nhap chieu cao')
alert(`dien tich cua tam giac la ${day*cao*0.5}`)

//2
let a = prompt('nhap a')
let b = prompt('nhap b')
let c = prompt('nhap c')
alert(`chu vi cua tam giac la ${a+b+c}`)

//3
let crong = prompt('nhap chieu rong')
let ccao = prompt('nhap chieu cao')
alert(`perrimeter of the rectangle is ${(crong+ccao)*2}`)

//4
let r = prompt('nhap')

//5
let x0 = 0 
let y0 = -2
let x1 = 1
let y1 = 0
console.log(((y1-y0)/(x1-x0)))

//6
console.log(8/4)

//7
//bang nhau

//8 y=0 voi x -3

//9 prompt

//10
'zeq'.length>7 ? console.log('your name is long') : console.log('your name is short')

//11 dk? a:b

//12 console.log

//13 prompt x?alert:alert

//14
let x = 100 //= prompt("nhap")
let noww = new Date()
let yearrX = new Date(noww.getFullYear() - x,noww.getMonth())
let secondX = noww.getTime() - yearrX.getTime()
console.log(secondX)

console.log(100*60*60*24*365) //maybe it's true

//15
let now = new Date()
let yyyy = now.getFullYear()
let MM = now.getMonth()+1
let dd = now.getDate()
let HH = now.getHours()
let mm = now.getMinutes()
console.log(yyyy,'-',MM,'-',dd,' ',HH,':',mm)


