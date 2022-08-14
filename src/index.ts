function addAll ( ...nums: number[] ): number {
  let result = 0;
  nums.forEach( num => { result += num; } );
  return result;

}
console.log( addAll( 1, 23, 4 ) );
