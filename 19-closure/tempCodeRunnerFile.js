
//Module pattern: dùng closure để tạo các biến private và chỉ cho phép truy cập thông qua các hàm công khai
const UserModule = (function(){
    let userName = "Default"

    function setUser(name){
        userName = name
    }
    function getUser(){
        return userName
    }

    return {
        setUser, getUser
    }
})

UserModule.setUser('Zeq')
console.log(UserModule.getUser())