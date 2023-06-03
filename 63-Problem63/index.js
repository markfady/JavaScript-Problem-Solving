function trafficLights(str){

    switch(str){
        case 'green' : return 'yellow'
        break;
        case 'yellow': return "red"
        break;
        case 'red' : return 'green'
        break;
        default: 'Enter one of the three lights of traffic'
    }
}
console.log(trafficLights('green'));
console.log(trafficLights('yellow'));
console.log(trafficLights('red'));
