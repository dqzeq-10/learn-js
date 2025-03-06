console.log('helloworld')

console.log('%d %s of js', 30, 'Days') //'%d %s of js'; 30 => %d; 'Days' => %s

console.log('%c30 Days of Js', 'color:green') //'30 Days of Js'  is green 

console.log('%c30 Days%c %cOf%c %cJavaScript%c', 
    'color:green',  // Áp dụng cho "30 Days"
    '',             // Reset style (cho khoảng trắng sau "30 Days")
    'color:red',    // Áp dụng cho "Of"
    '',             // Reset style (cho khoảng trắng sau "Of")
    'color:yellow', // Áp dụng cho "JavaScript"
    ''              // Reset style cuối cùng
)

console.warn('this is a warning') //hiển thị message cảnh báo

console.error('this is an error message') //hien thi message loi

const namess = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

const users2 = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  console.table(user)
  const userss = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
console.table(userss)
// console.table() dùng để hiện array, object theo dạng bảng title - value

console.time("samelabel")
//code
console.timeEnd("samelabel") //samelable: 0.052ms

console.info("trandinhquy") //hien thi thong tin tin message tren brower console

console.assert(true, 'condition is true') //true thì KHÔNG hiển thị message
console.assert(false, 'condition is false') //false NÊN hiển thị message

console.group('zeq')
console.log(1244)
console.groupEnd()
//zeq
// 1244

const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

//console.group("ten nhom") - console.groupEnd() gom nhóm

console.count("tên nhãn") //tên nhãn: 1
console.count("tên nhãn") //tên nhãn: 2
console.count("tên nhãn") //tên nhãn: 3
//console.count("tên nhãn") hiển thị tên nhãn và số lần được gọi

console.clear() //clear the brower console

