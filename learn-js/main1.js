// ====================  Start Assignment One  ====================
let getData = ( apiLink ) => {

  return new Promise( ( res, rej ) => {
    let myRequest = new XMLHttpRequest();

    myRequest.onload = function () {
      if ( this.readyState === 4 && this.status === 200 ) {
        res( JSON.parse( this.responseText ) );
      } else {
        rej( new Error( "data not found" ) );
      }
    };

    myRequest.open( "GET", apiLink );
    myRequest.send();
  } );
};

getData( "./articles.json" ).then(
  ( resVal ) => {
    resVal.length = 5;
    console.log( resVal );
    return resVal;
  }
).then(
  ( finallyData ) => {
    finallyData.forEach( item => {
      let div = document.createElement( "div" );

      let h3 = document.createElement( "h3" );
      h3.appendChild( document.createTextNode( item.title ) );

      let p = document.createElement( "p" );
      p.appendChild( document.createTextNode( item.description ) );

      div.appendChild( h3 );
      div.appendChild( p );
      document.body.appendChild( div );
    } );
  }
);
// ====================  End Assignment One  ====================
// ====================  Start Assignment Two  ====================
fetch( "./articles.json" ).then(
  ( result ) => {
    let myData = result.json();
    return myData;
  }
).then(
  ( result ) => {
    result.length = 5;
    return result;
  }
).then(
  ( finallyData ) => {
    finallyData.forEach( item => {
      let div = document.createElement( "div" );

      let h3 = document.createElement( "h3" );
      h3.appendChild( document.createTextNode( item.title ) );

      let p = document.createElement( "p" );
      p.appendChild( document.createTextNode( item.description ) );

      div.appendChild( h3 );
      div.appendChild( p );
      document.body.appendChild( div );
    } );
  }
);

// ========================training =>
( async function getData () {
  let myData;

  try {
    let dataFetched = await fetch( "./articles.json" );
    myData = await dataFetched.json();
    myData.length = 5;
  }
  finally {
    myData.forEach( item => {
      let div = document.createElement( "div" );

      let h3 = document.createElement( "h3" );
      h3.appendChild( document.createTextNode( item.title ) );

      let p = document.createElement( "p" );
      p.appendChild( document.createTextNode( item.description ) );

      div.appendChild( h3 );
      div.appendChild( p );
      document.body.appendChild( div );
    } );
  };
} )();

// ====================  End Assignment One  ====================
