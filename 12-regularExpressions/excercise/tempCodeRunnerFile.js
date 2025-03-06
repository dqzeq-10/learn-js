sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`


function cleanText(text){
    return text.replace(/[^A-Za-z\s\.,]/g,'')    
}
function tenMostFrequentWords(str){
    const arrStr = str.match(/\w+/g)
    const arrObj = arrStr.reduce((acc, letter) => {
        acc[letter] = (acc[letter] || 0) + 1
        return acc
    }, {})

    const a1 = Object.entries(arrObj).map(([w, c]) => ({'word': w, 'count': c}))
    const sortedArrObj  = a1.sort((o1, o2) => o2.count - o1.count)
    return sortedArrObj.slice(0,3)
}

const cleanedText = cleanText(sentence)
console.log(cleanedText)
console.log(tenMostFrequentWords(cleanedText))

