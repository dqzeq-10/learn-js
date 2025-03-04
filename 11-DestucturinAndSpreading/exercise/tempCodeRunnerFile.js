
const student4 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
}
// console.log(student4)

const copidStudent4 = Object.assign({}, student4)

const {skills} = copidStudent4
const {frontEnd, backEnd, dataBase, dataScience} = skills 

console.log(frontEnd)

function addSkillnLevel(nameskils, skill, level){
    nameskils.push({'skill': skill, 'level': level})
}

console.log(frontEnd, backEnd, dataBase, dataScience)

addSkillnLevel(frontEnd, 'Bootstrap', 8)
addSkillnLevel(backEnd, 'Express', 9)
addSkillnLevel(dataBase, 'SQL', 8)
// addSkillnLevel(dataScience, 'SQL', 8)

console.log(copidStudent4.skills)