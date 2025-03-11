const personAccount ={
    fistname: 'Quy',
    lastname: 'Tran',
    incomes:[],
    expenses: [],
    totalIncome: function(){
        return this.incomes.reduce((acc, n) => acc+n, 0)
    },
    totalExpense: function(){
        return this.expenses.reduce((acc,n) => acc+n,0)
    },
    accountInfo: function(){
        return `${this.fistname} ${this.lastname}. Total income: ${this.totalIncome()}, total expense: ${this.totalExpense()}.`
    },
    accountBalance: function(){
        return this.totalIncome() - this.totalExpense()
    },
    addIncome: function(income){
        this.incomes.push(income)
    },
    addExpense: function(expense){
        this.expenses.push(expense)
    }
}
personAccount.addIncome(30)
// console.log(personAccount)
console.log(personAccount.accountInfo())