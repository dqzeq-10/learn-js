function outerFn(){
    const n = 0
    function innerFn(){
        return n
    }
    return innerFn()
}

console.log(outerFn()) //innerFn trả về n, outerFn trả về innerFn => 0