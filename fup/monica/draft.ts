import { sourceMapsEnabled } from "process";

let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let idademonica = +input();
let idadefilho1 = +input();
let idadefilho2 = +input();
let maisvelho = +input();

maisvelho = idademonica - (idadefilho1 + idadefilho2);
maisvelho = Math.max(idadefilho1, idadefilho2, maisvelho);


write (maisvelho);