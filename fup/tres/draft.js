let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = 0;
let b = 10;
while (a <= 10){
  console.log(a + " " + b);
  a += 1;
  b -= 1;
}