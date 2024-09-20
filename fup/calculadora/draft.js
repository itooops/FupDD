let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let num1 = parseInt(input());
let num2 = parseInt(input());
let operador = input();

if (operador == '+'){
  write (num1 + num2);
} else if (operador == '-'){
  write (num1 - num2);
} else if (operador == '*'){
  write (num1 * num2);
} else if (operador == '/'){
  write (Math.floor(num1 / num2).toFixed(0));
}