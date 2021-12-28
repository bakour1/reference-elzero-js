let fontFamily = document.getElementById( "font-family" );
let color = document.getElementById( "color" );
let fontSize = document.getElementById( "font-size" );
let output = document.querySelector( "article" );

if ( window.localStorage.getItem( "fontFamily" ) ) {
  document.querySelector( `[value='${ localStorage.fontFamily }']` ).selected =
    "select";
  output.style.fontFamily = window.localStorage.getItem( "fontFamily" );
}

if ( window.localStorage.getItem( "color" ) ) {
  document.querySelector( `[value='${ localStorage.color }']` ).selected = "select";
  output.style.color = window.localStorage.getItem( "color" );
}
if ( window.localStorage.getItem( "fontSize" ) ) {
  document.querySelector( `[value='${ localStorage.fontSize }']` ).selected =
    "select";
  output.style.fontSize = window.localStorage.getItem( "fontSize" );
}

fontFamily.onchange = function () {
  output.style.fontFamily = this.value;
  localStorage.setItem( "fontFamily", this.value );
};

color.onchange = function () {
  output.style.color = this.value;
  localStorage.setItem( "color", this.value );
};
fontSize.onchange = function () {
  output.style.fontSize = this.value;
  localStorage.setItem( "fontSize", this.value );
};
/* -------------------------------------------------------------- */
let inputs = document.querySelectorAll( "input" );
let select = document.getElementById( "select" );

if ( window.sessionStorage.getItem( "fName" ) ) {
  document.getElementById( "fName" ).value = window.sessionStorage.getItem(
    "fName"
  );
}
if ( window.sessionStorage.getItem( "lName" ) ) {
  document.getElementById( "lName" ).value = window.sessionStorage.getItem(
    "lName"
  );
}
if ( window.sessionStorage.getItem( "email" ) ) {
  document.getElementById( "email" ).value = window.sessionStorage.getItem(
    "email"
  );
}
if ( window.sessionStorage.getItem( "num" ) ) {
  document.querySelector( `[value='${ sessionStorage.num }']` ).selected = "select";
}

inputs.forEach( ( item ) => {
  item.onblur = function () {
    sessionStorage.setItem( this.id, this.value );
  };
} );
select.onchange = function () {
  sessionStorage.setItem( "num", this.value );
};
