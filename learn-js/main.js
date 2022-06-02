// Regular Expression
{
  // Syntax
  {
    /*

      /pattern/modifier(s);
      new RegExp("pattern", "modifier(s)")

      Modifiers => Flags
      i => case-insensitive
      g => global
      m => Multiline

      Search Methods
      - match(Pattern)

      Match
      -- Matches A String Against a Regular Expression Pattern
      -- Returns An Array With The Matches
      -- Returns null If No Match Is Found.
    */
    let myString = "Hello Elzero Web School I Love elzero";

    console.log( myString.match( /Elzero/ ) );                    // ['Elzero', index: 6, input: 'Hello Elzero Web School I Love elzero', groups: undefined]
    console.log( myString.match( /Elzero/i ) );                   // ['Elzero', index: 6, input: 'Hello Elzero Web School I Love elzero', groups: undefined]
    console.log( myString.match( /Elzero/ig ) );                  // (2) ['Elzero', 'elzero']
  }
  // Ranges
  {
    let tld = "Com Net Org Info Code Io";

    // (X|Y) => X Or Y
    console.log( tld.match( /(org|info|io)/i ) );                // (2) ['Org', 'Org', index: 8, input: 'Com Net Org Info Code Io', groups: undefined]
    console.log( tld.match( /(org|info|io)/ig ) );               // (3) ['Org', 'Info', 'Io']
    // -------------------------------------------------------------

    let nums = '123#45$67&8910';

    // [0-9] => 0 To 9
    console.log( nums.match( /[0-9]/ ) );                        // ['1', index: 0, input: '12345678910', groups: undefined]
    console.log( nums.match( /[0-9]/g ) );                       // (11) ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0']
    console.log( nums.match( /[2-6]/g ) );                       // (5) ['2', '3', '4', '5', '6']
    // -------------------------------------------------------------

    // [^0-9] => Any Character Not 0 To 9
    console.log( nums.match( /[^0-9]/g ) );                      // (3) ['#', '$', '&']
    console.log( nums.match( /[^2-6]/g ) );                      // (6) ['1', '7', '8', '9', '1', '0']
    // -------------------------------------------------------------

    let Practice = "Os1 Os1Os Os2 Os8 Os8Os";
    console.log( Practice.match( /Os[5-9]Os/g ) );               // ['Os8Os']
    // -------------------------------------------------------------

    let myString = "AaBbcdefG123!234%^&*";

    // [a-z]
    // [^a-z]
    console.log( myString.match( /[a-z]/g ) );                   // (6) ['a', 'b', 'c', 'd', 'e', 'f']
    console.log( myString.match( /[^a-z]/g ) );                  // (14) ['A', 'B', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
    // -------------------------------------------------------------

    // [A-Z]
    console.log( myString.match( /[A-Z]/g ) );                   // (3) ['A', 'B', 'G']
    // [^A-Z]
    console.log( myString.match( /[^A-Z]/g ) );                  // (17) ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
    // -------------------------------------------------------------

    // [ace]
    console.log( myString.match( /[ace]/g ) );                   // (3) ['a', 'c', 'e']
    // [^ace]
    console.log( myString.match( /[^ace]/g ) );                  // (17) ['A', 'B', 'b', 'd', 'f', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
    // -------------------------------------------------------------

    // [a-zA-Z]
    console.log( myString.match( /[a-zA-Z]/g ) );                // (9) ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
    // [^a-zA-Z]
    console.log( myString.match( /[^a-zA-Z]/g ) );               // (11) ['1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
    // [^a-z^A-Z]
    console.log( myString.match( /[^a-z^A-Z]/g ) );              // (10) ['1', '2', '3', '!', '2', '3', '4', '%', '&', '*']
  }
  // Character Classes
  {

    let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';

    // . => matches any character, except newline or other line terminators.
    console.log( email.match( /./g ) );                                            // (59) ['O', '@', '@', '....

    // \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
    console.log( email.match( /\w/g ) );                                           // (35) ['O', 'g', 'c', .....

    // \d => matches digits from 0 to 9.
    console.log( email.match( /\d/g ) );                                           // (2) ['1', '1']

    // \D => matches non-digit characters.
    console.log( email.match( /\D/g ) );                                           // (57) ['O', '@', '@'....

    // \s => matches whitespace character.
    console.log( email.match( /\s/g ) );                                           // (6) [' ', ' ', ' ', ' ', ' ', ' ']

    // \S => matches non whitespace character.
    console.log( email.match( /\S/g ) );                                           // (53) ['O', '@', '@', ...

    let valid = /\w@\w.(com|net)/g;
    console.log( email.match( valid ) );                                           // (4) ['O@g.com', 'O@g.net', 'A@Y.com', '1@1.com']
    // -------------------------------------------------------------

    let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";

    console.log( names.match( /spam/ig ) );                                        // (6) ['Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'spam']

    // \b => matches at the beginning or end of a word.
    console.log( names.match( /\bspam/ig ) );                                      // (2) ['Spam', 'Spam']
    console.log( names.match( /spam\b/ig ) );                                      // (3) ['Spam', 'Spam', 'Spam']
    console.log( names.match( /(\bspam|spam\b)/ig ) );                             // (5) ['Spam', 'Spam', 'Spam', 'Spam', 'Spam']

    // \B => matches NOT at the beginning/end of a word.
    console.log( names.match( /\Bspam/ig ) );                                      // (4) ['Spam', 'Spam', 'Spam', 'spam']
    console.log( names.match( /spam\B/ig ) );                                      // (3) ['Spam', 'Spam', 'spam']
    console.log( names.match( /(\Bspam|spam\B)/ig ) );                             // (6) ['Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'spam']




  }
  // Test Method
  {
    // pattern.test(input)
    console.log( /(\bspam|spam\b)/ig.test( 'SAmi' ) );                      // false
    console.log( /(\bspam|spam\b)/ig.test( 'spami' ) );                     // true
  }
}
