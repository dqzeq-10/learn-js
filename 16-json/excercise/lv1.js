const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const sjson = JSON.stringify(skills)
console.log(sjson) //["HTML","CSS","JS","React","Node","Python"]

let age = 250;
console.log(JSON.stringify(age)) //250

let isMarried = true
console.log(JSON.stringify(isMarried))//true

const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
console.log(JSON.stringify(student, undefined, 4))

// {
//     "firstName": "Asabeneh",
//     "lastName": "Yetayehe",
//     "age": 250,
//     "isMarried": true,
//     "skills": [
//         "HTML",
//         "CSS",
//         "JS",
//         "React",
//         "Node",
//         "Python"
//     ]
// }