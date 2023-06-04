function sortAndStar(arr){
    return arr.sort()[0].split('').join('***'); 
}
console.log(sortAndStar(['Bitcoin','animal','book','zebra','jar']));