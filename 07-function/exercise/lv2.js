function solveLinEquation(a, b, c, x = null, y = null) {
    if (x == null && y == null) {
        return 'just x or y equal null dont neither of them'
    } else {
        if (x == null) {
            return `x = ${(-c - (b * y)) / a}`
        } else {
            return `y = ${(-c - (a * x)) / b}`
        }
    }
}
console.log(solveLinEquation(3, 4, -5, 2))

function solveQuadEquation(a, b, c) {
    if (a == null && b == null && c == null) {
        return `{0}`
    } else {
        let delta = b * b - 4 * a * c
        if (delta > 0) {
            return `{${(-b + Math.sqrt(delta)) / (2 * a)}, ${(-b - Math.sqrt(delta)) / (2 * a)}}`
        } else if (delta == 0) {
            return `${-b / (2 * a)}`
        } else {
            return `{0}`
        }
    }
}
console.log(solveQuadEquation(1, -1, -2))

function printArray(array) {
    for (const element of array) {
        console.log(element)
    }
}
const m = ['a', 1, 2, 10]
printArray(m)

function showDateTime() {
    let date = new Date()
    console.log(`${date.getDate().toString().length < 2 ? '0' + date.getDate().toString() : date.getDate().toString()}/${date.getMonth().toString().length < 2 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours().toString().length < 2 ? '0' + date.getHours().toString() : date.getHours().toString()}:${date.getMinutes().toString().length < 2 ? '0' + date.getMinutes().toString() : date.getMinutes().toString()}`)
}
showDateTime()

function swapValues(x, y) {
    let t = x
    x = y
    y = t
    return [x, y]
}
let a = 1, b = 2
console.log(a, b)
console.log(swapValues(a, b))

function reverseArray(mang) {
    const ngc = []
    for (x of mang) {
        ngc.unshift(x)
    }
    return ngc
}
console.log(reverseArray([1, 2, 3, 4, 5, 6]))
console.log(reverseArray(['a', 'b', 'c', 'd']))

function capitalizeArray(m) {
    const capitalizedArray = []
    for (x of m) {
        capitalizedArray.push(x.toUpperCase())
    }
    return capitalizedArray
}

console.log(capitalizeArray(['a', 'b', 'C']))


function capitalizeArray2(...args) {
    const capitalizedArray = []
    for (x of args) {
        capitalizedArray.push(x.toUpperCase())
    }
    return capitalizedArray
}
console.log(capitalizeArray2('a', 'b'))
console.log(capitalizeArray2('a', 'b', 'c'))

function addItem(arr, p) {
    arr.push(p)
    return arr
}
console.log(addItem(1))

function removeItem(arr, index) {
    arr.splice(index, 1)
    return arr
}
console.log(removeItem([1, 2, 3, 4], 2))

function sumOfNumbers(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}
console.log(sumOfNumbers(10))

function sumOfOdds(n) {
    let sumOdds = 0
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            sumOdds += i
        }
    }
    return sumOdds
}
console.log(sumOfOdds(10))

function sumOfEven(n) {
    let sumEven = 0
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            sumEven += i
        }
    }
    return sumEven
}
console.log(sumOfEven(10))

function evensAndOdds(n) {
    let cE = 0, cO = 0
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            cO++
        } else {
            cE++
        }
    }
    console.log(`The number of odds are ${cO}`)
    console.log(`The number of even are ${cE}`)
}
evensAndOdds(100)

function sum(...args) {
    let sum = 0
    for (x of args) {
        sum += x
    }
    return sum
}
console.log(sum(1, 2, 3, 4, 5))

function randomUserIp() {
    const alpha = '0123456789'
    let ruip = ''
    for (let i = 1; i <= 12; i++) {
        ruip += alpha[Math.floor(Math.random() * 10)]
        if (ruip.length == 3 || ruip.length === 7 || ruip.length == 11){
            ruip+='.'
        }
    }
    return ruip
}
console.log(randomUserIp())

function randomMacAddress(){
    const alpha = '0123456789ABCDEF'
    return `${alpha[Math.floor(Math.random()*16)]}${alpha[Math.floor(Math.random()*16)]}:${alpha[Math.floor(Math.random()*16)]}${alpha[Math.floor(Math.random()*16)]}:${alpha[Math.floor(Math.random()*16)]}${alpha[Math.floor(Math.random()*16)]}:${alpha[Math.floor(Math.random()*16)]}${alpha[Math.floor(Math.random()*16)]}:${alpha[Math.floor(Math.random()*16)]}${alpha[Math.floor(Math.random()*16)]}:${alpha[Math.floor(Math.random()*16)]}${alpha[Math.floor(Math.random()*16)]}`
}
console.log(randomMacAddress())

function randomHexaNumberGenerator(){
    const alpha = '0123456789ABCDEF'
    return `#${alpha[Math.floor(Math.random()*16)]}${alpha[Math.floor(Math.random()*16)]}${alpha[Math.floor(Math.random()*16)]}${alpha[Math.floor(Math.random()*16)]}${alpha[Math.floor(Math.random()*16)]}${alpha[Math.floor(Math.random()*16)]}`
}
console.log(randomHexaNumberGenerator())

function userIdGenerator(){
    const alpha = 'abcdefghimnopqrstuvwxyzABCDEFGHIMNOPQRSTUVWXYZ0123456789'
    let id = ''
    for(let i = 0; i < 7; i++){
        id += alpha[Math.floor(Math.random()*56)]
    }
    return id
}
console.log(userIdGenerator())

