function Jaden(str){
    return str.split(" ").map((x)=>x[0].toUpperCase()+x.substring(1)).join(" ")
}
console.log(Jaden("hello people awesome"))