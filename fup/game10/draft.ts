let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let numeroposicoes = +input();
let posicaodisco = +input();
let posicaoaviao = +input();

let novaposicaoaviao = posicaoaviao;
let cont = 0;

while (novaposicaoaviao != posicaodisco){
    novaposicaoaviao++;
    if (novaposicaoaviao > numeroposicoes){
        novaposicaoaviao = 1;
    }
    cont++;
}
write(cont);