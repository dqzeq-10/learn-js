
countries = [
    ['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']
]

const map1 = new Map(countries)
console.log(map1) // Map(3) {'Finland' => 'Helsinki', 'Sweden' => 'Stockholm', 'Norway' => 'Oslo'}
//                              K => V, K => V, K => V,...
console.log(map1.size) //3

//const o1 = new Object(countries) // [ [ 'Finland', 'Helsinki' ],[ 'Sweden', 'Stockholm' ],[ 'Norway', 'Oslo' ]]
//console.log(o1)

//add K, V to the Map by set()
map1.set("keyyy", 'valueee')
map1.set("Vietnam", "Hanoi")
console.log(map1)

//get V from Map by get(K)
console.log(map1.get("Vietnam")) //Hanoi

//Checking key in Map
console.log(map1.has('Vietnam')) //true 
console.log(map1.has('ZEQ')) //false

for (const country of map1){
    console.log(country)
}
//[ 'Finland', 'Helsinki' ]
//[K, V]
//[K, V] 
//...

for(const [country, city] of map1){
    console.log(country, city)
}