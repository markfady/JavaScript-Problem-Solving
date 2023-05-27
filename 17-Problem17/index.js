function invertValues(arr){
    /* Solution1
    let newArray=[]
    for(let i=0;i<arr.length;i++){ //No need for if statement cause the condition of number bigger than or smaller than 0 both will be  multiplied by -1
        newArray.push(arr[i] *-1);
    }
    return newArray
    */
   //solution 2 .map() iterate on each element and returns new array after applying the condition on the old elements.
return arr.map((x)=>x*-1);
}
console.log(invertValues([1,2,-3,-4,5]))