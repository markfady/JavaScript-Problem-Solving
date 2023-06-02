function isDivisible(a,b,c){
    return a%b==0 && a%c==0? `True because ${a} is divisble by ${b} and ${c}` : `False`
}
console.log(isDivisible(3,1,3))