function exclude_lowest_highest(arr){
    if(arr==null) return 0;
    let lowestValue=Math.min(...arr);
    let highestValue=Math.max(...arr);
    let newArray=arr.filter((x)=>x!==lowestValue && x!==highestValue).reduce((acc,current)=>acc+current,0);
    console.log(newArray)
}

exclude_lowest_highest([100,200,400,300])   
//Will remove the highest value 'not index' (400) and lowest value(100) and sum the other 