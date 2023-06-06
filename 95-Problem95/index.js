function XO(string){
    return string.match(/x/g ||[])?.length===string.match(/o/g ||[])?.length
}
console.log(XO('xxoo'))
console.log(XO('zzo'))