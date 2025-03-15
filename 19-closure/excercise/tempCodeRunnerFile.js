function closureFuncion(){
    let str = ""

    function addStr(strAdd){
        str += strAdd
    }
    function getStr(){
        return str
    }
    function resetStr(){
        str = ""
    }
    return {addStr, getStr, resetStr}
}

let a = closureFuncion()
console.log(a.getStr())
a.addStr("Zeq")
console.log(a.getStr())