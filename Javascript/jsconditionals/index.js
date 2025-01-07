console.log("Hello I am conditional tutorial");

let age = 3;
let grace = 2;

age += grace;
console.log(age);

// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace); //exponentiation operator (**) means 3 to the power 2
// console.log(age % grace);

if (age + grace > 18) {
  console.log("You can drive!");
} else if (age == 0) {
  console.log("Are you kidding?");
} else {
  console.log("You cannot drive");
}


a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/