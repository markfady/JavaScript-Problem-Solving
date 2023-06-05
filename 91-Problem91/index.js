function Mumbling(str){
    return str.split('').map((letter,index)=>letter.toUpperCase()+ letter.repeat(index)).join("-")
}
console.log(Mumbling("abcd"))