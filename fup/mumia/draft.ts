let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let nome = input();
let idade = +input();

function idades (nome: string, idade: number): string {
    if (idade < 12){
        return (nome + ' eh crianca');
    } else if ( idade < 18){
        return (nome + ' eh jovem');
    } else if (idade < 65){
        return (nome + ' eh adulto');
    } else if (idade < 1000){
        return (nome + ' eh idoso');
    } else {
        return (nome + ' eh mumia');
    }
}
console.log(idades(nome, idade));
