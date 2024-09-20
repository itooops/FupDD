let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let [procurado, quantidade] = input().split(" ").map(x=>+x);
let vet: number[] = [];

for (let i = 0; i < quantidade; i++){
    vet.push(+input());
}
let cont = 0;
for (let elem of vet){
    if (elem == procurado){
        cont += 1;
    }
}
write (cont);