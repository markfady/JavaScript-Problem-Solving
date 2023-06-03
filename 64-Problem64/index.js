function alarm(case1,case2){
    return case1==true && case2==false ? true : case1==false && case2== false ? false : case1==true && case2==true? false : case1==false && case2==true? false : true
}
console.log(alarm(true,true))
console.log(alarm(false,true))
console.log(alarm(false,false))
console.log(alarm(true,false))