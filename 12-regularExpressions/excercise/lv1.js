const txt1 = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const arrStrIncome = txt1.match(/\d+/g)
const arrNumIncome = arrStrIncome.map(n => parseInt(n))
console.log(arrNumIncome[0]*12+arrNumIncome[1]+arrNumIncome[2]*12)


const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']

const p = points.map(Number).sort((a,b) => a-b)
console.log(p)
const distance  = p[p.length-1] - p[0]
console.log(distance)

function is_valid_variable(variable){
    const pattern = /^[A-Za-z_][A-Za-z0-9_$]*$/
    return pattern.test(variable)
}
console.log(is_valid_variable('first_name') )
console.log(is_valid_variable('first-name') )
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname') )