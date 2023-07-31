function a(x = 11){
    if(x < 10){
        console.log("константа меньше 10")
    }else{
        console.log("константа не меньше 10")
    }
}

a();

function hello(){
    alert("Hello world!")
}

hello();

function js(){
    console.log("JavaScript")
}

js();

function text(){
    let text = prompt("Введите текст")
    if(text === "lorem"){
        console.log("У вас ошибка в тексте")
    }else{
        console.log(text)
    }
}

text();