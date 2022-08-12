// – Try, Catch, Finally With Fetch


// const myPromise = new Promise( ( res, rej ) => {
//   setTimeout( () => {
//     rej( "i am bad promise" );
//   }, 2000 );
// } );

// async function readData () {
//   console.log( "before promise" );

//   try {
//     console.log( await myPromise );
//   } catch ( reason ) {
//     console.log( `Reason =>> ${ reason }` );
//   } finally {
//     console.log( "after promise" );
//   }
// }

// readData();


async function fetchData () {
  console.log( "before fetch" );

  try {
    let myData = await fetch( "https://api.github.com/users/bakour1/repos" );
    console.log( await myData.json() );
  } catch ( reason ) {
    console.log( `Reason =>> ${ reason }` );
  } finally {
    console.log( "after fetch" );
  }
}

fetchData();





// "https://api.github.com/users/bakour1/repos"
