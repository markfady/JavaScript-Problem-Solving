function descendingOrder(num){ //we can sort desc without reverse by using sort((a,b)=>b-a)
    let neww =  num.toString().split('').sort().reverse().join('')
    return Number(neww)
}
console.log(descendingOrder(42145))
console.log(descendingOrder(145263))