function divisibleOrNot(numbers,divisor){ //filter returns array after doing the condition on each element of old array
    return numbers.filter((x)=>x%divisor==0);
}
console.log(divisibleOrNot([2,3,4,5,6,7,8],2))