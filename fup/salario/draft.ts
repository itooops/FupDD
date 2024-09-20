let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let salarioatual = +input();
let aumento = +input();

if (salarioatual <= 1000){
    aumento = salarioatual * 0.20;
} 
if (salarioatual > 1000 && salarioatual <= 1500){
    aumento = salarioatual * 0.15;
}
if (salarioatual > 1500 && salarioatual <= 2000){
    aumento = salarioatual * 0.10;
}
if (salarioatual > 2000){
    aumento = salarioatual * 0.05;
}

let novosalario = salarioatual + aumento;
console.log(novosalario.toFixed(2));