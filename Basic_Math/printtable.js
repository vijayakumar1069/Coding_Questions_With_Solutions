const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter something: ", (userInput) => {
  const value = userInput;

  const table = (a) => {
    let output = "";

    for (let i = 1; i <= a; i++) {
      output = output + a * i + " ";
    }
    console.log(output.trim());
  };

  table(value);

  rl.close();
});
