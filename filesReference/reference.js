"use strict";
{
}
{
}
{
    let age = 40;
    if (age > 30) {
        console.log("Good");
    }
    else {
        console.log(age.repeat(3));
    }
}
{
    let theName = "Elzero";
    let theAge = 40;
    let hire = true;
    let all = "Elzero Web School";
    let allVars;
    theName = "Osama";
    all = 100;
    function add(n1, n2) {
        return n1 + n2;
    }
    console.log(add(10, 20));
    console.log(typeof add(10, 20));
    function add(n1, n2) {
        return n1 + n2;
    }
    console.log(add(10, "20"));
    console.log(typeof add(10, "20"));
}
{
    let all = "Osama";
    all = "A";
    all = 100;
    all = true;
    let myFriends = ["Osama", "Ahmed", "Sayed"];
    for (let i = 0; i < myFriends.length; i++) {
        console.log(myFriends[i].repeat(3));
    }
}
{
    let arrayOne = [1, 2, 3, 4, 5];
    let arrayTwo = ["A", "B", "C"];
    let arrayThree = [1, 2, 3, 4, "A", "B", "C"];
    let arrayFour = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];
}
{
    let showMsg = true;
    function showDetails(name, age, salary) {
        let test = 10;
        if (showMsg) {
            return `hello ${name}, age is ${age}, salary is ${salary}, test var ${test}`;
        }
        return 'no data to show';
    }
    console.log(showDetails("sami", 29, 5000));
}
{
    function showData(name, age, country) {
        return `${name} - ${age} - ${country}`;
    }
    console.log(showData("Osama", 40, "Egypt"));
}
{
    function addAll(...nums) {
        let result = 0;
        for (let i = 0; i < nums.length; i++) {
            result += nums[i];
        }
        return result;
    }
    console.log(addAll(10, 20, 30, 100, 10.5, +true));
}
//# sourceMappingURL=reference.js.map