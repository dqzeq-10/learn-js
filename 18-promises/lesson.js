//Promise constructor

//      SYNTAX
// const promise = new Promise((resolve, reject) => {
//     resolve('success')
//     reject('failure')
// })


const doPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if(skills.length > 0){
            resolve(skills)
        }else{
            reject('Something wrong has happend')
        }
    }, 2000);
})

doPromise.then(result =>{
    console.log(result)
}).catch(error => console.log(error))
//[ 'HTML', 'CSS', 'JS' ]

const doPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if(skills.includes('Node')){
            resolve('fullstack dev')
        }else{
            reject('Somethign wrong has happened')
        }
    }, 2000);
})

doPromise2.then(result =>{
    console.log(result)
}).catch(error => console.log(error))

const dP3 = new Promise((res =>{
    console.log('resolve7868')
},rej =>{
    console.log('reject34')
}))



//
const doPromise3 = new Promise((res, rej) =>{
    let bool = true;
    if (bool)
        res("Thanhcong")
    else
        rej("Thatbai")
})

doPromise3.then(result => console.log(result))
            .catch(error => console.log(error))


//Fetch API (lấy API)

const url = 'https://restcountries.com/v2/all'
fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
    })
    .catch(error => console.error(error))


//Async and Await (Không đồng bộ và chờ đợi) kết hợp với promise, dễ đọc dễ viết hơn promise
const square = async function(n) {
    return n*n
}
square(2) //Promise {<fulfilled>: 4}


//'async' ở trước function => return a promise
//to access the value from the promise. we ưill use the keyword await; để truy cập giá trị của promise thì dùng await

const value = await square(2)
console.log(value)


const url2 = 'https://restcountries.com/v2/all'
const fetchData = async() =>{
    try{
        const response = await fetch(url2)
        const countries = await response.json()
        console.log(countries)
    }catch(error){
        console.error(error)
    }
}

fetchData()
console.log('=====async and await')