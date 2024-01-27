// Input:
// N = 13 , M = 4
// Output:
// 12
// Explanation:
// 12 is the Closest Number to
// 13 which is divisible by 4.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Using readline to get a string of values separated by space
rl.question("Enter values separated by space: ", (inputString) => {
  // Split the string into an array
  let inputArray = inputString.split(" ").map(Number);
  const close = (a, b) => {
    const sol = Math.floor(a / b) * b;
    return sol;
  };
  const result = close(inputArray[0], inputArray[1]);
  console.log(result);

  rl.close();
});
