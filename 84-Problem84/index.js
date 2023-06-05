function nThePower(arr,n){
    return arr.length-1 <n? -1 :  Math.pow(arr[n],n)
}
console.log(nThePower([1,2,3,4],2))
console.log(nThePower([1],2))