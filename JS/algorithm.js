items = [
    {id: "a", val: 10, x: 3},
    {id: "b", val: 6, w: 8},
    {id: "c", val: 3, w: 3}
]

maxWeight = 8;

bag = ["a", "b"] //solution

function sumUp(n){
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

let start = 0;
let end = 0;

function sumUpFast(n){
    return (n/2) * (1 + n);
}
//Asymptotic Analysis
// - Define the function T = a*n + b;
// - Find the fastest growing term (a*n)
// - remove the coefficient T = n

function sumArrayElements(array)
{
    let sum = 0;
    array.forEach(n => {
        sum += n;
    });
}

