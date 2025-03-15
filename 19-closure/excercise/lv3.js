function personAccountOut(fn, ln){
    let firstName = fn, lastName = ln, incomes = [], expenses = []

    function totalIncome(){
        return incomes.length > 0 && incomes.reduce((acc, n) => acc+n, 0)
    }
    function totalExpense(){
        return expenses.length > 0 && expenses.reduce((acc,n) => acc+n, 0)
    }
    function accountInfo(){
        return `My name is ${firstName} ${lastName}. Total income: ${totalIncome()}, total expense: ${totalExpense()}`
    }
    function accountBalance(){
        return `Balance: ${this.totalIncome() - this.totalExpense()}`
    }
    function addIncome(income){
        incomes.push(income)
    }
    function addExpense(expense){
        expenses.push(expense)
    }
    return {totalIncome, totalExpense, accountInfo, accountBalance, addIncome, addExpense}
}


const a = personAccountOut("Zeq", "Tran")
a.addIncome(100)
a.addExpense(30)
console.log(a.accountInfo())
console.log(a.accountBalance())