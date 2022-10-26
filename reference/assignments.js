
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

  console.log( getId( points ) ); // 10251004051
  console.log( getId( points ) ); // 40125510010
  console.log( getId( points ) ); // 10025401105
  console.log( getId( points ) ); // 51100104025
  console.log( getId( points ) ); // 12540100510
  console.log( getId( points ) ); // 10010152540
  console.log( getId( points ) ); // 25510401100
  console.log( getId( points ) ); // 11025510040
  console.log( getId( points ) ); // 10051254010
  console.log( getId( points ) ); // 11002510540
  console.log( getId( points ) ); // 10054025101
  console.log( getId( points ) ); // 40100110525
  console.log( getId( points ) ); // 10405251001
  console.log( getId( points ) ); // 25140510100
  console.log( getId( points ) ); // 40510251001

}
// largest word from a string or array
{
  const findLongest = s => Math.max( ...s.split( " " ).map( x => x.length ) ); // findLongest word
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

  console.log( longestOne( "pro in programming" ) ); // programming


  // method ((( 2 )))
  function longestTwo ( str ) {

    // Split the string into array
    str = str.split( " " );

    // Return the first sorted item of the Array
    return str.sort( ( a, b ) => b.length - a.length )[ 0 ];
  }

  console.log( longestTwo( "pro in programming" ) ); // programming

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
  console.log( longestThree( "pro in programming" ) ); // programming
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

  console.log( [ ...str ] ); // 1
  console.log( Array.from( str ) ); // 2
  console.log( Array.of( ...str ) ); // 3
  console.log( str.split( '' ) ); // 4
  console.log( Object.values( str ) ); // 5
  console.log( Object.assign( [], str ) ); // 6

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
  let myInfoMap = new Map( Object.entries( myInfo ) ); // convert object to map
  console.log( myInfoMap ); // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
  console.log( myInfoMap.size ); // 3
  console.log( myInfoMap.has( 'role' ) ); // true
}
// concat array
{
  let n1 = [ 1, 2, 3 ];
  let n2 = [ 4, 5, 6 ];

  console.log( [ ...n1, ...n2 ] ); // 1
  console.log( n1.concat( n2 ) ); // 2
  console.log( [].concat( n1, n2 ) ); // 3
  console.log( ( n1.join( "" ) + "" + n2.join( "" ) ).split( "" ).map( ( e ) => +e ) ); // 4
  console.log( Array.from( [ n1, n2 ] ).flat() ); // 5

  n1.push( ...n2 );
  console.log( n1 ); // 6

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

    console.log( eachCons( lst, 1 ) ); // [[3], [5], [8], [13]]
    console.log( eachCons( lst, 2 ) ); // [[3,5], [5,8], [8,13]]
    console.log( eachCons( lst, 3 ) ); // [[3,5,8], [5,8,13]]
  } {
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

