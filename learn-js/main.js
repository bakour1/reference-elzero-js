//  –  Class Static Properties And Methods
{
  class User {
    count = 0;
    static count1 = 1;
    constructor ( id, userName, salary ) {
      this.i = id;
      this.u = userName;
      this.s = salary;
    }
  }

  let userOne = new User( 100, 'elzero', 5000 );
  let userTwo = new User( 101, 'Sami', 6000 );

  console.log( userOne.u );                        // elzero
  console.log( userTwo.u );                        // Sami

  console.log( userOne.count );                    // 0
  console.log( User.count );                       // undefined

  console.log( userOne.count1 );                    // undefined
  console.log( User.count1 );                       // 0
}
