let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let x1 = parseFloat(input());
let y1 = parseFloat(input());

let x2 = parseFloat(input());
let y2 = parseFloat(input());

let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

write((distancia).toFixed(2));