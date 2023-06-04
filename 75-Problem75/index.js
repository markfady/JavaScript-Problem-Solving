function powersOf2(value){
    //Array => will make array of the values 
    //fill the data of array by zero
    //Then on each zero we will map and add it 
    //then we will map on new values (after the summation) and we will use it as a power to 2
    return Array(value+1).fill(0).map((value,n)=>value+n).map((x)=>Math.pow(2,x));
}
console.log(powersOf2(4))