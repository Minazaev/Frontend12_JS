let array = ['lorem', 123, true, 'ipsum']

console.log(array[0])
console.log(array[array.length - 1]);

let em = [];

em.push('ali', 'us', 'sa', 'as', 's');
em.unshift('sa', 's', 'm')
console.log(em);

let number = [1, 3, 5, 7, 9]
let result = []
for (let i of number){
    if(number[i] % 2 != 0){
        result.push(i+=1)        
    }else{
        result(i)
    }

}

console.log(result)


let array2 = ['lorem', 123, 123, true, 'ipsum']
array2.splice(2, 4)
array2[0] = 'ipsum'
array2.unshift()
console.log(array2)
