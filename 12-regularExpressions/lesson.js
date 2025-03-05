//regular: chính thức, thường xuyên
//expression: biểu thức, sự biểu lộ
//regular expressions: BIỂU THỨC CHÍNH QUY là ngôn ngữ lập trình nhỏ giúp tìm mẫu hình trong dữ liệu. a regExp can be used to check ì some pattern exists in a different data type.
// \regExp\flag
// flag could be g, i, m , s, u or y


//flag:
// g: a global flag which means looking for a parttern in whole text tìm kiếm trong toàn bộ văn bản
// i: case insensitive flag (lowercase or uppercase)
// m: multiline đa dòng



//without flag
let pattern1 = 'love'
let regExp1 = new RegExp(pattern)

//with flag
let flag = 'gi'
let regExp2 = new RegExp(pattern, flag)

let regExp3 = new RegExp('love', 'gi')

let regExp4 = /love/gi


//test():Tests for a match in a string. It returns true or false.
const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str)
console.log(result) //true

//match(): returns an array containing all of the matches or null
const resultMatch = str.match(pattern)
console.log(resultMatch) //['love', index: 2, input: 'I love JavaScript', groups: undefined]

const patternWFlag = /love/g
const resultM = str.match(patternWFlag)
console.log(resultM) //['love']


//search() of string: return the index of the match or -1 if fail
console.log(str.search(patternWFlag)) //2 

//replace() of string: search and replaces
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

const matchReplaced = txt.replace(/Python|python/, 'JavaScript') //thay the Python not python
console.log(matchReplaced) //JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language

const  matchReplaced2 = txt.replace(/Python|python/g, 'JavaScript') //thay the Python va python with flag g (global)
console.log(matchReplaced2) //JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language

const matchReplaced3 = txt.replace(/Python/gi, "Js") //thay the Python va python bang flag g va i
console.log(matchReplaced3) //Js is the most beautiful language that a human begin has ever created.I recommend Js for a first programming language 

const txtt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

const matches = txtt.replace(/%/g, '')
console.log(matches) //I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.

/**
[] : tập các kí tự 
 [a-c]: a or b or c
 [a-z]: any letter a to z
 [A-Z]: any letter A to Z
 [0-3]: 0 or 1 or 2 or 3
 [0-9]: any number 0 to 9
 [A-Za-z0-9]: any character which is a to z, A to Z, 0 to 9


\ : sử dụng để thoát ý nghĩa đặc biệt của kí tự đó trong RegExp để dùng kí tự đó như kí tự thông thường: special character(. (anychar) *(lặp 0 or nhiều lần) +(lặp 1 hoặc nhiều lần) ?(0 hoặc 1 lần) ^(bắt đầu chuỗi) $(kết thúc chuỗi) {}(giới hạn số lần lặp) [](nhóm kí tự) ()(nhóm biểu thúc) `(`) \(escape)) 


. : any character EXCEPT new line character(\n)


^ :start with:  /^hello/


$ :end with: /world$/'


* :0 or nhiều lần: /abc*/        /* có 'c' hay không cũng được, nhưng phải có ab


+ :1 or nhiều lần: /abc+/     có ab và có 1 ít nhất một kí tự c: abc, abccc, abcccccc


? :0 or 1 lần: /abc?/       tìm ab sau đó có thể có hoặc không có 'c' ab, abc, abccc => abc



\b : ranh giới từ: /\bcat\b/    đúng:"i love my cat",   sai: "i love my cats"


{n} :kí tự hoặc (nhóm kí tự) lặp lại chính xác n lần
{n,} :lặp lại ít nhất n
{n,m} :lặp lại tổi thiểu n lần và tối đa m lần

| :or: a|b

/d digit(chữ số)

/s space

/w word

*/

//[]
const patternn  = '[Aa]pple' //A hoặc a đều được
const txttt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
console.log(txttt.match(patternn))

const p1 = /[Aa]pple/g
console.log(txttt.match(p1)) //['Apple', 'apple']

console.log(txttt.match(/[Aa]pple|[Bb]anana/g)) //['Apple', 'banana', 'apple', 'banana']


// \
const txt1 = 'This regular expression example was made in January 12,  2020.'
console.log(txt1.match(/\d/g)) //['1', '2', '2', '0', '2', '0']

// + 1 n
console.log(txt1.match(/\d+/g)) //['12', '2020'] ít nhất là từ 2 chữ số trở lên

// .
const txt2 = 'Apple and banana are fruits'
console.log(txt2.match(/[a]./g)) //['an', 'an', 'an', 'a', 'ar'] lấy mỗi 2 kí tự a và một 1 kí tự bất kì (.)

console.log(txt2.match(/[a].+/g)) //['and banana are fruits] .+ lấy cho hết đến hết chuỗi

// * 0 n
const txt3 = 'Apple and banana are fruits'
console.log(txt3.match(/[a].*/g)) //['and banana are fruits']

// ? 0 1
const txt4 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
console.log(txt4.match(/[Ee]-?mail/g)) //['e-mail', 'email', 'Email', 'E-mail']

//
const txt5 = 'This regular expression example was made in December 6,  2019.'
console.log(txt5.match(/\b\w{4}\b/g))  //['This', 'made', '2019']

console.log(txt5.match(/\b[a-zA-Z]{4}\b/g)) //['This', 'made']



//.. tiep



// ^
const txt6 = 'This regular expression example was made in December 6,  2019.'
console.log(txt6.match(/^This/))

console.log(txt6.match(/[^A-Za-z,. ]+/g)) //['6', '2019']

//exact ^ $
let name = 'Asabeneh'
// console.log(name.test(/^[A-Z][a-z]{3,12}$/))