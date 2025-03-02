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