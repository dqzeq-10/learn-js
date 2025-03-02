const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]


statistics = {
    count: function () {
        return ages.length
    },
    sum: function () {
        return ages.reduce((sum, n) => sum + n)
    },
    min: function () {
        return Math.min(...ages)
    },
    max: function () {
        return Math.max(...ages)
    },
    range: function () {
        return this.max() - this.min()
    },
    mean: function () {
        return this.sum() / this.count()
    },
    median: function () {
        agesSort = [...ages].sort((a, b) => a - b)
        if (this.count() % 2 == 0) {
            return (agesSort[this.count() / 2 - 1] + agesSort[this.count() - 2]) / 2
        } else {
            return agesSort[(this.count() - 1) / 2]
        }
    },
    mode: function () {
        const ages2 = ages.reduce((acc, c) => {
            acc[c] = (acc[c] || 0) + 1
            return acc
        }, {})

        const ages3 = Object.entries(ages2).sort((a, b) => b[1] - a[1])


        // có thể dùng filter để lọc các thằng max ra 
        const ages4 = ages3.reduce((acc, arr) => {
            if (arr == ages3[0]) {
                acc.push(arr)
            }
            return acc
        }, [])
        return ages4
    },
    variance: function () {
        let sumV = ages.reduce((acc, n) => {
            return ((n - this.mean()) * (n - this.mean())) + acc
        }, 0)
        return (sumV / this.count())
    },
    std: function () {
        return Math.sqrt(this.variance())
    },
    freqDist: function () {
        const arrFD = ages.reduce((acc, n) => {
            acc[n] = (acc[n] || 0) + 1
            return acc
        }, {})

        return Object.entries(arrFD).map(([a, b]) => [((b / this.count()) * 100 * 1.0), parseInt(a)]).sort((a, b) => b[0] - a[0])
    }
}



console.log(statistics.count())
console.log(statistics.sum())
console.log(statistics.min())
console.log(statistics.max())
console.log(statistics.range())
console.log(statistics.mean())
console.log(statistics.median())
console.log(statistics.mode())
console.log(statistics.variance())
console.log(statistics.std())
console.log(statistics.freqDist())
