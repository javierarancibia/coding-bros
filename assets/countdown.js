var countDownDate = addDays()

var x = setInterval(function() {
  
  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("demo").setAttribute("style", "color: #6C6CFD;font-size:3rem;") 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
}, 1000);



function addDays() {
  var result = new Date(Date.now());
  result.setDate(result.getDate() + 2);
  return result;
}