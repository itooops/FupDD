let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let valor = parseInt(input());
let chute1 = parseInt(input());
let chute2 = parseInt(input());

if (Math.abs(chute1 - valor) < Math.abs(chute2 - valor)){
  write ('primeiro');
} else if (Math.abs(chute1 - valor) > Math.abs(chute2 - valor)){
  write ('segundo');
} else if (Math.abs(chute1 - valor) == Math.abs(chute2 - valor)){
  write ('empate');
}