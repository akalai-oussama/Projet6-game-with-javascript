// declaration des variables 
var btn;
var output;
var number;
var nombreDeviner;


 // entrer: saiser 
 btn = document.getElementById('btn');
 output = document.getElementById('outputtext');
 number = Math.floor(Math.random() * 100);
 
 // traitement 

btn.addEventListener('click', function(){
  
  nombreDeviner = document.getElementById('userInput').value;
  if (nombreDeviner == number){
    output.innerHTML = 'Correct'
  } else{
    if (nombreDeviner < number){
        output.innerHTML = "le nombre que vous avez choisir est plus petit"
    }
    else {
      output.innerHTML = "le nombre que vous avez choisir est plus grand"
    }

  } 

});

