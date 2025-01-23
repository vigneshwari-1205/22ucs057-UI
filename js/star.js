function star()
{
let resultElement = document.getElementById('result');

let n = 5; 
for (let i = 1; i <= n; i++) 
{ 
    let str = "* "; 
    let space = '  '; 
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
}
resultElement.innerHTML = `First ${n} terms of Fibonacci series: ${fibonacciSeries.join(', ')}`;
console.log(`First ${n} terms of star pyramid: ${.join(', ')}`);
}