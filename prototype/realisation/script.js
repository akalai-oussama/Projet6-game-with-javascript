// declaration des variables 
var btn;
var output;
var number;
var nombreDeviner;
var attempt;

 // entrer: saiser 
 btn = document.getElementById('btn');
 output = document.getElementById('outputtext');
 number = Math.floor(Math.random() * 100);
 console.log(number)
 attemptOutPut = document.getElementById('tentative')
 attempt =10;
 // traitement 

btn.addEventListener('click', function(){
    attempt--;
    nombreDeviner = document.getElementById('userInput').value;
    if(attempt>0){
        attemptOutPut.innerHTML=attempt +"-tentative"
        if ( nombreDeviner == number){
            if (nombreDeviner == number && attempt >=8 ) { 
                output.innerHTML = 'Bravo, vous etes un Génie !!!'
                }else{
                if(nombreDeviner == number && attempt >=3){
                    output.innerHTML ='Félicitations, vous avez gagné après , ' +attempt +" tentative" 
                }
                }
                
          } else{
            if ( nombreDeviner < number){
                output.innerHTML = "le nombre que vous avez choisir est plus petit"
            }
            else {
              output.innerHTML = "le nombre que vous avez choisir est plus grand"
            }
        
          }
    }else {
        output.innerHTML = "c'est rate"
        attemptOutPut.innerHTML= "0-tentative"
    }





  
  

});