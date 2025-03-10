const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

console.log(JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4))
// {
//     "firstName": "Asabeneh",
//     "lastName": "Yetayehe",
//     "skills": [
//         "HTML",
//         "CSS",
//         "JS",
//         "React",
//         "Node",
//         "Python"
//     ]
// }