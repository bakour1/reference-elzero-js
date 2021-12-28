

//  search regexp
{
  const remove = s => s.replace( /[!]+$/g, '' );
  console.log( removeLastChar( "Hi!! ! Hi! hi!" ) );  // Hi!! ! Hi! hi

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

{/* [ 31 ]  || A-Za-z ⇛ */
  String.prototype.toAlternatingCase = function () {
    return this.split( "" ).map( a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase() ).join( '' );
  };
  // or
  String.prototype.toAlternatingCase = function () {
    return this.replace( /[A-Za-z]/g, x => x > "Z" ? x.toUpperCase() : x.toLowerCase() );
  };
  // or
  // "abcdefghijklmnopqrstuvwxyz"
  const position = a => `Position of alphabet: ${ "&abcdefghijklmnopqrstuvwxyz".indexOf( a ) }`;
  // or
  function position ( letter ) {
    return `Position of alphabet: ${ letter.charCodeAt( 0 ) - 96 }`;
  }
  // or
  function position ( c ) {
    return 'Position of alphabet: ' + ( c.charCodeAt( 0 ) - 'a'.charCodeAt( 0 ) + 1 );
  }

}

{/* [ 32 ] removeLastChar|| ) );  // Hi!! ! Hi! hi ⇛ Hi!! ! Hi! hi */
  function removeLastChar ( s ) {
    return s.replace( /!+$/, '' );
  }
  // or
  // RegExp
  const remove = s => s.replace( /[!]+$/g, '' );
  console.log( removeLastChar( "Hi!! ! Hi! hi!" ) );  // Hi!! ! Hi! hi

}

{/* [  ] ||nextId( [ 0, 1, 2, 3, 5 ] )  ⇛  4*/

  function nextId ( ids ) {
    var x = 0;
    while ( ids.includes( x ) )
      x++;
    return x;
  }
}

{/* [  ] aspect ratio || ⇛ */
  function aspectRatio ( width, height ) {
    return [ Math.ceil( height * 16 / 9 ), height ];
  }

}

{/* [ to binary ] || ⇛ */
  function toBinary ( n ) {
    return +( n >>> 0 ).toString( 2 );
    return +n.toString( 2 );
  }
}

{/* [ 33 ] || ⇛ */

}

{/* [ 28 ] || ⇛ */


}

{/* [ 29 ] || ⇛ */


}

{/* [ 30 ] || ⇛ */


}

{/* [ 31 ] || ⇛ */


}

{/* [ 32 ] || ⇛ */


}

{/* [ 33 ] || ⇛ */

}


