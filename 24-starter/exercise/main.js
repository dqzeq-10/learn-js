const btn = document.querySelector('button')
const mass = document.querySelector('#mass')
const planets = document.querySelector('#planets')
const divC = document.querySelector('.flex-container')
const image = document.querySelector('.planet-image')
const detail = document.querySelector('.flex-item.description')
const errorDiv = document.createElement('div')
errorDiv.className = 'error-message'
document.querySelector('header').appendChild(errorDiv)

document.body.style.color = 'white'
document.body.style.fontFamily = 'Montserrat, sans-serif'
document.body.style.textAlign = 'center'
document.body.style.background = "url('./images/galaxy.gif') no-repeat center center / cover fixed"
document.body.style.padding = '20px'
document.body.style.minHeight = '100vh'
document.body.style.margin = '0'

const header = document.querySelector('header')
header.style.maxWidth = '800px'
header.style.margin = '0 auto 30px'
header.style.padding = '20px'
header.style.borderRadius = '10px'
header.style.background = 'rgba(0, 0, 0, 0.6)'

document.querySelector('h1').style.marginBottom = '30px'

mass.style.padding = '10px'
mass.style.borderRadius = '5px'
mass.style.border = 'none'
mass.style.marginRight = '10px'
mass.style.width = '200px'

planets.style.padding = '10px'
planets.style.borderRadius = '5px'
planets.style.border = 'none'
planets.style.marginRight = '10px'
planets.style.width = '200px'

btn.style.padding = '10px 20px'
btn.style.borderRadius = '5px'
btn.style.border = 'none'
btn.style.background = '#4CAF50'
btn.style.color = 'white'
btn.style.cursor = 'pointer'
btn.style.fontWeight = 'bold'

errorDiv.style.color = '#ff5555'
errorDiv.style.marginTop = '15px'
errorDiv.style.fontWeight = 'bold'

divC.style.display = 'flex'
divC.style.justifyContent = 'space-between'
divC.style.alignItems = 'center'
divC.style.maxWidth = '800px'
divC.style.margin = '0 auto'
divC.style.padding = '30px'
divC.style.background = 'rgba(0, 0, 0, 0.6)'
divC.style.borderRadius = '10px'

const imageContainer = document.querySelector('.flex-item.image')
imageContainer.style.flex = '1'
imageContainer.style.textAlign = 'right'
imageContainer.style.padding = '0 20px'

image.style.maxWidth = '250px'
image.style.transition = 'all 0.5s ease'

detail.style.flex = '1'
detail.style.textAlign = 'left'
detail.style.padding = '20px'
detail.style.fontSize = '18px'
detail.style.lineHeight = '1.6'
detail.style.fontWeight = 'bold'
detail.style.background = 'rgba(255,255,255,0.1)'
detail.style.borderRadius = '10px'
detail.style.boxShadow = '0 0 10px rgba(255,255,255,0.1)'

btn.addEventListener('click', e => {

    errorDiv.textContent = '';

    if (mass.value === "" || mass.value === null) {
        errorDiv.innerHTML = "<h2>Mass is required</h2>";
        detail.textContent = '';
        image.src = ''
        detail.style.display = 'none'

    } else if (planets.value === '') {
        errorDiv.innerHTML = "<h2>You did not choose a planet yet</h2>";
        detail.textContent = '';
        image.src = ''
        detail.style.display = 'none'
    } else {

        const selectOpt = planets.options[planets.selectedIndex]
        const planetName = selectOpt.textContent.trim()

        image.src = `./images/${planetName.toLowerCase()}.png`
        detail.style.display = 'block'
        detail.textContent = `The weight of the object on ${planetName.toUpperCase()}: ${mass.value * planets.value}N`
    }
})