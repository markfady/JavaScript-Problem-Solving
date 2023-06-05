function highestAndLowest(numbers){
  let num= numbers.split(",").map((x)=>Number(x))

    return `The Highest value is : ${Math.max(...num)} The Lowest Value is : ${Math.min(...num)} `
}
console.log(highestAndLowest("1,15,16"))