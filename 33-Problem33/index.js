function transportationOnVacation(days){
    const cost = days >= 7 ? days * 40 - 50 : days >= 3 ? days * 40 - 30 : days * 40;
  return `You will pay ${cost} in ${days} days`;
}

console.log(transportationOnVacation(7));
console.log(transportationOnVacation(4));
console.log(transportationOnVacation(2));