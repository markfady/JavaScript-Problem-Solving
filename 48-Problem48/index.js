function Grasshopper(num){
 /*Solution1   let result=0;
    for(let i=0;i<=num;i++){
        result+=i
    }
    return result */
    //solution2
    return Array(num).fill().reduce((acc,current,index)=>acc+index+1,0)
}
console.log(Grasshopper(2));