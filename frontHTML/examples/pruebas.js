
$.get("https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=19.447759,-99.153080&destinations=19.445967,-99.153416&key=AIzaSyBOhzwMftzNviVx1QkTarGKM57uAcFNQ2U")
  .done(function(data){
    console.log(data);
  });

/*
function ejecuta(){
var cruce1_1 = readJsonFromUrl('https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=19.447759,-99.153080&destinations=19.445967,-99.153416&key=AIzaSyBOhzwMftzNviVx1QkTarGKM57uAcFNQ2U');
    document.getElementById("ejemplo").innerHTML="hola: ";//+cruce1_1.rows.elements.distance.value


  var cruce1_2 = readJsonFromUrl('https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=19.445932,-99.153227&destinations=19.446998,-99.153000&key=AIzaSyBOhzwMftzNviVx1QkTarGKM57uAcFNQ2U');
  var cruce1_3 = readJsonFromUrl('https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=19.446441,-99.153985&destinations=19.446162,-99.152343&key=AIzaSyBOhzwMftzNviVx1QkTarGKM57uAcFNQ2U');

}

window.onload = ejecuta;
*/
