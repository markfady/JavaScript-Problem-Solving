function removeEachSecond(arr){
    /* solution 1
   let i=0;
   let newArray=[]
   for(let i=0;i<arr.length;i++){
    if(i%2==0){ //Check if the even value of index will take them , and remove the values with odd from our new array
    newArray.push(arr[i]);
    }
   }
   return newArray
   */
  //solution 2 filter the array depending on the condition i put , then returns the array after applying the condition(no need to make new array) x > value of array, i > index
 return  arr.filter((x,i)=>i %2== 0);
}
console.log(removeEachSecond(["keep","remove","keep","remove","keep"]))