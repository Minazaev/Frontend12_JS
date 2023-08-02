let man = {
    name:  'Усман',
    sername: 'Усманов',
    age: 16,
    height: 170,
    login: 'usman',
    password: 'usman95',
    money: 10000,
    address: {
        city: 'Grozny',
        street: 'Umarova, 19'
    }
}

let a = 'usman95'
function x(){
    if(a === man.password){
        console.log("Добро пожаловать " +man.name, man.sername)
    }else{
        console.log("c")
    }
}
x()
console.log(man)

for(let i = 0; i < 11; i++){
    console.log("chislo: " +i)
}
