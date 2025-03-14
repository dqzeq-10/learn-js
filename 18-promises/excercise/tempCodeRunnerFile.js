const url = 'https://restcountries.com/v2/all'
fetch(url).then(data => console.log(data))
    .catch(err => console.log(err))