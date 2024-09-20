let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = parseFloat(input())
let b = parseFloat(input())
let c = parseFloat(input());

let delta = Math.pow(b, 2) - 4 * a * c

if(delta > 0) {
  raizDelta = Math.sqrt(delta);
  raiz1 = (-b + raizDelta) / (2 * a);
  raiz2 = (-b - raizDelta) / (2 * a);
  write((raiz1).toFixed(2) + '\n' + (raiz2).toFixed(2));
} else if(delta == 0) {
  raiz1 = -b / (2 * a);
  write((raiz1).toFixed(2));
} else {
  write("nao ha raiz real");
}
