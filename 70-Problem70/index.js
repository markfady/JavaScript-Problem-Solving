function recognition(str){
    return str.replace(/[015]/g,str=>str==0?"O" : str==1? str="O": str=="S")
}
console.log(recognition('L0ND0N'))
