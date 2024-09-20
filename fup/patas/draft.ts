let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let chute_chico = +input();
let chute_cebolinha = +input();
let quant_animais = +input();
let quantPatas = 0;

for (let i = 0; i <= quant_animais; i++){
  let animal = input();
  if(animal == 'v' || animal == 'c'){
    quantPatas += 4;
  }else if(animal == 'g'){
    quantPatas +=2;
  }
}
write (quantPatas);

if (Math.abs(quantPatas - chute_chico) < Math.abs(quantPatas - chute_cebolinha)){
  write('Chico Bento');
} else if (Math.abs(quantPatas - chute_chico) == Math.abs(quantPatas - chute_cebolinha)){
  write ('empate');
} else {
  write ('Cebolinha');
}