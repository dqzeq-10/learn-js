const divC = document.createElement('div')
divC.style.width = '80%'
divC.style.height = '400px'
document.body.appendChild(divC)

function getRandomColor(){
    const arr = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i< 6; i++){
        color += arr[Math.floor(Math.random() * arr.length)]
    }
    return color
}

function getRandomFontFamily(){
    const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
    return fonts[Math.floor(Math.random() * fonts.length)];
}

setInterval(() => {
    divC.style.background = getRandomColor()
}, 1000);

const text = 'TRAN DINH QUY';
const listChars = Array.from(text);
console.log(listChars);

listChars.forEach((char, index) => {
    const text = document.createElement('span')
    text.textContent = char
    text.style.fontSize = '80px'
    
    // Add initial styles for fade-in animation
    text.style.opacity = '0'
    text.style.display = 'inline-block'
    text.style.transition = 'opacity 1s ease, transform 1s ease, color 0.5s ease'
    text.style.transform = 'translateY(20px) scale(0.8)'
    
    divC.appendChild(text)
    
    // Stagger the appearance with setTimeout
    setTimeout(() => {
        text.style.opacity = '1'
        text.style.transform = 'translateY(0) scale(1)'
    }, 100 * index)
})


const spans = document.querySelectorAll('span')

const animationInterval = setInterval(() => {
    divC.style.fontFamily = getRandomFontFamily()
    divC.style.backgroundColor = getRandomColor()

    spans.forEach(span => {
        span.style.color = getRandomColor()
        // Add subtle movement on color change
        span.style.transform = 'translateY(0) scale(1.05)'
        setTimeout(() => {
            span.style.transform = 'translateY(0) scale(1)'
        }, 200)
    })
}, 1000);
