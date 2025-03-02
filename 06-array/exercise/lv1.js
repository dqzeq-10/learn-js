
for(let i=0; i<=10;i++){
    console.log(i)
}

let i = 0
while(i<=10){
    console.log(i)
    i++
}

let i = 0
do{
    console.log(i)
    i++
}while(i<=10)

for(let i= 10;i>=0; i--){
    console.log(i)
}

let i=10
while(i>=0){
    console.log(i)
    i--
}

let i = 10
do{
    console.log(i)
    i--
}while(i>=0)

let n = 100
for(let i = 0; i<=n; i++){
    console.log(i)
}

let rows = 7
let hash = '#'
for(let i = 1; i <= rows; i++){
    console.log(hash)
    hash += '#'
}
/*
#
##
###
####
#####
######
#######
*/

for(let i = 0; i<= 10; i++){
    console.log(`${i} x ${i} = ${i*i}`)
}

console.log('i\ti^2\ti^3')
for(let i = 0; i<= 10; i++){
    console.log(`${i}\t${i*i}\t${i*i*i}`)
}

for(let i = 0; i<=100; i++){
    if(i%2==0){
        console.log(i)
    }
}

for(let i = 0; i<= 100; i++){
    if(i%2!=0){
        console.log(i)
    }
}


let total = 0
for(let i = 0; i<= 100; i++){
    console.log(i)
    total +=i
}
console.log(total)

let totalEven = 0, totalOdd = 0
for(let i =0; i<=100; i++){
    if(i%2==0){
        totalEven +=i
    }else{
        totalOdd+=i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${totalEven}. And the sum of all odds from 0 to 100 is ${totalOdd}`)

let totalEven = 0, totalOdd = 0
const arrTotal = []
for(let i =0; i<=100; i++){
    if(i%2==0){
        totalEven +=i
    }else{
        totalOdd+=i
    }
}
arrTotal.push(totalEven,totalOdd)
console.log(arrTotal)

let arrRandom = []
for(let i = 0; i<=4; i++){
    arrRandom.push(Math.round(Math.random()*11))
}
console.log(arrRandom)

let arrRandom = []
let i = 0
while(i<=4){
    let ranN = Math.round(Math.random()*11)
    if(!arrRandom.includes(ranN)){
        arrRandom.push(ranN)
        i++
    }
}
console.log(arrRandom)

let arrAlphabet =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let ranId = ''
for(let i = 0; i <= 5; i++){
    let id = Math.floor(Math.random()*arrAlphabet.length)
    ranId += arrAlphabet[id]
}
console.log(ranId)
