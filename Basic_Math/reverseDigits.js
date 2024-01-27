// Example 1:

// Input: 200
// Output: 2
// Explanation: By reversing the digts of
// number, number will change into 2.
// Example 2:

// Input : 122
// Output: 221
// Explanation: By reversing the digits of
// number, number will change into 221.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter something: ", (userInput) => {
  const value = userInput;
  const reversedigits = (a) => {
    console.log(a);
    const b = Number(String(a).split("").reverse().map(Number).join(""));

    return b;
  };
  const sol = reversedigits(value);
  console.log(sol);

  rl.close();
});
