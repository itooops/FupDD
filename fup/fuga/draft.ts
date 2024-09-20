let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let lista = input().split(" ");
let helic = +lista[0];
let polic = +lista[1];
let fugit = +lista[2];
let direc = +lista[3];

for (let i = 0; i < 15; i++){
  fugit += direc;
  
  if (fugit == 16){
    fugit = 0;
  }
  if (fugit == -1){
    fugit = 15;
  } 
  write (fugit, " ");
} 
