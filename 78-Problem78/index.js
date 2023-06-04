function maxExpression(a,b,c){
    return Math.max(
        a+b+c,
        a*b*c,
        a*(b+c)
    )
}
console.log(maxExpression(3,5,7))