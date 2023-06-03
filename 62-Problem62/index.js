function feast(animal,dish){ //check if first and last letters of animal equals to the dish first,last letter
    return animal[0] == dish[0] && animal[animal.length-1] == dish[dish.length-1] ? true : false
}
console.log(feast("chickadee","chocolate cake"))