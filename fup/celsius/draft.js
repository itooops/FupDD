let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


let tc = parseFloat (input());
let tf = tc * parseFloat (1.8) + 32;

console.log (tf.toFixed(6));