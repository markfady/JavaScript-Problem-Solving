function removeLastZero (numb){
    // return  /0$/.test(string)? string.slice(0,string.length-1): "No" //check with regex and test function

    let stringg=String(numb) 
    let i=0;
    do {
        stringg= stringg.slice(0,stringg.length-1)
        i++
    }
    while (stringg.endsWith(0))
    return stringg
}

console.log(removeLastZero(900000000000000));
console.log(removeLastZero(1050));