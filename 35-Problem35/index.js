function consecutiveNumber(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]-1 !==arr[i-1])  //arr[i]-1  (starting with i=1 refers to index 1 which carry value 2)>=2-1 =1 so next part > 1 is = to arr[i-1] => arr[1-1]=0 (value1)
            return "The non consecutiveNumber is : "+  arr[i];
        }
        return null
}
console.log(consecutiveNumber([1,2,3,4,6,7,8]))