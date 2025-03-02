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
//--------------------

let countrymax = ''
for (c of countries){
    if (c.length == 5){
        countrymax = c
    }
}
console.log(countrymax)