function giveMeFive(start,end){
    let array=[]
    for(let i=start;i<=end;i++){
        if(!i.toString().includes(5))array.push(i)
    }
    return array.toString()  + `Length equals = ${array.length}`
}
console.log(giveMeFive(1,9))
console.log(giveMeFive(4,17))