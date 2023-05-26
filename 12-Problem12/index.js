function doubleChar(input){
    let value=""
    for(let i=0;i<input.length;i++){
        value+=input[i]+input[i].split('')
    }
    return value.repeat(1)
}

console.log(doubleChar('ABC'))