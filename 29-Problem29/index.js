function removeExclamation(str){  
        /* solution  1
    if(str.endsWith("!")){
        return str.slice(0,str.length-1)
    }  else{
        return str;
    }   
    */
    
    //solution 2 
    return str.replace(/!$/,"")




}
console.log(removeExclamation("!HI!!"))
