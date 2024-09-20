let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let qtd1 = parseInt(input());
let qtd2 = parseInt(input());
let qtd3 = parseInt(input());

let valor1 = parseFloat(input());
let valor2 = parseFloat(input());
let valor3 = parseFloat(input());

let dinheiro = parseFloat(input());

let mult1 = qtd1 * valor1;
let mult2 = qtd2 * valor2;
let mult3 = qtd3 * valor3;

let total = mult1 + mult2 + mult3;
write((dinheiro - total).toFixed(2));
