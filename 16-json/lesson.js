// Json
// {
//     "users" : [
//         {
//             "firstName" : "Quy",
//             "lastName" : "Tran",
//             "age" : 20,
//             "email" : "dq@zeq.com"
//         },
//         {
//             "firstName" : "Quy",
//             "lastName" : "Tran",
//             "age" : 20,
//             "email" : "dq@zeq.com"
//         }
//     ]
// }

//THE DIFFERENCE BETWEEN JSON AND OBJECT: IS THE KEY WITH DOUBLE QUOTES IN JSON, ITS NOT IN OBJECT
//JSON: "firstName": "Quy"
//Object: firstName: "Quy"








//converting JSON to Js Object => JSON.parse()
//JSON.parse(json[, reviver])
// json or text, the data
//reviver is an optinal callback function

/**
 *      JSON.parse(json, (key, value)? =>{
 *          //code
 *      })
 */


const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
}`

// const usersObj = JSON.parse(usersText, undefined) // undefined: không dùng reviver để xử lý dữ liệu sau khi parse
const usersObj = JSON.parse(usersText) // vẫn hoạt động bình thường
console.log(usersObj)

//USING REVIVER FUNCTION with JSON.parse()
const usersObjwREVIVER = JSON.parse(usersText, (keyy, valuee) => {
    let newValue = typeof valuee == 'string' && keyy != 'email' ? valuee.toUpperCase() : valuee
    return newValue
})
// => reviver giúp định dạng (in hoa giá trị của các key nếu đó là giá trị kiểu string và trừ key là 'email')
console.log(usersObjwREVIVER) //{ users: [{firstName: 'ASABENEH', lastName: 'YETAYEH', age: 250, email: 'asab@asb.com'}, {firstName: 'ALEX', lastName: 'JAMES', age: 25, email: 'alex@alex.com'}, {firstName: 'LIDIYA', lastName: 'TEKLE', age: 28, email: 'lidiya@lidiya.com'}] }



// CONVERTING OBJECT to JSON: JSON.stringify()
//JSON.stringify(obj, replacer?, space?)

const usersObject = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
// const jsontxt = JSON.stringify(usersObject)
// console.log(jsontxt) //{"Alex":{"email":"alex@alex.com","skills":["HTML","CSS","JavaScript"],"age":20,"isLoggedIn":false,"points":30},"Asab":{"email":"asab@asab.com","skills":["HTML","CSS","JavaScript","Redux","MongoDB","Express","React","Node"],"age":25,"isLoggedIn":false,"points":50},"Brook":{"email":"daniel@daniel.com","skills":["HTML","CSS","JavaScript","React","Redux"],"age":30,"isLoggedIn":true,"points":50},"Daniel":{"email":"daniel@alex.com","skills":["HTML","CSS","JavaScript","Python"],"age":20,"isLoggedIn":false,"points":40},"John":{"email":"john@john.com","skills":["HTML","CSS","JavaScript","React","Redux","Node.js"],"age":20,"isLoggedIn":true,"points":50},"Thomas":{"email":"thomas@thomas.com","skills":["HTML","CSS","JavaScript","React"],"age":20,"isLoggedIn":false,"points":40},"Paul":{"email":"paul@paul.com","skills":["HTML","CSS","JavaScript","MongoDB","Express","React","Node"],"age":20,"isLoggedIn":false,"points":40}}

// const jsontxt2 = JSON.stringify(usersObject,undefined ,4 ) //4 là 4 khoảng trắng
// console.log(jsontxt2) //giống thằng trên

const jsontxtwithreplacer = JSON.stringify(usersObject, (k, v) =>{
    if (k === 'isLoggedIn') return undefined
    return v
}, 4) //trả về json nhưng có không isLoggedIn => format lại kiểu dữ liệu trước khi trả về

console.log(jsontxtwithreplacer)




const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 250,
    isLoggedIn: false,
    points: 30
  }

const jsontxtwithArr = JSON.stringify(user, ['skills','firstName', 'lastName', 'country', 'city', 'age', 'points'], 4)
console.log(jsontxtwithArr) //custom json bằng mảng (bỏ qua các trường không cần, thứ tự)