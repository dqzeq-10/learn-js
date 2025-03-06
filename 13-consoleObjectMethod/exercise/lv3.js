let n = 0
console.time("while")

while(n <10){
    n++
}
console.timeEnd("while")

console.time("for")
for(n = 0; n<10; n++){
    
}
console.timeEnd("for")

const arr = [1,2,3,4,5,6,7,8,9, 10]
console.time('forof')
for(const a of arr){

}
console.timeEnd('forof')

console.time('forEach')
arr.forEach(a => 0)
console.timeEnd('forEach')