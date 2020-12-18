const computerPlay = () => {
    let number = Math.floor(Math.random() * 3);
    return number;
    
}

const round = (you,opponent) => {
    if(you == 1 && opponent == 2) {
        console.log('Your opponent chose paper, You lose!');
        return 2;
    }
    if(you == 1 && opponent == 3) {
        console.log('Your opponent chose scissors, You win!');
        return 1;
    }
    if(you == 1 && opponent == 1) {
        console.log('Your opponent chose the same, Tie!');
        return 0;
    }
    if(you == 2 && opponent == 1) {
        console.log('Your opponent chose rock, You win!');
        return 1;
    }
    if(you == 2 && opponent == 3) {
        console.log('Your opponent chose scissors, You lose!');
        return 2;
    }
    if(you == 2 && opponent == 2) {
        console.log('Your opponent chose the same, Tie!');
        return 0;
    }
    if(you == 3 && opponent == 1) {
        console.log('Your opponent chose rock, You lose!');
        return 2;
    }
    if(you == 3 && opponent == 2) {
        console.log('Your opponent chose paper, you win!');
        return 1;
    }
    if(you == 3 && opponent == 3) {
        console.log('Your opponent chose the same, Tie!');
        return 0;
    }

    
}

const game = () => {
    let a = 0;
    let b = 0;
    
    for(let i=0; i<3;i++) {
        let hand = prompt('Your Opponent is ready! Choose what to play');
        let c = round(hand,computerPlay());
        if(c == 1) {
            a = a + 1;
            console.log('You ' + a);
            console.log('Opponent ' + b);
        } else if (c == 2) {
            b = b + 1;
            console.log('You ' + a);
            console.log('Opponent ' + b);
        } else if(c == 0) {
            i = i -1;
        } if (a == 2) {
            return 'YOU WIN THE GAME!'
        } else if (b== 2) {
            return 'YOU LOSE THE GAME!'
        }
    }
}

let youPoints = 0;
let oppPoints = 0;
const play = document.querySelector('#play');

play.addEventListener('click',() => {
    play.parentNode.removeChild(play);
    const container = document.querySelector('#container');

    const gameDiv = document.createElement('div');
    gameDiv.classList.add('container-div');
    
    const gameScore = document.createElement('div');
    gameScore.setAttribute('id','game-score');
    const youScore = document.createElement('h3');
    youScore.setAttribute('id','you');
    const oppScore = document.createElement('h3');
    oppScore.setAttribute('id','opp');

    const options = document.createElement('div');
    options.setAttribute('id','options');
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');

    youScore.textContent = youPoints;
    oppScore.textContent = oppPoints;

    rock.textContent = 'rock';
    paper.textContent = 'paper';
    scissors.textContent = 'scissors';

    gameScore.appendChild(youScore);
    gameScore.appendChild(oppScore);

    options.appendChild(rock);
    options.appendChild(paper);
    options.appendChild(scissors);

    gameDiv.appendChild(gameScore);
    gameDiv.appendChild(options);

    container.appendChild(gameDiv);

});

