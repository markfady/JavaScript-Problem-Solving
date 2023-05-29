function averageArrayRounded(arr){
     return Math.floor(arr.reduce((arr,current)=>arr+current,0)/arr.length)
}
console.log(averageArrayRounded([1,2.5,3.1,8.9,80.5]))