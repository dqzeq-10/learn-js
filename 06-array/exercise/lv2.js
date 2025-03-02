let strAlphabet =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let ranID = ''
for(let i = 0; i<= Math.floor(Math.random()*101); i++){
    let id = Math.floor(Math.random()*strAlphabet.length)
    ranID += strAlphabet[id]
}
console.log(ranID)
  //----------------

let strAlphabetHEX = '0123456789abcdef'
let ranHEX = ''
for (let i = 0; i<=5; i++){
    let num = Math.floor(Math.random()*strAlphabetHEX.length)
    ranHEX += strAlphabetHEX[num]
}
console.log(`#${ranHEX}`)
  //----------------

const ranRGB = []
for (let i = 0; i<= 2;i++){
    ranRGB.push(Math.floor(Math.random()*256))
}
console.log(`rgb(${ranRGB.join()})`)
  //----------------

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]



  //----------------

const countries5char = []
for(const country of countries){
    if (country.length == 5){
        countries5char.push(country)
    }
}
console.log(countries5char)



  //----------------
  let BNOCC = ''

let maxx = 0
for(const country of countries){
    maxx = countries[0].length
    if (maxx < country.length){
        maxx = country.length
        BNOCC = country
    }
}
console.log(BNOCC)


  //----------------

const iaCountries = []
for (const country of countries){
    if(country.endsWith('ia')){
        iaCountries.push(country)
    }
}
if(iaCountries.length!=0){
    console.log(iaCountries)
}else{
    console.log('These countries are ends without ia')
}


  //----------------

const landCountries = []
for (const country of countries){
    if(country.includes('land')){
        landCountries.push(country)
    }
}
if(landCountries.length!=0){
    console.log(landCountries)
}else{
    console.log('All these countries are without land')
}



  //----------------

const newArrCountries = [] 
for(const country of countries){
    newArrCountries.push(country.toUpperCase())
}
console.log(newArrCountries)

const newArrCountriesLength = [] 
for(const country of countries){
    newArrCountriesLength.push(country.length)
}
console.log(newArrCountriesLength)




  //----------------

const newArrCountries6 = [] 

for(const country of countries){
    newArrCountries6.push(country,(country.slice(0,3).toUpperCase()),country.length)
}
console.log(newArrCountries6)

  //----------------
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]




  
    //----------------

const webTechs2 =[]
  for(const wt of webTechs){
    const wtcon = [wt, wt.length]
    webTechs2.push(wtcon)
  }
  console.log(webTechs2)



const mernStack = ['MongoDB', 'Express', 'React', 'Node']

const standForMernStack = []
for(x of mernStack){
  standForMernStack.push(x.slice(0,1))
}
console.log(standForMernStack.join(''))

const webs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for(let i = 0; i<= webs.length; i++){
  console.log(webs[i])
}

//dao nguoc mang bang 1 mang moi
const fruits = ['banana', 'orange', 'mango', 'lemon']
const reverseFruit = []
for(let i = fruits.length-1; i>= 0; i--){
  reverseFruit.push(fruits[i])
}
console.log(reverseFruit)

//dao nguoc mang bang bien trung gian
const fruits = ['banana', 'orange', 'mango', 'lemon']
for(let i = 0; i < Math.floor(fruits.length/2); i++){
  const tmp = fruits[i]
  fruits[i] = fruits[fruits.length-1-i]
  fruits[fruits.length-1-i] = tmp
}
console.log(fruits)

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for(f1 of fullStack){
  for(f2 of f1){
    console.log(f2)
  }
}