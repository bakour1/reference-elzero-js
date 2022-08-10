let dateNow = new Date();
let dateBirthday = new Date( "1993-08-20" );
let ageDate = dateNow - dateBirthday;

console.log( `
  ${ ( ageDate / 1000 ).toFixed() } Seconds
  ${ ( ageDate / 1000 / 60 ).toFixed() } Minutes
  ${ ( ageDate / 1000 / 60 / 60 ).toFixed() } Hours
  ${ ( ageDate / 1000 / 60 / 60 / 24 ).toFixed() } Days
  ${ ( ageDate / 1000 / 60 / 60 / 24 / 31 ).toFixed() } Months
  ${ ( ageDate / 1000 / 60 / 60 / 24 / 365 ).toFixed() } Years
`);


/* Needed Output
  "1247939400 Seconds"
  "20798990 Minutes"
  "346650 Hours"
  "14444 Days"
  "481 Months"
  "40 Years"
 */
