function exclamationRemover(str){ //split creates array , then we put our filter to loop on each item of array , after this we join to return it to string
    return str.split("").filter((e)=>e!=="!").join("")
}
console.log(exclamationRemover("!M!V!C!L"))