{ //intro
  //======>  document.querySelector----------selectthe tag and set the style
  {
    document.querySelector("h1").style.color="blue";
    document.querySelector("h1").style.fontSize='80px';
  }
  //======>  window.onload-------------set onload for load all the code before loaded page
  {
    window.onload=function() { //  set onload for load all the code before loaded page
      document.querySelector("h1").style.color="blue";
    };
  }
  // Writing into an HTML element, using innerHTML.
  // Writing into the HTML output using document.write().testing only
  // Writing into an alert box, using window.alert().
  // Writing into the browser console, using console.log().
  //======> window.alert------------ alert
  {
    window.alert("hello from js file");
  }
  //======> document.write---------- write p or h1 or span
  {
    document.write("<h1>hello <span>Page</span></h1>");

  }
  //======> document.write and css ..... write p or h1 or span  then selectthe tag and set the style
  {
    document.write("<h1>Elzero</h1>");
    window.onload=function() {
      document.write("<h1>Elzero</h1>");
      document.querySelector("h1").style=
        "color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial";
    };
    // or
    document.write("<h1>Elzero</h1>");
    document.querySelector("h1").style=
      "color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial";
    // or
    document.write("<h1>Elzero</h1>");
    document.querySelector("h1").style.color="blue";
    document.querySelector("h1").style.fontSize="80px";
    document.querySelector("h1").style.fontWeight="bold";
    document.querySelector("h1").style.textAlign="center";
    document.querySelector("h1").style.fontFamily="Arial";
  }

  //======> document.createElement------- create element
  {
    document.createElement("");
  }
  //======> console.log------------  print in consol
  // console is for web api not js
  // api => application programing interface
  {
    console.log("hello from js file");
    //======>  log = like as logging or message
    console.log("hello from %cjs %cfile", "color: red; font-size: 40px", "color: blue; font-size: 60px");

  }

  //======> console.warn ---------- print in consol with  warn
  {
    console.warn("More of level 3");
  }
  //======> console.error ---------- print in consol with  Error
  {
    console.error("message");
    console.log("Iam In Console");
    console.error("error 1");
    document.write("Iam In Page");
    console.error("error 1");
  }

  //======> console.table ----------- print in consol the taple with index
  {
    console.table(["osama", "sami", "ahmed"]);
    console.table(["mohamed", "ali", "alhefel", "ahmad", "rami"]);
    // an object whose properties are strings

    function Person (firstName, lastName) {
      this.firstName=firstName;
      this.lastName=lastName;
    }

    var me=new Person("John", "Smith");

    console.table(me);
  }

  //======> console.group---------- create list group
  {
    console.group("A");
    console.log("message one");
    console.log("message two");
    console.group("1");
    console.log("message one");
    console.log("message two");
    console.group("2");
    console.log("message one");
    console.log("message two");
    console.groupEnd("A");
    console.groupEnd("1");
    console.groupEnd("2");

    console.group("B");
    console.log("message one");
    console.log("message two");
  }
  //======> console.assert ----------- alert simple
  {
    console.assert(2!=2, 'the # is not even'); //ssertion failed: the # is not even
    console.assert(2!=3, 'the # is not even'); // not error no msg no thing
  }
  //======> console.clear---------- method clears the console if the environment allows it.
  {
    console.clear(); //void (no thing)
  }
  //======>  console.count------------method logs the number of times that this particular call to count() has been called.
  {
    let user=""; //variable not selected
    function greet () {
      console.count(user); // how many repeat name of user
      return "hi "+user;
    }
    user="bob";
    greet(); // bob : 1
    greet(); // bob : 2
    greet(); // bob : 3
    user="alice";
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
    console.log(typeof "sami"); //string
    console.log(typeof 9999); //number
    console.log(typeof [10, 15, 17]); // Array ==> object
    console.log(typeof ["os", "sa", "ah"]); // Array ==> object
    console.log(typeof {name: 'osama', age: 27, country: "SYR"}); // Array ==> object , {} => key and value
    console.log(typeof true); //boolean
    console.log(typeof false); //boolean
    console.log(typeof undefined); //undefined
    console.log(typeof null); //object
  }
}
//======>  variable
{

  var user="osama",
    age=37;
  console.log(user);
  console.log(age);
  console.log(hello); //access on id in html
  hello.innerHTML="kkkkkkkk"; // change content #hello to "kkkkk"

  var $_us1$_er_$="sayed"; //is good

  // every id in html will be variable in js
  var user="Sami"; // var=>variable, user=>key, "Sami"=>value
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

  let a='We Love';
  let b='JavaScript';
  let c='And';
  let d='Programming';

  console.log((a=' "" '+b+'\n'+c+' '+d));

  console.log(`${ a } "" '' \\ ${ b }
${ c } ${ d }`);

  // Second Example;

  let title='Elzero';
  let desc='Elzero Web School';

  let markup=`
  <div class="card">
    <div class="child">
      <h2>${ title }</h2>
      <p>${ desc }</p>
    </div>
  </div>
`;

  document.write(markup);
  // .................................
  var headTitle='Elzero',
    partDescription='Elzero Web School',
    theDate='25/10',
    markup=`<div class="card">
            <h3>${ headTitle }</h3>
            <p>${ partDescription }</p>
            <span>${ theDate }</span>
            </div>`;
  document.write(markup.repeat(4));

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
  console.log(a+" "+b);
  console.log(a, b);
  ///////////
  let a=10;
  b=20,
    c=b/a,
    d=b/a/c;

  console.log(`_${ c }${ d }_${ b }${ c }${ d }_${ b }${ c }${ d }_${ b }${ c }${ d }_${ b }`); // _21_2021_2021_2021_20_
  console.log(
    '`I\'m In\n\\\\\nLove \\\\ """ \'\'\'\n++With ++\n\\"""\\"""\n""JavaScript""``'
  ); {
    console.log('Elzero Web "School"');
    console.log("Elzero Web 'School'");
    console.log("Elzero Web \"School\"");
    console.log('Elzero \\ Web \'School\'');
    console.log("Elzero \
    Web \
    School");
    console.log("Elzero\nWeb\nSchool");
  }



  let a=21;
  let b=20;

  console.log(`_${ a }_${ b }${ a }_${ b }${ a }_${ b }${ a }_${ b }_`); // _21_2021_2021_2021_20_
  console.log('_'+`${ a }_${ b }`.repeat(4)+'_'); // _21_2021_2021_2021_20_

}
//======> Concatenation
{
  let a="We Love";
  let b="JavaScript";
  document.write(a+" "+b);
  console.log(a, b);

  // First Example

  let a="We Love";
  let b="JavaScript";
  let c="And";
  let d="Programming";

  console.log(a+' '+b+'\n'+c+' '+d);
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

  console.log(`${ a } "" '' \\ ${ b }
    ${ c } ${ d }`);



  let title="Elzero",
    desc="Elzero Web School";

  let print=`
        <div class="card">
            <div class="child">
                <h2>${ title }</h2>
                <p>${ desc }</p>
            </div>
        </div>
    `;
  document.write(print);
  console.log(print);

  let theCard=theTitle="Elzero",
    theDescription="Elzero Web School",
    theDate="25/10";

  Card=`
        <div class = "card">
            <div class ="child">
                <h3>Hello ${ theTitle }</h3>
                <p>${ theDescription }</p>
                <span>${ theDate }</span>
            </div>
        </div>
    `;
  document.write(Card.repeat(4));


  var numberOne=10,
    numberTwo=20;
  console.log(numberOne+""+numberTwo); // Normal Concatenate => 1020
  console.log(typeof (numberOne+""+numberTwo)); // Normal Concatenate => String
  console.log(`${ numberOne }${ numberTwo }`); // Template Literals Way => 1020
  console.log(typeof (`${ numberOne }${ numberTwo }`)); // Template Literals Way => String
  console.log(numberOne+"\n"+numberTwo);
  /*
      Normal Concatenate
      20
      10
  */
  console.log(`${ numberTwo }\n${ numberOne }`);

}
//======> arithmetic operators
{
  console.log(10+20); //30
  console.log(10+"osama"); //osama

  console.log(10-20); // -10
  console.log(10-"osama"); // nan
  console.log(typeof (NaN)); // number

  console.log(10*20); // 200
  console.log(10*-20); // -200

  console.log(20/5); // 4
  console.log(20/3); // 6.666666666666667

  console.log(2**4); //16
  console.log(2*2*2*2); // 16

  console.log(10%2); // 0
  console.log(11%2); // 1

  num=1;
  1;
  ++num;
  2;
  console.log(+100); // 100
  console.log(+"100"); // 100
  console.log(+"-100"); // -100
  console.log(+"osama"); // nan
  console.log(+"15.5"); // 15.5
  console.log(+0xff); // 255
  console.log(+null); // 0
  console.log(+false); // 0
  console.log(+true); // 1

  console.log(-100); // -100
  console.log(-"100"); // -100
  console.log(-"-100"); // 100
  console.log(-"osama"); // nan
  console.log(-"15.5"); // -15.5
  console.log(-0xff); // -255
  console.log(-null); // -0
  console.log(-false); // -0
  console.log(-true); // -1

  console.log(Number("100"));

  console.log(200+15%3+190+10-400); // 0
}
//======>  type coercion (type casting)
{
  let a="10";
  let b=20;
  let c=true;
  console.log(a+b); // 1020
  console.log(+a+b); // 30

  console.log(a-b); // -10
  console.log(b-a); // 10

  console.log(""+2); // 2
  console.log(""-2); // -2

  console.log(false+true); // 1
  console.log(false-true); // -1

  console.log(b+c); // 21
  console.log(a+b+c); // 1020true
  console.log(+a+b+c); // 31

  {
    let a=10;
    a=a+20; // a+=20
    console.log(a); // 30
    // a = 30;

    a+=100; // a = a + 100
    console.log(a); //130

    let a=10;
    a-=100; // a = a - 100
    console.log(a); //-90
  }

  {
    let a=10;
    let b="20";
    let c=80;
    console.log(10*20+15%3+190+10-400); // 0

    console.log(++a+ +b++ + +c++-+a++); //100
    console.log(11+20+80-11); //100

    console.log(++a+-b+ +c++- -a++ + +a); //94
    console.log(11+-20+80+11+ +12); //94

    console.log(--c+ +b+--a*+b++-+b*a+--a-+true); //97
    console.log(79+20+9*20-21*9+8-1); //97

    let d="-100";
    let e="20";
    let f=30;
    let g=true;

    console.log(-d*+e+f%3*g); //2000
    console.log(-d*+e+f%++g); //2000
    console.log(-(--d)+ +f+ ++e*++g); //173
    console.log(-(--d)*++g- --f); //173
  }
}
//======>  number
{
  console.log(1000000); //1000000
  console.log(1_000_000); //1000000

  console.log(1e6); //1000000
  console.log(123e5); // 12300000
  console.log(123e-5); // 0.00123

  console.log(10**6); //1000000
  console.log(1000000.00); //1000000

  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MIN_SAFE_INTEGER);
  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MAX_VALUE);

  Number(true); // returns 1
  Number(false); // returns 0
  Number("10"); // returns 10
  Number("  10"); // returns 10
  Number("10  "); // returns 10
  Number(" 10  "); // returns 10
  Number("10.33"); // returns 10.33
  Number("10,33"); // returns NaN
  Number("10 33"); // returns NaN
  Number("John"); // returns NaN
}
//======>  number methods
{
  console.log((100).toString()); // "100"
  console.log(100..toString()); // "100"
  console.log(100.00.toString()); //"100"

  console.log(100.555555.toFixed()); // 101
  console.log(100.555555.toFixed(2)); // 100.56

  console.log(Number("100")); // 100
  console.log(Number("100 osama")); // nan

  console.log(+("100")); // 100
  console.log(+("100 osama")); // nan

  console.log(parseInt("100")); // 100
  console.log(parseInt("100 osama")); // 100
  console.log(parseInt("osama 100 osama")); // nan

  console.log(parseFloat("100 osama")); // 100
  console.log(parseFloat("100.55 osama")); // 100.55

  console.log(Number.isInteger("100")); // => is return true or false
  console.log(Number.isInteger(100)); // => integer => رقم صحيح
  console.log(Number.isInteger(100.500)); // false
  console.log(Number.isNaN("osama")); // false
  console.log(Number.isNaN("osama"/100)); // true

  console.log((100).toString()); // "100"
  console.log(100..toString()); // "100"
  console.log(100.00.toString()); //"100"

  console.log(100.555555.toFixed()); // 101
  console.log(100.555555.toFixed(2)); // 100.56

  console.log(Number("100")); // 100
  console.log(Number("100 osama")); // nan

  console.log(+("100")); // 100
  console.log(+("100 osama")); // nan

  console.log(parseInt("100")); // 100
  console.log(parseInt("100 osama")); // 100
  console.log(parseInt("osama 100 osama")); // nan

  console.log(parseFloat("100 osama")); // 100
  console.log(parseFloat("100.55 osama")); // 100.55

  console.log(Number.isInteger("100")); // => is return true or false
  console.log(Number.isInteger(100)); // => integer => رقم صحيح
  console.log(Number.isInteger(100.500)); // false

  console.log(Number.isNaN("osama")); // false
  console.log(Number.isNaN("osama"/100)); // true

  console.log(Math.round(99.2)); // 99
  console.log(Math.round(99.5)); // 100

  console.log(Math.ceil(99.5)); // 100
  console.log(Math.ceil(99.2)); // 100

  console.log(Math.floor(99.5)); // 99
  console.log(Math.floor(99.2)); // 99

  console.log(Math.min(10, 20, 40, -100, 100)); // -100
  console.log(Math.max(10, 20, 40, -100, 100)); // 100

  console.log(Math.pow(2, 4)); // 16 , => 2**4

  console.log(Math.random()); // random

  console.log(Math.trunc(99.5)); //99 => cut float

  console.log(100_000); // 100000
  console.log(100000); // 100000
  console.log(5e4+5e4); // 100000
  console.log(10**5); // 100000
  console.log(10*10_000); // 100000
  console.log(100000.00); // 100000
  console.log(50_000+50_000); // 100000
  console.log(Math.pow(10, 5)); // 100000
  console.log(Number(parseInt("100000 sami"))); // 100000
  console.log(Number(parseInt("100000.09 sami"))); // 100000
  console.log(Math.round(99999.5)); // 100000
  console.log(Math.ceil(99999.5)); // 100000
  console.log(Math.floor(100000.5)); // 100000
  console.log(Math.trunc(100000.5)); // 100000
  console.log(Math.min(100000)); // 100000
  console.log(Math.max(100000)); // 100000

  console.log(100_000); // 100000
  console.log(100000); // 100000
  console.log(5e4+5e4); // 100000
  console.log(10**5); // 100000
  console.log(Math.pow(10, 5)); // 100000
  console.log(100000.00); // 100000
  console.log(100000..toString()); // 100000
  console.log((100000).toString()); // 100000
  console.log(Number(parseInt("100000 sami"))); // 100000
  console.log(Number(parseInt("100000.9 sami"))); // 100000
  console.log(Math.round(99999.5)); // 100000
  console.log(Math.ceil(99999.2)); // 100000
  console.log(Math.floor(100000.7)); // 100000
  console.log(Math.trunc(100000.5)); // 100000
  console.log(Math.min(100000)); // 100000
  console.log(Math.max(100000)); // 100000

  let myVar="100.56789 Views";

  let myVar="100.56789 Views";

  console.log(parseInt(myVar)); // 100
  console.log(typeof (parseInt(myVar))); // 100

  console.log(+parseFloat(myVar).toFixed(2)); // 100.57
  console.log(+parseFloat(myVar).toFixed(2)); // 100.57
  console.log(typeof (+(parseFloat(myVar).toFixed(2))));

  // is.method()  ==> true or false

  console.log(Number.isInteger("100")); // false
  console.log(Number.isInteger(100)); // true
  console.log(Number.isInteger(100.500)); // false

  console.log(Number.isNaN(100)); // false
  console.log(Number.isNaN("100")); // false
  console.log(Number.isNaN("osama"/3)); // true

  // toExponential()
  let x=9.656;
  console.log(x.toExponential(2)); // returns 9.66e+0
  console.log(x.toExponential(4)); // returns 9.6560e+0
  console.log(x.toExponential(6)); // returns 9.656000e+0

  //toPrecision()
  let x=9.656;
  console.log(x.toPrecision()); // returns 9.656
  console.log(x.toPrecision(2)); // returns 9.7
  console.log(x.toPrecision(4)); // returns 9.656
  console.log(x.toPrecision(6)); // returns 9.65600

  //valueOf()
  let x=123;
  console.log(x.valueOf()); // returns 123 from variable x
  console.log((123).valueOf()); // returns 123 from literal 123
  console.log((100+23).valueOf()); // returns 123 from expression 100 + 23
}
//======>  math object
{
  console.log(Math.round(99.2)); // 99
  console.log(Math.round(99.5)); //  100

  console.log(Math.ceil(99.2)); //  100
  console.log(Math.floor(99.7)); //  99

  console.log(Math.min(10, 20, 100, -100, 90)); //  -100
  console.log(Math.max(10, 20, 100, -100, 90)); //  100

  console.log((2**4)); // 16
  console.log(Math.pow(2, 4)); // 16

  console.log(Math.random()); //random 0.1828806668286198

  console.log(Math.trunc(99.5)); // 99 ==> delete the float

  let flt=10.4;
  console.log(Math.trunc(flt)); // 10
  console.log(Math.floor(flt)); // 10
  console.log(Math.round(flt)); // 10
  console.log(parseInt(flt+"sami")); // 10
  console.log(parseInt(flt)); // 10
  console.log(flt.toFixed()); // 10
  console.log(Math.ceil(--flt)); // 10

  console.log(Math.floor((Math.random()*5)+0)); // 0 || 1 || 2 || 3 || 4

  { //Challenge

    let a=1_00;
    let b=2_00.55;
    let c=1e2;
    let d=2.4;

    // 1 - Find Smallest Number In All Variables And Return Integer
    console.log(parseInt(Math.min(a, b, c, d))); // 2
    console.log(Math.trunc(Math.min(a, b, c, d))); // 2

    // 2 - Use Variables a + d One Time To Get The Needed Output
    console.log(d%d+Math.pow(a, 2)); // 10000
    console.log(Math.pow(a, 2)*Math.pow(d, 0)); // 10000
    console.log(Math.pow(a, Math.trunc(d))); // 10000
    console.log(a**(Math.floor(d))); // 10000

    // 3 - Get Integer "2" From d Variable With 4 Methods
    console.log(Math.trunc(d)); // 2
    console.log(Math.floor(d)); // 2
    console.log(Math.round(d)); // 2
    console.log(parseInt(d+"sami")); // 2
    console.log(parseInt(d)); // 2
    console.log(d.toFixed()); // 2
    // console.log(Math.ceil(--d));     // 2

    // 4 - Use Variables b + d To Get This Valus
    console.log((Math.floor(b)/Math.ceil(d)).toFixed(2).toString()); // 66.67  => String;
    console.log(Math.round((Math.floor(b)/Math.ceil(d)))); // 67    => number
  }
}
//======> string methods(1)
{
  var theName="Sami";

  console.log(theName); // Sami
  console.log(theName[1]); // a position [1]
  console.log(theName[5]); // undefined when no  index print undefined

  console.log(theName.charAt(1)); // a
  console.log(theName.charAt(5)); //   =>when no index print space
  console.log(theName.length); // 4  =>how many char

  var theName="  Sami  ";

  console.log(theName.length); // 8  =>how many char
  console.log(theName.trim()); // Sami => for cut"delete" the spaces

  console.log(theName.toUpperCase()); // ..SAMI..
  console.log(theName.toLowerCase()); // ..sami..

  console.log(theName.trim().charAt(2).toUpperCase()); // M


  {
    var a="Elzero Web School";
    console.log(a.replace("Web", "Site")); //Elzero Site School
    console.log(a.replace(/WEB/i, "Site")); // Elzero Site School
    console.log(a.replace(/WEB/g, "Site")); // Elzero Site School

    let text="5";
    console.log(text.padStart(4, 0)); // Returns 0005
    console.log(text.padStart(3, 0)); // Returns 005
    console.log(text.padStart(3, 8)); // Returns 885

    let text="5";
    console.log(text.padEnd(4, 0)); // Returns 5000
    console.log(text.padEnd(3, 0)); // Returns 500
    console.log(text.padEnd(3, 8)); // Returns 588

    let str="Please locate where 'locate' occurs!";
    str.lastIndexOf("locate"); // Returns 21

    console.log(a.indexOf("Web")); // 7
    console.log(a.indexOf("Web", 8)); //-1

    console.log(a.indexOf("o")); // 5

    console.log(a.lastIndexOf("o")); // 15
    console.log(a.lastIndexOf("Web")); // 7

    console.log(a.slice(0)); // Elzero Web School
    console.log(a.slice(7)); // Web School

    console.log(a.slice(2, 6)); // zero
    console.log(a.slice(7, 10)); // Web

    console.log(a.slice(-5)); // chool
    console.log(a.slice(-5, -3)); // ch

    console.log(a.repeat(3)); //Elzero Web SchoolElzero Web SchoolElzero Web School

    console.log(a.split()); // ["Elzero Web School"]
    console.log(a.split(" ")); //  ["Elzero", "Web", "School"]

    var a="Elzero|Web|School";

    console.log(a.split("|")); //  ["Elzero", "Web", "School"]
    console.log(a.split("|", 2)); //  ["Elzero", "Web"] ==> 2 =>limit

  }

  {

    let theName="Ahmed";

    console.log(theName); // Ahmed
    console.log(theName[1]); // h start from 0=>....
    console.log(theName.charAt(1)); // h start from 0=>....
    console.log(theName.charAt()); // A start from 0=>....
    console.log(theName.length); // 5 start from 1=>....
    console.log(theName.toUpperCase()); // AHMED
    console.log(theName.toLowerCase()); // ahmed

    let tName="   Ahmed";
    console.log(tName); // .    Ahmed
    console.log(tName.trim()); // .Ahmed =>trim will remove space
    console.log(tName.trim().charAt(2)); // m
    console.log(tName.trim().charAt(2).toUpperCase()); //M

    let a="Elzero Web School";
    console.log(a.indexOf("Web")); // 7
    console.log(a.indexOf("Web", 7)); // 7
    console.log(a.indexOf("Web", 8)); // -1 => not found
    console.log(a.indexOf("Web", 9)); // -1 => not found

    console.log(a.lastIndexOf("Web")); // 7
    console.log(a.lastIndexOf("Web", 7)); // 7
    console.log(a.lastIndexOf("Web", 8)); // 7
    console.log(a.lastIndexOf("Web", 9)); // 7

    console.log(a.lastIndexOf("o")); // 15
    console.log(a.lastIndexOf("o", 7)); // 5
    console.log(a.lastIndexOf("o", 8)); // 5
    console.log(a.lastIndexOf("o", 9)); // 5

    console.log(a.slice(0)); // Elzero Web School
    console.log(a.slice(2)); //   zero Web School
    console.log(a.slice(2, 6)); //   zero
    console.log(a.slice(7, 10)); //        Web

    console.log(a.slice(0)); // Elzero Web School
    console.log(a.slice(-2)); //                ol
    console.log(a.slice(-6, -2)); //            Scho
    console.log(a.slice(-10, -7)); //        Web

    console.log(a.repeat(2));

    console.log(a.split()); // ['Elzero Web School']
    console.log(a.split("")); // ['E', 'l', 'z', 'e', 'r', 'o', ' ', 'W', 'e', 'b', ' ', 'S', 'c', 'h', 'o', 'o', 'l']
    console.log(a.split(" ")); // ['Elzero', 'Web', 'School']
    console.log(a.split("|")); // ['Elzero', 'Web', 'School']

    console.log(a.split(" ", 2)); // ['Elzero', 'Web']
    console.log(a.split("", 5)); // ['E', 'l', 'z', 'e', 'r']

    console.log(a.substring()); // Elzero Web School
    console.log(a.substring(2)); //   zero Web School
    console.log(a.substring(2, 6)); //   zero
    console.log(a.substring(6, 2)); //   zero when i put max value before min will fix
    console.log(a.substring(-10)); // Elzero when i put -num  will fix to 0
    console.log(a.substring(-10, 6)); // Elzero

    console.log(a.length); // 17
    console.log(a.substring(a.length-1)); //               l
    console.log(a.substring(a.length-2)); //              ol
    console.log(a.substring(a.length-4, a.length-10)); //       Web Sc

    console.log(a.length); // 17
    console.log(a.substr(0)); // Elzero Web School
    console.log(a.substr(0, 6)); // Elzero
    console.log(a.substr(17)); // .
    console.log(a.substr(-3)); //               ool
    console.log(a.substr(-5, 2)); //             ch will print 2chart

    console.log(a.includes("Web")); // true
    console.log(a.includes("Web", 8)); // false
    console.log(a.includes("sami")); // false

    console.log(a.startsWith("Web")); // false
    console.log(a.startsWith("sami")); // false
    console.log(a.startsWith("Web", 7)); // true
    console.log(a.startsWith("E")); // true
    console.log(a.startsWith("E", 3)); // false

    console.log(a.endsWith("o")); // false
    console.log(a.endsWith("l")); // true
    console.log(a.endsWith("o", 6)); // true
    console.log(a.endsWith("ro", 6)); // true
    console.log(a.endsWith("E", 1)); // true
    let userName="Elzero";
    console.log(userName.charAt(0).toLowerCase()); // e
    console.log(userName[0].toLowerCase()); // e
    console.log(userName.slice(0, 1).toLowerCase()); // e
    console.log(userName.substring(0, 1).toLowerCase()); // e
    console.log(userName.substr(0, 1).toLowerCase()); // e
    console.log(userName.substr(-6, 1).toLowerCase().repeat(3)); // eee

    let word="Elzero";
    let letterZ="z";
    let letterE="e";
    let letterO="O";

    console.log(word.includes(letterZ)); // True
    console.log(word.startsWith(letterE.toUpperCase())); // True
    console.log(word.endsWith(letterO.toLowerCase())); // True

    let a="Elzero Web School";
    // Include This Method In Your Solution [slice, charAt]
    console.log(a.charAt(2)+a.slice(3, 6)); // Zero
    console.log(a.slice(2, 6)); // Zero

    // 8 H
    console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

    // Return Array
    console.log(a.split(" ", 1)); // ["Elzero"]

    // Use Only "substr" Method + Template Literals In Your Solution
    console.log(`${ a.substr(0, 6) }${ a.substr(10) }`); // Elzero School
    console.log(a.substr(0, 6)+a.substr(10)); // Elzero School
    console.log(a.substr(0, 6)+" "+a.substr(11)); // Elzero School

    // Solution Must Be Dynamic Because String May Changes
    console.log(a.charAt(0).toLowerCase()+a.slice(1, a.length-1).toUpperCase()+a.charAt(a.length-1).toLowerCase()); // eLZERO WEB SCHOOl
    console.log(a[0].toLowerCase()+a.slice(1, a.length-1).toUpperCase()+a.charAt(a.length-1).toLowerCase()); // eLZERO WEB SCHOOl
    console.log(a[0].toLowerCase()+a.substr(1, a.length-2).toUpperCase()+a.charAt(a.length-1).toLowerCase()); // eLZERO WEB SCHOOl
    console.log(a[0].toLowerCase()+a.substring(1, a.length-1).toUpperCase()+a.charAt(a.length-1).toLowerCase()); // eLZERO WEB SCHOOl


  }
}
//Conditions
{
  // #031 – Comparison Operators
  {
    console.log(10=="10"); // true
    console.log(-100=="-100"); // true
    console.log(10=="6"); // false

    console.log(10!="10"); // false
    console.log(-100!="-100"); // false
    console.log(10!="6"); // true

    console.log(10==="10"); // false
    console.log(-100==="-100"); // false
    console.log(10==="6"); // false
    console.log("10"==="10"); // true
    console.log(10===10); // true
    console.log(10!==10); // false

    console.log(10>10); // false
    console.log(10>=10); // true

    console.log(typeof "Osama"===typeof "Ahmed"); // true
  }
  // #032 – Logical Operators{
  {
    console.log(true); // true
    console.log(!true); // false
    console.log(10=="10"); // true
    console.log(!(10=="10")); // false

    console.log(10=="10"&&10>8); // true
    console.log(10=="10"&&10>8&&10>=10); // true
    console.log(10=="10"&&10>8&&10>=20); // false

    console.log(10=="30"||5>8); // false
    console.log(10=="10"||10>8||10>=10); // true
    console.log(10=="10"||10>8||10>=20); // true
  }
  //#033 – If Condition
  {
    let price=100;
    let discount=false;
    let discountAmount=30;
    let country="KSA";

    if(discount===true) {
      price-=discountAmount;
    } else if(country==="Egypt") {
      price-=discountAmount-20;
    } else if(country==="Syria") {
      price-=50;
    } else {
      price-=10;
    }
    console.log(price); // 90
  }
  //#034- Nested If Condition;
  {
    price=100;
    discount=false;
    discountAmount=30;
    country="Egypt";
    student=true;

    if(discount===true) {

      price-=discountAmount;

    } else if(country==="Egypt") {

      if(student===true) {

        price-=discountAmount+30;

      } else {

        price-=discountAmount+10;

      }

    } else {

      price-=10;

    }

    console.log(price); // 40
  }
  // #035 – Conditional ternary Operator
  {
    let theName="Mona";
    let theGender="Female";
    let theAge=30;

    if(theGender==="Male") {
      console.log("Mr");
    } else {
      console.log("Mrs");
    }

    // condition ? if true : if false
    theGender==="Male"? console.log("Mr"):console.log("Mrs");

    console.log(theGender==="Male"? "Mr":'Mrs');

    let result=theGender==="Male"? "Mr":'Mrs';
    console.log(result);
    console.log(`Hello ${ result } ${ theName }`);
    console.log(`Hello ${ theGender==="Male"? "Mr":"Mrs" } ${ theName }`);
    theAge<20?
      console.log(20):
      theAge>20&&theAge<60?
        console.log("20 to 60"):
        theAge>60?
          console.log("Larger Than 60"):
          console.log("UnKnown");
  }
  // #036 – Nullish Coalescing Operator;
  {
    console.log(Boolean(100));  // true
    console.log(Boolean(-100)); // true
    console.log(Boolean(0));    // false
    console.log(Boolean(null)); // false
    console.log(Boolean(""));   // false

    let price=0;
    console.log(`the price is ${ price||200 }`);// the price is 200
    console.log(`the price is ${ price??200 }`);//the price is 0
  }
  // #038 – Switch Statement
  {
    let day=4;

    switch(day) {
      default:
        console.log("UnKnown Day");
        break;
      case 0:
        console.log("Saturday");
        break;
      case 1:
        console.log("Sunday");
        break;
      case 2:
      case 3:
        console.log("Monday");
        break;
    }
  }
  // ASSIGNMENT
  {
    // assign one
    // [  1  ]
    {
      console.log(100=="100"); // true
      console.log(100!=1000); // true
      console.log(110+100!=10*20); // true
      console.log(110>100>10<20); // true
      console.log(-10=="-10"); // true
      console.log(typeof -50===typeof +"-40"); // true
      console.log(typeof 10==typeof -"-40"); // true
      console.log(typeof "10"!==typeof 10); // true
      console.log(typeof 20!=false); // true
    }
    // [  2  ]  
    {
      let num1=10;
      let num2=20;
      console.log(num1!==num2); // true
      console.log(num1!=num2); // true
      console.log(typeof num1===typeof num2); // true
      console.log(num2>num1); // true
      console.log(num2>=num1); // true
      console.log(num1<num2); // true
      console.log(num1<=num2); // true
      console.log(num1!=true); // true
    }
    // [  3  ]
    {
      let a=20;
      let b=30;
      let c=10;

      console.log(a<b&&a>c||a<b); // true
      console.log(a+b>a+c); // true
      console.log(!(a>b)&&!(a>b)&&!(a<c)&&!(a<c)); // true
    }
    //assign two
    // [  1  ]
    {
      let num=120;
      if(num<10) {
        console.log(`00${ num }`);
      } else if(num>10&&num<100) {
        console.log(`0${ num }`);
      } else if(num>=100) {
        console.log(num);
      }
    }
    // [  2  ]
    {
      let num1=9;
      let str="9";
      let str2="20";

      if(num1==str) {
        console.log("{num1} Is The Same Value As {str}");
      }
      if(num1==str&&typeof num1!==typeof str) {
        console.log("{num1} Is The Same Value As {str} But Not The Same Type");
      }
      if(num1!==str2) {
        console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
      }
      if(str!=str2&&typeof str===typeof str2) {
        console.log("{str} Is The Same Type As {str2} But Not The Same Value");
      }
    }
    // [  3  ]
    {
      let num1=10;
      let num2=30;
      let num3="30";

      num3>num1&&typeof num3!==typeof num2? console.log("30 Is Larger Than 10 And Type string Not The Same Type As number"):console.log(Error("false"));
      num3>num1&&num3==num2&&typeof num3!==typeof num2? console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"):console.log(false);
      num3!==num1&&typeof num3!==typeof num2? console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"):console.log(false);
    }
    // [  4  ]
    {
      // Edit What You Want Here

      let num1=10;
      let num2=num1-1;
      let num3=10;
      let num4=32;

      /*
        Do Not Edit Below This Line
        Needed Output
        True 7 Times
      */

      // Condition 1

      if(num1>num2) {
        console.log("True");
      } else {
        console.log("False");
      }

      // Condition 2

      if(num1>num2&&num1<num4) {
        console.log("True");
      } else {
        console.log("False");
      }

      // Condition 3

      if(num1>num2&&num1===num3) {
        console.log("True");
      } else {
        console.log("False");
      }

      // Condition 4

      if((num1+num2)<num4) {
        console.log("True");
      } else {
        console.log("False");
      }

      // Condition 5

      if((num1+num3)<num4) {
        console.log("True");
      } else {
        console.log("False");
      }

      // Condition 6

      if((num1+num2+num3)<num4) {
        console.log("True");
      } else {
        console.log("False");
      }

      // Condition 7

      if(num4-(num1+num3)+num2===21) {
        console.log("True");
      } else {
        console.log("False");
      }
      console.log(32-(10+10)+9); // 21
    }
    // assign one
    {
      let day="   Wednesday  ";

      // You Need To Remove Spaces And Make First Letter Capital => Friday
      day=day.trim();
      day=day[0].toUpperCase()+day.substring(1);


      switch(day) {
        default:
          console.log("Its Not A Valid Day");
        case "Friday":
        case "Saturday":
        case "Sunday":
          console.log("No Appointments Available");
          break;
        case "Monday":
        case "Thursday":
          console.log("From 10:00 AM To 5:00 PM");
          break;
        case "Tuesday":
          console.log("From 10:00 AM To 6:00 PM");
          break;
        case "Wednesday":
          console.log("From 10:00 AM To 7:00 PM");
          break;
      }
    }
  }
  // CHALLENGE 
  // Condition Met
  {
    let st="Elzero Web School";
    if(st.indexOf("w")===-1) {
      a=st.indexOf("W");
    } else {
      a=st.indexOf("w");
    }

    if(st.toLowerCase()[a]==="w") {
      console.log("Good");
    }
    if(a!=="string") {
      console.log("Good");
    }
    if(typeof a==="number") {
      console.log("Good");
    }
    if(st.substr(0, 6).repeat(2)==="ElzeroElzero") {
      console.log("Good");
    }
  }
  //If And Switch Toggle
  {
    // first solution
    let job="Support";
    let salary=0;

    switch(job) {
      default:
        salary=4000;
        break;
      case "Manager":
        salary=8000;
        console.log(`jop ${ job } is ${ salary }`);
        break;
      case "IT":
      case "Support":
        salary=6000;
        console.log(`jop ${ job } is ${ salary }`);
        break;
      case "Developer":
      case "Designer":
        salary=7000;
        console.log(`jop ${ job } is ${ salary }`);
        break;
    }

    // second solution
    let holidays=0;
    let money=0;

    if(holidays===0) {
      money=5000;
    } else if(holidays===1||holidays===2) {
      money=3000;
    } else if(holidays===3) {
      money=2000;
    } else if(holidays===4) {
      money=1000;
    } else if(holidays===5) {
      money=0;
    } else {
      money=0;
    }
    console.log(`My Money is ${ money }`);
  }
}
// Array
{
  // #040 – Array Big Introduction;
  {
    let myFriends=["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];
    console.log(`Hello ${ myFriends[0] }`);  // Hello Ahmed
    console.log(`Hello ${ myFriends[1] }`);  // Hello Mohamed
    console.log(`Hello ${ myFriends[2] }`);  // Hello Sayed
    console.log(`${ myFriends[2][2] }`);     //         y

    console.log(`Hello ${ myFriends[3] }`);       // Hello Marwan,Ali
    console.log(`Hello ${ myFriends[3][1] }`);    // Hello Ali
    console.log(` ${ myFriends[3][1][2] }`);      //         i

    console.log(myFriends); // (4) ['Ahmed', 'Mohamed', 'Sayed', Array(2)]

    myFriends[1]="Sami";
    console.log(myFriends); // (4) ['Ahmed', 'Sami', 'Sayed', Array(2)]

    myFriends[3]="Ameer";
    console.log(myFriends); // (4) ['Ahmed', 'Sami', 'Sayed', 'Ameer']

    myFriends[2]=["Hassan", "Mostafa"];
    console.log(myFriends); // (4) ['Ahmed', 'Sami', Array(2), 'Ameer']

    console.log(typeof myFriends);         //object
    console.log(Array.isArray(myFriends)); //true
  }

  // #041 – Using Length With Array
  {
    let myFriends=["Ahmed", "Mohamed", "Sayed", "Alaa"];
    console.log(myFriends.length);    // 4

    myFriends[3]="Sami";
    console.log(myFriends);           // (4) ['Ahmed', 'Mohamed', 'Sayed', 'Gamal']

    myFriends[6]="Gamal";
    console.log(myFriends);           // (7) ['Ahmed', 'Mohamed', 'Sayed', 'Sami', empty × 2, 'Gamal']
    console.log(myFriends.length);    //  7
  } {
    let myFriends=["Ahmed", "Mohamed", "Sayed", "Alaa"];
    console.log(myFriends.length);    // 4

    // for add item to last item array
    myFriends[4]="Gamal";
    console.log(myFriends);      // (5) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Gamal']

    // for add item to last item array "Dynamic"
    myFriends[myFriends.length]="Sami";
    console.log(myFriends);      // (6) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Gamal', 'Sami']

    // for update name last item "Dynamic"
    myFriends[myFriends.length-1]="Ameer";
    console.log(myFriends);      // (6) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Gamal', 'Ameer']

    // for change the length array
    myFriends.length=[2];
    console.log(myFriends);      // (2) ['Ahmed', 'Mohamed']
  }
  // #042 – Add And Remove From Array
  {
    let myFriends=["Ahmed", "Mohamed", "Sayed", "Alaa"];
    console.log(myFriends);        // (4) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa']

    // unshift("", "") add element to the First
    myFriends.unshift("Osama", "Nabil");
    console.log(myFriends);        // (6) ['Osama', 'Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa']

    // push("", "") add element to the First
    myFriends.push("Sami", "Ameer");
    console.log(myFriends);        // (8) ['Osama', 'Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Sami', 'Ameer']

    // shift() remove first element from array
    myFriends.shift();
    console.log(myFriends);        // (7) ['Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Sami', 'Ameer']

    let first=myFriends.shift();
    console.log(myFriends);        // (6) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Sami', 'Ameer']
    console.log(first);            // Nabil

    // pop() remove last element from array
    myFriends.pop();
    console.log(myFriends);        // (7) ['Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Sami', 'Ameer']

    let last=myFriends.pop();
    console.log(myFriends);        // (5) ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Sami']
    console.log(last);             // Sami
  }
  // #043 – Searching Array
  {
    let myFriends=["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

    console.log(myFriends);

    // indexof (search element, from index[opt])
    console.log(myFriends.indexOf("Ahmed"));    // 0 , will get  first value
    console.log(myFriends.indexOf("Ahmed", 2)); // 4 

    // lastIndexof (search element, from index[opt])
    console.log(myFriends.lastIndexOf("Ahmed"));    // 4 , will get  first value
    console.log(myFriends.lastIndexOf("Ahmed", 2)); // 0 

    // includes (search element, from index[opt])
    console.log(myFriends.includes("Ahmed"));    // true
    console.log(myFriends.includes("Ahmed", 2)); // true

    if(myFriends.indexOf("Sami")===-1) { // indexof no found will return -1
      console.log("not Found");  // not found
    }
  }
  // #044 – Sorting Array
  {
    let myFriends=[10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];
    console.log(myFriends); // (10) [10, 'Sayed', 'Mohamed', '90', 1000, 100, 20, '10', -20, -10]
    console.log(myFriends.sort()); // (10) [-10, -20, 10, '10', 100, 1000, 20, '90', 'Mohamed', 'Sayed']
    console.log(myFriends.reverse()); // (10) ['Sayed', 'Mohamed', '90', 20, 1000, 100, '10', 10, -20, -10]
    console.log(myFriends.sort().reverse());
  }
  // #045 – Slicing Array
  {
    let myFriends=["Ahmed", "Mohamed", "Ali", "Osama", "Gamal", "Ameer"];

    console.log(myFriends);               // (6) ['Ahmed', 'Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']
    console.log(myFriends.slice());       // (6) ['Ahmed', 'Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']
    console.log(myFriends.slice(1));      // (5) ['Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']
    console.log(myFriends.slice(1, 3));   // (2) ['Mohamed', 'Ali']
    console.log(myFriends.slice(-3));     // (3) ['Osama', 'Gamal', 'Ameer']
    console.log(myFriends.slice(1, -2));  // (3) ['Mohamed', 'Ali', 'Osama']
    console.log(myFriends.slice(-4, -2)); // (2) ['Ali', 'Osama']

    console.log(myFriends); // return array not change

    // splice return new array
    //  splice(start[mand], delete count[opt][0 no remove], the items to add[opt])

    myFriends.splice(0, 0, "Sameer", "Samara");
    console.log(myFriends); //(8) ['Sameer', 'Samara', 'Ahmed', 'Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']

    myFriends.splice(0, 1);
    console.log(myFriends); //(7) ['Samara', 'Ahmed', 'Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']

    myFriends.splice(0, 2);
    console.log(myFriends); //(5) ['Mohamed', 'Ali', 'Osama', 'Gamal', 'Ameer']

    myFriends.splice(2, 2, "Sameer", "Samara");
    console.log(myFriends); //(5) ['Mohamed', 'Ali', 'Sameer', 'Samara', 'Ameer']

  }
  // #046 – Joining Arrays; return new array
  {
    let myFriends=["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
    let myNewFriends=["Samar", "Samah"];
    let schoolFriends=["Haytham", "Shady"];

    let allFriends=myFriends.concat(myNewFriends, schoolFriends, "Gameel", ["one", "two"]);

    console.log(allFriends);         // (13) ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer', 'Samar', 'Samah', 'Haytham', 'Shady', 'Gameel', 'one', 'two']

    console.log(allFriends.join());  // Ahmed,Sayed,Ali,Osama,Gamal,Ameer,Samar,Samah,Haytham,Shady,Gameel,one,two
    console.log(allFriends.join(""));  // AhmedSayedAliOsamaGamalAmeerSamarSamahHaythamShadyGameelonetwo
    console.log(allFriends.join(" "));  // Ahmed Sayed Ali Osama Gamal Ameer Samar Samah Haytham Shady Gameel one two
    console.log(allFriends.join(" @ "));  // Ahmed @ Sayed @ Ali @ Osama @ Gamal @ Ameer @ Samar @ Samah @ Haytham @ Shady @ Gameel @ one @ two

    console.log(allFriends.join(" ").toUpperCase());  // AHMED SAYED ALI OSAMA GAMAL AMEER SAMAR SAMAH HAYTHAM SHADY GAMEEL ONE TWO
  }

}