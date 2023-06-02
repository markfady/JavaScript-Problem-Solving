function summationArray(arr){
    return arr.reduce((acc,current)=>acc+current,0)
}
console.log(summationArray([1,2,3]))