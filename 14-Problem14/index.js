function Squareandmultiply(arr){

    let newArray=[]
    for(let i=0;i<arr.length;i++){
        if(Number.isInteger(Math.sqrt(arr[i]))){ //Takes a number and check if it Integar or not .. we check number after the sqrt operation
            newArray.push(Math.sqrt(arr[i]))
        }
        else{
            newArray.push(arr[i]*2)
        }
    }
    return newArray
}
console.log(Squareandmultiply([4,2,3]))  //4 got sqrt so return 2  .. 2,3 after sqrt returns deciaml so multiply them