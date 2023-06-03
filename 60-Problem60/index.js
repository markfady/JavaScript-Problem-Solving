function sumOfarrays(arr1,arr2){
    return arr1.concat(arr2).reduce((acc,current)=>acc+current,0)
}
console.log(sumOfarrays([1,2,3],[1,2,3]))