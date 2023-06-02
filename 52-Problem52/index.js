function square(arr){
    return arr.map((x)=>x*x).reduce((acc,current)=>acc+current,0); 
}
console.log(square([1,2,2]))