function lengthOfString(str){
    return  str.split(' ').map((letter)=> letter+letter.length)
}
console.log(lengthOfString("hello will win"))