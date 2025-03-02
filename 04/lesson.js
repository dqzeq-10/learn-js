//if, if else, if else if else, switch, ternary operation (phép toán ba ngôi a?b:c)
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Nhập: ', (input) =>{
//     const num = parseFloat(input);
//     //    
// rl.close();
// });

let num = prompt("Nhap 1 so:")
if(num>0){
    console.log(`${num} is positive number`) // so duong
}else{
    console.log(`${num} is negative number`)
}

let a = 0 
if (a>0){
    console.log(`${a} is a positive number`)
}else if (a<0){
    console.log(`${a} is negative number`)
}else if( a==0){
    console.log(`${a} is zero`)
}else{
    console.log(`${a} is not a number`)
}

//switch
let n = 100
switch(n){
    case 1:
        console.log(1)
        break
    
    case 2:
        console.log(2)
        break
    
    case 3:
        console.log(3)
        break
    
    case 4:
        console.log(4)
        break

    default:
        console.log(10)
}

//ternary operators
let isRaining = true
isRaining ? console.log('it\'s raining') : console.log('it\'s not  raining')


