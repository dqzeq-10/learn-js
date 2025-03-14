//1 read the cats api and find the average weight of cat in metric unit (hệ mét IS(kg))
const url = 'https://api.thecatapi.com/v1/breeds'

const fetchAndFindAverage = async () =>{ //async trước () để nó return về 1 promise
    try {
        const response = await fetch(url)
        const data = await response.json()
        

        const averageWeight = data.map(cat => {
            const weight = cat.weight.metric
            const [min, max] = weight.split(' - ').map(Number)
            return (min+max)/2
        })

        const sum = averageWeight.reduce((acc,n) => acc+n, 0)
        const average = sum/data.length
        console.log(average)
    } catch (error) {
        console.log(error)
    }
}

fetchAndFindAverage()
  