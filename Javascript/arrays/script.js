let arr = [1, 2, 3, 4, 5, 7];
// Index   0, 1, 2, 3 ,4, 5

arr[0] = 5666; // here value on index 0  will change because arrays are mutable.

// console.log(arr);
// console.log(arr.length);

// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[5]);

console.log(arr.toString());
console.log(arr.join(" and ")); // joins array element using a separator "and"

let a = [1, 2, 4, 5, 7];
console.log(a);

a.pop(); // It will remove last element from array
console.log(a);

a.push("Trapti"); // It will add a new element at the end of the array
console.log(a);

a.push(100);
console.log(a);

a.shift(); // It will remove first element from array and returns it
console.log(a);

a.unshift("Vishnu"); // It will add element to the beginning and returns new array length
console.log(a);

delete a[4];
console.log(a);

console.log(a.length);
console.log(a[4]); // output "undefined" - matlab array me memory toh allocate hui hai lekin vaha pr value nahi hai

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];
console.log(a1.concat(a2, a3)); // This does not change the existing array, because it creates a new array

let a4 = [9, 7, 8];
console.log(a4.sort()); //This modifies the original array

let num = [1, 2, 3, 4, 5];
console.log(num);
console.log(num.splice(2, 3));
console.log(num);


let number = [1, 2, 3, 4, 5, 6];
console.log(number);
console.log(number.splice(1, 2));
console.log(number);