const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// countries.forEach(e =>{
//     console.log(e.toUpperCase())
// })

// numbers.forEach(e=>{
//     console.log(e*e)
// })
// numbers.map(e=>{
//     console.log(e*e)
// })
// numbers.filter(e=>{
//     console.log(e*e)
// })

/*
Foreach: lặp qua từng phần tử , thực hiện hàm cho từng phần tử, khi không thể dùng các vòng lặp chuyên dụng phía dưới thì là lúc dùng đến nó
Map: như foreach nhưng trả về mảng mới, dùng để chuyển đổi các phần tử trong cùng một mảng
Filter: khi muốn chọn một tập hợp con gồm nhiều phần tử từ một mảng
Find: khi muốn chọn một phần tử từ một mảng
Reduce: khi muốn lấy một giá trị nhiều phần tử trong một mảng.
*/

//2
// const cb = (n) => console.log(n)
// numbers.forEach(cb) //in tung ptu voi foreach va callback

// const sqN = n => n*n
// console.log(numbers.map(sqN)) //luy thua tung ptu voi map va callback

// const ft = n => n>5
// console.log(numbers.filter(ft)) //loc cac ptu > 5 voi filter va callback

// const sum = (sum, n) => {
//     return sum+=n
// }
// let sum3 = numbers.reduce(sum)
// console.log(sum3)

// let sum1 = (numbers.reduce((sum, n) => sum+n,0))
// console.log(sum1)

//3
countries.forEach(e => {
  console.log(e)
})

//4
names.forEach(e => {
  console.log(e)
})

//5
numbers.forEach(e => {
  console.log(e)
})

//6
const COUNTRIES = countries.map(e => e.toUpperCase())
console.log(COUNTRIES)

//7
console.log(countries.map(e=>e.length))

//8
console.log(numbers.map(e => e*e))

//9
console.log(names.map(e => e.toUpperCase()))

//10
console.log(products.map(e => e.price))

//11
console.log(countries.filter(e => e.includes('land')))

//12
console.log(countries.filter(e => e.length === 6))

//13
console.log(countries.filter(e => e.length>= 6))

//14
console.log(countries.filter(e => e.startsWith('E')))

//15
console.log(products.filter(e => typeof e.price === 'number'))

//16
function getStringLists(arr){
  const arr2 = arr.filter(e => typeof e === 'string')
  return arr2
}
const a = ['a', 1, 'b', 'g', 2]
console.log(getStringLists(a))

//17
console.log(numbers.reduce((sum, n) => sum+n, 0))

//18
console.log(countries.reduce((str, c) => {
  if(c == countries[countries.length-1]){
    return str+' and '+ c + ' are north European countries'
  }
  else{
   return str + ', ' + c
  }

},'Estonia'))

//19
// some(): true nếu một phần tử đầu tiên thỏa mãn điều kiện
// every(); true nếu tập phần tử thỏa mãn điều kiện

//20
console.log(names.some(n => n.length > 7)) //true vì có một quốc gia có tên dài hơn 7 kí tự

//21
console.log(countries.every(e => e.includes('land'))) 
//false vì chỉ có vài quốc gia chứ land chứ không phải tất cả

//22
//find(): trả về phần tử đầu tiên thỏa mãn điều kiện
//findIndex(): trả về chỉ số index của phần tử thỏa mãn điều kiện

//23
console.log(countries.find(c => c.length == 6))

//24
console.log(countries.findIndex(e => e.length == 6))

//25
console.log(countries.findIndex(e => e === 'Norway')) //if doesn't exist u will get -1

//26
console.log(countries.findIndex(e => e ==='Russia'))