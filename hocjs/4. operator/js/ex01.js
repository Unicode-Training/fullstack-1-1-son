// let count = 1;
// let total;
// count++;
// ++count;
// total = count++;
// total = ++count;
// console.log(total);
// console.log(count);

let count = 1;
let total = count++ + ++count + count++ + ++count;
//1 + 3 + 3 + 5
console.log(total);
