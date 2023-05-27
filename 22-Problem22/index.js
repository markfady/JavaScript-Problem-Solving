function average(arr){
    /*  solution 1
    if(arr.length==0) return 0
    let i=0
    arr.map((x)=>{
        i+=x;
    })
   return i/arr.length
   */
  //solution 2 sum all array inputs with reduce then divide them 
    return arr.reduce((acc,current)=>acc+current,0) / arr.length
}
console.log(average([2,3]));