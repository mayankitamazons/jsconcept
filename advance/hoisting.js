console.log('hoisting example');
var favfruit="apple";
var display=function(){
   // hoisting inside function will create undefined if same varible is created inside function too
   console.log('fav food is',favfruit);
   // var favfruit="b";
}
// display();

// IIFE-  immediate invoked function expression 
(function(){
   console.log('imediate called');
})();