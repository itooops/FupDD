let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let fun = input();
let num = parseFloat(input());

if (fun == 'r'){
  write (Math.round(num));
} else if (fun == 'f'){
  write (Math.floor(num));
} else if (fun == 'c'){
  write (Math.ceil(num));
}

