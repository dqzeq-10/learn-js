
function is_valid_variable(variable){
    const pattern = /^[A-Za-z_][A-Za-z0-9_$]*$/
    return pattern.test(variable)
}
console.log(is_valid_variable('first_name') )
console.log(is_valid_variable('first-name') )
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname') )