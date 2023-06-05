function Isograms(string){ //set removes all repeated items of array and return new array
                            //if removed one the size will not equal the original length 
    return new Set(string.split("")).size===string.length
}
console.log(Isograms("hello"))