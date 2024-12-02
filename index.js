let guess = Math.floor((Math.random()*100)+1)
console.log(guess)
let count = 0
let hints = document.getElementById('hint')
let Attempts =document.getElementById('attempt')

let Attempt_status = 1

function check(){
    if(Attempt_status==1){
 
    let val = document.forms[0]['val'].value
    console.log(val)
    count ++;
    
    if(val == guess){
        hints.innerHTML='Guess is Correct'
        console.log("Guess is Correct")
        console.log("Attempt :- "+ count)
        Attempts.innerHTML="Attempt :- "+ count
        document.forms[0]['val'].value = '';
        document.getElementById('Check_B').innerHTML = 'Reset'
        Attempt_status = 0
        
    }
    else if(val < guess){
        hints.innerHTML='Guess is Lower'
        console.log('Guess is Lower')
        console.log("Attempt :- "+ count)
        Attempts.innerHTML="Attempt :- "+ count
        document.forms[0]['val'].value = '';
    }
    else{
        hints.innerHTML='Guess is Higher'
        console.log('Guess is Higher')
        console.log("Attempt :- "+ count)
        Attempts.innerHTML="Attempt :- "+ count
        document.forms[0]['val'].value = '';
    }
    if(count >= 10){
        document.write('Game Over')
    }
}
else{
    reset()
}
}
    function reset(){ 
        guess = Math.floor(Math.random() * 100) + 1;
        console.log(guess);
        count = 0;
        document.getElementById('hint').innerHTML = 'Game reset! Start guessing.';
        document.getElementById('attempt').innerHTML = 'Attempts:- 0';
        document.forms[0]['val'].value = '';  
        document.getElementById('Check_B').innerHTML = 'Check';
        Attempt_status=1;
    
    }



