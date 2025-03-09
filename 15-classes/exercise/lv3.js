class Statistics{
    constructor(ages){
        this.ages = ages
    }

    count(){ //so luong
        return this.ages.length
    }

    sum(){ //tong
        return this.ages.reduce((acc, n) => acc+n)
    }

    min(){ 
        return Math.min(...this.ages)
    }

    max(){
        return Math.max(...this.ages)
    }

    range(){ //pham vi
        return this.max() - this.min()
    }

    mean(){ //trung binh cong 
        return this.sum() /this.count()
    }

    median(){ //trung vi
        const agesSorted = this.ages.sort((a,b) => a-b)
        if (this.count()%2 == 0){
            return (agesSorted[this.count()/2 -1] + agesSorted[this.count()/2]) /2
        }else{
            return agesSorted[(this.count() -1) /2]
        }
    }

    mode(){ //nhung so xuat hien nhieu nhat
        const ages3 = this.ages.reduce((acc, n) =>{
            acc[n] = (acc[n] || 0) + 1
            return acc
        }, {})

        const ages3Sorted = Object.entries(ages3).sort((a,b) => b[1] - a[1])
        return ages3Sorted.filter(n => n[1] == ages3Sorted[0][1]).map(([m, c]) => ({'mode': m, 'count': c}))
    }

    var(){ //phuong sai
        let sumV = this.ages.reduce((acc, n) => {
            return (n - this.mean())*(n - this.mean())+acc
        }, 0)

        return sumV/this.count()
    }

    std(){ //do lech chuan
        return Math.sqrt(this.var())
    }

    freqDist(){
        const arrFD = this.ages.reduce((acc, n) => {
            acc[n] = (acc[n] || 0) + 1
            return acc
        }, {})

        // return arrFD
         return Object.entries(arrFD).map(([a,b])=> [((b / this.count()) * 100 * 1.0),parseInt(a)]).sort((a,b) => b[0] - a[0])
    }
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]


const s = new Statistics(ages)

console.log(s.count())
console.log(s.sum())
console.log(s.min())
console.log(s.max())
console.log(s.range())
console.log(s.mean())
console.log(s.median())
console.log(s.mode())
console.log(s.var())
console.log(s.std())
console.log(s.freqDist())

class PersonAccount{
    constructor(fn, ln, incs, exps){
        this.firstname = fn
        this.lastname = ln
        this.incomes = incs
        this.expenses = exps
    }

    totalIncome(){
        return this.incomes.reduce((acc, n) => acc+n)
    }

    totalExpense(){
        return this.expenses.reduce((acc, n) => acc+n)
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