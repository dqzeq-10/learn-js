//for
for(let i = 0; i<=10; i++){
    console.log(i)
}

for(let i = 5; i>=0; i--){
    console.log(i)
}

for(let i = 0; i <= 5; i++){
    console.log(`${i}*${i} = ${i*i}`)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i <countries.length; i++){
    newArr.push(countries[i].toUpperCase())
}

console.log(newArr)

////while
let i = 0
while (i<=5){
    console.log(i)
    i++
}


//do while
let i2 = 0
do{
    console.log(i)
    i++
}while(i<=5)
console.log(i)//6 nen out vong


//for of
// for (const element of arr){

// }

//for of dùng cho Mảng(duyệt từng phần tử), String(duyệt từ kí tự), Set(duyệt từng phần tử (bỏ qua phần tử trùng)), Map(duyệt các cặp (key, value)), 
const numbers = [1,2,3,4,5]
for(const num of numbers){
    console.log(num)
}

// break: out of the loop
for(let i = 0; i<=5; i++){
    if (i==3)
        break
    console.log(i)
} 
//0 1 2
//i = 3 => break

//continue: jump to the next iteration of the loop
for(let i = 0; i<=5; i++){
    if(i==3){
        continue
    }
    console.log(i)
}
//0 1 2 4 5
//3 => continue to 4
