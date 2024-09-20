let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let lista = input().split(" ");
let a = parseInt(lista[0]);
let b = parseInt(lista[1]);
let fim = b;
let saida = "[ ";
while (a <= fim) {
  saida += a + " " + b + " ";
  a += 1;
  b -= 1;
}
saida += "]";
console.log(saida);