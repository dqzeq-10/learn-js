/**
 * styly guide airbnb:
 * sử dụng const cho tất cả các tham chiếu
 * only (let) -no (var)
 * 
 * khởi tạo object bằng {} - not "new Object()"
 * 
 * dùng [key()] trong lúc khởi tạo để tạo tên thuộc tính động
 * 
 * object-shorthand
 * 
 * trong object: 
 *      dùng addValue(value){
 *          //code
 *      }
 * thay vì (not)
 *          addValue: function(value){
 *              //code
 *          }
 * 
 * khi khai báo object, first: properties, then method
 * 
 * quote-props
 * 
 * no-prototype-builtins
 * 
 * // không tốt
console.log(object.hasOwnProperty(key));

// tốt
console.log(Object.prototype.hasOwnProperty.call(object, key));

// tốt nhất
const has = Object.prototype.hasOwnProperty; // lưu tạm phương thức một lần, dùng cho cả mô-đun.
console.log(has.call(object, key));

// import has from 'has'; // https://www.npmjs.com/package/has
// console.log(has.call(object, key));




    ... spreads - not Object.assign

    [] - not new Array();

    .pus() - not  =

    sao chép mảng bằng ...args
    const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
    arrLikearrLike to array: use Array.from(objectArrLike)

    destructuring

    paragraph should oneline not multilines

    // không tốt
    function sayHi(name) {
    return 'Bạn có khỏe không, ' + name + '?';
    }

    // không tốt
    function sayHi(name) {
    return ['Bạn có khỏe không, ', name, '?'].join();
    }

    // tốt
    function sayHi(name) {
    return `Bạn có khỏe không, ${name}?`;
    }

    no-eval()
    

 */


