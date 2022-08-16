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
{
    const add = function (num1, num2) {
        return num1 + num2;
    };
    console.log(add(10, 20));
    const addWithArrow = (num1, num2) => num1 + num2;
    console.log(addWithArrow(10, 20));
}
{
    let theName = "sami";
    theName = "osama";
    let all = 10;
    all = "sami";
    function getActions(btns) {
        console.log(`action for button up is ${btns.up}`);
        console.log(`action for button right is ${btns.right}`);
        console.log(`action for button down is ${btns.down}`);
        console.log(`action for button left is ${btns.left}`);
    }
    getActions({ up: "jump", right: "go right", down: "go down", left: "go left", x: true });
}
{
    function compare(num1, num2) {
        if (num1 === num2) {
            return 0;
        }
        else if (num1 > num2) {
            return 1;
        }
        else {
            return -1;
        }
    }
    console.log(compare(20, 20));
    console.log(compare(20, 15));
    console.log(compare(20, 25));
}
{
    let article = [29, "sami", true];
    console.log(article);
    article = [22, "osama", true];
    console.log(article);
    console.log(article);
    const [id, title, published] = article;
    console.log(id);
    console.log(title);
    console.log(published);
}
{
    function logging(msg) {
        console.log(msg);
        return;
    }
    console.log(logging("Iam A Message"));
    console.log("Test");
    const fail = (msg) => {
    };
    function alwaysLog(name) {
        while (true) {
            console.log(name);
        }
    }
}
{
    let Level;
    (function (Level) {
        Level[Level["kid"] = 15] = "kid";
        Level[Level["easy"] = 9] = "easy";
        Level[Level["medium"] = 6] = "medium";
        Level[Level["hard"] = 3] = "hard";
    })(Level || (Level = {}));
    console.log(Level);
    console.log(Level['3']);
    console.log(3);
    let lvl = "easy";
    if (lvl === "easy") {
        console.log(`the level is ${lvl} and number of seconds is ${9}`);
    }
}
{
    function detHardSeconds() {
        return 3;
    }
    let Kids;
    (function (Kids) {
        Kids[Kids["Five"] = 25] = "Five";
        Kids[Kids["Seven"] = 20] = "Seven";
        Kids[Kids["Ten"] = 15] = "Ten";
    })(Kids || (Kids = {}));
    let Level;
    (function (Level) {
        Level[Level["Kid"] = 15] = "Kid";
        Level[Level["Easy"] = 9] = "Easy";
        Level[Level["Medium"] = 6] = "Medium";
        Level[Level["Hard"] = detHardSeconds()] = "Hard";
    })(Level || (Level = {}));
    console.log(Level);
    console.log(Level['3']);
    console.log(Level.Hard);
    let lvl = "Medium";
    if (lvl === "Medium") {
        console.log(`the level is ${lvl} and number of seconds is ${Level.Medium}`);
    }
}
{
    let myImg = document.getElementById("my-img");
    console.log(myImg.src);
    let data = "1000";
    console.log(data.repeat(3));
    console.log(data.repeat(3));
}
{
    function getActions(nums) {
        console.log(nums.one);
        console.log(nums.two);
        console.log(nums.three);
    }
    getActions({ one: "sami", two: 29, three: true, five: true });
}
//# sourceMappingURL=reference.js.map