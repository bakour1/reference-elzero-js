{ // assignment
  // -------------1111111111111

  const setOfNumbers = new Set( [ 10 ] );
  setOfNumbers.add( 20 ).add( setOfNumbers.size );

  console.log( setOfNumbers );
  console.log( Math.min( ...setOfNumbers ) );
  console.log( [ ...setOfNumbers ].pop() );


  // --------------22222222222222222

  let myFriends = [ "Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama" ];

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
