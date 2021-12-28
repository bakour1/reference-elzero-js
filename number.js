
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