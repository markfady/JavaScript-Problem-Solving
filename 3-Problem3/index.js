function exclude_lowest_highest(arr){
    if(arr==null) return 0;
    //solution 1
   /*  let lowestValue=Math.min(...arr);
    let highestValue=Math.max(...arr);
    let newArray=arr.filter((x)=>x!==lowestValue && x!==highestValue).reduce((acc,current)=>acc+current,0);
    console.log(newArray) */

//solution2  In this solution will only remove the repeated number from lowest or highest 1 time only not both like solution1 
return arr.sort((a,b)=>a-b).slice(1,-1).reduce((acc,current)=>acc+current,0);
}
console.log(exclude_lowest_highest([1,1,2,3]))   
//Will remove the highest value 'not index' (400) and lowest value(100) and sum the other 