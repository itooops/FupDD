let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let tamanho = +input();
let x = +input();
let y = +input();
let direcao = input();
let tempo = +input();

for (let i = 0; i < tempo; i++){
    if (direcao == "U"){
        if (y < 0){
            y = tamanho - 1;
        }
        y--;
    }
    if (direcao == "D"){
        if (y > tamanho - 1){
            y = 0;
        }
        y++;
    }
    if (direcao == "L"){
        if (x < 0){
            x = tamanho - 1;
        }
        x--;
    }
    if (direcao == "R"){
        if (x > tamanho - 1){
            x = 0;
        }
        x++;
    }
}
write (x + " " + y);