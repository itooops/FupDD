let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let l1 = +input();
let l2 = +input();
let l3 = +input();

let p = ((l1 + l2 + l3) / 2);   //perimetro
let areatriangulo = Math.sqrt(p * (p - l1)*(p - l2)*(p - l3));

console.log(areatriangulo.toFixed(2));