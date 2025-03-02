const a1 = []
const a2 = [1,2,3,4,5]
console.log(a2.length)
console.log(a2[0])
console.log(a2[a2.length-1])
console.log(a2[(a2.length-1)/2])

const a3 = ['zeq', 20, {country: 'Vietnam', city: 'Quangtri'}, true, 10]
console.log(a3.length)


const itCompaines = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
itCompaines.splice(0) //remove all items
console.log(itCompaines)
itCompaines.pop() //remove the last IT company
console.log(itCompaines) 


itCompaines.splice(((itCompaines.length-1)/2),1) //remove the middle IT company
console.log(itCompaines) 

itCompaines.shift() //remove the first IT company
console.log(itCompaines) 
console.log(itCompaines.slice((itCompaines.length-1)/2,(itCompaines.length-1)/2+1))
console.log(itCompaines.slice(0, -3))
console.log(itCompaines.slice(3, itCompaines.length))


console.log(itCompaines.reverse())

console.log(itCompaines.sort())


const itCompainesoo = []
if((itCompaines[0].split('o').length-1)>1)
    itCompainesoo.push(itCompaines[0])
if((itCompaines[1].split('o').length-1)>1)
    itCompainesoo.push(itCompaines[1])
if((itCompaines[2].split('o').length-1)>1)
    itCompainesoo.push(itCompaines[2])
if((itCompaines[3].split('o').length-1)>1)
    itCompainesoo.push(itCompaines[3])
if((itCompaines[4].split('o').length-1)>1)
    itCompainesoo.push(itCompaines[4])
if((itCompaines[5].split('o').length-1)>1)
    itCompainesoo.push(itCompaines[5])
if((itCompaines[6].split('o').length-1)>1)
    itCompainesoo.push(itCompaines[6])
console.log(itCompainesoo)

if(itCompaines.includes('Microsoft'))
    console.log(itCompaines[itCompaines.indexOf('Microsoft')])
else
    console.log('not found')

console.log(((itCompaines.slice(0, itCompaines.length-1).join(', ')).concat(' and ',itCompaines[itCompaines.length-1], ' are big IT companies.')))
console.log(`${itCompaines.slice(0, -1).join(', ')} and ${itCompaines[itCompaines.length-1]} are big IT companies.`) //slice(0, -1): -1 tính ngược lại từ cuối mảng -> bỏ phần tử cuối, -2 bỏ 2 phần tử cuối
console.log(itCompaines.join(', '))
console.log(itCompaines)
console.log(itCompaines.length)

console.log(itCompaines[0])
console.log(itCompaines[(itCompaines.length-1)/2])
console.log(itCompaines[itCompaines.length-1])

console.log(itCompaines.join('\n')) //in từng phần tử trong mảng

console.log(itCompaines.join('\n').toUpperCase())
