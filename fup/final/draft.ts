let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function verificar_aprovacao(nota1: number, nota2: number, nota_final: number): string {
  let media = (nota1 + nota2) / 2;
  if (media >= 7){
    return ('aprovado')
  }
  if (media < 4){
    return ('reprovado')
  }
  let media_final = (media + nota_final) / 2;
  
  if (media_final >= 5){
    return ('aprovado na final')
  }
  return ('reprovado na final')
}

let nota1 = +input();
let nota2 = +input();
let nota_final = +input();

write (verificar_aprovacao(nota1, nota2, nota_final));