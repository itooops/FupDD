let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let v1 = +input();
let v2 = +input();
let v3 = +input();

if (v1 >= v2 + v3 || v2 >= v1 + v3 || v3 >= v1 + v2){
    write("False");
} else {
    write ("True");
}