"use strict";
function addAll(...nums) {
    let result = 0;
    nums.forEach(num => { result += num; });
    return result;
}
console.log(addAll(1, 23, 4));
//# sourceMappingURL=index.js.map