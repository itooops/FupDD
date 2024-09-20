let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let num = parseInt(input());

if (num > 0){
  write ('positivo');
} else if (num == 0){
  write ('nulo');
} else {
  write ('negativo')
}