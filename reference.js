//intro ▶▶
{
  //======> console.log------------  print in console is for web api not js
  // api => application programing interface
  {
    console.log( "hello from js file" );
    //======>  log = like as logging or message
    console.log( "hello from %cjs %cfile", "color: red; font-size: 40px", "color: blue; font-size: 60px" );
    console.log( `%c${ products[ i ] }`, "color: red" );

  }
  //======> console.warn ---------- print in consol with  warn
  {
    console.warn( "More of level 3" );
  }
  //======> console.error ---------- print in consol with  Error
  {
    console.error( "message" );
    console.log( "Iam In Console" );
    console.error( "error 1" );
    document.write( "Iam In Page" );
    console.error( "error 1" );
  }
  //======> console.table ----------- print in consol the taple with index
  {
    console.table( [ "osama", "sami", "ahmed" ] );
    console.table( [ "mohamed", "ali", "alhefel", "ahmad", "rami" ] );
    // an object whose properties are strings

    function Person ( firstName, lastName ) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    var me = new Person( "John", "Smith" );

    console.table( me );
  }
  //======> console.group---------- create list group
  {
    console.group( "A" );
    console.log( "message one" );
    console.log( "message two" );
    console.group( "1" );
    console.log( "message one" );
    console.log( "message two" );
    console.group( "2" );
    console.log( "message one" );
    console.log( "message two" );
    console.groupEnd( "A" );
    console.groupEnd( "1" );
    console.groupEnd( "2" );

    console.group( "B" );
    console.log( "message one" );
    console.log( "message two" );
  }
  //======> console.assert ----------- alert simple
  {
    console.assert( 2 != 2, 'the # is not even' ); //ssertion failed: the # is not even
    console.assert( 2 != 3, 'the # is not even' ); // not error no msg no thing
  }
  //======> console.clear---------- method clears the console if the environment allows it.
  {
    console.clear(); //void (no thing)
  }
  //======>  console.count------------method logs the number of times that this particular call to count() has been called.
  {
    let user = ""; //variable not selected
    function greet () {
      console.count( user ); // how many repeat name of user
      return "hi " + user;
    }
    user = "bob";
    greet(); // bob : 1
    greet(); // bob : 2
    greet(); // bob : 3
    user = "alice";
    greet(); // alice : 1
    greet(); // alice : 2
    console.count(); // default : 1
    console.count(); // default : 2
    console.count(); // default : 3
  }
  //======> console.contReset-----------Resets the value of the counter with the given label.
  {
    console.contReset();
  }
  //======>  console.log(typeof ..?) type
  {
    console.log( typeof "sami" ); //string
    console.log( typeof 9999 ); //number
    console.log( typeof [ 10, 15, 17 ] ); // Array ==> object
    console.log( typeof [ "os", "sa", "ah" ] ); // Array ==> object
    console.log( typeof { name: 'osama', age: 27, country: "SYR" } ); // Array ==> object , {} => key and value
    console.log( typeof true ); //boolean
    console.log( typeof false ); //boolean
    console.log( typeof undefined ); //undefined
    console.log( typeof null ); //object
  }
}
// ERROR ▶▶
{
  // JavaScript will actually create an Error object with two properties: name and message.

  try {                             // The (try) statement lets you test a block of code for errors.
    adddlert( "Welcome guest!" );
  }
  catch ( err ) {                  // The (catch) statement lets you handle the error.
    console.log( err.name );       // ReferenceError
    console.log( err.message );    // adddlert is not defined
  }

  // -------------------------------------------------

  function myFunction ( x ) {
    try {                          // The (try) statement lets you test a block of code for errors.
      if ( x.trim() == "" ) throw "empty";        // The (throw) statement lets you create custom errors.
      if ( isNaN( x ) ) throw "not a number";
      x = Number( x );
      if ( x < 5 ) throw "too low";
      if ( x > 10 ) throw "too high";
    }

    catch ( err ) {               // The (catch) statement lets you handle the error.
      console.log( "Input is " + err + " ||OR|| Error: " + err + "." );
    }

    finally {
      x = "done";
      // x.innerHTML=""
    }

  }
  myFunction( "" );          // Input is empty ||OR|| Error: empty.
  myFunction( "cc" );        // Input is not a number ||OR|| Error: not a number.
  myFunction( "2" );         // Input is too low ||OR|| Error: too low.
  myFunction( "22" );        // Input is too high ||OR|| Error: too high.

  // ----------------------------

  // Range Error

  let num = 1;
  try {
    num.toPrecision( 500 );   // A number cannot have 500 significant digits
  }
  catch ( err ) {
    console.log( err.name );  // RangeError
  }
  // ----------------------------

  // Reference Error

  let x = 5;
  try {
    x = y + 1;                // y cannot be used (referenced)
  }
  catch ( err ) {
    console.log( err.name );  // ReferenceError
  }
  // --------------------------------

  // Syntax Error
  try {
    eval( "alert('Hello)" );   // Missing ' will produce an error
  }
  catch ( err ) {
    console.log( err.name );   // SyntaxError
  }
  // --------------------------------

  // type Error
  let num2 = 1;
  try {
    num2.toUpperCase();         // You cannot convert a number to upper case
  }
  catch ( err ) {
    console.log( err.name );    // typeError
  }
  // --------------------------------

  // URI (Uniform Resource Identifier) Error
  try {
    decodeURI( "%%%" );        // You cannot URI decode percent signs
  }
  catch ( err ) {
    console.log( err.name );   // URIError
  }

}
//  variable ▶▶
{

  var user = "osama",
    age = 37;
  console.log( user );
  console.log( age );
  console.log( hello ); //access on id in html
  hello.innerHTML = "kkkkkkkk"; // change content #hello to "kkkkk"

  var $_us1$_er_$ = "sayed"; //is good

  // every id in html will be variable in js
  var user = "Sami"; // var=>variable, user=>key, "Sami"=>value
  /*
  Var
    -Redeclare(Yes)
    -Access Before Declare(Undefined)
      -Variable Scope Drama[Added To Window]()
        -Block Or Scope Function(no);

  Let
    -Redeclare(No => Error)
    -Access Before Declare(Error)
      -Variable Scope Drama()
        -Block Or Scope Function;

  Const
    -Redeclare(No => Error)
    -Access Before Declare(Error)
      -Variable Scope Drama()
        -Block Or Scope Function;

//----------declare
var a=1111; //declare
var a=2222; //redeclare

console.log(a); => 2222;

let a=1111; //declare
let a=2222; //redeclare

console.log(a); => 2222; //error

const a=1111; //declare
const a=2222; //redeclare

console.log(a); => 2222; //error
*/
  //  First Example;

  let a = 'We Love';
  let b = 'JavaScript';
  let c = 'And';
  let d = 'Programming';

  console.log( ( a = ' "" ' + b + '\n' + c + ' ' + d ) );

  console.log( `${ a } "" '' \\ ${ b }
${ c } ${ d }` );

  // Second Example;

  let title = 'Elzero';
  let desc = 'Elzero Web School';

  let markup = `
  <div class="card">
    <div class="child">
      <h2>${ title }</h2>
      <p>${ desc }</p>
    </div>
  </div>
`;

  document.write( markup );
  // .................................
  var headTitle = 'Elzero',
    partDescription = 'Elzero Web School',
    theDate = '25/10',
    markup = `<div class="card">
            <h3>${ headTitle }</h3>
            <p>${ partDescription }</p>
            <span>${ theDate }</span>
            </div>`;
  document.write( markup.repeat( 4 ) );

}
// Concatenation ▶▶
{

  // First Example

  let a = "We Love";
  let b = "JavaScript";
  let c = "And";
  let d = "Programming";

  console.log( a + ' ' + b + '\n' + c + ' ' + d );
  console.log(
    `
  ${ a } ${ b }
  ${ c } ${ d }
  `
  );

  /*
  we love javascript
  and programing
  */

  console.log( `${ a } "" '' \\ ${ b }
    ${ c } ${ d }` );



  let title = "Elzero",
    desc = "Elzero Web School";

  let print = `
        <div class="card">
            <div class="child">
                <h2>${ title }</h2>
                <p>${ desc }</p>
            </div>
        </div>
    `;
  document.write( print );
  console.log( print );

  let theCard = theTitle = "Elzero",
    theDescription = "Elzero Web School",
    theDate = "25/10";

  Card = `
        <div class = "card">
            <div class ="child">
                <h3>Hello ${ theTitle }</h3>
                <p>${ theDescription }</p>
                <span>${ theDate }</span>
            </div>
        </div>
    `;
  document.write( Card.repeat( 4 ) );


  var numberOne = 10,
    numberTwo = 20;
  console.log( numberOne + "" + numberTwo ); // Normal Concatenate => 1020
  console.log( typeof ( numberOne + "" + numberTwo ) ); // Normal Concatenate => String
  console.log( `${ numberOne }${ numberTwo }` ); // Template Literals Way => 1020
  console.log( typeof ( `${ numberOne }${ numberTwo }` ) ); // Template Literals Way => String
  console.log( numberOne + "\n" + numberTwo );
  /*
      Normal Concatenate
      20
      10
  */
  console.log( `${ numberTwo }\n${ numberOne }` );

}
// Arithmetic Operators ▶▶
{
  console.log( 10 + 20 );                            // 30
  console.log( 10 + "Sami" );                        // '10Sami'

  console.log( 10 - 20 );                            // -10
  console.log( 10 - "Sami" );                        // nan
  console.log( typeof ( NaN ) );                     // 'number'

  console.log( 10 * 20 );                            // 200
  console.log( 10 * -20 );                           // -200

  console.log( 20 / 5 );                             // 4
  console.log( 20 / 3 );                             // 6.666666666666667

  console.log( 2 ** 4 );                             // 16
  console.log( 2 * 2 * 2 * 2 );                      // 16

  console.log( 10 % 2 );                             // 0
  console.log( 11 % 2 );                             // 1

  console.log( 8 & 1 );                              // 0   => 'even
  console.log( 9 & 1 );                              // 1   => 'odd
  var even_or_odd = n => n & 1 ? 'Odd' : 'Even';
  var even_or_odd = n => n % 2 ? 'Even' : 'Odd';

  console.log( +100 );                               // 100
  console.log( +"100" );                             // 100  (+) or (-) => convert to number
  console.log( +"-100" );                            // -100
  console.log( +"Sami" );                            // nan
  console.log( +"15.5" );                            // 15.5

  console.log( +0xff );                              // 255
  console.log( +null );                              // 0
  console.log( +false );                             // 0
  console.log( +true );                              // 1

  console.log( -100 );                               // -100
  console.log( -"100" );                             // -100
  console.log( -"-100" );                            // 100
  console.log( -"Sami" );                            // nan
  console.log( -"15.5" );                            // -15.5

  console.log( -0xff );                              // -255
  console.log( -null );                              // -0
  console.log( -false );                             // -0
  console.log( -true );                              // -1

  console.log( Number( "100" ) );                    //100

  console.log( 200 + 15 % 3 + 190 + 10 - 400 );      // 0
}
// type coercion (type casting) تحويل بالاكراه and assignment operator ▶▶
{

  let a = "10";
  let b = 20;
  let c = true;

  console.log( a + b );        // 1020
  console.log( +a + b );       // 30

  console.log( a - b );        // -10
  console.log( b - a );        // 10

  console.log( "" + 2 );       // 2
  console.log( "" - 2 );       // -2

  console.log( false + true ); // 1
  console.log( false - true ); // -1

  console.log( b + c );        // 21
  console.log( a + b + c );    // 1020true
  console.log( +a + b + c );   // 31


  a = 10;
  a = a + 20; // a+=20
  console.log( a ); // 30
  // a = 30;

  a += 100; // a = a + 100
  console.log( a ); //130


  a = 10;
  a -= 100; // a = a - 100
  console.log( a ); //-90


  a = 10;
  b = "20";
  c = 80;
  console.log( 10 * 20 + 15 % 3 + 190 + 10 - 400 );            // 0

  console.log( ++a + +b++ + +c++ - +a++ );                     //100
  console.log( 11 + 20 + 80 - 11 );                            //100

  console.log( ++a + -b + +c++ - -a++ + +a );                  //94
  console.log( 11 + -20 + 80 + 11 + +12 );                     //94

  console.log( --c + +b + --a * +b++ - +b * a + --a - +true ); //97
  console.log( 79 + 20 + 9 * 20 - 21 * 9 + 8 - 1 );            //97

}
//  number ▶▶
{
  //  Number
  {
    console.log( 1000000 );                                // 1000000
    console.log( 1_000_000 );                              // 1000000

    console.log( 1e6 );                                    // 1000000
    console.log( 123e5 );                                  // 12300000
    console.log( 123e-5 );                                 // 0.00123

    console.log( 10 ** 6 );                                //1000000
    console.log( 1000000.00 );                             //1000000

    console.log( Number.MAX_SAFE_INTEGER );                // 9007199254740991
    console.log( Number.MIN_SAFE_INTEGER );                // -9007199254740991
    console.log( Number.MAX_VALUE );                       // 1.7976931348623157e+308

    Number( true );                                        //  1
    Number( false );                                       //  0
    Number( "10" );                                        //  10
    Number( "  10" );                                      //  10
    Number( "10  " );                                      //  10
    Number( " 10  " );                                     //  10
    Number( "10.33" );                                     //  10.33
    Number( "10,33" );                                     //  NaN
    Number( "10 33" );                                     //  NaN
    Number( "John" );                                      //  NaN
    console.log( Number( new Date( "1970-01-02" ) ) );     // 86400000
    console.log( Number( new Date( "2017-09-30" ) ) );     // 1506729600000

  }
  // number methods
  {
    // Angle in radians = Angle in degrees x PI / 180.

    let myNumber = 32;
    console.log( myNumber.toString( 10 ) );         // 32
    console.log( myNumber.toString( 32 ) );         // 10
    console.log( myNumber.toString( 16 ) );         // 20
    console.log( myNumber.toString( 8 ) );          // 40
    console.log( myNumber.toString( 2 ) );          // 100000

    // convert number to binary
    let num = 14;
    console.log( num.toString( 2 ) ); // number to binary

    // convert binary to number
    var a = parseInt( "1110", 2 );
    console.log( a );                               // 5 => binary to number

    var a = parseInt( "1110", 2 );
    console.log( a );                               // 5 => binary to number


    // change binary to decimal
    function bin2dec ( bin ) {
      return parseInt( bin, 2 ).toString( 10 );
    }
    console.log( bin2dec( 1110 ) );                  // 5


    // convert decimal to binary
    function dec2bin ( dec ) {
      return parseInt( dec, 10 ).toString( 2 );
    }
    console.log( dec2bin( 5 ) );                     // 1110 => dec to binary

    // convert string to binary
    let str = 'Hello World';
    function strToBinary ( str ) {
      let binary = '';
      for ( let i = 0; i < str.length; i++ ) {
        binary += str.charCodeAt( i ).toString( 2 ) + ' ';
      }
      return binary;
    }
    console.log( strToBinary( str ) );

    // convert string to hexadecimal
    let str = 'Hello World';
    let hex = '';
    for ( let i = 0; i < str.length; i++ ) {
      hex += str.charCodeAt( i ).toString( 16 );
    }
    console.log( hex );                            // 48656c6c6f20576f726c64

    // ------------------


    var x = 4;
    var y = 3;
    console.log( x & y );                           // 0


    console.log( ( 100 ).toString() );              // 100
    console.log( 100..toString() );                 // 100
    console.log( 100.00.toString() );               // 100

    console.log( 100.555555.toFixed() );            // 101
    console.log( 100.555555.toFixed( 2 ) );         // 100.56

    console.log( Number( "100" ) );                 // 100
    console.log( Number( "100 Sami" ) );            // nan

    console.log( +( "100" ) );                      // 100
    console.log( +( "100 Sami" ) );                 // nan

    console.log( parseInt( "100" ) );               // 100
    console.log( parseInt( "100 Sami" ) );          // 100
    console.log( parseInt( "Sami 100 Sami" ) );     // nan

    console.log( parseFloat( "100 Sami" ) );        // 100
    console.log( parseFloat( "100.55 Sami" ) );     // 100.55
    console.log( parseFloat( " Sami 100.55" ) );    // nan

    console.log( Number.isInteger( "100" ) );       // => is return true or false
    console.log( Number.isInteger( 100 ) );         // => integer => رقم صحيح
    console.log( Number.isInteger( 100.500 ) );     // false
    console.log( Number.isNaN( "Sami" ) );          // false
    console.log( Number.isNaN( "Sami" / 100 ) );    // true

    // #025 – Math Object
    {
      // min - max
      {
        const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

        console.log( Math.min( ...numbers ) );                           // 1
        console.log( Math.max( ...numbers ) );                           //10
        console.log( Math.max.apply( null, numbers ) );  // 9

        // --------------------------------------------------------------------
        let minArr = arr => arr.sort( ( a, b ) => b - a ).pop();
        let maxArr = arr => arr.sort( ( a, b ) => b - a ).shift();

        console.log( minArr( numbers ) );                                //1
        console.log( maxArr( numbers ) );                                //10

        // ---------------------------------------------------------------------
        console.log( Math.max.apply( null, numbers ) );                  // 10
        console.log( Math.max.apply( null, numbers ) );                  // 10
        console.log( Math.max.apply( null, numbers ) );                  // 10

        // ---------------------------------------------------------------------
        function myArrayMax ( arr ) {
          let len = arr.length;
          let max = -Infinity;
          while ( len-- ) {
            if ( arr[ len ] > max ) {
              max = arr[ len ];
            }
          }
          return max;
        }
        console.log( myArrayMax( numbers ) );                             //10

        // sami
      }
      console.log( Math.round( 99.2 ) );              // 99
      console.log( Math.round( 99.5 ) );              // 100

      console.log( Math.ceil( 99.5 ) );               // 100
      console.log( Math.ceil( 99.2 ) );               // 100

      console.log( Math.floor( 99.5 ) );              // 99
      console.log( Math.floor( 99.2 ) );              // 99

      console.log( Math.min( 10, 20, 40, -100, 100 ) ); // -100
      console.log( Math.max( 10, 20, 40, -100, 100 ) ); // 100

      console.log( Math.pow( 2, 4 ) );              // 16 , => 2**4
      console.log( Math.sqrt( 64 ) );               // 8

      console.log( Math.random() );                // random
      console.log( Math.floor( ( Math.random() * 5 ) + 0 ) ); // 0 || 1 || 2 || 3 || 4

      console.log( Math.trunc( 99.5 ) );           //99 => cut float

      console.log( Math.abs( "10.8" ) );           // 10.8
      console.log( Math.abs( "5" ) );              // 5
      console.log( Math.abs( "-5" ) );             // 5
      console.log( Math.abs( 4 - 10 ) );           // 6
      console.log( Math.abs( 4 ) );                // 4
      console.log( Math.abs( -4 ) );               // 4



      Math.imul( 2, 4 );          // 8
      Math.imul( -1, 8 );         // -8
      Math.imul( -2, -2 );        // 4
      Math.imul( 0xffffffff, 5 ); // -5
      Math.imul( 0xfffffffe, 5 ); // -10
    }
    // #026 – Number Challenge

    console.log( 100_000 );                                // 100000
    console.log( 100000 );                                 // 100000
    console.log( 5e4 + 5e4 );                              // 100000
    console.log( 10 ** 5 );                                // 100000
    console.log( 10 * 10_000 );                            // 100000
    console.log( 100000.00 );                              // 100000
    console.log( 50_000 + 50_000 );                        // 100000
    console.log( Math.pow( 10, 5 ) );                      // 100000
    console.log( Number( parseInt( "100000 sami" ) ) );    // 100000
    console.log( Number( parseInt( "100000.09 sami" ) ) ); // 100000
    console.log( Math.round( 99999.5 ) );                  // 100000
    console.log( Math.ceil( 99999.5 ) );                   // 100000
    console.log( Math.floor( 100000.5 ) );                 // 100000
    console.log( Math.trunc( 100000.5 ) );                 // 100000
    console.log( Math.min( 100000 ) );                     // 100000
    console.log( Math.max( 100000 ) );                     // 100000

    let myVar = "100.56789 Views";

    console.log( parseInt( myVar ) );                      // 100
    console.log( typeof ( parseInt( myVar ) ) );           // number

    console.log( +parseFloat( myVar ).toFixed( 2 ) );      // 100.57
    console.log( typeof ( +( parseFloat( myVar ).toFixed( 2 ) ) ) ); // number

    const oddCount = n => Math.floor( n / 2 );
    console.log( oddCount( 15 ) ); // 7
  }
  // advanced
  {
    // toExponential()
    let x1 = 9.656;
    console.log( x1.toExponential( 2 ) ); // returns 9.66e+0
    console.log( x1.toExponential( 4 ) ); // returns 9.6560e+0
    console.log( x1.toExponential( 6 ) ); // returns 9.656000e+0

    //toPrecision()
    let x2 = 9.656;
    console.log( x2.toPrecision() );     // returns 9.656
    console.log( x2.toPrecision( 2 ) );  // returns 9.7
    console.log( x2.toPrecision( 4 ) );  // returns 9.656
    console.log( x2.toPrecision( 6 ) );  // returns 9.65600

    //valueOf()
    let x3 = 123;
    console.log( x3.valueOf() );            // returns 123
    console.log( ( 123 ).valueOf() );      // returns 123
    console.log( ( 100 + 23 ).valueOf() ); // returns 123

    let strNum = "5";
    console.log( strNum.padStart( 4, 0 ) );                             // 0005
    console.log( strNum.padStart( 3, 0 ) );                             // 005
    console.log( strNum.padStart( 3, 8 ) );                             // 885
    console.log( strNum.padStart( 6, 10 ) );                            // 101015

    console.log( strNum.padEnd( 4, 0 ) );                               // 5000
    console.log( strNum.padEnd( 3, 0 ) );                               // 500
    console.log( strNum.padEnd( 3, 8 ) );                               // 588
    console.log( strNum.padEnd( 6, 10 ) );                              // 510101
  }
}
// string methods ▶▶
{
  var strWord = "Sami";

  console.log( strWord );                                             // 'Sami'
  console.log( strWord[ 1 ] );                                        //  'a'
  console.log( strWord[ 5 ] );                                        // undefined

  console.log( strWord.charAt( 1 ) );                                 //  'a'
  console.log( strWord.charAt( 5 ) );                                 //   => when no index print no thing
  console.log( strWord.charCodeAt( 0 ) );                             // 83

  console.log( strWord.length );                                      // 4  =>how many char

  console.log( strWord.trim() );                                      // Sami => for cut"delete" the spaces

  console.log( strWord.toUpperCase() );                               // SAMI
  console.log( strWord.toLowerCase() );                               // sami

  console.log( strWord.trim().charAt( 2 ).toUpperCase() );            // M
  console.log( strWord.trim()[ 2 ].toUpperCase() );                   // M

  let strNum = "5";
  console.log( strNum.padStart( 4, 0 ) );                             // 0005
  console.log( strNum.padStart( 3, 0 ) );                             // 005
  console.log( strNum.padStart( 3, 8 ) );                             // 885
  console.log( strNum.padStart( 6, 10 ) );                            // 101015
  console.log( strNum.padStart( 6, 'a' ) );                           // aaaaa5

  console.log( strNum.padEnd( 4, 0 ) );                               // 5000
  console.log( strNum.padEnd( 3, 0 ) );                               // 500
  console.log( strNum.padEnd( 3, 8 ) );                               // 588
  console.log( strNum.padEnd( 6, 10 ) );                              // 510101
  console.log( strNum.padEnd( 6, 'a' ) );                             // 5aaaaa


  let text = "The rain in SPAIN stays mainly in the plain";
  console.log( text.indexOf( "SPAIN" ) );                             // 12
  console.log( text.indexOf( "ain" ) );                               // 5
  console.log( text.indexOf( "he" ) );                                // 1
  console.log( text.indexOf( "pla" ) );                               // 38
  console.log( text.indexOf( "spain" ) );                             // -1
  console.log( text.indexOf( "nasa" ) );                              // -1

  console.log( text.lastIndexOf( "SPAIN" ) );                         // 12
  console.log( text.lastIndexOf( "ain" ) );                           // 40
  console.log( text.lastIndexOf( "pla" ) );                           // 38
  console.log( text.lastIndexOf( "spain" ) );                         // -1
  console.log( text.lastIndexOf( "nasa" ) );                          // -1


  console.log( text.match( /ain/g ) );                                // (3) ['ain', 'ain', 'ain']
  console.log( text.match( /ain/ig ) );                               // (4) ['ain', 'AIN', 'ain', 'ain']

  console.log( text );                                                // The rain in SPAIN stays mainly in the plain
  console.log( text.replace( "ain", "###" ) );                        // The r### in SPAIN stays mainly in the plain
  console.log( text.replace( /ain/i, "###" ) );                       // The r### in SPAIN stays mainly in the plain
  console.log( text.replace( /ain/g, "###" ) );                       // The r### in SPAIN stays m###ly in the pl###
  console.log( text.replace( /ain/ig, "###" ) );                      // The r### in SP### stays m###ly in the pl###

  console.log( text.replace( /[ain]/g, e => ( { 'a': '1', 'i': '2', 'n': '3' } )[ e ] ) ); // The r123 23 SPAIN st1ys m123ly 23 the pl123

  let changDote = "one.two.three";
  console.log( changDote.replace( /./g, '-' ) );                      // ----------------
  console.log( changDote.replace( /\./g, '-' ) );                     // one-two-three

  var a = "Elzero Web School";

  console.log( a.indexOf( "Web" ) );                      // 7
  console.log( a.indexOf( "Web", 8 ) );                   //-1
  console.log( a.indexOf( "o" ) );                        // 5

  console.log( a.lastIndexOf( "o" ) );                    // 15
  console.log( a.lastIndexOf( "Web" ) );                  // 7

  console.log( a.search( "Web" ) );                       // 7

  console.log( a.slice( 0 ) );                            // Elzero Web School
  console.log( a.slice( 7 ) );                            //        Web School
  console.log( a.slice( 2, 6 ) );                         //    zero
  console.log( a.slice( 7, 10 ) );                        //         Web

  console.log( a.slice( -5 ) );                           //             chool
  console.log( a.slice( -5, -3 ) );                       //             ch

  console.log( a.repeat( 3 ) );                           // Elzero Web SchoolElzero Web SchoolElzero Web School

  console.log( a.split() );                               // (1) ['Elzero Web School']
  console.log( a.split( " " ) );                          // (3) ['Elzero', 'Web', 'School']

  console.log( a.split( " ", 2 ) );                       // (2) ['Elzero', 'Web']
  console.log( a.split( "", 5 ) );                        // (5) ['E', 'l', 'z', 'e', 'r']


  console.log( a.substring() );                           // Elzero Web School
  console.log( a.substring( 2 ) );                        //   zero Web School
  console.log( a.substring( 2, 6 ) );                     //   zero
  console.log( a.substring( 6, 2 ) );                     //   zero
  console.log( a.substring( -10 ) );                      // Elzero      => If we put the - value , it will be 0
  console.log( a.substring( -10, 6 ) );                   // Elzero

  console.log( a.substring( a.length - 1 ) );             //               l
  console.log( a.substring( a.length - 2 ) );             //              ol


  console.log( a.substr() );                              // Elzero Web School
  console.log( a.substr( 2 ) );                           //   zero Web School
  console.log( a.substr( 2, 6 ) );                        //   zero w
  console.log( a.substr( 6, 2 ) );                        //        w
  console.log( a.substr( -10 ) );                         //        Web School
  console.log( a.substr( -10, 6 ) );                      //        Web Sc

  console.log( a.substr( a.length - 1 ) );                //               l
  console.log( a.substr( a.length - 2 ) );                //              ol


  console.log( a.includes( "Web" ) );                     // true
  console.log( a.includes( "Web", 8 ) );                  // false
  console.log( a.includes( "Web", 6 ) );                  // true
  console.log( a.includes( "sami" ) );                    // false

  console.log( a.startsWith( "Web" ) );                   // false
  console.log( a.startsWith( "sami" ) );                  // false
  console.log( a.startsWith( "Web", 7 ) );                // true
  console.log( a.startsWith( "E" ) );                     // true
  console.log( a.startsWith( "E", 3 ) );                  // false

  console.log( a.endsWith( "o" ) );                       // false
  console.log( a.endsWith( "l" ) );                       // true
  console.log( a.endsWith( "o", 6 ) );                    // true
  console.log( a.endsWith( "ro", 6 ) );                   // true
  console.log( a.endsWith( "E", 1 ) );                    // true

  console.log( a.split( " " ) );                          //  (3) ['Elzero', 'Web', 'School']
  console.log( a.split( " ", 2 ) );                       //  (2) ['Elzero', 'Web'] ==> 2 == limit

  console.log( parseInt( "FF", 16 ) );                    // 255

  // console.log( '45385593107843568'.replace( /\d/g, d => d < 5 ? 0 : 1 ) );                 // 01011110001100111



}
//Conditions ▶▶
{
  // #031 – Comparison Operators
  {
    console.log( 10 == "10" );      // true
    console.log( -100 == "-100" );  // true
    console.log( 10 == "6" );       // false

    console.log( 10 != "10" );      // false
    console.log( -100 != "-100" );  // false
    console.log( 10 != "6" );       // true

    console.log( 10 === "10" );     // false
    console.log( -100 === "-100" ); // false
    console.log( 10 === "6" );      // false
    console.log( "10" === "10" );   // true
    console.log( 10 === 10 );       // true
    console.log( 10 !== 10 );       // false

    console.log( 10 > 10 );         // false
    console.log( 10 >= 10 );        // true

    console.log( typeof "Osama" === typeof "Ahmed" ); // true
  }
  // #032 – Logical Operators{
  {
    console.log( true );                            // true
    console.log( !true );                           // false
    console.log( 10 == "10" );                      // true
    console.log( !( 10 == "10" ) );                 // false

    console.log( 10 == "10" && 10 > 8 );             // true
    console.log( 10 == "10" && 10 > 8 && 10 >= 10 ); // true
    console.log( 10 == "10" && 10 > 8 && 10 >= 20 ); // false

    console.log( 10 == "30" || 5 > 8 );              // false
    console.log( 10 == "10" || 10 > 8 || 10 >= 10 ); // true
    console.log( 10 == "10" || 10 > 8 || 10 >= 20 ); // true
  }
  //#033 – If Condition
  {
    let price = 100;
    let discount = false;
    let discountAmount = 30;
    let country = "KSA";

    if ( discount === true ) {
      price -= discountAmount;
    } else if ( country === "Egypt" ) {
      price -= discountAmount - 20;
    } else if ( country === "Syria" ) {
      price -= 50;
    } else {
      price -= 10;
    }
    console.log( price ); // 90
  }
  //#034- Nested If Condition;
  {
    price = 100;
    discount = false;
    discountAmount = 30;
    country = "Egypt";
    student = true;

    if ( discount === true ) {

      price -= discountAmount; // 70

    } else if ( country === "Egypt" ) {

      if ( student === true ) {

        price -= discountAmount + 30; // 40

      } else {

        price -= discountAmount + 10;  //90

      }

    } else {

      price -= 10; // 90

    }

    console.log( price ); // 40
  }
  // #035 – Conditional ternary Operator
  {
    let theName = "Mona";
    let theGender = "Female";
    let theAge = 30;

    if ( theGender === "Male" ) {
      console.log( "Mr" );
    } else {
      console.log( "Mrs" );
    }

    // condition ? if true : if false
    theGender === "Male" ? console.log( "Mr" ) : console.log( "Mrs" );

    console.log( theGender === "Male" ? "Mr" : 'Mrs' );

    let result = theGender === "Male" ? "Mr" : 'Mrs';
    console.log( result );
    console.log( `Hello ${ result } ${ theName }` );
    console.log( `Hello ${ theGender === "Male" ? "Mr" : "Mrs" } ${ theName }` );
    theAge < 20 ?
      console.log( 20 ) :
      theAge > 20 && theAge < 60 ?
        console.log( "20 to 60" ) :
        theAge > 60 ?
          console.log( "Larger Than 60" ) :
          console.log( "UnKnown" );
  }
  // #036 – Nullish Coalescing Operator;
  {
    console.log( Boolean( 100 ) );  // true
    console.log( Boolean( -100 ) ); // true
    console.log( Boolean( 0 ) );    // false
    console.log( Boolean( null ) ); // false
    console.log( Boolean( "" ) );   // false

    let price = 0;
    console.log( `the price is ${ price || 200 }` ); // the price is 200
    console.log( `the price is ${ price ?? 200 }` ); //the price is 0
  }
  // #038 – Switch Statement
  {
    let day = 4;

    switch ( day ) {
      default:
        console.log( "UnKnown Day" );
        break; // important
      case 0:
        console.log( "Saturday" );
        break;
      case 1:
        console.log( "Sunday" );
        break;
      case 2:
      case 3:
        console.log( "Monday" );
        break;
    }
  }
  // ASSIGNMENT
  {

    console.log( 100 == "100" ); // true
    console.log( 100 != 1000 ); // true
    console.log( 110 + 100 != 10 * 20 ); // true
    console.log( 110 > 100 > 10 < 20 ); // true
    console.log( -10 == "-10" ); // true
    console.log( typeof -50 === typeof +"-40" ); // true
    console.log( typeof 10 == typeof -"-40" ); // true
    console.log( typeof "10" !== typeof 10 ); // true
    console.log( typeof 20 != false ); // true


    let num12 = 10;
    let num21 = 20;
    console.log( num12 !== num21 ); // true
    console.log( num12 != num21 ); // true
    console.log( typeof num12 === typeof num21 ); // true
    console.log( num21 > num12 ); // true
    console.log( num21 >= num12 ); // true
    console.log( num12 < num21 ); // true
    console.log( num12 <= num21 ); // true
    console.log( num12 != true ); // true

    let a = 20;
    let b = 30;
    let c = 10;

    console.log( a < b && a > c || a < b ); // true
    console.log( a + b > a + c ); // true
    console.log( !( a > b ) && !( a > b ) && !( a < c ) && !( a < c ) ); // true

    let num = 120;
    if ( num < 10 ) {
      console.log( `00${ num }` );
    } else if ( num > 10 && num < 100 ) {
      console.log( `0${ num }` );
    } else if ( num >= 100 ) {
      console.log( num );
    }

    let num15 = 9;
    let str = "9";
    let str2 = "20";

    if ( num15 == str ) {
      console.log( "{num15} Is The Same Value As {str}" );
    }
    if ( num15 == str && typeof num15 !== typeof str ) {
      console.log( "{num15} Is The Same Value As {str} But Not The Same Type" );
    }
    if ( num15 !== str2 ) {
      console.log( "{num15} Is Not The Same Value Or The Same Type As {str2}" );
    }
    if ( str != str2 && typeof str === typeof str2 ) {
      console.log( "{str} Is The Same Type As {str2} But Not The Same Value" );
    }

    let num11 = 10;
    let num22 = 30;
    let num33 = "30";

    num33 > num11 && typeof num33 !== typeof num22 ? console.log( "30 Is Larger Than 10 And Type string Not The Same Type As number" ) : console.log( Error( "false" ) );
    num33 > num11 && num33 == num22 && typeof num33 !== typeof num22 ? console.log( "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number" ) : console.log( false );
    num33 !== num11 && typeof num33 !== typeof num22 ? console.log( "{num33} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}" ) : console.log( false );

    // Edit What You Want Here

    let num1 = 10;
    let num2 = num1 - 1;
    let num3 = 10;
    let num4 = 32;

    /*
      Do Not Edit Below This Line
      Needed Output
      True 7 Times
    */

    // Condition 1

    if ( num1 > num2 ) {
      console.log( "True" );
    } else {
      console.log( "False" );
    }

    // Condition 2

    if ( num1 > num2 && num1 < num4 ) {
      console.log( "True" );
    } else {
      console.log( "False" );
    }

    // Condition 3

    if ( num1 > num2 && num1 === num3 ) {
      console.log( "True" );
    } else {
      console.log( "False" );
    }

    // Condition 4

    if ( ( num1 + num2 ) < num4 ) {
      console.log( "True" );
    } else {
      console.log( "False" );
    }

    // Condition 5

    if ( ( num1 + num3 ) < num4 ) {
      console.log( "True" );
    } else {
      console.log( "False" );
    }

    // Condition 6

    if ( ( num1 + num2 + num3 ) < num4 ) {
      console.log( "True" );
    } else {
      console.log( "False" );
    }

    // Condition 7

    if ( num4 - ( num1 + num3 ) + num2 === 21 ) {
      console.log( "True" );
    } else {
      console.log( "False" );
    }
    console.log( 32 - ( 10 + 10 ) + 9 ); // 21

    let day = "   Wednesday  ";

    // You Need To Remove Spaces And Make First Letter Capital => Friday
    day = day.trim();
    day = day[ 0 ].toUpperCase() + day.substring( 1 );


    switch ( day ) {
      default:
        console.log( "Its Not A Valid Day" );
      case "Friday":
      case "Saturday":
      case "Sunday":
        console.log( "No Appointments Available" );
        break;
      case "Monday":
      case "Thursday":
        console.log( "From 10:00 AM To 5:00 PM" );
        break;
      case "Tuesday":
        console.log( "From 10:00 AM To 6:00 PM" );
        break;
      case "Wednesday":
        console.log( "From 10:00 AM To 7:00 PM" );
        break;
    }
  }
  // CHALLENGE
  // Condition Met
  {
    let st = "Elzero Web School";
    if ( st.indexOf( "w" ) === -1 ) {
      a = st.indexOf( "W" );
    } else {
      a = st.indexOf( "w" );
    }

    if ( st.toLowerCase()[ a ] === "w" ) {
      console.log( "Good" );
    }
    if ( a !== "string" ) {
      console.log( "Good" );
    }
    if ( typeof a === "number" ) {
      console.log( "Good" );
    }
    if ( st.substr( 0, 6 ).repeat( 2 ) === "ElzeroElzero" ) {
      console.log( "Good" );
    }
  }
  //If And Switch Toggle
  {
    // first solution
    let job = "Support";
    let salary = 0;

    switch ( job ) {
      default:
        salary = 4000;
        break;
      case "Manager":
        salary = 8000;
        console.log( `jop ${ job } is ${ salary }` );
        break;
      case "IT":
      case "Support":
        salary = 6000;
        console.log( `jop ${ job } is ${ salary }` );
        break;
      case "Developer":
      case "Designer":
        salary = 7000;
        console.log( `jop ${ job } is ${ salary }` );
        break;
    }

    // second solution
    let holidays = 0;
    let money = 0;

    if ( holidays === 0 ) {
      money = 5000;
    } else if ( holidays === 1 || holidays === 2 ) {
      money = 3000;
    } else if ( holidays === 3 ) {
      money = 2000;
    } else if ( holidays === 4 ) {
      money = 1000;
    } else if ( holidays === 5 ) {
      money = 0;
    } else {
      money = 0;
    }
    console.log( `My Money is ${ money }` );
  }
}
// Array ▶▶
{
  // Array Big Introduction
  {
    var myFriends = [ "Ahmed", "Mohamed", "Sayed", [ "Marwan", "Ali" ] ];
    console.log( `Hello ${ myFriends[ 0 ] }` );                   // Hello Ahmed
    console.log( `Hello ${ myFriends[ 1 ] }` );                   // Hello Mohamed
    console.log( `Hello ${ myFriends[ 2 ] }` );                   // Hello Sayed
    console.log( `${ myFriends[ 2 ][ 2 ] }` );                    //         y

    console.log( `Hello ${ myFriends[ 3 ] }` );                   // Hello Marwan,Ali
    console.log( `Hello ${ myFriends[ 3 ][ 1 ] }` );              // Hello Ali
    console.log( ` ${ myFriends[ 3 ][ 1 ][ 2 ] }` );              //         i

    console.log( myFriends );                                     // (4) ['Ahmed', 'Mohamed', 'Sayed', Array(2)]

    myFriends[ 1 ] = "Sami";
    console.log( myFriends );                                    // (4) ['Ahmed', 'Sami', 'Sayed', Array(2)]

    myFriends[ 3 ] = "Ameer";
    console.log( myFriends );                                    // (4) ['Ahmed', 'Sami', 'Sayed', 'Ameer']

    myFriends[ 2 ] = [ "Hassan", "Mostafa" ];
    console.log( myFriends );                                    // (4) ['Ahmed', 'Sami', Array(2), 'Ameer']

    console.log( typeof myFriends );                             //object
    console.log( Array.isArray( myFriends ) );                   //true
  }
  //  Using Length With Array
  {
    var myFriends = [ "Ahmed", "Mohamed", "Sayed", "Alaa" ];
    console.log( myFriends.length );                            // 4

    myFriends[ 3 ] = "Sami";
    console.log( myFriends );                                   // (4) ['Ahmed', 'Mohamed', 'Sayed', 'Sami']

    myFriends[ 6 ] = "Gamal";
    console.log( myFriends );                                   // (7) ['Ahmed', 'Mohamed', 'Sayed', 'Sami', empty × 2, 'Gamal']
    console.log( myFriends.length );                            //  7

    var myFriends = [ "Ahmed", "Mohamed", "Sayed", "Alaa" ];
    console.log( myFriends.length );                           // 4

    // for add item to last item array
    myFriends[ 4 ] = "Gamal";
    console.log( myFriends );                                 // (5) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Gamal']

    // for add item to last item array "Dynamic"
    myFriends[ myFriends.length ] = "Sami";
    console.log( myFriends );                                // (6) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Gamal', 'Sami']

    // for update name last item "Dynamic"
    myFriends[ myFriends.length - 1 ] = "Ameer";
    console.log( myFriends );                               // (6) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Gamal', 'Ameer']

    // for change the length array
    myFriends.length = [ 2 ];
    console.log( myFriends );                              // (2) ['Ahmed', 'Mohamed']
  }
  // Add And Remove From Array
  {
    // The pop() method returns the value that was "popped out":

    // The push() method adds a new element to an array (at the end):
    // The push() method returns the new array length:
    // The shift() method returns the value that was "shifted out":
    // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
    // The unshift() method returns the new array length.
    // Using delete may leave undefined holes in the array. Use pop() or shift() instead

    var myFriends = [ "Ahmed", "Mohamed", "Sayed", "Alaa" ];
    console.log( myFriends );                             // (4) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa']

    // unshift("", "") add element to the First
    myFriends.unshift( "Osama", "Nabil" );
    console.log( myFriends );                             // (6) ['Osama', 'Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa']

    // push("", "") add element to the last
    myFriends.push( "Sami", "Ameer" );
    console.log( myFriends );                             // (8) ['Osama', 'Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Sami', 'Ameer']

    // shift() remove first element from array
    myFriends.shift();
    console.log( myFriends );                             // (7) ['Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Sami', 'Ameer']

    let first = myFriends.shift();
    console.log( myFriends );                             // (6) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Sami', 'Ameer']
    console.log( first );                                 // Nabil

    // pop() remove last element from array
    console.log( myFriends );                             // (6) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Sami', 'Ameer']

    let last = myFriends.pop();
    console.log( myFriends );                             // (5) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Sami']
    console.log( last );                                  // Ameer

    const fruits = [ "Banana", "Orange", "Apple", "Mango" ];
    fruits[ fruits.length ] = "Kiwi";          // Appends "Kiwi" to fruits

    var myFriends = [ "Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed" ];

    console.log( myFriends );
  }
  //  Searching Array
  {
    // indexof (search element, from index[opt])
    console.log( myFriends.indexOf( "Ahmed" ) );              // 0 , will get  first value
    console.log( myFriends.indexOf( "Ahmed", 2 ) );           // 4

    // lastIndexof (search element, from index[opt])
    console.log( myFriends.lastIndexOf( "Ahmed" ) );          // 4 , will get  first value
    console.log( myFriends.lastIndexOf( "Ahmed", 2 ) );       // 0

    // includes (search element, from index[opt])
    console.log( myFriends.includes( "Ahmed" ) );             // true
    console.log( myFriends.includes( "Ahmed", 2 ) );          // true

    if ( myFriends.indexOf( "Sami" ) === -1 ) {               // indexof no found will return -1
      console.log( "not Found" );                             // not found
    }

  }
  // Slicing Array
  {
    var myFriends = [ "Ahmed", "Mohamed", "Ali", "Osama", "Gamal", "Ameer" ];
    // slice only remove item
    console.log( myFriends );                 // (6) ['Ahmed', 'Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']
    console.log( myFriends.slice() );         // (6) ['Ahmed', 'Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']
    console.log( myFriends.slice( 1 ) );      // (5)          ['Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']
    console.log( myFriends.slice( 1, 3 ) );   // (2)          ['Mohamed', 'Ali']
    console.log( myFriends.slice( -3 ) );     // (3)                            ['Osama', 'Gamal', 'Ameer']
    console.log( myFriends.slice( 1, -2 ) );  // (3)          ['Mohamed', 'Ali', 'Osama']
    console.log( myFriends.slice( -4, -2 ) ); // (2)                     ['Ali', 'Osama']
    console.log( myFriends.slice( -4, 4 ) );  // (2)                     ['Ali', 'Osama']
    console.log( myFriends );                 // return array not change


    // splice return new array  delete or add
    //  splice(start[mand], delete count[opt][0 no remove], the items to add[opt])

    myFriends.splice( 0, 0, "Sameer", "Samara" );
    console.log( myFriends ); //(8) ['Sameer', 'Samara', 'Ahmed', 'Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']

    myFriends.splice( 0, 1 );
    console.log( myFriends ); //(7) ['Samara', 'Ahmed', 'Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']

    myFriends.splice( 0, 2 );
    console.log( myFriends ); //(5) ['Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']

    myFriends.splice( 2, 2, "Sameer", "Samara" );
    console.log( myFriends ); //(5) ['Mohamed', 'Ali', 'Sameer', 'Samara', 'Ameer']

  }
  // Joining Arrays
  {
    var myFriends = [ "Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer" ];
    let myNewFriends = [ "Samar", "Samah" ];
    let schoolFriends = [ "Haytham", "Shady" ];

    let allFriends = myFriends.concat( myNewFriends, schoolFriends, "Gameel", [ "one", "two" ] );

    console.log( allFriends );                // (13) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer', 'Samar', 'Samah', 'Haytham', 'Shady', 'Gameel', 'one', 'two']

    // join in document === to.string
    console.log( allFriends.join() );         // Ahmed,Sayed,Ali,Osama,Gamal,Ameer,Samar,Samah,Haytham,Shady,Gameel,one,two
    console.log( allFriends.join( "" ) );     // AhmedSayedAliOsamaGamalAmeerSamarSamahHaythamShadyGameelonetwo
    console.log( allFriends.join( " " ) );    // Ahmed Sayed Ali Osama Gamal Ameer Samar Samah Haytham Shady Gameel one two
    console.log( allFriends.join( " @ " ) );  // Ahmed @ Sayed @ Ali @ Osama @ Gamal @ Ameer @ Samar @ Samah @ Haytham @ Shady @ Gameel @ one @ two

    console.log( allFriends.toString() );         // Ahmed,Sayed,Ali,Osama,Gamal,Ameer,Samar,Samah,Haytham,Shady,Gameel,one,two
    console.log( allFriends.toString( "" ) );     // Ahmed,Sayed,Ali,Osama,Gamal,Ameer,Samar,Samah,Haytham,Shady,Gameel,one,two
    console.log( allFriends.join( " " ).toUpperCase() );  // AHMED SAYED ALI OSAMA GAMAL AMEER SAMAR SAMAH HAYTHAM SHADY GAMEEL ONE TWO
  }
  {
    {
      const points = [ 40, 100, 1, 5, 25, 10 ];
      console.log( Math.max.apply( null, points ) );        // 100



      console.log( [ 'a', 'b', 'c' ].fill( 4 ) );            // (3) [4, 4, 4]
      console.log( [ 'a', 'b', 'c' ].fill( 4, 1 ) );         // (3) ['a', 4, 4]
      console.log( [ 'a', 'b', 'c' ].fill( 4, 2 ) );         // (3) ['a', 'b', 4]
      console.log( [ 'a', 'b', 'c' ].fill( 4, 1, 2 ) );      // (3) ['a', 4, 'c']
      console.log( [ 'a', 'b', 'c' ].fill( 4, 1, 1 ) );      // (3) ['a', 'b', 'c']
      console.log( [ 'a', 'b', 'c' ].fill( 4, 3, 3 ) );      // (3) ['a', 'b', 'c']
      console.log( [ 'a', 'b', 'c' ].fill( 4, -3, -2 ) );    // (3) [4, 'b', 'c']
      console.log( [ 'a', 'b', 'c' ].fill( 4, NaN, NaN ) );  // (3) ['a', 'b', 'c']
      console.log( [ 'a', 'b', 'c' ].fill( 4, 3, 5 ) );      // (3) ['a', 'b', 'c']
      console.log( Array( 3 ).fill( 4 ) );                   // (3) [4, 4, 4]

      //  --------------------------------

      var websites = new Array( 1000 ).fill( "codewars" );
      // or
      var websites = [];
      while ( websites.length < 1000 ) websites.push( "codewars" );

      // or
      var websites = Array.from( { length: 1000 }, () => 'codewars' );

      //  --------------------------------
      arr.match( /good/gi ).length;    // search how word good
    }
  }

  // array.find()
  {
    const numbers = [ 4, 9, 16, 25, 29 ];
    console.log( numbers.find( ( e ) => e > 18 ) );           // 25
    //
    const numbers = [ 4, 9, 16, 25, 29 ];
    console.log( numbers.findIndex( ( e ) => e > 18 ) );      // 3

  }
  // array.sort()
  {

    var myFriends = [ 10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10 ];
    console.log( myFriends );                           // (10) [10, 'Sayed', 'Mohamed', '90', 1000, 100, 20, '10', -20, -10]
    console.log( myFriends.sort() );                    // (10) [-10, -20, 10, '10', 100, 1000, 20, '90', 'Mohamed', 'Sayed']
    console.log( myFriends.sort( ( a, b ) => a - b ) ); // (10) [-20, -10, 10, '10', 20, '90', 100, 1000, 'Mohamed', 'Sayed']

    console.log( myFriends.reverse() );                 // (10) ['Sayed', 'Mohamed', '90', 20, 1000, 100, '10', 10, -20, -10]
    console.log( myFriends.sort().reverse() );          // (10) ['Sayed', 'Mohamed', '90', 20, 1000, 100, 10, '10', -20, -10]

    let s = array => array.filter( ( ele, index ) => array.indexOf( ele ) === index ).sort( ( a, b ) => a - b );
    console.log( s( [ 1, 1, 3, 4, 5, 5, 8, 2 ] ) ); // (6) [1, 2, 3, 4, 5, 8]

    // sort( ( a, b ) => a - b )  =>>> 1 2 3 4 ...

    // sort and random
    const points = [ 40, 100, 1, 5, 25, 10 ];

    for ( let i = points.length - 1; i > 0; i-- ) {
      let j = Math.floor( Math.random() * i );
      let k = points[ i ];
      points[ i ] = points[ j ];
      points[ j ] = k;
    }
    console.log( points.join( "" ) );

    // sort
    const cars = [
      { type: "Volvo", year: 2016 },
      { type: "Saab", year: 2001 },
      { type: "BMW", year: 2010 }
    ];

    function sorArr ( a, b ) {
      let x = a.type.toLowerCase();
      let y = b.type.toLowerCase();
      if ( x < y ) { return -1; }
      if ( x > y ) { return 1; }
      return 0;
    }

    console.log( cars.sort( sorArr ) );
  }
  // Array.some()
  {
    /*
  some() does not mutate the array on which it is called.

  - Arrow function
  some((element) => { ... } )
  some((element, index) => { ... } )
  some((element, index, array) => { ... } )
  */

    const array1 = [ 1, 2, 3, 4, { name: "sami" } ];

    let include = ( arr, item ) => arr.indexOf( item ) !== -1;
    let include = ( arr, item ) => Boolean( ~arr.indexOf( item ) );
    let include = ( arr, item ) => item == arr.find( el => el === item );

    console.log( include( [ 1, 2, 3, 4 ], 3 ) );                   // true

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
  }

  //  NEXT Item
  {
    function nextItem ( xs, item ) {
      var found = false;
      for ( var x of xs ) {
        if ( found ) return x;
        if ( x == item ) found = true;
      }
      return undefined;
    }

    console.log( nextItem( [ 1, 2, 3, 4, 5, 6, 7, 8 ], 3 ) );   //  4
    console.log( nextItem( [ 1, 2, 3, 4, 5, 6, 7, 8 ], 1 ) );   //  2
    console.log( nextItem( [ 1, 2, 3, 4, 5, 6, 7, 8 ], 8 ) );   //  undefined

    console.log( nextItem( [ 'a', 'b', 'c' ], 'a' ) );          //  "b"
    console.log( nextItem( [ 'a', 'b', 'c' ], 'c' ) );          //  undefined
    console.log( nextItem( [ 'a', 'b', 'c' ], 'b' ) );          //  "c"
    console.log( nextItem( [ 'a', 'b', 'c' ], 0 ) );            //  undefined

    console.log( nextItem( "testing", "t" ) );                  //  "e"
    console.log( nextItem( "testing", "n" ) );                  //  "g"
    console.log( nextItem( "testing", "s" ) );                  //  "t"

    function* countFrom ( n ) { for ( let i = n; ; ++i ) yield i; }
    console.log( nextItem( countFrom( 1 ), 12 ) );              //  13
    console.log( nextItem( countFrom( 1 ), 44 ) );              //  45
    console.log( nextItem( countFrom( 1 ), 33 ) );              //  34
    console.log( nextItem( countFrom( 1 ), 64 ) );              //  65
  }
  // array.from()
  {
    // Array.from()

    // Array from a String
    console.log( Array.from( 'Sami' ) );                        // (3) ['S', 'a', 'm', 'i']
    console.log( Array.from( '35231' ) );                      // (5) ['3', '5', '2', '3', '1']

    // Array from a Number
    console.log( Array.from( String( 35231 ) ) );              // (5) ['3', '5', '2', '3', '1']


    // Array from a Set
    const array = [ 'Sami', 'Osama', 'Ahmed', 'Sami' ];
    const setArray = new Set( [ 'Sami', 'Osama', 'Ahmed', 'Sami' ] );

    const distinct = a => [ ...new Set( a ) ];
    distinct( [ 1, 1, 2 ] );                                          // [1,2]

    const j = [ 'Sami', 'Osama', 'Ahmed', 'Sami' ];
    console.log( a.filter( ( item, index ) => a.indexOf( item ) === index ) );



    console.log( Array.from( array ) );                        // (4) ['Sami', 'Osama', 'Ahmed', 'Sami']
    console.log( Array.from( setArray ) );                     // (3) ['Sami', 'Osama', 'Ahmed']
    console.log( [ ...new Set( [ 15, 20, 20, 17 ] ) ] );       // (3) [15, 20, 17]
    console.log( Array.from( setArray.values() ) );            // (3) [1, 2, 3]

    // Array from a Map
    const mapArray2 = new Map( [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ] );
    console.log( Array.from( mapArray2 ) );                   // (3) [Array(2), Array(2), Array(2)]
    console.log( Array.from( mapArray2.keys() ) );            // (3) ['a', 'b', 'c']
    console.log( Array.from( mapArray2.values() ) );          // (3) [1, 2, 3]

    // Array from an Array-like object (arguments)
    function funcArray () {
      console.log( Array.from( arguments ) );                 // (3) [1, 2, 3]
    }
    funcArray( 1, 2, 3 );


    /*  Arrow function Syntax
        - Array.from(arrayLike, (element) => { ... } )
        - Array.from(arrayLike, (element, index) => { ... } ) */

    // Using arrow functions and Array.from()
    console.log( Array.from( [ 1, 2, 3 ], x => x + x ) );       // (3) [2, 4, 6]

    // Generate a sequence of numbers
    // Since the array is initialized with `undefined` on each position,
    // the value of `v` below will be `undefined`
    console.log( Array.from( { length: 3 }, ( v, i ) => i ) );  // (3) [0, 1, 2]
    console.log( Array.from( { length: 5 }, ( v, i ) => i ) );  // (5) [0, 1, 2, 3, 4]
    //  or
    let monkeyCount = ( n ) => [ ...Array( n + 1 ).keys() ].slice( 1 );



    // Sequence generator (range)


    const rangeArray = ( start, stop, step ) => Array.from( { length: ( stop - start ) / step + 1 }, ( _, i ) => start + ( i * step ) );

    // Generate numbers range 0..4
    console.log( rangeArray( 0, 4, 1 ) );                      // (5) [0, 1, 2, 3, 4]

    // Generate numbers range 10..20 with step of 2
    console.log( rangeArray( 10, 20, 2 ) );                    // (6) [10, 12, 14, 16, 18, 20]

    // Generate the alphabet using Array.from making use of it being ordered as a sequence
    let start = 'A'.charCodeAt( 0 );
    let stop = 'Z'.charCodeAt( 0 );
    console.log( rangeArray( start, stop, 1 ).map( x => String.fromCharCode( x ) ) );
    // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    return Array.from( { length: n }, ( _, i ) => i + 1 );  // preFizz( 4 ) ⇛ ( 4 )[ 1, 2, 3, 4 ];

  }
}
// replace ▶▶
{

  var a = "Elzero Web School";
  var a = "Elzero Web School Web";

  console.log( a.replace( "Web", "Site" ) );               // Elzero Site School Web
  console.log( a.replace( /WEB/i, "Site" ) );              // Elzero Site School Web
  console.log( a.replace( /WEB/g, "Site" ) );              // Elzero Web School Web
  console.log( a.replace( /WEB/gi, "Site" ) );             // Elzero Site School Site

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  let str2 = "one.two.three";

  console.log( str2.replace( /./g, '-' ) ); // ----------------
  console.log( str2.replace( /\./g, '-' ) ); // one-two-three

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  let str = "Hello World";

  console.log( str.replace( /\S+/g, 'sami' ) );       // sami sami
  console.log( str.replace( /\w+/g, 'sami' ) );       // sami sami
  console.log( str.replace( /[^ ]+/g, 'sami' ) );     // sami sami

  console.log( str.replace( / /g, "" ) );             // HelloWorld --> Remove String Spaces
  console.log( str.replace( /\s/g, '' ) );            // HelloWorld --> Remove String Spaces

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  let replaceStr = str => str.replace( /[015]/g, e => ( { '0': 'O', '1': 'I', '5': 'S' } )[ e ] );

  console.log( replaceStr( "Sami 015" ) );  // Sami OIS
  console.log( replaceStr( "1Sami 05" ) );  // ISami OS
  console.log( replaceStr( "1Sam5i 0" ) );  // ISamSi O

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  // method 1
  let correctPolishLetters = str => str.replace( /[ąćęłńóśźż]/g, e => ( { 'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z' } )[ e ] );

  // method 2
  let correctPolishLetters = s => s.replace( /[ąćęłńóśźż]/g, c => "acelnoszz"[ "ąćęłńóśźż".indexOf( c ) ] );

  // method 3
  var polishLetters = { "ą": "a", "ć": "c", "ę": "e", "ł": "l", "ń": "n", "ó": "o", "ś": "s", "ź": "z", "ż": "z", };
  let correctPolishLetters = string => string.split( '' ).map( ( c ) => polishLetters[ c ] || c ).join( "" );

  console.log( correctPolishLetters( "Jędrzej Błądziński" ) );   //Jedrzej Bladzinski

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */


  const defineSuit = card => ( { '♣': `clubs`, '♦': `diamonds`, '♥': `hearts`, '♠': `spades` } )[ card.slice( -1 ) ];

  console.log( defineSuit( '3♣' ) ); // clubs

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  let fakeBin = x => x.replace( /\d/g, d => d < 5 ? 0 : 1 );

  console.log( fakeBin( '45385593107843568' ) );         // 01011110001100111

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  let shortcut = ( string ) => string.replace( /[aeiou]/g, '' );
  console.log( shortcut( "complain" ) );                       // cmpln

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  let tripleTrouble = ( one, two, three ) => one.replace( /./g, ( v, i ) => v + two[ i ] + three[ i ] );
  console.log( tripleTrouble( "aaa", "bbb", "ccc" ) );   //abcabcabc
  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  function getRndInteger ( min, max ) {
    return Math.floor( Math.random() * ( max - min ) ) + min;
  }
  console.log( getRndInteger( 5, 20 ) );        // 18

}
// JavaScript Regular Expressions ▶▶
{
  /*
  - i	=> Perform case-insensitive matching
  - g	=> Perform a global match (find all matches rather than stopping after the first match)
  - m	=> Perform multiline matching
*/

  let text = "Visit Microsoft!";

  console.log( text.replace( /microsoft/i, "W3Schools" ) );    // Visit W3Schools!
  // -----------------------------

  // [abc]	Find any of the characters between the brackets
  let text1 = "Is this all there is?";

  console.log( text1.match( /[h]/g ) );                        // (2) ['h', 'h']
  // -----------------------------

  // [0-9]	Find any of the digits between the brackets
  let text2 = "123456789";

  console.log( text2.replace( /[1-4]/g, "*" ) );              // ****56789
  console.log( text2.match( /[ 1 - 5 ]/g ) );                 // (2) ['1', '5']
  // -----------------------------

  // (x|y)	Find any of the alternatives separated with |
  let text3 = "re, green, red, green, gren, gr, blue, yellow";

  console.log( text3.replace( /(green|red)/g, "X" ) );       // re, X, X, X, gren, gr, blue, yellow
  console.log( text3.match( /(red|green)/g ) );              // (3) ['green', 'red', 'green']
  // -----------------------------

  // \d	Find a digit
  let text4 = "Give 100%!";

  console.log( text4.replace( /\d/g, "X" ) );                // Give XXX%!
  console.log( text4.match( /\d/g ) );                       // (3) ['1', '0', '0']
  // -----------------------------

  // \s	Find a whitespace character
  let text5 = "Is this all there is?";

  console.log( text5.replace( /\s/g, "X" ) );                // IsXthisXallXthereXis?
  console.log( text5.match( /\s/g ) );                       // (4) [' ', ' ', ' ', ' ']
  // -----------------------------

  // \b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
  let text6 = "HELLO, LOOK AT YOU!";

  console.log( text6.replace( /\bLO/, "XX" ) );              // HELLO, XOK AT YOU!
  console.log( text6.search( /\bLO/ ) );                     // 7

  console.log( text6.replace( /LO\b/, "XX" ) );              // HELXX, LOOK AT YOU!
  console.log( text6.search( /LO\b/ ) );                     // 3
  // ------------------------------

  // \uxxxx	Find the Unicode character specified by the hexadecimal number xxxx

  let text7 = "Visit W3Schools. Hello World!";
  console.log( text7.replace( /w/gi, "X" ) );                // Visit X3Schools. Hello Xorld!
  console.log( text7.replace( /\u0057/g, "X" ) );            // Visit X3Schools. Hello Xorld!
  console.log( text7.match( /\u0057/g ) );                   // (2) ['W', 'W']
  // -------------------------------------

  // n+	Matches any string that contains at least one n

  let text8 = "Hellooo World! Hello W3Schools!";

  console.log( text8.replace( /o/ig, "X" ) );                // HellXXX WXrld! HellX W3SchXXls!
  console.log( text8.replace( /o+/ig, "X" ) );               // HellX WXrld! HellX W3SchXls!
  console.log( text8.match( /o+/g ) );                       // (4) ['ooo', 'o', 'o', 'oo']
  // -------------------------------------

  // n*	Matches any string that contains zero or more occurrences of n

  let text9 = "Hellooo World! Hello W3Schools!";

  console.log( text9 );
  console.log( text9.replace( /o*/ig, "#" ) );               // #H#e#l#l## #W##r#l#d#!# #H#e#l#l## #W#3#S#c#h##l#s#!#
  console.log( text9.match( /o*/g ) );                       // (29) ['', '', '', '', 'ooo', '', '', 'o', '', '', '', '', '', '', '', '', '', 'o', '', '', '', '', '', '', 'oo', '', '', '', '']
  // -------------------------------------

  // n?	Matches any string that contains zero or one occurrences of n

  let text10 = "Hellooo World! Hello W3Schools!";

  console.log( text10 );
  console.log( text10.replace( /o?/ig, "#" ) );               // #H#e#l#l#### #W##r#l#d#!# #H#e#l#l## #W#3#S#c#h###l#s#!#
  console.log( text10.match( /o?/g ) );                       // (32) ['', '', '', '', 'o', 'o', 'o', '', '', 'o', '', '', '', '', '', '', '', '', '', 'o', '', '', '', '', '', '', 'o', 'o', '', '', '', '']
  // -----------------------------------------

  // Using the RegExp Object

  const obj = /e/.exec( "The best things in life are free!" );
  console.log( "Found " + obj[ 0 ] + " in position " + obj.index + " in the text: " + obj.input );

  console.log( /e/.exec( "The best things in life are free!" ) );
  // ['e', index: 2, input: 'The best things in life are free!', groups: undefined]

  // -----------------------------------------
  // regex to validate a username
  {
    function validateUsr ( username ) {
      /**
        - `^`        Start from the beginning of the string.
        - `[]`       Allow any character specified, including...
        - `a-z`      anything from a to z,
        - `0-9`      anything from 0 to 9,
        - `_`        and underscore.
        - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
        - `$`        End the string right after specified amount of allowed characters is given. Problem Solving
      */
      const validator = /^[a-z0-9_]{4,18}$/;

      return validator.test( username );
    }

    console.log( validateUsr( "Pro" ) );                        // false
    console.log( validateUsr( "Pro-in programing" ) );          // false
    console.log( validateUsr( "Pro$-in_programing" ) );         // false
    console.log( validateUsr( "pro_in_programing" ) );          // true
    console.log( validateUsr( "pro1in_9programing" ) );         // true
    console.log( validateUsr( "pro1in_9programingxxx" ) );      // false
  }


  const validateHello = greetings => /(hello|ciao|salut|hallo|hola|ahoj|czesc)/g.test( greetings.toLowerCase() );

  // or
  validateHello = _ => /.*(h[ea]llo|ciao|salut|hola|ahoj|czesc)/i.test( _ );
  // or
  const greetingPattern = /\b(hello|ciao|salut|hallo|hola|ahoj|czesc)\b/i;

  function validateHello ( phrase ) {
    return greetingPattern.test( phrase );
  }
  // or
  const vivas = [ 'hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc' ];
  const validateHello = message => new RegExp( vivas.join( '|' ), 'i' ).test( message );
  // or
  const validateHello = greetings => !!greetings.match( /(ahoj|ciao|salut|hello|hola|czesc|hallo)/gi );

  console.log( validateHello( 'ahoj' ) );
  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  String.prototype.digit = () => /^\d$/.test( this );
  String.prototype.digit = () => /^[0-9]$/.test( this );
  String.prototype.digit = () => /^[0-9]$/g.test( this );
  String.prototype.digit = () => this.match( /^[0-9]$/ );
  String.prototype.digit = () => Boolean( this.match( /^[0-9]$/ ) );
  String.prototype.digit = () => !!this.match( /^\d{1}$/ );
  String.prototype.digit = () => /^[0-9]{1}$/g.test( this );
  String.prototype.digit = () => /^[0-9]{1,1}$/.test( this );
  String.prototype.digit = () => this.search( /^\b\d$/ ) !== -1;
  String.prototype.digit = () => this.length === 1 && !isNaN( parseInt( this ) );
  String.prototype.digit = () => this.replace( /\d/, "*.*" ) == "*.*";

  console.log( '7'.digit() );     // true
  console.log( 'v'.digit() );     // false
  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */
  function validateUsr ( username ) {
    /*
      - `^`        Start from the beginning of the string.
      - `[]`       Allow any character specified, including...
      - `a-z`      anything from a to z,
      - `0-9`      anything from 0 to 9,
      - `_`        and underscore.
      - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
      - `$`        End the string right after specified amount of allowed characters is given.
    */
    return /^[a-z0-9_]{4,16}$/.test( username );
  }
  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

}
// LOOP ▶▶
{
  // while mean loop will work while the condition true
  // while loop will stop or break when the condition = false
  // Looping On Sequences
  {
    const myFriends = [ 1, 2, 3, 'osama', 'sami', 'sayed' ];
    let onlyName = [];
    for ( let i = 0; i < myFriends.length; i++ ) {
      if ( typeof myFriends[ i ] === 'string' ) {
        onlyName.push( myFriends[ i ] );
      }
    }
    console.log( onlyName );       // (3) ['osama', 'sami', 'sayed']
  }
  // #050 – Nested Loops And Training’s
  {
    let products = [ "Keyboard", "Mouse", "Pen", "Pad", "Monitor" ];

    let colors = [ "Red", "Green", "Black" ];

    let models = [ 2020, 2021 ];

    for ( let i = 0; i < products.length; i++ ) {
      console.log( products[ i ] ); // first step: Keyboard
      for ( let j = 0; j < colors.length; j++ ) {
        console.log( colors[ j ] ); // first step:  Red ,  Green , Black
      }
      for ( let k = 0; k < models.length; k++ ) {
        console.log( models[ k ] ); // first step:  2020 ,  2021
      }
    }
    {
      let products = [ "Keyboard", "Mouse", "Pen", "Pad", "Monitor" ];

      let colors = [ "Red", "Green", "Black" ];

      let models = [ 2020, 2021 ];

      for ( i = 0; i < products.length; i++ ) {
        console.log( `%c${ products[ i ] } ${ i + 1 }`, "color: red; font-size: 16px;" );

        console.log( `%c# color is:`, "color: blue" );
        for ( j = 0; j < colors.length; j++ ) {
          console.log( `=> ${ j + 1 } ${ colors[ j ] }` );
        }
        console.log( `%c# model is:`, "color: blue" );
        for ( k = 0; k < models.length; k++ ) {
          console.log( `- ${ models[ k ] }` );
        }
      }
    }
    /*
      first step  -Keyboard
                    - Red
                    - Green
                    - Black

                    -2020
                    -2021

      second step  -Mouse
                    - Red
                    - Green
                    - Black

                    -2020
                    -2021

      third step  -Mouse
                    - Red
                    - Green
                    - Black

                    -2020
                    -2021
    */
    {
      let products = [ "1Keyboard", 20, 38, 40, 99, "4Mouse", 66, 77, "5Pen", 5, "6Pad", "7Monitor" ];

      let colors = [ "Red", "Green", "Black" ];

      let models = [ 2020, 2021 ];
      let i = 0;

      while ( i < products.length ) {
        if ( typeof products[ i ] === "number" ) {
          products.splice( i, 1 );
          continue;
        }


        console.log( `%c${ products[ i ] } ${ i + 1 }`, "color: red; font-size: 16px;" );


        console.log( `%c# color is:`, "color: blue" );
        for ( j = 0; j < colors.length; j++ ) {
          console.log( `=> ${ j + 1 } ${ colors[ j ] }` );
        }

        console.log( `%c# model is:`, "color: blue" );
        for ( k = 0; k < models.length; k++ ) {

          console.log( `- ${ models[ k ] }` );

        }

        i++;
      }

    }
    {
      let friends = [ "Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh" ];
      let letter = "a";
      let i = 0;

      while ( i < friends.length ) {
        if ( friends[ i ][ 0 ].toLowerCase() === letter ) {
          friends.splice( i, letter.length );
          continue;
        }

        console.log( `"${ i + letter.length } => ${ friends[ i ] }"` );
        i++;
      }
    }
  }

  // #051 – Loop Control – Continue, Break, Label
  {
    // will break loop when get pen
    let products = [ "Keyboard", "Mouse", "Pen", "Pad", "Monitor" ];
    let colors = [ "Red", "Green", "Black" ];
    let models = [ 2020, 2021 ];

    for ( let i = 0; i < products.length; i++ ) {
      console.log( products[ i ] ); // will print before check
      if ( products[ i ] === "Pen" ) {
        break; // when check is the loop will stop and not print all after break
      }
    }

    // will skip step loop when get number

    let products = [ "Keyboard", "Mouse", 10, 20, "Pen", "Pad", 30, 40, "Monitor" ];
    let colors = [ "Red", "Green", "Black" ];
    let models = [ 2020, 2021 ];

    for ( let i = 0; i < products.length; i++ ) {

      // console.log(products[i]); here is wrong place, will print before check

      if ( typeof products[ i ] === "number" ) {

        continue;
      }
      console.log( products[ i ] );
    }

    // will stop nested loop when get nested loop colors = Green

    let products = [ "Keyboard", "Mouse", "Pen", "Pad", "Monitor" ];
    let colors = [ "Red", "Green", "Black" ];
    let models = [ 2020, 2021 ];

    mainLoop: for ( let i = 0; i < products.length; i++ ) {

      console.log( products[ i ] );
      nestedLoop: for ( let j = 0; j < colors.length; j++ ) {

        console.log( `- ${ colors[ j ] }` );
        if ( colors[ j ] === "Green" )

          break nestedLoop;
      }
    }


    // will stop main loop when get nested loop colors = Green

    let products = [ "Keyboard", "Mouse", "Pen", "Pad", "Monitor" ];
    let colors = [ "Red", "Green", "Black" ];
    let models = [ 2020, 2021 ];

    mainLoop: for ( let i = 0; i < products.length; i++ ) {

      console.log( products[ i ] );
      nestedLoop: for ( let j = 0; j < colors.length; j++ ) {

        console.log( `- ${ colors[ j ] }` );
        if ( colors[ j ] === "Green" ) {
          break mainLoop;
        }
      }
    }
  }

  // #052 – Loop For Advanced Examples
  {
    let products = [ "Keyboard", "Mouse", "Pen", "Pad", "Monitor" ];
    let i = 0; // we put here for can access i out the loop and inter loop

    for ( ; ; ) {

      console.log( products[ i ] );

      i++; //i++ => i = i + 1   || i += 1

      if ( i === products.length ) break;
    }

  }
  // #053 – Practice – Add Products To Page
  {
    let products = [ "Keyboard", "Mouse", "Pen", "Pad", "Monitor" ];
    let colors = [ "Red", "Green", "Blue" ];
    let showCount = 5;

    document.write( `<h1>Show ${ showCount } Products</h1>` );

    for ( let i = 0; i < showCount; i++ ) {

      document.write( `<div>` );
      document.write( `<h3>[${ i + 1 }] ${ products[ i ] }</h3>` );

      for ( let j = 0; j < colors.length; j++ ) {

        document.write( `<p>${ colors[ j ] }</p>` );
      }

      document.write( `<p>${ colors.join( " | " ) }</p>` );
      document.write( `</div>` );
    }

  }

  /*
    Loop Challenge
  */
  {
    let myAdmins = [ "Ahmed", "Osama", "Sayed", "Stop", "Samera" ];
    let myEmployees = [ "Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar" ];

    let x = myAdmins.indexOf( 'Stop' );
    console.log( x );

    document.write( `<div>We Have ${ x } Admins</div>` );

    for ( let i = 0; i < x; i++ ) {

      document.write( '<hr>' );
      document.write( '<div>' );
      document.write( `The Admins For Team ${ i + 1 } Is ${ myAdmins[ i ] }` );
      document.write( '<h3>Team Members:</h3>' );

      let countJ = 1;
      for ( let j = 0; j < myEmployees.length; j++ ) {
        if ( myAdmins[ i ][ 0 ].toUpperCase() === myEmployees[ j ][ 0 ].toUpperCase() ) {
          document.write( `<p>- ${ countJ } ${ myEmployees[ j ] } </p>` );
          countJ++;
        }
      }

      document.write( '</div>' );
    }
  }
  // advanced
  {
    //  LOOP
    /*
    - for - loops through a block of code a number of times
    - for/in - loops through the properties of an object
    - for/of - loops through the values of an (((iterable))) object
    - while - loops through a block of code while a specified condition is true
    - do/while - also loops through a block of code while a specified condition is true
      * It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
    */

    // for - loops through a block of code a number of times

    for ( let i = 0; i < 10; i++ ) {
      console.log( i );
    }
    // ------------------------------------------------------------

    const cars = [ "BMW", "Volvo", "Saab", "Ford" ];
    let i1, len, text;

    for ( i1 = 0, len = cars.length; i1 < len; i1++ ) {
      console.log( `EX 1: ${ cars[ i1 ] }` );
    }

    // OR ----

    let i2 = 0;
    let len2 = cars.length;

    for ( ; i2 < len2; i2++ ) {
      console.log( `EX 2: ${ cars[ i2 ] }` );
    }
    // OR ----

    let i3 = 0;
    let len3 = cars.length;

    for ( ; i3 < len3; ) {
      console.log( `EX 3: ${ cars[ i3 ] }` );
      i3++;
    }
    /* All the Outputs :
      EX i: BMW
      EX i: Volvo
      EX i: Saab
      EX i: Ford
    */

    /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

    // - for/of - loops through the values of an iterable object
    // Syntax: --> for ( variable of iterable ) { // code block to be executed }

    for ( let car of cars ) {
      console.log( `EX 4: ${ car }` );
    }
    /*  Output :
      EX i: BMW
      EX i: Volvo
      EX i: Saab
      EX i: Ford
    */
    // ------------------------
    let language = "HTML";
    for ( let letter of language ) {
      console.log( letter );
    }
    /*  Output :
      H
      T
      M
      L
    */
    /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */
    // - for/in -loops through the properties of an object
    // Syntax: --> for ( key of object ) { // code block to be executed }

    const person = { fname: "John", lname: "Doe", age: 25 };

    for ( let x in person ) {
      console.log( person[ x ] );
    }
    /*  Output :
    - John
    - Doe
    - 25
    */
    // ---------
    const numbers = [ 45, 4, 9, 16, 25 ];
    for ( let x in numbers ) {
      console.log( numbers[ x ] );
    }
    /* output:
    - 45
    - 4
    - 9
    - 16
    - 25
    */

    /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */
    // Array.forEach()
    // The forEach() method calls a function (a callback function) once for each array element.
    // const numbers = [45, 4, 9, 16, 25];

    numbers.forEach( funcForEach );

    function funcForEach ( value, index, array ) {
      console.log( value * 2 );
    }
    /* output:
    - 90
    - 8
    - 18
    - 32
    - 50
    */

    /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */
    // - while - loops through a block of code while a specified condition is true
    // while (condition) { code block to be executed}
    let i = 0;
    while ( i < 10 ) {
      console.log( i );
      i++;
    }

    /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */
    // - do/while - also loops through a block of code while a specified condition is true
    // do { code block to be executed} while (condition);

    i = 0;
    do {
      console.log( i );
      i++;
    }
    while ( i < 10 );

    /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */
    {
      const cars = [ "BMW", "Volvo", "Saab", "Ford" ];
      let i = 0;

      for ( ; cars[ i ]; ) {
        console.log( cars[ i ] );
        i++;
      }
      // ----------------
      i = 0;
      while ( cars[ i ] ) {
        console.log( cars[ i ] );
        i++;
      }
    }

    /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */
    // The For Of Loop : --> for (variable of iterable) { code block to be executed }
    // Iterating Over a string
    const name = "W3Schools";

    for ( const x of name ) {
      console.log( x );
    } // S c h 2x o l s

    // Iterating Over a array

    const letters = [ "a", "b", "c" ];

    for ( const x of letters ) {
      console.log( x ); // a b c
    }
    // Iterating Over a Set
    {
      const letters = new Set( [ "a", "b", "c" ] );

      for ( const x of letters ) {
        console.log( x );
      }
    }
    // Iterating Over a Set
    {
      const fruits = new Map( [
        [ "apples", 500 ],
        [ "bananas", 300 ],
        [ "oranges", 200 ]
      ] );

      for ( const x of fruits ) {
        console.log( x );  // (2) ['apples', 500] ...
      }
    }

  }
}
// Functions ▶▶
{
  // Function Definitions
  {
    /*_______________________________________________________________________
      Function Declarations-------------------------------------------------*/

    function myFunction ( a, b ) {
      return a * b;
    }
    console.log( myFunction( 2, 2 ) );                                      // 4

    /*_______________________________________________________________________
      Function Expressions--------------------------------------------------*/

    let x = function myFunction ( a, b ) {
      return a * b;
    };
    console.log( x( 2, 2 ) );                                               // 4

    /*_______________________________________________________________________
      The Function() Constructor--------------------------------------------*/

    const funcConstructor = new Function( "a", "b", "return a * b" );

    let a = funcConstructor( 4, 7 );
    let b = funcConstructor( 5, 2 );

    console.log( a );                                                       // 28
    console.log( b );                                                       // 10

    /*_______________________________________________________________________
      Function Hoisting-----------------------------------------------------*/

    console.log( myFuncHoisting( 5 ) );                                     // 25

    function myFuncHoisting ( y ) {
      return y * y;
    }

    /*_______________________________________________________________________
      Self-Invoking Functions-----------------------------------------------*/

    ( function () {
      console.log( "Hello! I called myself" );                               // Hello! I called myself
    } )();

    /*_______________________________________________________________________
      Functions Can Be Used as Values---------------------------------------*/

    function funcAsValue ( a, b ) {
      return a * b;
    }

    let m = funcAsValue( 4, 3 ) * 2;
    console.log( m );                                                        // 24

    /*_______________________________________________________________________
      Functions are Objects-------------------------------------------------*/

    function funcObj ( a, b ) {
      return arguments.length;
    }
    // A function defined as the property of an object, is called a method to the object.
    // A function designed to create new objects, is called an object constructor.
    console.log( funcObj( 5, 7 ) );                                          // 2
    console.log( funcObj.toString() );                                       // function funcObj ( a, b ) {return arguments.length;}

    /*_______________________________________________________________________
      Arrow Functions-------------------------------------------------------*/

    // ES5
    var arrow1 = function ( x, y ) {
      return x * y;
    };

    // ES6
    const arrow2 = ( x, y ) => x * y;

    const arrow3 = ( x, y ) => { return x * y; };
  }
  // Function Parameters
  {
    /*_______________________________________________________________________
      Default Parameters----------------------------------------------------*/

    function myFunction ( x, y = 2 ) {
      /* or:
      2:  if ( y === undefined ) {y = 2;}

      3:  y = y || 2;
      */
      return x * y;
    }
    console.log( myFunction( 3 ) );                                           // 6
    /*_______________________________________________________________________
      rest parameters-------------------------------------------------------*/

    function calc ( ...num ) {
      console.log( num );                                // (3) [10, 20, 70]
      return num.reduce( ( acc, cur ) => acc + cur );
    }

    console.log( calc( 10, 20, 70 ) );                   // 100
    // .................................................................

    function calc ( ...num ) {

      let result = 0;

      for ( let i = 0; i < num.length; i++ ) {
        result += num[ i ];
      }
      console.log( Math.max( ...arguments ) );           // 70
      console.log( result );                             // 100
    }

    calc( 10, 20, 70 );



    /*_______________________________________________________________________
      The Arguments Object---------------------------------------------------*/

    x = findMax( 1, 123, 500, 115, 44, 88 );

    function findMax () {

      let max = -Infinity;
      for ( let i = 0; i < arguments.length; i++ ) {
        if ( arguments[ i ] > max ) {
          max = arguments[ i ];
        }
      }
      return max;
      // or
      return Math.max( ...arguments );
    }
    console.log( x );                                                          // 500
  }
  // Anonymous Function And Practice
  {
    function calc ( num1, num2 ) {
      return num1 + num2;
    }
    console.log( calc( 10, 20 ) );                         // 30

    // ⤵ ⤵ ⤵ ⤵ ⤵ can declare func before create
    console.log( calc( 10, 20 ) );                         // 30
    function calc ( num1, num2 ) {
      return num1 + num2;
    }

    // ⤵ ⤵ ⤵ ⤵ ⤵ can access the func by variable but can't declare func before create

    let calculator = function ( num1, num2 ) {
      return num1 + num2;
    };
    console.log( calculator( 10, 20 ) );                   // 30

    // error
    /*
    let calculator = function elzero ( num1, num2 ) {
      return num1 + num2;
    };
    console.log( elzero( 10, 20 ) );         error
    */
  }
  // – Return Nested Function
  {
    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ EXAMPLE 1 ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳
    function sayMessage ( fName, lName ) {
      let message = `Hello`;

      // we crate NESTED func for update variable to concat message with arguments in the variable
      function concatMsg () {
        message = `${ message } ${ fName } ${ lName }`;
      }
      concatMsg();

      return message;                                   // return message variable updated
    }
    console.log( sayMessage( "Osama", "Sami" ) );       // Hello Osama Sami

    //  ⤵ ⤵ ⤵ ⤵ ⤵  2
    function sayMessage ( fName, lName ) {
      let message = `Hello`;

      // nested function will return values without update variable
      function concatMsg () {
        return `${ message } ${ fName } ${ lName }`;
      }
      // return the nested function as a value
      return concatMsg();
    }
    console.log( sayMessage( "Osama", "Sami" ) );       // Hello Osama Sami


    //  ⤵ ⤵ ⤵ ⤵ ⤵  3
    function sayMessage ( fName, lName ) {
      let message = `Hello`;

      // nested function will return values without update variable
      function concatMsg () {

        // will return first name and second name beside each others
        function getFullName () {
          return `${ fName } ${ lName }`;
        }

        // will return variable message and function"getFullName" beside each others
        return `${ message } ${ getFullName() }`;
      }

      // return the nested function as a value
      return concatMsg();
    }

    console.log( sayMessage( "Osama", "Sami" ) );       // Hello Osama Sami

  }
  // Function call() Method
  {
    /*_______________________________________________________________________
      call() Method 1-------------------------------------------------------*/

    const person = {
      fullName: function () {
        return this.firstName + " " + this.lastName;
      }
    };
    const person1 = {
      firstName: "John",
      lastName: "Doe"
    };
    const person2 = {
      firstName: "Mary",
      lastName: "Doe"
    };

    // This will return "John Doe":
    console.log( person.fullName.call( person1 ) );                          // John Doe
    console.log( person.fullName.call( person2 ) );                          // Mary Doe

    /*_______________________________________________________________________
      The Arguments Object---------------------------------------------------*/
    const personB = {
      fullName: function ( city, country ) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
      }
    };

    const personA = {
      firstName: "John",
      lastName: "Doe"
    };

    console.log( personB.fullName.call( personA, "Oslo", "Norway" ) );     // John Doe,Oslo,Norway
  }
  // Function Apply()
  {
    /*
    The call() method takes arguments separately.
    The apply() method takes arguments as an array.
     */
    /*_______________________________________________________________________
      apply() Method 1-------------------------------------------------------*/

    const person = {
      fullName: function () {
        return this.firstName + " " + this.lastName;
      }
    };
    const person1 = {
      firstName: "John",
      lastName: "Doe"
    };
    const person2 = {
      firstName: "Mary",
      lastName: "Doe"
    };


    console.log( person.fullName.apply( person1 ) );                          // John Doe
    console.log( person.fullName.apply( person2 ) );                          // Mary Doe
    /*_______________________________________________________________________
      The Arguments Object---------------------------------------------------*/
    const personB = {
      fullName: function ( city, country ) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
      }
    };

    const personA = {
      firstName: "John",
      lastName: "Doe"
    };

    console.log( personB.fullName.apply( personA, [ "Oslo", "Norway" ] ) );     // John Doe,Oslo,Norway

    Math.max( 1, 2, 3 );                                                        // Will return 3
    Math.max.apply( null, [ 1, 2, 3 ] );                                        // Will also return 3
    Math.max.apply( Math, [ 1, 2, 3 ] );                                        // Will also return 3
    Math.max.apply( " ", [ 1, 2, 3 ] );                                         // Will also return 3
    Math.max.apply( 0, [ 1, 2, 3 ] );                                           // Will also return 3
  }
  // Function A Counter Dilemma and Closures
  {
    // Initiate counter
    let counter = 0;

    // Function to increment counter
    function add () {
      counter += 1;
    }

    // Call add() 3 times
    add();
    add();
    add();

    // The counter should now be 3
    /*_______________________________________________________________________
      ----------------------------------------------------------------------*/
    // Initiate counter
    let counter = 0;

    // Function to increment counter
    function add () {
      let counter = 0;
      counter += 1;
    }

    // Call add() 3 times
    add();
    add();
    add();

    //The counter should now be 3. But it is 0

    /*_______________________________________________________________________
      ----------------------------------------------------------------------*/

    // Function to increment counter
    function add () {
      let counter = 0;
      counter += 1;
      return counter;
    }

    // Call add() 3 times
    add();
    add();
    add();

    //The counter should now be 3. But it is 1.

    /*_______________________________________________________________________
    JavaScript Closures-----------------------------------------------------*/
    // Function A Counter Dilemma
    const add = ( function () {
      let counter = 0;
      return function () { counter += 1; return counter; };
    } )();

    console.log( add() );                     // 1
    console.log( add() );                     // 2
    console.log( add() );                     // 3

    // the counter is now 3
  }
  // function Example  Ultimate Practice
  {
    function showInfo ( us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk ) {
      document.write( `<div>` );
      document.write( `<h2>Welcome, ${ us }</h2>` );
      document.write( `<p>Age: ${ ag }</p>` );
      document.write( `<p>Hour Rate: $${ rt }</p>` );
      if ( show === "Yes" ) {
        if ( sk.length > 0 ) {
          document.write( `<p>Skills: ${ sk.join( " | " ) }</p>` );
        } else {
          document.write( `<p>Skills: No Skills</p>` );
        }
      } else {
        document.write( `<p>Skills Is Hidden</p>` );
      }
      document.write( `</div>` );
    }

    showInfo( "Osama", 38, 20, "No", "Html", "CSS" );
  }
  //  Scope – Global And Local
  {
    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ EXAMPLE 1 ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳

    var a = 1;
    let b = 2;

    function showText () {
      console.log( `function from local ${ a }` );       // function from local 1 it will like as inherit from global
      console.log( `function from local ${ b }` );       // function from local 2
    }


    console.log( `from global ${ a }` );       // from global 1
    console.log( `from global ${ b }` );       // from global 2

    showText(); /*- function from local 1
                  - function from local 2
                */


    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ EXAMPLE 2 ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳

    var a = 1;
    let b = 2;

    function showText () {
      var a = 10;
      let b = 20;
      console.log( `function from local ${ a }` );       // function from local 10
      console.log( `function from local ${ b }` );       // function from local 20
    }


    console.log( `from global ${ a }` );       // from global 1
    console.log( `from global ${ b }` );       // from global 2

    showText(); /* - function from local 10
                   - function from local 20
                */

    //  ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ EXAMPLE 3 ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳

    function showText () {
      var a = 10;
      let b = 20;
      console.log( `function from local ${ a }` );       // function from local 10
      console.log( `function from local ${ b }` );       // function from local 20
    }


    console.log( `from global ${ a }` );       // error because not found var in global
    console.log( `from global ${ b }` );       // error because not found var in global

    showText(); /* - function from local 10
                   - function from local 20
                */

  }
  //  Block Scope [If, Switch, For]
  {
    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ EXAMPLE 1 ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳
    var x = 10;

    if ( true ) {
      var x = 50;            // with var the variable is update
    }

    console.log( x );        // 50

    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ EXAMPLE 2 ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳
    var x = 10;

    if ( true ) {
      let x = 50;            // with let will done scoping
    }

    console.log( x );        // 10

    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ EXAMPLE 3 ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳
    var x = 10;

    if ( true ) {
      let x = 50;
      console.log( `from if block ${ x }` );
    }

    console.log( `from Global ${ x }` );
    /* Output
        - from if block 50
        - from Global 10
    */

    // ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵
    var x = 10;

    if ( true ) {
      console.log( `from if block ${ x }` );      // ERROR
      let x = 50;                                 // error
    }

    console.log( `from Global ${ x }` );          // ERROR

    // ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵
    var x = 10;

    if ( true ) {
      console.log( `from if block ${ x }` );
    }

    console.log( `from Global ${ x }` );
    /* Output
        - from if block 10
        - from Global 10
    */


  }
  //  Scope – Lexical (Static)
  {
    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ EXAMPLE 1 ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳
    function parent () {
      let a = 10;

      function child () {
        console.log( a );
      }
      child();
    }
    parent();                      // 10

    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ EXAMPLE 2 ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳
    function parent () {
      let a = 10;

      function child () {
        let a = 20;
        console.log( a );
      }
      child();
    }
    parent();                      // 20

    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ EXAMPLE 3 ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳
    let a = 10;

    function parent () {

      function child () {
        console.log( a );
      }
      child();
    }
    parent();                          // 10

    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ EXAMPLE 4 ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳
    function parent () {
      let a = 10;

      function child () {
        console.log( a );
        // console.log( `From Child ${ b }` ); // error because declare in this scope or parent scope

        function grand () {
          let b = 100;
          console.log( `From Grand ${ a }` );
          console.log( `From Grand ${ b }` );
        }
        grand();
      }
      child();
    }
    parent();      /* Output
                - 10
                - From Grand 10
                - From Grand 100
               */



  }

}
// Higher Order Functions ▶▶
{
  /*
  #071 - Map
  --- is a function that accepts functions as parameters and/or returns a function.
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.
  */
  {
    /*
    ⇳⇳⇳⇳ EXAMPLE: Anonymous Function ⇳⇳⇳⇳
    - will add all element to self for done new result element*2
    */
    /* ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵
      the idea with loop
    */
    let myNums = [ 1, 2, 3 ];
    let newArray = [];

    for ( let i = 0; i < myNums.length; i++ ) {
      newArray.push( myNums[ i ] + myNums[ i ] );
    }

    console.log( newArray );      // (6) [2, 4, 6]

    /* ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵
      Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
    */

    let addSelf = myNums.map( function ( element, index, array ) {
      return element + element;
    }, 10 );

    console.log( addSelf );      // (6) [2, 4, 6]

    /* ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵
      convert to Arrow function
    */
    let addSelf = myNums.map( ( element ) => element + element );

    console.log( addSelf );      // (6) [2, 4, 6]


    /* ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵
      About Syntax Map
    */

    let addSelf = myNums.map( function ( element, index, array ) {
      console.log( ` current Element ---> ${ element }` ); // The current element being processed in the array.
      console.log( ` current Index ---> ${ index }` );     // The index of the current element being processed in the array.
      console.log( ` Array ---> ${ array }` );             // The Current Array
      console.log( ` This ---> ${ this }` );
      console.log( `***********` );
    }, 10 );

    /* Output
      current Element ---> 1
      current Index ---> 0
      Array ---> 1,2,3
      This ---> 10
    ***********
      current Element ---> 2
      current Index ---> 1
      Array ---> 1,2,3
      This ---> 10
    ***********
      current Element ---> 3
      current Index ---> 2
      Array ---> 1,2,3
      This ---> 10
    ***********
    */

    /*   ⇳⇳⇳⇳ EXAMPLE: Named Function ⇳⇳⇳⇳ */
    function addition ( ele ) {
      return ele + ele;
    }
    let add = myNums.map( addition );
    console.log( add );         // (3) [2, 4, 6]

    // advanced example
    const tripleTrouble = ( one, two, three ) => one.split( "" ).map( ( letter, index ) => letter + two[ index ] + three[ index ] ).join( "" );
    // or
    function tripleTrouble ( one, two, three ) {
      let arr = [];
      for ( let i = 0; i < one.length; i++ ) {
        arr.push( one[ i ], two[ i ], three[ i ] );
      }
      return arr.join( "" );
    }
    console.log( tripleTrouble( "aaa", "bbb", "ccc" ) ); // abcabcabc
  }
  /*
  #072 - Map Practice
  */
  {
    // ⇳⇳⇳⇳ EXAMPLE: Swap Cases ⇳⇳⇳⇳

    let swappingCases = " elZERo";

    let sw = swappingCases
      .split( "" )
      .map( function ( ele ) {     //convert to array before map
        return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
      } )
      .join( "" );                   // reconvert to string

    console.log( sw ); //  ELzerO

    // ⤵ ⤵ ⤵ ⤵ to arrow function
    let swappingCases = " elZERo";

    let sw = swappingCases
      .split( "" )
      .map( ( a ) => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase() )
      .join( "" );

    console.log( sw ); //  ELzerO

    // ⇳⇳⇳⇳ EXAMPLE: Inverted Numbers ⇳⇳⇳⇳

    let invertedNumbers = [ 1, -10, -20, 15, 100, -30 ];

    let inv = invertedNumbers.map( function ( ele ) {
      return -ele;
    } );

    console.log( inv ); // (6) [-1, 10, 20, -15, -100, 30]

    // ⇳⇳⇳⇳ EXAMPLE: Ignore Boolean Value ⇳⇳⇳⇳

    let ignoreNumberers = " Elz123er4o";
    let ign = ignoreNumberers
      .split( "" )
      .map( function ( ele ) {
        return isNaN( parseInt( ele ) ) ? ele : "";
      } )
      .join( "" );

    console.log( ign );

    // ===============================================================

    function symmetricPoint ( p, q ) {
      return p.map( ( a, i ) => q[ i ] * 2 - a );
    }

    console.log( symmetricPoint( [ 2, 6 ], [ -2, -6 ] ) ); // (2) [-6, -18]
  }
  /*
  #073 – Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.
  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  */
  {
    /*⇳⇳⇳⇳ EXAMPLE 1:  ⇳⇳⇳⇳
      Get Even Numbers Only
    */
    let numbers = [ 11, 20, 2, 5, 17, 10 ];

    let addFilter = numbers.filter( function ( ele ) {
      return ele % 2 === 0;   // return Even Numbers Only
    } );

    console.log( addFilter ); // (6) [22, 40, 4, 10, 34, 20]

    /*⇳⇳⇳⇳ EXAMPLE 2:  ⇳⇳⇳⇳
    Get Friends With Name Starts With A
    */

    let friends = [ "Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa" ];

    let filterFriends = friends.filter( function ( ele ) {
      return ele.startsWith( "A" );
    } );
    console.log( filterFriends );    //(3) ['Ahmed', 'Asmaa', 'Amgad']

    /*⇳⇳⇳⇳ EXAMPLE 3:  ⇳⇳⇳⇳*/
    function firstNonConsecutive ( array ) {
      x = array.filter( ( e, i ) => e - array[ i - 1 ] !== 1 )[ 1 ];
      return x === undefined ? null : x;
    }
    console.log( firstNonConsecutive( [ 1, 2, 3, 4, 6, 7, 8 ] ) ); // 6'

    /*⇳⇳⇳⇳ EXAMPLE 4:  ⇳⇳⇳⇳*/
    function removeEveryOther ( arr ) {
      return arr.filter( ( elem, index ) => index % 2 === 0
      );
    }
    console.log( removeEveryOther( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ) ); // (5) [1, 3, 5, 7, 9]

    let ssss = array => array.filter( ( item, index ) => array.indexOf( item ) === index ).sort();
    console.log( ssss( [ 1, 1, 3, 4, 5, 5, 8, 2 ] ) ); // (6) [1, 2, 3, 4, 5, 8]

    /*
    #074 – Filter Practice
      - Filter Longest Word By Number
    */
    /*⇳⇳⇳⇳ EXAMPLE 1:  ⇳⇳⇳⇳
      Filter Word More Than 4 Characters
    */
    let sentence = "I Love Foood Code Too Playing Much";

    let smallWords = sentence
      .split( " " )
      .filter( function ( ele ) { return ele.length <= 4; } )
      .join( " " );

    console.log( smallWords );  // I Love Code Too Much

    /*⇳⇳⇳⇳ EXAMPLE 2:  ⇳⇳⇳⇳
      Filter Strings + Multiply
    */
    let mix = "A13BS2ZX";

    let mixedContent = mix
      .split( "" )
      .filter( function ( ele ) {
        return !isNaN( parseInt( ele ) );
      } )
      .join( "" );
    console.log( mixedContent );    // 132

    /* ⤵ ⤵ ⤵ ⤵ ⤵ ⤵
      add map for Multiply
    */
    let mixedContent = mix
      .split( "" )
      .filter( function ( ele ) {
        return !isNaN( parseInt( ele ) );
      } ).map( function ( ele ) {
        return ele * ele;
      } )
      .join( "" );
    console.log( mixedContent );    // 194

    // -------------------------------
    let myData = [ 1, 1, 1, 2, 3, "A" ];

    console.log( myData.filter( ( item, index ) => myData.indexOf( item ) === index ) );
  }
  /*
  #075 – Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.
  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  */
  {
    /*⇳⇳⇳⇳ EXAMPLE ⇳⇳⇳⇳*/

    let nums = [ 10, 20, 15, 30 ];

    /* with [ OUT ] initialValue ⤵ ⤵ ⤵ ⤵ */

    let add1 = nums.reduce( function ( acc, current, index, arr ) {
      console.log( `Acc     =>> ${ acc }` );           // "in first loop"--> 10          // "in second loop"--> 30          // "in third loop"--> 45
      console.log( `current =>> ${ current }` );       // "in first loop"--> 20          // "in second loop"--> 15          // "in third loop"--> 30
      console.log( `current index   =>> ${ index }` ); // "in first loop"--> 1           // "in second loop"--> 2           // "in third loop"--> 3
      console.log( `array   =>> ${ arr }` );           // "in first loop"--> 10,20,15,30 // "in second loop"--> 10,20,15,30 // "in third loop"--> 10,20,15,30
      console.log( acc + current );                    // "in first loop"--> 30          // "in second loop"--> 45          // "in third loop"--> 75
      console.log( ` ================` );
      return acc + current;
    } );

    console.log( add1 );                          // 75

    /* with initialValue = 5 ⤵ ⤵ ⤵ ⤵ */

    let add2 = nums.reduce( function ( acc, current, index, arr ) {
      console.log( `Acc     =>> ${ acc }` );           // "in first loop"--> 5           // "in second loop"--> 15          // "in third loop"--> 35          // "in ford loop"--> 50
      console.log( `current =>> ${ current }` );       // "in first loop"--> 10          // "in second loop"--> 20          // "in third loop"--> 15          // "in ford loop"--> 30
      console.log( `current index   =>> ${ index }` ); // "in first loop"--> 0           // "in second loop"--> 1           // "in third loop"--> 2           // "in ford loop"--> 3
      console.log( `array   =>> ${ arr }` );           // "in first loop"--> 10,20,15,30 // "in second loop"--> 10,20,15,30 // "in third loop"--> 10,20,15,30 // "in ford loop"--> 10,20,15,30
      console.log( acc + current );                    // "in first loop"--> 15          // "in second loop"--> 35          // "in third loop"--> 50          // "in ford loop"--> 80
      console.log( ` ================` );
      return acc + current;
    }, 5 );

    console.log( add2 );                               // 80
  }
  /*
  #076 Reduce Practice
  */
  {
    /*⇳⇳⇳⇳ EXAMPLE: Longest Word ⇳⇳⇳⇳*/

    let theBiggest = [ "Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two" ];

    let check = theBiggest.reduce( function ( acc, current ) {
      return acc.length > current.length ? acc : current;
    } );

    console.log( check );     // Propaganda_Two

    /*⇳⇳⇳⇳ EXAMPLE: Remove Characters + Use Reduce ⇳⇳⇳⇳*/

    let removeChars = [ "E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O" ];

    let finalString = removeChars.filter( function ( ele ) {
      return !ele.startsWith( "@" );          // (6) ['E', 'L', 'Z', 'E', 'R', 'O']
    } ).reduce( function ( acc, current ) {
      return `${ acc }${ current }`;          // ELZERO  # we can do it with join()
    } );

    console.log( finalString );

  }
  /*
  #077 – ForEach & Practice
  --- method executes a provided function once for each array element.
  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)*/
  {
    /*
  <!--------IN HTML ------->
  <ul>
    <li class="active">One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
  <div class="content">
    <div> Div One </div>
    <div> Div Two </div>
    <div> Div Three </div>
  </div>

  ⇳⇳⇳⇳ EXAMPLE: add class to li  and remove author classes and will hide all divs when click on li ⇳⇳⇳⇳*/

    let allLis = document.querySelectorAll( "ul li" ); // NodeList(3) [li.active, li, li]
    let allDivs = document.querySelectorAll( ".content div" );

    /*
      we will create loop by forEach for add class to element when i click on this element
      ⤵ ⤵ ⤵ ⤵ */
    allLis.forEach( function ( ele ) {
      ele.onclick = function () {
        // console.log( this );        // when i click on li in page will print this li in console
        this.classList.add( "active" );// when i click on li in page will add class"active" for this li
      };
    } );

    /*
      we will create nested loop by forEach for remove all class"active" in element before i add class to element when i click on this element
      ⤵ ⤵ ⤵ ⤵ */
    allLis.forEach( function ( ele ) {
      ele.onclick = function () {
        allLis.forEach( function ( ele ) {
          ele.classList.remove( "active" ); // remove active class from all element li
        } );
        this.classList.add( "active" );  // add active class to this clicked
        allDivs.forEach( function ( ele ) {
          ele.style.display = "none";    // Hide All Divs
        } );
      };
    } );
  }

  // #078 – Higher Order Functions – Challenge
  {

    let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

    let solution = myString
      .split( "" )
      .filter( ( ele ) => isNaN( parseInt( ele ) ) && !ele.includes( "," ) )
      .map( ( ele ) => ele.includes( "_" ) ? " " : ele )
      .reduce( ( acc, current ) => `${ acc }${ current }` )
      .slice( isNaN( myString ), -true );

    console.log( solution ); // Elzero Web School
  }
  //  advanced
  {
    function points ( games ) {
      let arr = [];
      for ( let i = 0; i < games.length; i++ ) {
        games[ i ][ 0 ] > games[ i ][ 2 ]
          ? arr.push( "3" )
          : games[ i ][ 0 ] < games[ i ][ 2 ]
            ? arr.push( "0" )
            : arr.push( "1" );
      }
      return arr.map( e => +e ).reduce( ( acc, cur ) => acc + cur );
    }
    //  or
    const points = games => games.reduce( ( output, current ) => {
      return output += current[ 0 ] > current[ 2 ] ? 3 : current[ 0 ] === current[ 2 ] ? 1 : 0;
    }, 0 );

    console.log( points( [ '1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4' ] ) ); // 30

  }
}
//  AND , OR , XOR
{
  function logicalCalc1 ( array, op ) {
    switch ( op ) {
      case "AND":
        return array.reduce( ( acc, cur ) => acc * cur ) == 1;

      case "OR":
        return array.includes( true );

      case "XOR":
        return array.reduce( ( acc, cur ) => acc != cur );

    }
  }
  console.log( logicalCalc1( [ true, true, true, false ], "AND" ) );    // false
  console.log( logicalCalc1( [ true, true, true, false ], "OR" ) );     // true
  console.log( logicalCalc1( [ true, true, true, false ], "XOR" ) );    // true

  // or ------------------------------------------------------------------------

  var ops = {
    'AND': ( a, b ) => a && b,
    'OR': ( a, b ) => a || b,
    'XOR': ( a, b ) => a !== b
  };


  function logicalCalc2 ( array, op ) {
    return array.reduce( ops[ op ] );
  }

  console.log( logicalCalc2( [ true, true, true, false ], "AND" ) );    // false
  console.log( logicalCalc2( [ true, true, true, false ], "OR" ) );     // true
  console.log( logicalCalc2( [ true, true, true, false ], "XOR" ) );    // true

  // or ---------------------------------------------------------------------------

  function logicalCalc3 ( array, op ) {
    switch ( op ) {
      case 'AND': return array.every( Boolean );
      case 'OR': return array.some( Boolean );
      case 'XOR': return Boolean( array.filter( Boolean ).length & 1 );
    }
  }
  console.log( logicalCalc3( [ true, true, true, false ], "AND" ) );    // false
  console.log( logicalCalc3( [ true, true, true, false ], "OR" ) );     // true
  console.log( logicalCalc3( [ true, true, true, false ], "XOR" ) );    // true
}
// object
{
  // Intro object
  {
    console.log( typeof window );                                 // object      ..> main object
    console.log( typeof window.location );                        // object      ..> nested object
    console.log( typeof window.location.assign );                 // function    ..> task in  object
    // console.log( window.location.assign( "https://google.com" ) ); // function    ..> task go to google
  }
  // Create a object
  {
    // 1- Create a single object, using an object literal.
    const person = {
      firstName: "John",
      lastName: "Doe",
      age: 50,
      eyeColor: "blue",
      sayHello: function () {
        return `Hello`;
      },
    };

    // or -----------------------------
    const personA = {};
    personA.firstName = "John";
    personA.lastName = "Doe";
    personA.age = 50;
    personA.eyeColor = "blue";
    personA.sayHello = function () {
      return `Hello`;
    };

    /* ====================================================================================== */

    // 2- Using the JavaScript Keyword =>  new Object()

    let y = "lastName";

    const personNew = new Object();

    /* -------------------------------------------------------------------------------------- */

    personNew.firstName = "John";
    personNew[ y ] = "Doe";
    personNew[ "age" ] = 50;
    personNew.eyeColor = "blue";

    // JavaScript Objects are Mutable
    console.log( personNew );                     // {firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue'}
    console.log( personNew.firstName );           // John
    console.log( personNew[ "firstName" ] );      // John
    console.log( personNew.lastName );            // Doe
    console.log( personNew[ y ] );                // Doe

    const z = personNew;
    console.log( z );                             // {firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue'}
    console.log( z.age );                         // 50  --- Will change both z.age and person.age
    console.log( z.firstName );                   // John
    console.log( z[ "firstName" ] );              // John
    console.log( z.lastName );                    // Doe
    console.log( z[ y ] );                        // Doe

    // or ---------------------------------------------------

    let user = {

      // 1 - properties
      name: "Sami",
      age: 38,
      skills: [ "HTML", "CSS", "JS" ],
      cars: [
        { name: "Ford", models: [ "Fiesta", "Focus", "Mustang" ] },
        { name: "BMW", models: [ "320", "X3", "X5" ] },
        { name: "Fiat", models: [ "500", "Panda" ] }
      ],
      available: false,

      // 2 - nested object
      addresses: {
        ksa: "Riyadh",

        egypt: {              // nested object
          one: "Cairo",
          two: "Giza",
        },
      },

      // 3 - method
      checkAv: () => this.available === true ? `Free For Work` : `Not Free`,
      // note : we use "user.available" , because when use only "available" the function will search in global scop not enter object

    };

    console.log( user.name );                                // Sami
    console.log( user.age );                                 // 38

    console.log( user.skills );                              // (3) ['HTML', 'CSS', 'JS']
    console.log( user.skills.join( " | " ) );                // HTML | CSS | JS
    console.log( user.skills[ 2 ] );                         // JS

    console.log( user.addresses );                           // {ksa: 'Riyadh', egypt: {…}}
    console.log( user.addresses.ksa );                       // Riyadh
    console.log( user.addresses.egypt );                     // {one: 'Cairo', two: 'Giza'}
    console.log( user.addresses.egypt.one );                 // Cairo
    console.log( user.addresses.egypt.two );                 // Giza

    console.log( user[ "addresses" ] );                      // {ksa: 'Riyadh', egypt: {…}}
    console.log( user[ "addresses" ][ "ksa" ] );             // Riyadh
    console.log( user[ "addresses" ][ "egypt" ] );           // {one: 'Cairo', two: 'Giza'}
    console.log( user[ "addresses" ][ "egypt" ][ "one" ] );  // Cairo
    console.log( user[ "addresses" ][ "egypt" ][ "two" ] );  // Giza

    console.log( user.checkAv() );                           // Not Free
  }
  // loop on object and delete property
  {
    const person = {
      firstName: "John",
      lastName: "Doe",
      age: 50,
      eyeColor: "blue",
      cars: [
        { name: "Ford", models: [ "Fiesta", "Focus", "Mustang" ] },
        { name: "BMW", models: [ "320", "X3", "X5" ] },
        { name: "Fiat", models: [ "500", "Panda" ] }
      ],
      sayHello: function () {
        return `Hello`;
      },

    };

    // -----------------------------------------------------

    // JavaScript for...in Loop
    for ( const x in person ) {
      console.log( person[ x ] );
    }
    /* output
      - John
      - Doe
      - 50
      - blue
    */

    // -----------------------------------------------------

    for ( let i in person.cars ) {
      console.log( "#" + person.cars[ i ].name );

      for ( let j in person.cars[ i ].models ) {
        console.log( "--" + person.cars[ i ].models[ j ] );
      }
    }

    // -----------------------------------------------------

    // delete property
    delete person.name;
    delete person.age;
    console.log( person.name );                                // undefined
    console.log( person.age );                                 // undefined
  }
  // display JavaScript objects
  {
    /*
    Some common solutions to display JavaScript objects are:
      - Displaying the Object Properties by name
      - Displaying the Object Properties in a Loop
      - Displaying the Object using Object.values()
      - Displaying the Object using JSON.stringify()
   */

    // 1 - Displaying the Object Properties by name
    const obj = {
      name: "John",
      age: 30,
      city: "New York"
    };
    document.getElementById( "demo" ).innerHTML = obj;      // [object Object]
    document.getElementById( "demo" ).innerHTML = obj.name + ", " + obj.age + ", " + obj.city;

    // 2 - Displaying the Object Properties in a Loop

    let txt = "";
    for ( let x in obj ) {
      txt += obj[ x ] + " ";                               /* obj.x will not work (Because x is a variable). */
    };

    document.getElementById( "demo" ).innerHTML = txt;              // John 30 New York

    // 3 - Displaying the Object using Object.values()

    const arrKays = Object.keys( obj );
    const arrValues = Object.values( obj );

    console.log( arrKays );                                         // (3) ['name', 'age', 'city']
    console.log( arrValues );                                       // (3) ['John', 30, 'New York']

    document.getElementById( "demo" ).innerHTML = arrValues;

    // 4 - Displaying the Object using JSON.stringify()

    let myString = JSON.stringify( obj );

    console.log( myString );                                // {"name":"John","age":30,"city":"New York"}
    document.getElementById( "demo" ).innerHTML = myString;

  }
  //  Accessors (Getters and Setters)
  {
    // - Getter (The get Keyword)
    const personGetter = {
      firstName: "John",
      lastName: "Doe",

      // get full name by method
      fullNameA: function () {
        return this.firstName + " " + this.lastName;
      },

      // get full name by getter
      get fullNameB () {
        return this.firstName + " " + this.lastName;
      }
    };

    // Display data from the object using a method:
    console.log( personGetter.fullNameA() );        // John Doe

    // Display data from the object using a getter:
    console.log( personGetter.fullNameB );          // John Doe

    // -------------------------------------------------------------

    // - Setter (The set Keyword)
    const personSetter = {
      firstName: "John",
      lastName: "Doe",
      language: "",
      set lang ( lang ) {
        this.language = lang;
      }
    };

    // Set an object property using a setter:
    personSetter.lang = "en";

    // Display data from the object:
    console.log( personSetter.language );      // en
  }
  // Object.defineProperty()
  {
    // Syntax:   Object.defineProperty(object, property, {value : value})
    const objTest = {
      firstName: "John",
      lastName: "Doe",
      language: "EN"
    };

    // Change a property
    Object.defineProperty( objTest, "language", { value: "NO" } );
    console.log( objTest );                                 // {firstName: 'John', lastName: 'Doe', language: 'NO'}

    /* Changing Meta Data
      - writable : true      // Property value can be changed
      - enumerable : true    // Property can be enumerated
      - configurable : true  // Property can be reconfigured
    */

    // Listing All Properties
    console.log( Object.getOwnPropertyNames( objTest ) );  // (3) ['firstName', 'lastName', 'language']

    // Listing Enumerable Properties
    console.log( Object.keys( objTest ) );                // (3) ['firstName', 'lastName', 'language']

    // Listing Enumerable Properties but Property"language" can be not enumerated
    Object.defineProperty( objTest, "language", { enumerable: false } );
    console.log( Object.keys( objTest ) );                // (2) ['firstName', 'lastName']

    // Adding a Property
    Object.defineProperty( objTest, "year", { value: "2008" } );
    console.log( objTest );                               // {firstName: 'John', lastName: 'Doe', language: 'NO', year: '2008'}

    // ----------------------------------------------------------------------------------------------------------------------------

    // creat object
    const obj = { counter: 0 };

    // Define getters and setters
    Object.defineProperty( obj, "reset", { get: function () { this.counter = 0; } } );

    Object.defineProperty( obj, "increment", { get: function () { this.counter++; } } );

    Object.defineProperty( obj, "decrement", { get: function () { this.counter--; } } );

    Object.defineProperty( obj, "add", { set: function ( value ) { this.counter += value; } } );

    Object.defineProperty( obj, "subtract", { set: function ( value ) { this.counter -= value; } } );

    console.log( obj );       // {counter: 0}

    obj.add = 5;
    console.log( obj );       // {counter: 5}

    obj.subtract = 3;
    console.log( obj );       // {counter: 2}

    obj.increment;
    console.log( obj );       // {counter: 3}

    obj.decrement;
    console.log( obj );       // {counter: 2}
  }
  // Object Constructors
  {
    function Person ( first, last, age, eye ) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eye;

      // Adding a Property to a Constructor
      this.nationality = "English";

      // Adding a Method to a Constructor
      this.name = function () {
        return this.firstName + " " + this.lastName;
      };

      this.changeName = function ( nam ) {
        this.lastName = nam;
      };
    }

    const myFather = new Person( "John", "Doe", 50, "blue" );
    const myMother = new Person( "Sally", "Rally", 48, "green" );

    console.log( myFather );               // Person {firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue'}

    // add property to constrictor by prototype
    Person.prototype.cars = "volvo";

    console.log( myMother.cars );          // volvo


    // add method to constrictor by prototype
    Person.prototype.nameOut = function () {
      return this.firstName + " " + this.lastName;
    };
    console.log( myMother.nameOut() );     // Sally Rally


    console.log( myFather );               // Person {firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue'}
    console.log( myMother );               // Person {firstName: 'Sally', lastName: 'Rally', age: 48, eyeColor: 'green'}

    console.log( myFather.nationality );   // English
    console.log( myFather.name() );        // John Doe

    myFather.changeName( "sami" );
    console.log( myFather );               // Person {firstName: 'sami', lastName: 'Doe', age: 50, eyeColor: 'blue', nationality: 'English', …}
  }
  // Iterables and next()
  {
    // Iterating Over a String
    for ( const x of "W3Schools" ) {
      console.log( x );                           // W ... 3 ... S .....
    }

    // Iterating Over a array
    for ( const x of [ "a", "b", "c" ] ) {
      console.log( x );                           // a ... b ... c
    }

    // -------------------------------------------------------------------

    // next()
    // Home Made Iterable
    function myNumbers () {
      let n = 0;
      return {
        next: function () {
          n += 10;
          return { value: n, done: false };
        }
      };
    }

    // Create Iterable

    const objStorage = myNumbers();
    console.log( objStorage );                 // {next: ƒ}

    console.log( objStorage.next() );          // {value: 10, done: false}
    console.log( objStorage.next() );          // {value: 20, done: false}
    console.log( objStorage.next() );          // {value: 30, done: false}
    console.log( objStorage.next() );          // {value: 40, done: false}

    console.log( objStorage.next().value );    // 50
    console.log( objStorage.next().value );    // 60
    console.log( objStorage.next().value );    // 70
    console.log( objStorage.next().value );    // 80

    // -------------------------------------------------------

    // Create an Object
    myNumbersA = {};

    // Make it Iterable;
    myNumbersA[ Symbol.iterator ] = function () {
      let n = 0;
      done = false;
      return {
        next () {
          n += 10;
          if ( n > 50 ) { done = true; }
          return { value: n, done: done };
        }
      };
    };
    console.log( myNumbersA[ Symbol.iterator ]() );     // {next: ƒ}

    for ( const num of myNumbersA ) {
      console.log( num );                               // 10 ... .. . . 50
    }
  }
  // Sets
  {
    /*
      Method
      - new Set()	Creates a new Set
      - add()	    Adds a new element to the Set
      - delete()	Removes an element from a Set
      - has()	    Returns true if a value exists
      - clear()  	Removes all elements from a Set
      - forEach()	Invokes a callback for each element
      - values()	Returns an Iterator with all the values in a Set
      - keys()  	Same as values()
      - entries()	Returns an Iterator with the [value,value] pairs from a Set

      Property
      - size	Returns the number elements in a Set
    */

    // Create a Set
    const letters = new Set( [ "a", "b" ] );
    console.log( letters );                      // Set(2) {'a', 'b'}

    // Add Values to the Set
    letters.add( "c" );
    console.log( letters );                      // Set(3) {'a', 'b', 'c'}

    // Create Variables
    const d = "d";
    letters.add( d );
    console.log( letters );                      // Set(4) {'a', 'b', 'c', 'd'}

    // forEach() Method --> List all entries
    letters.forEach( function ( value ) {
      console.log( value );                        // abcd
    } );

    // values() Method
    console.log( letters.values() );;           // SetIterator {'a', 'b', 'c', 'd'}

    // Now you can use the Iterator object to access the elements:
    // Create an Iterator
    const myIterator = letters.values();

    // List all Values
    for ( const entry of myIterator ) {
      console.log( entry );                   // a ||  b ||  c ||  d
    }

    // keys() Method ---- A Set has no keys.
    console.log( letters.keys() );           // SetIterator {'a', 'b', 'c', 'd'}

    // Create an Iterator
    const myIteratorK = letters.keys();

    // List all Entries
    for ( const entry of myIteratorK ) {
      console.log( entry );                  // a  ||  b  ||  c  ||  d
    }

    // The entries() Method ---> entries() returns [value,value] pairs instead of [key,value] pairs.
    // Create an Iterator
    const myIteratorE = letters.entries();

    // List all Entries
    for ( const entry of myIteratorE ) {
      console.log( entry );                 // (2) ['a', 'a'] \n (2) ['b', 'b'] \n (2) ['c', 'c'] \n (2) ['d', 'd']
    }
  }
  // Maps
  {
    /*
      Map Methods
        - Method	Description
        - new Map()	Creates a new Map object
        - set()   	Sets the value for a key in a Map
        - get()	    Gets the value for a key in a Map
        - clear()	  Removes all the elements from a Map
        - delete() 	Removes a Map element specified by a key
        - has()   	Returns true if a key exists in a Map
        - forEach()	Invokes a callback for each key/value pair in a Map
        - entries()	Returns an iterator object with the [key, value] pairs in a Map
        - keys()  	Returns an iterator object with the keys in a Map
        - values()	Returns an iterator object of the values in a Map
      Property	Description
        - size	Returns the number of Map elements
    */

    // Create a Map by new Map()
    const fruits = new Map( [
      [ "apples", 500 ],
      [ "bananas", 300 ],
    ] );
    console.log( fruits );                                   // Map(2) {'apples' => 500, 'bananas' => 300}

    // Map.set(key,Value)
    fruits.set( "oranges", 200 );
    console.log( fruits );                                   // Map(3) {'apples' => 500, 'bananas' => 300, 'oranges' => 200}

    // Map.get(key)
    console.log( fruits.get( "apples" ) );                   // 500

    // Map.size
    console.log( fruits.size );                              // 3

    // Map.has()
    console.log( fruits.has( "apples" ) );                   // true

    // Map.delete(key)
    fruits.delete( "apples" );
    console.log( fruits.size );                              // 2

    // Map.has()
    console.log( fruits.has( "apples" ) );                   // false

    // Map.clear()
    // fruits.clear();
    console.log( fruits.size );                              // will be 0
  }
  // JavaScript Objects vs Maps
  {
    /*
                 Object	                            Map
      Iterable	 Not directly iterable	            Directly iterable
      Size	     Do not have a size property 	      Have a size property
      Key Types	 Keys must be Strings (or Symbols)	Keys can be any datatype
      Key Order	 Keys are not well ordered	        Keys are ordered by insertion
      Defaults	 Have default keys	                Do not have default keys
    */

    const fruit = new Map( [
      [ "apples", 500 ],
      [ "bananas", 300 ],
      [ "oranges", 200 ]
    ] );

    // Map.forEach()
    // List all entries

    fruit.forEach( function ( v, k ) {
      console.log( k + ' = ' + v );          // apples = 500  ||  bananas = 300  ||  oranges = 200
    } );

    // Map.keys()
    // List all keys
    for ( const x of fruit.keys() ) {
      console.log( x );                     // apples  ||  bananas   ||  oranges
    }

    // Map.values()
    // Sum all values
    for ( const x of fruit.values() ) {
      console.log( x );                     // 500  ||  300   ||  200
    }

    // Map.entries()      --> The entries() method returns an iterator object with the [key,values] in a Map:
    // List all entries
    for ( const x of fruit.entries() ) {
      console.log( x );                    // (2) ['apples', 500]   ||   (2) ['bananas', 300]   ||   (2) ['oranges', 200]
    }

    // Objects as Keys
    // Create Objects
    const applesA = { name: 'Apples' };
    const bananasA = { name: 'Bananas' };
    const orangesA = { name: 'Oranges' };

    // Create a Map
    const fruitsA = new Map();

    // Add new Elements to the Map
    fruitsA.set( applesA, 500 );
    fruitsA.set( bananasA, 300 );
    fruitsA.set( orangesA, 200 );

    console.log( fruitsA );                // Map(3) {{…} => 500, {…} => 300, {…} => 200}
    console.log( fruitsA.get( applesA ) ); // 500
  }
  // this
  {
    let x1 = this;
    console.log( x1 );             // window

    // --------------------------------------------

    "use strict";
    let x2 = this;
    console.log( x2 );             // window

    // --------------------------------------------

    function myFunction1 () {
      return this;
    }
    console.log( myFunction1() );  // window

    // --------------------------------------------

    "use strict";
    function myFunction2 () {
      return this;
    }
    console.log( myFunction2() );  // undefined

    // --------------------------------------------

    {/* <button onclick="this.style.display='none'">Click to Remove Me!</button>; */ }

    // --------------------------------------------

    const person = {
      firstName: "John",
      lastName: "Doe",
      id: 5566,
      myFunction3: function () {
        return this.firstName + " " + this.lastName;;
      }
    };
    console.log( person.myFunction3() );       // John Doe

    // --------------------------------------------

    const person1 = {
      fullName: function () {
        return this.firstName + " " + this.lastName;
      }
    };
    const person2 = {
      firstName: "John",
      lastName: "Doe",
    };
    console.log( person1.fullName.call( person2 ) );;  // "John Doe"

    // -------------------
    console.log( this );                    // Window
    console.log( this === window );         // true

    myVar = 100;
    console.log( window.myVar );            // 100
    console.log( this.myVar );              // 100

    function sayHello () {
      console.log( this );
      return this;
    }
    sayHello();                              // Window
    console.log( sayHello() === window );    // true

    //  EXAMPLE:  ⤵ ⤵ ⤵ ⤵ ⤵ ⤵
    /* HTML
      <button id="cl">Click</button>
    */

    document.getElementById( "cl" ).onclick = function () {
      console.log( this );   // <button id="cl">Click</button>
    };

    /*   EXAMPLE: ⤵ ⤵ ⤵ ⤵ ⤵ ⤵
         - When a function is called as a method of an object,
         - its this is set to the object the method is called on. */
    let user = {
      age: 38,

      ageInDays: function () {
        console.log( this );         // this here is user=> {age: 38, ageInDays: ƒ}
        return this.age * 365;
      },

    };

    console.log( user.age );          // 38
    console.log( user.ageInDays() );  // 13870
  }
  // E5 Object Methods
  {
    // Create object with an existing object as prototype
    let user = { id: 20, name: "sami" };
    console.log( Object.create( user ) );                                 // {}[[Prototype]]: Object id: 30 name: "sami" property1: 42 property2: 30

    // Adding or changing an object property
    console.log( Object.defineProperty( user, "id", { value: 30 } ) );    // {id: 30, name: 'sami'}

    // Adding or changing object properties
    console.log( Object.defineProperties( user, { property1: { value: 42, writable: true }, property2: { value: 30 } } ) );    // {id: 30, name: 'sami', property1: 42, property2: 30}

    // Accessing Properties
    console.log( Object.getOwnPropertyDescriptor( user, "id" ) );        // {value: 30, writable: true, enumerable: true, configurable: true}

    // Returns all properties as an array
    console.log( Object.getOwnPropertyNames( user ) );                   // (3) ['id', 'name, 'property1', 'property2']

    // Accessing the prototype
    console.log( Object.getPrototypeOf( user ) );                        // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

    // Returns enumerable properties as an array
    console.log( Object.keys( user ) );                                  // (2) ['id', 'name']

    // Returns true if properties can be added to an object
    console.log( Object.isExtensible( user ) );                          // true

    // Prevents adding properties to an object
    console.log( Object.preventExtensions( user ) );                     // {id: 30, name: 'sami', property1: 42, property2: 30}

    // Returns true if properties can be added to an object
    console.log( Object.isExtensible( user ) );                          // false

    // Returns true if object is sealed
    console.log( Object.isSealed( user ) );                              // false

    // Prevents changes of object properties (not values)
    console.log( Object.seal( user ) );                                  // {id: 30, name: 'sami', property1: 42, property2: 30}

    // Returns true if object is sealed
    console.log( Object.isSealed( user ) );                              // true

    // Returns true if object is frozen
    console.log( Object.isFrozen( user ) );                              // false

    // Prevents any changes to an object
    console.log( Object.freeze( user ) );                                // {id: 30, name: 'sami', property1: 42, property2: 30}

    // Returns true if object is frozen
    console.log( Object.isFrozen( user ) );                              // true
  }
  //  Entries
  {
    // The Object.entries() method returns an array of the key/value pairs in an object:
    const person = {
      firstName: "John",
      lastName: "Doe",
      age: 50,
      eyeColor: "blue"
    };
    console.log( Object.entries( person ) );         // (4) [Array(2), Array(2), Array(2), Array(2)]

    // ---------------------

    // Object.entries() makes it simple to use objects in loops:

    const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };


    for ( let [ fruit, value ] of Object.entries( fruits ) ) {
      console.log( fruit + " => " + value );
    }
    /* output
        Bananas => 300
        Oranges => 200
        Apples => 500
    */

    // ------------------------

    // Object.entries() also makes it simple to convert objects to maps:

    const fruits1 = { Bananas: 300, Oranges: 200, Apples: 500 };

    const myMap = new Map( Object.entries( fruits1 ) );

    console.log( myMap );                           // Map(3) {'Bananas' => 300, 'Oranges' => 200, 'Apples' => 500}
    console.log( myMap.keys() );                    // MapIterator {'Bananas', 'Oranges', 'Apples'}
    console.log( myMap.values() );                  // MapIterator {300, 200, 500}
  }
  // Rest Properties
  {
    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
    console.log( x );                        // 1
    console.log( y );                        // 2
    console.log( z );                        // { a: 3, b: 4 }
  }
  // Object.create()
  {
    let user = {
      age: 20,
      doubleAge: function () {
        return this.age * 2;                     // this will access local value age in the object
      },
    };

    console.log( user );
    console.log( user.age );
    console.log( user.doubleAge() );

    // create object
    let obj = Object.create( {} );

    console.log( obj );                         // {}

    obj.a = 100;
    console.log( obj );                         // {a: 100}

    // create object as a prototype
    let copyOpj = Object.create( user );

    console.log( copyOpj );                     // {} => content in prototype
    console.log( copyOpj.age );                 // 20
    console.log( copyOpj.doubleAge() );         // 40

    // update last example
    let copyOpj1 = Object.create( user );

    copyOpj1.age = 30;

    console.log( copyOpj1 );                   // {age: 30}
    console.log( copyOpj1.age );               // 30
    console.log( copyOpj1.doubleAge() );       // 60
  }
  // - Create Object.assign()
  {

    let obj1 = {
      prop1: 1,
      meth1: function () {
        return this.prop1;
      },
    };

    let obj2 = {
      prop2: 2,
      meth2: function () {
        return this.prop2;
      },
    };

    let targetObject = {
      prop1: 100,
      prop3: 3,
    };

    let finalObject = Object.assign( targetObject, obj1, obj2 );
    console.log( finalObject );

    finalObject.prop1 = 200;
    finalObject.prop4 = 4;

    console.log( finalObject );

    let newObject = Object.assign( {}, obj1, { prop5: 5, prop6: 6 } );

    console.log( newObject );
  }
  // advanced example OBJECT
  {
    //  AND , OR , XOR
    {


      var ops = {
        'AND': ( a, b ) => a && b,
        'OR': ( a, b ) => a || b,
        'XOR': ( a, b ) => a !== b
      };


      function logicalCalc2 ( array, op ) {
        return array.reduce( ops[ op ] );
      }

      console.log( logicalCalc2( [ true, true, true, false ], "AND" ) );    // false
      console.log( logicalCalc2( [ true, true, true, false ], "OR" ) );     // true
      console.log( logicalCalc2( [ true, true, true, false ], "XOR" ) );    // true

    }
    // getPlanetName
    {
      function getPlanetName ( id ) {

        switch ( id ) {
          case 1:
            return 'Mercury';
          case 2:
            return 'Venus';
          case 3:
            return 'Earth';
          case 4:
            return 'Mars';
          case 5:
            return 'Jupiter';
          case 6:
            return 'Saturn';
          case 7:
            return 'Uranus';
          case 8:
            return 'Neptune';
        }
      }
      console.log( getPlanetName( 2 ) ); // 'Venus'
      console.log( getPlanetName( 5 ) ); // 'Jupiter'
      console.log( getPlanetName( 3 ) ); // 'Earth'
      // ⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬
      function getPlanetName ( id ) {
        return {
          1: 'Mercury',
          2: 'Venus',
          3: 'Earth',
          4: 'Mars',
          5: 'Jupiter',
          6: 'Saturn',
          7: 'Uranus',
          8: 'Neptune'
        }[ id ];
      }
    }
  }


}
// Date
{

  /*
    - new Date(year, month, day, hours, minutes, seconds, milliseconds)
    - Note: JavaScript counts months from 0 to 11:
      -- January = 0.
      -- December = 11.
    - One day (24 hours) is 86 400 000 milliseconds.
    - JavaScript Date Formats
      -- ISO Date   ==>	"2015-03-25" (The International Standard)
      -- Short Date ==> "03/25/2015"
      -- Long Date	 ==> "Mar 25 2015" or "25 Mar 2015"
   */
  console.log( new Date() );                               // Wed Dec 08 2021 19:18:43 GMT+0100 (Central European Standard Time)
  console.log( new Date( 2018, 11, 24, 10, 33, 30, 0 ) );  // Mon Dec 24 2018 10:33:30 GMT+0100 (Central European Standard Time)
  console.log( new Date( 2018, 15, 24, 10, 33, 30 ) );     // Wed Apr 24 2019 10:33:30 GMT+0200 (Central European Summer Time)
  console.log( new Date( 2019, 3, 24, 10, 33, 30 ) );      // Wed Apr 24 2019 10:33:30 GMT+0200 (Central European Summer Time)
  console.log( new Date( 2018, 5, 35, 10, 33, 30 ) );      // Thu Jul 05 2018 10:33:30 GMT+0200 (Central European Summer Time)
  console.log( new Date( 2018, 6, 5, 10, 33, 30 ) );       // Thu Jul 05 2018 10:33:30 GMT+0200 (Central European Summer Time)
  console.log( new Date( 2018 ) );                         // Thu Jan 01 1970 01:00:02 GMT+0100 (Central European Standard Time)
  console.log( new Date( 99, 11, 24 ) );                   // Fri Dec 24 1999 00:00:00 GMT+0100 (Central European Standard Time)
  console.log( new Date( 9, 11, 24 ) );                    // Fri Dec 24 1909 00:00:00 GMT+0100 (Central European Standard Time)
  console.log( new Date( "October 13, 2014 11:13:00" ) );  // Mon Oct 13 2014 11:13:00 GMT+0200 (Central European Summer Time)
  console.log( new Date( 0 ) );                            // Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)
  console.log( new Date( 100000000000 ) );                 // Sat Mar 03 1973 10:46:40 GMT+0100 (Central European Standard Time)
  console.log( new Date( -100000000000 ) );                // Mon Oct 31 1966 15:13:20 GMT+0100 (Central European Standard Time)
  console.log( new Date( 86400000 ) );                     // Fri Jan 02 1970 01:00:00 GMT+0100 (Central European Standard Time)
  console.log( new Date().toUTCString() );                 // Wed, 08 Dec 2021 18:26:34 GMT
  console.log( new Date().toISOString() );                 // 2021-12-08T18:28:30.983Z
  console.log( new Date().getFullYear() );                 // 2021
  console.log( new Date().toJSON() );                      // 2021-12-12T18:32:43.824Z

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  // JavaScript ISO Dates => syntax (YYYY-MM-DD)
  console.log( new Date( "2015-03-25" ) );                 // Wed Mar 25 2015 01:00:00 GMT+0100 (Central European Standard Time)

  // ISO Dates (Date-Time) ==> (YYYY-MM-DDTHH:MM:SSZ)
  console.log( new Date( "2015-03-25T12:00:00Z" ) );       // Wed Mar 25 2015 13:00:00 GMT+0100 (Central European Standard Time)

  // If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead
  console.log( new Date( "2015-03-25T12:00:00-06:30" ) );  // Wed Mar 25 2015 19:30:00 GMT+0100 (Central European Standard Time)

  // JavaScript Short Dates => "MM/DD/YYYY"
  console.log( new Date( "03/25/2015" ) );                 // Wed Mar 25 2015 00:00:00 GMT+0100 (Central European Standard Time)
  console.log( new Date( "2015-3-25" ) );                  // Wed Mar 25 2015 00:00:00 GMT+0100 (Central European Standard Time)
  console.log( new Date( "2015/03/25" ) );                 // Wed Mar 25 2015 00:00:00 GMT+0100 (Central European Standard Time)
  console.log( new Date( "25-03-2015" ) );                 // Invalid Date

  // JavaScript Long Dates ==> "DD-MM-YYYY"
  console.log( new Date( "Mar 25 2015" ) );                // Wed Mar 25 2015 00:00:00 GMT+0100 (Central European Standard Time)
  console.log( new Date( "25 Mar 2015" ) );                // Wed Mar 25 2015 00:00:00 GMT+0100 (Central European Standard Time)
  console.log( new Date( "Mar 25 2015" ) );                // Wed Mar 25 2015 00:00:00 GMT+0100 (Central European Standard Time)
  console.log( new Date( "Mar 25 2015" ) );                // Wed Mar 25 2015 00:00:00 GMT+0100 (Central European Standard Time)
  console.log( new Date( "MAR, 25, 2015" ) );              // Wed Mar 25 2015 00:00:00 GMT+0100 (Central European Standard Time)

  // Date Input - Parsing Dates
  console.log( Date.parse( "March 21, 2012" ) );           // 1332284400000
  console.log( new Date( Date.parse( "March 21, 2012" ) ) );// Wed Mar 21 2012 00:00:00 GMT+0100 (Central European Standard Time)

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  // getFullYear()  ==>  	Get the year as a four digit number (yyyy)
  console.log( new Date().getFullYear() );                 // 2021

  // getMonth()  ==>  	Get the month as a number (0-11)
  console.log( new Date().getMonth() );                    // 11

  // getDate()  ==>  	Get the day as a number (1-31)
  console.log( new Date().getDate() );                     // 8

  // getHours()  ==>  	Get the hour (0-23)
  console.log( new Date().getHours() );                   // 20

  // getMinutes()  ==>  	Get the minute (0-59)
  console.log( new Date().getMinutes() );                 // 19

  // getSeconds()  ==>  	Get the second (0-59)
  console.log( new Date().getSeconds() );                 // 56

  // getMilliseconds()  ==>  	Get the millisecond (0-999)
  console.log( new Date().getMilliseconds() );            // 138

  // getTime()  ==>  	Get the time (milliseconds since January 1, 1970)
  console.log( new Date().getTime() );                    // 1638990927752


  // getDay()  ==>  	Get the weekday as a number (0-6)
  console.log( new Date().getDay() );                     // 3

  // Date.now()  ==>  	Get the time. ECMAScript 5.
  console.log( Date.now() );                              // 1638991856722

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  // setDate()	Set the day as a number (1-31)
  console.log( new Date().setDate( 15 ) );                // 1639596656722
  const d = new Date();
  console.log( d.setDate( d.getDate() + 50 ) );           // 1643311856722

  // setFullYear()	Set the year (optionally month and day)
  console.log( new Date().setFullYear( 2020 ) );          // 1607455856722
  console.log( new Date().setFullYear( 2020, 11, 3 ) );   // 1607023856722

  // setMonth()	Set the month (0-11)
  console.log( new Date().setMonth( 11 ) );               // 1638991856722

  // setHours()	Set the hour (0-23)
  console.log( new Date().setHours( 22 ) );               // 1638999056722

  // setMinutes()	Set the minutes (0-59)
  console.log( new Date().setMinutes( 30 ) );             // 1638991856722


  // setSeconds()	Set the seconds (0-59)
  console.log( new Date().setSeconds( 20 ) );             // 1638991820722

  // setMilliseconds()	Set the milliseconds (0-999)
  console.log( new Date().setMilliseconds( 30 ) );        // 1638991856030

  // setTime()	Set the time (milliseconds since January 1, 1970)
  console.log( new Date().setTime( 1970 ) );              // 1970
  // DATE training
  {
    dataTime = Date.now();                            // we can use as id
    console.log( dataTime );                        // 1640105517768

    // new Date(year, month, day, hours, minutes, seconds, milliseconds)
    let infoDataTime = new Date( dataTime );
    console.log( infoDataTime );                    // Tue Dec 21 2021 17:55:26 GMT+0100 (Central European Standard Time)
    console.log( infoDataTime.getFullYear() );      // 2021
    console.log( infoDataTime.getMonth() );         // 11
    console.log( infoDataTime.getDay() );           // 2
    console.log( infoDataTime.getHours() );         // 18
    console.log( infoDataTime.getMinutes() );       // 1
    console.log( infoDataTime.getSeconds() );       // 44

    /* ----------------------------------------------------------- */

    // How to get the name of the day
    const weekday = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

    let d = new Date( dataTime ).getDay();          // 2
    let day = weekday[ d ];

    console.log( day );                             // Tuesday

    /* ----------------------------------------------------------- */

    // format Time as 00:00 AM

    function formatAMPM ( date ) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';

      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }

    console.log( formatAMPM( new Date() ) );        // 6:10 pm
  }


}
// DOM 1
{
  /* HTML
      <span class="my-span">My Span</span>
      <span class="my-span spacial">My Span</span>

      <p>Hello Paragraph 1</p>
      <p>Hello Paragraph 2</p>

      <div id="my-div">Hello Div</div>

      <form action="">
        <input type="text" name="one" value="Hello">
      </form>

      <form action="">
        <input type="text" name="two" value="Hello">
      </form>

      <a href="https://google.com">Google</a>
      <a href="https://facebook.com">Facebook</a>
  */

  let myIdElement = document.getElementById( "my-div" );
  let myTagElement = document.getElementsByTagName( "p" );
  let myClassElement = document.getElementsByClassName( "my-span" );
  let queryElement = document.querySelector( ".my-span" );
  let queryElementAll = document.querySelectorAll( ".my-span" );

  console.log( myIdElement );                     // <div id="my-div">Hello Div</div>
  console.log( myTagElement );                    // HTMLCollection(2) [p, p]
  console.log( myTagElement[ 0 ] );               // <p>Hello Paragraph 1</p>
  console.log( myTagElement[ 1 ] );               // <p>Hello Paragraph 2</p>
  console.log( myClassElement[ 0 ] );             // <span class="my-span">My Span</span>
  console.log( queryElementAll );                 // NodeList(2) [span.my-span, span.my-span.spacial]
  console.log( queryElementAll[ 1 ] );            // <span class="my-span">My Span</span>


  console.log( document.title );                  // learning
  console.log( document.body );                   // body
  console.log( document.forms );                  // HTMLCollection(2) [form, form]
  console.log( document.forms[ 0 ] );             // <form action=""><input type="text" name="one" value="Hello"></form>
  console.log( document.forms[ 0 ].one );         // <input type="text" name="one" value="Hello">
  console.log( document.forms[ 0 ].one.value );   // Hello
  console.log( document.links );                  // HTMLCollection(2) [a, a]
  console.log( document.links[ 1 ] );             // <a href="https://facebook.com">Facebook</a>
  console.log( document.links[ 1 ].href );        // https://facebook.com/

  /* ************************************************************************** */

  /* HTML
    <div class="js">JavaScript<span>Div</span> &lt;span&gt;</div>
  */

  let myElement = document.querySelector( ".js" );                // get the element

  console.log( myElement );                                       // <div class="js">JavaScript<span>Div</span> &lt;span&gt;</div>
  console.log( myElement.innerHTML );                             // JavaScript<span>Div</span> &lt;span&gt;
  console.log( myElement.textContent );                           // JavaScriptDiv <span>

  myElement.innerHTML = "Text From <span>Main.js</span> File";    /*  <div class="js">
                                                                      "Text From "
                                                                        <span>Main.js</span>
                                                                      "File"
                                                                    </div>
                                                                 */

  myElement.textContent = "Text From <span>Main.js</span> File";  /*  <div class="js">
                                                                      Text From &lt;span&gt;Main.js&lt;/span&gt; File
                                                                    </div>
                                                                  */


  /*  HTML
      <img src="" alt="">
  */

  console.log( document.images );                                 // HTMLCollection [img]
  console.log( document.images[ 0 ] );                            // <img src="" alt="">

  document.images[ 0 ].src = "https://google.com";                // overrate source when found is the attribute
  document.images[ 0 ].alt = "Alternate";                         // overrate alternate
  document.images[ 0 ].title = "picture";                         // add title
  document.images[ 0 ].id = "pic";                                // add id
  document.images[ 0 ].className = "img";                         // add class

  /*  HTML
      <a class="link" href="#">Google</a>
  */

  let myLink = document.querySelector( ".link" );                 // get the element

  console.log( myLink.getAttribute( "class" ) );                  // link
  console.log( myLink.getAttribute( "href" ) );                   // #

  myLink.setAttribute( "href", "https://twitter.com" );           // overrate "href" when found is the attribute to "https://twitter.com"
  myLink.setAttribute( "title", "twitter" );                      // add attribute "title" to {myLink} and value is "twitter"

  /* ************************************************************************** */

  /* HTML
    <div>Div</div>
    <p class="para" data-src="Testing">Paragraph</p>

    -------------------------

    DOM [Check Attributes]
    - Element.attributes
    - Element.hasAttribute
    - Element.hasAttributes
    - Element.removeAttribute
  */
  console.log( document.getElementsByTagName( "p" )[ 0 ].attributes );

  let myP = document.getElementsByTagName( "p" )[ 0 ];

  if ( myP.hasAttribute( "data-src" ) ) {

    if ( myP.getAttribute( "data-src" ) === "" ) {
      myP.removeAttribute( "data-src" );
    } else {
      myP.setAttribute( "data-src", "New Value" );
    }

  } else {
    console.log( `Not Found` );
  }

  console.log( myP.hasAttributes() );   // true


  /* ************************************************************************** */

  /*
    DOM [Create Elements]
    - createElement
    - createComment
    - createTextNode
    - createAttribute
    - appendChild
  */

  for ( let i = 1; i <= 100; i++ ) {
    let myMainElement = document.createElement( "div" );
    let myHeading = document.createElement( "h2" );
    let myParagraph = document.createElement( "p" );

    let myHeadingText = document.createTextNode( `Product Title ${ i }` );
    let myParagraphText = document.createTextNode( "Product Description" );

    document.body.appendChild( myMainElement );
    myMainElement.className = `product-${ i }`;

    myHeading.appendChild( myHeadingText );
    myMainElement.appendChild( myHeading );

    myParagraph.appendChild( myParagraphText );
    myMainElement.appendChild( myParagraph );
  }


  /* ************************************************************************** */

  /* HTML
    <div>
      Hello Div
      <p>Hello p</p>
      <span>Hello span</span>
      <!-- comment -->
      Hello
    </div>
  */

  let myElement = document.querySelector( "div" );

  console.log( myElement );
  console.log( myElement.children );            // HTMLCollection(2) [p, span]
  console.log( myElement.children[ 0 ] );       // <p>Hello p</p>

  console.log( myElement.childNodes );          // NodeList(7) [text, p, text, span, text, comment, text] --> space is a text
  console.log( myElement.childNodes[ 0 ] );     // Hello Div

  console.log( myElement.firstChild );          // Hello Div
  console.log( myElement.lastChild );           // Hello

  console.log( myElement.firstElementChild );   // <p>Hello p</p>
  console.log( myElement.lastElementChild );    // <span>Hello span</span>

  /* ************************************************************************** */
  /* HTML
    <button id="btn">Button</button>
  */

  let myBtn = document.getElementById( "btn" );

  myBtn.onclick = function () {
    console.log( 'Clicked' );
  };
  myBtn.oncontextmenu = function () {   // right click mouse
    console.log( 'Clicked' );
  };
  myBtn.onmouseenter = function () {
    console.log( 'Clicked' );
  };
  myBtn.onmouseleave = function () {
    console.log( 'Clicked' );
  };
  window.onscroll = function () {
    console.log( 'Scroll' );
  };
  window.onresize = function () {
    console.log( 'resize' );
  };

  /* HTML
    <form action="">
      <input type="text">
      <input type="submit" value="Submit Data">
    </form>
  */
  let myForm = document.forms[ 0 ];
  console.log( myForm );

  myForm.onfocus = function () {
    console.log( 'focus' );
  };
  myForm.onblur = function () {
    console.log( 'blur' );
  };
  myForm.onsubmit = function () {
    console.log( 'submit' );
  };


  /* ************************************************************************** */

  /* HTML
  <form action="">
    <input type="text" name="username" placeholder="Max 10 Chars Only">
    <input type="text" name="username" placeholder="Cant Be Empty">
    <input type="submit" value="Submit Data">
  </form>
  <a href="https://google.com">Google</a>
*/


  document.forms[ 0 ].onsubmit = function ( e ) {

    let userValid = false;
    let ageValid = false;

    let userInput = document.querySelector( "[name='username']" );
    let ageInput = document.querySelector( "[name='age']" );

    if ( userInput.value !== "" && userInput.value.length <= 10 ) {
      userValid = true;
    }

    if ( ageInput.value !== "" ) {
      ageValid = true;
    }

    if ( userValid === false || ageValid === false ) {
      e.preventDefault();
    }

  };

  document.links[ 0 ].onclick = function ( event ) {
    console.log( event );
    event.preventDefault();  //  its default action should not be taken as it normally would be.
  };


  /* ************************************************************************** */
  /* HTML
    <div id="elzero" class="element" name="js">JavaScript</div>
  */


  console.log( document.querySelectorAll( "div" ) );
  console.log( document.querySelectorAll( "#elzero" ) );
  console.log( document.querySelectorAll( ".element" ) );
  console.log( document.querySelectorAll( "[name='js']" ) );
  console.log( document.querySelector( "div" ) );
  console.log( document.querySelector( "#elzero" ) );
  console.log( document.querySelector( ".element" ) );
  console.log( document.querySelector( "[name='js']" ) );
  console.log( document.getElementById( "elzero" ) );
  console.log( document.getElementsByClassName( "element" ) );
  console.log( document.getElementsByTagName( 'div' ) );
  console.log( document.getElementsByName( "js" ) );
  console.log( document.body.children[ 0 ] );
  console.log( document.body.childNodes[ 1 ] );
  console.log( document.body.firstElementChild );
  console.log( document.body.lastElementChild.previousElementSibling );

  /* ************************************************************************** */

  let allImages = document.querySelectorAll( "div img" );

  allImages.forEach( ( img ) => {
    img.setAttribute( "src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png" );
    img.alt = "Elzero Logo";
  } );

  // or
  for ( let i = 0; i < 10; i++ ) {
    let mainDiv = document.createElement( "div" );
    let myImg = document.createElement( "img" );

    document.body.appendChild( mainDiv );
    mainDiv.appendChild( myImg );
    let allImage1 = document.querySelectorAll( "div img" );

    allImage1.forEach( ( img ) => {
      img.setAttribute( "src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png" );
      img.alt = "Elzero Logo";
    } );
  }


  /* ************************************************************************** */
  /* HTML
    <style>
      body {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
      }

      input {
        width: 300px;
        padding: 15px 10px;
        margin-bottom: 20px;
      }

      span {
        font-size: 20px;
        font-weight: bold;
        padding: 10px;
      }

    </style>

  </head>

  <body>
    <form action="">
      <input type="number" value="" name="dollar" placeholder="USD Dollar" />
      <div class="result">{<span id="dollar">0</span>} USD Dollar = {<span id="pound">0</span>} Egyptian Pound</div>
    </form>
    <script src="main.js"></script>
  </body>
  */
  let numInput = document.querySelector( "form input" );

  let spanDollar = document.getElementById( "dollar" );
  let spanPound = document.getElementById( "pound" );

  numInput.setAttribute( "min", "0" );
  spanDollarContent = document.createTextNode( numInput.value );
  spanDollar.appendChild( spanDollarContent );


  numInput.addEventListener( "input", () => {
    spanDollar.textContent = numInput.value;
    spanPound.textContent = ( numInput.value * 15.6 ).toFixed( 2 );
  } );


  /* ************************************************************************** */
  /*
    <div class="one" title="two">Two 2</div>
    <div class="two" title="one">One</div>
   */

  let firstDiv = document.querySelector( ".one" );
  let classFC = firstDiv.className;
  let secondDiv = document.querySelector( ".two" );
  let classSC = secondDiv.className;
  let mumTwo = document.getElementsByTagName( "div" ).length;

  firstDiv.title = classFC;
  firstDiv.textContent = classFC;

  secondDiv.title = classSC;
  secondDiv.textContent = `${ classSC } ${ mumTwo } `;


  /* ************************************************************************** */

  /* HTML
    <img src="#" alt="One" />
    <img src="#" />
    <img src="#" alt="Three" />
    <img src="#" />
    <img src="#" />
  */
  let myImgs = document.querySelectorAll( "img" );

  myImgs.forEach( ( img ) => {
    img.hasAttribute( "alt" ) ? img.alt = "old" : img.setAttribute( "alt", "Elzero New" );
  } );



  /* ************************************************************************** */
  /* HTML
    <form action="">
      <input type="number" name="elements" class="input" placeholder="Number Of Elements" />
      <input type="text" name="texts" class="input" placeholder="Elements Text" />
      <select name="type" class="input">
        <option value="Div">Div</option>
        <option value="Section">Section</option>
      </select>
      <input type="submit" name="create" value="Create" />
      <div class="results"></div>
    </form>

    <div class="box" title="Element" id="id-1">Hello</div>
    <div class="box" title="Element" id="id-2">Hello</div>
    <div class="box" title="Element" id="id-3">Hello</div>
  */
  let form = document.forms[ 0 ];
  let num = document.querySelector( "form input[type='number']" );
  let content = document.querySelector( "input[type= 'text']" );
  let type = document.querySelector( "form select" );
  let sub = document.querySelector( "input[type='submit']" );
  let result = document.querySelector( "form .results" );
  num.setAttribute( "min", "0" );

  form.onsubmit = ( event ) => {
    event.preventDefault();

    // remove all boxes
    let boxes = document.querySelectorAll( ".results .box" );
    boxes.forEach( box => box.remove() );

    for ( let i = 0; i < num.value; i++ ) {
      let element = document.createElement( type.value );
      element.className = "box";
      element.title = "Element";
      element.id = `id-${ i + 1 }`;
      element.textContent = content.value;

      result.appendChild( element );
    }
  };


  /* let app = () => {
    const form = document.forms[ 0 ];
    const numOfElements = document.querySelector( "form input[type='number']" );
    const text = document.querySelector( "form input[type='text']" );
    const type = document.querySelector( "form select" );
    const result = document.querySelector( "form .results" );

    form.onsubmit = ( event ) => {
      // Prevent the default act for a form when submit it (refresh and empty the fields).
      event.preventDefault();

      // Remove all childs of the result element.
      document.querySelectorAll( ".results .box" ).forEach( ( box ) => box.remove() );

      if ( numOfElements.value !== "" && text.value.trim() !== "" ) {
        if ( numOfElements.value > 0 ) {
          for ( let i = 0; i < numOfElements.value; i++ ) {
            let box = document.createElement( type.value );
            box.className = "box";
            box.title = "Element";
            box.id = `id-${ i + 1 }`;
            let boxText = document.createTextNode( text.value );

            box.appendChild( boxText );
            result.appendChild( box );
          }
        } else alert( "Number Of Elements Should Be Greater Than 0" );
      } else alert( "Please fill in all the required fields." );
    };
  };

  app();
   */
}
// DOM 2
{
  /* HTML
  <form action="">
    <input class="one" type="text">
    <input class="two" type="text">
    <input type="submit" value="Submit Value">
  </form>
  <a href="https://google.com" target="_blank">Google</a>
*/

  let one = document.querySelector( ".one" );
  let two = document.querySelector( ".two" );

  window.onload = function () {
    two.focus();
    console.log( one );
  };

  one.onblur = function () {
    document.links[ 0 ].click();
  };
  // ---------------------------------
  // <script>
  window.onload = function () {
    const element = document.createElement( "script" );
    element.src = "myScript.js";
    document.body.appendChild( element );
  };
  // </script>

  /* ************************************************************************** */

  /* HTML
    <div id="my-div" class="one two show test">Div With Many Classes</div>
  */

  let element = document.getElementById( "my-div" );

  console.log( element );
  console.log( element.classList );
  console.log( typeof element.classList );                // object

  console.log( element.classList.length );                // 4

  console.log( element.classList.contains( "osama" ) );   // false
  console.log( element.classList.contains( "show" ) );    // true

  console.log( element.classList.item( "0" ) );           // one
  console.log( element.classList.item( "3" ) );           // test


  element.onclick = function () {
    element.classList.add( "add-one", "add-two" );
  };

  element.onclick = function () {
    element.classList.remove( "one", "two" );
  };

  element.onclick = function () {
    element.classList.toggle( "one" );
  };


  /* ************************************************************************** */

  /* HTML
  <div id="my-div" class="one two show test">Div With Many Classes</div>
*/
  /* CSS
  div {
    font-size: 40px;
    line-height: 2;
  }

  */

  let element = document.getElementById( "my-div" );

  element.style.color = "red";
  element.style.fontWeight = "bold";

  element.style.cssText = "color: yellow; font-weight: bold; opacity: 0.8";


  element.style.removeProperty( "color" );
  element.style.setProperty( "font-size", "40px", "important" );

  console.log( document.styleSheets );
  console.log( document.styleSheets[ 0 ] );
  document.styleSheets[ 0 ].cssRules[ 0 ].style.removeProperty( "line-height" );
  document.styleSheets[ 0 ].cssRules[ 0 ].style.removeProperty( "font-size" );
  document.styleSheets[ 0 ].cssRules[ 0 ].style.setProperty( "background-color", "red" );


  /* ************************************************************************** */

  /* HTML
    <div id="my-div" class="one two show test">Div With Many Classes</div>

    ------
    DOM [Deal With Elements]
    - before [Element || String]
    - after [Element || String]
    - append [Element || String]
    - prepend [Element || String]
    - remove
  */

  let element = document.getElementById( "my-div" );

  let createdP = document.createElement( "p" );

  element.before( "** hello from before js **" );  // as a string
  element.after( "** hello from after js **" );

  element.before( createdP );
  element.after( createdP );

  element.prepend( " ** hello from prepend js ** " );
  element.append( " ** hello from append js ** " );

  element.prepend( createdP );
  element.append( createdP );

  element.remove();

  /* ************************************************************************** */
  /*
    DOM [Traversing]
    - nextSibling
    - previousSibling
    - nextElementSibling
    - previousElementSibling
    - parentElement
  */

  let span = document.querySelector( ".two" );

  console.log( span.parentElement );

  span.onclick = function () {
    span.parentElement.remove();
  };

  /* ************************************************************************** */

  /* HTML
  <p id="my-p" class="my-p">this is <span>p</span></p>
  <div>Div</div>
 */

  // let myP = document.querySelector( "p" );
  // let myDiv = document.querySelector( "div" );

  // myDiv.appendChild( myP );   // inter p in div


  //  ⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣

  let myP = document.querySelector( "p" ).cloneNode( true );
  let myDiv = document.querySelector( "div" );

  myP.id = "my-p-clone";
  //  or
  myP.id = `${ myP.id }-clone`;

  myDiv.appendChild( myP );


  /* ************************************************************************** */
  /* HTML
    <p id="my-p" class="my-p">clone me</p>
    <div>Div</div>

    DOM [Add Event Listener]
      - addEventListener
      - Use Without On
      - Attach Multiple Events
      - Error Test
   */


  //  ⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣⇣

  let myP = document.querySelector( "p" );
  /*
  myP.onclick = function () {
    one();
  };
  //  ⇣⇣⇣⇣
  myP.onclick = one;
  myP.onclick = two;


  function one () {
    console.log( 'message 11111111' );
  }
  function two () {
    console.log( 'message 2222222222222' );
  }

  window.onload = "osama";      // error  but not alert

  myP.addEventListener( "click", function () {
    console.log( "message from onclick 1 event" );
  } );
  //  ⇣⇣⇣⇣
  myP.addEventListener( "click", one );
  myP.addEventListener( "click", two );

  // myP.addEventListener( "osama" );              // error with alert
   */
  myP.onclick = function () {
    let newP = myP.cloneNode( true );
    newP.className = 'clone';
    document.body.appendChild( newP );
  };

  /* Error
   let cloned = document.querySelector( ".clone" );
  cloned.onclick = function () {
    console.log( "iam cloned" );
  };
   */
  document.addEventListener( "click", function ( e ) {
    if ( e.target ) {
      console.log( e.target );
    }
  } );
  //  ⇣⇣⇣⇣
  document.addEventListener( "click", function ( e ) {
    if ( e.target.className === "clone" ) {
      console.log( "iam cloned" );
    }
  } );


  /* *****111********************************************************************* */
  /* HTML
    <a class="open" href="https://google.com">Google</a>
    <a class="open" href="https://elzero.org">Elzero</a>
    <a class="not" href="https://facebook.com">Facebook</a>
    <a class="linked" href="https://linkedin.com">Elzero</a>
  */

  let myLink = document.querySelector( "a.open[href='https://elzero.org']" );

  myLink.setAttribute( "target", "_blank" );

  window.onload = function () {
    // myLink.click();
  };


  /* ************************************************************************** */
  // set muti attribute
  function setAttributes ( el, attrs ) {
    for ( var key in attrs ) {
      el.setAttribute( key, attrs[ key ] );
    }
  }
  // Call it like this:

  // setAttributes( elem, { "src": "http://example.com/something.jpeg", "height": "100%", ...} );

  /* ************************************************************************** */
  const app1 = () => {

    let input = document.querySelectorAll( "input" );
    let inputR = document.querySelector( ".classes-to-remove" );
    let inputA = document.querySelector( ".classes-to-add" );
    let currentElement = document.querySelector( "[title='Current']" );
    let output = document.querySelector( ".classes-list > div" );

    let print = () => {
      if ( currentElement.classList.value !== "" ) {
        output.innerHTML = "";
        currentElement.classList.value
          .trim()
          .split( " " )
          .sort()
          .forEach( cls => {
            let span = document.createElement( "span" );
            let contentSpan = document.createTextNode( cls );
            span.append( contentSpan );
            output.appendChild( span );
          } );
      } else {
        output.innerHTML = "No Classes To Show";
      }
    };
    print();

    input.forEach( ( targ ) => {
      targ.addEventListener( "blur", function () {
        if ( this.value.trim() !== "" ) {
          this.value
            .trim()
            .split( " " )
            .forEach( ( cls ) => {
              this.className === "classes-to-add"
                ? currentElement.classList.add( cls.toLowerCase() )
                : currentElement.classList.remove( cls.toLowerCase() );
            } );
          this.value = "";
          print();
        }
      } );
    } );

    inputA.onblur = function () {
      if ( this.value !== "" ) {
        this.value
          .trim()
          .split( " " )
          .sort()
          .forEach( e => {
            currentElement.classList.add( e );
          } );
        print();
      }
      this.value = "";
    };
    inputR.onblur = function () {
      if ( this.value !== "" ) {
        this.value
          .trim()
          .split( " " )
          .sort()
          .forEach( e => {
            currentElement.classList.remove( e );
          } );
        print();
      }

      this.value = "";
    };
  };
  app1();
  // or

  let app2 = () => {
    let inputAdd = document.querySelector( ".classes-to-add" );
    let inputRemove = document.querySelector( ".classes-to-remove" );
    let parentSpan = document.querySelector( ".classes-list div" );
    let array = [ "element ", "current" ];

    let print = items => {
      for ( let i = 0; i < items.length; i++ ) {
        let span = document.createElement( "span" );
        span.className = "added";
        if ( items[ i ] !== "" ) {
          span.textContent = items[ i ];
          parentSpan.appendChild( span );
        }
      }
    };

    print( array );

    if ( array.length === 0 ) {
      parentSpan.innerHTML = "No Classes To Show";
    }

    inputAdd.onblur = function ( e ) {
      let spans = document.querySelectorAll( ".added" );
      spans.forEach( box => box.remove() );

      let arr = inputAdd.value
        .trim()
        .split( " " )
        .map( e => e.toLowerCase() )
        .filter( e => e !== "" )
        .sort();

      array = array.concat( arr );
      array = array.filter( ( item, index ) => array.indexOf( item ) === index ).sort();

      print( array );
      inputAdd.value = "";
    };

    inputRemove.onblur = function () {
      let spans = document.querySelectorAll( ".added" );
      spans.forEach( box => box.remove() );

      let arr = inputRemove.value
        .trim()
        .split( " " )
        .map( e => e.toLowerCase() )
        .filter( e => e !== "" && array.includes( e ) )
        .sort();

      array = array.filter( val => !arr.includes( val ) ).sort();
      print( array );
      inputRemove.value = "";
    };

  };
  app2();

  const app3 = () => {
    let inputAdd = document.getElementById( 'add' );
    let inputRemove = document.getElementById( 'dlt' );
    let result = document.querySelector( '.result' );

    arrResult = [];

    inputAdd.addEventListener( 'blur', function add () {

      if ( inputAdd.value !== '' ) {
        let arrOfAdd = "";
        arrOfAdd = inputAdd.value.trim().split( ' ' );
        for ( let i = 0; i < arrOfAdd.length; i++ ) {
          if ( arrResult.includes( arrOfAdd[ i ] ) ) {
            continue;
          }
          arrResult.push( arrOfAdd[ i ] );
        }
      }
      printCls();
      inputAdd.value = '';
    } );

    inputRemove.addEventListener( 'blur', function () {
      if ( inputRemove.value !== '' ) {
        let arrOfRemove = [];
        arrOfRemove = inputRemove.value.split( ' ' );
        for ( let i = 0; i < arrOfRemove.length; i++ ) {
          if ( arrResult.includes( arrOfRemove[ i ] ) ) {
            arrResult.splice( arrResult.indexOf( arrOfRemove[ i ] ), 1 );
          }
        }
      }
      printCls();
      inputRemove.value = '';
    } );

    function printCls () {
      result.innerHTML = '';
      arrResult.sort();
      for ( let j = 0; j < arrResult.length; j++ ) {

        let span = document.createElement( 'span' );
        span.className = arrResult[ j ];
        span.textContent = arrResult[ j ];
        result.appendChild( span );

      }
    }
  };
  app3();



  /* ************************************************************************** */
  let myDiv = document.querySelector( ".our-element" );
  let beforeDiv = document.createElement( "div" );
  let afterDiv = document.createElement( "div" );

  document.querySelector( "p" ).remove();


  myDiv.before( beforeDiv );
  beforeDiv.textContent = "Start";
  // beforeDiv.className = "start";
  // beforeDiv.setAttribute( "title", "Start Element" );
  // beforeDiv.setAttribute( "data-value", "Start" );

  myDiv.after( afterDiv );
  afterDiv.textContent = "Start";
  // afterDiv.className = "end";
  // afterDiv.setAttribute( "title", "Start Element" );
  // afterDiv.setAttribute( "data-value", "Start" );


  // or by function
  function setAttributes ( el, attrs ) {
    for ( var key in attrs ) {
      el.setAttribute( key, attrs[ key ] );
    }
  }
  setAttributes( beforeDiv, { "class": "start", "title": "start Element", "data-value": "start" } );
  setAttributes( beforeDiv, { "class": "end", "title": "end Element", "data-value": "end" } );

  /* ************************************************************************** */
  console.log(
    document
      .querySelector( "span" )
      .nextSibling.nextSibling.nextSibling.textContent.trim()
  );


  /* ************************************************************************** */

  document.addEventListener( "click", function ( e ) {
    console.log( ` this is ${ e.target.tagName }` );
  } );


  // or {
  [ ...document.body.children ].forEach( ( child ) => {
    child.onclick = function () {
      console.log( `This Is ${ this.tagName }` );
    };
  } );

  /* ************************************************************************** */

  let bodyStyle = `
  body{
    margin: 0;
    background: rgb(236,236,236);
    font-family: Tahoma,Arial;
  }`;
  let websiteHeadStyle = `
  .website-head {
    display: flex;
    padding: 20px;
    background-color:rgb(255,255,255);
    justify-content: space-between;
  }`;
  let logoHeadStyle = `
  .website-head .logo {
    color: rgb(35, 169, 110);
    font-weight: bold;
    font-size: 20px;
  }`;
  let menuHeadStyle = `
  .website-head .menu {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
  }`;
  let menuHeadLiStyle = `
  .website-head .menu li {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #888;
  }`;
  let contentStyle = `
  .content {
    display: flex;
    padding: 15px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    min-height: calc(100vh - 242px);
    box-sizing: border-box;
  }`;
  let productStyle = `
  .product {
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid rgb(221, 221, 221);
    width: calc((100% - 30px) / 3);
    box-sizing: border-box;
    text-align: center;
    color: rgb(136, 136, 136);
    border-radius: 6px;
  }`;
  let spanStyle = `
  span {
    font-size: 32px;
    color: black;
    font-weight: normal;
    margin-top: 10px;
    display: block;
    margin-bottom: 10px;
  }`;
  let footStyle = `
  footer {
    background-color: rgb(35, 169, 110);
    font-size: 26px;
    text-align: center;
    padding: 20px;
    color: #fff;
  }`;
  /* Start create Header */
  let headerEl = document.createElement( "header" );
  let divLogoEl = document.createElement( "div" );
  let ulHeaderEl = document.createElement( "ul" );
  let logoContent = document.createTextNode( "Elzero" );

  headerEl.className = "website-head";
  divLogoEl.className = "logo";
  ulHeaderEl.className = "menu";


  headerEl.appendChild( divLogoEl );
  divLogoEl.append( logoContent );
  headerEl.appendChild( ulHeaderEl );

  let navArray = [ "Home", "About", "Service", "Contact" ];

  navArray.forEach( link => {
    let liHeaderEl = document.createElement( "li" );
    let liHeaderContent = document.createTextNode( link );
    ulHeaderEl.appendChild( liHeaderEl );
    liHeaderEl.append( liHeaderContent );
  } );

  /* END create Header */
  /* Start create content */
  let contentEl = document.createElement( "div" );
  contentEl.className = "content";

  for ( let i = 1; i <= 15; i++ ) {
    let productEl = document.createElement( "div" );
    let spanEl = document.createElement( "span" );
    let contentProduct = document.createTextNode( "Product" );
    let contentSpan = document.createTextNode( i );
    contentEl.appendChild( productEl );
    productEl.className = "product";
    productEl.appendChild( spanEl );
    spanEl.append( contentSpan );
    productEl.append( contentProduct );
  }
  /* End create content */
  /* Start create Footer */
  let foot = document.createElement( "footer" );
  let footContent = document.createTextNode( "Copyright 2021" );

  foot.append( footContent );

  /* End create Footer */
  // Style Sheet
  document.styleSheets[ 0 ].insertRule( bodyStyle, 0 );
  document.styleSheets[ 0 ].insertRule( websiteHeadStyle, 0 );
  document.styleSheets[ 0 ].insertRule( logoHeadStyle, 0 );
  document.styleSheets[ 0 ].insertRule( menuHeadStyle, 0 );
  document.styleSheets[ 0 ].insertRule( menuHeadLiStyle, 0 );
  document.styleSheets[ 0 ].insertRule( contentStyle, 0 );
  document.styleSheets[ 0 ].insertRule( productStyle, 0 );
  document.styleSheets[ 0 ].insertRule( spanStyle, 0 );
  document.styleSheets[ 0 ].insertRule( footStyle, 0 );

  document.body.prepend( headerEl, contentEl, foot );


  // or
  /*
  // Challenge Link ==> https://www.youtube.com/watch?v=mGhGjzIKEqk&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=103&ab_channel=ElzeroWebSchool

  // Add some properties for every element in the page.
  const allItems = document.querySelectorAll("*");
  allItems.forEach((item) => {
    item.style.cssText = "font-family: Arial; margin: 0; padding: 0";
  });

  // Header
  const header = document.createElement("header");
  header.classList.add("header");

  // Logo
  const logo = document.createElement("h1");
  logo.append(document.createTextNode("Elzero"));

  logo.style.cssText = "color: #126c51; margin: 0";

  // Ul
  const ul = document.createElement("ul");
  createNavLink("Home");
  createNavLink("About");
  createNavLink("Services");
  createNavLink("Contact");

  ul.style.cssText = "display: flex; list-style: none; margin: 0";

  function createNavLink(txt) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = "#";
    a.style.cssText =
      "color: rgb(103 103 103); font-weight: 600; display: block; margin: 0 10px; font-size: 1.1rem; text-decoration: none";
    a.append(document.createTextNode(txt));
    li.append(a);
    ul.append(li);
  }

  header.append(logo, ul);

  header.style.cssText =
    "display: flex; padding: 10px 15px; align-items: center; justify-content: space-between;";

  // Main
  let main = document.createElement("main");
  main.className = "products-container";
  main.style.cssText =
    "background-color: #eee; display: flex; flex-wrap: wrap; gap: 15px; justify-content: space-between; padding: 15px; min-height: calc(100vh - (56.86px + 59.64px)); box-sizing: border-box;";

  for (let i = 0; i < 15; i++) {
    let product = document.createElement("div");
    product.className = "product";
    let span = document.createElement("span");
    span.append(document.createTextNode(`${i + 1}`));
    span.style.cssText = "display: block; font-size: 1.6rem";
    product.append(span, "Product");
    product.style.cssText =
      "text-align: center; flex-basis: calc((100% / 3) - 30px); background-color: white; padding: 23px 10px; font-size: 1.1rem";
    main.append(product);
  }

  // Footer
  let footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.append(document.createTextNode("Copyright 2021"));

  footer.style.cssText =
    "text-align: center; font-size: 1.5rem; color: white; background-color: #126c51; padding: 16px";

  document.body.prepend(header, main, footer);

  */
  /* ************************************************************************** */
}
// JSON
{
  let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

  console.log( text );
  const obj = JSON.parse( text );
  console.log( obj );              // {employees: Array(3)}
  console.log( obj.employees[ 1 ].firstName + " " + obj.employees[ 1 ].lastName ); // Anna Smith
}
// BOM [Browser Object Model]
{
  /*
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

  window.alert( "Test" );
  this.alert( "Test" );
  alert( "Test" );

  let confirmMsg = confirm( "Are You Sure?" );

  console.log( confirmMsg );        // true or false

  if ( confirmMsg === true ) {
    console.log( "Item Deleted" );     // Item Deleted
  } else {
    console.log( "Item Not Deleted" ); // Item Not Deleted
  }

  let promptMsg = prompt( "Good Day To You?", "Write Day With 3 Characters" );

  console.log( promptMsg );


  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /*
    - setTimeout(Function, Timeout, Additional Params)
    - clearTimeout(Identifier)
  */

  setTimeout( () => {
    console.log( "message" );
  }, 3000 );    // after 3 second will print "message"

  // --------------------------------------------------------

  setTimeout( sayMsg, 3000 );

  function sayMsg () {
    console.log( "iam message" );
  }
  // --------------------------------------------------------

  setTimeout( sayMsg1, 3000, "Sami", 28 );

  function sayMsg1 ( user, age ) {
    console.log( `i am message for ${ user } his age is ${ age }` );
  }


  // --------------------------------------------------------

  let counter = setTimeout( sayMsg1, 3000, "Sami", 28 );
  console.log( counter );

  function sayMsg1 ( user, age ) {
    console.log( `i am message for ${ user } his age is ${ age }` );
  }

  let btn = document.querySelector( "button" );

  btn.onclick = function () {
    clearTimeout( counter );   // will stop the counter
  };

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /*
   - setInterval(Function, Millseconds, Additional Params)
    - clearInterval(Identifier)
  */

  setInterval( () => {
    console.log( "message" );
  }, 1000 );

  // --------------------------------------------------------

  setInterval( sayMsg, 1000 );

  function sayMsg () {
    console.log( "iam message" );
  }
  // --------------------------------------------------------

  setInterval( sayMsg1, 1000, "Sami", 28 );

  function sayMsg1 ( user, age ) {
    console.log( `i am message for ${ user } his age is ${ age }` );
  }

  // --------------------------------------------------------

  let counter = setInterval( sayMsg1, 1000, "Sami", 28 );
  console.log( counter );

  function sayMsg1 ( user, age ) {
    console.log( `i am message for ${ user } his age is ${ age }` );
  }

  let btn = document.querySelector( "button" );

  btn.onclick = function () {
    clearTimeout( counter );
  };


  // Ex:
  {
    let btn = document.querySelector( 'button' );
    let popup = document.querySelector( '.popup' );


    setTimeout( closePop, 5000 );


    function closePop () {
      btn.onclick = function () {
        popup.style.display = 'none';
      };
    }


    let i = 1;
    setInterval( () => {
      console.log( i++ );
    }, 1000 );

  }

  // --------------------------------------------------------


  let div = document.querySelector( "div" );

  let counter = setInterval( countDown, 1000 );

  function countDown () {
    div.innerHTML -= 1;
    if ( div.innerHTML == "0" ) {
      clearInterval( counter );
    }
  }

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /*
    BOM [Browser Object Model]
    - location Object
    --- href Get / Set [URL || Hash || File || Mail]
    --- host
    --- hash
    --- protocol
    --- reload()
    --- replace()
    --- assign()
  */

  console.log( location );
  console.log( location.href );
  location.href = "https://google.com";
  location.href = "/#sec2";
  location.href = "mailto:sami@gmail.com";

  console.log( location.host );      // with port 127.0.0.1:5500
  console.log( location.hostname );  // 127.0.0.1
  location.hostname = "...";

  console.log( location.protocol );  // http:
  location.protocol = "...";

  console.log( location.hash );

  console.log( location.reload() );
  location.reload();

  console.log( location.replace() );
  location.replace( "https://google.com" );


  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */
  /*
    BOM [Browser Object Model]
    - open(URL [Opt], Window Name Or Target Attr [Opt] _blank or self, Win Features [Opt], History Replace [Opt])
    - close()
    - Window Features
    --- left [Num]
    --- top [Num]
    --- width [Num]
    --- height [Num]
    --- menubar [yes || no]

    Search
    - Window.Open Window Features
  */

  setTimeout( () => {
    window.open( "", "", "" );
  }, 2000 );

  setTimeout( () => {
    window.open( "https://google.com", "_blank", "width=400, height=400, left=200, top=300" );
  }, 2000 );


  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /*
    BOM [Browser Object Model]
    - History API
    --- Properties
    ------ length
    --- Methods
    ------ back()
    ------ forward()
    ------ go(Delta) => Position In History

    Search [For Advanced Knowledge]
    - pushState() + replaceState()
    */

  console.log( history );

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /*
    BOM [Browser Object Model]
    - stop()   // stop loading
    - print()
    - focus()  between windows
    - scrollTo(x, y || Options)
    - scroll(x, y || Options)
    - scrollBy(x, y || Options)
    */

  let myNewWindow = window.open( "https://google.com", "", "width=500,height=500" );
  myNewWindow.focus();
  myNewWindow.close();

  window.scrollTo( 5000, 2000 );
  window.scrollBy( 500, 200 );

  window.scrollTo( {
    left: 500,
    top: 200,
    behavior: "smooth"
  } );

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  /*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
  */
  // console.log( window.scrollX === window.pageXOffset );

  let btn = document.querySelector( "button" );

  window.onscroll = function () {
    if ( window.scrollY >= 600 ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    };
  };
  btn.onclick = function () {
    window.scrollTo( {
      left: 0,
      top: 0,
      behavior: "smooth"
    } );
  };
  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */
  /*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

  // Set
  window.localStorage.setItem( "color", "#f00" );
  window.localStorage.fontWight = "bold";
  window.localStorage[ "fontSize" ] = "20px";

  // Get
  window.localStorage.getItem( "color" );
  window.localStorage.color;
  window.localStorage[ "color" ];

  // Remove one
  window.localStorage.removeItem( "color" );

  // Remove All
  window.localStorage.clear();

  // Get Key
  console.log( window.localStorage.key( 0 ) );  // fontSize

  // Set color in Page
  document.body.style.backgroundColor = window.localStorage.getItem( "color" );


  console.log( window.localStorage );
  console.log( typeof window.localStorage );


  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  // Local Storage Practice

  let lis = document.querySelectorAll( "ul li" );
  let exp = document.querySelector( ".experiment" );

  // window.localStorage.clear()

  if ( window.localStorage.getItem( "color" ) ) {
    // [1] add color to div
    exp.style.backgroundColor = window.localStorage.getItem( "color" );

    // [2] remove active class from all lis
    lis.forEach( ( li ) => {
      li.classList.remove( "active" );
    } );

    // [3] add active class to current color
    document.querySelector( `[data-color="${ window.localStorage.getItem( "color" ) }"]` ).classList.add( "active" );

  }

  lis.forEach( ( li ) => {
    li.addEventListener( "click", ( e ) => {
      // console.log( e.currentTarget.dataset.color );
      // remove active class from all lis
      lis.forEach( ( li ) => {
        li.classList.remove( "active" );
      } );
      // add class to current element li
      e.currentTarget.classList.add( "active" );
      // add current color to local Storage
      window.localStorage.setItem( "color", e.currentTarget.dataset.color );
      //  Change div background color
      exp.style.backgroundColor = e.currentTarget.dataset.color;
    } );
  } );

  // my code
  {
    let lis = document.querySelectorAll( 'li' );
    let exp = document.querySelector( '.experiment' );

    if ( window.localStorage.getItem( 'color' ) ) {
      exp.style.backgroundColor = window.localStorage.getItem( 'color' );
      lis.forEach( li => {
        li.classList.remove( 'active' );

        if ( li.dataset.color === window.localStorage.getItem( 'color' ) ) {
          li.classList.add( 'active' );
        }
      } );


    }


    lis.forEach( li => {
      li.addEventListener( 'click', function ( e ) {
        lis.forEach( li => {
          li.classList.remove( 'active' );
        } );
        this.classList.add( 'active' );

        window.localStorage.setItem( 'color', this.dataset.color );

        exp.style.backgroundColor = this.dataset.color;
      } );
    } );

  }
  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */
  /*
    BOM [Browser Object Model]
    Session Storage
    - setItem
    - getItem
    - removeItem
    - clear
    - key

    Info
    - New Tab = New Session
    - Duplicate Tab = Copy Session
    - New Tab With Same Url = New Session
  */

  // window.localStorage.setItem("color", "red");
  // window.sessionStorage.setItem("color", "blue");

  document.querySelector( ".name" ).onblur = function () {
    // console.log(this.value);
    window.localStorage.setItem( "input-name", this.value );
  };


  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  // BOM Challenge
  {
    let input = document.querySelector( "input" );
    let btn = document.querySelector( "button" );
    let output = document.querySelector( ".output ul" );
    let spans = document.querySelectorAll( "span" );

    let arrayOfTasks = [];

    if ( localStorage.getItem( "tasks" ) ) {
      arrayOfTasks = JSON.parse( localStorage.getItem( "tasks" ) );
    }

    getDataFromLStorage();

    btn.onclick = function () {
      if ( arrayOfTasks.includes( input.value ) || input.value.trim() === "" ) return;
      addTaskToArray( input.value );
      input.value = "";

    };

    output.addEventListener( "click", ( e ) => {
      if ( e.target.matches( "span" ) ) {
        delTaskWith( e.target.parentElement.getAttribute( "data-id" ) );
        e.target.parentElement.remove();
      };
    } );

    function addTaskToArray ( taskText ) {
      const task = {
        id: Date.now(),
        title: taskText,
      };
      arrayOfTasks.push( task );
      addElementsToPage( arrayOfTasks );
      addDataToLStorage( arrayOfTasks );
    }

    function addElementsToPage ( array ) {
      output.innerHTML = "";
      array.forEach( task => {
        let li = document.createElement( "li" );
        let span = document.createElement( "span" );
        let contentSpan = document.createTextNode( "delete" );
        let contentLi = document.createTextNode( task.title );

        li.append( span );
        li.append( contentLi );
        li.setAttribute( "data-id", task.id );
        span.append( contentSpan );
        output.appendChild( li );
      } );
    }

    function addDataToLStorage ( array ) {
      window.localStorage.setItem( "tasks", JSON.stringify( array ) );
    }

    function getDataFromLStorage () {
      let data = window.localStorage.getItem( "tasks" );
      if ( data ) {
        let tasks = JSON.parse( data );
        addElementsToPage( tasks );
      }
    }

    function delTaskWith ( taskId ) {
      arrayOfTasks = arrayOfTasks.filter( ( task ) => task.id != taskId );
      addDataToLStorage( arrayOfTasks );
    }
  }
  // mycode
  {
    let input = document.querySelector( 'input.input' );
    let addTask = document.querySelector( 'input.add' );
    let tasks = document.querySelector( '.tasks' );
    let arrayOfTasks = [];

    if ( localStorage.getItem( 'tasks' ) ) {
      arrayOfTasks = JSON.parse( localStorage.getItem( 'tasks' ) );
      addTaskOfArrayToElement( arrayOfTasks );
    }

    // add task
    addTask.addEventListener( 'click', function () {
      if ( input.value.trim() != '' ) {
        addTaskToArray( input.value );
      }
      input.value = '';
      console.log( arrayOfTasks );
    } );

    // btn delete
    document.addEventListener( 'click', function ( e ) {
      if ( e.target.classList.contains( 'delete' ) ) {
        arrayOfTasks = arrayOfTasks.filter( ele => ele.id != e.target.parentElement.getAttribute( 'data-id' ) );
        e.target.parentElement.remove();
        console.log( arrayOfTasks );
        addArrayOfTasksToLocalStorage( arrayOfTasks );
      }
    } );

    // add Task To Array
    function addTaskToArray ( tasks ) {
      let task = {
        id: Date.now(),
        title: tasks,
        completed: false,
      };
      arrayOfTasks.push( task );
      addArrayOfTasksToLocalStorage( arrayOfTasks );
      addTaskOfArrayToElement( arrayOfTasks );

    }

    // add Task Of Array To Element
    function addTaskOfArrayToElement ( arr ) {
      tasks.innerHTML = '';
      for ( let i = 0; i < arr.length; i++ ) {
        let div = document.createElement( 'div' );
        let span = document.createElement( 'span' );
        span.textContent = "Delete";
        span.classList.add( 'delete' );
        div.classList.add( 'task' );
        div.textContent = arr[ i ].title;
        div.setAttribute( 'data-id', arr[ i ].id );
        div.appendChild( span );
        tasks.appendChild( div );
      }
    }

    // addArrayOfTasksToLocalStorage
    function addArrayOfTasksToLocalStorage ( arr ) {
      localStorage.setItem( "tasks", JSON.stringify( arr ) );
    }

  }
  // elzero code
  {
    let input = document.querySelector( ".input" );
    let submit = document.querySelector( ".add" );
    let tasksDiv = document.querySelector( ".tasks" );

    // Empty Array To Store The Tasks
    let arrayOfTasks = [];

    // Check if Theres Tasks In Local Storage
    if ( localStorage.getItem( "tasks" ) ) {
      arrayOfTasks = JSON.parse( localStorage.getItem( "tasks" ) );
    }

    // Trigger Get Data From Local Storage Function
    getDataFromLocalStorage();

    // Add Task
    submit.onclick = function () {
      if ( input.value !== "" ) {
        addTaskToArray( input.value ); // Add Task To Array Of Tasks
        input.value = ""; // Empty Input Field
      }
    };

    // Click On Task Element
    tasksDiv.addEventListener( "click", ( e ) => {
      // Delete Button
      if ( e.target.classList.contains( "del" ) ) {
        // Remove Task From Local Storage
        deleteTaskWith( e.target.parentElement.getAttribute( "data-id" ) );
        // Remove Element From Page
        e.target.parentElement.remove();
      }
      // Task Element
      if ( e.target.classList.contains( "task" ) ) {
        // Toggle Completed For The Task
        toggleStatusTaskWith( e.target.getAttribute( "data-id" ) );
        // Toggle Done Class
        e.target.classList.toggle( "done" );
      }
    } );

    function addTaskToArray ( taskText ) {
      // Task Data
      const task = {
        id: Date.now(),
        title: taskText,
        completed: false,
      };
      // Push Task To Array Of Tasks
      arrayOfTasks.push( task );
      // Add Tasks To Page
      addElementsToPageFrom( arrayOfTasks );
      // Add Tasks To Local Storage
      addDataToLocalStorageFrom( arrayOfTasks );
    }

    function addElementsToPageFrom ( arrayOfTasks ) {
      // Empty Tasks Div
      tasksDiv.innerHTML = "";
      // Looping On Array Of Tasks
      arrayOfTasks.forEach( ( task ) => {
        // Create Main Div
        let div = document.createElement( "div" );
        div.className = "task";
        // Check If Task is Done
        if ( task.completed ) {
          div.className = "task done";
        }
        div.setAttribute( "data-id", task.id );
        div.appendChild( document.createTextNode( task.title ) );
        // Create Delete Button
        let span = document.createElement( "span" );
        span.className = "del";
        span.appendChild( document.createTextNode( "Delete" ) );
        // Append Button To Main Div
        div.appendChild( span );
        // Add Task Div To Tasks Container
        tasksDiv.appendChild( div );
      } );
    }

    function addDataToLocalStorageFrom ( arrayOfTasks ) {
      window.localStorage.setItem( "tasks", JSON.stringify( arrayOfTasks ) );
    }

    function getDataFromLocalStorage () {
      let data = window.localStorage.getItem( "tasks" );
      if ( data ) {
        let tasks = JSON.parse( data );
        addElementsToPageFrom( tasks );
      }
    }

    function deleteTaskWith ( taskId ) {
      // For Explain Only
      // for (let i = 0; i < arrayOfTasks.length; i++) {
      //   console.log(`${arrayOfTasks[i].id} === ${taskId}`);
      // }
      arrayOfTasks = arrayOfTasks.filter( ( task ) => task.id != taskId );
      addDataToLocalStorageFrom( arrayOfTasks );
    }

    function toggleStatusTaskWith ( taskId ) {
      for ( let i = 0; i < arrayOfTasks.length; i++ ) {
        if ( arrayOfTasks[ i ].id == taskId ) {
          arrayOfTasks[ i ].completed == false ? ( arrayOfTasks[ i ].completed = true ) : ( arrayOfTasks[ i ].completed = false );
        }
      }
      addDataToLocalStorageFrom( arrayOfTasks );
    }

  }
  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  // assignment
  {// 1111111111
    {
      let promptMsg = prompt( "Print Number From – To", "Example: 5-20" );
      let arr = promptMsg.split( "-" ).sort( ( a, b ) => a - b );
      let x = +arr[ 0 ];
      let y = +arr[ 1 ];

      for ( let i = x; i <= y; i++ ) {
        let div = document.createElement( "div" );
        document.body.append( div );
        div.append( i );
      }
      // or
      function printCount ( inputUser ) {
        let promptMsg = prompt( "Print Number From – To", "Example: 5-20" );
        let arr = promptMsg.split( "-" ).sort( ( a, b ) => a - b );
        let x = +arr[ 0 ];
        let y = +arr[ 1 ];

        for ( let i = x; i <= y; i++ ) {
          let div = document.createElement( "div" );
          document.body.append( div );
          div.append( i );
        }
      }
      printCount();
    }

    //  2222222222222222222222222222

    function Popup () {
      let div = document.createElement( "div" );
      let h3 = document.createElement( "h3" );
      let p = document.createElement( "p" );
      let toggle = document.createElement( "span" );

      document.body.appendChild( div );
      div.appendChild( h3 );
      div.appendChild( p );
      div.appendChild( toggle );

      h3.textContent = "Welcome";
      p.textContent = "Welcome To Elzero Web School";
      toggle.textContent = "X";

      div.style.cssText = `
      background-color: #F5F3F4;
      border: 2px solid #ddd;
      width: 30%;
      margin: 100px auto;
      text-align: center;
      font-family: sans-serif;
      position: relative
    `;
      toggle.style.cssText = `
      background-color: #FF0100;
      color: #fff;
      position: absolute;
      top: -15px;
      right: -15px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    `;
      toggle.onclick = function () {
        div.remove();
      };
    };
    setTimeout( Popup, 5000 );


    /* or
    document.addEventListener("click", function (e) {
      if (!e.target.matches("#close-popup")) return;
      e.target.parentElement.remove();
    });
    */
    //  333333333333333333333333

    let div = document.createElement( "div" );

    document.body.appendChild( div );
    div.textContent = "10";

    div.style.cssText = `
      background-color: #FD0000;
      border: 3px solid #fff;
      color: #fff;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: 100px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 60px
    `;
    let counter = setInterval( countDown, 1000 );
    function countDown () {
      div.innerHTML -= 1;
      if ( div.innerHTML == "0" ) {
        clearInterval( counter );
      }
    }
    //  4444444444444444444444444444444

    let div = document.createElement( "div" );

    document.body.appendChild( div );
    div.textContent = "10";

    div.style.cssText = `
      background-color: #FD0000;
      border: 3px solid #fff;
      color: #fff;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: 100px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 60px
    `;
    let counter = setInterval( countDown, 1000 );
    function countDown () {
      div.innerHTML -= 1;
      if ( div.innerHTML == "0" ) {
        location.href = "https://elzero.org/";
      }
    }
    // 555555555555555555

    let div = document.createElement( "div" );

    document.body.appendChild( div );
    div.textContent = "10";

    div.style.cssText = `
      background-color: #FD0000;
      border: 3px solid #fff;
      color: #fff;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: 100px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 60px
    `;
    let counter = setInterval( countDown, 1000 );
    function countDown () {
      div.innerHTML -= 1;
      if ( div.innerHTML == "5" ) {
        window.open( "https://elzero.org/", "_blank", "width=400, height=400, left=800, top=0" );
      }
      if ( div.innerHTML == "0" ) {
        clearInterval( counter );
      }
    }

  }
  let myApp = () => {

    let fonts = document.getElementById( 'fonts' );
    let size = document.getElementById( 'size' );
    let colors = document.getElementById( 'colors' );
    let txt = document.getElementById( 'txt' );
    let lisFonts = document.querySelectorAll( '#fonts> option' );
    let lisColors = document.querySelectorAll( '#fonts> option' );
    let lisSize = document.querySelectorAll( '#size> option' );

    if ( localStorage.getItem( 'font' ) ) {
      txt.style.fontFamily = `${ localStorage.font }, sans-serif`;
      document.querySelector( `[value='${ localStorage.font }']` ).setAttribute( 'selected', '' );


    } else {
      lisFonts[ 0 ].setAttribute( 'selected' );
    }

    if ( localStorage.getItem( 'color' ) ) {
      txt.style.color = `${ localStorage.color }`;
      document.querySelector( `[value='${ localStorage.color }']` ).setAttribute( 'selected', '' );

    } else {
      lisColors[ 0 ].setAttribute( 'selected' );
    }

    if ( localStorage.getItem( 'size' ) ) {
      txt.style.fontSize = `${ localStorage.getItem( 'size' ) }px`;
      document.querySelector( `[value='${ localStorage.size }']` ).setAttribute( 'selected', '' );

    } else {
      lisSize[ 0 ].setAttribute( 'selected' );
    }

    fonts.addEventListener( 'change', function () {
      txt.style.fontFamily = `${ this.value }, sans-serif`;
      localStorage.setItem( "font", this.value );

    } );

    colors.addEventListener( 'change', function () {
      txt.style.color = this.value;
      localStorage.setItem( 'color', this.value );
    } );

    size.addEventListener( 'change', function () {
      txt.style.fontSize = this.value + 'px';
      localStorage.setItem( 'size', this.value );
    } );

  };

}
// Destructuring
{
  //  Destructuring

  var myFriends = [ "Ahmed", "Sami", "Osama", "Ali" ];
  let [ a, b, c, d, e = "ssss" ] = myFriends;

  console.log( a );                // Ahmed
  console.log( b );                // Sami
  console.log( c );                // Osama
  console.log( d );                // Ali
  console.log( e );                // ssss

  // -------------------------------------------------------------------------

  let [ x, y, z ] = myFriends;
  console.log( x );                // Ahmed
  console.log( y );                // Sami
  console.log( z );                // Osama

  // -------------------------------------------------------------------------

  [ x, y, , z ] = myFriends;
  console.log( x );                // Ahmed
  console.log( y );                // Sami
  console.log( z );                // Ali

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  var myFriends = [ "Sami", "Osama", "Ali", [ "Shady", "Amr", [ "Mohamed", "Gamal" ] ] ];
  let [ , , , [ a, , [ , b ] ] ] = myFriends;
  console.log( myFriends[ 3 ][ 2 ][ 1 ] );          // Gamal

  console.log( a );                                 // Shady
  console.log( b );                                 // Gamal

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  // - Destructuring Array => Swapping Variables

  let book = "video";
  let video = "book";

  let stash = book;

  book = video;
  video = stash;

  console.log( book );            // book
  console.log( video );           // video

  // ---------------------------------------------

  let book = "video";
  let video = "book";

  [ book, video ] = [ video, book ];

  console.log( book );            // book
  console.log( video );           // video

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  // Destructuring - Destructuring Object

  const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
    skills: {
      html: 70,
      css: 80,
    }
  };

  console.log( user.theName );            // Osama
  console.log( user.theAge );             // 39
  console.log( user.theTitle );           // Developer
  console.log( user.theCountry );         // Egypt
  console.log( user.skills );             // {html: 70, css: 80}
  console.log( user.skills.html );        // 70
  // -----------------------------

  let theName = user.theName;
  let theAge = user.theAge;
  let theTitle = user.theTitle;
  let theCountry = user.theCountry;

  console.log( theName );                 // Osama
  console.log( theAge );                  // 39
  console.log( theTitle );                // Developer
  console.log( theCountry );              // Egypt
  // -----------------------------

  ( { theName, theAge: n, theCountry, theColor: co = "Red", skills: { html: h, css } } = user );
  // const { theName, theAge, theCountry } = user;

  console.log( theName );                 // Osama
  console.log( n );                       // 39
  console.log( theTitle );                // Developer
  console.log( theCountry );              // Egypt
  // console.log( theColor );             // Red
  console.log( co );                      // Red
  // console.log( html );                 // 70
  console.log( h );                       // 70
  console.log( css );                     // 80
  // -----------------------------------------------------------------------

  const { html: skillOne, css: skillTwo } = user.skills;
  // or
  // const { html, css } = user.skills;
  console.log( skillOne );                // 70
  console.log( skillTwo );                // 80

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  //   Destructuring - Destructuring Function Parameters

  const user = {
    theName: "Osama",
    theAge: 39,
    skills: {
      html: 70,
      css: 80,
    },
  };

  showDetails1( user );
  console.log( "*********************" );
  showDetails2( user );
  console.log( "*********************" );
  showDetails3( user );

  function showDetails1 ( obj ) {
    console.log( `your name is ${ obj.theName }` );           // your name is Osama
    console.log( `your age is ${ obj.theAge }` );             // your age is 39
    console.log( `your CSS skill is ${ obj.skills.css }` );   // your CSS skill is 80
  }
  // -------------------------------

  function showDetails2 ( { theName, theAge, skills: { css } } = user ) {
    console.log( `your name is ${ theName }` );              // your name is Osama
    console.log( `your age is ${ theAge }` );                // your age is 39
    console.log( `your CSS skill is ${ css }` );             // your CSS skill is 80
  }
  // -------------------------------

  function showDetails3 ( { theName: n, theAge: a, skills: { css: c } } = user ) {
    console.log( `your name is ${ n }` );                    // your name is Osama
    console.log( `your age is ${ a }` );                     // your age is 39
    console.log( `your CSS skill is ${ c }` );               // your CSS skill is 80
  }

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  // Destructuring - Destructuring Mixed Content

  const user = {
    theName: "Osama",
    theAge: 39,
    skills: [ "HTML", "CSS", "JavaScript" ],
    addresses: {
      egypt: "Cairo",
      ksa: "Riyadh",
    },
  };

  const { theName: n, theAge: a, skills: [ one, , three ], addresses: { egypt: eg } } = user;

  console.log( `your name is ${ n }` );                             // your name is Osama
  console.log( `your age is ${ a }` );                              // your age is 39
  console.log( `your skills is ${ one } ${ three }` );              // your skills is HTML JavaScript
  console.log( `your addresses is ${ eg }` );                       // your addresses is Cairo



  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": [ "USA", "Japan" ],
      "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
      },
      Origin: "30 USD",
    },
  };

  const { title: t, developer: d, releases: { Origin: or } } = game;


  const [ o, a ] = Object.keys( game.releases );

  const [ u, j ] = game.releases[ "Oath In Felghana" ];

  const { US: u_price, JAP: j_price } = game.releases[ "Ark Of Napishtim" ];

  console.log( `My Favourite Games Style Is ${ t } Style` );
  // My Favourite Games Style Is YS Style

  console.log( `And I Love ${ d } Games` );
  // And I Love Falcom Games

  console.log( `My Best Release Is ${ o } It Released in ${ u } & ${ j }` );
  // My Best Release Is Oath In Felghana It Released in USA & Japan


  console.log( `Although I Love ${ a }` );
  // Although I Love Ark Of Napishtim

  console.log( `${ a } Price in USA Is ${ u_price }` );
  // Ark Of Napishtim Price in USA Is 20 USD

  console.log( `${ a } Price in USA Is ${ j_price }` );
  // Ark Of Napishtim Price in USA Is 10 USD


  console.log( `Origin Price Is ${ or }` );
  // Origin Price Is 30 USD

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

  let chosen = 1;

  var myFriends = [
    { title: "Osama", age: 39, available: true, skills: [ "HTML", "CSS" ] },
    { title: "Ahmed", age: 25, available: false, skills: [ "Python", "Django" ] },
    { title: "Sayed", age: 33, available: true, skills: [ "PHP", "Laravel" ] }
  ];

  // Write Your Code Here

  let {
    title,
    age,
    available,
    skills: [ , s2 ]
  } = myFriends[ chosen - 1 ];

  console.log( title );
  console.log( age );
  console.log( available ? "Available" : "Not Available" );
  console.log( s2 );

  /* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */
  // random id serial from array
  const myArray = [ 00, 11, 22, 33, 44, 55 ];

  for ( let i = myArray.length - 1; i > 0; i-- ) {

    let j = Math.floor( Math.random() * i );
    let k = myArray[ i ];

    myArray[ i ] = myArray[ j ];
    myArray[ j ] = k;

  }
  console.log( myArray.join() );

}
// Set Data Type
{
  //  Set Data Type And Methods
  {

    let myData = [ 1, 1, 1, 2, 3 ];
    let myUniqueData = new Set( myData );                                          // Set is a collection of unique values;
    console.log( myUniqueData.size );                                              // 3
    console.log( myUniqueData.add( 4 ).add( 6 ) );                                 // Set(5) {1, 2, 3, 4, 6}
    console.log( myUniqueData.delete( 4 ) );                                       // true
    // console.log( myUniqueData.clear() );                                        // Set {}
    console.log( myUniqueData.has( 1 ) );                                          // true
    console.log( myUniqueData.values() );                                          // SetIterator {1, 2, 3, 6}
    console.log( myUniqueData.keys() );                                            // SetIterator {1, 2, 3, 6}
    console.log( myUniqueData.entries() );                                         // SetIterator {1 => 1, 2 => 2, 3 => 3, 6 => 6}
    myUniqueData.forEach( ( value, key, set ) => console.log( value, key, set ) ); /* 1 1 Set(3) {1, 2, 3}
                                                                                      2 2 Set(3) {1, 2, 3}
                                                                                      3 3 Set(3) {1, 2, 3}
                                                                                      6 6 Set(4) {1, 2, 3, 6}*/
    console.log( myUniqueData.entries() );                                         // SetIterator {1 => 1, 2 => 2, 3 => 3, 6 => 6}
    console.log( myUniqueData.keys() );                                            // SetIterator {1, 2, 3, 6}
    let iterator = myUniqueData.values();
    console.log( iterator );
    console.log( iterator.next() );                                                // {value: 1, done: false}
    console.log( iterator.next() );                                                // {value: 2, done: false}
    console.log( iterator.next() );                                                // {value: 3, done: false}
    console.log( iterator.next() );                                                // {value: 6, done: false}
    console.log( iterator.next() );                                                // {value: undefined, done: true}

    let setOfNumbers = new Set( [ 10 ] );
    setOfNumbers.add( 20 ).add( setOfNumbers.size );
    console.log( setOfNumbers );                             // Set(3) {10, 20, 2}
    console.log( Math.min( ...setOfNumbers ) );              // 2


  }
  // - Set Vs WeakSet
  {
    /*
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
    let myWeakSetE = [ 1, 1, 1, 2, 3 ];
    // let myUniqueDataE = new WeakSet( myWeakSet );                                   // error - myWeakSet not obj

    let myWeakSet = [ { A: 1 }, { B: 2 } ];
    let myUniqueData = new WeakSet( myWeakSet );                                   // error - myWeakSet not obj
    let obj = { C: 3 };
    console.log( myUniqueData );                                                   // WeakSet {{…}, {…}}
    console.log( myUniqueData.size );                                              // undefined
    // console.log( myUniqueData.add( 4 ) );                                       // error
    console.log( myUniqueData.add( obj ) );                                        // WeakSet {{…}, {…}, {…}}
    console.log( myUniqueData.has( obj ) );                                        // true
    console.log( myUniqueData.delete( obj ) );                                     // true
    // console.log( myUniqueData.clear() );                                        // Set {}
    // console.log( myUniqueData.values() );                                       // Error
    // console.log( myUniqueData.keys() );                                         // Error
    // console.log( myUniqueData.entries() );                                      // Error
    // myUniqueData.forEach( ( value ) => console.log( value ) );                  // Error
    // console.log( myUniqueData.entries() );                                      // Error
    // console.log( myUniqueData.keys() );                                         // Error
    // let iterator = myUniqueData.values();                                       // Error
    // console.log( iterator );                                                    // Error
  }
  // - Map vs WeakMap
  {
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
    let myObjEmpty = Object.create( null );                                        // null prototype => no property
    let myMap = new Map();                                                         // null prototype => no property

    let myNewObj = {
      10: 'number',
      '10': 'string',
    };
    console.log( myNewObj[ 10 ] );                                                 // number
    console.log( myNewObj[ '10' ] );                                               // number


    let myNewMap = new Map();
    let secWayToCreateMap = new Map( [
      [ 10, 'number' ],
      [ '10', 'string' ],
      [ true, 'Boolean' ],
      [ { a: 1 }, 'object' ],
      [ function () { }, 'function' ]
    ] );



    myNewMap.set( 10, 'number' );
    myNewMap.set( '10', 'string' );
    myNewMap.set( true, 'Boolean' );
    myNewMap.set( { a: 1 }, 'object' );
    myNewMap.set( function () { }, 'function' );

    console.log( myNewMap.get( 10 ) );                                             // number
    console.log( myNewMap.get( '10' ) );                                           // string

    console.log( myNewObj );                                                       // {10: 'string'}
    console.log( myNewMap );                                                       // Map(5) {10 => 'number', '10' => 'string', true => 'Boolean', {…} => 'object', ƒ => 'function'}
    console.log( myNewMap.size );                                                  // 5

    console.log( myNewMap.delete( 10 ) );                                          // true
    console.log( myNewMap );                                                       // Map(4) {'10' => 'string', true => 'Boolean', {…} => 'object', ƒ => 'function'}
    // myNewMap.clear();
    console.log( myNewMap.has( '10' ) );                                           // true
    console.log( myNewMap.keys() );                                                // MapIterator {'10', true, {…}, ƒ}
    console.log( myNewMap.values() );                                              // MapIterator {'string', 'Boolean', 'object', 'function'}
    console.log( myNewMap.entries() );                                             // MapIterator {'10' => 'string', true => 'Boolean', {…} => 'object', ƒ => 'function'}
    console.log( myNewMap.forEach( ( value, key ) => console.log( key, value ) ) );/*main.js:44 true 'Boolean'
                                                                                main.js:44 {a: 1} 'object'
                                                                                main.js:44 ƒ () { } 'function'
                                                                                main.js:44 undefined
                                                                              */

    // convert object to map
    let myInfo = {
      username: "Osama",
      role: "Admin",
      country: "Egypt",
    };
    console.log( Object.entries( myInfo ) );
    let myInfoMap = new Map( Object.entries( myInfo ) );  // convert object to map
    console.log( myInfoMap );                             // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
    console.log( myInfoMap.size );                        // 3
    console.log( myInfoMap.has( 'role' ) );               // true


    /*  WeakMap Allows Garbage Collector To Do Its Task But Not Map.
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
  }
  // Array Methods
  {
    // - Array.from(Iterable, MapFunc, This)
    {
      /*
        --- Variable
        --- String Numbers
        --- Set
        --- Using The Map Function
        --- Arrow Function
        --- Shorten The Method + Use arguments
      */

      console.log( Array.from( "Sami" ) );                  // (4) ['S', 'a', 'm', 'i']
      console.log( Array.from( 12345 ) );                   // [] is not iterable
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
    }
    // - Array.copyWithin
    {
      // Array.copyWithin(Target, Start => Optional, End => Optional)
      //  "Copy Part Of An Array To Another Location in The Same Array"

      let myArray = [ 10, 20, 30, 40, 50, 'A', 'B' ];

      console.log( myArray );                                          // (7) [10, 20, 30, 40, 50, 'A', 'B']

      myArray.copyWithin( 2 );
      console.log( myArray );                                          // (7) [10, 20, 10, 20, 30, 40, 50]

      myArray = [ 10, 20, 30, 40, 50, 'A', 'B' ];
      myArray.copyWithin( 2, 5 );
      console.log( myArray );                                          // (7) [10, 20, 'A', 'B', 50, 'A', 'B']

      myArray = [ 10, 20, 30, 40, 50, 'A', 'B' ];
      myArray.copyWithin( 2, 5, 6 );
      console.log( myArray );                                          // (7) [10, 20, 'A', 40, 50, 'A', 'B']

      myArray = [ 10, 20, 30, 40, 50, 'A', 'B' ];
      myArray.copyWithin( -6, -2 );
      console.log( myArray );                                          // (7) [10, 'A', 'B', 40, 50, 'A', 'B']

      myArray = [ 10, 20, 30, 40, 50, 'A', 'B' ];
      myArray.copyWithin( -6, -2, -1 );
      console.log( myArray );                                          // (7) [10, 'A', 30, 40, 50, 'A', 'B']

    }
    // - Array.some
    {
      /*
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

      let check1 = nums.some( e => e > 5 );
      console.log( check1 );                                        // true

      // -------------------------------------------------------------
      let check2 = nums.some( function ( e ) {
        console.log( this );                                       //Number {5}
        return e > this;
      } );
      console.log( check2 );                                        // false

      // -------------------------------------------------------------
      let check3 = nums.some( function ( e ) {
        console.log( this );                                       //Number {5}
        return e > this;
      }, myNumber );

      console.log( check3 );                                        // true

      // -------------------------------------------------------------
      const array1 = [ 1, 2, 3, 4, { name: "sami" } ];

      let include1 = ( arr, item ) => arr.indexOf( item ) !== -1;
      let include2 = ( arr, item ) => Boolean( ~arr.indexOf( item ) );
      let include3 = ( arr, item ) => item == arr.find( el => el === item );

      console.log( '#'.repeat( 20 ) );
      console.log( include1( [ 1, 2, 3, 4 ], 3 ) );                   // true
      console.log( include2( [ 1, 2, 3, 4 ], 3 ) );                   // true
      console.log( include3( [ 1, 2, 3, 4 ], 3 ) );                   // true
      console.log( '#'.repeat( 20 ) );

      console.log( array1.some( e => e === 1 ) );                    // true
      console.log( array1.some( e => e > 4 ) );                      // false
      console.log( array1.some( e => e < 0 ) );                      // false

      console.log( array1.some( e => e.name ) );                     // true
      console.log( array1.some( e => e.name === "sami" ) );          // true
      console.log( array1.some( e => e.country ) );                  // false


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
    }
    // Array.every Method
    {
      //  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
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
    }
    // Spread Operator
    {
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
      var myFriends = [ "osama", "Sami", "Ahmed" ];
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
    }
  }

  { // assignment
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

    {
      let n1 = [ 10, 30, 10, 20 ];
      let n2 = [ 30, 20, 10 ];

      console.log( new Set( [ ...n1 ] ).size * new Array( ...n1, ...n2 ).length * Math.min( ...n1 ) ); // 210
    }
    // -------------1111111111111

    const setOfNumbers = new Set( [ 10 ] );
    setOfNumbers.add( 20 ).add( setOfNumbers.size );

    console.log( setOfNumbers );
    console.log( Math.min( ...setOfNumbers ) );
    console.log( [ ...setOfNumbers ].pop() );


    // --------------22222222222222222

    var myFriends = [ "Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama" ];

    console.log( [ ...new Set( myFriends ) ].sort() );
    // Needed Output
    // (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

    // -------------------333333333333333333

    let myInfo = {
      username: "Osama",
      role: "Admin",
      country: "Egypt",
    };

    let myMap = new Map();
    myMap.set( "username", myInfo.username );
    myMap.set( "role", myInfo.role );
    myMap.set( "country", myInfo.country );

    /* or
      let map = new Map(Object.entries(myInfo));
    */

    console.log( myMap );
    console.log( myMap.size );
    console.log( map.has( 'role' ) );



    // Needed Output
    /* Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
    3
    true */


    // -4444444444444444444444------------------------------

    let theNumber = 100020003000;

    console.log( +[ ...new Set( theNumber.toString() ) ].sort().join( "" ) );
    // Needed Output
    // 123
    // ----555555555555555555

    let theName = "Elzero";

    console.log( theName.split( "" ) );
    console.log( [ ...theName ] );
    console.log( [ ...new Set( theName ) ] );
    console.log( Array.from( theName ) );
    console.log( Object.values( theName ) );
    console.log( Object.assign( [], theName ) );
    // Needed Output
    // ['E', 'l', 'z', 'e', 'r', 'o']

    // -----تحدي---------------666666666666666666666
    let chars = [ "A", "B", "C", 20, "D", "E", 10, 15, 6 ];

    let lengthOfNums = chars.filter( e => typeof e == "number" ).length;
    let arrayOfLetter = chars.filter( e => typeof e !== "number" );

    arrayOfLetter.length = chars.length;
    console.log( arrayOfLetter.copyWithin( lengthOfNums ) );

    // (9) ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

    // -----------------777777777777
    let n1 = [ 1, 2, 3 ];
    let n2 = [ 4, 5, 6 ];

    console.log( [ ...n1, ...n2 ] );
    console.log( n1.concat( n2 ) );
    console.log( [].concat( n1, n2 ) );
    console.log( ( n1.join( "" ) + "" + n2.join( "" ) ).split( "" ).map( e => +e ) );
    console.log( Array.from( [ n1, n2 ] ).flat() );
    n1.push( ...n2 );
    console.log( n1 );
    // Needed Output
    // [1, 2, 3, 4, 5, 6]

    // -8888888888888 -تحدي
    let n1 = [ 10, 30, 10, 20 ];
    let n2 = [ 30, 20, 10 ];

    console.log( new Set( [ ...n1 ] ).size * new Array( ...n1, ...n2 ).length * Math.min( ...n1 ) ); // 210

  }

}
// Regular Expression
{
  // Syntax
  {
    /*

      /pattern/modifier(s);
      new RegExp("pattern", "modifier(s)")

      Modifiers => Flags
      i => case-insensitive
      g => global
      m => Multiline

      Search Methods
      - match(Pattern)

      Match
      -- Matches A String Against a Regular Expression Pattern
      -- Returns An Array With The Matches
      -- Returns null If No Match Is Found.
    */
    let myString = "Hello Elzero Web School I Love elzero";

    console.log( myString.match( /Elzero/ ) );                    // ['Elzero', index: 6, input: 'Hello Elzero Web School I Love elzero', groups: undefined]
    console.log( myString.match( /Elzero/i ) );                   // ['Elzero', index: 6, input: 'Hello Elzero Web School I Love elzero', groups: undefined]
    console.log( myString.match( /Elzero/ig ) );                  // (2) ['Elzero', 'elzero']
  }
  // Ranges
  {
    let tld = "Com Net Org Info Code Io";

    // (X|Y) => X Or Y
    console.log( tld.match( /(org|info|io)/i ) );                // (2) ['Org', 'Org', index: 8, input: 'Com Net Org Info Code Io', groups: undefined]
    console.log( tld.match( /(org|info|io)/ig ) );               // (3) ['Org', 'Info', 'Io']
    // -------------------------------------------------------------

    let nums = '123#45$67&8910';

    // [0-9] => 0 To 9
    console.log( nums.match( /[0-9]/ ) );                        // ['1', index: 0, input: '12345678910', groups: undefined]
    console.log( nums.match( /[0-9]/g ) );                       // (11) ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0']
    console.log( nums.match( /[2-6]/g ) );                       // (5) ['2', '3', '4', '5', '6']
    // -------------------------------------------------------------

    // [^0-9] => Any Character Not 0 To 9
    console.log( nums.match( /[^0-9]/g ) );                      // (3) ['#', '$', '&']
    console.log( nums.match( /[^2-6]/g ) );                      // (6) ['1', '7', '8', '9', '1', '0']
    // -------------------------------------------------------------

    let Practice = "Os1 Os1Os Os2 Os8 Os8Os";
    console.log( Practice.match( /Os[5-9]Os/g ) );               // ['Os8Os']
    // -------------------------------------------------------------

    let myString = "AaBbcdefG123!234%^&*";

    // [a-z]
    // [^a-z]
    console.log( myString.match( /[a-z]/g ) );                   // (6) ['a', 'b', 'c', 'd', 'e', 'f']
    console.log( myString.match( /[^a-z]/g ) );                  // (14) ['A', 'B', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
    // -------------------------------------------------------------

    // [A-Z]
    console.log( myString.match( /[A-Z]/g ) );                   // (3) ['A', 'B', 'G']
    // [^A-Z]
    console.log( myString.match( /[^A-Z]/g ) );                  // (17) ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
    // -------------------------------------------------------------

    // [ace]
    console.log( myString.match( /[ace]/g ) );                   // (3) ['a', 'c', 'e']
    // [^ace]
    console.log( myString.match( /[^ace]/g ) );                  // (17) ['A', 'B', 'b', 'd', 'f', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
    // -------------------------------------------------------------

    // [a-zA-Z]
    console.log( myString.match( /[a-zA-Z]/g ) );                // (9) ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
    // [^a-zA-Z]
    console.log( myString.match( /[^a-zA-Z]/g ) );               // (11) ['1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
    // [^a-z^A-Z]
    console.log( myString.match( /[^a-z^A-Z]/g ) );              // (10) ['1', '2', '3', '!', '2', '3', '4', '%', '&', '*']
  }
  // Character Classes
  {

    let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';

    // . => matches any character, except newline or other line terminators.
    console.log( email.match( /./g ) );                                            // (59) ['O', '@', '@', '....

    // \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
    console.log( email.match( /\w/g ) );                                           // (35) ['O', 'g', 'c', .....

    // \d => matches digits from 0 to 9.
    console.log( email.match( /\d/g ) );                                           // (2) ['1', '1']

    // \D => matches non-digit characters.
    console.log( email.match( /\D/g ) );                                           // (57) ['O', '@', '@'....

    // \s => matches whitespace character.
    console.log( email.match( /\s/g ) );                                           // (6) [' ', ' ', ' ', ' ', ' ', ' ']

    // \S => matches non whitespace character.
    console.log( email.match( /\S/g ) );                                           // (53) ['O', '@', '@', ...

    let valid = /\w@\w.(com|net)/g;
    console.log( email.match( valid ) );                                           // (4) ['O@g.com', 'O@g.net', 'A@Y.com', '1@1.com']
    // -------------------------------------------------------------

    let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";

    console.log( names.match( /spam/ig ) );                                        // (6) ['Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'spam']

    // \b => matches at the beginning or end of a word.
    console.log( names.match( /\bspam/ig ) );                                      // (2) ['Spam', 'Spam']
    console.log( names.match( /spam\b/ig ) );                                      // (3) ['Spam', 'Spam', 'Spam']
    console.log( names.match( /(\bspam|spam\b)/ig ) );                             // (5) ['Spam', 'Spam', 'Spam', 'Spam', 'Spam']

    // \B => matches NOT at the beginning/end of a word.
    console.log( names.match( /\Bspam/ig ) );                                      // (4) ['Spam', 'Spam', 'Spam', 'spam']
    console.log( names.match( /spam\B/ig ) );                                      // (3) ['Spam', 'Spam', 'spam']
    console.log( names.match( /(\Bspam|spam\B)/ig ) );                             // (6) ['Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'spam']


  }
  // Quantifiers
  {
    let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails

    // n+    => One Or More
    console.log( mails.match( /\w+@\w+.(com|net)/ig ) );                  // (2) ['osama@gmail.com', 'elzero@gmail.net']
    console.log( mails.match( /\w+@\w+.\w+/ig ) );                        // (4) ['o@nn.sa', 'osama@gmail.com', 'elzero@gmail.net', 'osama@mail.ru']

    // n*    => zero or more
    let nums = "0110 10 150 05120 0560 350 00";                           // 0 Numbers Or No 0
    console.log( nums.match( /0\d+0/ig ) );                               // (3) ['0110', '05120', '0560']
    console.log( nums.match( /0\d*0/ig ) );                               // (4) ['0110', '05120', '0560', '00']

    // n?    => zero or one
    let urls = "https://google.com http://www.website.net web.com";       // http + https
    console.log( urls.match( /https?/ig ) );                              // (2) ['https', 'http']
    console.log( urls.match( /(https?:\/\/)?(www)?\w+.(com|net)/ig ) );   // (3) ['https://google.com', 'website.net', 'web.com']

    let serials = "S100S S3000S S50000S S950000S";

    // n{x}   => Number of
    console.log( serials.match( /s[0-9]{3}s/ig ) );                       // ['S100S']
    console.log( serials.match( /s\d{4,5}s/ig ) );                        // (2) ['S3000S', 'S50000S']

    // n{x,y} => Range
    console.log( serials.match( /s\d{3}s/ig ) );                         // ['S100S']

    // n{x,}  => At Least x
    console.log( serials.match( /s\d{3,}s/ig ) );                        // (4) ['S100S', 'S3000S', 'S50000S', 'S950000S']

    let myString = "We Love Programming";
    let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

    // $  => End With Something
    console.log( /ing$/ig.test( myString ) );                           // true
    console.log( /lz$/ig.test( names ) );                               // true

    // ^  => Start With Something
    console.log( /^we/ig.test( myString ) );                            // true
    console.log( /^1O/ig.test( names ) );                               // true
    console.log( /^\d/ig.test( names ) );                               // true

    // ?= => Followed By Something
    console.log( names.match( /\d\w{5}/ig ) );                         // (5) ['1Osama', '2Ahmed', '3Moham', '4Moust', '5Gamal']
    console.log( names.match( /\d\w{5}(?=z)/ig ) );                    // (3) ['1Osama', '2Ahmed', '5Gamal']
    console.log( names.match( /\d\w{5}(?!z)/ig ) );                    // (2) ['3Moham', '4Moust']
  }
  // Test Method
  {
    // pattern.test(input)
    console.log( /(\bspam|spam\b)/ig.test( 'SAmi' ) );                      // false
    console.log( /(\bspam|spam\b)/ig.test( 'spami' ) );                     // true
  }
  // - replace
  // - replaceAll
  {
    let txt = "We Love Programming And @ Because @ Is Amazing";

    console.log( txt.replace( "@", "sami" ) );                         // We Love Programming And sami Because @ Is Amazing
    console.log( txt.replaceAll( "@", "sami" ) );                      // We Love Programming And sami Because sami Is Amazing

    console.log( txt.replace( /@/ig, "sami" ) );                       // We Love Programming And sami Because sami Is Amazing
    console.log( txt.replaceAll( /@/ig, "sami" ) );                    // We Love Programming And sami Because sami Is Amazing


  }
  // Form Validation
  {
    document.getElementById( 'register' ).onsubmit = function () {
      let phoneInput = document.getElementById( 'phone' ).value;
      let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/;     // (1234) 567-8910
      let validationResult = phoneRe.test( phoneInput );
      if ( !validationResult ) {
        return false;
      }
      return true;
    };

  }

}
// Classes
{
  // – Constructor Function Introduction
  {

    // const userOne = {
    //   id: 100,
    //   userName: "elzero",
    //   salary: 5000,
    // };
    // const userTwo = {
    //   id: 101,
    //   userName: "sami",
    //   salary: 6000,
    // };
    // const userThree = {
    //   id: 102,
    //   userName: "osama",
    //   salary: 7000,
    // };

    function User ( id, userName, salary ) {
      this.i = id;
      this.u = userName;
      this.s = salary;
    }

    let userOne = new User( 100, 'elzero', 5000 );
    let userTwo = new User( 101, 'sami', 6000 );
    let userThree = new User( 102, 'osama', 7000 );

    console.log( userOne );                             // User {i: 100, u: 'elzero', s: 5000}
    console.log( userOne.i );                           // 100
    console.log( userOne.u );                           // elzero
    console.log( userOne.s );                           // 5000
  }
  // – Constructor Function New Syntax
  {
    class User {
      constructor ( id, userName, salary ) {
        this.i = id;
        this.u = userName;
        this.s = salary;
      }
    }

    let userOne = new User( 100, 'elzero', 5000 );
    let userTwo = new User( 101, 'sami', 6000 );
    let userThree = new User( 102, 'osama', 7000 );

    console.log( userOne );                             // User {i: 100, u: 'elzero', s: 5000}
    console.log( userOne.i );                           // 100
    console.log( userOne.u );                           // elzero
    console.log( userOne.s );                           // 5000

    console.log( userOne instanceof User );             // true
    console.log( userOne.constructor === User );        // true

  }
  // – Deal With Properties And Methods
  {
    class User {
      constructor ( id, userName, salary ) {
        // properties
        this.i = id;
        this.u = userName || "UnKnown";
        this.s = salary < 6000 ? salary + 500 : salary;
        this.msg = function () {
          return `hello ${ this.u } your salary is ${ this.s }`;
        };
      }
      // methods
      writeMsg () {
        return `hello ${ this.u } your salary is ${ this.s }`;
      }
    }

    let userOne = new User( 100, 'elzero', 5000 );
    let userTwo = new User( 101, '', 6000 );
    let userThree = new User( 102, 'osama', 7000 );

    console.log( userOne );                             // User {i: 100, u: 'elzero', s: 5000}
    console.log( userOne.i );                           // 100
    console.log( userOne.u );                           // elzero
    console.log( userOne.s );                           // 5000
    console.log( userOne.msg() );                       // hello elzero your salary is 5500

    console.log( userOne instanceof User );             // true
    console.log( userOne.constructor === User );        // true

    console.log( userTwo.u );                           // UnKnown
    console.log( userTwo.writeMsg() );                  // hello UnKnown your salary is 6000

  }
  // – Update Properties And Built In Constructors
  {
    class User {
      constructor ( id, userName, salary ) {
        this.i = id;
        this.u = userName;
        this.s = salary;
      }
      updateName ( newName ) {
        this.u = newName;
      }
    }

    let userOne = new User( 100, 'elzero', 5000 );


    console.log( userOne );                             // User {i: 100, u: 'elzero', s: 5000}
    console.log( userOne.u );                           // elzero

    userOne.updateName( "sami" );
    console.log( userOne.u );                           // sami

    let strOne = "elzero";
    let strTwo = new String( "elzero" );

    console.log( strOne );                              // elzero
    console.log( strTwo );                              // String {'elzero'}

    console.log( typeof strOne );                       // string
    console.log( typeof strTwo );                       // object

    console.log( strOne instanceof String );            // false
    console.log( strTwo instanceof String );            // true

    console.log( strOne.constructor === String );       // true
    console.log( strTwo.constructor === String );       // true
  }
  // –  Class Static Properties And Methods
  {
    class User {

      count = 0;
      // // Static Properties
      static countStatic = 1;

      constructor ( id, userName, salary ) {
        this.i = id;
        this.u = userName;
        this.s = salary;
        User.countStatic++;
      }
      sayHello () {
        return 'Hello';
      }
      // Static Methods
      static sayHelloStatic () {
        return 'hello from static';
      }
      static countMembers () {
        return `${ this.countStatic } Members Created`;
      }
    }

    let userOne = new User( 100, 'elzero', 5000 );
    let userTwo = new User( 101, 'Sami', 6000 );

    console.log( userOne.u );                        // elzero
    console.log( userTwo.u );                        // Sami

    console.log( userOne.count );                    // 0
    console.log( User.count );                       // undefined

    console.log( userOne.sayHello() );               // Hello
    // console.log( User.sayHello() );               // error

    console.log( userOne.countStatic );              // undefined
    console.log( User.countStatic );                 // 3

    // console.log( userOne.sayHelloStatic() );      // error
    console.log( User.sayHelloStatic() );            // hello from static

    console.log( User.countMembers() );              // 3 Members Created
  }
  // – Class Inheritance
  {
    // parent Class
    class User {
      constructor ( id, userName, email ) {
        this.i = id;
        this.u = userName;
        this.e = email;
      }

      sayHello () {
        return 'Hello';
      }
    }

    // Derived Class Derived=> مستمد
    class Admin extends User {
      constructor ( id, userName, email, permissions ) {
        super( id, userName, email );
        this.p = permissions;
      }
      // methods also well be extended auto
    }

    class Sami extends Admin {
      constructor ( id, userName, email, permissions, country ) {
        super( id, userName, email, permissions, );
        this.c = country;
      }
    }


    let userOne = new User( 100, 'elzero', 'email@e.com' );
    console.log( userOne.i );                                  // 100
    console.log( userOne.u );                                  // elzero
    console.log( userOne.e );                                  // email@e.com

    let adminOne = new Admin( 200, 'Sami', 'Sami@e.com', 1 );
    console.log( adminOne.i );                                 // 200
    console.log( adminOne.u );                                 // Sami
    console.log( adminOne.e );                                 // Sami@e.com
    console.log( adminOne.p );                                 // 1
    console.log( adminOne.sayHello() );                        // Hello

    let samiOne = new Sami( 1, 'Sami', 'sami@sami', 11 );
    console.log( samiOne.i );                                 // 1
    console.log( samiOne.u );                                 // Sami
    console.log( samiOne.e );                                 // sami@sami.com
    console.log( samiOne.p );                                 // 11
    console.log( samiOne.sayHello() );                        // Hello
  }
  // – Class Encapsulation
  {
    class User {
      // private property
      #e;
      constructor ( id, userName, eSalary ) {
        this.i = id;
        this.u = userName;
        this.#e = eSalary;
      }
      getSalary () {
        return parseInt( this.#e ) * 0.3;
      }
    }

    let userOne = new User( 100, 'elzero', '5000 dollar' );
    console.log( userOne );                                    // User {i: 100, u: 'elzero', #e: '5000 dollar'}
    console.log( userOne.i );                                  // 100
    console.log( userOne.u );                                  // elzero
    console.log( userOne.getSalary() );                        // 1500

    class Admin extends User {
      constructor ( id, userName, eSalary ) {
        super( id, userName, eSalary );
      }
    }

    let sami = new Admin( '1', 'Sami', '1000 dollar' );
    console.log( sami );                                        // Admin {i: '1', u: 'Sami', #e: '1000 dollar'}
    console.log( sami.i );                                      // 1
    console.log( sami.u );                                      // Sami
    console.log( sami.getSalary() );                            // 300


  }
  // – Class Encapsulation, Prototype Introduction , Add To Prototype Chain
  {
    class User {
      constructor ( id, userName ) {
        this.i = id;
        this.u = userName;

      }
      sayHello () {
        return 'hello';
      }
    }

    let userOne = new User( 100, 'elzero', '5000 dollar' );
    console.log( userOne.i );                                     // 100
    console.log( userOne.u );                                     // elzero
    console.log( userOne.sayHello() );                            // hello

    console.log( userOne );                                       // User {i: 100, u: 'elzero'}
    console.log( User.prototype );                                // {constructor: ƒ, sayHello: ƒ}

    // add method to user prototype
    User.prototype.sayWelcome = function () {
      return 'welcome';
    };

    console.log( User.prototype );                                // {sayWelcome: ƒ, constructor: ƒ, sayHello: ƒ}
    console.log( User.prototype.sayWelcome() );                   // welcome

    console.log( userOne.sayWelcome() );                          // {sayWelcome: ƒ, constructor: ƒ, sayHello: ƒ}

    Object.prototype.love = function () {
      return 'i love Elzero';
    };

    console.log( userOne.love() );                                // i love Elzero
    console.log( String.prototype.love() );                       // i love Elzero

    Object.prototype.addDoteBefAndAft = function ( val ) {
      return `=${ val }=`;
    };
    console.log( userOne.addDoteBefAndAft( 'userOne' ) );         // =userOne=
    console.log( String.prototype.addDoteBefAndAft( 'String' ) ); // =String=
  }
  // – Object Meta Data And Descriptor Part 1
  {

    const myObject = {
      a: 1,
      b: 2,
    };

    // add or edit prop to obj
    Object.defineProperty( myObject, "c", {
      writable: true,                                         // if true i can to edit value
      enumerable: true,                                       // if true it will looped with loop
      configurable: false,                                    // if false i cant to delete this prop or redefinePrp
      value: 3,
    } );

    console.log( myObject );                                  // {a: 1, b: 2, c: 3}

    // writable = true ? => will edit: not edit
    myObject[ "c" ] = 5;
    console.log( myObject );                                  // {a: 1, b: 2, c: 5}
    console.log( delete myObject.c );                         // false
  }
  // – Object Meta Data And Descriptor Part 2
  {
    const myObject = {
      a: 1,
      b: 2,
    };

    Object.defineProperties( myObject, {
      c: {
        configurable: true,
        value: 3,
      },
      d: {
        configurable: true,
        value: 4,
      },
      e: {
        configurable: true,
        value: 5,
      },
    } );

    console.log( myObject );                                         // {a: 1, b: 2, c: 3, d: 4, e: 5}

    console.log( Object.getOwnPropertyDescriptor( myObject, "c" ) ); // {value: 3, writable: false, enumerable: false, configurable: true}
    console.log( Object.getOwnPropertyDescriptors( myObject, "c" ) ); // {a: {…}, b: {…}, c: {…}, d: {…}, e: {…}}
  }


  {
    class Car {
      constructor ( name, year ) {
        // properties
        this.name = name;
        this.year = year;
      }

      // Class Methods
      age () {
        let date = new Date();
        return date.getFullYear() - this.year;
      }

      // send parameters to Class methods:
      country ( x ) {
        return `made in ${ x }`;
      }
    }
    let myCar1 = new Car( "Ford", 2014 );
    console.log( myCar1 );                      // Car {name: 'Ford', year: 2014}

    let myCar2 = new Car( "Audi", 2019 );
    console.log( myCar2 );                      // Car {name: 'Audi', year: 2019}

    console.log( myCar2.age() );                // 2
    console.log( myCar2.country( "Syria" ) );   // made in Syria


    // Class Inheritance

    class MyCar {
      constructor ( brand ) {
        this.carname = brand;
      }
      msg () {
        return `i have a ${ this.carname }`;
      }
    }

    class Model extends MyCar {
      constructor ( brand, mod ) {
        super( brand );
        this.model = mod;
      }
      show () {
        return `${ this.msg() } ,it is a ${ this.model }}`;
      }
    }

    let myCarr = new Model( "Ford", "Mustang" );

    console.log( myCarr );
    console.log( myCarr.show() );







    function Person ( name, age ) {
      this.name = name;
      this.age = age;
    }

    const sami = new Person( "sami", 28 );
    console.log( sami );                      // Person {name: 'sami', age: 28}

    // Getters and Setters

    class CarB {
      constructor ( brand ) {
        this._name = brand;
      }
      get cnam () {
        return this._name;
      }
      set cnam ( x ) {
        this._name = x;
      }
    }
    let CarB1 = new CarB( "volvo" );
    console.log( CarB1 );             // CarB {name: 'volvo'}
    console.log( CarB1.cnam );        // volvo

    CarB1.cnam = "sami";
    console.log( CarB1 );             // CarB {name: 'sami'}

    // Static Methods
    class Car {
      constructor ( name ) {
        this.name = name;
      }
      static hello () {
        return "Hello!!";
      }
    }

    let myCar = new Car( "Ford" );

    // You can call 'hello()' on the Car Class:
    console.log( Car.hello() );

    // But NOT on a Car Object:
    console.log( Car.hello() );
    // this will raise an error.

    // If you want to use the myCar object inside the static method, you can send it as a parameter:
    class Car {
      constructor ( name ) {
        this.name = name;
      }
      static hello ( x ) {
        return "Hello " + x.name;
      }
    }
    let myCar = new Car( "Ford" );
    console.log( Car.hello( myCar ) );

    {/* Problem Solving
Time for some OOP fun!
Define a class Person with the following properties:

= A constructor that accepts 4 arguments:
  - firstName/FirstName (defaults to "John" if not set),
  - lastName/LastName (defaults to "Doe" if not set),
  - age/Age (defaults to 0 if not set) ,
  - gender/Gender (defaults to "Male" if not set).
= A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
= A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName
    - returns "Welcome to Planet Earth raceName".
    - For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
*/

      // Solution

      class Person {
        constructor ( firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male' ) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.age = age;
          this.gender = gender;
        }
        sayFullName () { return this.firstName + " " + this.lastName; };
        static greetExtraTerrestrials ( raceName ) { return `Welcome to Planet Earth ${ raceName }`; }
      }

      const x = new Person();

      console.log( x.firstName );                                          // John
      console.log( x.lastName );                                           // Doe
      console.log( x.age );                                                // 0
      console.log( x.gender );                                             // Male
      console.log( x.sayFullName() );                                      // John Doe
      console.log( x.greetExtraTerrestrials( 'pro' ) );                    // Error because the method is static for Person not for x

      console.log( Person.greetExtraTerrestrials( 'Pro in programing' ) ); // Welcome to Planet Earth Pro in programing
    }
  }
}
//  Date
{
  // – Date And Time Introduction
  {
    let dateNow = new Date();
    console.log( dateNow );                       // Tue Aug 09 2022 22:27:04 GMT+0100 (British Summer Time)
    console.log( Date.now() );                    // 1660080492092       ==> 1000 Mill = 1 second

    let seconds = Date.now() / 1000;
    console.log( seconds );

    let minutes = seconds / 60;
    console.log( minutes );

    let hours = minutes / 60;
    console.log( hours );

    let days = hours / 24;
    console.log( days );

    let weeks = days / 7;
    console.log( weeks );

    let months = weeks / 4;
    console.log( months );

    let years = days / 365;
    console.log( years );
  }
  // – Get Date And Time
  {
    let dateNow = new Date();
    let birthday = new Date( "Aug 20, 93" );

    console.log( dateNow );                                             // Tue Aug 09 2022 22:45:53 GMT+0100 (British Summer Time)
    console.log( birthday );                                            // Fri Aug 20 1993 00:00:00 GMT+0100 (British Summer Time)

    let age = dateNow - birthday;
    console.log( ( age / 1000 / 60 / 60 / 24 / 365 ).toFixed() );       // 29

    console.log( dateNow );
    console.log( dateNow.getTime() );                                   // 1660081902817
    console.log( dateNow.getDate() );                                   // 9
    console.log( dateNow.getFullYear() );                               // 2022
    console.log( dateNow.getMonth() );                                  // 7  => index of month
    console.log( dateNow.getDay() );                                    // 2  => index of day
    console.log( dateNow.getHours() );                                  // 22
    console.log( dateNow.getMilliseconds() );                           // 817
    console.log( dateNow.getMinutes() );                                // 51
    console.log( dateNow.getSeconds() );                                // 42
  }
  // – Set Date And Time
  {
    /*
    Date And Time
    - setTime(Milliseconds)
    - setDate() => Day Of The Month [Negative And Positive]
    - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
    - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
    - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
    - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
    - setSeconds(Seconds => [0-59], MS => Optional [0-999])
    */
    let dateNow = new Date();
    console.log( dateNow );                                             // Tue Aug 09 2022 22:57:37 GMT+0100 (British Summer Time)

    dateNow.setTime( 0 );
    console.log( dateNow );                                             // Thu Jan 01 1970 01:00:00 GMT+0100 (Greenwich Mean Time)

    // after 10 seconds
    dateNow.setTime( 10000 );
    console.log( dateNow );                                             // Thu Jan 01 1970 01:00:10 GMT+0100 (Greenwich Mean Time)

    dateNow.setDate( 1 );
    console.log( dateNow );                                             // Mon Aug 01 2022 23:04:00 GMT+0100 (British Summer Time)


    dateNow.setFullYear( 2020, 1 );
    console.log( dateNow );                                             // Sun Feb 09 2020 23:07:32 GMT+0000 (Greenwich Mean Time)


    dateNow.setMonth( 1, 10 );
    console.log( dateNow );                                             // Thu Feb 10 2022 23:09:10 GMT+0000 (Greenwich Mean Time)

    dateNow.setHours( 10, 30, 40 );
    console.log( dateNow );                                             // Tue Aug 09 2022 10:30:40 GMT+0100 (British Summer Time)

  }
  // – Formatting Date And Time
  {
    /*
      Date And Time

      new Date(timestamp)
      new Date(Date String)
      new Date(Numeric Values)

      Format
      - "Oct 25 1982"
      - "10/25/1982"
      - "1982-10-25" => ISO International Standard
      - "1982 10"
      - "1982"
      - "82"
      - 1982, 9, 25, 2, 10, 0
      - 1982, 9, 25
      - "1982-10-25T06:10:00Z"

      Date.parse("String") // Read Date From A String
    */
    console.log( Date.parse( "Aug 20 1993" ) );

    let date1 = new Date( 0 );
    console.log( date1 );                                                       // Thu Jan 01 1970 01:00:00 GMT+0100 (Greenwich Mean Time)

    let date2 = new Date( 745801200000 );
    console.log( date2 );                                                       // Fri Aug 20 1993 00:00:00 GMT+0100 (British Summer Time)

    let date3 = new Date( "8-20-1993" );
    console.log( date3 );                                                       // Fri Aug 20 1993 00:00:00 GMT+0100 (British Summer Time)

    let date4 = new Date( "1993-8-20" );
    console.log( date4 );                                                       // Fri Aug 20 1993 00:00:00 GMT+0100 (British Summer Time)

    let date5 = new Date( "1993-8" );
    console.log( date5 );                                                       // Sun Aug 01 1993 00:00:00 GMT+0100 (British Summer Time)

    let date6 = new Date( "93" );
    console.log( date6 );                                                       // Fri Jan 01 1993 00:00:00 GMT+0000 (Greenwich Mean Time)

    let date7 = new Date( 1993, 7, 20, 2, 8, 0 );
    console.log( date7 );                                                       // Fri Aug 20 1993 02:08:00 GMT+0100 (British Summer Time)

    let date8 = new Date( 1993, 7, 20 );
    console.log( date8 );                                                       // Fri Aug 20 1993 00:00:00 GMT+0100 (British Summer Time)

    let date9 = new Date( "1993-08-25T06:10:00Z" );
    console.log( date9 );                                                       // Wed Aug 25 1993 07:10:00 GMT+0100 (British Summer Time)

    let date10 = new Date( "1993-08-25T06:10:00" );
    console.log( date10 );                                                      // Wed Aug 25 1993 06:10:00 GMT+0100 (British Summer Time)
  }
  // – Tracking Operations Time
  {
    /*
      Date And Time
      - Track Operations Time

      Search
      - performance.now()
      - performance.mark()
    */

    // Start Time
    let start = new Date();

    let a = performance.now();
    console.log( a );
    // operation

    for ( let i = 0; i < 10000; i++ ) {
      document.write( `<div>${ i }</div>` );
    }

    // End Time
    let end = new Date();

    // operation Duration
    let duration = end - start;
    console.log( duration );

  }
  // How to get the name of the day
  {
    const weekday = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

    let d = new Date( dataTime ).getDay();          // 2
    let day = weekday[ d ];

    console.log( day );                             // Tuesday

    /* ----------------------------------------------------------- */
  }
  // format Time as 00:00 AM
  {

    function formatAMPM ( date ) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';

      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }

    console.log( formatAMPM( new Date() ) );        // 6:10 pm

  }
}
// – Generator Function
{
  // – Generator Function Introduction
  {
    /*
    Generators
    - Generator Function Run Its Code When Required.
    - Generator Function Return Special Object [Generator Object]
    - Generators Are Iterable
  */

    function* generateNumbers () {
      yield 1;
      console.log( "Hello After Yield 1" );
      yield 2;
      yield 3;
      yield 4;
    }

    let generator = generateNumbers();

    console.log( typeof generator );                          // object
    console.log( generator );                                 // generateNumbers {<suspended>}

    console.log( generator.next() );
    console.log( generator.next() );
    console.log( generator.next() );
    console.log( generator.next() );
    console.log( generator.next() );

    /* Output
      {value: 1, done: false}
      main.js:12 Hello After Yield 1
      main.js:24 {value: 2, done: false}
      main.js:25 {value: 3, done: false}
      main.js:26 {value: 4, done: false}
      main.js:27 {value: undefined, done: true}
    */

    for ( const value of generateNumbers() ) {
      console.log( value );
    }
    /* Output
        main.js:39 1
        main.js:12 Hello After Yield 1
        main.js:39 2
        main.js:39 3
        main.js:39 4
     */


    for ( const value of generator ) {
      console.log( value );
    }
    /* output
       none because th done is true when i use generator.next() 5 times
    */

    let generatorTest = [ 0, ...generateNumbers() ];
    console.log( generatorTest );

    /* output
       main.js:12 Hello After Yield 1
       main.js:58 (5) [0, 1, 2, 3, 4]
    */
  }
  // – Delegate Generator Function
  {

    function* generateNums () {
      yield 1;
      yield 2;
      yield 3;
    }

    function* generateLetters () {
      yield "A";
      yield "B";
      yield "C";
    }

    function* generateAll () {
      yield* generateNums();
      yield* generateLetters();
      yield* [ 4, 5, 6 ];  // * IF NOT USE * WILL RETURN ARR INTO ITERATOR
    }

    let generator = generateAll();
    console.log( generator );                               // generateAll {<suspended>}
    console.log( generator.next() );                        // {value: 1, done: false}
    console.log( generator.next() );                        // {value: 2, done: false}
    console.log( generator.next() );                        // {value: 3, done: false}
    console.log( generator.next() );                        // {value: 'A', done: false}
    // console.log( generator.return("HHH") );                   // RETURN WELL MAKE DONE IS TRUE AND STOP ITERATOR
    console.log( generator.next() );                        // {value: 'B', done: false}
    console.log( generator.next() );                        // {value: 'C', done: false}
    console.log( generator.next() );                        // {value: 4, done: false}
    console.log( generator.next() );                        // {value: 5, done: false}
    console.log( generator.next() );                        // {value: 6, done: false}
    console.log( generator.next() );                        // {value: undefined, done: true}






  }
  // – Generate Infinite Numbers
  {
    /*
      Generators
      - Generate Infinite Numbers
      - Use Return Inside Generators
    */

    function* generateNumbers () {
      // yield 1;
      // yield 2;
      // return "A";
      // yield 3;
      // yield 4;
      let index = 0;

      while ( true ) {
        yield index++;
      }
    }

    let generator = generateNumbers();

    console.log( generator.next() );
    console.log( generator.next() );
    console.log( generator.next() );
    console.log( generator.next() );

    /* oUTPUT
    main.js:24 {value: 0, done: false}
    main.js:25 {value: 1, done: false}
    main.js:26 {value: 2, done: false}
    main.js:27 {value: 3, done: false}
     */

  }
}
// javascript Module
{
  // – Module Import And Export
  {
    // add type = "module" to attr link script into html
    { // main.js
      export let a = 10;
      export let arr = [ 1, 2, 3, 4 ];

      export function saySomeThing () {
        return 'SomeThing';
      }

      // method 2 export
      /*
        let a = 10;
        let arr = [ 1, 2, 3, 4 ];

        function saySomeThing () {
          return 'SomeThing';
        }

        export {
          a, arr, saySomeThing
        };
      */
    }
    { // app.js
      import { a, arr, saySomeThing as s } from "./main.js";

      console.log( a );                                     // 10
      console.log( arr );                                   // (4) [1, 2, 3, 4]
      console.log( s() );                        // SomeThing

    }
  }
  // – Named vs Default Export And Import All
  {
    /*
    Modules
    - Export Alias
    - Named Export
    - Default Export
    - Import All
  */

    { // main.js
      let a = 10;
      let arr = [ 1, 2, 3, 4 ];

      function saySomeThing () {
        return 'SomeThing';
      }

      export { a as myNumber, arr, saySomeThing };
      export default function sayHello () {              // WE CAN USE ANONYMOUS FUNC
        return 'hello';
      }
    }
    { //app.js
      // import sayHello, { myNumber, arr, saySomeThing as s } from "./main.js";
      import * as all from "./main.js";
      console.log( all );
      console.log( all.myNumber );                              // 10
      console.log( all.arr );                                   // (4) [1, 2, 3, 4]
      console.log( all.saySomeThing() );                        // SomeThing
      console.log( all.default() );                             // hello



    }
  }
}
// AJAX + JSON
{
  // What Is JSON ?
  {
    // يمكنك الفصل بين كل JSON Object والآخر عن طريق علامة ال Comma “,” ووضعهم كلهم داخل Square Brackets []
    /*
      - JavaScript Object Notation
      - Format For Sharing Data Between Server And Client
      - JSON Derived From JavaScript
      - Alternative To XML
      - File Extension Is .json

      Why JSON ?
      - Easy To Use And Read
      - Used By Most Programming Languages And Its Frameworks
      - You Can Convert JSON Object To JS Object And Vice Versa

      JSON vs XML
      ===================================================
      = Text Based Format      = Markup Language        =
      = Lightweight            = Heavier                =
      = Does Not Use Tags      = Using Tags             =
      = Shorter                = Not Short              =
      = Can Use Arrays         = Cannot Use Arrays      =
      = Not Support Comments   = Support Comments       =
      ===================================================
    */
  }
  // – JSON Syntax And Compare With JS Object
  {
    /*
      JSON Syntax
      - Data Added Inside Curly Braces {  }
      - Data Added With Key : Value
      - Key Should Be String Wrapped In Double Quotes
      - Data Separated By Comma
      - Square Brackets [] For Arrays
      - Curly Braces {} For Objects

      Available Data Types
      - String
      - Number
      - Object
      - Array
      - Boolean Values
      - null
    */
  }
  // – Parse And Stringify
  {
    /*
    JSON
    - JSON.parse => Convert Text Data To JS Object
    - JSON.stringify => Convert JS Object To JSON
    */

    const myObjFromServer = '{"username": "osama", "age": "39"}';
    console.log( typeof myObjFromServer );                                // String
    console.log( myObjFromServer );                                       // {"username": "osama", "age": "39"}

    const myJsObj = JSON.parse( myObjFromServer );
    console.log( typeof myJsObj );                                        // object
    console.log( myJsObj );                                               // {username: 'osama', age: '39'}

    myJsObj[ "username" ] = "Elzero";
    myJsObj[ "age" ] = 29;

    console.log( typeof myJsObj );                                        // object
    console.log( myJsObj );                                               // {username: 'osama', age: '39'}

    const myObjToServer = JSON.stringify( myJsObj );

    console.log( typeof myObjToServer );                                  // string
    console.log( myObjToServer );                                         // {"username":"Elzero","age":29}
  }
  // – Asynchronous vs Synchronous Programming
  {
    /*
      To Understand Ajax, Fetch, Promises

      Asynchronous vs Synchronous Programming
      - Meaning

      Synchronous
      - Operations Runs in Sequence
      - Each Operation Must Wait For The Previous One To Complete

      Asynchronous
      - Operations Runs In Parallel
      - This Means That An Operation Can Occur while Another One Is Still Being Processed

      - Facebook As Example
      - Simulation

      Search
      - JavaScript Is A Single-Threaded
      - Multi Threaded Languages
    */

    // Synchronous;

    // console.log( "1" );
    // console.log( "2" );
    // window.alert( "Operation" );
    // console.log( "3" );

    // Asynchronous
    // console.log( "1" );
    // console.log( "2" );
    // setTimeout( () => console.log( "Operation" ), 3000 );
    // console.log( "3" );
  }
  // – Call Stack And Web API
  {
    /*
      To Understand Ajax, Fetch, Promises

      Call Stack || Stack Trace
      -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
      -- Mechanism To Make The Interpreter Track Your Calls
      -- Work Using LIFO Principle => Last In First Out
      -- Code Execution Is Synchronous.
      -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

      Web API
      -- Methods Available From The Environment => Browser
    */

    setTimeout( () => {
      console.log( "Web API" );
    }, 0 );

    function one () {
      console.log( "One" );
    }
    function two () {
      one();
      console.log( "Two" );
    }
    function three () {
      two();
      console.log( "Three" );
    }

    three();

    /*
    =================================
    console.log("One");
    =================================
    function one() {
      console.log("One");
    }
    =================================
    function two() {
      one();
      console.log("Two");
    }
    =================================
    function three() {
      two();
      console.log("Three");
    }
    =================================
    */

    console.log( "#####" );
    console.log( "One" );
    console.log( "Two" );
    console.log( "Three" );
  }
  // – Event Loop And Callback Queue
  {
    /*
      To Understand Ajax, Fetch, Promises

      Event Loop + Callback Queue

      Story
      - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
      - Call Stack Track All Calls
      - Every Function Is Done Its Poped Out
      - When You Call Asynchronous Function It Sent To Browser API
      - Asynchronous Function Like Settimeout Start Its Own Thread
      - Browser API Act As A Second Thread
      - API Finish Waiting And Send Back The Function For Processing
      - Browser API Add The Callback To Callback Queue
      - Event Loop Wait For Call Stack To Be Empty
      - Event Loop Get Callback From Callback Queue And Add It To Call Stack
      - Callback Queue Follow FIFO "First In First Out" Rule
    */

    console.log( "One" );
    setTimeout( () => {
      console.log( "Three" );
    }, 0 );
    setTimeout( () => {
      console.log( "Four" );
    }, 0 );
    console.log( "Two" );

    setTimeout( () => {
      console.log( myVar );
    }, 0 );

    let myVar = 100;
    myVar += 100;

  }
  // – What Is AJAX And Network Informations
  {
    /*
      AJAX
      - Asynchronous JavaScript And XML
      - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
      - It Use "XMLHttpRequest" Object To Interact With The Server
      - You Can Fetch Data Or Send Data Without Page Refresh
      - Examples
      --- Youtube Studio
      --- Google Drive
      --- Upload Article Photo
      --- Form Check Name

      Test new XMLHttpRequest();
      Request And Response
      Status Code
    */
    let req = new XMLHttpRequest();
    console.log( req );

  }
  // – Request and Response From Real API
  {
    /*
      Ajax
      - Ready State => Status Of The Request
      [0] Request Not Initialized
      [1] Server Connection Established
      [2] Request Received
      [3] Processing Request
      [4] Request Is Finished And Response Is Ready
      - Status
      [200] Response Is Successful
      [404] Not Found
    */

    let myRequest = new XMLHttpRequest();

    myRequest.open( "GET", "https://api.github.com/users/bakour1/repos", true );
    myRequest.send();

    console.log( myRequest );

    myRequest.onreadystatechange = function () {
      console.log( myRequest.readyState );
      console.log( myRequest.status );
      /* OUTPUT
        main.js:24 2
        main.js:25 200
        main.js:24 3
        main.js:25 200
        main.js:24 4
        main.js:25 200
      */

      if ( this.readyState === 4 && this.status === 200 ) {
        console.log( this.responseText );
      }
      // OUTPUT JSON FILE
    };

  }

}
//  Promise
{
  // const myPromise = new Promise( function ( myResolve, myReject ) {
  //   // "Producing Code" (May take some time)

  //   myResolve(); // when successful
  //   myReject();  // when error
  // } );

  // // "Consuming Code" (Must wait for a fulfilled Promise).
  // myPromise.then(
  //   function ( value ) { /* code if successful */ },
  //   function ( error ) { /* code if some error */ }
  // );
  // console.log( myPromise );

  /* -------------------------------------------------------------------------------------- */

  const myPromise = new Promise( function ( myResolve, myReject ) {
    setTimeout( function () { myResolve( "I love You !!" ); }, 3000 );
  } );

  myPromise.then( function ( value ) {
    console.log( value );
  } );

  const myProm = new Promise( function ( myRes, myRej ) {
    setTimeout( function () {
      myRes( "HELLLLLO" );
    }, 5000 );
  } );
  myProm.then( x => console.log( x ) );

  // -------------------------
  /*
  let myPromise = new Promise();

    myPromise.then();
    myPromise.catch();
    myPromise.finally();
  */
}

// advanced problem solving
{
  // generate Id from list numbers
  {
    function getId ( array ) {
      for ( let i = array.length - 1; i > 0; i-- ) {

        let j = Math.floor( Math.random() * i );
        let k = array[ i ];

        array[ i ] = array[ j ];
        array[ j ] = k;
      }
      return array.join( "" );
    }

    const points = [ 40, 100, 1, 5, 25, 10 ];

    console.log( getId( points ) );        // 10251004051
    console.log( getId( points ) );        // 40125510010
    console.log( getId( points ) );        // 10025401105
    console.log( getId( points ) );        // 51100104025
    console.log( getId( points ) );        // 12540100510
    console.log( getId( points ) );        // 10010152540
    console.log( getId( points ) );        // 25510401100
    console.log( getId( points ) );        // 11025510040
    console.log( getId( points ) );        // 10051254010
    console.log( getId( points ) );        // 11002510540
    console.log( getId( points ) );        // 10054025101
    console.log( getId( points ) );        // 40100110525
    console.log( getId( points ) );        // 10405251001
    console.log( getId( points ) );        // 25140510100
    console.log( getId( points ) );        // 40510251001

  }
  // largest word from a string or array
  {
    const findLongest = s => Math.max( ...s.split( " " ).map( x => x.length ) );      // findLongest word
    // method ((( 1 )))
    function longestOne ( str ) {

      // Split the string using regex
      str = str.match( /[a-zA-Z0-9]+/gi );

      // Creating a empty string to store largest word
      let largest = "";

      // Creating a for...loop to iterate over the array
      for ( let i = 0; i < str.length; i++ ) {
        // If the i'th item is greater than largest string
        // then overwrite the largest string with the i'th value
        if ( str[ i ].length > largest.length ) {
          largest = str[ i ];
        }
      }
      return largest;
    }

    console.log( longestOne( "pro in programming" ) );              // programming


    // method ((( 2 )))
    function longestTwo ( str ) {

      // Split the string into array
      str = str.split( " " );

      // Return the first sorted item of the Array
      return str.sort( ( a, b ) => b.length - a.length )[ 0 ];
    }

    console.log( longestTwo( "pro in programming" ) );              // programming

    /* ================================================================================== */

    function longestThree ( str ) {
      // Split the string into array
      str = str.split( " " );

      // Get the index of largest item of the array
      let index = str.reduce( ( acc, curr, i ) => {
        if ( curr.length > str[ acc ].length ) {
          return i;
        }
        return acc;
      }, 0 );

      return str[ index ];
    }
    console.log( longestThree( "pro in programming" ) );              // programming
  }
  // Rock Paper Scissors!
  {
    const rps = ( p1, p2 ) => {
      if ( p1 === p2 ) {
        return 'Draw!';
      };
      return `Player ${ /rockscissors|scissorspaper|paperrock/.test( p1 + p2 ) ? 1 : 2 } won!`;
    };
    /*
      rps('scissors','paper') // Player 1 won!
      rps('scissors','rock') // Player 2 won!
      rps('paper','paper') // Draw!
    */
  }
  // convert string to array by 6 methods
  {
    let str = "ProInPrograming";

    console.log( [ ...str ] );                  // 1
    console.log( Array.from( str ) );           // 2
    console.log( Array.of( ...str ) );          // 3
    console.log( str.split( '' ) );             // 4
    console.log( Object.values( str ) );        // 5
    console.log( Object.assign( [], str ) );    // 6

    // Output
    // (15) ['P', 'r', 'o', 'I', 'n', 'P', 'r', 'o', 'g', 'r', 'a', 'm', 'i', 'n', 'g']

    // console.log( [ ...new Set( str ) ] );    // 7
  }
  // convert  object to map
  {
    let myInfo = {
      username: "Osama",
      role: "Admin",
      country: "Egypt",
    };
    console.log( Object.entries( myInfo ) );
    let myInfoMap = new Map( Object.entries( myInfo ) );  // convert object to map
    console.log( myInfoMap );                             // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
    console.log( myInfoMap.size );                        // 3
    console.log( myInfoMap.has( 'role' ) );               // true
  }
  // concat array
  {
    let n1 = [ 1, 2, 3 ];
    let n2 = [ 4, 5, 6 ];

    console.log( [ ...n1, ...n2 ] );                                                        // 1
    console.log( n1.concat( n2 ) );                                                         // 2
    console.log( [].concat( n1, n2 ) );                                                     // 3
    console.log( ( n1.join( "" ) + "" + n2.join( "" ) ).split( "" ).map( ( e ) => +e ) );   // 4
    console.log( Array.from( [ n1, n2 ] ).flat() );                                         // 5

    n1.push( ...n2 );
    console.log( n1 );                                                                      // 6

    // Needed Output
    // [1, 2, 3, 4, 5, 6]
  }
  //  Cascading Subsets arrays
  {
    /*
      each_cons([1,2,3,4], 2)
        #=> [[1,2], [2,3], [3,4]]

      each_cons([1,2,3,4], 3)
        #=> [[1,2,3],[2,3,4]]
    */
    {
      const lst = [ 3, 5, 8, 13 ];

      function eachCons ( array, n ) {
        let arr = [];
        for ( let i = 0; i < array.length; i++ ) {
          arr.push( lst.slice( i, i + n ) );
        }
        return arr.filter( e => e.length === n );
      }

      console.log( eachCons( lst, 1 ) );   // [[3], [5], [8], [13]]
      console.log( eachCons( lst, 2 ) );   // [[3,5], [5,8], [8,13]]
      console.log( eachCons( lst, 3 ) );   // [[3,5,8], [5,8,13]]
    }
    {
      function eachCons ( array, n ) {
        const newArr = [];
        for ( let a = n, i = 0; a <= array.length; i++, a++ ) {
          newArr.push( array.slice( i, a ) );
        }
        return newArr;
      }
    }
  }
  // objDobleCate
  {
    const counts = {};
    let objDobleCate = {};
    let result = "";
    const sampleArray = [ 54, 32, 5, 11, 33, 35, 32, 17, 3, 3, 22, 4, 1, 6, 11, 33 ];

    sampleArray.forEach( function ( x ) {
      counts[ x ] = ( counts[ x ] || 0 ) + 1;
      if ( counts[ x ] > 1 ) {
        objDobleCate[ x ] = counts[ x ];
        result = Object.keys( objDobleCate ).length;
      }
    } );
  }
  // add dash after 4th number
  {
    let numberCard = '12345=6781234-5678';
    let setNumber1 = cleanNumber.replace( /(\d{4})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4" );
    console.log( setNumber1 );               // 1234-5678-1234-5678
  }

}
