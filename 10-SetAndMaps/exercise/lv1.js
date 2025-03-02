const a = new Set()
const b = new Set()
for(let i = 0; i<= 10; i++){
    b.add(i)
}

console.log(b)

b.delete(1)
console.log(b)
b.clear()
console.log(b)

const arr = ['a','b', 'c', 'd', 'e']
const c = new Set(arr)
console.log(c)

const countries = ['Finland', 'Sweden', 'Norway']
const map1 = new Map(countries.map(country => [country, country.length]))
console.log(map1)