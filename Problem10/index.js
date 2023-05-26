function needle(arr){
    /*  solution 1 using for loop and if statement (remove console.log from line 13)
      for(let i=0;i<arr.length;i++){
          if(arr[i]==="needle"){
              console.log("Index of needle is "+ i)
          }
      
  }
  */
  //solution 2
      return "Index of needle is "+arr.indexOf('needle');
  }
  console.log(needle(['hay','needle','junk']))