function bonusOrnot(value,boolean){
  /* solution 1
    switch(boolean) {
        case 'true' : return "\u00A3" + value*10
        break;
        case 'false': return "\u00A3" + value
        break;
        default: return "Please enter true of false"
    }
    */
   //solution 2 
   return boolean==true? "\u00A3" + value*10 : "\u00A3" + value
}
console.log(bonusOrnot(50,false))