function howMuch(array){
    let count=0
    array.map((x)=>{
        if (x==true){
            count+=1
        }
    })
    return ` The Count of True are : ${count}` 
}
console.log(howMuch([true,false,true,false,true]))