console.log("This is the strings tutorial");

let a = "Trapti";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
// console.log(a[6])

console.log(a.length); // it tells the length of an array

let real_name = "Trapti";
let friend = "Monika";

console.log("Her name is " + real_name + " and her friend's name is " + friend);

console.log(`Her name is ${real_name} and her friend's name is ${friend}`); // This is template literals

// Jab humlog insert karte hai variables ko backtick vali string me tab usko 'string interpolation' bolte hai

let b = "Charu";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);

console.log(b.slice(0, 4));
console.log(b.slice(3));
console.log(b.slice(2));

console.log(b.replace("Ch", "66"));

console.log(b.concat(a));
console.log(b.concat(a, "Monika", "Tanishka"));

console.log(b); //strings are immutable
