const a = [1,2,3,4,5,6,7]
const b = [3,4,5,6,7,8,9,10]

let A = new Set(a)
let B = new Set(b)

let aub = new Set([...A, ...B])

console.log(aub)

let anb = new Set(a.filter(n => B.has(n)))

console.log(anb)

let awb = new Set(a.filter(n => !B.has(n)))

console.log(awb)

