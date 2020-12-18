const computerPlay = () => {
    let number = Math.floor(Math.random() * 3) + 1;
    return number;
    
}

const round = (you,opponent) => {
    if(you === 1 && opponent == 2) {
        console.log('Your opponent chose paper, You lose!');
        return 2;
    }
    if(you === 1 && opponent == 3) {
        console.log('Your opponent chose scissors, You win!');
        return 1;
    }
    if(you === 1 && opponent == 1) {
        console.log('Your opponent chose the same, Tie!');
        return 0;
    }
    if(you === 2 && opponent == 1) {
        console.log('Your opponent chose rock, You win!');
        return 1;
    }
    if(you === 2 && opponent == 3) {
        console.log('Your opponent chose scissors, You lose!');
        return 2;
    }
    if(you === 2 && opponent == 2) {
        console.log('Your opponent chose the same, Tie!');
        return 0;
    }
    if(you === 3 && opponent == 1) {
        console.log('Your opponent chose rock, You lose!');
        return 2;
    }
    if(you === 3 && opponent == 2) {
        console.log('Your opponent chose paper, you win!');
        return 1;
    }
    if(you === 3 && opponent == 3) {
        console.log('Your opponent chose the same, Tie!');
        return 0;
    }

    
}


const play = document.querySelector('#play');
const playAgain = document.createElement('button');
playAgain.textContent = 'Play Again';


play.addEventListener('click',() => {
    let youPoints = 0;
    let oppPoints = 0;

    const title = document.querySelector('#title');
    title.textContent = 'Rock Paper Scissors';
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
    
    rock.addEventListener('click', () => {
        let rockResult = round(1,computerPlay());
        if(rockResult == 1) {
            youPoints = youPoints + 1;
            document.getElementById('you').textContent= youPoints;
            document.getElementById('you').setAttribute('style','color:green;')
            document.getElementById('opp').setAttribute('style','color:red;')
        } else if(rockResult == 2) {
            document.getElementById('opp').setAttribute('style','color:green;')
            document.getElementById('you').setAttribute('style','color:red;')
            oppPoints = oppPoints + 1;
            document.getElementById('opp').textContent= oppPoints;
        } else {
            document.getElementById('opp').setAttribute('style','color:black;')
            document.getElementById('you').setAttribute('style','color:black;')
        }
        if(oppPoints == 5) {
            document.getElementById('title').textContent = 'You Lose!';
            document.getElementById('you').textContent= youPoints;
            document.getElementById('opp').textContent= oppPoints;
            options.parentNode.removeChild(options);
            container.appendChild(play);
            play.textContent ='Play Again'
            gameDiv.parentNode.removeChild(gameDiv);
        }
        if(youPoints == 5) {
            document.getElementById('title').textContent = 'You Win!';
            document.getElementById('you').textContent= youPoints;
            document.getElementById('opp').textContent= oppPoints;
            options.parentNode.removeChild(options);
            container.appendChild(play);
            play.textContent ='Play Again'
            gameDiv.parentNode.removeChild(gameDiv);
        }
    })

    paper.addEventListener('click', () => {
        let paperResult = round(2,computerPlay());
        if(paperResult == 1) {
            youPoints = youPoints + 1;
            document.getElementById('you').textContent= youPoints;
            document.getElementById('opp').setAttribute('style','color:red;')
            document.getElementById('you').setAttribute('style','color:green;')
        } else if(paperResult == 2) {
            oppPoints = oppPoints + 1;
            document.getElementById('opp').setAttribute('style','color:green;')
            document.getElementById('you').setAttribute('style','color:red;')
            document.getElementById('opp').textContent= oppPoints;
        } else {
            document.getElementById('opp').setAttribute('style','color:black;')
            document.getElementById('you').setAttribute('style','color:black;')
        }
        if(oppPoints == 5) {
            document.getElementById('title').textContent = 'You Lose!';
            document.getElementById('you').textContent= youPoints;
            document.getElementById('opp').textContent= oppPoints;
            options.parentNode.removeChild(options);
            container.appendChild(play);
            play.textContent ='Play Again'
            gameDiv.parentNode.removeChild(gameDiv);
        }
        if(youPoints == 5) {
            document.getElementById('title').textContent = 'You Win!';
            document.getElementById('you').textContent= youPoints;
            document.getElementById('opp').textContent= oppPoints;
            options.parentNode.removeChild(options);
            container.appendChild(play);
            play.textContent ='Play Again'
            gameDiv.parentNode.removeChild(gameDiv);
        }
    })

    scissors.addEventListener('click', () => {
        let scissorsResult = round(3,computerPlay());
        if(scissorsResult == 1) {
            youPoints = youPoints + 1;
            document.getElementById('you').textContent= youPoints;
            document.getElementById('opp').setAttribute('style','color:red;')
            document.getElementById('you').setAttribute('style','color:green;')
        } else if(scissorsResult == 2) {
            oppPoints = oppPoints + 1;
            document.getElementById('opp').setAttribute('style','color:green;')
            document.getElementById('you').setAttribute('style','color:red;')
            document.getElementById('opp').textContent= oppPoints;
        } else {
            document.getElementById('opp').setAttribute('style','color:black;')
            document.getElementById('you').setAttribute('style','color:black;')
        }
        if(oppPoints == 5) {
            document.getElementById('title').textContent = 'You Lose!';
            document.getElementById('you').textContent= youPoints;
            document.getElementById('opp').textContent= oppPoints;
            options.parentNode.removeChild(options);
            container.appendChild(play);
            play.textContent ='Play Again'
            gameDiv.parentNode.removeChild(gameDiv);
        }
        if(youPoints == 5) {
            document.getElementById('title').textContent = 'You Win!';
            document.getElementById('you').textContent= youPoints;
            document.getElementById('opp').textContent= oppPoints;
            options.parentNode.removeChild(options);
            container.appendChild(play);
            play.textContent ='Play Again'
            gameDiv.parentNode.removeChild(gameDiv);
        }
    })

});




