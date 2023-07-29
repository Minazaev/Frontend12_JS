const a = 5;

if(a < 10){
    console.log("Значение меньше 10")
}else{
    console.log("Константа не меньше 10")
}

let login = 'Usman'
let password = '1234'

let loginUser = prompt('login?')
let passwordUser = prompt('password?')

if(login == loginUser && password == passwordUser){
    console.log("welcome")
}else{
    console.log("Неправильный логин или пароль")
}

let x = 10;
let y = 7;

let c = x > y ? 'x больше чем y' : 'х меньше чем у'

console.log(c)

let num = prompt("Введите число")

if(num % 2 === 0){
    console.log("Число " +num+ " четное")
}else{
    console.log("Число " +num+ " нечетное")
}

let num1 = prompt("Первое число")
let num2 = prompt("Второе число")
let num3 = prompt("Третье число")

if(num1 > num2 && num1 > num3){
    console.log("Максимальное число " +num1)
}
else if(num2 > num1 && num2 > num3){
    console.log("Максимальное число " +num2)
}else if(num3 > num2 && num3 > num1){
    console.log("Максимальное число " +num3)
}


// if(num1 === Math.max){
//     console.log("fds")
// }
// else if(num2 === Math.max){
//     console.log("2")
// }
// else{
//     console.log("3")
// }