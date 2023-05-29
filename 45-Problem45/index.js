function reverseStrings(str){
    return str.split("").reverse().join("") //string to array and split each letter in specific index, then we reverse the indexes,then we join them to be string
}
console.log(reverseStrings("world"))
console.log(reverseStrings("word"))