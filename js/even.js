function printEvenNumbers() {
    let a= document.getElementById('result');


    let evenNumbers = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }

    a.innerHTML = `Even numbers from 1 to 50: ${evenNumbers.join('   ')}`;
    console.log(`Even numbers from 1 to 50: ${evenNumbers.join('      ')}`);
}
