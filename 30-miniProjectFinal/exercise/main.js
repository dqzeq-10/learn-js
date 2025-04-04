const title = document.createElement('h1');
title.textContent = 'World Countries Data';
title.style.textAlign = 'center';
title.style.color = '#2C3E50';
title.style.fontFamily = 'Segoe UI, Roboto, Arial, sans-serif';
title.style.fontSize = '2.5rem';
title.style.padding = '20px 0';
title.style.margin = '10px 0 20px';
title.style.textTransform = 'uppercase';
title.style.letterSpacing = '2px';
title.style.fontWeight = '700';
title.style.textShadow = '2px 2px 4px rgba(0,0,0,0.1)';
document.body.appendChild(title);

const divC = document.createElement('div');
divC.style.width = '100%';
document.body.appendChild(divC);

const inputSearch = document.createElement('input');
inputSearch.style.width = '80%';
inputSearch.style.height = '48px';
inputSearch.style.borderRadius = '24px';
inputSearch.style.border = '2px solid #ddd';
inputSearch.style.padding = '0 20px';
inputSearch.style.fontSize = '16px';
inputSearch.style.display = 'block';
inputSearch.style.margin = '0 auto';
inputSearch.style.textAlign = 'center';
inputSearch.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
inputSearch.style.transition = 'all 0.3s ease';
inputSearch.placeholder = 'Search countries by name, city and language';
inputSearch.style.fontFamily = 'Arial, sans-serif';
inputSearch.style.color = '#555';

inputSearch.addEventListener('focus', () => {
    inputSearch.style.borderColor = '#3498db';
    inputSearch.style.boxShadow = '0 4px 12px rgba(52,152,219,0.25)';
    inputSearch.style.outline = 'none';
});

inputSearch.addEventListener('blur', () => {
    inputSearch.style.borderColor = '#ddd';
    inputSearch.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
});

let originalCountriesData = [];
let arrCountriesObj
window.addEventListener('DOMContentLoaded', () => {
    originalCountriesData = [...arrCountriesObjjj];
    arrCountriesObj = originalCountriesData;
    displayCountries(arrCountriesObj);
    displayS(getPopulationListSorted(arrCountriesObj));
});
inputSearch.addEventListener('input', ee => {
    const searchValue = ee.target.value.toLowerCase();
    if (searchValue === '') {
        arrCountriesObj = [...originalCountriesData];
    }
    arrCountriesObj = originalCountriesData.filter(country =>
        Object.values(country).some(val =>
            String(val).toLowerCase().includes(searchValue)
        )
    );
    displayCountries(arrCountriesObj);
    displayS(getPopulationListSorted(arrCountriesObj));
});

divC.style.display = 'flex';
divC.style.flexDirection = 'column';
divC.style.alignItems = 'center';
divC.style.justifyContent = 'center';
divC.appendChild(inputSearch);

const divCbtn = document.createElement('div');
divCbtn.style.display = 'grid';
divCbtn.style.gridTemplateColumns = '1fr 1fr 1fr';
divCbtn.style.gap = '10px';
divCbtn.style.alignItems = 'center';
divCbtn.style.padding = '10px';
divCbtn.style.marginBottom = '5px';
divCbtn.style.height = '50px';
divCbtn.style.width = '500px'
divC.appendChild(divCbtn);

let ascName = true;
let ascCapital = true;
let ascPopulation = true;

const sortByName = document.createElement('button');
sortByName.textContent = 'NAME';
sortByName.value = 'name';
sortByName.addEventListener('click', e => {
    const list = sortBy(sortByName.value, arrCountriesObj, ascName);
    displayCountries(list);
    ascName = !ascName;
});
divCbtn.appendChild(sortByName);

const sortByCapital = document.createElement('button');
sortByCapital.textContent = 'CAPITAL';
sortByCapital.value = 'capital';
sortByCapital.addEventListener('click', e => {
    const list = sortBy(sortByCapital.value, arrCountriesObj, ascCapital);
    displayCountries(list);
    ascCapital = !ascCapital;
});
divCbtn.appendChild(sortByCapital);

const sortByPopulation = document.createElement('button');
sortByPopulation.textContent = 'POPULATION';
sortByPopulation.value = 'population';
sortByPopulation.addEventListener('click', e => {
    const list = sortBy(sortByPopulation.value, arrCountriesObj, ascPopulation);
    displayCountries(list);
    ascPopulation = !ascPopulation;
});
divCbtn.appendChild(sortByPopulation);

const enhanceButton = (btn) => {
    btn.style.padding = '10px 15px';
    btn.style.margin = '0 5px';
    btn.style.backgroundColor = '#34495e';
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.borderRadius = '4px';
    btn.style.cursor = 'pointer';
    btn.style.fontSize = '14px';
    btn.style.fontWeight = 'bold';
    btn.style.fontFamily = 'Arial, sans-serif';
    btn.style.letterSpacing = '1px';
    btn.style.transition = 'all 0.3s ease';
    btn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';

    btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = '#2c3e50';
        btn.style.transform = 'translateY(-2px)';
        btn.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
    });

    btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = '#34495e';
        btn.style.transform = 'translateY(0)';
        btn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    });
};

enhanceButton(sortByName);
enhanceButton(sortByCapital);
enhanceButton(sortByPopulation);


const countriesContainer = document.createElement('div');
document.body.appendChild(countriesContainer);

function sortBy(nameSort, listCountries, ascOrDesc) {
    if (nameSort === null || listCountries === null || ascOrDesc === null) {
        console.log('nameSort === null; listCountries === null; ascOrDesc === null');
        return;
    } else {
        if (nameSort === 'population') {
            if (ascOrDesc) {
                return listCountries.sort((a, b) => a[nameSort] - b[nameSort]);
            } else {
                return listCountries.sort((a, b) => b[nameSort] - a[nameSort]);
            }
        } else if (nameSort === 'name') {
            if (ascOrDesc) {
                return listCountries.sort((a, b) => a[nameSort].localeCompare(b[nameSort]));
            } else {
                return listCountries.sort((a, b) => b[nameSort].localeCompare(a[nameSort]));
            }
        } else if (nameSort === 'capital') {
            const listCountries2 = listCountries.filter(e => Object.hasOwn(e, 'capital'));
            if (ascOrDesc) {
                return listCountries2.sort((a, b) => a[nameSort].localeCompare(b[nameSort]));
            } else {
                return listCountries2.sort((a, b) => b[nameSort].localeCompare(a[nameSort]));
            }
        }
    }
}

function displayCountries(listCountriesObj) {
    countriesContainer.innerHTML = '';

    for (const country of listCountriesObj) {
        let countryBox = document.createElement('div');
        countryBox.style.width = '200px';
        countryBox.style.padding = '10px';
        countryBox.className = 'country-box';
        countriesContainer.style.display = 'flex';
        countriesContainer.style.flexWrap = 'wrap';
        countriesContainer.style.gap = '20px';
        countriesContainer.style.justifyContent = 'center';
        countryBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        countryBox.style.borderRadius = '8px';
        countryBox.style.overflow = 'hidden';
        countryBox.style.transition = 'transform 0.3s, box-shadow 0.3s';
        countryBox.style.backgroundColor = 'white';
        countriesContainer.appendChild(countryBox);


        let imgContainer = document.createElement('div');
        imgContainer.style.width = '100%';
        imgContainer.style.height = '120px';
        imgContainer.style.overflow = 'hidden';
        imgContainer.style.display = 'flex';
        imgContainer.style.alignItems = 'center';
        imgContainer.style.justifyContent = 'center';
        imgContainer.style.backgroundColor = '#f5f5f5';
        countryBox.appendChild(imgContainer);

        let imgBox = document.createElement('img');
        imgBox.src = country.flag ? country.flag : '';
        imgBox.style.maxWidth = '100%';
        imgBox.style.maxHeight = '100%';
        imgBox.style.objectFit = 'contain';
        imgContainer.appendChild(imgBox);

        let nameCountry = document.createElement('p');
        nameCountry.textContent = country.name;
        nameCountry.style.color = 'orange';
        nameCountry.style.fontSize = '25px';
        nameCountry.style.textAlign = 'center';
        countryBox.appendChild(nameCountry);

        let nameCapital = document.createElement('p');
        nameCapital.textContent = `Capital: ${country.capital ? country.capital : 'none'}`;
        countryBox.appendChild(nameCapital);

        let languages = document.createElement('p');
        languages.textContent = `Languages: ${country.languages.join(', ')}`;
        countryBox.appendChild(languages);

        let population = document.createElement('p');
        population.textContent = `Population: ${country.population ? country.population : 'none'}`;
        countryBox.appendChild(population);
    }
}

function getPopulationListSorted(countries) {
    const a = countries.map(e => [e.name, e.population]);
    const b = a.sort((a, b) => b[1] - a[1]);
    return b.slice(0, 10);
}

function getLanguageListSorted(countries) {
    const a = countries.flatMap(e => e.languages);
    const b = a.reduce((acc, lang) => {
        acc[lang] = (acc[lang] || 0) + 1;
        return acc;
    }, {});
    const c = Object.entries(b).sort((a, b) => b[1] - a[1]);
    return c.slice(0, 10);
}

const buttonPop = document.createElement('button');
buttonPop.className = 'population';
buttonPop.textContent = 'Population';

const buttonLan = document.createElement('button');
buttonLan.className = 'languages';
buttonLan.textContent = 'Languages';

const graphs = document.createElement('div');
graphs.className = 'graphs';

document.body.appendChild(graphs);

function displayS(listArr) {
    graphs.innerHTML = '';

    const graphTitle = document.createElement('h2');
    graphTitle.textContent = listArr === getPopulationListSorted(originalCountriesData) ?
        'Top 10 Most Populated Countries' : 'Top 10 Most Spoken Languages';
    graphTitle.style.textAlign = 'center';
    graphTitle.style.color = '#333';
    graphTitle.style.margin = '20px 0';
    graphTitle.style.fontFamily = 'Arial, sans-serif';
    graphs.appendChild(graphTitle);

    const arrPopulation = listArr.map(c => c[1]);
    const maxPopulation = Math.max(...arrPopulation);

    graphs.style.backgroundColor = '#f8f9fa';
    graphs.style.padding = '20px';
    graphs.style.borderRadius = '10px';
    graphs.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    graphs.style.margin = '20px auto';
    graphs.style.maxWidth = '900px';

    for (const country of listArr) {
        const divC2 = document.createElement('div');
        divC2.style.display = 'grid';
        divC2.style.gridTemplateColumns = '2fr 6fr 2fr';
        divC2.style.gap = '10px';
        divC2.style.alignItems = 'center';
        divC2.style.padding = '10px';
        divC2.style.marginBottom = '10px';
        divC2.style.height = '50px';
        divC2.style.backgroundColor = '#fff';
        divC2.style.borderRadius = '6px';
        divC2.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        divC2.style.transition = 'transform 0.2s ease-in-out';

        divC2.addEventListener('mouseover', () => {
            divC2.style.transform = 'translateY(-2px)';
            divC2.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });

        divC2.addEventListener('mouseout', () => {
            divC2.style.transform = 'translateY(0)';
            divC2.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        });

        const nameCountry = document.createElement('div');
        nameCountry.textContent = country[0];
        nameCountry.style.fontSize = '17px';
        nameCountry.style.fontWeight = 'bold';
        nameCountry.style.color = '#333';
        nameCountry.style.paddingLeft = '10px';
        nameCountry.style.fontFamily = 'Arial, sans-serif';
        divC2.appendChild(nameCountry);

        const percent = document.createElement('div');
        percent.style.minHeight = '32px';
        percent.style.backgroundColor = '#FF7F50';
        percent.style.borderRadius = '4px';
        percent.style.width = `${(country[1] / maxPopulation) * 100}%`;
        percent.style.transition = 'width 0.5s ease-in-out, background-color 0.3s';
        percent.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.2)';
        divC2.appendChild(percent);

        const population = document.createElement('div');
        population.textContent = country[1].toLocaleString();
        population.style.fontFamily = 'Arial, sans-serif';
        population.style.fontSize = '15px';
        population.style.color = '#555';
        population.style.textAlign = 'right';
        population.style.paddingRight = '10px';
        divC2.appendChild(population);

        graphs.appendChild(divC2);
    }
}

buttonPop.style.padding = '10px 20px';
buttonPop.style.margin = '10px';
buttonPop.style.backgroundColor = '#4CAF50';
buttonPop.style.color = 'white';
buttonPop.style.border = 'none';
buttonPop.style.borderRadius = '5px';
buttonPop.style.cursor = 'pointer';
buttonPop.style.fontSize = '16px';
buttonPop.style.fontFamily = 'Arial, sans-serif';
buttonPop.style.transition = 'background-color 0.3s, transform 0.2s';

buttonLan.style.padding = '10px 20px';
buttonLan.style.margin = '10px';
buttonLan.style.backgroundColor = '#3F51B5';
buttonLan.style.color = 'white';
buttonLan.style.border = 'none';
buttonLan.style.borderRadius = '5px';
buttonLan.style.cursor = 'pointer';
buttonLan.style.fontSize = '16px';
buttonLan.style.fontFamily = 'Arial, sans-serif';
buttonLan.style.transition = 'background-color 0.3s, transform 0.2s';

buttonPop.addEventListener('mouseover', () => {
    buttonPop.style.backgroundColor = '#45a049';
    buttonPop.style.transform = 'scale(1.05)';
});

buttonPop.addEventListener('mouseout', () => {
    buttonPop.style.backgroundColor = '#4CAF50';
    buttonPop.style.transform = 'scale(1)';
});

buttonLan.addEventListener('mouseover', () => {
    buttonLan.style.backgroundColor = '#303F9F';
    buttonLan.style.transform = 'scale(1.05)';
});

buttonLan.addEventListener('mouseout', () => {
    buttonLan.style.backgroundColor = '#3F51B5';
    buttonLan.style.transform = 'scale(1)';
});

const buttonContainer = document.createElement('div');
buttonContainer.style.textAlign = 'center';
buttonContainer.style.marginTop = '20px';
buttonContainer.appendChild(buttonPop);
buttonContainer.appendChild(buttonLan);
document.body.insertBefore(buttonContainer, graphs);

buttonPop.addEventListener('click', () => {
    displayS(getPopulationListSorted(arrCountriesObj));
});

buttonLan.addEventListener('click', () => {
    displayS(getLanguageListSorted(arrCountriesObj));
});

