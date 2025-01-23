
    function reverseString() 
    {
      // Get the input value
      const input = document.getElementById('inputString').value;

      // Reverse the string
      const reversed = input.split('').reverse().join('');

      // Display the result
      document.getElementById('result').innerText = `Reversed String: ${reversed}`;
    }
  