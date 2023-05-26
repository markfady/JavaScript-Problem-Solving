function Countpositive_sumNegative(arr){
    let sum=0;
    let positiveNumbers=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
        sum+=arr[i]
    }
    else{
        positiveNumbers.push(arr[i]);

    }
        
    }
    return [sum , positiveNumbers.length]
}
console.log  (Countpositive_sumNegative([5,-2,-5,-9,8,9,-1]))