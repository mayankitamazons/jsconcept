//Currying is a functional programming technique in JavaScript that involves transforming a function with multiple arguments into a sequence of functions, each taking a single argument. The resulting sequence of functions can then be invoked one by one, passing in the arguments incrementally.

function add(a){
    return function(b){
        return a+b;
    }
}


const addtwo=add(2);
console.log(addtwo(3));
// other way to do 
console.log('other method to call Currying function',add(2)(3));
// working example 
function discountCalculator(discount) {
    return function(price) {
      return price - (price * (discount / 100));
    };
  }
  
  // Curried functions
  const tenPercentDiscount = discountCalculator(10);
  const twentyPercentDiscount = discountCalculator(20);
  
  // Calculate discounted prices
  const originalPrice = 100;
  const discountedPrice1 = tenPercentDiscount(originalPrice);
  const discountedPrice2 = twentyPercentDiscount(originalPrice);
  
  console.log(discountedPrice1); // Outputs 90
  console.log(discountedPrice2); // Outputs 80
  