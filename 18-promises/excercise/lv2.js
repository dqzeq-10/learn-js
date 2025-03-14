const url = 'https://api.thecatapi.com/v1/breeds'
const fetchDataaa = async () =>{
    try {
        const reps = await fetch(url)
        const data = await reps.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

fetchDataaa()
console.log('calling api cat')