let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let inicio: number = +input();
let fim: number = +input();

if (inicio >= fim){
  write ('invalido');
} else {
  let total: number = 0;
  for (let i = inicio; i <= fim; i += 1) {
    if (i % 2 == 0 && i % 3 == 0){
      total += i; 
    }
}
write (total);

