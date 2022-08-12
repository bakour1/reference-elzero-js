// AJAX Call to access the JSON Object
let myRequest = new XMLHttpRequest();
myRequest.open( "GET", "./articles.json" );
myRequest.send();

// Verify Request success completed and Response Data is present
myRequest.onreadystatechange = function () {
  if ( this.readyState === 4 && this.status === 200 ) {

    // Print the response in the console to make sure everything is in order
    console.log( this.responseText );
    console.log( "Data Loaded" );

    // Convert JSON to JavaScript Object and store in mainData
    let mainData = JSON.parse( this.responseText );

    // change the section for category to  All
    mainData.forEach( obj => {
      obj.category = "ALL";
    } );

    // Print mainData variable content in console after update
    console.log( mainData );

    // Convert JS Object to JSON Object and store in updatedData
    let updatedData = JSON.stringify( mainData );

    // Print the content of the UpdatedData variable in the console
    console.log( updatedData );

    // Create a div inside the page with an id named data
    let section = document.createElement( "div" );
    section.id = "data";

    // Loop worked on all previous JSON Object data
    mainData.forEach( obj => {

      // init all elements
      let div = document.createElement( "div" ),
        title = document.createElement( "h2" ),
        content = document.createElement( "p" ),
        author = document.createElement( "p" ),
        category = document.createElement( "p" );

      // create text and add to contain
      title.appendChild( document.createTextNode( obj.title ) );
      content.appendChild( document.createTextNode( obj.content ) );
      author.appendChild( document.createTextNode( obj.author ) );
      category.appendChild( document.createTextNode( obj.category ) );

      // Printing data into the child Div
      div.appendChild( title );
      div.appendChild( content );
      div.appendChild( author );
      div.appendChild( category );

      // Printing data into the parent Div
      section.appendChild( div );
    } );

    // Print data into document
    document.body.appendChild( section );
  }
};




















// // – Loop On Data
// /*
//   Ajax
//   Loop On Data

//   Search
//   - Cross Origin API [CORS]
//   - API Authentication
// */

// let myRequest = new XMLHttpRequest();

// myRequest.open( "GET", "https://api.github.com/users/bakour1/repos", true );
// // myRequest.open( "GET", "./test.json", true );
// myRequest.send();
// myRequest.onreadystatechange = function () {
//   if ( this.readyState === 4 && this.status === 200 ) {
//     let jsData = JSON.parse( this.responseText );

//     for ( let i = 0; i < jsData.length; i++ ) {
//       let div = document.createElement( "div" );
//       let repoName = document.createTextNode( jsData[ i ].full_name );
//       div.appendChild( repoName );
//       document.body.appendChild( div );
//     }
//   }

// };


