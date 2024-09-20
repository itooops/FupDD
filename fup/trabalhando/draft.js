let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let dia = parseInt(input());
let hora = parseInt(input());

if (dia == 1){
  write ('NAO');
} else if (dia == 7){
  if (hora >= 8 && hora <= 11){
    write ('SIM');
  } else {
    write ('NAO');
  }
} else if (dia > 1 && dia < 7){
  if (hora >= 8 && hora <= 11) {
    write ('SIM');
  } else if (hora >= 14 && hora <= 17) {
    write ('SIM');
  } else {
    write ('NAO')
  }
}
