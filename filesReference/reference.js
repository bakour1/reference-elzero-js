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
{
    let user = {
        userName: "sami",
        country: "Syria"
    };
    function getData(data) {
        console.log(`id is ${data.id}`);
        console.log(`userName is ${data.userName}`);
        console.log(`country is ${data.country}`);
    }
    getData({ id: 200, userName: "ahmed", country: "KSA" });
}
{
    let user = {
        id: 100,
        userName: "sami",
        country: "Syria",
        sayHello() { return `Hello ${this.userName}`; },
        getDouble(n) { return n * 2; },
        sayHi: () => { return `Hi ${user.userName}`; },
        getDouble2: (n) => { return n * 2; },
    };
    console.log(user.id);
    console.log(user.userName);
    console.log(user.country);
    console.log(user.sayHello());
    console.log(user.getDouble(3));
    console.log(user.sayHi());
    console.log(user.getDouble2(10));
}
{
    let userSettings = {
        theme: true,
        font: "open sans",
        sidebar: false,
        external: true
    };
}
{
    let user = {
        id: 100,
        userName: "sami",
        country: "Syria",
        role: "mod",
        protect: true
    };
    console.log(user.id);
}
{
    let el = document.getElementById("id");
    let userSettings = {
        theme: true,
        font: "Open Sans",
        sidebar: false,
        external: true
    };
}
{
    class User {
        constructor(userName, salary) {
            this.u = userName;
            this.s = salary;
            this.msg = function () {
                return `hello ${this.u}, your salary is ${this.s}`;
            };
        }
        sayMsg() {
            return `hello ${this.u}, your salary is ${this.s}`;
        }
    }
    let userOne = new User("sami", 5000);
    console.log(userOne.u);
    console.log(userOne.s);
    console.log(userOne.msg());
    console.log(userOne.sayMsg());
}
{
    class User {
        constructor(userName, salary, address) {
            this.userName = userName;
            this.salary = salary;
            this.address = address;
            this.msg = function () {
                return `hello ${this.userName}, your salary is ${this.salary}`;
            };
        }
        sayMsg() {
            return `hello ${this.userName}, your salary is ${this.salary}`;
        }
    }
    let userOne = new User("sami", 5000, "KSA");
    console.log(userOne.msg());
    console.log(userOne.sayMsg());
}
{
    class User {
        constructor(_username, salary, address) {
            this._username = _username;
            this.salary = salary;
            this.address = address;
            this.msg = function () {
                return `Hello ${this._username} Your Salary Is ${this.salary}`;
            };
        }
        get username() {
            return this._username;
        }
        set username(value) {
            this._username = value;
        }
        sayMsg() {
            return `Hello ${this._username} Your Salary Is ${this.salary}`;
        }
    }
    let userOne = new User("Elzero", 6000, "Cairo");
    console.log(userOne.username);
    userOne.username = "Ahmed";
    console.log(userOne.username);
    console.log(userOne.salary);
    console.log(userOne.msg());
    console.log(userOne.sayMsg());
}
{
    class User {
        constructor(username) {
            this.username = username;
            User.created++;
        }
        static get created() {
            return User._created;
        }
        static set created(value) {
            User._created = value;
        }
        static getCount() {
            console.log(`${this.created} objects created`);
        }
    }
    User._created = 0;
    let one = new User("sami");
    let one2 = new User("sami");
    let one3 = new User("sami");
    console.log(one.username);
    User.getCount();
}
{
    class User {
        constructor(username, theme, font) {
            this.username = username;
            this.theme = theme;
            this.font = font;
        }
        save() {
            console.log("saved");
        }
        update() {
            console.log("updated");
        }
    }
    let sami = new User("sami", true, "open sans");
}
{
    class Food {
        constructor(title) {
            this.title = title;
        }
    }
    class Pizza extends Food {
        constructor(title, price) {
            super(title);
            this.price = price;
        }
        getCookingTime() {
            console.log(`Cooking Time For Pizza Is 1 Hour`);
        }
    }
    class Burger extends Food {
        constructor(title, price) {
            super(title);
            this.price = price;
        }
        getCookingTime() {
            console.log(`Cooking Time For Burger Is Half Hour`);
        }
    }
    let pizzaOne = new Pizza("Awesome Pizza", 100);
    console.log(pizzaOne.title);
    console.log(pizzaOne.price);
    pizzaOne.getCookingTime();
}
{
}
{
    class Player {
        constructor(name) {
            this.name = name;
        }
        attack() {
            console.log("attacking now");
        }
    }
    class Amazon extends Player {
        constructor(name, spears) {
            super(name);
            this.spears = spears;
        }
        attack() {
            super.attack();
            console.log('attacking with spear');
            this.spears -= 1;
        }
    }
    class barbarian extends Player {
        constructor(name, axe) {
            super(name);
            this.axe = axe;
        }
        attack() {
            super.attack();
            console.log('attacking with axe');
            this.axe -= 1;
        }
    }
    let barOne = new barbarian("sami", 100);
    let barTwo = new Amazon("sami", 100);
    console.log(barOne.name);
    console.log(barOne.axe);
    barOne.attack();
    console.log(barOne.axe);
}
{
    function returnNumber(val) {
        return val;
    }
    function returnString(val) {
        return val;
    }
    function returnBoolean(val) {
        return val;
    }
    console.log(returnNumber(100));
    console.log(returnString("Elzero"));
    console.log(returnBoolean(true));
    function returnType(val) {
        return val;
    }
    console.log(returnType(100));
    console.log(returnType("Elzero"));
    console.log(returnType(true));
    console.log(returnType([1, 2, 3, 4]));
}
{
    function returnType(val) {
        return val;
    }
    console.log(returnType(100));
    console.log(returnType("Elzero"));
    const returnTypeArrowSyntax = (val) => val;
    console.log(returnTypeArrowSyntax(100));
    console.log(returnTypeArrowSyntax("Elzero"));
    function testType(val) {
        return `The Value Is ${val} And Type Is ${typeof val}`;
    }
    console.log(testType(100));
    console.log(testType("Elzero"));
    function multipleTypes(valueOne, valueTwo) {
        return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
    }
    console.log(multipleTypes("Osama", 100));
    console.log(multipleTypes("Elzero", true));
}
{
    class User {
        constructor(value) {
            this.value = value;
        }
        show(msg) {
            console.log(`${msg} - ${this.value}`);
        }
    }
    let userOne = new User("Elzero");
    console.log(userOne.value);
    userOne.show("message");
    let userTwo = new User(100);
    console.log(userTwo.value);
    userTwo.show(100);
}
//# sourceMappingURL=reference.js.map