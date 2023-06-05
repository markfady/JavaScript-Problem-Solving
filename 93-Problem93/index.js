function filterString(arr){
    let newArray=[]
        arr.map((x)=>{
        if(typeof x=='number'){
            newArray.push(x)
        }
    })
    return newArray
}
console.log(filterString([1,2,'abv',5,'abc','fdg']))
