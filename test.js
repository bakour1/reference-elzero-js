let input = document.querySelector( "input" );
let btn = document.querySelector( "button" );
let output = document.querySelector( ".output ul" );
let spans = document.querySelectorAll( "span" );
let arr = [ "" ];

let array = [];
// window.localStorage.setItem( "Tasks", array );

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
};



document.addEventListener( "click", ( e ) => {
  if ( e.target.matches( "span" ) ) {
    e.target.parentElement.remove();
    e.target.parentElement.lastChild;

    window.localStorage.removeItem( "tasks", JSON.stringify( array ) );

  };
} );
