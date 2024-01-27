// Input:
// N=56
// Output:
// 1
// Explanation:
// The digit sum of 56 is 5+6=11.
// Since, 11 is a palindrome number.Thus,
// answer is 1.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter something: ", (userInput) => {
  const value = userInput;
  const pali = (a) => {
    let b = String(a).split("").map(Number);

    const c = b.reduce((acc, cur) => acc + cur, 0);

    let d = Number(String(c).split("").reverse().map(Number).join(""));

    return c == d;
  };

  const sol = pali(value);
  console.log(sol);

  rl.close();
});
