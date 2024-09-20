let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let b = +input();
let t = +input();

let areanota = 160 * 70;
let novaarea = 0;

if (b == t){
    novaarea = b * 70;
    if (novaarea < (areanota / 2)){
        write ("2");
    } else if (novaarea > areanota / 2){
        write("1");
    } else {
        write ("0");
    }
} else {
    novaarea = ((b + t) * 70) / 2;
    if (novaarea < (areanota / 2)){
        write ("2");
    } else if (novaarea > (areanota/2)){
        write ("1");
    } else {
        write ("0");
    }
}