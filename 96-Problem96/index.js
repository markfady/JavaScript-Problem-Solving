function shortestWord(string){
    return  Math.min(...string.split(" ").map((x)=>x.length))
}
console.log(shortestWord("one three nine"))