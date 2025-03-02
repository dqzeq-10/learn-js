
let txt1 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salaryMonths = parseFloat(txt1.match(/5000/)[0])
let annualBonus = parseFloat(txt1.match(/10000/)[0])
let onlineCourse = parseFloat(txt1.match(/15000/)[0])
console.log((salaryMonths+onlineCourse)*12+annualBonus)