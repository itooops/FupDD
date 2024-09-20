let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let vet: number[] = [];
for (let i = 1; i < 50; i++){
    vet.push(+input());
}

let impar = 0;
let par = 0;

for (let i = 1; i < vet.length; i++){
    if (vet[i] % 2 == 0){
        par += vet[i];
    } else {
        impar += vet[i];
    }
}
if (impar == par){
    write ('empate');
} else if (par < impar){
    write ('soldados');
} else if (impar < par) {
    write ('rebeldes');
}