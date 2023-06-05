function middle(string){
    return string.length%2==0 ? string[(string.length/2)-1] + string[(string.length/2) ] : string[Math.ceil(string.length/2)]
}
console.log(middle("hell"));
console.log(middle("test"));