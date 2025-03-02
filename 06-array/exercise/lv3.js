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



const countries2word = []
for (c of countries){
    if (c.includes(' '))
        countries2word.push(c)
}
console.log(countries2word)

//--------------------
for (c of countries){
    if (c.length == 4){
        countrymax = c
    }
}
console.log(countrymax)

//--------------------
let max = 0
let countrymax = ''
for (c of countries){
    if (max<c.length){
        max = c.length
        countrymax = c
    }
}
console.log(countrymax)

//--------------------

const landCountries = []
for(x of countries){
        if(x.includes('land')){
            landCountries.push(x)

        }
    }

console.log(landCountries)
//--------------------

const countries2 = []
for(country of countries){
    countries2.push(country)
}
const sortedCountries = countries2.sort()
console.log(sortedCountries)

