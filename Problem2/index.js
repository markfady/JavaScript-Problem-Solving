function sum_of_positives(arr){
   //Solution 1
                            /*  let defaultvalue=0;
                                for(let i=0;i<arr.length;i++){
                                    if(arr[i]>0){
                                    defaultvalue+=arr[i]
                                    }
                                }
                                return defaultvalue;
                            */
//Solution 2 using .filter which takes our array as input and return new array using our condition + reduce where acc=current item ,current=next item,0=start from 1st index
return arr.filter((x)=>x>0).reduce((acc,current)=>acc+current,0)
                            }
console.log(sum_of_positives([1,-3,2]))