function nice(name) {
  console.log("Hey " + name + " you are so good!");
  console.log("Hey " + name + " your tshirt is nice!");
  console.log("Hey " + name + " you are beautiful!");
  console.log("Hey " + name + " your personality is also good!");
}

nice("Vaishnavi");

nice("Trapti");

function sum(a, b, c = 3) {
  // console.log(a + b) 

  console.log(a, b, c);
  return a + b + c;
}

result1 = sum(3, 5);
result2 = sum(7, 5);
result3 = sum(3, 13, 1);

console.log("The sum of two numbers is :", result1);
console.log("The sum of two numbers is :", result2);
console.log("The sum of two numbers is :", result3);

const func1 = (x) => {
  console.log("I am an arrow function", x);
};

func1(34);
func1(66);
func1(84);
