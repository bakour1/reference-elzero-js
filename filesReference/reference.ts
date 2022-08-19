// Install Typescript And Transpile Files
{
  //  node -v                                       - Be Sure Nodejs Is Installed => Check From Terminal With Command
  // npm i -g typescript                            - Install Typescript
  // tsc -v                                         - Be Sure Typescript Is Installed => Check From Terminal With Command
  // tsc index.ts                                   - Compile JS File
}

// Create Configuration And Watch Files
{
  // tsc index.ts                                   - Compile JS File
  // tsc -h                                         - list help
  // tsc -w index.ts                                - watch live file.ts
  // tsc --init                                     - initialize json file
  // tsc

  // we are edit in tsconfig.json ----------------------
  // "rootDir": "./src"
  // "sourceMap": true
  // "outDir": "./dist"
  // "removeComments": true
}

// Statically vs Dynamically Typed Languages
{
  /*
  Statically Typed Language Like [Rust, C, C++]
    - Variables Types Are Static, Once You Declare It You Cannot Change
    - Type Of A Variable Is Known At Compile Time "Do Type Checking At Compile-Time"
      --- Have Better Performance At Run-Time Due To Not Needing To Check Types Dynamically
    - Error Detected Earlier

  Dynamically Typed Language Like [PHP, Python, JavaScript]
    - Variables Types Are Dynamic, You Can Always Change It
    - "Type Checking At Execution-Time"
    - Error Can Be Detected After Execution
  */
  // let num = 10;
  // num = "Elzero";
  // console.log(num);

  let age = 40;
  if ( age > 30 ) {
    console.log( "Good" );
  } else {
    console.log( age.repeat( 3 ) );
  }
}

// Type Annotations And Any Type
{
  /*
  Type Annotations || Signature
  -- Indicate The Data Type Of Variables
  -- Indicate The Data Type Of Functions Input/Output
  -- Objects, etc.

  - Why We Use It ?
  - Is It Mandatory ?
  - What Happen If We Didnt Use It ?
*/

  let theName = "Elzero";
  let theAge: number = 40;
  let hire: boolean = true;
  let all: any = "Elzero Web School";
  let allVars; // Any

  theName = "Osama";
  all = 100;

  function add ( n1: number, n2: number ) {
    return n1 + n2;
  }

  console.log( add( 10, 20 ) );
  console.log( typeof add( 10, 20 ) );

  function add ( n1, n2 ) {
    return n1 + n2;
  }

  console.log( add( 10, "20" ) );
  console.log( typeof add( 10, "20" ) );
}

// Type Annotations With Array
{
  /*
  Type Annotations With Arrays
*/

  let all: string | number | boolean = "Osama";

  all = "A";
  all = 100;
  all = true;

  let myFriends: string[] = [ "Osama", "Ahmed", "Sayed" ];

  for ( let i = 0; i < myFriends.length; i++ ) {
    console.log( myFriends[ i ].repeat( 3 ) );
  }
}

// Type Annotations With Multi-Dimensional Array
{
  /*
  Type Annotations With Multidimensional Arrays
*/

  let arrayOne: number[] = [ 1, 2, 3, 4, 5 ];
  let arrayTwo: string[] = [ "A", "B", "C" ];
  let arrayThree: ( string | number )[] = [ 1, 2, 3, 4, "A", "B", "C" ];

  let arrayFour: ( string | number | string[] | boolean )[] = [ 1, 2, 3, 4, "A", "B", [ "C", "D" ], true, false ];
}

// Type Annotations With Function
{
  /*
  Type Annotations With Functions

  - noImplicitAny

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.
*/
  let showMsg = true;

  function showDetails ( name: string, age: number, salary: number ): string/* output=> */ {
    let test = 10;
    if ( showMsg ) {
      return `hello ${ name }, age is ${ age }, salary is ${ salary }, test var ${ test }`;
    }
    return 'no data to show';
  }

  console.log( showDetails( "sami", 29, 5000 ) );

}

// Optional And Default Parameter
{
  /*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
  - "?" Optional Parameter
*/

  function showData ( name?: string, age?: number, country?: string ) {
    return `${ name } - ${ age } - ${ country }`;
  }

  console.log( showData( "Osama", 40, "Egypt" ) );
}

// Function Rest Parameter
{
  /*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
  */

  function addAll ( ...nums: number[] ): number {
    let result = 0;
    for ( let i = 0; i < nums.length; i++ ) {
      result += nums[ i ];
    }
    // nums.forEach((num) => result += num);
    return result;
  }

  console.log( addAll( 10, 20, 30, 100, 10.5, +true ) );
}

// Anonymous And Arrow Function
{
  /*
  Function
  - Anonymous Function
  - Arrow Function
 */

  const add = function ( num1: number, num2: number ): number {
    return num1 + num2;
  };

  console.log( add( 10, 20 ) );

  const addWithArrow = ( num1: number, num2: number ): number => num1 + num2;

  console.log( addWithArrow( 10, 20 ) );
}

// - Data Types – Type Alias
{
  // add type st =>string
  type st = string;
  let theName: st = "sami";
  theName = "osama";

  // add type standnum =>  string and number
  type standnum = string | number;
  let all: standnum = 10;
  all = "sami";

  // add Alias Advanced
  type Buttons = {
    up: string,
    right: string,
    down: string,
    left: string,
  };

  type Last = Buttons & {
    x: boolean,
  };

  function getActions ( btns: Last ) {
    console.log( `action for button up is ${ btns.up }` );
    console.log( `action for button right is ${ btns.right }` );
    console.log( `action for button down is ${ btns.down }` );
    console.log( `action for button left is ${ btns.left }` );
  }

  getActions( { up: "jump", right: "go right", down: "go down", left: "go left", x: true } );
}

// – Data Types – Literal Types
{
  type nums = ( -1 | 0 | 1 );

  function compare ( num1: number, num2: number ): nums {
    if ( num1 === num2 ) {
      return 0;
    } else if ( num1 > num2 ) {
      return 1;
    } else {
      return -1;
    }
  }


  console.log( compare( 20, 20 ) );
  console.log( compare( 20, 15 ) );
  console.log( compare( 20, 25 ) );
}

// – Data Types – Tuple
{
  /*
    --- Is Another Sort Of Array Type
    --- We knows Exactly How Many Elements It Contains
    --- We Knows Which Types It Contains At Specific Positions
  */

  let article: readonly [ number, string, boolean ] = [ 29, "sami", true ];

  console.log( article );                         // (3) [29, 'sami', true]

  article = [ 22, "osama", true ];
  console.log( article );                         // (3) [22, 'osama', true]

  // article.push( 100 );
  console.log( article );                         // (3) [22, 'osama', true]

  const [ id, title, published ] = article;
  console.log( id );                              // 22
  console.log( title );                           // osama
  console.log( published );                       // true

}

// – Data Types – Void And Never
{
  /*
    Data Types
    - Void
    --- Function That Will Return Nothing
    --- Function In JavaScript That Not Return A Value Will Show undefined
    --- undefined is not void
    - Never
    --- Return Type Never Returns
    --- The Function Doesn't Have A Normal Completion
    --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
  */

  function logging ( msg: string ): void {
    console.log( msg );
    return;
  }

  console.log( logging( "Iam A Message" ) );
  console.log( "Test" );

  const fail = ( msg: string ) => {
    // throw new Error(msg);
    // return 10;
  };

  function alwaysLog ( name: string ): never {
    while ( true ) {
      console.log( name );
    }
  }

  // alwaysLog( "Osama" );
  // console.log("Test");
}

// Data Types – Enums 1
{
  /*
    - Enums => Enumerations
    --- Allow Us To Declare A Set Of Named Constants
    --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
    --- It Organize Your Code
    --- By Default Enums Are Number-Based, First Element Is 0
    --- Theres A Numeric Enums
    --- Theres A String-Based Enums
    --- Theres Heterogeneous Enums [String + Number]
  */

  // const kid = 15;
  // const easy = 9;
  // const medium = 6;
  // const hard = 3;

  const enum Level {
    kid = 15,
    easy = 9,
    medium = 6,
    hard = 3,
  }
  console.log( Level );       // {3: 'hard', 6: 'medium', 9: 'easy', 15: 'kid', kid: 15, easy: 9, medium: 6, hard: 3}
  console.log( Level[ '3' ] );  // hard
  console.log( Level.hard );  // 3

  let lvl: string = "easy";
  if ( lvl === "easy" ) {
    console.log( `the level is ${ lvl } and number of seconds is ${ Level.easy }` );
  } // the level is easy and number of seconds is 9
}

// Data Types – Enums 2
{
  /*
    - Enums => Enumerations
    --- Enum Can Refer To Other Enum
    --- Enum Can Refer To Same Enum
    --- Enum Can Have Calculations
    --- Enum Can Have Functions
  */

  function detHardSeconds (): number {
    return 3;
  }

  enum Kids {
    Five = 25,
    Seven = 20,
    Ten = 15
  }

  enum Level {
    // Insane,
    Kid = 15,
    Easy = 9,
    Medium = Easy - 3,
    Hard = detHardSeconds(),
    // Insane=99,
  }

  console.log( Level );           // {3: 'Hard', 6: 'Medium', 9: 'Easy', 15: 'Kid', Kid: 15, Easy: 9, Medium: 6, Hard: 3}
  console.log( Level[ '3' ] );    // Hard
  console.log( Level.Hard );      // 3

  let lvl: string = "Medium";

  if ( lvl === "Medium" ) {
    console.log( `the level is ${ lvl } and number of seconds is ${ Level.Medium }` );
  }
  // the level is Medium and number of seconds is 6

}

// – Data Types – Type Assertion
{
  /*
    --- Sometime Compiler doesn't Know The Information We Do
    --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
  */
  // let myImg = document.getElementById( "my-img" ) as HTMLImageElement;
  let myImg = <HTMLImageElement> document.getElementById( "my-img" );
  console.log( myImg.src );
  // C:\Users\sami\AppData\Local\Programs\Microsoft VS Code\resources\app\extensions\node_modules\typescript\lib\lib.dom.d.ts

  let data: any = "1000";
  console.log( data.repeat( 3 ) ); // 100010001000
  console.log( ( data as string ).repeat( 3 ) ); // 100010001000
}

// – Data Types – Intersection Ans Union Types
{
  /*
    - Union And Intersection Types
    --- Union Type
    ------ The | Symbol Is Used To Create The Union => "Or"

    --- Intersection Type
    ------ Is A Type That Combines Several Types Into One
    ------ The & Symbol Is Used To Create An Intersection => "And"

    --- If A Union Is An OR, Then An Intersection Is An AND.
  */

  type A = {
    one: string,
    two: number,
    three: boolean;
  };

  type B = A & {
    four: number;
  };

  type C = {
    five: boolean;
  };

  type Mix = A & C;

  function getActions ( nums: Mix ) {
    console.log( nums.one );
    console.log( nums.two );
    console.log( nums.three );
    // console.log( nums.four );
  }

  getActions( { one: "sami", two: 29, three: true, five: true } );
}

// – Interface Declaration
{
  /*
    - Interface Declaration
    --- Serve Like Types
    --- The Interface Describes The Shape Of An Object
    --- It Defines The Syntax To Follow

    --- Use With Object
    --- Use With Function
    --- Use Read Only And Optional Operator
  */

  interface User {
    id?: number,
    userName: string,
    readonly country: string;
  }

  let user: User = {
    userName: "sami",
    country: "Syria"
  };

  // user.country = "Syria";

  function getData ( data: User ) {
    console.log( `id is ${ data.id }` );
    console.log( `userName is ${ data.userName }` );
    console.log( `country is ${ data.country }` );
  }

  getData( { id: 200, userName: "ahmed", country: "KSA" } );
  /* OUTPUT
      id is 200
      userName is ahmed
      country is KSA
  */
}

// - Interface Method And Parameters;
{
  interface User {
    id: number,
    userName: string,
    country: string;
    sayHello (): string;
    getDouble: ( para: number ) => number,
    sayHi: () => string;
    getDouble2: ( para: number ) => number;

  }

  let user: User = {
    id: 100,
    userName: "sami",
    country: "Syria",
    sayHello () { return `Hello ${ this.userName }`; },
    getDouble ( n ) { return n * 2; },
    sayHi: () => { return `Hi ${ user.userName }`; },
    getDouble2: ( n ) => { return n * 2; },
  };

  console.log( user.id );                   // 100
  console.log( user.userName );             // sami
  console.log( user.country );              // syria
  console.log( user.sayHello() );           // Hello sami
  console.log( user.getDouble( 3 ) );       // 6
  console.log( user.sayHi() );              // Hi sami
  console.log( user.getDouble2( 10 ) );     // 20
}

// – Interface ReOpen And Use Cases
{
  // HomePage
  interface Settings {
    readonly theme: boolean,
    font?: string;
  }

  // Articles Page
  interface Settings {
    sidebar: boolean,
  }

  // Contact Page
  interface Settings {
    external: boolean,
  }

  let userSettings: Settings = {
    theme: true,
    font: "open sans",
    sidebar: false,
    external: true
  };
}

// – Interface Extends
{
  interface User {
    id: number,
    userName: string,
    country: string;
  }

  interface Moderator extends User {
    role: string | number;
  }

  interface Admin extends User, Moderator {
    protect: boolean;
  }

  let user: Admin = {
    id: 100,
    userName: "sami",
    country: "Syria",
    role: "mod",
    protect: true
  };

  console.log( user.id );                   // 100
}

// – Interface Final Discussion
{
  /*
    - Interface vs Type Aliases
    - Take A Look On HTMLElement Interface
  */

  let el = document.getElementById( "id" ) as HTMLElement;

  // Homepage
  type Settings {
    readonly theme: boolean;
    font: string;
    sidebar: boolean;
    external: boolean;
  };

  let userSettings: Settings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true
  };
}

// – Class Type Annotations
{
  class User {
    u: string;
    s: number;
    msg: () => string;

    constructor( userName: string, salary: number ) {
      this.u = userName;
      this.s = salary;
      this.msg = function () {
        return `hello ${ this.u }, your salary is ${ this.s }`;
      };
    }
    sayMsg () {
      return `hello ${ this.u }, your salary is ${ this.s }`;
    }
  }

  let userOne = new User( "sami", 5000 );
  console.log( userOne.u );                   // sami
  console.log( userOne.s );                   // 5000
  console.log( userOne.msg() );               // hello sami, your salary is 5000
  console.log( userOne.sayMsg() );            // hello sami, your salary is 5000
}

// – Class Access Modifiers
{
  /*
    - Data Access Modifiers & Parameters Properties
    --- Public
    ------ All Members Of A Class In TypeScript Are Public
    ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
    --- Private
    ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
    --- Protected
    ------ Same Like Private But Can Be Accessed Using The Deriving Class

    - TypeScript Is A Layer On Top Of JavaScript
    - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
  */

  class User {
    msg: () => string;
    constructor( private userName: string, protected salary: number, public readonly address: string ) {

      this.msg = function () {
        return `hello ${ this.userName }, your salary is ${ this.salary }`;
      };
    }
    sayMsg () {
      return `hello ${ this.userName }, your salary is ${ this.salary }`;
    }
  }

  let userOne = new User( "sami", 5000, "KSA" );

  console.log( userOne.msg() );               // hello sami, your salary is 5000
  console.log( userOne.sayMsg() );            // hello sami, your salary is 5000
}

// – Class Access Modifiers
{
  /*
    - Get And Set Accessors
  */

  class User {
    public get username (): string {
      return this._username;
    }
    public set username ( value: string ) {
      this._username = value;
    }
    msg: () => string;
    constructor( private _username: string, public salary: number, public readonly address: string ) {
      this.msg = function () {
        return `Hello ${ this._username } Your Salary Is ${ this.salary }`;
      };
    }
    sayMsg () {
      return `Hello ${ this._username } Your Salary Is ${ this.salary }`;
    }
    // get username() : string {
    //   return this._username;
    // }
    // set username(value: string) {
    //   this._username = value;
    // }
  }

  let userOne = new User( "Elzero", 6000, "Cairo" );

  console.log( userOne.username );
  userOne.username = "Ahmed";
  console.log( userOne.username );
  console.log( userOne.salary );
  console.log( userOne.msg() );
  console.log( userOne.sayMsg() );
}

// – Class Static Members
{
  /*
    --- Don't Use "name, length, call"
  */
  class User {
    private static _created: number = 0;

    public static get created (): number {
      return User._created;
    }
    public static set created ( value: number ) {
      User._created = value;
    }
    static getCount (): void {
      console.log( `${ this.created } objects created` );
    }
    constructor( public username: string ) {
      User.created++;
    }
  }

  let one = new User( "sami" );
  let one2 = new User( "sami" );
  let one3 = new User( "sami" );
  console.log( one.username );

  User.getCount();
}

//  – Class Implements Interface
{
  interface Settings {
    theme: boolean,
    font: string,
    save (): void;
  }

  class User implements Settings {
    constructor( public username: string, public theme: boolean, public font: string ) {

    }
    save (): void {
      console.log( "saved" );

    }
    update (): void {
      console.log( "updated" );

    }
  }

  let sami = new User( "sami", true, "open sans" );
}

// – Abstract Classes And Members
{
  /*
  Class
  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/

  abstract class Food {
    constructor( public title: string ) { }
    abstract getCookingTime (): void;
  }

  class Pizza extends Food {
    constructor( title: string, public price: number ) {
      super( title );
    }
    getCookingTime (): void {
      console.log( `Cooking Time For Pizza Is 1 Hour` );
    }
  }

  class Burger extends Food {
    constructor( title: string, public price: number ) {
      super( title );
    }
    getCookingTime (): void {
      console.log( `Cooking Time For Burger Is Half Hour` );
    }
  }

  let pizzaOne = new Pizza( "Awesome Pizza", 100 );

  console.log( pizzaOne.title );
  console.log( pizzaOne.price );
  pizzaOne.getCookingTime();
}

// – Polymorphism And Method Override
{

  // class Player {
  //   constructor( public name: string ) { }
  //   attack (): void {
  //     console.log( "attacking now" );
  //   }
  // }

  // class Amazon extends Player {
  //   constructor( name: string, public spears: number ) {
  //     super( name );
  //   }
  //   attack (): void {
  //     super.attack();
  //     console.log( 'attacking with spear' );
  //     this.spears -= 1;
  //   }
  // }

  // class barbarian extends Player {
  //   constructor( name: string, public axe: number ) {
  //     super( name );
  //   }
  //   attack (): void {
  //     super.attack();
  //     console.log( 'attacking with axe' );
  //     this.axe -= 1;
  //   }
  // }

  // let barOne = new barbarian( "sami", 100 );

  // console.log( barOne.name );
  // console.log( barOne.axe );
  // barOne.attack();
  // console.log( barOne.axe );
}
{
  class Player {
    constructor( public name: string ) { }
    attack (): void {
      console.log( "attacking now" );
    }
  }

  class Amazon extends Player {
    constructor( name: string, public spears: number ) {
      super( name );
    }
    override attack (): void {
      super.attack();
      console.log( 'attacking with spear' );
      this.spears -= 1;
    }
  }

  class barbarian extends Player {
    constructor( name: string, public axe: number ) {
      super( name );
    }
    override  attack (): void {
      super.attack();
      console.log( 'attacking with axe' );
      this.axe -= 1;
    }
  }

  let barOne = new barbarian( "sami", 100 );
  let barTwo = new Amazon( "sami", 100 );

  console.log( barOne.name );
  console.log( barOne.axe );
  barOne.attack();
  console.log( barOne.axe );
}

// – Generics Introduction
{
  /*
  Generics
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces
*/

  function returnNumber ( val: number ): number {
    return val;
  }
  function returnString ( val: string ): string {
    return val;
  }
  function returnBoolean ( val: boolean ): boolean {
    return val;
  }

  console.log( returnNumber( 100 ) );
  console.log( returnString( "Elzero" ) );
  console.log( returnBoolean( true ) );

  function returnType<T> ( val: T ): T {
    return val;
  }

  console.log( returnType<number>( 100 ) );
  console.log( returnType<string>( "Elzero" ) );
  console.log( returnType<boolean>( true ) );
  console.log( returnType<number[]>( [ 1, 2, 3, 4 ] ) );
}

// – Generics Multiple Types
{
  /*
  Generics
  - Arrow Function
  - Multiple Types
  - Discussion
*/

  function returnType<T> ( val: T ): T {
    return val;
  }

  console.log( returnType<number>( 100 ) );
  console.log( returnType<string>( "Elzero" ) );

  const returnTypeArrowSyntax = <T> ( val: T ): T => val;

  console.log( returnTypeArrowSyntax<number>( 100 ) );
  console.log( returnTypeArrowSyntax<string>( "Elzero" ) );

  function testType<T> ( val: T ): string {
    return `The Value Is ${ val } And Type Is ${ typeof val }`;
  }

  console.log( testType<number>( 100 ) );
  console.log( testType<string>( "Elzero" ) );

  function multipleTypes<T, S> ( valueOne: T, valueTwo: S ): string {
    return `The First Value Is ${ valueOne } And Second Value ${ valueTwo }`;
  }

  console.log( multipleTypes<string, number>( "Osama", 100 ) );
  console.log( multipleTypes<string, boolean>( "Elzero", true ) );
}

// – Generics Classes
{

  class User<T = string> {
    constructor( public value: T ) { }
    show ( msg: T ): void {
      console.log( `${ msg } - ${ this.value }` );
    }
  }

  let userOne = new User( "Elzero" );
  console.log( userOne.value );
  userOne.show( "message" );

  let userTwo = new User<number | string>( 100 );
  console.log( userTwo.value );
  userTwo.show( 100 );
}
