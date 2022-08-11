console.log( new Date( "1993-08-20" ) );
console.log( new Date( "1993 08 20" ) );
console.log( new Date( "1993 ,08 ,20" ) );
console.log( new Date( Date.parse( "Aug 20 1993" ) ) );

/* Needed Output
    "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
    "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
    "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
*/

//Way ReEx
let nu = '1996611';
let reEx = nu.match( /(\d{4})(\d{1})(\d{2})/ );
let myBir3 = new Date( reEx[ 1 ], reEx[ 2 ], reEx[ 3 ] );
console.log( myBir3 );
