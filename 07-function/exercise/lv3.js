function userIdGenerator() {
    x = prompt('the number of characters')
    y = prompt('the number of ids')
    const alpha = 'abcdefghimnopqrstuvwxyzABCDEFGHIMNOPQRSTUVWXYZ0123456789'
    const m = []

    for (let j = 0; j < y; j++) {
        let id = ''
        for (let i = 0; i < x; i++) {
            id += alpha[Math.floor(Math.random() * alpha.length)]
        }
        m.push(id)
    }

    return m.join('\n')
}
console.log(userIdGenerator())

function rgbColorGenerator() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}
console.log(rgbColorGenerator())

function arrayOfHexaColor(n) {
    const hexa = []
    const alpha = '0123456789ABCDEF'
    for (let i = 0; i < n; i++) {
        let h = ''
        for (let j = 0; j < 6; j++) {
            h += alpha[Math.floor(Math.random() * alpha.length)]
        }
        hexa.push(h)
    }
    return hexa
}
console.log(arrayOfHexaColor(3))

function arrayOfRgbColor(n) {
    const hexa = []
    for (let i = 0; i < n; i++) {
        let h = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`

        hexa.push(h)
    }
    return hexa
}
console.log(arrayOfRgbColor(3))


function convertHexaToRgb(hexaColor) {
    function convertCharToNumber(c) {
        switch (c) {
            case 'a':
                return 10
            case 'b':
                return 11
            case 'c':
                return 12
            case 'd':
                return 13
            case 'e':
                return 14
            case 'f':
                return 15
            default:
                return parseInt(c)
        }
    }
    let n1 = convertCharToNumber(hexaColor[1])
    let n2 = convertCharToNumber(hexaColor[2])
    let n3 = convertCharToNumber(hexaColor[3])
    let n4 = convertCharToNumber(hexaColor[4])
    let n5 = convertCharToNumber(hexaColor[5])
    let n6 = convertCharToNumber(hexaColor[6])

    let r1 = n1 * 16 + n2
    let r2 = n3 * 16 + n4
    let r3 = n5 * 16 + n6

    return `rgb(${r1},${r2},${r3})`

}
console.log(convertHexaToRgb('#1d77dd'))

function convertRgbtoHexa(rgbColor) {
    function convertNumberToChar(n) {
        switch (n) {
            case 10:
                return 'a'
            case 11:
                return 'b'
            case 12:
                return 'c'
            case 13:
                return 'd'
            case 14:
                return 'e'
            case 15:
                return 'f'
            default:
                return parseInt(n)

        }
    }
    const m = rgbColor.match(/\d+/g)
    let hexa = '#'
    for (x of m) {
        hexa += convertNumberToChar(Math.floor(x / 16))
        hexa += convertNumberToChar(x % 16)
    }
    return hexa
}
console.log(convertRgbtoHexa('rgb(29, 119, 221)'))

function generateColors(format, size) {
    let result = []
    for (let i = 0; i < size; i++) {
        if (format == 'rgb') {
            result.push(`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`)
        } else if (format == 'hexa') {
            result.push(`#${(Math.floor(Math.random() * 16)).toString(16)}${(Math.floor(Math.random() * 16)).toString(16)}${(Math.floor(Math.random() * 16)).toString(16)}${(Math.floor(Math.random() * 16)).toString(16)}${(Math.floor(Math.random() * 16)).toString(16)}${(Math.floor(Math.random() * 16)).toString(16)}`)
        }
    }
    return result
}
console.log(generateColors('hexa', 3))

function shuffleArray(array) {
    let tmp
    for (let i = 0; i < (array.length / 2); i++) {
        let ran1 = Math.floor(Math.random() * (array.length - 1))
        let ran2 = Math.floor(Math.random() * (array.length - 1))
        tmp = array[ran1]
        array[ran1] = array[ran2]
        array[ran2] = tmp
    }
    return array
}
console.log(shuffleArray(['a', 'b', 'c', 'd', 'e', 'd', 'e', 'f']))

function factorial(n) {
    let factory = 1
    if (n == 0 || n == 1) {
        return n
    } else {
        for (let i = 2; i <= n; i++) {
            factory *= i
        }
    }
    return factory
}
console.log(factorial(5))


function isEmpty(s) {
    if (s == null || s == undefined) {
        return true
    }
    if (typeof s === 'string' && s.trim() === '')
        return true
    if (Array.isArray(s) && s.length === 0) {
        return true
    }
    if (typeof s === 'object' && Object.keys(s).length === 0) {
        return true
    }
    return false
}
console.log(typeof isEmpty('') === 'boolean')

function sum(...n) {
    let sum = 0
    for (x of n) {
        sum += x
    }
    return sum
}
console.log(sum(1, 2, 3, 4, 65))

function sumOfArrayItems(arr) {
    let sum = 0
    for (x of arr) {
        sum += x
    }
    return sum
}
console.log(sumOfArrayItems([1, 2, 3, 4, 5]))

function average(arr) {
    let aver = 0
    for (x of arr) {
        if (typeof x != 'number') {
            console.log('all the array item are not number types')
            return
        }
        aver += x
    }
    return aver / arr.length
}
console.log(average([7, 8, 'b']))

function modifyArray(arr) {
    if (arr.length < 5) {
        return 'Not found'
    } else {
        arr[4] = arr[4].toUpperCase()
    }
    return arr
}
console.log(modifyArray(['a', 'b', 'c', 'd', 'e']))
console.log(modifyArray(['a', 'b', 'c', 'd', 'e', 'f']))
console.log(modifyArray(['a', 'b', 'c', 'd']))


function isPrime(n) {
    if (n < 2)
        return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(7))

function checkItemUniqueArray(arr) {
    for (let x of arr) {
        if (arr.indexOf(x) !== arr.lastIndexOf(x)) {
            return false
        }
    }
    return true
}
console.log(checkItemUniqueArray([1, 2, 3, 4, 5, 6]))
console.log(checkItemUniqueArray([1, 2, 3, 4, 5, 5]))
console.log(checkItemUniqueArray([1, 2, 3, 4, 5, 6, 'a', 'b', 'a']))
console.log(checkItemUniqueArray([1, 2, 3, 4, 5, 6, 'a', 'b', 'c']))

function checkSameDataType(arr) {
    if (arr.length === 0)
        return true
    for (let x of arr) {
        if (typeof arr[0] !== typeof x)
            return false
    }
    return true
}
console.log(checkSameDataType([1, 2, 3, 4, 5]))
console.log(checkSameDataType([1, 2, 3, 4, 5, 'a']))
console.log(checkSameDataType(['a', 'b', 'b']))
console.log(checkSameDataType(['a', 'b', 'b', 10]))

function checkValidVariable(v) {
    const regex = /^[a-zA-Z$][a-zA-Z0-9$_]*$/;
    return regex.test(v);
}
console.log(checkValidVariable('0abc'))

function sevenRandomNumbers() {
    const arr = []
    for (let i = 0; i < 7; i++) {
        let rand = Math.floor(Math.random() * 11)
        if (!arr.includes(rand)) {
            arr.push(rand)
        }
    }
    return arr

}
console.log(sevenRandomNumbers())

function reverseCountries(countries){
    const revarr  = countries
    return revarr.reverse()
}
console.log(reverseCountries(['a', 'b', 'c']))