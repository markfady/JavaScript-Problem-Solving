function gooseFilter(bird){ 
    let geese = ['African','Roman Tufed','Toulouse'];
    let unqiue = bird.filter((x)=>{
        return      !geese.includes(x)
    })
    return unqiue
}
console.log(gooseFilter(['Mallard','African','Toulouse']));