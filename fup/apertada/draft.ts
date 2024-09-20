let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let tamCalca: number[] = []; // vetor vazio

for (let i = 0; i < 5; i++){ // informações que preenchem meu vetor
    tamCalca.push(+input());

}
let posicao_ref = 0; // a posição de referênia começa do primeiro elemento do vetor
for (let i = 0; i < tamCalca.length; i++){
    if (tamCalca[i] < tamCalca[posicao_ref]){
        posicao_ref = i;
    }
}
write (tamCalca[posicao_ref]);