
// Set Data Type
{
  /*
    - Syntax : new Sat(Iterable)
    -- Object To Store Unique Values
    -- Cannot Access Elements By Index

    Properties :
    - size

    Methods :
    - add
    - delete
    - clear
    - has
  */

  let myData = [ 1, 1, 1, 2, 3, "A" ];
  let myUniqueData = new Set( [ 1, 1, 1, 2, 3, "A" ] );
  // or
  let myUniqueData = new Set( myData );
  // or
  let myUniqueData = new Set().add( 1 ).add( 1 ).add( 1 ).add( 2 ).add( 3 );
  // or
  let myUniqueData = new Set();
  myUniqueData.add( 1 ).add( 1 ).add( 1 ).add( 2 );
  myUniqueData.add( 3 ).add( "A" );

  console.log( myData );                                  // (6) [1, 1, 1, 2, 3, 'A']
  console.log( myUniqueData );                            // Set(4) {1, 2, 3, 'A'}
  console.log( [ ...myUniqueData ] );                     // (4) [1, 2, 3, 'A']
  console.log( myUniqueData.size );                       // 4

  myUniqueData.delete( 1 );
  console.log( myUniqueData );                            // Set(3) {2, 3, 'A'}
  console.log( myUniqueData.size );                       // 3

  console.log( myUniqueData.delete( 22 ) );               // false


  console.log( myUniqueData.has( "A" ) );                 // true
  console.log( myUniqueData.has( "A".toUpperCase() ) );   // true

  myUniqueData.clear();
  console.log( myUniqueData );                            // Set(0) {size: 0}
  console.log( myUniqueData.size );                       // 0
  console.log( myUniqueData.has( "A" ) );                 // false



  console.log( myData.filter( ( item, index ) => myData.indexOf( item ) === index ) );


  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */
  /*
    - Set Vs WeakSet
    "
      the weakSet is Weak,
      meaning references to object in a weakSet are held weakly
      if no other references to an object stored in the weakSet exist,
      those object can be garbage collected
    "
    --
    Set      => can store any data values
    weakSet  => collection of object only
    --
    Set      => have size property
    weakSet  => does not have size property
    --
    Set      => have keys , values , Entries
    weakSet  => does not have clear , keys , values And Entries
    --
    Set      => can use forEach
    weakSet  => cant use forEach
    --
    // weakSet to use cases

    */

  let mySet = new Set( [ 1, 1, 1, 2, 3, "A", "A" ] );

  console.log( mySet );                               // Set(4) {1, 2, 3, 'A'}
  console.log( mySet.size );                          // 4
  console.log( mySet.values() );                      // 4
  console.log( mySet.keys() );                        // 4

  let iterator = mySet.keys();
  console.log( ( iterator ).next() );                 // {value: 1, done: false}
  console.log( ( iterator ).next().value );           // 2
  console.log( ( iterator ).next().value );           // 3
  console.log( ( iterator ).next().done );            // false
  console.log( ( iterator ).next().value );           // undefined
  console.log( ( iterator ).next() );                 // {value: undefined, done: true}
  console.log( ( iterator ).next().done );            // true

  mySet.forEach( ( el ) => {
    console.log( el );                                // 1.. 2.. 3.. A
  } );

  // ---------------------------------------------------------------------------------------
  let myWeakSet = new WeakSet( [ { A: 1, B: 2, C: 3 } ] );

  // console.log( myWeakSet );                        // Error , because not object
  console.log( myWeakSet );                           // WeakSet {{…}}


  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /*
    - Map Data Type
    Syntax: new Map(Iterable With Key/Value)
    -- Map vs Object
    --
    ------ Map => Does Not Contain Key By Default
    ------ Object => Has Default Keys
    --
    ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
    ------ Object => String Or Symbol
    --
    ------ Map => Ordered By Insertion
    ------ Object => Not 100% Till Now
    --
    ------ Map => Get Items By Size
    ------ Object => Need To Do Manually
    --
    ------ Map => Can Be Directly Iterated
    ------ Object => Not Directly And Need To Use Object.keys() And So On
    --
    ------ Map => Better Performance When Add Or Remove Data
    ------ Object => Low Performance When Comparing To Map
  */
  let myObj = {};
  let emptyObj = Object.create( null );
  const myMap = new Map();

  console.log( myObj );
  console.log( emptyObj );
  console.log( myMap );

  let myNewObj = {
    10: "number",
    "10": "String",
  };

  console.log( myNewObj[ 10 ] );         // String

  let myNewMap = new Map();
  myNewMap.set( 10, "number" );
  myNewMap.set( "10", "String" );
  myNewMap.set( true, "bool" );
  myNewMap.set( { a: 1, b: 2 }, "obj" );
  myNewMap.set( function () { }, "func" );

  console.log( myNewMap.get( 10 ) );     // number
  console.log( myNewMap.get( "10" ) );   // String

  console.log( myNewObj );               // {10: 'String'}
  console.log( myNewMap );               // Map(5) {10 => 'number', '10' => 'String', true => 'bool', {…} => 'obj', ƒ => 'func'}


  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /*
    - Map Data Type
    Methods
    --- set
    --- get
    --- delete
    --- clear
    --- has

    Properties
    --- size
  */


  const myMap1 = new Map();
  myMap1.set( 10, "Number" );
  myMap1.set( "10", "String" );

  console.log( myMap1 );                             // Map(2) {10 => 'Number', '10' => 'String'}

  console.log( myMap1.get( 10 ) );                   // Number
  console.log( myMap1.get( "10" ) );                 // String

  // ----------------------------------------------------------------------
  const myMap2 = new Map( [
    [ 10, "Number" ],
    [ "10", "String" ],
    [ false, "bool" ]
  ] );

  console.log( myMap2 );                             // Map(3) {10 => 'Number', '10' => 'String', false => 'bool'}

  console.log( myMap2.get( 10 ) );                   // Number
  console.log( myMap2.get( "10" ) );                 // String
  console.log( myMap2.get( false ) );                // bool
  console.log( myMap2.size );                        // 3

  console.log( myMap2.has( 10 ) );                   // true
  console.log( myMap2.has( "10" ) );                 // true
  console.log( myMap2.has( false ) );                // true

  console.log( myMap2.delete() );                    // false
  console.log( myMap2.delete( 55 ) );                // false
  console.log( myMap2.delete( 10 ) );                // true
  console.log( myMap2.size );                        // 2

  myMap2.clear();
  console.log( myMap2.size );                        // 0


  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */
  /*
    - Map vs WeakMap
    "
      WeakMap Allows Garbage Collector To Do Its Task But Not Map.
    "
    --
    Map     => Key Can Be Anything
    WeakMap => Key Can Be Object Only
    --
  */

  let mapUser = { theName: "elzero" };
  let myMap = new Map();
  myMap.set( mapUser, "object value" );

  console.log( myMap );                     // Map(1) {{…} => 'object value'}

  mapUser = null;

  console.log( myMap );                     // Map(1) {{…} => 'object value'}

  let weakMapUser = { theName: "elzero" };
  let myWeakMap = new WeakMap();

  myWeakMap.set( weakMapUser, "Value" );

  mapWeakUser = null;

  console.log( myWeakMap );



  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /*
    Array Methods
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



  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /*
    Array Methods
    - Array.copyWithin(Target, Start => Optional, End => Optional)
    "Copy Part Of An Array To Another Location in The Same Array"
  */

  let myArray = [ 10, 20, 30, 40, 50, "A", "B" ];

  console.log( myArray );                                          // (7) [10, 20, 30, 40, 50, 'A', 'B']

  // console.log( myArray.copyWithin( 3 ) );                          // (7) [10, 20, 30, 10, 20, 30, 40]
  // console.log( myArray.copyWithin( 4 ) );                          // (7) [10, 20, 30, 40, 10, 20, 30]
  // console.log( myArray.copyWithin( 4, 6 ) );                       // (7) [10, 20, 30, 40, 'B', 'A', 'B']
  // console.log( myArray.copyWithin( 4, -1 ) );                      // (7) [10, 20, 30, 40, 'B', 'A', 'B']
  // console.log( myArray.copyWithin( 1, -2 ) );                      // (7) [10, 'A', 'B', 40, 50, 'A', 'B']
  // console.log( myArray.copyWithin( 1, -2 ) );                      // (7) [10, 'A', 30, 40, 50, 'A', 'B']
  // console.log( myArray.copyWithin( 1, -2, -1 ) );                  // (7) [10, 'A', 30, 40, 50, 'A', 'B']
  console.log( myArray.copyWithin( 1, 5, 6 ) );                       // (7) [10, 'A', 30, 40, 50, 'A', 'B']


  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /*
    Array Methods
    - Array.some(CallbackFunc(Element, Index, Array), This Argument)
    --- CallbackFunc => Function To Run On Every Element On The Given Array
    ------ Element => The Current Element To Process
    ------ Index => Index Of Current Element
    ------ Array => The Current Array Working With
    --- This Argument => Value To Use As This When Executing CallbackFunc
    --
    Using
    - Check if Element Exists In Array
    - Check If Number In Range
  */

  let nums = [ 1, 2, 3, 4, 5, 6, 7 ];
  let myNumber = 5;

  let check1 = nums.some( function ( e ) {
    console.log( "test" );                                     // 6 test
    return e > 5;
  } );
  console.log( check1 );                                        // true

  // -------------------------------------------------------------

  let check2 = nums.some( function ( e ) {
    // console.log( this );                                       // window X6
    return e > 5;
  } );
  console.log( check2 );                                        // true

  // -------------------------------------------------------------

  let check3 = nums.some( function ( e ) {
    console.log( this );                                       // window X6
    return e > this;
  }, myNumber );
  console.log( check3 );                                        // true

  // --------------------------------------------

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */


  const array1 = [ 1, 2, 3, 4, { name: "sami" } ];

  let include1 = ( arr, item ) => arr.indexOf( item ) !== -1;
  let include2 = ( arr, item ) => Boolean( ~arr.indexOf( item ) );
  let include3 = ( arr, item ) => item == arr.find( el => el === item );

  console.log( include1( [ 1, 2, 3, 4 ], 3 ) );                   // true

  console.log( array1.some( e => e === 1 ) );                    // true
  console.log( array1.some( e => e > 4 ) );                      // true
  console.log( array1.some( e => e < 0 ) );                      // false

  console.log( array1.some( e => e.name ) );                     // true
  console.log( array1.some( e => e.name === "sami" ) );          // true
  console.log( array1.some( e => e.country ) );                  // false

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /* - Inline callback function
  some( function ( element ) { ... } );
  some( function ( element, index ) { ... } );
  some( function ( element, index, array ) { ... } );
  some( function ( element, index, array ) { ... }, thisArg );
  */
  const array2 = [ 2, 5, 8, 1, 4 ];


  const isBiggerThan10 = ele => ele > 10;

  console.log( array2.some( isBiggerThan10 ) );                 // false
  console.log( !array2.some( isBiggerThan10 ) );                // true

  console.log( array2.some( x => x > 10 ) );                    // false
  console.log( !array2.some( x => x > 10 ) );                   // true


  const even = element => element % 2 === 0;

  console.log( array2.some( even ) );                           // true
  console.log( !array2.some( even ) );                          // false

  console.log( array2.some( element => element % 2 === 0 ) );   // true
  console.log( !array2.some( element => element % 2 === 0 ) );  // false

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /* - Callback function
  some( callbackFn );
  some( callbackFn, thisArg );
  */

  const names = [ 'Ahmed', 'Osama', 'Smai', 'Omar' ];

  function checkAvailability ( arr, val ) {
    return arr.some( ( ele => val === ele ) );
  }

  console.log( checkAvailability( names, 'Smai' ) );            // true
  console.log( checkAvailability( names, 'Osama' ) );           // true
  console.log( checkAvailability( names, 'Ameer' ) );           // false

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  let range = {
    min: 5,
    max: 20,
  };

  let checkNumbInRange = nums.some( function ( ele ) {
    return ele >= this.min && ele <= this.max;
  }, range );

  console.log( checkNumbInRange );                               // true



  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /*
    Array Methods
    - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  */

  const locations = {
    20: "Place 1",
    30: "Place 2",
    50: "Place 3",
    40: "Place 4",
  };
  let minLocation = 15;

  let locationArray = Object.keys( locations ).map( e => +e );

  console.log( locationArray );                 // (4) [20, 30, 40, 50]

  let check = locationArray.every( function ( ele ) {
    return ele > this;
  }, minLocation );

  console.log( check );                        // true

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /*
    Spread Operator => ...Iterable
    "Allow Iterable To Expand In Place"
  */

  // Spread With String => Expand String

  console.log( "sami" );                      // sami
  console.log( ..."sami" );                   // s a m i
  console.log( [ ..."sami" ] );               // (4) ['s', 'a', 'm', 'i']
  // -----------------------------

  // concatenate
  let myArr1 = [ 1, 2, 3 ];
  let myArr2 = [ 4, 5, 6 ];

  let allArr = [ ...myArr1, ...myArr2 ];

  console.log( allArr );                      // (6) [1, 2, 3, 4, 5, 6]
  // -----------------------------

  // Copy array
  let copyArr = [ ...myArr1, ...myArr1 ];

  console.log( copyArr );                     // (6) [1, 2, 3, 1, 2, 3]
  // -----------------------------

  // push inside array
  let myFriends = [ "osama", "Sami", "Ahmed" ];
  let thisYearFriend = [ "Sameh", "Mahmoud" ];

  myFriends.push( ...thisYearFriend );

  console.log( myFriends );                   // (5) ['osama', 'Sami', 'Ahmed', 'Sameh', 'Mahmoud']
  // -----------------------------

  let myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  console.log( Math.max( ...myNums ) );       // 9
  // -----------------------------

  // Spread With Objects => Merge Objects

  let objOne = {
    a: 1,
    b: 2,
  };
  let objTwo = {
    c: 3,
    d: 4,
  };

  console.log( { ...objOne, ...objTwo, e: 5 } ); // {a: 1, b: 2, c: 3, d: 4, e: 5}


  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /*
    Map And Set + What You Learn => Challenge
    Requirements
    - You Cant Use Numbers Or True Or False
    - Don't Use Array Indexes
    - You Cant Use Loop
    - You Cant Use Any Higher Order Function
    - Only One Line Solution Inside Console
    - If You Use Length => Then Only Time Only
    Hints
    - You Can Use * Operator Only In Calculation
    - Set
    - Spread Operator
    - Math Object Methods
  */

  let n1 = [ 10, 30, 10, 20 ];
  let n2 = [ 30, 20, 10 ];

  console.log( new Set( [ ...n1 ] ).size * new Array( ...n1, ...n2 ).length * Math.min( ...n1 ) ); // 210

}
