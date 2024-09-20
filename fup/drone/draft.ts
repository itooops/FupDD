let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

//caixa
let a = +input();
let b = +input();
let c = +input();

//janela
let h = +input();
let l = +input();

if ((a <= h && b <= l) || (a <= l && b <= h) || 
    (a <= h && c <= l) || (a <= l && c <= h) ||
    (b <= h && c <= l) || (b <= l && c <= h)) {
    write ("S");
} else {
    write ("N");
}