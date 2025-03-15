//closure: cho phép các hàm con trong hàm cha có thể truy cập các biến của hàm cha
//khi một hàm cha trả về 1 một hàm con, mà hàm con đó truy cập biến của hàm cha thì sau khi hàm cha thực thi, js vẫn lưu biến của hàm cha trong bộ nhớ chứ không giải phóng
//closure hữu ích khi cần lưu trạng thái, tạo biến private, hoặc tối ưu bộ nhớ


//bộ đếm với counter
function createCounter(){
    let count = 0;

    return {
        increment: function(){
            count++
            return count
        },
        decrement: function(){
            count--;
            return count
        },
        getValue: function(){
            return count
        }
    }
}

const counter =  createCounter();
console.log(counter.getValue())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter) //không thể truy cập được biến count => private!!!; muốn truy cập biến count thì phải gọi counter.getValue()
// Biến count được khai báo bên trong createCounter và chỉ có thể được truy cập thông qua các phương thức increment, decrement và getValue.
// Điều này cho phép bạn kiểm soát và bảo vệ trạng thái của biến count (tạo tính private).

//Memoization (Lưu kết quả tính toán với Closure)
function memoization(fn){ //tham số nhận vào là 1 hàm nào đó
    const cache = {} //khởi tạo 1 biến cache, biến này sẽ tồn tại trong bộ nhớ 
    return function(...args){ //trả về 1 hàm với spreads tham số
        const key = JSON.stringify(args) //chuyển args thành JSON rồi gắn cho biến key
        if(cache[key]){ //kiểm tra nếu key có tồn tại trong cache?
            console.log('Tra ve ket qua tu cache cho: ', key) //thì in ra dòng này 
            return cache[key] //rồi trả về key trong cache luôn (đã tính toán lần trc nên giờ gọi ra để trả về)
        }//còn không thì: 
        const result = fn(...args) //gọi hàm fn được truyền vào và tính toán rồi gắn kết quả cho biến result
        cache[key] = result //lưu giá trị của biến result vào cache[key] để nó tồn tại thì gọi nó ra thôi, không tính toán lại nữa
        return result //trả về biến result cho (lần đầu tính toán)
    }
}

function fibonacci(n){
    if (n < 2) return n
    return fibonacci(n-1) + fibonacci(n-2)
}
const memoizationFibonacci = memoization(fibonacci)
console.log(memoizationFibonacci(10))//55
console.log(memoizationFibonacci(10))//Tra ve ket qua tu cache cho:  [10]
                                     //55

//explain: 
// Hàm memoize tạo ra một biến cache trong phạm vi của nó để lưu kết quả của hàm fn theo từng đối số.
// Mỗi lần gọi hàm được memoize, nếu kết quả đã có trong cache thì trả về ngay mà không tính lại, giúp tối ưu thời gian xử lý.


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
})() //() ở cuối này là : để gọi thực thi hàm ngay lập tức!

UserModule.setUser('Zeq')
console.log(UserModule.getUser())
// Biến userName chỉ tồn tại bên trong module (closure) và không thể được truy cập trực tiếp từ bên ngoài.
// Chỉ có các hàm setUser và getUser được trả về và cho phép thay đổi hay đọc giá trị của userName.