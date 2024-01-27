// Input: N = 153
// Output: "Yes"
// Explanation: 153 is an Armstrong number
// since 13 + 53 + 33 = 153.
// Hence answer is "Yes".
// Example 2:

// Input: N = 370
// Output: "Yes"
// Explanation: 370 is an Armstrong number
// since 33 + 73 + 03 = 370.
// Hence answer is "Yes".

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter something: ", (userInput) => {
  const value = userInput;

  const amstring = (a) => {
    const b = String(a).split("").map(Number);
    const sum = b.reduce((acc, cur) => acc + Math.pow(cur, b.length), 0);
    return sum == a;
  };

  const sol = amstring(value);
  console.log(sol);

  rl.close();
});
