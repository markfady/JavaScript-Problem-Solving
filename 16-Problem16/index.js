function noSpaces(str){
 return str.split(" ").join("");  //use split to remove the spaces with seperator , then convert array of split to normal string using join method(without seperator) 
}
console.log(noSpaces("A BC D F EGHJ"))