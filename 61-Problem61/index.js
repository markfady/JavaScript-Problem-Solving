function sumStrings(arr){ //string to number using Number , then add all together
    return arr.map((x)=>Number(x)).reduce((acc,current)=>acc+current,0);
}
console.log(sumStrings(['1','2']))