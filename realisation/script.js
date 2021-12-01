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
 attemptOutPut = document.getElementById('attempt')
 attempt =10;
 // traitement 

btn.addEventListener('click', function(){
    attempt--;
    nombreDeviner = document.getElementById('userInput').value;
    if(attempt>0){
        attemptOutPut.innerHTML=attempt +"-attempt"
        if ( nombreDeviner == number){
            if (nombreDeviner == number && attempt >=8 ) { 
                output.innerHTML = 'Well done, you are a genius !!!'
                }else{
                if(nombreDeviner == number && attempt >=3){
                    output.innerHTML ='Congratulations, you won afterwards, ' +attempt +" tentative" 
                }
                }
                
          } else{
            if ( nombreDeviner < number){
                output.innerHTML = "the number you chose is smaller"
            }
            else {
              output.innerHTML = "the number you have chosen is greater"
            }
        
          }
    }else {
        output.innerHTML = "you lost"
        attemptOutPut.innerHTML= "0-attempt"
    }





  
  

});