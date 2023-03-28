const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to create the box with the message
function createBox(message) {
  const line = '━'.repeat(message.length + 6);
  const emptyLine = `┃${' '.repeat(message.length + 4)}┃`;
  return `\x1b[31m┏${line}┓
┃  \x1b[1m\x1b[5m${message}\x1b[0m  ┃
${emptyLine}
┃${' '.repeat(2)}Press any key to continue${' '.repeat(2)}┃
┗${line}┛\x1b[0m`;
}

// Program to solve quadratic equation
readline.question(createBox('Welcome to Unizik (Nnamdi Azikwe University)'), () => {
  readline.question('What is your Name: ', name => {
    let root1, root2;

    // Take input from the user
    readline.question(`Hello ${name}, enter the first number: `, a => {
      readline.question(`Enter the second number: `, b => {
        readline.question(`Enter the third number: `, c => {

          // Calculate discriminant
          let discriminant = b * b - 4 * a * c;

          // Condition for real and different roots
          if (discriminant > 0) {
            root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

            // Result
            console.log(`The roots of the quadratic equation are ${root1} and ${root2}`);
            readline.close();
          }

          // Condition for real and equal roots
          else if (discriminant == 0) {
            root1 = root2 = -b / (2 * a);

            // Result
            console.log(`The roots of the quadratic equation are ${root1} and ${root2}`);
            readline.close();
          }

          // If roots are not real
          else {
            let realPart = (-b / (2 * a)).toFixed(2);
            let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

            // Result
            console.log(
              `The roots of the quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
            );
            readline.close();
          }
        });
      });
    });
  });
});
