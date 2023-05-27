function welcomeGreetings(language){
    let myobj={
                english:'Welcome',
                czech:'Velkomst',
                danish:'Welkom',
                estonian:'Tere tulemast',
                finnish:'Welgekomen',
                french:'Bienvenue',
                german:'Wilkomen',
                irish:'Failte',
                italian:'Benvveunto',
                latvian:'Guidits',
                polish:'Witamy',
                spanish:'Bienvenido'
    }
    if(myobj.hasOwnProperty(language)){ //Check if entered language is inside the values of object
        console.log(myobj[language])   
    }
    else{
        console.log(myobj.english)
    }

    }
welcomeGreetings("spanish")