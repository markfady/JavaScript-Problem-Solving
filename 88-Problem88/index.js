function digitByDigit(numb){
    return Number(numb.split('').map((x)=>Math.pow(x,2)).join(''));
}
console.log(digitByDigit("9119"))
console.log(digitByDigit("765"))