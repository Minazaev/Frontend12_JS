//Первое задание
let array = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]
array.forEach(function(item){
    if(item % 2 !== 0){
        console.log(item)
    }
})
// второе задание
let array2 = ["lorem ipsum", "javascript", "php", "css", "react", "git"]
array2.forEach(function(item){
    if(item.length > 4){
        console.log(item)
    }
})

// третье задание
let array3 = [1, -3, 5, 6, -7, 8, -9, -11]

let array4 = array3.filter(function(item){
    if(item < 0){
        console.log(item)
    }
})

// четвертое задание
let array5 = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100] 
let array6 = array5.filter(function(item){
    if(item % 2 == 0){
        console.log(item)
    }
})

// пятое задание
let array7 = ["lorem ipsum", "javascript", "php", "css", "react", "git"]
let array8 = array7.filter(function(item){
    if(item.length !== 3){
        return item;
    }
})
console.log(array8)

// шестое задание
let array9 = [5, 6, 7, 8, 9]

let array10 = array9.map(function(item){
    return item * item
})
console.log(array10)

// седьмое задание
let array11 = [{a: 10, b: 5}, {a: 20, b: 22}, {a: 131, b: 55}]

let array12 = array11.map(function(sum){
    return sum.a + sum.b
})
console.log(array12)

// восьмое задание
let array13 = [-13, 0, 12, 1662, -0.32, -102, -2]
let array14 = array13.filter(function(item){
    return item < 0;
})
console.log(array14)

let array15 = array14.reduce(function(sum, current){
    return sum + current;
})
console.log(array15)

// девятое задание
let array16 = [{x: 10, y: "lorem"}, {x: 21, y: "lorem"}, {x: -17, y: "lorem"}, {x: 156, y: "lorem"}];
let array17 = array16.reduce(function(sum, current){
    return sum + current.x;
}, 0)
console.log(array17)