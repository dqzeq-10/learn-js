
const arr = [] //Ưu tiên thứ nhất: ngắn gọn 
const arr2 = new Array() //Ưu tiên thứ hai: const nên chỉ có thể thay đổi giá trị trong mảng chứ không thể gắn lại tham chiếu mới
let arr3 = new Array() //Ưu tiên thứ ba: vì let nên có thể gắn lại tham chiếu mới dễ gây lỗi

console.log(arr) // []

const numbers = [0, 3.14, 7, 10]
const chars = ['z', 'e', 'q']
const strings = ['quy', 'zeq']

console.log('Numbers: ',numbers)
console.log('Chars: ',chars)
console.log('Strings: ',strings)

const arr4 = ['Zeq', 10, true, {country: 'Vietnam', city: 'Quangtri'}]
console.log(arr4)

let js = 'JavaScript'
const charsInJS = js.split('')
console.log(charsInJS) //['J', 'a', 'v', 'a', ...] JavaScript

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(', ')
console.log(companies)
console.log(companies[0]) //index: chỉ mục của mảng
console.log(companies[3])
console.log(companies[5])

console.log(companies.length) //số lượng phần tử có trong mảng: size of the array, which is 7
console.log(companies[companies.length-1])

companies[5] = 'ZEQ' //thay đổi phần tử 'Oracle' -> 'ZEQ'
console.log(companies[5])


const arr5 = Array(8) 
console.log(arr5) //[ <8 empty items> ]: Mảng với 8 phần tử rỗng

const arr6 = Array(4).fill('A')
console.log(arr6) //['A', 'A', 'A', 'A']

const a7 = [1,2,3]
const a8 = [4,5,6]
const a9 = a7.concat(a8) //[1,2,3,4,5,6]: Nối mảng
console.log(a9)

const a10 = ['a', 'b', 'c', 'd', 'e','d']

a10.sort() 
console.log(a10) //[ 'a', 'b', 'c', 'd',   'd',   'e' ]
a10.reverse() //dao nguoc mang
console.log(a10)//[ 'd', 'e', 'd', 'c', 'b', 'a' ]

a10.unshift('zeq') //them vao dau a10[firstIndex]
console.log(a10) //['zeq', 'a', 'b', 'c', 'd', 'e','d']
a10.shift() //xoa dau a10[firstIndex]
console.log(a10) //['b', 'c', 'd', 'e','d']
a10.pop() //xoa cuoi a10[lastIndex]
console.log(a10) //['a', 'b', 'c', 'd', 'e']

a10.push('f','g')
console.log(a10) //['a', 'b', 'c', 'd', 'e','d','f','g']
console.log(a10.push('f','g')) //8:))
a10.splice(3,3,'xx','yy','zz') //xóa 'd', 'e', 'd' và thêm 'xx', 'yy', 'zz' vào a10
console.log(a10) // [ 'a', 'b', 'c', 'xx', 'yy', 'zz' ]
console.log(a10.splice(3,3,'xx','yy','zz') ) // [ 'xx', 'yy', 'zz' ]: splice trả về kết quả, là những gì đã xóa, chứ không là còn lại những gì sau khi xóa
const a11=a10.splice(3,2) //[ 'd', 'e' ] : vị trí bắt đầu là 3, lấy 2 phần tử
console.log(a10.splice()) //[] : remove all items
console.log(a10.slice()) 
console.log(a10.slice(0))
console.log(a10.slice(3)) //[ 'd', 'e', 'd' ]: cắt mảng từ a10[3] tới hết
console.log(a10.slice(3,5)) //[ 'd', 'e' ]: a10[3], a10[4]
console.log(a10.join()) //a,b,c,d,e,d
console.log(a10.join('')) //abcded
console.log(a10.join('x')) //axbxcxdxexd: 'x' là từ chèn giữa các phần tử của mảng khi dùng join() để nối các phần tử thành chuỗi  
console.log(a10.indexOf('d')) // 3 : a10[3] = 'd': The first 'd' is in the array a10
console.log(a10.indexOf('f')) //-1 : not found 'f' in the array a10
console.log(a10.lastIndexOf('d')) // 5: the second and last 'd' is in the array a10
console.log(a10.includes('d')) //boolean: true : check does 'd' exist in this array? it exists
console.log(Array.isArray(a10)) //boolean: true : check if it is an array? 
console.log((a10.toString())) // 'a,b,c,d,e,d'
console.log((a10.toString()).split('c')) // ['a,b,', 'd,e,d']

//Array of arrays
const aN1 = [1,2,3]
const aN2 = [4,5,6]

const arrayOfArray = [[1,2,3], [1,2,3]]
const arrayOfArray2 = [aN1,aN2]
console.log(arrayOfArray)
console.log(arrayOfArray2)
console.log(arrayOfArray2[1]) // [4,5,6]
