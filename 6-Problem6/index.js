function presentsheep(arr){
    let i=0;
    arr.map((x)=>{
    if (x=="true"){     
        i+=1;
    }
});
console.log(i)
}
presentsheep(["true","true","true","false","true","false","true",
            "true","true","true","false","true","false","true",
            "true","true","true","false","true","false","true"])