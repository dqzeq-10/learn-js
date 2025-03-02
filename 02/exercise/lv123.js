let challenge = 'Learn JavaScript in 30 days'
console.log(challenge.repeat(2))
console.log(challenge.concat('123','okok','456'))
console.log(challenge.match(/a/gi))
console.log(challenge.endsWith('ays'))
console.log(challenge.startsWith('Lear'))
console.log(challenge.indexOf('days'))
console.log(challenge.lastIndexOf('a'))
console.log(challenge.indexOf('a'))
console.log(challenge.charCodeAt(6))
console.log(challenge.charAt(25))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.split(' '))
console.log(challenge.split(""))
console.log(challenge.includes('Script'))
console.log(challenge.substring(6, challenge.length-1))
console.log(challenge.substring(0,5))
console.log(challenge.substr(0, 5))
console.log(challenge.toLowerCase())
console.log(challenge.toUpperCase())
console.log(challenge.length)
console.log(challenge)

let bigtech = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(bigtech.split(', '))

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log('\"Love is .. -- \"')
console.log(typeof '10' == typeof 10) //false
console.log(typeof +'10' ==typeof 10) //true
console.log(parseFloat('9,8') == 10) //false
console.log(Math.round(parseFloat('9.8')) == 10)

let sentence = 'I hope this course is not full of jargon'
console.log(sentence.includes('jargon'))

console.log(Math.random()*101)
console.log((Math.random()*51)+50)
console.log(Math.random()*256)

let js = 'JavaScript'
console.log(js[Math.floor(Math.random()*(js.length-1))])

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

let sen = 'You cannot end a sentence with because because because is a conjunction'
console.log(sen.substr(sen.indexOf('because'),23))

let lovee = 'Love is the best thing in this world. Some found their love and some are still looking for their love'
let searchLove = lovee.match(/love/gi)
console.log(searchLove.length)

let because = 'You cannot end a sentence with because because because is a conjunction'
console.log((because.match(/because/gi).length))

const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let sentence3 = sentence2.replaceAll('%','')
let sentence4 = sentence3.replaceAll('@','')
let sentence5 = sentence4.replaceAll('&','')
let sentence6 = sentence5.replaceAll(';','')
let sentence7 = sentence6.replaceAll('$','')
let sentence8 = sentence7.replaceAll('#','')
console.log(sentence8)

let txt1 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salaryMonths = parseFloat(txt1.match(/5000/)[0])
let annualBonus = parseFloat(txt1.match(/10000/)[0])
let onlineCourse = parseFloat(txt1.match(/15000/)[0])
console.log((salaryMonths+onlineCourse)*12+annualBonus)