// Rock Paper Scissors!
{
  const rps = ( p1, p2 ) => {
    if ( p1 === p2 ) {
      return 'Draw!';
    };
    return `Player ${ /rockscissors|scissorspaper|paperrock/.test( p1 + p2 ) ? 1 : 2 } won!`;
  };
  /*
    rps('scissors','paper') // Player 1 won!
    rps('scissors','rock') // Player 2 won!
    rps('paper','paper') // Draw!
  */
}
