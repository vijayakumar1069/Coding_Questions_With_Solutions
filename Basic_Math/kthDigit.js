// Example 1:

// Input:
// A = 3
// B = 3
// K = 1
// Output:
// 7
// Explanation:
// 33 = 27 and 1st
// digit from right is
// 7
// Example 2:

// Input:
// A = 5
// B = 2
// K = 2
// Output:
// 2
// Explanation:
// 52 = 25 and second
// digit from right is
// 2.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Using readline to get a string of values separated by space
rl.question("Enter values separated by space: ", (inputString) => {
  // Split the string into an array
  let inputArray = inputString.split(" ").map(Number);

  const kth = (a, b, c) => {
    const ans = Math.pow(a, b).toString();
    console.log(ans);
    const index = ans.length - c;
    return ans.charAt(index);
  };
  const sol = kth(inputArray[0], inputArray[1], inputArray[2]);
  console.log(sol);

  rl.close();
});
