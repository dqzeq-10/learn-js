const personAccount = {
    firstName: 'quy',
    lastName: 'tran',
    incomes:{
        mainIncomes: 100,
        subIcomes: 50
    },
    expenses:{
        ok1: 10,
        food: 50,
        ok2: 15,
    },
    totalIncome: function(){
        const a = Object.values(this.incomes)
        let sum = 0
        for(e of a){
            sum+=e
        }
        return `total income: ${sum}`
    },
    totalExpense: function(){
        const b = Object.values(this.expenses)
        let sum = 0
        for(e of b){
            sum+=e
        }
        return `total expense: ${sum}`
    },
    accountInfo: function(){
        return `My name is ${this.firstName} ${this.lastName}. My total income is ${this.totalIncome()} and total expense is ${this.totalExpense()}. Seeya!`
    },
    addIncome: function(nameIncome, amount){
        this.incomes[nameIncome] = amount
        return 'add income success'
    },
    addExpense: function(nameExpense, amount){
        this.expenses[nameExpense] = amount
        return 'add expense success'
    },
    accountBalance: function(){
        return (this.totalIncome()).match(/\d+/g)-(this.totalExpense()).match(/\d+/g)
    }

}

console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountInfo())
console.log(personAccount.accountBalance())


const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    
for(u in users){
    console.log(users[u].username)
}


function SignUp(userSignUp){
    for(user in users){
        if(userSignUp.username === users[user].username){
            return `Username existss`
        }
    }
    users[''] = userSignUp
    return userSignUp
}

const userExist ={
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt:'08/01/2020 9:50 AM',
    isLoggedIn: false
}
const user1 = {
    _id: 'dq0109',
    username: 'ZEQ',
    email: 'dq@zeq.com',
    password: '01092004',
    createdAt: '08/02/2025',
    isLoggedIn: false
}
console.log(users)
console.log(SignUp(user1))
console.log(users)
console.log(SignUp(userExist))


function signIn(username1, password1){
    for(u in users){
        if (users[u].username === username1){
            if ( users[u].password === password1){
                users[u].isLoggedIn = true
                return users[u]
            }else{
                return `pasword is incorrect`
            }
        }
        
    }
    return `username is incorrect`
}

console.log(signIn('zeq','01092004'))
console.log(signIn('ZEQ','0109200'))
console.log(signIn('ZEQ','01092004'))


const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]

  
function rateProduct(Pid, userId, rate){
    for(const p of products){ //dùng 'for of' vì đang mảng đối tượng chứ không phải là đối tượng chứa đối tượng
        if(p._id === Pid){
            p.ratings.push({userId, rate})
            return p
        }
    }
    return `Not found ProductID in products`
}  

console.log(rateProduct('hedfcg','ZEQ', 1))

function averageRating(Pid){
    for(const p of products){
        if(p._id === Pid){
            const arrRating = p.ratings
            let sumRating = 0
            for (r of arrRating){
                sumRating += r.rate
            }
            return sumRating/arrRating.length
        }
    }
    return 'Not found'
}

console.log(averageRating('hedfcg'))

function likeProduct(Pid, username){
    for(const p of products){
        if(p._id === Pid){
            if(p.likes.indexOf(username) != -1){
                p.likes.splice(p.likes.indexOf(username),1)
            }else{
                p.likes.push(username)
            }
            return p
        }
    }
    return 'Not found'
}

console.log(likeProduct('hedfcg','fg12cy'))