// Thêm stylesheet vào head
const stylesheet = document.createElement('style');
stylesheet.textContent = `
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f5f5f5;
    }
    
    h1 {
        text-align: center;
        color: #333;
        margin-bottom: 5px;
    }
    
    .subtitle {
        text-align: center;
        color: #666;
        margin-bottom: 20px;
    }
    
    .search-container {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 25px;
    }
    
    .button-group {
        display: grid;
        grid-template-columns: 1fr 1fr 0.5fr;
        gap: 10px;
    }
    
    .btn {
        padding: 12px;
        border: none;
        background-color: #e9e9e9;
        color: #333;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 4px;
    }
    
    .btn:hover {
        background-color: #d5d5d5;
    }
    
    .btn.active {
        background-color: #4CAF50;
        color: white;
    }
    
    .search-input {
        padding: 12px 15px;
        font-size: 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box;
    }
    
    .search-input:focus {
        border-color: #4CAF50;
        outline: none;
        box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
    }
    
    .countries-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
    
    .country-box {
        width: 120px;
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        transition: transform 0.2s;
        font-size: 14px;
        padding: 10px;
        box-sizing: border-box;
    }
    
    .country-box:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .search-status {
        text-align: center;
        color: #666;
        margin: 10px 0;
    }
    
    @media (max-width: 768px) {
        .button-group {
            grid-template-columns: 1fr;
        }
        
        .countries-container {
            gap: 5px;
        }
        
        .country-box {
            width: 100px;
            height: 100px;
        }
    }
`;
document.head.appendChild(stylesheet);

// Cải thiện cấu trúc DOM
document.body.innerHTML = '';

const title = document.createElement('h1');
title.textContent = 'WORLD COUNTRIES LIST';
document.body.appendChild(title);

const subtitle = document.createElement('p');
subtitle.className = 'subtitle';
subtitle.textContent = `Total Number of countries: ${countries.length}`;
document.body.appendChild(subtitle);

const searchContainer = document.createElement('div');
searchContainer.className = 'search-container';

const buttonGroup = document.createElement('div');
buttonGroup.className = 'button-group';

const sw = document.createElement('button');
sw.textContent = 'STARTING WITH';
sw.className = 'btn active'; // Mặc định active
buttonGroup.appendChild(sw);

const swaw = document.createElement('button');
swaw.textContent = 'SEARCH WITH ANY WORD';
swaw.className = 'btn';
buttonGroup.appendChild(swaw);

const sort = document.createElement('button');
sort.textContent = 'SORT';
sort.className = 'btn';
buttonGroup.appendChild(sort);

searchContainer.appendChild(buttonGroup);

const search = document.createElement('input');
search.className = 'search-input';
search.placeholder = 'Search country...';
searchContainer.appendChild(search);

const searchStatus = document.createElement('p');
searchStatus.className = 'search-status';
searchContainer.appendChild(searchStatus);

document.body.appendChild(searchContainer);

const countriesContainer = document.createElement('div');
countriesContainer.className = 'countries-container';
document.body.appendChild(countriesContainer);

// Cập nhật hàm performSearch để sử dụng classes
function performSearch() {
    countriesContainer.innerHTML = '';
    const list = displayCountries(countries, search.value, optionSearch);
    
    // Hiển thị thông tin tìm kiếm
    searchStatus.textContent = `Showing ${list.length} of ${countries.length} countries`;
    
    for (const country of list) {
        let countryBox = document.createElement('div');
        countryBox.textContent = country;
        countryBox.className = 'country-box';
        countriesContainer.appendChild(countryBox);
    }
}

// Cập nhật active state cho buttons
function updateActiveButton() {
    // Reset all buttons
    sw.className = 'btn';
    swaw.className = 'btn';
    sort.className = 'btn';
    
    // Set active button
    if (optionSearch === 'sw') {
        sw.className = 'btn active';
    } else if (optionSearch === 'swaw') {
        swaw.className = 'btn active';
    } else if (optionSearch === 's') {
        sort.className = 'btn active';
    }
}

// Cập nhật event listeners
let optionSearch = 'sw';

sw.addEventListener('click', e => {
    optionSearch = 'sw';
    updateActiveButton();
    performSearch();
});

swaw.addEventListener('click', e => {
    optionSearch = 'swaw';
    updateActiveButton();
    performSearch();
});

sort.addEventListener('click', e => {
    optionSearch = 's';
    updateActiveButton();
    performSearch();
});

// Thêm debounce để cải thiện hiệu suất khi gõ
function debounce(func, wait = 300) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

search.addEventListener('input', debounce(() => {
    performSearch();
}));

// Hiển thị tất cả quốc gia khi trang tải xong
performSearch();

function displayCountries(countriesList ,strName, optionSearch){

    if(!strName || strName.trim() === ''){
        return optionSearch === 's' ? [...countriesList].sort() : countriesList
    }

    const query = strName.trim().toLowerCase()

    if (optionSearch === 'sw'){

            return countriesList.filter(e => e.toLowerCase().startsWith(query))

    }else if (optionSearch === 'swaw'){

            return countriesList.filter(e => e.toLowerCase().includes(query))
    }else if (optionSearch === 's'){
        return [...countriesList].sort()
    }
    return countriesList
}