function whatIsBetween(a,b){
 /*  solution 1  return Array(b - a+1).fill(a).map((n,x)=>n+x) */
 let arr=[]
 for(let i=a;i<=b;i++){
    arr.push(i)
}
return arr
}
console.log(whatIsBetween(1,4))