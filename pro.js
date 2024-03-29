
function operateOnArray(array, operation) {
    return array.map(operation);
    }
    
    const numbers = [1, 2, 3, 4, 5];
    const result = operateOnArray(numbers, num => num * 2);
    
    console.log(result);