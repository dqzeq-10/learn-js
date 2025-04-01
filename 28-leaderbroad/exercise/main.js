const title = document.createElement('h1')
title.textContent = 'LEADERBROAD'
document.body.appendChild(title)
title.style.textAlign = 'center'
title.style.color = '#333'
title.style.margin = '20px 0'

const divContainer = document.createElement('div')
document.body.appendChild(divContainer)
divContainer.style.display = 'grid' 
divContainer.style.gridTemplateColumns = '2fr 2fr 2fr 2fr 2fr'
divContainer.style.gap = '10px'
divContainer.style.alignItems = 'center'
divContainer.style.padding = '10px'
divContainer.style.width = '80%'
divContainer.style.margin = '0 auto 20px auto'
divContainer.style.backgroundColor = '#f5f5f5'
divContainer.style.borderRadius = '8px'
divContainer.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)'


const firstName = document.createElement('input')
divContainer.appendChild(firstName)
//style css
firstName.style.padding = '8px 12px'
firstName.style.border = '1px solid #ccc'
firstName.style.borderRadius = '4px'
firstName.style.fontSize = '14px'
firstName.style.width = '90%'
firstName.placeholder = 'First Name'

const lastName = document.createElement('input')
divContainer.appendChild(lastName)
//style css
lastName.style.padding = '8px 12px'
lastName.style.border = '1px solid #ccc'
lastName.style.borderRadius = '4px'
lastName.style.fontSize = '14px'
lastName.style.width = '90%'
lastName.placeholder = 'Last Name'

const country = document.createElement('input')
divContainer.appendChild(country)
//style css
country.style.padding = '8px 12px'
country.style.border = '1px solid #ccc'
country.style.borderRadius = '4px'
country.style.fontSize = '14px'
country.style.width = '90%'
country.placeholder = 'Country'

const score = document.createElement('input')
divContainer.appendChild(score)
//style css
score.style.padding = '8px 12px'
score.style.border = '1px solid #ccc'
score.style.borderRadius = '4px'
score.style.fontSize = '14px'
score.style.width = '90%'
score.placeholder = 'Score'
score.type = 'number'

const addPlayer = document.createElement('button')
addPlayer.textContent = 'Add player'
//style css
addPlayer.style.padding = '8px 15px'
addPlayer.style.backgroundColor = '#4CAF50'
addPlayer.style.color = 'white'
addPlayer.style.border = 'none'
addPlayer.style.borderRadius = '4px'
addPlayer.style.cursor = 'pointer'
addPlayer.style.fontSize = '14px'
addPlayer.style.fontWeight = 'bold'
addPlayer.style.transition = 'background-color 0.3s'
divContainer.appendChild(addPlayer)


class Player {
    constructor(fn, ln, c, s){
        this.firstName = fn
        this.lastName = ln
        this.country = c
        this.score = Number(s)
    }
    get getScore(){
        return this.score
    }
    set addScore(score){
        this.score += score
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}


const p1 = new Player('Quy', 'Tran', 'Vietnam', 100)
const p2 = new Player('Zeq', 'Tran', 'Vietnam', 99)
const p3 = new Player('Dinh', 'Quy', 'Vietnam', 70)

const listPlayer = [p1, p2, p3]

const divCList = document.createElement('div')
//style css
divCList.style.width = '80%'
divCList.style.margin = '0 auto'
divCList.style.backgroundColor = '#fff'
divCList.style.borderRadius = '8px'
divCList.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)'
divCList.style.padding = '15px'

document.body.appendChild(divCList)


function displayList(listPlayer){
    divCList.innerHTML =''
    listPlayer.sort((p1, p2) => p2.score - p1.score).forEach((player, index) => {

        //div for a player
        const divPlayer = document.createElement('div')
        divPlayer.style.display = 'grid'
        divPlayer.style.gridTemplateColumns = '2fr 1.5fr 1fr 2fr'
        divPlayer.style.gap = '10px'
        divPlayer.style.alignItems = 'center'
        divPlayer.style.padding = '10px'
        divPlayer.style.marginBottom = '5px'
        divPlayer.style.height = '50px'
        divPlayer.style.backgroundColor = index % 2 === 0 ? '#f9f9f9' : '#fff'
        divPlayer.style.borderRadius = '4px'
        divPlayer.style.border = '1px solid #eee'

        //div for name player
        const namePlayer = document.createElement('div')
        namePlayer.textContent = player.getFullName()
        namePlayer.style.fontWeight = 'bold'
        divPlayer.appendChild(namePlayer)

        //div for country
        const countryPlayer = document.createElement('div')
        countryPlayer.textContent = player.country
        countryPlayer.style.color = '#555'
        divPlayer.appendChild(countryPlayer)
        
        //div for score
        const scorePlayer = document.createElement('div')
        scorePlayer.textContent = player.score
        scorePlayer.style.fontWeight = 'bold'
        scorePlayer.style.color = '#333'
        divPlayer.appendChild(scorePlayer)

        //div for button manipulation
        const buttonManipulation = document.createElement('div')
        buttonManipulation.style.display = 'grid'
        buttonManipulation.style.gridTemplateColumns = '1fr 1fr 1fr'
        buttonManipulation.style.gap = '5px'
        buttonManipulation.style.alignItems = 'center'
        
        const btnDel = document.createElement('button')
        btnDel.textContent = '🗑️' // Changed from 'X' to trash icon
        btnDel.style.padding = '5px 10px'
        btnDel.style.backgroundColor = '#ff4d4d'
        btnDel.style.color = 'white'
        btnDel.style.border = 'none'
        btnDel.style.borderRadius = '4px'
        btnDel.style.cursor = 'pointer'
        btnDel.style.transition = 'all 0.2s'
        btnDel.style.fontSize = '14px'
        btnDel.title = 'Delete player'
        btnDel.addEventListener('click', ()=>{
            listPlayer.splice(index, 1)
            displayList(listPlayer)
        })
        btnDel.addEventListener('mouseover', () => {
            btnDel.style.backgroundColor = '#ff1a1a'
            btnDel.style.transform = 'scale(1.05)'
        })
        btnDel.addEventListener('mouseout', () => {
            btnDel.style.backgroundColor = '#ff4d4d'
            btnDel.style.transform = 'scale(1)'
        })
        
        const btnPlus = document.createElement('button')
        btnPlus.textContent = '+5'
        btnPlus.style.padding = '5px 10px'
        btnPlus.style.backgroundColor = '#4CAF50'
        btnPlus.style.color = 'white'
        btnPlus.style.border = 'none'
        btnPlus.style.borderRadius = '4px'
        btnPlus.style.cursor = 'pointer'
        btnPlus.style.transition = 'all 0.2s'
        btnPlus.style.fontSize = '14px'
        btnPlus.style.fontWeight = 'bold'
        btnPlus.title = 'Add 5 points'
        btnPlus.addEventListener('click', () => {
            player.addScore = 5
            displayList(listPlayer)
        })
        btnPlus.addEventListener('mouseover', () => {
            btnPlus.style.backgroundColor = '#45a049'
            btnPlus.style.transform = 'scale(1.05)'
        })
        btnPlus.addEventListener('mouseout', () => {
            btnPlus.style.backgroundColor = '#4CAF50'
            btnPlus.style.transform = 'scale(1)'
        })
        
        const btnMinus = document.createElement('button')
        btnMinus.textContent = '-5'
        btnMinus.style.padding = '5px 10px'
        btnMinus.style.backgroundColor = '#ff9800'
        btnMinus.style.color = 'white'
        btnMinus.style.border = 'none'
        btnMinus.style.borderRadius = '4px'
        btnMinus.style.cursor = 'pointer'
        btnMinus.style.transition = 'all 0.2s'
        btnMinus.style.fontSize = '14px'
        btnMinus.style.fontWeight = 'bold'
        btnMinus.title = 'Subtract 5 points'
        btnMinus.addEventListener('click', () => {
            player.addScore = -5
            displayList(listPlayer)
        })
        btnMinus.addEventListener('mouseover', () => {
            btnMinus.style.backgroundColor = '#e68a00'
            btnMinus.style.transform = 'scale(1.05)'
        })
        btnMinus.addEventListener('mouseout', () => {
            btnMinus.style.backgroundColor = '#ff9800'
            btnMinus.style.transform = 'scale(1)'
        })
        
        buttonManipulation.appendChild(btnDel)
        buttonManipulation.appendChild(btnPlus)
        buttonManipulation.appendChild(btnMinus)

        divPlayer.appendChild(buttonManipulation)
        
        divCList.appendChild(divPlayer)
    })
}

addPlayer.addEventListener('click', () =>{
    if (firstName.value === "" || lastName.value === "" || country.value === "" || score.value === ""){
        const error = document.createElement('div')
        error.textContent = 'All fields are required!'
        error.style.color = 'red'
        error.style.gridColumn = '1 / span 5'
        error.style.textAlign = 'center'
        error.style.padding = '5px'
        error.style.marginTop = '5px'
        divContainer.appendChild(error)
        setTimeout(() => {
            divContainer.removeChild(error);
        }, 3000);
    }else{
        const newPlayer = new Player(firstName.value, lastName.value, country.value, Number(score.value))
        listPlayer.push(newPlayer)
        firstName.value = ''
        lastName.value = ''
        country.value = ''
        score.value = ''
    }
    displayList(listPlayer)
})

// Add some general document styling
document.body.style.fontFamily = 'Arial, sans-serif'
document.body.style.backgroundColor = '#f0f2f5'
document.body.style.margin = '0'
document.body.style.padding = '20px'

// Add hover effect for the Add Player button
addPlayer.addEventListener('mouseover', () => {
    addPlayer.style.backgroundColor = '#45a049'
})
addPlayer.addEventListener('mouseout', () => {
    addPlayer.style.backgroundColor = '#4CAF50'
})

displayList(listPlayer)

