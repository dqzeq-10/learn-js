let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`


function tenMostFrequentWords(str){
    const arrStr = str.match(/\w+/g)
    const arrObj = arrStr.reduce((acc, letter) => {
        acc[letter] = (acc[letter] || 0) + 1
        return acc
    }, {})

    const a1 = Object.entries(arrObj).map(([w, c]) => ({'word': w, 'count': c}))
    const sortedArrObj  = a1.sort((o1, o2) => o2.count - o1.count)
    return sortedArrObj
}

console.log(tenMostFrequentWords(paragraph))

function tenMostFrequentWords2(str, number){
    const arrStr = str.match(/\w+/g)
    const arrObj = arrStr.reduce((acc, s) => {
        acc[s] = (acc[s] || 0) + 1
        return acc
    }, {})
    const arrObjSorted = Object.entries(arrObj).map(([w, c]) => ({'word': w, 'count': c})).sort((a,b) => b.count - a.count)
    return arrObjSorted.slice(0, number)
}

console.log(tenMostFrequentWords2(paragraph, 10))

