    
    function performOperation(operation) {
        // Get user input from input fields
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
                        if (operation === 'multiply') {
                            let result = multiply(num1, num2);
                            // Display the result
                            displayResult(result);
                        } 
                        else if(operation === 'division') {
                            let result = divide(num1, num2);
                            // Display the result
                            displayResult(result);
                        }
                        else {
                            displayResult('Please choose valid operation');
                        }
                }
                else {
                    displayResult('Please enter valid numbers');
                }
                }
    
                function multiply(a, b) {
                    // Introduce a debugger statement to pause execution
                    debugger;
    
                    // Multiply the numbers
                    return a * b;
                }

                function divide(a, b) {
                    // Introduce a debugger statement to pause execution
                    debugger;
    
                    // Divide the numbers
                    return a / b;
                }
    
                function displayResult(result) {
                    // Display the result in the paragraph element
                    const resultElement = document.getElementById('result');
                    resultElement.textContent = `The result is: ${result}`;
                }
            