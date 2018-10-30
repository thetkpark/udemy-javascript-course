/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

//***********Function area*************

function nextPlayer(){
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    /*
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
    */
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1!';
    document.getElementById('name-1').textContent = 'Player 2!';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

    gamePlaying = true;

}




//***********Var area****************

var scores,roundScore,activePlayer,gamePlaying;
var lastDice;
var winScore;




//***********Coding area*************


init();



//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

/*
function btn(){

}
document.querySelector('.btn-roll').addEventListener('click', btn); //call function btn as soon as got 'click'
*/
document.querySelector('.btn-roll').addEventListener('click', function(){ //run this 'anonymous' function and it can't be reused
   
    if(gamePlaying){
    //1. Random number
    var dice1 = Math.floor((Math.random() * 6)+1);
    var dice2 = Math.floor((Math.random() * 6)+1);

    //2. Display the result
    var dice1DOM = document.getElementById('dice-1');
    dice1DOM.style.display = 'block';
    dice1DOM.src = 'dice-' + dice1 + '.png';

    var dice2DOM = document.getElementById('dice-2');
    dice2DOM.style.display = 'block';
    dice2DOM.src = 'dice-' + dice2 + '.png';


    //3. Update round score if dice !== 1

    if(dice1!==1 && dice2 !==1){
            //add score
            roundScore = roundScore + dice1 + dice2; 
            document.getElementById('current-' + activePlayer).textContent = roundScore;

    }
    else {
        nextPlayer();
    }


    /*
    if(lastDice === 6 && dice === 6){
        //Player looses score
        roundScore = 0;
        scores[activePlayer] = 0;
        document.getElementById('current-' + activePlayer).textContent = '0';
        document.getElementById('score-' + activePlayer).textContent = '0';

        nextPlayer();
    }
    else if(dice!==1){
        //add score
        roundScore = roundScore + dice; 
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
    else {
        nextPlayer();
    }
    lastDice = dice;
    */
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying){
    // add current score to GLOBAL score
    scores[activePlayer] = scores[activePlayer] + roundScore;

    //update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.final-score').value;
    console.log(input);
    if(input) {
        winScore = input;
    } else {
        winScore = 100;
    }

    //check if player won the game
    if(scores[activePlayer] >= winScore){
        document.getElementById('name-'+activePlayer).textContent = 'WINNER!';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-'+activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
    else {
    //next player turn
    nextPlayer();
    }
    }
});
document.querySelector('.btn-new').addEventListener('click', init);

