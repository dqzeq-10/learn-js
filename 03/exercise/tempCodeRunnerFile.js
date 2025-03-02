let now = new Date()
let yyyy = now.getFullYear()
let MM = now.getMonth()+1
let dd = now.getDate()
let HH = now.getHours()
let mm = now.getMinutes()
console.log(yyyy,'-',MM,'-',dd,' ',HH,':',mm)
console.log(yyyy,'-',MM,'-',dd,' ',HH.toString().length==2?HH:'0'+HH,':',mm.toString().length==2?mm:'0'+mm)