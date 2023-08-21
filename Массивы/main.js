arr_1 = [101, 202, 303, 404, 505]
arr_2 = [606, 707, 808, 909]

superArr = [...arr_1, ...arr_2]

console.log(...superArr)

console.log(Math.min(...superArr))

let obj = {
  width: 300,
  height: 550
}

console.log(obj)

let obj2 = {
  ...obj,
  area(){
    return this.width * this.height;
  }
};

obj2.area()
console.log(obj2)


function func(...rest){
  arr5 = rest.reduce(function(x, rest){
    return x + rest
  }, 0)
}

func(19, 29, 2, 2, 2)
console.log(arr5)









