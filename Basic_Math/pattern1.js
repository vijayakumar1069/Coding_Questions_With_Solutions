//333222111
//332211
//321
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter something: ", (userInput) => {
  const value = userInput;

  function generatePattern(N) {
    for (let i = N; i >= 1; i--) {
      let row = "";
      for (let j = N; j >= 1; j--) {
        for (let k = i; k >= 1; k--) {
          row += `${j} `;
        }
      }
      console.log(row.trim());
    }
  }
  
  // Example: For N = 3
  generatePattern(value);
  

  rl.close();
});
