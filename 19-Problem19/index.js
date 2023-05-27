function reverseWords(str){ 
    //Takes string and convert it to array using .split(each word will be saved in different index) to check if there are space between words
    //If there is space we reverse them
    //Then we convert the array of words back to normal string using join
    return str.split(' ').reverse().join(" ");
}
console.log(reverseWords('Hello World'))