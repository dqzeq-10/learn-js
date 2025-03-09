
class PersonAccount{
    constructor(fn, ln, incs, exps){
        this.firstname = fn
        this.lastname = ln
        this.incomes = incs
        this.expenses = exps
    }

    totalIncome(){
        return this.incomes.length> 0 && this.incomes.reduce((acc, n) => acc+n)
    }

    totalExpense(){
        return this.expenses.length > 0 && this.expenses.reduce((acc, n) => acc+n)
    }

    accountInfo(){
        return `${this.firstname} ${this.lastname}. Incomes: ${this.totalIncome()}. Expenses: ${this.totalExpense()}`
    }

    accountBalance(){
        return `Balance: ${this.totalIncome() - this.totalExpense()}`
    }

    set addIncome(income){
        this.incomes.push(income)
    }

    set addExpense(exp){
        this.expenses.push(exp)
    }
}

const pa1 = new PersonAccount('Zeq', 'Tran', [], [])
console.log(pa1)
console.log(pa1.accountInfo())
console.log(pa1.accountBalance())


pa1.addIncome = 10000000
pa1.addExpense = 2000000

console.log(pa1)
console.log(pa1.accountInfo())
console.log(pa1.accountBalance())
