let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let sectotal = parseInt(input());

let hr = Math.floor(sectotal / 3600);
let restomin = sectotal % 3600;
let min = Math.floor(restomin / 60);
let restosec = restomin % 60;
let sec = restosec;

write (hr + ":" + min + ":" + sec);