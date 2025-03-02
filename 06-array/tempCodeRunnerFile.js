
let arrAlphabet =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let ranId = ''
for(let i = 0; i <= 5; i++){
    let id = Math.floor(Math.random()*arrAlphabet.length)
    ranId += arrAlphabet[id]
}
console.log(ranId)