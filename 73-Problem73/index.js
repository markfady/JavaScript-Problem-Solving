function bmi(weight,height){
    let bmiScore=  weight/Math.pow(height,2)
    return bmiScore <= 18.5 ? 'UnderWeight' : bmiScore <=25.0 ? 'Normal' : bmiScore<=30.0 ? 'OverWeight' : 'Obese'
} 
console.log(bmi(80,1.80));