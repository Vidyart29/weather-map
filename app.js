var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var Description = document.querySelector('.Description');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=34f30503692a85605efc9928c2c2f1e5')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];


  main.innerHTML = nameValue;
  Description.innerHTML = "Description - "+descValue;
  temp.innerHTML = Math.floor(tempValue - 273.15) + "°C";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})