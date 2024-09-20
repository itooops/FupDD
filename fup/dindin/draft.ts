let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let quantDindin = +input();
let chocolate = 0;
let limao = 0;
let manha = 0;
let tarde = 0;

for (let i = 0; i <= quantDindin; i++){
  let [sabor, turno] = input().split(" ");
  if (sabor == 'c'){
    chocolate += 1;
  } else if(sabor == 'l') {
    limao += 1;
  }
  if (turno == 'm'){
    manha += 1;
  } else if(turno == 't'){
    tarde +=1;
  }
}

if (chocolate == limao){
  write ('empate');
} else if (limao > chocolate) {
  write ('l');
} else {
  write ('c')
}

if (manha < tarde){
  write ('m');
} else if (tarde < manha) {
  write ('t');
} else {
  write ('empate')
}