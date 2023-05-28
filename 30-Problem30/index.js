function banjoPlayer(name){
    /* solution 1 using if statement
     return name.startsWith("R",0) ||  name.startsWith("r",0) ? 'You are banjoPlayer' : 'You are not banjoPlayer'; */
   //solution 2 using regex for first letter(^r) small or capital(i), and test method(built in function to search inside the given name with condition of regex)
    return /^r/i.test(name)? 'You are banjoPlayer' : 'You are not banjoPlayer' // 
}
console.log(banjoPlayer("r"))
console.log(banjoPlayer("R"))
console.log(banjoPlayer("S"))
console.log(banjoPlayer("K"))