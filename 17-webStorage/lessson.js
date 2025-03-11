//Web storage

//localStorage and sessionStorage
//chúng giống nhau về phương thức: setItem(key, value); getItem(key, value); removeItem(key, value); clear()
//localStorage thì lưu trữ ở trên trình duyệt lâu dài
//sessionStorage thì lưu trư ngắn hạn, bi xóa khi đóng tab hay trình duyệt!



localStorage.setItem('firstName', 'Quy')

const skills = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

  
let skillJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillJSON)

let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj)

localStorage.clear()