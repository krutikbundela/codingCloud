// var temperature = 25;
// if (temperature > 30) {
//   console.log("lets go to beach");
// } else {
//     console.log("tv dekhte hai yr");
// }

// var temperature = 150;
// if (temperature >= 300) {
//     console.log("lets go to beach");
// } else if (temperature >= 20 && temperature < 30) {
//     console.log("tv dekhte hai yr");
// } else if (temperature > 1) {
//     console.log("uyguyguygu");
// }
// let userAge = 19;
// let isCitizen = true;
// let isRegistered = true;

// if (userAge >= 18) {
//   if (isCitizen) {
//     if (isRegistered) {
//       console.log("You are eligible to vote");
//     } else {
//       console.log("You are not eligible due to registration status");
//     }
//   } else {
//     console.log("you are not eligible due to citizenship status");
//   }
// } else {
//   console.log("You are not eligible to vote (Younger)");
// }

// iuhihuiuhihu

// var num = "";
// if (num % 2 === 0) {
//   console.log("Num is even");
// } else {
//   console.log("Num is odd");
// }

//  var num = 13;
// var isPrime = true;

// for (var i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime) {
//   console.log("Num is prime");
// } else {
//   console.log("Num is not prime");
// }

// var num = 1;
// if (num === 0) {
//   console.log("NUm is zero");
// } else if (num > 0) {
//   console.log("NUm is positive ");
// } else {
//   console.log("NUm is negative ");
// }

// var num = 10;
// if (num > 0) {
//     console.log("okk")

// }
 
// var num = 5;
// if (num > 0) {
//     console.log("positive number ")
// } else {
//     console.log("negative number")
// }

// var num = -1;
// if (num > 0) {
//     console.log("Positive number");
// } else if (num < 0) {
//     console.log("Negative number");
// } else {
//     console.log("Zero");
// }

// var age = 12;
// if (age >= 18) {
//     console.log("You are an adult");
// } else {
//     console.log("You are a minor");
// }

// var temperature = 31;
// if (temperature > 30) {
//     console.log("It's hot outside");
// } else if (temperature > 20) {
//     console.log("It's warm outside");
// } else {
//     console.log("It's cold outside");
// }

// var hour = 20;
// if (hour < 12) {
//     console.log("Good morning!");
// } else if (hour < 18) {
//     console.log("Good afternoon!");
// } else {
//     console.log("Good evening!");
// }

// var score = 50;
// if (score >= 90) {
//     console.log("A grade");
// } else if (score >= 80) {
//     console.log("B grade");
// } else if (score >= 70) {
//     console.log("C grade");
// } else {
//     console.log("D grade or below");
// }

// var x = 20;
// var y = 20;
// if (x > y) {
//     console.log("x is greater than y");
// } else if (x < y) {
//     console.log("y is greater than x");
// } else {
//     console.log("x and y are equal");
// }
// var num = 3;
// if (num % 2 === 0) {
//     console.log("Number is divisible by 2");
// } else if (num % 3 === 0) {
//     console.log("Number is divisible by 3");
// } else {
//     console.log("Number is neither divisible by 2 nor by 3");
// }


// /! 2: Drawing Patterns with Asterisks: 🧑‍💻

// *       i\j  1    2    3    4    5
// *       ----------------------------
// *       1    *    -    -    -    -
// *       2    *    *    -    -    -
// *       3    *    *    *    -    -
// *       4    *    *    *    *    -
// *       5    *    *    *    *    *

//  for (var i = 1; i <= 5; i++) {
//   var pattern = "";
//   for (var j = 1; j <= i; j++) {
//     pattern = pattern + " *";
//   }
//   console.log(pattern);
// }

// 2nd problem

//  let y = 10;
//             let x = 10;

//             let str = "";

//             for(let i = 1; i < y; i++ ){
//                 for(let j = 1; j < x; j++){
//                     if(i + j >= y){
//                         str = str.concat("*");
//                     }else{
//                         str = str.concat(" ")
//                     }
//                 }
//                 str = str.concat("\n")
//             }

//             console.log(str)

// 3rd problem n+i

// let n = 5;
// for (let i = n; i >= 1; i--) {
// 	let str = "* ";
// 	let space = ' ';
// 	console.log(space.repeat(n+i)+str.repeat(i));
// }

// 4th problem n-i
//  let n = 5;
// for (let i = n; i >= 1; i--) {
// 	let str = "* ";
// 	let space = ' ';
// 	console.log(space.repeat(n-i)+str.repeat(i));
// }

// var a = 5,  b = 10;
// var sum1 = a + b;
// console.log(sum1);

// var a = 15,
//   b = 15;
// var sum2 = a + b;
// console.log(sum2);

// var a = 55,
//   b = 15;
// var sum3 = a + b;
// console.log(sum3);

// function greet(name) {
//   console.log("Hello " + name + ", How Are You?");
// }

// greet("dear");
// greet("arbaaz");

// var result = function sum(a, b) {
//   console.log(a + b);
// };

// result(100 , 499);
// result(123 , 100)

// var result = function (a, b) {
//   console.log(a + b);
// };

// result(30, 15);

// calculater

const calculater = (num1,num2,operator) => {
  let result;
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      result = num1 - num2;
      return result;

    case "*":
      result = num1 * num2;
      return result;

    case "/":
      if (num2 === 0) {
        return "0 is not allowed";
      } else {
        result = num1 / num2;
        return result;
      }

    default:
      return "no operator found";
  }
};

console.log(calculator(5, 2, "+")); // Output: 7
console.log(calculator(8, 4, "-")); // Output: 4
console.log(calculator(10, 0, "/")); // Output: 5

























