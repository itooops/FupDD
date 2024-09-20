let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let nota1 = parseInt(input());
let nota2 = parseInt(input());
let media = Math.floor((nota1 + nota2) / 2);
let final = parseInt(input());

if (media >= 7){
   write ('aprovado');
} else if(media < 4){
  write ('reprovado');
} else if(media == 4 || media > 4 && media < 7){
  if(final > 5 || final == 5){
    write ('aprovado na final')
  } else {
    write ('reprovado na final')
  }
}