// Edit The Class
class User {
  #c;
  constructor ( username, card ) {
    this.u = username;
    this.#c = card;
  }
  get showData () {
    let cleanNumber = this.#c.toString().replace( /[^\d]/ig, "" );

    // set - after 4th index
    let setNumber = cleanNumber.replace( /(\d{4})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4" );

    return `Hello ${ this.u } Your Credit Card Number Is ${ setNumber }`;
  }
}

// Do Not Edit Anything Below

let userOne = new User( "Osama", "1234-5678-1234-5678" );
let userTwo = new User( "Ahmed", "1234567812345678" );
let userThree = new User( "Ghareeb", 1234567812345678 );

console.log( userOne.showData );
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log( userTwo.showData );
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log( userThree.showData );
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log( userOne.c ); // Prevent Accessing To Card Property Here
// Undefined


