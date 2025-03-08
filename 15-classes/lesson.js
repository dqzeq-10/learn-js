class Personn {

}
const person = new Personn
console.log(person) //Person {}


// class contructor
class Person{
    constructor(firstName, lastName){
        console.log(this) //in ra để kiểm tra xem nó có rỗng không?
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person1 = new Person()

console.log(person1)
//Person{}
//Person{ firstName: undefined, lastName: undefined}


class Person2 {
    constructor(fN, lN){
        this.fn = fN
        this.ln = lN
    }
}
const p2 = new Person2('Zeq', 'Tran')
console.log(p2) // Person2 { fn: 'Zeq', ln: 'Tran' }

const p3 = new Person2('Quy', 'Tran')
const p4 = new Person2('Dinh', 'Tran')
const p5 = new Person2('Quy', 'Dinh')

console.log(p3, p4, p5) //Person2 { fn: 'Quy', ln: 'Tran' } Person2 { fn: 'Dinh', ln: 'Tran' } Person2 { fn: 'Quy', ln: 'Dinh' }



class Person3 {
    constructor (fn, ln, age, country, city){
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.country = country
        this.city = city
    }
}

const person31 = new Person3('Zeq', 'Tran', 20, 'Vietnam', 'Danang') 
console.log(person31)
//nếu thừa tham số thì không ảnh hưởng gì
//nếu thiếu tham số thì biến của tham số đó sẽ: undefined

class Person4 {
    constructor(fn = 'tenmacdinh', ln = 'homacdinh', age = 18, country = 'chuachon', city = 'chuachoncity') { //constructor with default value
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.country = country
        this.city = city
    }
}
const person41 = new Person4()
const person42 = new Person4('Quy', 'Dinh', 20, 'Vietnam', 'Quangtri')
console.log(person41) //Person4 {firstName: 'tenmacdinh',lastName: 'homacdinh',age: 18,country: 'chuachon',city: 'chuachoncity'}
console.log(person42) //Person4 {firstName: 'Quy',lastName: 'Dinh',age: 20,country: 'Vietnam',city: 'Quangtri'}



//CLASS METHODS

class Person5 {
    constructor(fn, ln, a, c, ci){
        this.firstName = fn
        this.lastName = ln
        this.age = a
        this.country = c
        this.city = ci
    }
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const p51 = new Person5('Zeq', 'Quy', 20, 'Vietnam', 'Quangtri')
console.log(p51.getFullName()) //Zeq Quy


class Person6 {
    constructor(fn, ln, a, c, ci) {
        this.firstName = fn
        this.lastName =ln
        this.age = a
        this.country = c
        this.city = ci

        this.score = 0
        this.skills = []
    }

    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const p61 = new Person6('quy', 'tran', 20, 'Vietnam', 'Danang')
const p62 = new Person6('Quy2', 'Tran2', 22, 'Vietnam', 'Danang')


console.log(p61.score)//0
console.log(p62.score)//0

console.log(p61.skills)//[]
console.log(p62.skills)//[]


//GETTER
class Person7 {
    constructor(fn, ln, a, c, ci){
        this.firstName  = fn
        this.lastName = ln
        this.age = a
        this.country = c
        this.city = ci
        this.score = 0
        this.skills = []
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName
    }

    get getScore(){
        return this.score
    }

    get getSkills(){
        return this.skills
    }
}
const p71 = new Person7('Zeq', 'Tran', 22, 'Vietnam', 'Danang')
console.log(p71.getScore) //0 : KHÔNG CẦN () CHO METHOD GET, CHỈ CẦN GỌI TÊN    
console.log(p71.getSkills) //[]


//SETTER

class Person8 {
    constructor(fn, ln, a, c, ci){
        this.firstName = fn
        this.lastName = ln
        this.age = a
        this.country = c
        this.city = ci
        this.score = 0
        this.skills = []
    }

    getFullName(){
        return this.firstName +' '+ this.lastName
    }

    get getScore(){
        return this.score
    }

    get getSkills(){
        return this.skills
    }

    set setScore(score){
        this.score +=score
    }
    
    set setSkill(skill){
        this.skills.push(skill)
    }
}

const p81 = new Person8('quy', 'tran', 20, 'Vietnam', 'Danang')
console.log(p81.getScore) //0
console.log(p81.getSkills) //[]

p81.setScore = 10
p81.setSkill = 'Java'
p81.setSkill = 'C#'
p81.setSkill = 'SQLServer'
p81.setSkill = 'Git'

console.log(p81.getScore) //10
console.log(p81.getSkills) //['C#', 'SQLSever', 'Git']



class Person9{

    //constructor
    constructor(fn, ln, a, c, ci){
        this.firstName = fn
        this.lastName = ln
        this.age = a
        this.country  = c
        this.city = ci
        this.score = 0
        this.skills = []
    }

    //regular method
    getFullName(){
        return this.firstName +' '+ this.lastName
    }

    //getter
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }

    //setter
    set setScore(score){
        this.score += score
    }
    set setSkill(skill){
        this.skills.push(skill)
    }

    //regular method
    getPersonInfo(){
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length -1]}`
        let formattedSKills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSKills}`
        return info
    }
}

const p91 = new Person9('Q1', 'T1', 20, 'Vietnam', 'Danang')
const p92 = new Person9('Q2', 'T2', 20, 'Vietnam', 'Danang')

p91.setScore = 10
p91.setSkill = 'Java'
// p91.setSkill = 'C#'
// p91.setSkill = 'JS'
// p91.setSkill = 'MSQLS'
// p91.setSkill = 'Git'

p92.setScore = 11

console.log(p91.getPersonInfo())
console.log(p92.getPersonInfo())


//STATIC METHOD 

class Person10{

    //constructor
    constructor(fn, ln, a, c, ci){
        this.firstName = fn
        this.lastName = ln
        this.age = a
        this.country  = c
        this.city = ci
        this.score = 0
        this.skills = []
    }

    //regular method
    getFullName(){
        return this.firstName +' '+ this.lastName
    }

    //getter
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }

    //setter
    set setScore(score){
        this.score += score
    }
    set setSkill(skill){
        this.skills.push(skill)
    }

    //regular method
    getPersonInfo(){
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length -1]}`
        let formattedSKills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSKills}`
        return info
    }


    //static method
    static favoriteSkill(){
        const skills = ['HTML', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }

    static showDateTime(){
        let now = new Date()
        let y = now.getFullYear()
        let M = now.getMonth()
        let d = now.getDate()
        let h = now.getHours()
        let m = now.getMinutes()
        
        if (h < 10){
            h = '0' + h
        }
        if (m < 10){
            m = '0' + m
        }
        let dMy = d + '.' + M + '.' + y

        let time = h + ':' + m

        let fullTime = dMy +' '+ time

        return fullTime
    }
}

console.log(Person10.favoriteSkill()) //Node
console.log(Person10.showDateTime()) //8.2.2025 21:53

//Inheritance kế thừa


class Person11{

    //constructor
    constructor(fn, ln, a, c, ci){
        this.firstName = fn
        this.lastName = ln
        this.age = a
        this.country  = c
        this.city = ci
        this.score = 0
        this.skills = []
    }

    //regular method
    getFullName(){
        return this.firstName +' '+ this.lastName
    }

    //getter
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }

    //setter
    set setScore(score){
        this.score += score
    }
    set setSkill(skill){
        this.skills.push(skill)
    }

    //regular method
    getPersonInfo(){
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length -1]}`
        let formattedSKills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSKills}`
        return info
    }


    //static method
    static favoriteSkill(){
        const skills = ['HTML', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }

    static showDateTime(){
        let now = new Date()
        let y = now.getFullYear()
        let M = now.getMonth()
        let d = now.getDate()
        let h = now.getHours()
        let m = now.getMinutes()
        
        if (h < 10){
            h = '0' + h
        }
        if (m < 10){
            m = '0' + m
        }
        let dMy = d + '.' + M + '.' + y

        let time = h + ':' + m

        let fullTime = dMy +' '+ time

        return fullTime
    }
}
class Student extends Person11{
    saySomething(){
        console.log('I am a child of the person class')
    }
}

const s1 = new Student('sFIRSTNAME', 'sLASTNAME', 19, 'VIETNAM', 'DANANG')
s1.saySomething() //I am a child of the person class
console.log(s1)
// Student {
//     firstName: 'studenfn',
//     lastName: 'sLn',
//     age: 19,
//     country: 'VIETNAM',
//     city: 'DANANG',
//     score: 0,
//     skills: []
//   }

console.log(s1.getFullName()) //sFIRSTNAME sLASTNAME

console.log(s1.getPersonInfo()) //sFIRSTNAME sLASTNAME is 19. He lives DANANG, VIETNAM.



//OVERRIDING METHODS

//parent class
class Person12{

    //constructor
    constructor(fn, ln, a, c, ci){
        this.firstName = fn
        this.lastName = ln
        this.age = a
        this.country  = c
        this.city = ci
        this.score = 0
        this.skills = []
    }

    //regular method
    getFullName(){
        return this.firstName +' '+ this.lastName
    }

    //getter
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }

    //setter
    set setScore(score){
        this.score += score
    }
    set setSkill(skill){
        this.skills.push(skill)
    }

    //regular method
    getPersonInfo(){
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length -1]}`
        let formattedSKills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSKills}`
        return info
    }


    //static method
    static favoriteSkill(){
        const skills = ['HTML', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }

    static showDateTime(){
        let now = new Date()
        let y = now.getFullYear()
        let M = now.getMonth()
        let d = now.getDate()
        let h = now.getHours()
        let m = now.getMinutes()
        
        if (h < 10){
            h = '0' + h
        }
        if (m < 10){
            m = '0' + m
        }
        let dMy = d + '.' + M + '.' + y

        let time = h + ':' + m

        let fullTime = dMy +' '+ time

        return fullTime
    }
}

//child class
class Student2 extends Person12{
    constructor(fn, ln, a, c, ci, gender){
        super(fn, ln, a, c, ci,)
        this.gender = gender
    }

    getPersonInfo(){
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skils.length -1).join(', ') + ` and ${this.skills[this.skils.length -1]}`
        let pronoun = this.gender == 'Male' ? 'He' : 'She'
        let formattedSkills = skills ? `${pronoun} knows ${skils}` : ''
        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    } // chỉnh sửa lại hàm cùng tên với lớp cha => overridden
}

const s2 =  new Student2('Quy', 'Tran', 20, 'Vietnam', 'Quangtri', 'Male')
console.log(s2)
console.log(s2.getPersonInfo())