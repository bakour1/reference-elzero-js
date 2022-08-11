// – Parse And Stringify

/*
JSON
- JSON.parse => Convert Text Data To JS Object
- JSON.stringify => Convert JS Object To JSON
*/

const myObjFromServer = '{"username": "osama", "age": "39"}';
console.log( typeof myObjFromServer );                                // String
console.log( myObjFromServer );                                       // {"username": "osama", "age": "39"}

const myJsObj = JSON.parse( myObjFromServer );
console.log( typeof myJsObj );                                        // object
console.log( myJsObj );                                               // {username: 'osama', age: '39'}

myJsObj[ "username" ] = "Elzero";
myJsObj[ "age" ] = 29;

console.log( typeof myJsObj );                                        // object
console.log( myJsObj );                                               // {username: 'osama', age: '39'}

const myObjToServer = JSON.stringify( myJsObj );

console.log( typeof myObjToServer );                                  // string
console.log( myObjToServer );                                         // {"username":"Elzero","age":29}
