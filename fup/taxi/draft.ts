let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let precoalcool = +input();
let precogasolina = +input();

let distanciaalcool = +input();
let distanciagasolina = +input();

let rendimentoalcool = distanciaalcool / precoalcool;
let rendimentogasolina = distanciagasolina / precogasolina;

if (rendimentoalcool > rendimentogasolina){
  write ('A');
} else if (rendimentogasolina > rendimentoalcool){
  write ('G');
} else {
  write ('G');
}