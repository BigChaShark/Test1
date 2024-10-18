//1
let lastText = (x = "") => {
    if (x[x.length - 1] == '!') {
        x = x.slice(0, x.length - 1)
    }
    console.log(x);
}
lastText("Hii!")

//2
let pow = (...x) => {
    let sum = 0
    let setPow = 1
    for (let i = 0; i < x.length; i++) {
        sum += x[i] ** setPow
        setPow++
    }
    console.log(sum);
}
pow(2, 3)

//3
let mul = (x) => {
    let sum = x
    do {
        let num = [...String(sum)].map(Number)
        sum = num.reduce((x, y) => {
            return x * y
        })
    } while (sum > 10);
    console.log(sum);
}
mul(999)

//4
let midText = (x = String) => {
    let midNum = Math.floor(x.length / 2)
    if (midNum % 2 == 0) {
        console.log(x[midNum]);
    }
    else {
        console.log(x[midNum] + x[midNum - 1]);
    }
}
midText("helloo")

//5
let textRedu = (x = String) => {
    let showText = ""
    for (let i = 0; i < x.length; i++) {
        showText += x[i].repeat(i + 1)
        if (i < x.length - 1) {
            showText += "-"
        }
    }
    console.log(showText);
}
textRedu("abc")

//6
let diffArray = (x = [], y = []) => {
    const diff1 = x.filter((num) => { return !y.includes(num) })
    const diff2 = y.filter((num) => { return !x.includes(num) })
    let allDiff = [...diff1, ...diff2]
    console.log(allDiff);
}
diffArray([1, 3, 10, 5], [1, 3, 100])

//7
let numSort = (x = []) => {
    let oddNum = x.filter((num) => { return num % 2 != 0 })
    oddNum.sort((a, b) => {
        return a - b
    })
    let oddcount = 0
    let sorted = x.map((num) => {
        if (num % 2 != 0) {
            return oddNum[oddcount++]
        }
        return num
    })
    console.log(sorted);
}
numSort([5, 8, 6, 3, 4])

//8
let targetNum = (x = [], y) => {
    for (let i = 0; i < x.length; i++) {
        for (let j = i + 1; j < x.length; j++) {
            if (x[i] + x[j] == y) {
                return [i, j]
            }
        }
    }
}
console.log(targetNum([1, 2, 3, 1], 4));

//9 
let moneyCount = (x, y) => {
    let change = x - y
    let moneyObj = { 1000: 0, 500: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 }
    console.log(moneyObj);

    let money = Object.keys(moneyObj).reverse()
    let count = 0
    if (change < 0) {
        console.log("More money");
        return
    }
    else if (change == 0) {
        console.log("enough money");
        return
    }
    console.log("Must to change : " + change);
    do {
        if (change >= money[count]) {
            change -= money[count]
            moneyObj[money[count]] += 1
        }
        else {
            count++
        }

    } while (change > 0);
    let showChange = "You must change : "
    Object.entries(moneyObj).forEach(([keys, value]) => {
        if (value > 0) {
            showChange += `|${keys} : ${value}`
        }
    });
    showChange += `|`
    console.log(moneyObj);
    console.log(showChange);
}
moneyCount(550, 200)