//  Destructuring

let myFriends = [ "Ahmed", "Sami", "Osama", "Ali" ];
let [ a, b, c, d, e = "ssss" ] = myFriends;

console.log( a );                // Ahmed
console.log( b );                // Sami
console.log( c );                // Osama
console.log( d );                // Ali
console.log( e );                // ssss

// -------------------------------------------------------------------------

let [ x, y, z ] = myFriends;
console.log( x );                // Ahmed
console.log( y );                // Sami
console.log( z );                // Osama

// -------------------------------------------------------------------------

[ x, y, , z ] = myFriends;
console.log( x );                // Ahmed
console.log( y );                // Sami
console.log( z );                // Ali

/* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

let myFriends = [ "Sami", "Osama", "Ali", [ "Shady", "Amr", [ "Mohamed", "Gamal" ] ] ];
let [ , , , [ a, , [ , b ] ] ] = myFriends;
console.log( myFriends[ 3 ][ 2 ][ 1 ] );          // Gamal

console.log( a );                                 // Shady
console.log( b );                                 // Gamal

/* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

// - Destructuring Array => Swapping Variables

let book = "video";
let video = "book";

let stash = book;

book = video;
video = stash;

console.log( book );            // book
console.log( video );           // video

// ---------------------------------------------

let book = "video";
let video = "book";

[ book, video ] = [ video, book ];

console.log( book );            // book
console.log( video );           // video

/* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

// Destructuring - Destructuring Object

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  skills: {
    html: 70,
    css: 80,
  }
};

console.log( user.theName );            // Osama
console.log( user.theAge );             // 39
console.log( user.theTitle );           // Developer
console.log( user.theCountry );         // Egypt
console.log( user.skills );             // {html: 70, css: 80}
console.log( user.skills.html );        // 70
// -----------------------------

let theName = user.theName;
let theAge = user.theAge;
let theTitle = user.theTitle;
let theCountry = user.theCountry;

console.log( theName );                 // Osama
console.log( theAge );                  // 39
console.log( theTitle );                // Developer
console.log( theCountry );              // Egypt
// -----------------------------

( { theName, theAge: n, theCountry, theColor: co = "Red", skills: { html: h, css } } = user );
// const { theName, theAge, theCountry } = user;

console.log( theName );                 // Osama
console.log( n );                       // 39
console.log( theTitle );                // Developer
console.log( theCountry );              // Egypt
// console.log( theColor );             // Red
console.log( co );                      // Red
// console.log( html );                 // 70
console.log( h );                       // 70
console.log( css );                     // 80
// -----------------------------------------------------------------------

const { html: skillOne, css: skillTwo } = user.skills;
// or
// const { html, css } = user.skills;
console.log( skillOne );                // 70
console.log( skillTwo );                // 80

/* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

//   Destructuring - Destructuring Function Parameters

const user = {
  theName: "Osama",
  theAge: 39,
  skills: {
    html: 70,
    css: 80,
  },
};

showDetails1( user );
console.log( "*********************" );
showDetails2( user );
console.log( "*********************" );
showDetails3( user );

function showDetails1 ( obj ) {
  console.log( `your name is ${ obj.theName }` );           // your name is Osama
  console.log( `your age is ${ obj.theAge }` );             // your age is 39
  console.log( `your CSS skill is ${ obj.skills.css }` );   // your CSS skill is 80
}
// -------------------------------

function showDetails2 ( { theName, theAge, skills: { css } } = user ) {
  console.log( `your name is ${ theName }` );              // your name is Osama
  console.log( `your age is ${ theAge }` );                // your age is 39
  console.log( `your CSS skill is ${ css }` );             // your CSS skill is 80
}
// -------------------------------

function showDetails3 ( { theName: n, theAge: a, skills: { css: c } } = user ) {
  console.log( `your name is ${ n }` );                    // your name is Osama
  console.log( `your age is ${ a }` );                     // your age is 39
  console.log( `your CSS skill is ${ c }` );               // your CSS skill is 80
}

/* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */

// Destructuring - Destructuring Mixed Content

const user = {
  theName: "Osama",
  theAge: 39,
  skills: [ "HTML", "CSS", "JavaScript" ],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

const { theName: n, theAge: a, skills: [ one, , three ], addresses: { egypt: eg } } = user;

console.log( `your name is ${ n }` );                             // your name is Osama
console.log( `your age is ${ a }` );                              // your age is 39
console.log( `your skills is ${ one } ${ three }` );              // your skills is HTML JavaScript
console.log( `your addresses is ${ eg }` );                       // your addresses is Cairo
