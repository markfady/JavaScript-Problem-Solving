function findPosition(alpha){
    let alphabets='ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
    /*Solution 1
    let alphabets='ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
    for(let i=0;i<alphabets.length;i++){
        if(alphabets[i]==alpha){
            return `The Position of letter(${alpha}) at ${i+1}`   
        }
    } */
    return `The Position of Letter  ${alpha} is at   ${alphabets.indexOf(alpha)+1}`;
}
console.log(findPosition('A'))