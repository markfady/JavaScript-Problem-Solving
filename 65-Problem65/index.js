function quarter(month){
    /* first solution return month<4? 'First Quarter' : month <=6 ? 'Second Quarter' : month <=9 ? 'Third Quarter' : 'Fourth' */
    return Math.ceil(month/3)
    }

console.log(quarter(2))
console.log(quarter(6))
console.log(quarter(11))