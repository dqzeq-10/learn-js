const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
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
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}
//7
const countries ={
  VN:{
    name: 'Vietnam',
    capital: 'Hanoi',
    populations: 100000000,
    languages: 'Vietnamese'
  },
  USA:{
    name: 'United States of America',
    capital: 'Washington, D.C',
    populations: 334000000,
    languages: 'English'
  }
}
console.log(`${countries.VN.name}, a country in Southeast Asia. Its capital is ${countries.VN.capital}. It has a population of ${countries.VN.populations} and its people speak ${countries.VN.languages}.`)


//6
console.log(Object.values(users))


//5
console.log(Object.keys(users))
for (const u in users){
  console.log(Object.keys(users[u]))
}


//4
users.ZEQ = {}
console.log(users)

//3
function findMERN(users){
  let mern = {}
  // let i = 0
  for(const user2 in users){
    
    if(users[user2].skills.includes('MongoDB') && users[user2].skills.includes('Express') && users[user2].skills.includes('React') && users[user2].skills.includes('Node')){
      // let userName = Object.keys(users)[i]
      mern[user2] = users[user2]
    }
    // i++
  }
  return mern
}
console.log(findMERN(users))



const ok = ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node']
console.log((ok.includes('MongoDB')&&ok.includes('Express')&&ok.includes('React')&&ok.includes('Node'))?true:false)


const m = {
  ok: 'ok1',
  ok: 'ok2'
}
console.log(m)





//2
function countLogged(users){
  let cnt = 0
  for(const user in users){
    if(users[user].isLoggedIn === true){
      cnt++
    }
  }
  return cnt
}

function countUhaspoint50(users){
  let cnt = 0
  for(const user in users){
    if (users[user].points >= 50){
      cnt++
    }
  }
  return cnt      
}
console.log(countLogged(users)) //2
console.log(countUhaspoint50(users)) //3


//1
let maxskill = 0
let mostPeople = {}
for(const user in users){
    if (users[user].skills.length > maxskill){
        maxskill = users[user].skills.length
        mostPeople = users[user]
    }
}
console.log(mostPeople)