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