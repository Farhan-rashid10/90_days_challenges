let data = ['f1','f2', 'f3', 'f4', 'f5' ];
let i = 0;
while(i < data.length){
console.log(data[i]);
i++;

}




let fam= ["abdi", "jey", "mum", "dad"]
console.log(fam.push("siz"))
console.log(fam.unshift("man"))
data.pop();
data.shift()
console.log(fam)

let copy= ["white", , ...fam , "blue"];
copy.push("home3")
console.log(copy)

console.log(copy.slice(3, 7))