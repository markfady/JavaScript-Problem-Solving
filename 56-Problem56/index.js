function replace(str){ //string to array then loop on each element , put your condition , then merge them with join
    return str.split('').map((x)=> x>'5' ? '0' : '1').join(',')
}
console.log(replace("1234890"))