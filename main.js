function validateCode ( code ) {
  return /[1-3]/g.test( code );
}

console.log( validateCode( 321 ) );
