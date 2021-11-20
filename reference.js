{ //intro
  //======>  document.querySelector----------selectthe tag and set the style
  {
    document.querySelector( "h1" ).style.color = "blue";
    document.querySelector( "h1" ).style.fontSize = '80px';
  }
  //======>  window.onload-------------set onload for load all the code before loaded page
  {
    window.onload = function () { //  set onload for load all the code before loaded page
      document.querySelector( "h1" ).style.color = "blue";
    };
  }
  // Writing into an HTML element, using innerHTML.
  // Writing into the HTML output using document.write().testing only
  // Writing into an alert box, using window.alert().
  // Writing into the browser console, using console.log().
  //======> window.alert------------ alert
  {
    window.alert( "hello from js file" );
  }
  //======> document.write---------- write p or h1 or span
  {
    document.write( "<h1>hello <span>Page</span></h1>" );

  }
  //======> document.write and css ..... write p or h1 or span  then selectthe tag and set the style
  {
    document.write( "<h1>Elzero</h1>" );
    window.onload = function () {
      document.write( "<h1>Elzero</h1>" );
      document.querySelector( "h1" ).style =
        "color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial";
    };
    // or
    document.write( "<h1>Elzero</h1>" );
    document.querySelector( "h1" ).style =
      "color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial";
    // or
    document.write( "<h1>Elzero</h1>" );
    document.querySelector( "h1" ).style.color = "blue";
    document.querySelector( "h1" ).style.fontSize = "80px";
    document.querySelector( "h1" ).style.fontWeight = "bold";
    document.querySelector( "h1" ).style.textAlign = "center";
    document.querySelector( "h1" ).style.fontFamily = "Arial";
  }

  //======> document.createElement------- create element
  {
    document.createElement( "" );
  }
  //======> console.log------------  print in consol
  // console is for web api not js
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
//======>  variable
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
//======> String Syntax + Character Escape Sequences
{
  /*
  \b  backslash
  \b	Backspace;
  \f	Form Feed;
  \n	New Line;
  \r	Carriage Return;
  \t	Horizontal Tabulator;
  \v	Vertical Tabulator; */
  console.log( a + " " + b );
  console.log( a, b );
  ///////////
  let a = 10;
  b = 20,
    c = b / a,
    d = b / a / c;

  console.log( `_${ c }${ d }_${ b }${ c }${ d }_${ b }${ c }${ d }_${ b }${ c }${ d }_${ b }` ); // _21_2021_2021_2021_20_
  console.log(
    '`I\'m In\n\\\\\nLove \\\\ """ \'\'\'\n++With ++\n\\"""\\"""\n""JavaScript""``'
  ); {
    console.log( 'Elzero Web "School"' );
    console.log( "Elzero Web 'School'" );
    console.log( "Elzero Web \"School\"" );
    console.log( 'Elzero \\ Web \'School\'' );
    console.log( "Elzero \
    Web \
    School");
    console.log( "Elzero\nWeb\nSchool" );
  }



  let a = 21;
  let b = 20;

  console.log( `_${ a }_${ b }${ a }_${ b }${ a }_${ b }${ a }_${ b }_` ); // _21_2021_2021_2021_20_
  console.log( '_' + `${ a }_${ b }`.repeat( 4 ) + '_' ); // _21_2021_2021_2021_20_

}
//======> Concatenation
{
  let a = "We Love";
  let b = "JavaScript";
  document.write( a + " " + b );
  console.log( a, b );

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
//======> arithmetic operators
{
  console.log( 10 + 20 );        //30
  console.log( 10 + "osama" );   //10osama

  console.log( 10 - 20 );        // -10
  console.log( 10 - "osama" );   // nan
  console.log( typeof ( NaN ) ); // number

  console.log( 10 * 20 );        // 200
  console.log( 10 * -20 );       // -200

  console.log( 20 / 5 );         // 4
  console.log( 20 / 3 );         // 6.666666666666667

  console.log( 2 ** 4 );         //16
  console.log( 2 * 2 * 2 * 2 );  // 16

  console.log( 10 % 2 );         // 0
  console.log( 11 % 2 );         // 1
  var even_or_odd = n => n & 1 ? 'Odd' : 'Even';

  console.log( +100 );           // 100
  console.log( +"100" );         // 100  (+) => covert to number
  console.log( +"-100" );        // -100
  console.log( +"osama" );       // nan
  console.log( +"15.5" );        // 15.5

  console.log( +0xff );          // 255
  console.log( +null );          // 0
  console.log( +false );         // 0
  console.log( +true );          // 1

  console.log( -100 );          // -100
  console.log( -"100" );        // -100
  console.log( -"-100" );       // 100
  console.log( -"osama" );      // nan
  console.log( -"15.5" );       // -15.5

  console.log( -0xff );        // -255
  console.log( -null );        // -0
  console.log( -false );       // -0
  console.log( -true );        // -1

  console.log( Number( "100" ) );               //100

  console.log( 200 + 15 % 3 + 190 + 10 - 400 ); // 0
}
//======>  type coercion (type casting)
{
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
  }
  {
    let a = 10;
    a = a + 20; // a+=20
    console.log( a ); // 30
    // a = 30;

    a += 100; // a = a + 100
    console.log( a ); //130
  }
  {
    let a = 10;
    a -= 100; // a = a - 100
    console.log( a ); //-90
  }
  {
    let a = 10;
    let b = "20";
    let c = 80;
    console.log( 10 * 20 + 15 % 3 + 190 + 10 - 400 );            // 0

    console.log( ++a + +b++ + +c++ - +a++ );                     //100
    console.log( 11 + 20 + 80 - 11 );                            //100

    console.log( ++a + -b + +c++ - -a++ + +a );                  //94
    console.log( 11 + -20 + 80 + 11 + +12 );                     //94

    console.log( --c + +b + --a * +b++ - +b * a + --a - +true ); //97
    console.log( 79 + 20 + 9 * 20 - 21 * 9 + 8 - 1 );            //97
  }
  {
    let d = "-100";
    let e = "20";
    let f = 30;
    let g = true;

    console.log( -d * +e + f % 3 * g );       //2000
    console.log( -d * +e + f % ++g );         //2000
    console.log( -( --d ) + +f + ++e * ++g ); //173
    console.log( -( --d ) * ++g - --f );      //173
  }
}
//======>  number
{
  // #018 – Arithmetic Operators
  {
    console.log( 10 + 20 );        //30
    console.log( 10 + "osama" );   //10osama

    console.log( 10 - 20 );        // -10
    console.log( 10 - "osama" );   // nan
    console.log( typeof ( NaN ) ); // number

    console.log( 10 * 20 );        // 200
    console.log( 10 * -20 );       // -200

    console.log( 20 / 5 );         // 4
    console.log( 20 / 3 );         // 6.666666666666667

    console.log( 2 ** 4 );         //16
    console.log( 2 * 2 * 2 * 2 );  // 16

    console.log( 10 % 2 );         // 0
    console.log( 11 % 2 );         // 1

  }
  // #019 – Unary Plus And Negation Operators
  {
    console.log( +100 );           // 100
    console.log( +"100" );         // 100  (+) => covert to number
    console.log( +"-100" );        // -100
    console.log( +"osama" );       // nan
    console.log( +"15.5" );        // 15.5

    console.log( +0xff );          // 255
    console.log( +null );          // 0
    console.log( +false );         // 0
    console.log( +true );          // 1

    console.log( -100 );          // -100
    console.log( -"100" );        // -100
    console.log( -"-100" );       // 100
    console.log( -"osama" );      // nan
    console.log( -"15.5" );       // -15.5

    console.log( -0xff );        // -255
    console.log( -null );        // -0
    console.log( -false );       // -0
    console.log( -true );        // -1

  }
  // #020 – Type Coercion
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
  }
  // #021 – Assignment Operators
  {
    let a = 10;
    a = a + 20; // a+=20
    console.log( a ); // 30
    // a = 30;

    a += 100; // a = a + 100
    console.log( a ); //130

    let a = 10;
    a -= 100; // a = a - 100
    console.log( a ); //-90
  }
  // #022 – Operators Challenges
  {
    let a = 10;
    let b = "20";
    let c = 80;
    console.log( 10 * 20 + 15 % 3 + 190 + 10 - 400 );            // 0

    console.log( ++a + +b++ + +c++ - +a++ );                     //100
    console.log( 11 + 20 + 80 - 11 );                            //100

    console.log( ++a + -b + +c++ - -a++ + +a );                  //94
    console.log( 11 + -20 + 80 + 11 + +12 );                     //94

    console.log( --c + +b + --a * +b++ - +b * a + --a - +true ); //97
    console.log( 79 + 20 + 9 * 20 - 21 * 9 + 8 - 1 );            //97

    let d = "-100";
    let e = "20";
    let f = 30;
    let g = true;

    console.log( -d * +e + f % 3 * g );       //2000
    console.log( -d * +e + f % ++g );         //2000
    console.log( -( --d ) + +f + ++e * ++g ); //173
    console.log( -( --d ) * ++g - --f );      //173
  }
  // #023 – Number
  {
    console.log( 1000000 );     //1000000
    console.log( 1_000_000 );   //1000000

    console.log( 1e6 );         //1000000
    console.log( 123e5 );       // 12300000
    console.log( 123e-5 );      // 0.00123

    console.log( 10 ** 6 );     //1000000
    console.log( 1000000.00 );  //1000000

    console.log( Number.MAX_SAFE_INTEGER ); // 9007199254740991
    console.log( Number.MIN_SAFE_INTEGER ); // -9007199254740991
    console.log( Number.MAX_VALUE );        // 1.7976931348623157e+308

    Number( true );             //  1
    Number( false );            //  0
    Number( "10" );             //  10
    Number( "  10" );           //  10
    Number( "10  " );           //  10
    Number( " 10  " );          //  10
    Number( "10.33" );          //  10.33
    Number( "10,33" );          //  NaN
    Number( "10 33" );          //  NaN
    Number( "John" );           //  NaN
    console.log( Number( new Date( "1970-01-02" ) ) );     // 86400000
    console.log( Number( new Date( "2017-09-30" ) ) );     // 1506729600000

  }
  //======>  number methods
  {
    console.log( ( 100 ).toString() );              // 100
    console.log( 100..toString() );                 // 100
    console.log( 100.00.toString() );               //100

    console.log( 100.555555.toFixed() );            // 101
    console.log( 100.555555.toFixed( 2 ) );         // 100.56

    console.log( Number( "100" ) );                 // 100
    console.log( Number( "100 osama" ) );           // nan

    console.log( +( "100" ) );                     // 100
    console.log( +( "100 osama" ) );               // nan

    console.log( parseInt( "100" ) );              // 100
    console.log( parseInt( "100 osama" ) );        // 100
    console.log( parseInt( "osama 100 osama" ) );  // nan

    console.log( parseFloat( "100 osama" ) );      // 100
    console.log( parseFloat( "100.55 osama" ) );   // 100.55
    console.log( parseFloat( " osama 100.55" ) );  // nan

    console.log( Number.isInteger( "100" ) );     // => is return true or false
    console.log( Number.isInteger( 100 ) );       // => integer => رقم صحيح
    console.log( Number.isInteger( 100.500 ) );   // false
    console.log( Number.isNaN( "osama" ) );       // false
    console.log( Number.isNaN( "osama" / 100 ) ); // true

    // #025 – Math Object

    console.log( Math.round( 99.2 ) );            // 99
    console.log( Math.round( 99.5 ) );            // 100

    console.log( Math.ceil( 99.5 ) );             // 100
    console.log( Math.ceil( 99.2 ) );             // 100

    console.log( Math.floor( 99.5 ) );            // 99
    console.log( Math.floor( 99.2 ) );            // 99

    console.log( Math.min( 10, 20, 40, -100, 100 ) ); // -100
    console.log( Math.max( 10, 20, 40, -100, 100 ) ); // 100
    let sumOfDifferences = ( arr ) => arr.length > 1 ? Math.max( ...arr ) - Math.min( ...arr ) : 0;
    const sumOfDifferences = arr => arr.sort( ( a, b ) => b - a ).shift() - arr.pop() || 0;
    const findLongest = s => Math.max( ...s.split( " " ).map( x => x.length ) );      // findLongest word


    console.log( Math.pow( 2, 4 ) );              // 16 , => 2**4

    console.log( Math.random() );                // random
    console.log( Math.floor( ( Math.random() * 5 ) + 0 ) ); // 0 || 1 || 2 || 3 || 4

    console.log( Math.trunc( 99.5 ) );           //99 => cut float

    console.log( Math.abs( "10.8" ) );// 10.8
    console.log( Math.abs( "5" ) );   // 5
    console.log( Math.abs( "-5" ) );  // 5
    console.log( Math.abs( 4 - 10 ) );// 6
    console.log( Math.abs( 4 ) );     // 4
    console.log( Math.abs( -4 ) );    // 4

    function distanceBetweenPoints ( a, b ) {
      return Math.hypot( a.x - b.x, a.y - b.y );//.toFixed(6)
    }
    console.log( distanceBetweenPoints( new Point( 1, 6 ), new Point( 4, 2 ) ) ); //5


    Math.imul( 2, 4 );          // 8
    Math.imul( -1, 8 );         // -8
    Math.imul( -2, -2 );        // 4
    Math.imul( 0xffffffff, 5 ); // -5
    Math.imul( 0xfffffffe, 5 ); // -10
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

    let a = 1_00;
    let b = 2_00.55;
    let c = 1e2;
    let d = 2.4;

    // 1 - Find Smallest Number In All Variables And Return Integer
    console.log( parseInt( Math.min( a, b, c, d ) ) );   // 2
    console.log( Math.trunc( Math.min( a, b, c, d ) ) ); // 2

    // 2 - Use Variables a + d One Time To Get The Needed Output
    console.log( d % d + Math.pow( a, 2 ) );            // 10000
    console.log( Math.pow( a, 2 ) * Math.pow( d, 0 ) ); // 10000
    console.log( Math.pow( a, Math.trunc( d ) ) );      // 10000
    console.log( a ** ( Math.floor( d ) ) );            // 10000

    // 3 - Get Integer "2" From d Variable With 4 Methods
    console.log( Math.trunc( d ) );                    // 2
    console.log( Math.floor( d ) );                    // 2
    console.log( Math.round( d ) );                    // 2
    console.log( parseInt( d + "sami" ) );             // 2
    console.log( parseInt( d ) );                      // 2
    console.log( d.toFixed() );                        // 2
    console.log( Math.ceil( --d ) );                       // 2

    // 4 - Use Variables b + d To Get This Valus
    console.log( ( Math.floor( b ) / Math.ceil( d ) ).toFixed( 2 ).toString() );
    // 66.67  => String;

    console.log( Math.round( ( Math.floor( b ) / Math.ceil( d ) ) ) );
    // 67    => number
  }
  // advanced
  {
    // toExponential()
    let x = 9.656;
    console.log( x.toExponential( 2 ) ); // returns 9.66e+0
    console.log( x.toExponential( 4 ) ); // returns 9.6560e+0
    console.log( x.toExponential( 6 ) ); // returns 9.656000e+0

    //toPrecision()
    let x = 9.656;
    console.log( x.toPrecision() );     // returns 9.656
    console.log( x.toPrecision( 2 ) );  // returns 9.7
    console.log( x.toPrecision( 4 ) );  // returns 9.656
    console.log( x.toPrecision( 6 ) );  // returns 9.65600

    //valueOf()
    let x = 123;
    console.log( x.valueOf() );            // returns 123
    console.log( ( 123 ).valueOf() );      // returns 123
    console.log( ( 100 + 23 ).valueOf() ); // returns 123
  }
}
//======> string methods
{
  var theName = "Sami";

  console.log( theName );                                    // Sami
  console.log( theName[ 1 ] );                               //  a
  console.log( theName[ 5 ] );                               // undefined -> when no  index print undefined

  console.log( theName.charAt( 1 ) );                        // a
  console.log( theName.charCodeAt( 0 ) );                    // 83
  console.log( theName.charAt( 5 ) );                        //   =>when no index print no thing
  console.log( theName.length );                             // 4  =>how many char

  console.log( theName.trim() );                            // Sami => for cut"delete" the spaces

  console.log( theName.toUpperCase() );                     // ..SAMI..
  console.log( theName.toLowerCase() );                     // ..sami..

  console.log( theName.trim().charAt( 2 ).toUpperCase() );  // M

  let text = "5";
  console.log( text.padStart( 4, 0 ) );                    // 0005
  console.log( text.padStart( 3, 0 ) );                    // 005
  console.log( text.padStart( 3, 8 ) );                    // 885

  {/*  padStart || stringy( 7 ) ⇛ 1010101 */
    const stringy = x => ''.padStart( x, '10' );
    /*
    padStart(targetLength)
    padStart(targetLength, padString)
     */
    console.log( stringy( 7 ) );   // 1010101

  }

  console.log( text.padEnd( 4, 0 ) );                      // 5000
  console.log( text.padEnd( 3, 0 ) );                      // 500
  console.log( text.padEnd( 3, 8 ) );                      // 588

  let str = "Please locate where 'locate' occurs!";
  str.lastIndexOf( "locate" );                             // 21

  let text = "The rain in SPAIN stays mainly in the plain";
  console.log( text.match( /ain/g ) );            // Returns an array [ain,ain,ain]
  console.log( text.match( /ain/i ) );            // Returns an array (4) ['ain', 'AIN', 'ain', 'ain']

  var a = "Elzero Web School";
  console.log( a.replace( "Web", "Site" ) );               // Elzero Site School
  console.log( a.replace( /WEB/i, "Site" ) );              // Elzero Site School
  console.log( a.replace( /WEB/g, "Site" ) );              // Elzero wib School

  let str2 = "one.two.three";
  console.log( str2.replace( /./g, '-' ) ); // ----------------
  console.log( str2.replace( /\./g, '-' ) ); // one-two-three


  replace( /[\u4e00-\u9fff\u3400-\u4dff\uf900-\ufaff]/g, '' );
  s.replace( /[015]/g, e => ( { '0': 'O', '1': 'I', '5': 'S' } )[ e ] );

  function fakeBin ( x ) {
    return x.replace( /\d/g, d => d < 5 ? 0 : 1 );
  }
  console.log( fakeBin( '45385593107843568' ) ); // 01011110001100111


  console.log( a.indexOf( "Web" ) );                      // 7
  console.log( a.indexOf( "Web", 8 ) );                   //-1

  console.log( a.search( "Web" ) );                      // 7

  console.log( a.indexOf( "o" ) );                        // 5

  console.log( a.lastIndexOf( "o" ) );                    // 15
  console.log( a.lastIndexOf( "Web" ) );                  // 7

  console.log( a.slice( 0 ) );                           // Elzero Web School
  console.log( a.slice( 7 ) );                           //        Web School

  console.log( a.slice( 2, 6 ) );                        //    zero
  console.log( a.slice( 7, 10 ) );                       //         Web

  console.log( a.slice( -5 ) );                          //             chool
  console.log( a.slice( -5, -3 ) );                      //             ch

  console.log( a.repeat( 3 ) );                          //Elzero Web SchoolElzero Web SchoolElzero Web School

  // Converting a String to an Array
  console.log( a.split() );                             // (1) ['Elzero Web School']
  console.log( a.split( " " ) );                        // (3) ['Elzero', 'Web', 'School']

  console.log( a.split( " ", 2 ) );                     // (2) ['Elzero', 'Web']
  console.log( a.split( "", 5 ) );                      // (5) ['E', 'l', 'z', 'e', 'r']

  var a = "Elzero Web School";

  console.log( a.substring() );                        // Elzero Web School
  console.log( a.substring( 2 ) );                     //   zero Web School
  console.log( a.substring( 2, 6 ) );                  //   zero
  console.log( a.substring( 6, 2 ) );                  // Elzero Web School zero => when i put max value before min will fix
  console.log( a.substring( -10 ) );                   // Elzero                 => when i put -num  will fix to 0
  console.log( a.substring( -10, 6 ) );                // Elzero

  console.log( a.substring( a.length - 1 ) );          //               l
  console.log( a.substring( a.length - 2 ) );          //              ol

  var b = 6;
  console.log( b.padStart( 3, 0 ) );                   // 006
  console.log( b.padEnd( 3, 0 ) );                     // 600

  console.log( a.includes( "Web" ) );                 // true
  console.log( a.includes( "Web", 8 ) );              // false
  console.log( a.includes( "Web", 6 ) );              // true
  console.log( a.includes( "sami" ) );                // false

  console.log( a.startsWith( "Web" ) );              // false
  console.log( a.startsWith( "sami" ) );             // false
  console.log( a.startsWith( "Web", 7 ) );           // true
  console.log( a.startsWith( "E" ) );                // true
  console.log( a.startsWith( "E", 3 ) );             // false

  console.log( a.endsWith( "o" ) );                  // false
  console.log( a.endsWith( "l" ) );                  // true
  console.log( a.endsWith( "o", 6 ) );               // true
  console.log( a.endsWith( "ro", 6 ) );              // true
  console.log( a.endsWith( "E", 1 ) );               // true

  console.log( a.split( " " ) );                     //  (3) ['Elzero', 'Web', 'School']
  console.log( a.split( " ", 2 ) );                  //  (2) ['Elzero', 'Web'] ==> 2 = limit

  let hexToDec = hexString => parseInt( hexString, 16 );    // Hex to Decimal "FF" || 255

  // Include This Method In Your Solution [slice, charAt]
  console.log( a.charAt( 2 ) + a.slice( 3, 6 ) );   // Zero
  console.log( a.slice( 2, 6 ) );                   // Zero

  // 8 H
  console.log( a.charAt( 13 ).toUpperCase().repeat( 8 ) ); // HHHHHHHH

  // ReturnArray
  console.log( a.split( " ", 1 ) );                // ["Elzero"]

  // Use Only "substr" Method + Template Literals In Your Solution
  console.log( `${ a.substr( 0, 6 ) }${ a.substr( 10 ) }` ); // Elzero School
  console.log( a.substr( 0, 6 ) + a.substr( 10 ) );          // Elzero School
  console.log( a.substr( 0, 6 ) + " " + a.substr( 11 ) );    // Elzero School

  // Solution Must Be Dynamic Because String May Changes
  // eLZERO WEB SCHOOl
  console.log( a.charAt( 0 ).toLowerCase() + a.slice( 1, a.length - 1 ).toUpperCase() + a.charAt( a.length - 1 ).toLowerCase() );
  console.log( a[ 0 ].toLowerCase() + a.slice( 1, a.length - 1 ).toUpperCase() + a.charAt( a.length - 1 ).toLowerCase() );
  console.log( a[ 0 ].toLowerCase() + a.substr( 1, a.length - 2 ).toUpperCase() + a.charAt( a.length - 1 ).toLowerCase() );
  console.log( a[ 0 ].toLowerCase() + a.substring( 1, a.length - 1 ).toUpperCase() + a.charAt( a.length - 1 ).toLowerCase() );

  let word = "Elzero";
  let letterZ = "z";
  let letterE = "e";
  let letterO = "O";

  console.log( word.includes( letterZ ) );                 // True
  console.log( word.startsWith( letterE.toUpperCase() ) ); // True
  console.log( word.endsWith( letterO.toLowerCase() ) );   // True
}
//Conditions
{
  // #031 – Comparison Operators
  {
    console.log( 10 == "10" ); // true
    console.log( -100 == "-100" ); // true
    console.log( 10 == "6" ); // false

    console.log( 10 != "10" ); // false
    console.log( -100 != "-100" ); // false
    console.log( 10 != "6" ); // true

    console.log( 10 === "10" ); // false
    console.log( -100 === "-100" ); // false
    console.log( 10 === "6" ); // false
    console.log( "10" === "10" ); // true
    console.log( 10 === 10 ); // true
    console.log( 10 !== 10 ); // false

    console.log( 10 > 10 ); // false
    console.log( 10 >= 10 ); // true

    console.log( typeof "Osama" === typeof "Ahmed" ); // true
  }
  // #032 – Logical Operators{
  {
    console.log( true ); // true
    console.log( !true ); // false
    console.log( 10 == "10" ); // true
    console.log( !( 10 == "10" ) ); // false

    console.log( 10 == "10" && 10 > 8 ); // true
    console.log( 10 == "10" && 10 > 8 && 10 >= 10 ); // true
    console.log( 10 == "10" && 10 > 8 && 10 >= 20 ); // false

    console.log( 10 == "30" || 5 > 8 ); // false
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
    console.log( `the price is ${ price || 200 }` );// the price is 200
    console.log( `the price is ${ price ?? 200 }` );//the price is 0
  }
  // #038 – Switch Statement
  {
    let day = 4;

    switch ( day ) {
      default:
        console.log( "UnKnown Day" );
        break;
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
    // assign one
    // [  1  ]
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
    }
    // [  2  ]
    {
      let num1 = 10;
      let num2 = 20;
      console.log( num1 !== num2 ); // true
      console.log( num1 != num2 ); // true
      console.log( typeof num1 === typeof num2 ); // true
      console.log( num2 > num1 ); // true
      console.log( num2 >= num1 ); // true
      console.log( num1 < num2 ); // true
      console.log( num1 <= num2 ); // true
      console.log( num1 != true ); // true
    }
    // [  3  ]
    {
      let a = 20;
      let b = 30;
      let c = 10;

      console.log( a < b && a > c || a < b ); // true
      console.log( a + b > a + c ); // true
      console.log( !( a > b ) && !( a > b ) && !( a < c ) && !( a < c ) ); // true
    }
    //assign two
    // [  1  ]
    {
      let num = 120;
      if ( num < 10 ) {
        console.log( `00${ num }` );
      } else if ( num > 10 && num < 100 ) {
        console.log( `0${ num }` );
      } else if ( num >= 100 ) {
        console.log( num );
      }
    }
    // [  2  ]
    {
      let num1 = 9;
      let str = "9";
      let str2 = "20";

      if ( num1 == str ) {
        console.log( "{num1} Is The Same Value As {str}" );
      }
      if ( num1 == str && typeof num1 !== typeof str ) {
        console.log( "{num1} Is The Same Value As {str} But Not The Same Type" );
      }
      if ( num1 !== str2 ) {
        console.log( "{num1} Is Not The Same Value Or The Same Type As {str2}" );
      }
      if ( str != str2 && typeof str === typeof str2 ) {
        console.log( "{str} Is The Same Type As {str2} But Not The Same Value" );
      }
    }
    // [  3  ]
    {
      let num1 = 10;
      let num2 = 30;
      let num3 = "30";

      num3 > num1 && typeof num3 !== typeof num2 ? console.log( "30 Is Larger Than 10 And Type string Not The Same Type As number" ) : console.log( Error( "false" ) );
      num3 > num1 && num3 == num2 && typeof num3 !== typeof num2 ? console.log( "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number" ) : console.log( false );
      num3 !== num1 && typeof num3 !== typeof num2 ? console.log( "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}" ) : console.log( false );
    }
    // [  4  ]
    {
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
    }
    // assign one
    {
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
// Array
{

  let myFriends = [ "Ahmed", "Mohamed", "Sayed", [ "Marwan", "Ali" ] ];
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

  let myFriends = [ "Ahmed", "Mohamed", "Sayed", "Alaa" ];
  console.log( myFriends.length );                            // 4

  myFriends[ 3 ] = "Sami";
  console.log( myFriends );                                   // (4) ['Ahmed', 'Mohamed', 'Sayed', 'Sami']

  myFriends[ 6 ] = "Gamal";
  console.log( myFriends );                                   // (7) ['Ahmed', 'Mohamed', 'Sayed', 'Sami', empty × 2, 'Gamal']
  console.log( myFriends.length );                            //  7

  let myFriends = [ "Ahmed", "Mohamed", "Sayed", "Alaa" ];
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


  // The pop() method returns the value that was "popped out":

  // The push() method adds a new element to an array (at the end):
  // The push() method returns the new array length:
  // The shift() method returns the value that was "shifted out":
  // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
  // The unshift() method returns the new array length.
  // Using delete may leave undefined holes in the array. Use pop() or shift() instead
  const sumOfDifferences = arr => arr.sort( ( a, b ) => b - a ).shift() - arr.pop() || 0;

  let myFriends = [ "Ahmed", "Mohamed", "Sayed", "Alaa" ];
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

  let myFriends = [ "Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed" ];

  console.log( myFriends );

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


  let myFriends = [ 10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10 ];
  console.log( myFriends );                 // (10) [10, 'Sayed', 'Mohamed', '90', 1000, 100, 20, '10', -20, -10]
  console.log( myFriends.sort() );          // (10) [-10, -20, 10, '10', 100, 1000, 20, '90', 'Mohamed', 'Sayed']
  console.log( myFriends.reverse() );       // (10) ['Sayed', 'Mohamed', '90', 20, 1000, 100, '10', 10, -20, -10]
  console.log( myFriends.sort().reverse() );// (10) ['Sayed', 'Mohamed', '90', 20, 1000, 100, 10, '10', -20, -10]
  // sort( ( a, b ) => a - b )  =>>> 1 2 3 4 ...

  let myFriends = [ "Ahmed", "Mohamed", "Ali", "Osama", "Gamal", "Ameer" ];

  console.log( myFriends );                 // (6) ['Ahmed', 'Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']
  console.log( myFriends.slice() );         // (6) ['Ahmed', 'Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']
  console.log( myFriends.slice( 1 ) );      // (5) ['Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']
  console.log( myFriends.slice( 1, 3 ) );   // (2) ['Mohamed', 'Ali']
  console.log( myFriends.slice( -3 ) );     // (3) ['Osama', 'Gamal', 'Ameer']
  console.log( myFriends.slice( 1, -2 ) );  // (3) ['Mohamed', 'Ali', 'Osama']
  console.log( myFriends.slice( -4, -2 ) ); // (2) ['Ali', 'Osama']

  console.log( myFriends );                 // return array not change

  // splice return new array
  //  splice(start[mand], delete count[opt][0 no remove], the items to add[opt])

  myFriends.splice( 0, 0, "Sameer", "Samara" );
  console.log( myFriends ); //(8) ['Sameer', 'Samara', 'Ahmed', 'Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']

  myFriends.splice( 0, 1 );
  console.log( myFriends ); //(7) ['Samara', 'Ahmed', 'Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']

  myFriends.splice( 0, 2 );
  console.log( myFriends ); //(5) ['Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']

  myFriends.splice( 2, 2, "Sameer", "Samara" );
  console.log( myFriends ); //(5) ['Mohamed', 'Ali', 'Sameer', 'Samara', 'Ameer']


  let myFriends = [ "Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer" ];
  let myNewFriends = [ "Samar", "Samah" ];
  let schoolFriends = [ "Haytham", "Shady" ];

  let allFriends = myFriends.concat( myNewFriends, schoolFriends, "Gameel", [ "one", "two" ] );

  console.log( allFriends );                // (13) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer', 'Samar', 'Samah', 'Haytham', 'Shady', 'Gameel', 'one', 'two']

  console.log( allFriends.join() );         // Ahmed,Sayed,Ali,Osama,Gamal,Ameer,Samar,Samah,Haytham,Shady,Gameel,one,two
  console.log( allFriends.join( "" ) );     // AhmedSayedAliOsamaGamalAmeerSamarSamahHaythamShadyGameelonetwo
  console.log( allFriends.join( " " ) );    // Ahmed Sayed Ali Osama Gamal Ameer Samar Samah Haytham Shady Gameel one two
  console.log( allFriends.join( " @ " ) );  // Ahmed @ Sayed @ Ali @ Osama @ Gamal @ Ameer @ Samar @ Samah @ Haytham @ Shady @ Gameel @ one @ two

  console.log( allFriends.join( " " ).toUpperCase() );  // AHMED SAYED ALI OSAMA GAMAL AMEER SAMAR SAMAH HAYTHAM SHADY GAMEEL ONE TWO

  [ 1, 2, 3 ].fill( 4 )                // [4, 4, 4]
  [ 1, 2, 3 ].fill( 4, 1 )             // [1, 4, 4]
  [ 1, 2, 3 ].fill( 4, 1, 2 )          // [1, 4, 3]
  [ 1, 2, 3 ].fill( 4, 1, 1 )          // [1, 2, 3]
  [ 1, 2, 3 ].fill( 4, 3, 3 )          // [1, 2, 3]
  [ 1, 2, 3 ].fill( 4, -3, -2 )        // [4, 2, 3]
  [ 1, 2, 3 ].fill( 4, NaN, NaN )      // [1, 2, 3]
  [ 1, 2, 3 ].fill( 4, 3, 5 );          // [1, 2, 3]
  Array( 3 ).fill( 4 );                 // [4, 4, 4]

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
// array.form()
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
// assign
{
  //[ one ]
  {
    let myFriends = [ "Ahmed", "Elham", "Osama", "Gamal" ];
    let num = 3;
    // Method 1
    lastIndex = myFriends.length;
    console.log( myFriends.slice( 0, --lastIndex ) ); // ["Ahmed", "Elham", "Osama"];

    // Method 2
    myFriends.pop();                     //return new array
    console.log( myFriends );              // ["Ahmed", "Elham", "Osama"];

    // or
    myFriends.length = num;
    console.log( myFriends );              // ["Ahmed", "Elham", "Osama"];

    //  or
    myFriends.splice( +false, +false );              //return new array
    console.log( myFriends );              // ["Ahmed", "Elham", "Osama"];
  }
  // [ two ]
  {
    let friends = [ "Ahmed", "Eman", "Osama", "Gamal" ];

    friends.pop();
    friends.shift();
    console.log( friends ); // ["Eman", "Osama"]

  }
  // [ three ]
  {
    let arrOne = [ "C", "D", "X" ];
    let arrTwo = [ "A", "B", "Z" ];
    let finalArr = [];

    // Write One Single Line Of Code
    finalArr = finalArr.concat( arrOne, arrTwo ).sort().reverse();

    console.log( finalArr ); // ["Z", "X", "D", "C", "B", "A"]
  }
  // [ four ]
  {
    let website = "Go";
    let words = [ `${ website }ogle`, "Facebook", [ "Elzero", "Web", "School" ] ];

    console.log( words[ website.length ][ 0 ].slice( website.length ).toUpperCase() ); // ZERO
  }
  // [ five ]
  {
    let needle = "JS";
    let haystack = [ "PHP", "JS", "Python" ];

    let needle = "JS";
    let haystack = [ "PHP", "JS", "Python" ];

    // Write 3 Solutions
    haystack[ 1 ] === needle ?
      console.log( "Found " ) :
      console.log( Error( "not found" ) );

    haystack.includes( needle ) === true ?
      console.log( "Found " ) :
      console.log( Error( "not found" ) );

    haystack.indexOf( needle ) === +true ?
      console.log( "Found " ) :
      console.log( Error( "not found" ) );

    haystack.lastIndexOf( needle ) === +true ?
      console.log( "Found " ) :
      console.log( Error( "not found" ) );


  }
  // [ six ]
  {
    let arr1 = [ "A", "C", "X" ];
    let arr2 = [ "D", "E", "F", "Y" ];
    let allArras = [];

    // Your Code Here
    arr1.splice( 0, arr1.length - true );
    arr2.splice( 0, arr1.length + true );
    allArras = arr2.concat( arr1 ).sort().join( "" ).toLowerCase();

    console.log( allArras ); // fxy

    // or

    arr2.splice( 0, arr1.length - true );
    allArras.push( arr2.shift(), arr1.pop(), arr2.pop() );
    allArras = allArras.join( "" ).toLowerCase();
    console.log( allArras ); // fxy
  }
  // [ Challenge ]
  {
    let zero = 0;
    let counter = 3;
    let my = [ "Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer" ];

    // one
    // method one
    my.splice( - --counter );
    my.reverse();
    console.log( my ); // ["Osama", "Elham", "Mazero", "Ahmed"];
    // method two
    my.length = ++counter;
    my.reverse();
    console.log( my ); // ["Osama", "Elham", "Mazero", "Ahmed"];

    // two
    console.log( my.slice( ++zero, counter ).reverse() ); // ["Elham", "Mazero"]

    // three
    console.log( my[ --counter ].slice( zero, counter-- ) + "" + my[ counter++ ].slice( counter ) ); // "Elzero"

    // four
    console.log( `"${ my[ 1 ].slice( - --counter ) }"` ); // "rO"
  }
}
// replace
{
  var a = "Elzero Web School";
  console.log( a.replace( "Web", "Site" ) );               // Elzero Site School
  console.log( a.replace( /WEB/i, "Site" ) );              // Elzero Site School
  console.log( a.replace( /WEB/g, "Site" ) );              // Elzero wib School

  let str2 = "one.two.three";
  console.log( str2.replace( /./g, '-' ) ); // ----------------
  console.log( str2.replace( /\./g, '-' ) ); // one-two-three


  str.replace( /\S+/g, 'sex' );
  str.replace( /\w+/g, 'sex' );
  str.replace( /[^ ]+/g, 'sex' );

  str.replace( / /g, "" );     // Remove String Spaces
  str.replace( /\s/g, '' );  // Remove String Spaces


  replace( /[\u4e00-\u9fff\u3400-\u4dff\uf900-\ufaff]/g, '' );
  str.replace( /[015]/g, e => ( { '0': 'O', '1': 'I', '5': 'S' } )[ e ] );

  const defineSuit = card => ( { '♣': `clubs`, '♦': `diamonds`, '♥': `hearts`, '♠': `spades` } )[ card.slice( -1 ) ];

  console.log( defineSuit( '3♣' ) ); // clubs

  function fakeBin ( x ) {
    return x.replace( /\d/g, d => d < 5 ? 0 : 1 );
  }

  console.log( fakeBin( '45385593107843568' ) ); // 01011110001100111

  function fakeBin ( x ) {
    return x.replace( /\d/g, d => d < 5 ? 0 : 1 );
  }
  console.log( fakeBin( '45385593107843568' ) ); // 01011110001100111

  s.replace( /!+$/, '' ); // remove last char (!)
  // RegExp
  const remove = s => s.replace( /[!]+$/g, '' );
}
// search regexp
{
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

}
// LOOP
{
  // while mean loop will work while the condition true
  // while loop will stop or break when the condition = false


  // #048 – Loop For And Concept Of Loop;
  {
    // first example

    for ( let i = 0; i < 10; i++ ) {
      /*
        for ([start] [stop] [step]) {}
      - i = 0  => will start loop from 0
      - i < 10 => is condition loop will work while i<10 => ...9
      - i++    => loop will add 1 every print 0 -> 1 -> 2 -> 3 ...9
      */
      console.log( i ); // 0  1  2  3  4  5  6  7  8  9
    }

    // second example

    for ( let i = 4; i < 8; i++ ) {
      /*
        - i = 4  => will start loop from 4
        - i < 8 => is condition loop will work while i<8 => ... 7
        - i++    => loop will add 1 every print 4 -> 5 -> 6 -> 7
      */
      console.log( i );
      /*
                              -  4
                              -  5
                              -  6
                              -  7
                               */
    }

  }
  // #049 – Looping On Sequences
  {
    let myFriends = [ "Osama", "Ahmed", "Sayed", "Ali", "Amira" ];

    console.log( myFriends[ 0 ] ); // Osama
    console.log( myFriends[ 1 ] ); // Ahmed
    console.log( myFriends[ 2 ] ); // Sayed
    console.log( myFriends[ 3 ] ); // Ali
    console.log( myFriends[ 4 ] ); // Amira

    for ( let i = 0; i < 5; i++ ) {

      /*
      - i = 0  => will start from index 0
      - i < 5 => will stop when i < 5 => ...4 =>it is myFriends.length
      - i++    => loop will add 1 every print 0 -> 1 -> 2 -> 3 -> 4
      */

      /* console.log(i)           -  0
                                  -  1
                                  -  2
                                  -  3
                                  -  4
      */
      // console.log(myFriends[0]);  5x Osama
      console.log( myFriends[ i ] );
      /*
                                          - Osama
                                          - Ahmed
                                          - Sayed
                                          - Ali
                                          - Amira
                                          */
    }


    // we learn  ===>>

    let myFriends = [ "Osama", "Ahmed", "Sayed", "Ali", "Amira" ];

    for ( let i = 0; i < myFriends.length; i++ ) {

      console.log( myFriends[ i ] );
    }
    /*
    - Osama
    - Ahmed
    - Sayed
    - Ali
    - Amira
    */


    // will add just string from array myFriends to array onlyNames

    // not loop

    let myFriends = [ 1, 2, "Osama", "Ahmed", "Sayed", "Ali", "Amira" ];
    let onlyNames = [];

    if ( typeof myFriends[ 0 ] === "string" ) {
      onlyNames.push( myFriends[ 0 ] ); // number not string
    }

    if ( typeof myFriends[ 1 ] === "string" ) {
      onlyNames.push( myFriends[ 1 ] ); // number not string
    }

    if ( typeof myFriends[ 2 ] === "string" ) {
      onlyNames.push( myFriends[ 2 ] ); // string
    }

    if ( typeof myFriends[ 3 ] === "string" ) {
      onlyNames.push( myFriends[ 3 ] ); // string
    }

    console.log( onlyNames ); // (2) ['Osama', 'Ahmed']



    // with loop

    let myFriends = [ 1, 2, "Osama", "Ahmed", 3, 8, "Sayed", "Ali", "Amira" ];

    let onlyNames = [];

    for ( let i = 0; i < myFriends.length; i++ ) {

      if ( typeof myFriends[ i ] === "string" ) {

        onlyNames.push( myFriends[ i ] );
      }
    }

    console.log( onlyNames ); // (5) ['Osama', 'Ahmed', 'Sayed', 'Ali', 'Amira']



    //  will add just number from array myFriends to array onlyNames

    let onlyNumber = [];

    for ( let i = 0; i < myFriends.length; i++ ) {

      if ( typeof myFriends[ i ] === "number" ) {

        onlyNumber.push( myFriends[ i ] );
      }
    }

    console.log( onlyNumber ); // (4) [1, 2, 3, 8]

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
  // #054 – Loop – While
  {
    let index = 0; // [step one] "initialize"

    while ( index < 10 ) { // [step two]"condition"

      console.log( index ); // start first step from 0

      index += 1; // [step three] after print index = 0 will add 1

    } // 0 ->  1 -> 2 -> 3 .. -> 9

    // will add condition if to while

    let index = 0;

    while ( index < 10 ) {

      console.log( index );

      index += 1;

      if ( index === 3 ) {

        break;

      }
    } // 0 -> 1 -> 2

    // will work by while for print array

    let products = [ "Keyboard", "Mouse", "Pen", "Pad", "Monitor" ];
    let index = 0;

    while ( index < products.length ) {

      console.log( products[ index ] );

      index += 1;
    }
    /*
      Keyboard
      Mouse
      Pen
      Pad
      Monitor
    */


    // #055 – Loop – Do, While

    // while loop =>  mean loop will work while the condition true
    // while loop => will stop or break when the condition = false
    // do         => will work the loop in first step(one loop) and then check the condition

    // while

    let products = [ "Keyboard", "Mouse", "Pen", "Pad", "Monitor" ];
    let i = 0;

    while ( false ) {

      console.log( i );
      i++;

    } // while loop will stop or break when the condition = false


    // do

    do {

      console.log( i ); // will print 0
      i++; // i = i + 1

    } while ( false );

    console.log( i ); // will print 1

    // and now will stop the loop because while is false
  }
  // assign 48 => 50
  // assign one
  {
    let start = 10;
    let end = 100;
    let exclude = 40;


    for ( let i = start; i <= end; i += start ) {
      if ( i === 40 ) {
        continue;
      }
      console.log( i );
    }
  }
  // assign two
  {
    let start = 10;
    let end = 0;
    let stop = 3;

    for ( i = start; i >= stop; i-- ) {
      i < start ?
        console.log( `0${ i }` ) :
        console.log( i );
    }
  }
  // assign three
  {
    let start = 1;
    let end = 6;
    let breaker = 2;
    for ( let i = start; i <= end; i++ ) {
      console.log( i );
      for ( let i = breaker; i < end; i += breaker ) {
        console.log( `-- ${ i }` );
      }
    }
  }
  // assign four
  {
    let index = 10;
    let jump = 2;
    let end = 0;

    for ( ; ; ) {
      console.log( index );
      index -= jump;
      if ( index === jump ) {
        break;
      }
    }
  }
  // assign five
  {

    let friends = [ "Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh" ];
    let letter = "a";
    let j = letter.length - true;

    for ( let i = letter.length - true; i < friends.length; i++ ) {
      if ( friends[ i ][ letter.length - true ] === letter.toUpperCase() ) {
        continue;
      }
      for ( ; ; ) {
        j++;
        if ( j < friends.length ) {
          break;
        }
      }
      console.log( `"${ j } => ${ friends[ i ] }` );
    }

    /* Output
    "1 => Sayed"
    "2 => Eman"
    "3 => Mahmoud"
    "4 => Osama"
    "5 => Sameh"
    */

  }
  // assign six
  {
    let start = 0;
    let swappedName = "elZerO";
    let outPut = "";

    for ( i = 0; i < swappedName.length; i++ ) {

      swappedName[ i ] === swappedName[ i ].toLowerCase()
        ? ( outPut += swappedName[ i ].toUpperCase() )
        : ( outPut += swappedName[ i ].toLowerCase() );
    }
    console.log( outPut );
  }
  // assign seven
  {
    {

      let start = 0;
      let mix = [ 1, 2, 3, "A", "B", "C", 4 ];


      for ( i = ++start; i < mix.length; i++ ) {

        if ( typeof mix[ i ] === "string" ) {
          continue;
        }

        console.log( mix[ i ] );
      }

      // Output
      // 2
      // 3
      // 4
    }
    {
      let start = 0;
      let mix = [ 1, 2, 3, "A", "B", "C", 4 ];


      for ( i = start; i < mix.length; i++ ) {

        if ( typeof mix[ i ] === "string" || mix[ i ] === 1 ) {
          continue;
        }

        console.log( mix[ i ] );
      }
    }
  }
  // Assignments For Lessons 54 To 56
  {
    let friends = [ "Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany" ];
    let index = 0;
    let counter = 0;
    let j = 0;

    for ( i = 0; i < friends.length; i++ ) {
      if ( friends[ i ][ 0 ] === "A" || typeof friends[ i ] === "number" ) {
        continue;
      }
      for ( ; ; ) {
        j++;
        if ( j <= friends.length ) {
          break;
        }
      }
      console.log( `"${ j } => ${ friends[ i ] }"` );
    }


    // Output
    // "1 => Sayed"
    // "2 => Mahmoud"
  }
  {
    let friends = [ "Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany" ];
    let index = 0;
    let counter = 0;

    while ( counter < friends.length ) {
      if ( typeof friends[ counter ] === "number" || friends[ counter ][ index ].toLowerCase() === "a" ) {
        friends.splice( counter, +true );
        continue;
      }
      console.log( `"${ counter + +true } => ${ friends[ counter ] } "` );
      counter++;
      if ( counter == friends.length ) {
        break;
      }
    }
  }

  // Loop Challenge

  {
    let myAdmins = [ "Ahmed", "Osama", "Sayed", "Stop", "Samera" ];

    let myEmployees = [ "Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar" ];
    let counter = 0;


    mainLoop: for ( let i = 0; i < myAdmins.length; i++ ) {
      if ( myAdmins[ i ] !== "Stop" ) {
        counter++;
      } else break;

    }
    document.write( `<div>We Have ${ counter } Admins</div>` );
    document.write( `<hr />` );

    for ( let j = 0; j < counter; j++ ) {

      document.write( "<div>" ); // div open tag
      document.write( `"The Admin For Team ${ j + 1 } is ${ myAdmins[ j ] }"` );
      document.write( "<h3>Team Members: </h3>" );


      let teamMembers = [];
      for ( let k = 0; k < myEmployees.length; k++ ) {
        if ( myEmployees[ k ][ 0 ] === myAdmins[ j ][ 0 ] ) {
          teamMembers.push( myEmployees[ k ] );
        }
      }


      for ( let k = 0; k < teamMembers.length; k++ ) {
        document.write( `<p>- ${ k + 1 } ${ teamMembers[ k ] }</p>` );
      }


      document.write( `</div>` );
      document.write( `<hr>` );
    }
  }
  // advanced
  {
    const fruits = [ "Banana", "Orange", "Apple", "Mango" ];
    let fLen = fruits.length;

    text = "<ul>";
    for ( let i = 0; i < fLen; i++ ) {
      text += "<li>" + fruits[ i ] + "</li>";
    }
    document.write( text += "</ul>" );
  }
}
// Functions
{
  // #057 – Function Intro And Basic Usage
  {
    // console.log( typeof console.log )      function build in function // log is func

    function nameFunction ( Parameter ) {
      //  task the function
    }
    nameFunction( "Argument" );              // declare the func for work
    /*
      Parameter like as variable
      Argument  like as value for variable
    */

    // EXAMPLE: ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    function sayHello ( userName ) {
      console.log( `Hello ${ userName }` );
    }

    sayHello( "Osama" );                    //Hello Osama
    sayHello( "Ahmed" );                    //Hello Ahmed
    sayHello( "Sami" );                     //Hello Sami
  }

  // #058 – Function Advanced Examples
  {
    // EXAMPLE: function with [two] parameter↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    function sayHello ( userName, age ) {
      console.log( `Hello ${ userName } Your Age is ${ age }` );
    }

    sayHello( "Osama" );          // Hello Osama Your Age is undefined
    sayHello( "Ahmed", 38 );      // Hello Ahmed Your Age is 38
    sayHello( "Sami", 18 );       // Hello Sami Your Age is 18

    // EXAMPLE: [condition] with function ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    function sayHello ( userName, age ) {
      age < 20 ?
        console.log( `App is Not For You` ) :
        console.log( `Hello ${ userName } Your Age is ${ age }` );
    }

    sayHello( "Osama", 40 );      // Hello Osama Your Age is 40
    sayHello( "Ahmed", 38 );      // Hello Ahmed Your Age is 38
    sayHello( "Sami", 18 );       // App is Not For You

    // EXAMPLE: [LOOP] with function ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    function generateYears ( start, end ) {
      for ( let i = start; i <= end; i++ ) {
        console.log( i );
      }
    }

    generateYears( 2017, 2021 );  /*
                                    2017
                                    2018
                                    2019
                                    2020
                                    2021
                                  */

    // EXAMPLE: [LOOP] ,[if],[3 par] function ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    // add parameter [exclude] for skip a year
    function generateYears ( start, end, exclude ) {
      for ( let i = start; i <= end; i++ ) {
        if ( i === exclude ) {
          continue;
        }
        console.log( i );
      }
    }

    generateYears( 1993, 2021, 2018 );  /*
                                          2017
                                          2019
                                          2020
                                          2021
                                        */
  }
  // #059 – Function Return Statement And Use Cases
  {
    // EXAMPLE: [with out return]↓↓↓↓↓↓↓↓↓↓
    function sayHello ( userName ) {
      `Hello ${ userName }`;
    }

    console.log( sayHello() );         // undefined
    console.log( sayHello( "Osama" ) );// undefined


    // EXAMPLE 1: with [return] ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    function sayHello ( userName ) {
      return `Hello ${ userName }`;
    }

    console.log( sayHello() );         // Hello undefined
    console.log( sayHello( "Osama" ) );// Hello Osama

    let result = sayHello( "Sami" );
    console.log( result );              // Hello Sami

    // EXAMPLE 2: with [return] ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    function calc ( num1, num2 ) {
      return num1 + num2;
      let x = 1;//return will stop all the task into func after line return
    }

    let myNumber = calc( 10, 20 );
    console.log( myNumber );            // 30
    console.log( myNumber + 100 );      // 130

    // EXAMPLE 3: return  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    function generate ( start, end ) {
      for ( let i = start; i <= end; i++ ) {
        if ( i === 15 ) {
          return `Interrupting message`;
        }
        console.log( i );
      }
    }

    generate( 10, 20 );                 /*
                                          10
                                          11
                                          12
                                          13
                                          14
                                        */
  }
  // #060 – Function Default Parameters
  {
    function sayHello ( userName, age ) {
      return `Hello ${ userName } Your Age is ${ age }`;
    }
    console.log( sayHello() );             // Hello undefined Your Age is undefined
    console.log( sayHello( "Sami", 28 ) ); // Hello Sami Your Age is 28


    // EXAMPLE: methods [one] will change undefine with message from me

    function sayHello ( userName, age ) {
      if ( age === undefined ) {
        age = "Unknown";
      }
      return `Hello ${ userName } Your Age is ${ age }`;
    }
    console.log( sayHello() );             // Hello undefined Your Age is Unknown
    console.log( sayHello( "Sami", 28 ) ); // Hello Sami Your Age is 28


    // EXAMPLE: methods [two] will change undefine with message from me

    function sayHello ( userName, age ) {
      age = age || "Unknown";
      userName = userName || "Unknown";
      return `Hello ${ userName } Your Age is ${ age }`;
    }
    console.log( sayHello() );             // Hello Unknown Your Age is Unknown
    console.log( sayHello( "Sami", 28 ) ); // Hello Sami Your Age is 28

    // EXAMPLE: methods [three] will change undefine with message from me

    function sayHello (
      userName = "Unknown",
      age = "Unknown" ) {

      return `Hello ${ userName } Your Age is ${ age }`;
    }
    console.log( sayHello() );             // Hello Unknown Your Age is Unknown
    console.log( sayHello( "Sami", 28 ) ); // Hello Sami Your Age is 28
  }
  // #061 – Function Rest Parameters
  {
    function calc ( num1, num2, num3 ) {
      return num1 + num2 + num3;
    }

    console.log( calc( 10, 20, 30 ) );          // 60
    console.log( calc( 10, 20, 30, 40, 50 ) );  // 60

    //  ---------------
    function calc ( ...numbers ) {
      console.log( Array.isArray( numbers ) );  // true
    }

    // Rest Parameters will Allow for function to receive an unlimited number from argument;
    function calc ( ...numbers ) {
      let result = 0;
      for ( let i = 0; i < numbers.length; i++ ) {
        result += numbers[ i ];
      }
      return `final result is: ${ result }`;
    }

    console.log( calc( 10, 20, 30 ) );          // final result is: 60
    console.log( calc( 10, 20, 30, 40, 50 ) );  // final result is: 150

    // --------------------------------
    let preFizz = n => [ ...Array( n ) ].map( ( x, i ) => x = i + 1 ); // preFizz( 4 ) ⇛ (4) [1, 2, 3, 4]
  }
  // #062 – Function Ultimate Practice
  {
    function showInfo ( us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk ) {
      document.write( `<div>` );
      document.write( `<h2>Welcome, ${ us }</h2>` );
      document.write( `<p>Age, ${ ag }</p>` );
      document.write( `<p>Hour Rate, $${ rt }</p>` );
      if ( show === "Yes" ) {
        if ( sk.length > 0 ) {
          document.write( `<p>Skills :${ sk.join( " | " ) }</p>` );
        } else {
          document.write( `<p>Skills : NO Skills</p>` );
        }
      } else {
        document.write( `<p>Skills is Hidden</p>` );
      }
      document.write( `</div>` );
    }

    showInfo( "Osama", 38, 20, "NO", "HTML", "CSS" );
    /*
      Welcome, Osama
      Age, 38
      Hour Rate, $20
      Skills Is Hidden
    */
  }
  // #063 – Random Arguments Function Challenge
  {
    function checkStatus ( a, b, c ) {
      if ( typeof a === "string" && typeof b === "number" && typeof c === "boolean" ) {
        console.log( `"Hello ${ a }, Your Age Is ${ b }, You ${ c ? "Are" : "Are Not" } Available For Hire"` );
      } else if ( typeof b === "string" && typeof a === "number" && typeof c === "boolean" ) {
        console.log( `"Hello ${ b }, Your Age Is ${ a }, You ${ c ? "Are" : "Are Not" } Available For Hire"` );
      } else if ( typeof c === "string" && typeof b === "number" && typeof a === "boolean" ) {
        console.log( `"Hello ${ c }, Your Age Is ${ b }, You ${ a ? "Are" : "Are Not" } Available For Hire"` );
      } else if ( typeof b === "string" && typeof c === "number" && typeof a === "boolean" ) {
        console.log( `"Hello ${ b }, Your Age Is ${ c }, You ${ a ? "Are" : "Are Not" } Available For Hire"` );
      }
    }

    // Needed Output
    checkStatus( "Osama", 38, true ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    checkStatus( 38, "Osama", true ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    checkStatus( true, 38, "Osama" ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    checkStatus( false, "Osama", 38 ); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

    // or

    function checkStatus ( a, b, c ) {
      let str, num, bool;
      typeof a === "string"
        ? ( str = a )
        : typeof b === "string"
          ? ( str = b )
          : ( str = c );
      typeof a === "number"
        ? ( num = a )
        : typeof b === "number"
          ? ( num = b )
          : ( num = c );
      typeof a === "boolean"
        ? ( bool = a )
        : typeof b === "boolean"
          ? ( bool = b )
          : ( bool = c );
      return `Hello ${ str }, Your Age Is ${ num }, You ${ bool ? "Are" : "Are Not"
        } Available For Hire`;
    }

    // Needed Output
    console.log( checkStatus( "Osama", 38, true ) ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    console.log( checkStatus( 38, "Osama", true ) ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    console.log( checkStatus( true, 38, "Osama" ) ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    console.log( checkStatus( false, "Osama", 38 ) ); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

    // or
    function checkStatus ( a, b, c ) {
      let s, n, bo;
      let i;
      for ( i = 0; i < arguments.length; i++ ) {
        if ( typeof arguments[ i ] === 'string' ) {
          s = "Hello " + arguments[ i ];
        } else if ( typeof arguments[ i ] === 'number' ) {
          n = ", Your Age Is " + arguments[ i ];
        } else if ( typeof arguments[ i ] === 'boolean' ) {
          if ( arguments[ i ] === true ) {
            bo = ", You Are Available For Hire";
          } else {
            bo = ", You Are Not Available For Hire";
          }
        }
      }
      console.log( s + n + bo );
    }
    checkStatus( "Osama", 38, true );
    checkStatus( 38, "Osama", true );
    checkStatus( true, 38, "Osama" );
    checkStatus( false, "Osama", 38 );

    //  or
    function showInfo ( ...info ) {
      let theName;
      let theAge;
      let theBool;
      for ( let i = 0; i < info.length; i++ ) {
        switch ( typeof info[ i ] ) {
          case 'string':
            theName = info[ i ];
            break;
          case 'number':
            theAge = info[ i ];
            break;
          case 'boolean':
            theBool = info[ i ];
            break;
        }
      }
      let theAvMessage = theBool === true ?
        'available' : 'not available';
      console.log( `Hello ${ theName }, your age is ${ theAge }, you are ${ theAvMessage } for Hire` );
    }
    showInfo( "Osama", 38, true );
    showInfo( 38, "Osama", true );
    showInfo( true, 38, "Osama" );
    showInfo( false, "Osama", 38 );
  }
  // assignment
  {
    // one
    {
      function sayHello ( theName, theGender ) {
        return console.log(
          `Hello${ theGender === "Male"
            ? " Mr" : theGender === "Female"
              ? " Miss" : ""
          } ${ theName }` );
      }
      // Needed Output
      sayHello( "Osama", "Male" );  // "Hello Mr Osama"
      sayHello( "Eman", "Female" ); // "Hello Miss Eman"
      sayHello( "Sameh" );          // "Hello Sameh"

      // or
      function sayHello ( theName, theGender ) {
        theGender === "Male"
          ? console.log( `hello Mr ${ theName }` )
          : theGender === "Female"
            ? console.log( `hello Miss ${ theName }` )
            : console.log( `hello ${ theName }` );
      }

      // Needed Output
      sayHello( "Osama", "Male" ); // "Hello Mr Osama"
      sayHello( "Eman", "Female" ); // "Hello Miss Eman"
      sayHello( "Sameh" ); // "Hello Sameh"

    }
    // two
    {
      function calculate (
        firstNum,
        secondNum,
        operation = "add"
      ) {
        switch ( operation ) {
          case "add":
            return console.log( secondNum === undefined
              ? "Second Number Not Found"
              : firstNum + secondNum );
          case "subtract":
            return console.log( firstNum - secondNum );
          case "multiply":
            return console.log( firstNum * secondNum );
        }
      }

      // Needed Output
      calculate( 20 );                 // Second Number Not Found
      calculate( 20, 30 );             // 50
      calculate( 20, 30, 'add' );      // 50
      calculate( 20, 30, 'subtract' ); // -10
      calculate( 20, 30, 'multiply' ); // 600
    }
    // three
    {
      function ageInTime ( theAge ) {
        if ( theAge > 100 || theAge < 10 ) {
          return console.log( `your age ${ theAge } years Out Of Range` );
        } else {
          let year = theAge,
            months = theAge * 12,
            weeks = months * 4,
            days = weeks * 7,
            hours = days * 24,
            minutes = hours * 60,
            seconds = minutes * 60;
          return console.log( `${ months } Months\n${ weeks } Weeks\n${ hours } Hours\n${ minutes } Minutes\n${ seconds } Seconds` );
        }
      }

      // Needed Output
      ageInTime( 110 ); // Age Out Of Range
      ageInTime( 38 ); // Months Example => 456 Months
    }
    // four
    {
      function checkStatus ( a, b, c ) {
        if (
          typeof a === "string" &&
          typeof b === "number" &&
          typeof c === "boolean"
        ) {
          console.log(
            `"Hello ${ a }, Your Age Is ${ b }, You ${ c ? "Are" : "Are Not"
            } Available For Hire"`
          );
        } else if (
          typeof b === "string" &&
          typeof a === "number" &&
          typeof c === "boolean"
        ) {
          console.log(
            `"Hello ${ b }, Your Age Is ${ a }, You ${ c ? "Are" : "Are Not"
            } Available For Hire"`
          );
        } else if (
          typeof c === "string" &&
          typeof b === "number" &&
          typeof a === "boolean"
        ) {
          console.log(
            `"Hello ${ c }, Your Age Is ${ b }, You ${ a ? "Are" : "Are Not"
            } Available For Hire"`
          );
        } else if (
          typeof b === "string" &&
          typeof c === "number" &&
          typeof a === "boolean"
        ) {
          console.log(
            `"Hello ${ b }, Your Age Is ${ c }, You ${ a ? "Are" : "Are Not"
            } Available For Hire"`
          );
        }
      }

      // Needed Output
      checkStatus( "Osama", 38, true ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
      checkStatus( 38, "Osama", true ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
      checkStatus( true, 38, "Osama" ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
      checkStatus( false, "Osama", 38 ); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

      // or

      function checkStatus ( a, b, c ) {
        let str, num, bool;
        typeof a === "string"
          ? ( str = a )
          : typeof b === "string"
            ? ( str = b )
            : ( str = c );
        typeof a === "number"
          ? ( num = a )
          : typeof b === "number"
            ? ( num = b )
            : ( num = c );
        typeof a === "boolean"
          ? ( bool = a )
          : typeof b === "boolean"
            ? ( bool = b )
            : ( bool = c );
        return `Hello ${ str }, Your Age Is ${ num }, You ${ bool ? "Are" : "Are Not"
          } Available For Hire`;
      }

      // Needed Output
      console.log( checkStatus( "Osama", 38, true ) ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
      console.log( checkStatus( 38, "Osama", true ) ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
      console.log( checkStatus( true, 38, "Osama" ) ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
      console.log( checkStatus( false, "Osama", 38 ) ); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

      // or
      function checkStatus ( a, b, c ) {
        let s, n, bo;
        let i;
        for ( i = 0; i < arguments.length; i++ ) {
          if ( typeof arguments[ i ] === "string" ) {
            s = "Hello " + arguments[ i ];
          } else if ( typeof arguments[ i ] === "number" ) {
            n = ", Your Age Is " + arguments[ i ];
          } else if ( typeof arguments[ i ] === "boolean" ) {
            if ( arguments[ i ] === true ) {
              bo = ", You Are Available For Hire";
            } else {
              bo = ", You Are Not Available For Hire";
            }
          }
        }
        console.log( s + n + bo );
      }
      checkStatus( "Osama", 38, true );
      checkStatus( 38, "Osama", true );
      checkStatus( true, 38, "Osama" );
      checkStatus( false, "Osama", 38 );
      // or
      function checkStatus ( a, b, c ) {
        let str, num, bool;
        let i;
        for ( i = 0; i < arguments.length; i++ ) {
          if ( typeof arguments[ i ] === "string" ) {
            str = arguments[ i ];
          } else if ( typeof arguments[ i ] === "number" ) {
            num = arguments[ i ];
          } else if ( typeof arguments[ i ] === "boolean" ) {
            if ( arguments[ i ] === true ) {
              bool = ", You Are Available For Hire";
            } else {
              bool = ", You Are Not Available For Hire";
            }
          }
        }
        return console.log( `Hello ${ str }, Your Age Is ${ num }, ${ bool }` );
      }
      // Needed Output
      checkStatus( "Osama", 38, true ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
      checkStatus( 38, "Osama", true ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
      checkStatus( true, 38, "Osama" ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
      checkStatus( false, "Osama", 38 ); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


      //  or
      function showInfo ( ...info ) {
        let theName;
        let theAge;
        let theBool;
        for ( let i = 0; i < info.length; i++ ) {
          switch ( typeof info[ i ] ) {
            case "string":
              theName = info[ i ];
              break;
            case "number":
              theAge = info[ i ];
              break;
            case "boolean":
              theBool = info[ i ];
              break;
          }
        }
        let theAvMessage = theBool === true ? "available" : "not available";
        console.log(
          `Hello ${ theName }, your age is ${ theAge }, you are ${ theAvMessage } for Hire`
        );
      }
      showInfo( "Osama", 38, true );
      showInfo( 38, "Osama", true );
      showInfo( true, 38, "Osama" );
      showInfo( false, "Osama", 38 );

    }
    // five
    {
      function createSelectBox ( startYear, endYear ) {
        document.write( `<select>` );
        for ( let i = startYear; i <= endYear; i++ ) {
          document.write( `<option value="${ i }">${ i }</option>` );
        }
        document.write( `</select>` );
      }
      createSelectBox( 2000, 2021 );


      /* <select>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
        <option value="2004">2004</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select> */
    }
    // six
    {
      function multiply ( ...args ) {
        let result = 1;
        for ( let i = 0; i < args.length; i++ ) {
          if ( typeof args[ i ] !== "number" ) {
            continue;
          }
          result *= Math.trunc( args[ i ] );
        }
        return console.log( `${ result }` );
      }

      multiply( 10, 20 ); // 200
      multiply( "A", 10, 30 ); // 300
      multiply( 100.5, 10, "B" ); // 1000

      // or

      function multiply ( ...args ) {
        let answer = 1;
        for ( let arg of args ) {
          if ( typeof arg === "number" ) {
            answer *= Math.trunc( arg );
          }
        }
        return answer;
      }

      console.log( multiply( 10, 20 ) ); // 200
      console.log( multiply( "A", 10, 30 ) ); // 300
      console.log( multiply( 100.5, 10, "B" ) ); // 1000
    }
  }
  /* #064 – Anonymous Function And Practice ▶▶
    - Anonymous Function
    - Calling Named Function vs Anonymous Function
    - Argument To Other Function
    - Task Without Name
    - SetTimeout
*/
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

    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳  Example [one] : with name for func but not deference the result ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳
    document.getElementById( "show" ).onclick = function elzero () {
      console.log( "Show" );
    };                                                    // show

    // ⤵ ⤵ ⤵ ⤵ ⤵  Anonymous Function
    document.getElementById( "show" ).onclick = function () {
      console.log( "Show" );
    };                                                    // show

    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ Example [two] : Anonymous Function for print "hello osama" ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳
    function sayHello () {
      console.log( "Hello Osama" );
    }
    document.getElementById( "show" ).onclick = sayHello;  // hello osama

    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ Example [three] : Anonymous Function will print "good"after 2 sec ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳
    setTimeout( function () {
      console.log( "good" );
    },
      2000 );

  }
  /* #065 – Return Nested Function ▶▶
  - Function Inside Function
  - Return Function
*/
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

  /* #066 – Arrow Function Syntax ▶▶
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/
  {
    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ EXAMPLE 1 ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳

    function printOne () {
      return 10;
    }
    console.log( printOne() );           // 10

    //  ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ with variable
    let printOne = function () {
      return 10;
    };
    console.log( printOne() );           // 10


    /*  ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ one statement or one line
      - remove "function"
      - add "=>" between  () and{}
      - remove  "return"
      - remove{}
    */

    let printOne = () => 10;

    console.log( printOne() );           // 10

    // ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ if dont have param i can change () by _
    let printOne = _ => 10;

    console.log( printOne() );           // 10

    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ EXAMPLE 2 ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳
    let printTwo = num => num;              // if one arg we can remove ()
    console.log( printTwo( 100 ) );         // 100

    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ EXAMPLE 3 two parameter ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳
    let printThree = function ( num1, num2 ) {
      return num1 + num2;
    };
    console.log( printThree( 100, 100 ) );  // 200

    // ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵  switch to arrow
    let printThree = ( num1, num2 ) => num1 + num2;
    console.log( printThree( 100, 100 ) );     // 200

    // ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳ EXAMPLE 4 two parameter ⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳
    /* Currying Function Technique */
    function checker ( zName ) {
      return function ( status ) {
        return function ( salary ) {
          return status === "Available" ? `${ zName }, My Salary Is ${ salary }` : `Iam Not Avaialble`;
        };
      };
    }

    console.log( checker( "Osama" )( "Available" )( 4000 ) ); // My Salary Is 4000
    console.log( checker( "Ahmed" )( "Not Available" )() ); // Iam Not Avaialble

    /* ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ to regular function */
    function checker ( zName, status, salary ) {

      return status === "Available" ? `${ zName }, My Salary Is ${ salary }` : `Iam Not Avaialble`;

    }

    console.log( checker( "Osama", "Available", 4000 ) ); // My Salary Is 4000
    console.log( checker( "Ahmed", "Not Available", ) ); // Iam Not Avaialble

    /* ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ to arrow function */

    let checker = ( zName, status, salary ) => status === "Available" ? `${ zName }, My Salary Is ${ salary }` : `Iam Not Avaialble`;

    console.log( checker( "Osama", "Available", 4000 ) ); // My Salary Is 4000
    console.log( checker( "Ahmed", "Not Available", ) ); // Iam Not Avaialble


  }
  /* #067 – Scope – Global And Local ▶▶
    - Global And Local Scope
*/
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
  /* #068 – Scope – Block ▶▶
    - Block Scope [If, Switch, For]
*/
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
  /* #069 – Scope – Lexical (Static) ▶▶
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/
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
  // #070 – Arrow Function Challenge
  {
    // /*
    //   Function Arrow Challenges
    // */

    // // [1] One Statement In Function
    // // [2] Convert To Arrow Function
    // // [3] Print The Output [Arguments May Change]

    // let names = function ( ...name ) {
    //   // Parameter ?
    //   return `[${ name.join( "], [" ) }] => Done`;
    // };

    // console.log( names( "Osama", "Mohamed", "Ali", "Ibrahim" ) );

    // /* ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ to arrow function */

    let names = ( ...name ) => `[${ name.join( "], [" ) }] => Done`;

    console.log( names( "Osama", "Mohamed", "Ali", "Ibrahim" ) );
    // // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

    /* ================================= */

    // [1] Replace ??? In Return Statement To Get The Output
    // [2] Create The Same Function With Regular Syntax
    // [3] Use Array Inside The Arguments To Get The Output

    let myNumbers = [ 20, 50, 10, 60 ];

    let calc = ( one, two, ...nums ) => one + two + parseInt( nums );

    /* ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ to regular function */

    let calc = function ( one, two, ...nums ) {
      return one + two + parseInt( nums );
    };

    console.log( calc( 10, myNumbers[ +false ], myNumbers[ +true ] ) ); // 80
  }
  // Assignments
  {
    // one
    {
      function getDetails ( zName, zAge, zCountry ) {
        function namePattern ( zName ) {
          let x = zName.trim().split( " " );
          return `${ x[ 0 ] } ${ x[ 1 ][ 0 ].toUpperCase() }`;
        }
        function ageWithMessage ( zAge ) {
          let ageArray = zAge.trim().split( " " );
          let numArray = [];
          for ( let i = 0; i < ageArray.length; i++ ) {
            if ( Number.isInteger( parseInt( ageArray[ i ] ) ) ) {
              numArray.push( ageArray[ i ] );
            }
          }

          return numArray.join();
          // 38 Is My Age => Your Age Is 38
          // 32 Is The Age => Your Age Is 32
        }

        function countryTwoLetters ( zCountry ) {
          return zCountry.slice( 0, 2 ).toUpperCase();
          // Write Your Code Here
          // Egypt => You Live In EG
          // Syria => You Live In SY
        }

        function fullDetails () {
          return `Hello ${ namePattern( zName ) }., Your Age Is ${ ageWithMessage( zAge ) }, You Live In ${ countryTwoLetters( zCountry ) }`;
        }
        return fullDetails(); // Do Not Edit This
      }

      console.log( getDetails( "Osama Mohamed", "38 Is My Age", "Egypt" ) );
      // Hello Osama M., Your Age Is 38, You Live In EG

      console.log( getDetails( "Ahmed ali", "32 Is The Age", "Syria" ) );
      // Hello Ahmed A., Your Age Is 32, You Live In SY


    }
    // two
    {
      function itsMe () {
        return `Iam A Normal Function`;
      }

      console.log( itsMe() ); // Iam A Normal Function
      // ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵

      let itsMe = _ => `Iam A Normal Function`;

      console.log( itsMe() ); // Iam A Normal Function


      function urlCreate ( protocol, web, tld ) {
        return `${ protocol }://www.${ web }.${ tld }`;
      }

      console.log( urlCreate( "https", "elzero", "org" ) ); // https://www.elzero.org

      // ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵
      let urlCreate = ( protocol, web, tld ) => `${ protocol }://www.${ web }.${ tld }`;


      console.log( urlCreate( "https", "elzero", "org" ) ); // https://www.elzero.org
    }
    // three
    {
      /* Currying Function Technique */
      function checker ( zName ) {
        return function ( status ) {
          return function ( salary ) {
            return status === "Available" ? `${ zName }, My Salary Is ${ salary }` : `Iam Not Avaialble`;
          };
        };
      }

      console.log( checker( "Osama" )( "Available" )( 4000 ) ); // My Salary Is 4000
      console.log( checker( "Ahmed" )( "Not Available" )() ); // Iam Not Avaialble

      /* ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ to regular function */
      function checker ( zName, status, salary ) {

        return status === "Available" ? `${ zName }, My Salary Is ${ salary }` : `Iam Not Avaialble`;

      }

      console.log( checker( "Osama", "Available", 4000 ) ); // My Salary Is 4000
      console.log( checker( "Ahmed", "Not Available", ) ); // Iam Not Avaialble

      /* ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ to arrow function */

      let checker = ( zName, status, salary ) => status === "Available" ? `${ zName }, My Salary Is ${ salary }` : `Iam Not Avaialble`;

      console.log( checker( "Osama", "Available", 4000 ) ); // My Salary Is 4000
      console.log( checker( "Ahmed", "Not Available", ) ); // Iam Not Avaialble


    }
    // four
    {
      function specialMix ( ...data ) {
        let result = 0;
        let num;
        let str;
        for ( let i = 0; i < data.length; i++ ) {

          num = parseInt( data[ i ] );

          if ( Number.isInteger( num ) ) {
            result += num;
          } else {
            continue;
          }
        }
        if ( result !== 0 ) {
          return result;
        } else {
          return 'All Is Strings';
        }
      }

      console.log( specialMix( 10, 20, 30 ) ); // 60
      console.log( specialMix( "10Test", "Testing", "20Cool" ) ); // 30
      console.log( specialMix( "Testing", "10Testing", "40Cool" ) ); // 50
      console.log( specialMix( "Test", "Cool", "Test" ) ); // All Is Strings
    }
  }
}
// Higher Order Functions
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
    console.log( firstNonConsecutive( [ 1, 2, 3, 4, 6, 7, 8 ] ) ); // 6
  }

  /*
  #074 – Filter Practice
    - Filter Longest Word By Number
  */
  {
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

}
// object
{
  /* =================================================== */
  console.log( typeof window );                                 // object      ..> main object
  console.log( typeof window.location );                        // object      ..> nested object
  console.log( typeof window.location.assign );                 // function    ..> task in  object
  // console.log( window.location.assign( "https://google.com" ) ); // function    ..> task go to google

  /* create object */

  let user1 = {
    // properties
    theName: "Sami",
    theAge: 28,

    // Methods
    sayHello: function () {
      return `Hello`;
    },
  };

  // How access the object
  console.log( user1 );                        // {theName: 'Sami', theAge: 28, sayHello: ƒ}
  console.log( user1.theName );                // Sami
  console.log( user1.theAge );                 // 28
  console.log( user1.sayHello() );             // Hello


  //  ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ update example ⤵ ⤵ ⤵ ⤵ ⤵ ⤵

  let user2 = {

    // properties
    theName: "Sami",
    theAge: 28,
    "country of": "Egypt",

    // Methods
    sayHello: () => `Hello`,

  };

  // How access the object
  console.log( user2 );                        // {theName: 'Sami', theAge: 28, sayHello: ƒ}

  console.log( user2.theName );                // Sami
  console.log( user2[ "theName" ] );           // Sami

  console.log( user2.theAge );                 // 28
  console.log( user2[ "theAge" ] );            // 28

  console.log( user2.sayHello() );             // Hello
  console.log( user2[ "sayHello()" ] );        // undefined

  // console.log( user2."country of" );           // Error

  console.log( user2[ "country of" ] );        // Egypt


  //  ⤵ ⤵ ⤵ ⤵ ⤵ ⤵ update example ⤵ ⤵ ⤵ ⤵ ⤵ ⤵

  let myVar = "country";

  let user3 = {
    theName: "Sami",
    country: "Egypt",
  };

  console.log( user3.theName );               // Sami
  console.log( user3.myVar );                 // undefined
  console.log( user3[ "myVar" ] );            // undefined
  console.log( user3[ myVar ] );              // Egypt



  // -------------------------------------------------------------------------------------



  /* =================================================== */
  let user = {

    // 1 - properties
    name: "Sami",
    age: 38,
    skills: [ "HTML", "CSS", "JS" ],
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
    checkAv: () => user.available === true ? `Free For Work` : `Not Free`,
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

  // -------------------------------------------------------------------------------------


  /* ============================================================================= */

  // create object
  let user = {};
  /* or
  let user = new Object();
  */

  console.log( user );             // {}

  // add properties to object
  user.age = 38;
  user[ "country" ] = "Egypt";

  console.log( user );             // {age: 38, country: 'Egypt'}

  // update properties to object
  user.age = 27;
  user[ "country" ] = "Syria";

  console.log( user );             // {age: 27, country: 'Syria'}

  // add method to object
  user.sayHello = () => `Hello`;

  console.log( user );             // {age: 27, country: 'Syria', sayHello: ƒ}
  console.log( user.sayHello() );  // Hello

  // -------------------------------------------------------------------------------------



  /* ============================================================================= */

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

  // -------------------------------------------------------------------
  /* ============================================================================= */

  let user = {
    age: 20,
    doubleAge: function () {
      return this.age * 2;       // this will access local value age in the object
    },
  };

  console.log( user );
  console.log( user.age );
  console.log( user.doubleAge() );

  // create object
  let obj = Object.create( {} );

  console.log( obj );              // {}

  obj.a = 100;
  console.log( obj );              // {a: 100}

  // create object as a prototype
  let copyOpj = Object.create( user ); // we use the user object

  console.log( copyOpj );              // {} => content in prototype
  console.log( copyOpj.age );          // 20
  console.log( copyOpj.doubleAge() );  // 40

  // update last example
  let copyOpj1 = Object.create( user ); // we use the user object

  copyOpj1.age = 30;

  console.log( copyOpj1 );              // {age: 30}
  console.log( copyOpj1.age );          // 30
  console.log( copyOpj1.doubleAge() );  // 60

  // --------------------------------------------------------------
  /*
    Object
    - Create Object With assign Method
  */

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

  finalObject.prop1 = 200;
  finalObject.prop4 = 4;

  console.log( finalObject );

  let newObject = Object.assign( {}, obj1, { prop5: 5, prop6: 6 } );

  console.log( newObject );

  //  ==========================================
  {/*   switch and object|| ⇛ */
    function logicalCalc ( array, op ) {
      switch ( op ) {
        case "AND":
          return array.reduce( ( acc, cur ) => acc * cur ) == 1;

        case "OR":
          return array.includes( true );

        case "XOR":
          return array.reduce( ( acc, cur ) => acc != cur );

      }
    }
    // or
    var ops = {
      'AND': ( a, b ) => a && b,
      'OR': ( a, b ) => a || b,
      'XOR': ( a, b ) => a !== b
    };


    function logicalCalc ( array, op ) {
      return array.reduce( ops[ op ] );
    }
    // or
    function logicalCalc ( array, op ) {
      switch ( op ) {
        case 'AND': return array.every( Boolean );
        case 'OR': return array.some( Boolean );
        case 'XOR': return Boolean( array.filter( Boolean ).length & 1 );
      }
    }
    console.log( logicalCalc( [ true, true, true, false ], "XOR" ) );

  }
}
// DOM
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
