function multiplyArray(arr){
    return arr.reduce((arr,current)=>arr*current); //we here remove initial value so don't multiply on zero , use it on add only
}
console.log(multiplyArray([1,2,3,4]))