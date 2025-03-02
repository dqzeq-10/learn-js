/**
 * Set là một collection của các phần tử, set chỉ có thể chứa những phần tử độc nhất (nếu trùng lặp phần tử, nó sẽ tự loại bỏ)
 */

const companies = new Set()
console.log(companies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]

const setOfLanguage = new Set(languages)

console.log(setOfLanguage) //Set(4) {'English', 'Finnish', 'French', 'Spanish'}

for(const language of setOfLanguage){
    console.log(language)
}


console.log(companies.size)// 0
companies.add('Facebook')
companies.add('Google')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size)
console.log(companies)


const companies2 = ['Google2', 'Facebook2', 'Amazon2', 'Oracle2', 'Microsoft2']
const setOfLanguage2 = new Set()

for(const company of companies2){
    setOfLanguage2.add(company)
}
console.log(setOfLanguage2)

console.log(setOfLanguage2.delete('Google2')) //true: có tồn tại và đã xóa; false: không tồn tại
console.log(setOfLanguage2.size)

console.log(setOfLanguage2)

console.log(setOfLanguage2.has('Apple')) //false: không tồn tại
console.log(setOfLanguage2.has('Microsoft2')) //true: có tồn tại


setOfLanguage2.clear()
console.log(setOfLanguage2) //set(0) {}


//Ứng dụng của Set:
// 1. đếm số lần lặp của phần tử trong mảng

// 2. A Hợp B 
let a = [1,2,3,4,5]
let b = [3,4,5,6,7]
let c = [...a, ...b]
let C = new Set(c)

console.log(C) //Set(7) { 1, 2, 3, 4, 5, 6, 7 }
console.log(new Set([...a, ...b])) //Set(7) { 1, 2, 3, 4, 5, 6, 7 }
console.log([...a, ...b])

//3. A giao B

let B = new Set(b)
let d = a.filter((num) => B.has(num))
let D = new Set(d)
console.log(D) //{ 3, 4, 5 }

//4. A trừ B
let e = a.filter(n => !B.has(n))
let E = new Set(e)
console.log(E)


//Map: 1 cấu trúc dữ liệu trong js giúp lưu trữ các cặp key-value nó giống như Object. Nhưng ưu điểm hơn: key hỗ trợ mỗi kiểu dữ liệu (object thì để tự chuyển về string hoặc symbol), bảo toàn thứ tự(object số thì tăng dần, chuỗi thì bảo toàn),  
const map  = new Map()
console.log(map) //Map(0) {}

countries = [
    ['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']
]

const map1 = new Map(countries)
console.log(map1) // Map(3) {'Finland' => 'Helsinki', 'Sweden' => 'Stockholm', 'Norway' => 'Oslo'}
//                              K => V, K => V, K => V,...
console.log(map1.size) //3

//const o1 = new Object(countries) // [ [ 'Finland', 'Helsinki' ],[ 'Sweden', 'Stockholm' ],[ 'Norway', 'Oslo' ]]
//console.log(o1)

//add K, V to the Map by set()
map1.set("keyyy", 'valueee')
map1.set("Vietnam", "Hanoi")
console.log(map1)

//get V from Map by get(K)
console.log(map1.get("Vietnam")) //Hanoi

//Checking key in Map
console.log(map1.has('Vietnam')) //true 
console.log(map1.has('ZEQ')) //false

for (const country of map1){
    console.log(country)
}
//[ 'Finland', 'Helsinki' ]
//[K, V]
//[K, V] 
//...

for(const [country, city] of map1){
    console.log(country, city)
}

//Finland Helsinki
//Sweden Stockholm
//Norway Oslo
//...

