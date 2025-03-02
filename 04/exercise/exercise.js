let age = prompt('Enter your age:')
if (age > 18) {
    console.log('You are old enough to drive')
} else {
    console.log(`You are left with ${18 - age} years to drive`)
}


let yourAge = prompt('Enter your age:')
let myAge = prompt('Enter my age:')
if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me`)
} else {
    console.log(`You are ${myAge - yourAge} years younger than me`)
}

let a = 4
let b = 3
if (a > b)
    console.log(`${a} is greater than ${b}`)
else
    console.log(`${b} is greater than ${a}`)

a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`)

let number = prompt('Enter a number:')
if (number % 2 == 0) {
    console.log(`${number} is an even number`)
} else {
    console.log(`${number} is an odd number`)
}

//lv2
let score = prompt('Enter your score')
if (score >= 0 && score <= 49) {
    console.log("F")
} else if (score >= 50 && score <= 59) {
    console.log("D")

} else if (score >= 60 && score <= 69) {
    console.log("C")

} else if (score >= 70 && score <= 79) {
    console.log("B")

} else if (score >= 80 && score <= 100) {
    console.log("A")
}


let Month = prompt('Enter the month')
if (Month === 'September' || Month === 'October' || Month === 'November') {
    console.log('the season is Autum')
}
else if (Month === 'December' || Month === 'January' || Month === 'February') {
    console.log('the season is Winter')
}
else if (Month === 'March' || Month === 'April' || Month === 'May') {
    console.log('the season is Spring')
}
else if (Month === 'June' || Month === 'July' || Month === 'August') {
    console.log('the season is Summer')
}

let now = new Date()
let day = ''

switch (now.getDay()) {
    case 0:
        day = 'Sunday'
        break;
    case 1:
        day = 'Monday'
        break;
    case 2:
        day = 'Tuesday'
        break;
    case 3:
        day = 'Wednesday'
        break;
    case 4:
        day = 'Thursday'
        break;
    case 5:
        day = 'Friday'
        break;
    case 6:
        day = 'Saturday'
        break;

    default:
        day = 'Not a day'
        break;
}
console.log(`What is the day? ${day}\n ${day==='Sunday'?`${day} is a weekend day`: `${day} is a working day`}`)


//lv3

let Month2 = prompt('Enter a month:')
switch (+Month2) {
    case 1,3,5,7,8,10,12:
        console.log(`Thang ${Month2} co 31 ngay`)
        break;
    case 4,6,9,11:
        console.log(`Thang ${Month2} co 30 ngay`)
        break;
    case 2:
        console.log(`Thang ${Month2} co 28 ngay`)
        break;

    default:
        console.log("Chua nhap thang!")
        break;
}

let MonthYear = prompt("Enter month and year (MM/yyyy)")
let [Month3,Year3]= MonthYear.split('/').map(Number)
console.log(`Thang ${Month3} co ${new Date(Year3, Month3,0).getDate()} ngay, nam ${Year3} la nam ${Year3%4==0?'nhuan':'khong nhuan'} `)
//:)) hoc bai ve conditional ma lam bai theo trick lord;))