function fullName(){
    console.log('Tran Dinh Quy')
}
fullName()

function fullName(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(fullName('zeq', 'tran'))

function addNumbers(a, b){
    return a+b
}
console.log(addNumbers(5,5))

function areaOfRectangle(length, width) {
    return length*width
}

function perimeterOfRectangle(a,b) {
    return (a+b)*2
}

function volumeOfRectPrism(a,b,c) { //volume : thể tích, Rectangular:(tính từ) hình chữ nhật, Prism: khối lăng trụ
    return a*b*c
}

function areaOfCircle(r) {
    return Math.PI*r*r
}

function circumOfCircle(r) { //Circumference: đường chu vi
    return 2*Math.PI*r
}

//density: khoi luong ring

function bmi(cn, cc){
    let bmi = cn/(cc*cc)
    if(bmi < 18.5){
        console.log('Underweight')
    }else if(bmi >= 18.5 || bmi <= 24.9){
        console.log('Normal')
    }else if(bmi >= 25 || bmi <= 29.9){
        console.log('Overweight')
    }else{
        console.log('Obese')
    }
}
bmi(45,1.7)

function checkSeason(month){
    switch(month){
        case 1,2,3:
            return 'Spring'
            break;
        case 4,5,6:
            return 'Summer'
            break;
        case 7,8,9:
            return 'Autumn'
            break;
        case 10,11,12:
            return 'Winter'
            break;
        default:
            return 'Is not a month of year'
            break;
    }
}
console.log(checkSeason(9))

function findMax(...arr){
    let max = 0
    for(n of arr){
        if (max < n)
            max = n
    }
    return max
}
console.log(findMax(10,11,2,456,3,43,4))