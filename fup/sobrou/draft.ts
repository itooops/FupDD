let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd1 = +input();
let qtd2 = +input();
let qtd3 = +input();

let valor1 = +input();
let valor2 = +input();
let valor3 = +input();

let quantidadeDinheiro = +input();

let troco = 
