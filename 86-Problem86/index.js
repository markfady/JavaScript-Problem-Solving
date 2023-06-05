function vowelsCount(string){
    let vowels='aeiou'
 /* solution 1
    let count=0;
    let newString= string.split('');
        for(let i=0;i<newString.length;i++){
        if(vowels.includes(newString[i])){
            count ++;
        }
    }
    return count */
    //solution2
    return string.split('').filter((x)=>vowels.includes(x)).length
}
console.log(vowelsCount('heello')) 