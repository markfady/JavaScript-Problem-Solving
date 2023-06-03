function average(arr,score){

let student =arr.reduce((acc,current)=>acc+current,0)/arr.length 
    return student >score? false : true
}
console.log(average([1,2],0))