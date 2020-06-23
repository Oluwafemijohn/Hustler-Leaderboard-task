function setup(){
    loadJSON('hng.csv', gotData);
}

function gotData(data){
    console.log(data);
}