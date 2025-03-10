
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
console.log(jsontxtwithArr) //custom json bằng mảng