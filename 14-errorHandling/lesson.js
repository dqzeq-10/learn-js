try {
    let lastName = 'Tran'
    let fullName = firstName + ' ' + lastName
} catch (error) {
 console.log(error)   
}
//ReferenceError: firstName is not defined

try{
    let a
    let c = a+b
}catch(err){
    console.error(err)
}finally{
    console.log('ok')
}
//ReferenceError: b is not defined
//ok

try {
    let a
    let b
    let c
} catch (error) {
    console.error(error)
}finally{
    console.log("if error or NOT, this case will be executed")
}
//if error or NOT, this case will be executed

//THROW: cho phép chúng ta tạo ra một lỗi tùy chỉnh

throw 'error10' //ném ra lỗi tên là 'error10'

const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try{
        if (x == '') throw 'empty'
        if (isNaN(x)) throw 'not a number'
        x = Number(x)
        if (x < 5) throw 'too low'
        if (x>10) throw 'too high'
    }catch(err){
        console.log(err)
    }
}
throwErrorExampleFun() //tùy vào x nó sẽ trả về throw cụ thể đã định nghĩa!

//ERROR TYPES
//referenceError
//SyntaxError
//TypeError