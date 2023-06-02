function palindrome(str){
    return str.toLowerCase().split('').reverse().join('')==str.toLowerCase()? "it's plaindrome" : "no it's not"
}
console.log(palindrome("hello"))
console.log(palindrome("MadAm"))