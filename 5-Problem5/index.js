function reversenumber(numbers){
    /*solution 1
let values=numbers.toString().split('') //convert number to string so we can split them into new array
let array=values.reverse()  //after split we can reverse them
return   array.map((x) => {       //loop on each item 
return   parseInt(x);      //to convert them back into numbers
})
*/
//solution 2 
return numbers.toString().split('').map((x)=>Number(x)).reverse();
}
console.log(reversenumber(54321))
