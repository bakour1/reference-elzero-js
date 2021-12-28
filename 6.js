
// advanced example OBJECT
{
  //  AND , OR , XOR
  {


    var ops = {
      'AND': ( a, b ) => a && b,
      'OR': ( a, b ) => a || b,
      'XOR': ( a, b ) => a !== b
    };


    function logicalCalc2 ( array, op ) {
      return array.reduce( ops[ op ] );
    }

    console.log( logicalCalc2( [ true, true, true, false ], "AND" ) );    // false
    console.log( logicalCalc2( [ true, true, true, false ], "OR" ) );     // true
    console.log( logicalCalc2( [ true, true, true, false ], "XOR" ) );    // true

  }
  // getPlanetName
  {
    function getPlanetName ( id ) {

      switch ( id ) {
        case 1:
          return 'Mercury';
        case 2:
          return 'Venus';
        case 3:
          return 'Earth';
        case 4:
          return 'Mars';
        case 5:
          return 'Jupiter';
        case 6:
          return 'Saturn';
        case 7:
          return 'Uranus';
        case 8:
          return 'Neptune';
      }
    }
    console.log( getPlanetName( 2 ) ); // 'Venus'
    console.log( getPlanetName( 5 ) ); // 'Jupiter'
    console.log( getPlanetName( 3 ) ); // 'Earth'
    // ⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬⏬
    function getPlanetName ( id ) {
      return {
        1: 'Mercury',
        2: 'Venus',
        3: 'Earth',
        4: 'Mars',
        5: 'Jupiter',
        6: 'Saturn',
        7: 'Uranus',
        8: 'Neptune'
      }[ id ];
    }
  }
}
