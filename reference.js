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

    console.log( Math.pow( 2, 4 ) );              // 16 , => 2**4

    console.log( Math.random() );                // random
    console.log( Math.floor( ( Math.random() * 5 ) + 0 ) ); // 0 || 1 || 2 || 3 || 4

    console.log( Math.trunc( 99.5 ) );           //99 => cut float

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

  console.log( text.padEnd( 4, 0 ) );                      // 5000
  console.log( text.padEnd( 3, 0 ) );                      // 500
  console.log( text.padEnd( 3, 8 ) );                      // 588

  let str = "Please locate where 'locate' occurs!";
  str.lastIndexOf( "locate" );                             // 21

  let text = "The rain in SPAIN stays mainly in the plain";
  console.log( text.match( /ain/g ) );            // Returns an array [ain,ain,ain]
  console.log( text.match( /ain/gi ) );            // Returns an array (4) ['ain', 'AIN', 'ain', 'ain']

  var a = "Elzero Web School";
  console.log( a.replace( "Web", "Site" ) );               // Elzero Site School
  console.log( a.replace( /WEB/i, "Site" ) );              // Elzero Site School
  console.log( a.replace( /WEB/g, "Site" ) );              // Elzero wib School


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
  // All JavaScript objects have a toString() method.

  // #040 – Array Big Introduction;
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
  }
  // #041 – Using Length With Array
  {
    let myFriends = [ "Ahmed", "Mohamed", "Sayed", "Alaa" ];
    console.log( myFriends.length );                            // 4

    myFriends[ 3 ] = "Sami";
    console.log( myFriends );                                   // (4) ['Ahmed', 'Mohamed', 'Sayed', 'Sami']

    myFriends[ 6 ] = "Gamal";
    console.log( myFriends );                                   // (7) ['Ahmed', 'Mohamed', 'Sayed', 'Sami', empty × 2, 'Gamal']
    console.log( myFriends.length );                            //  7
  } {
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
  }
  // #042 – Add And Remove From Array
  {
    // The pop() method removes the last element from an array:
    // The pop() method returns the value that was "popped out":
    // The push() method adds a new element to an array (at the end):
    // The push() method returns the new array length:
    // The shift() method returns the value that was "shifted out":
    // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
    // The unshift() method returns the new array length.
    // Using delete may leave undefined holes in the array. Use pop() or shift() instead

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
  }
  // #043 – Searching Array
  {
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
  }
  // #044 – Sorting Array
  {
    let myFriends = [ 10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10 ];
    console.log( myFriends );                 // (10) [10, 'Sayed', 'Mohamed', '90', 1000, 100, 20, '10', -20, -10]
    console.log( myFriends.sort() );          // (10) [-10, -20, 10, '10', 100, 1000, 20, '90', 'Mohamed', 'Sayed']
    console.log( myFriends.reverse() );       // (10) ['Sayed', 'Mohamed', '90', 20, 1000, 100, '10', 10, -20, -10]
    console.log( myFriends.sort().reverse() );// (10) ['Sayed', 'Mohamed', '90', 20, 1000, 100, 10, '10', -20, -10]
  }
  // #045 – Slicing Array
  {
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

  }
  // #046 – Joining Arrays; return new array
  {
    // The join() method also joins all array elements into a string.
    //It behaves just like toString(), but in addition you can specify the separator:

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
  }
  // assign
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
    // console.log( typeof console.log )      function

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
}
