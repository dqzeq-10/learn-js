const title = document.createElement('h1')
title.textContent = 'LEADERBROAD'
document.body.appendChild(title)

const divContainer = document.createElement('div')
document.body.appendChild(divContainer)
divContainer.style.display = 'grid' 
divContainer.style.gridTemplateColumns = '2fr 2fr 2fr 2fr 2fr'
divContainer.style.gap = '10px'
divContainer.style.alignItems = 'center'
divContainer.style.padding = '10px'
divContainer.style.width = '80%'


const firstName = document.createElement('input')
divContainer.appendChild(firstName)
//style css

const lastName = document.createElement('input')
divContainer.appendChild(lastName)
//style css

const country = document.createElement('input')
divContainer.appendChild(country)
//style css

const score = document.createElement('input')
divContainer.appendChild(score)
//style css

const addPlayer = document.createElement('button')
addPlayer.textContent = 'Add player'
//style css
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

        //div for name player
        const namePlayer = document.createElement('div')
        namePlayer.textContent = player.getFullName()
        divPlayer.appendChild(namePlayer)

        //div for country
        const countryPlayer = document.createElement('div')
        countryPlayer.textContent = player.country
        divPlayer.appendChild(countryPlayer)
        
        //div for score
        const scorePlayer = document.createElement('div')
        scorePlayer.textContent = player.score
        divPlayer.appendChild(scorePlayer)

        //div for button manipulation
        const buttonManipulation = document.createElement('div')
        buttonManipulation.style.display = 'grid'
        buttonManipulation.style.gridTemplateColumns = '1fr 1fr 1fr'
        buttonManipulation.style.gap = '5px'
        buttonManipulation.style.alignItems = 'center'
        
        const btnDel = document.createElement('button')
        btnDel.textContent = 'X'
        btnDel.addEventListener('click', ()=>{
            listPlayer.splice(index, 1)
            displayList(listPlayer)
        })
        
        const btnPlus = document.createElement('button')
        btnPlus.textContent = '+5'
        btnPlus.addEventListener('click', () => {
            player.addScore = 5
            displayList(listPlayer)
        })
        
        
        const btnMinus = document.createElement('button')
        btnMinus.textContent = '-5'
        btnMinus.addEventListener('click', () => {
            player.addScore = -5
            displayList(listPlayer)
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
        error.textContent = 'error'
        error.style.color = 'red'
        divContainer.appendChild(error)
    }else{
        const newPlayer = new Player(firstName.value, lastName.value, country.value, Number(score.value))
        listPlayer.push(newPlayer)
    }
    displayList(listPlayer)
})



displayList(listPlayer)

