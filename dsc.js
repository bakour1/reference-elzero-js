let input = document.querySelector( "input" );
let btn = document.querySelector( "button" );
let output = document.querySelector( ".output ul" );
let spans = document.querySelectorAll( "span" );
let arr = [ "" ];

let array = [];
// if ( window.localStorage.getItem( "tasks" ) !== [] ) {
//   array = array.concat( window.localStorage.tasks );
//   array.forEach( item => {
//     let li = document.createElement( "li" );
//     let span = document.createElement( "span" );
//     let contentSpan = document.createTextNode( "delete" );
//     let contentLi = document.createTextNode( item.Title );

//     li.append( span );
//     li.append( contentLi );
//     span.append( contentSpan );
//     output.appendChild( li );
//     arr.push( input.value );

//   } );
// }


btn.onclick = function () {

  if ( arr.includes( input.value ) ) return;
  let li = document.createElement( "li" );
  let span = document.createElement( "span" );
  let contentSpan = document.createTextNode( "delete" );
  let contentLi = document.createTextNode( input.value );
  let idValue = Math.trunc( Math.random() * 10e10 );

  li.append( span );
  li.append( contentLi );
  span.append( contentSpan );
  output.appendChild( li );
  arr.push( input.value );

  array.push( { id: idValue, Title: input.value } );
  window.localStorage.setItem( "tasks", JSON.stringify( array ) );
  input.value = "";
  console.log( array );
};



document.addEventListener( "click", ( e ) => {
  if ( e.target.matches( "span" ) ) {
    console.log( e.target.parentElement.lastChild );
    // e.target.parentElement.lastChild
    // x = array.filter( s => s.Title !== e.target.parentElement.lastChild );
    let x = array.splice( e.target.parentElement.lastChild, 1 );
    window.localStorage.setItem( "tasks", JSON.stringify( array ) );
    e.target.parentElement.remove();
    console.log( array );
  };
} );




/* let arr = [ { s: "sam", b: "bbbb" }, { f: "ffff", c: "ccccc" } ];
console.log( arr[ 0 ].s );
console.log( arr.filter( e => e.s !== "sam" ) );
 */
