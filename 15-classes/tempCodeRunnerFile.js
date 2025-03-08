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