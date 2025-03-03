
const sumAllNums = (...ns)  => {
    let sum = 0
    for (const n of ns){
        sum +=n
    }
    return sum
}

console.log(sumAllNums(1,2,3,4,5))