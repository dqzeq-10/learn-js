let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let text2 = text.replaceAll('.', '')
let text3 = text2.replaceAll(',', '')
const a3 = text3.split(' ')
console.log(a3)
console.log(a3.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat') //them 'Meat' vao dau mang
shoppingCart.push('Sugar') //them 'Sugar' vao cuoi mang
shoppingCart.splice(shoppingCart.indexOf('Honey'),1) //xoa 'Honey' khoi mang
shoppingCart[(shoppingCart.indexOf('Tea'))] = 'Green Tea' //thay doi 'Tea' thanh 'Green Tea'
console.log(shoppingCart)

if(countries.indexOf('Ethiopia')!=-1)
    console.log(countries[countries.indexOf('Ethiopia')].toUpperCase())
else
    countries.push('Ethiopia')

if(webTechs.indexOf('Sass')!=-1)
    console.log(`${webTechs[webTechs.indexOf('Sass')]} is a CSS preprocess`)
else{
    webTechs.push('Sass')
    console.log(webTechs)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)