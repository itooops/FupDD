let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let hora = parseInt(input());
let min = parseInt(input());
let dia = parseInt(input());
let mes = parseInt(input());
let ano = parseInt(input());

let ult_digs_ano = ano % 100;

write (String(hora).padStart(2, '0') + ':' +  String(min).padStart(2, '0') + ' ' + String(dia).padStart(2, '0') + '/' + String(mes).padStart(2, '0') + '/' + String(ult_digs_ano).padStart(2, '0'));