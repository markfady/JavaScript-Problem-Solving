function vowelRemover(str){
    /* solution 1
    let vowels=['A','E','I','O','U'];
    let arr=[]
    for(let i=0;i<str.length;i++){
        if(!vowels.includes(str[i])){
            arr.push(str[i])
        }
    }
    return arr.join(' ');
    */ 
   //solution2 using regex
   return str.replace(/[aeiouAEIOU]/g,'') 
}
console.log(vowelRemover('ABCDEFGHIJKLMNOPRSTUVWXYZ'))