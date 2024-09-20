let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let capacidade = +input();
let bananas = +input();
let goiaba = +input();
let manga = +input();
let frutas = bananas + goiaba + manga;
let tempo =0;


tempo = Math.ceil(frutas / capacidade);
write(tempo);