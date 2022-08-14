
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


