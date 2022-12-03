function findChildren ( str ) {
  const obj = {};
  let counter = 1, result = '', array = [ ...str.toLowerCase() ].sort();

  for ( const ele of array ) {
    obj[ ele ] = counter + ( obj[ ele ] || 0 );
  }

  for ( const key in obj ) {
    result += key.toUpperCase();
    result += key.repeat( obj[ key ] - 1 );
  }

  return result;
}

let str = 'bhsSseeHehhEBsssb';
console.log( findChildren( str ) );

// BbbHhhhSsssssEeee
