function countbyx(x,n){

    let newArray=[];
    for(let i=1;i<=n;i++){ //stop when we reach n values
        newArray.push(x*i)
    }
return newArray
}
console.log(countbyx(1,10))