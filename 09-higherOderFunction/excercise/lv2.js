  const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]



//2
const sumP = (sum, p) =>{
  if (typeof p.price === 'number'){
    return sum + p.price
  }else{
    return sum
  }
}
console.log(products.reduce(sumP, 0))


//1
console.log(products.filter(e => typeof e.price === 'number').map(p => p.price).reduce((sum, pp) => sum+pp, 0))       

const checkHavePrice = (e) => typeof e.price === 'number'
const mapPrice = p => p.price
const reduceSum = (sum, p) => sum+p
console.log(products.filter(checkHavePrice)
.map(mapPrice)
.reduce(reduceSum, 0))


const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]


//7
const ex7 = arrCountries => {
  const icount = arrCountries
                    .map(c => c[0])
                    .reduce((acc, letter) =>{
                      acc[letter] = (acc[letter] || 0) +1
                      return acc
                    }, {})

  const maxcount = Math.max(...Object.values(icount))
  const msl = Object.entries(icount)
                    .filter(([letter, count]) => count === maxcount)
                    .map(([letter]) => letter)
  return {msl, maxcount}

}

console.log(ex7(countries))


//6
function getLastTenCountries(arrCountries){
  return arrCountries.slice(arrCountries.length - 10, arrCountries.length).map(e => e)
}
console.log(getLastTenCountries(countries))



//5 
function getFirstTenCountries(arrCountries){
  return arrCountries.slice(0,10).map( e=> e)
}
console.log(getFirstTenCountries(countries))



// const a = {}
// for(let i = 0; i<=5; i++){
//   // a['ok'] += i
//   console.log(i)
// }
// console.log(a)

// let lF = 'A'
// const b  = [
//   {letter: 'K', count: 1 },
//   {letter: 'L', count: 1 }
// ]
// console.log(b)
// let c = b.find(e => e.letter === lF)
// if (c!= null){
//   c.count += 1
// }else{
  
//   b.push({letter: lF, count: 1})
// }
// console.log(c)
// console.log(b)



//4
function countLetterCountries(arrCountries){
  const arrObj = []
  arrCountries.forEach(e => {
    let letterS = e[0], obj = {}
    const eObj = arrObj.find(e => e.letter === letterS)
    if (eObj != null){
      eObj.count +=1
    }else
    {
      obj['letter'] = letterS
      obj['count'] = 1
      arrObj.push(obj)
    } 
  })
  return arrObj
}

console.log(countLetterCountries(countries))


//đếm số lần chữ cái đầu tiên của tên quốc gia lặp lại: Vietnam : {V, 1}
function countLetter(arrCountries){
  return arrCountries.map(e =>{
    let obj  = {}, letter = e[0], count = 1
    e.split("").forEach(le => {
      if (le === letter){
        count++
      }
    })
    obj.letterStart = letter
    obj.countLetter = count
    return obj
  })
}

console.log(countLetter(countries))

//3
function categorizeCountries(arrCountries, strFind){
 return arrCountries.filter(e => e.includes(strFind))
}
console.log(categorizeCountries(countries, 'ia'))

let s = '1234435sdfdfasd'
console.log(s.split(""))
s.split("").forEach(e => console.log(e))