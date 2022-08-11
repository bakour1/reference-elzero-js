// ======= min.js File
import calc, * as  modOne from './app.js';
console.log( calc( modOne.numOne, modOne.numTwo, modOne.numThree ) ); // 60

// ======= mod-two.js File

let a = 10; // Do Not Edit Names
let b = 20; // Do Not Edit Names
let c = 30; // Do Not Edit Names

export default function ( numOne = a, numTwo = b, numThree = c ) {
  return numOne + numTwo + numThree;
}
