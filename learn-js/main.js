// Array Methods
/*
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log( Array.from( "Sami" ) );                  // (4) ['S', 'a', 'm', 'i']
console.log( Array.from( 12345 ) );                   // []
console.log( Array.from( "12345" ) );                 // (5) ['1', '2', '3', '4', '5']
console.log( Array.from( "12345", n => n + n ) );     // (5) ['11', '22', '33', '44', '55']
console.log( Array.from( "12345", n => +n + +n ) );   // (5) [2, 4, 6, 8, 10]

let myArray = [ 1, 1, 1, 2, 3, 4 ];
let mySet = new Set( myArray );

console.log( mySet );                                 // Set(4) {1, 2, 3, 4}
console.log( Array.from( mySet ) );                   // (4) [1, 2, 3, 4]
console.log( [ ...mySet ] );                          // (4) [1, 2, 3, 4]
console.log( [ ...new Set( myArray ) ] );             // (4) [1, 2, 3, 4]

function testArgs1 () {
  return [ ...arguments ];
}
function testArgs2 () {
  return Array.from( arguments );
}

console.log( testArgs1( "Sami", "Ahmed", "Sayed", 1, 2, 3 ) );  // (6) ['Sami', 'Ahmed', 'Sayed', 1, 2, 3]
console.log( testArgs2( "Sami", "Ahmed", "Sayed", 1, 2, 3 ) );  // (6) ['Sami', 'Ahmed', 'Sayed', 1, 2, 3]



