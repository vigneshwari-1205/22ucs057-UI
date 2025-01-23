function Fibonacci() {
    let n = 20; // Number of terms in the Fibonacci series (you can change this value)
    let resultElement = document.getElementById('result');
  
    if (n <= 0) {
      resultElement.innerHTML = 'Please enter a positive number.';
      return;
    }
  
    let fibonacciSeries = [];
    let a = 0, b = 1;
  
    // Generate Fibonacci series
    for (let i = 0; i < n; i++) {
      fibonacciSeries.push(a); // Add the current number to the series
      let nextTerm = a + b; // Calculate the next term
      a = b; // Update a
      b = nextTerm; // Update b
    }
  
    // Display the series
    resultElement.innerHTML = `First ${n} terms of Fibonacci series: ${fibonacciSeries.join(', ')}`;
    console.log(`First ${n} terms of Fibonacci series: ${fibonacciSeries.join(', ')}`);
  }
  