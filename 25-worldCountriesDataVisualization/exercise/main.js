function getPopulationListSorted(countries){
    const a = countries.map(e => [e.name, e.population])
    const b = a.sort((a,b) => b[1] - a[1])
    return b.slice(0, 10)
}
function getLanguageListSorted(countries){
    const a = countries.flatMap(e => e.languages)
    const b = a.reduce((acc, lang) => {
        acc[lang] = (acc[lang] || 0) + 1
        return acc
    }, {})
    const c = Object.entries(b).sort((a,b) => b[1] - a[1])
    return c.slice(0,10)
}

// console.log(getPopulationListSorted(countries_data))
// console.log(getLanguageListSorted(countries_data))

const buttonPop = document.querySelector('.population')
const buttonLan = document.querySelector('.languages')

const graphs = document.querySelector('.graphs')

function displayS(listArr){
graphs.innerHTML = ''
const arrPopulation = listArr.map(c => c[1])
const maxPopulation = Math.max(...arrPopulation)

for(const country of listArr){
    const divC = document.createElement('div')
    divC.style.display = 'grid';
    divC.style.gridTemplateColumns = '2fr 6fr 2fr';
    divC.style.gap = '10px';
    divC.style.alignItems = 'center';
    divC.style.padding = '10px';
    divC.style.marginBottom = '5px';
    divC.style.height = '50px'; 

    const nameCountry = document.createElement('div')
    nameCountry.textContent = country[0]
    nameCountry.style.fontSize = '17px'
    divC.appendChild(nameCountry)

    const percent = document.createElement('div')
    percent.style.minHeight = '32px'
    percent.style.backgroundColor = 'orange'
    percent.style.width = `${(country[1] / maxPopulation) * 100}%`
    divC.appendChild(percent)

    const population = document.createElement('div')
    population.textContent = country[1]
    divC.appendChild(population)
    
    graphs.appendChild(divC)
}
}

const list10PopulationCountries = getPopulationListSorted(countries_data)
const list10LanguageMost = getLanguageListSorted(countries_data)

buttonPop.addEventListener('click', e =>{
    displayS(list10PopulationCountries)
})

buttonLan.addEventListener('click', e => {
    displayS(list10LanguageMost)
})

window.onload = () => {
    displayS(list10PopulationCountries)
}
