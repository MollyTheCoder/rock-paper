
//variables for choosing the charcater
const characterList = document.getElementById('charac');
const bodyHTML = document.getElementById('body');
const imagesCharacters = characterList.children;
const newWrapper = document.createElement('div');
bodyHTML.appendChild(newWrapper);
newWrapper.setAttribute("id", "final-players");
//variables for choosing the 'weapons'
const tools = document.getElementById('tools');
tools.style.display = 'none';
const toolsList = tools.children;
const heading = document.getElementById('heading-tools');
heading.style.display = 'none';
const headingTwo = document.getElementsByTagName('h2');


const secondWrapper = document.createElement('div');
bodyHTML.appendChild(secondWrapper);
secondWrapper.setAttribute("id", "game-results");
const wrapperChildren = secondWrapper.children;

let playerOneScore = 0;
let playerTwoScore = 0;

function computerAvatar(texts, image, wrapper) {

	const text = document.createElement('h3');
	text.textContent = texts;
	const div = document.createElement('span');
	div.appendChild(text);
	let newChild = document.createElement('img');
	let number = Math.floor((Math.random() * 3) + 1);
	newChild = image[number];
	div.appendChild(newChild);
	wrapper.appendChild(div);
	div.setAttribute('id', 'avatar-span');
	return newChild;
}

function createButton(text, parent) {

	const button = document.createElement('button');
	button.textContent = text;
	parent.appendChild(button);

	return button;
}

function whoWins(first, second) {

			let playerOne = first;
			let playerTwo = second;
			let message;
			

		
		if (playerOne === document.getElementById('scissors') && playerTwo === document.getElementById('paper')) {

			 message = "Scissors cuts Paper. You Win!";
			 playerOneScore += 1;
		} else if (playerOne === document.getElementById('scissors') && playerTwo === document.getElementById('lizard')) {

			 message = "Scissors decapitates Lizard. You Win!";
			 playerOneScore += 1;
		} else if (playerOne === document.getElementById('scissors') && playerTwo === document.getElementById('rock')) {

			 message = "Rock crushes Scissors. Your oponent wins!";
			 playerTwoScore += 1;
		} else  if (playerOne === document.getElementById('scissors') && playerTwo === document.getElementById('spock')) {

			 message = "Spock smashes Scissors. Your opponent wins!";
			 playerTwoScore += 1;
		} else if (playerOne === document.getElementById('paper') && playerTwo === document.getElementById('rock')) {

			 message = "Paper covers Rock. You Win!";
			 playerOneScore += 1;
		} else if (playerOne === document.getElementById('paper') && playerTwo === document.getElementById('spock')) {

			 message = "Paper disproves Spock. You Win!";
			 playerTwoScore += 1;
		} else if (playerOne === document.getElementById('paper') && playerTwo === document.getElementById('lizard')) {

			 message = "Lizard eats Paper. Your oponent wins!";
			 playerTwoScore += 1;
		} else  if (playerOne === document.getElementById('paper') && playerTwo === document.getElementById('scissors')) {

			 message = "Scissors cuts Paper. Your opponent wins!";
			 playerTwoScore += 1;
		} else if (playerOne === document.getElementById('rock') && playerTwo === document.getElementById('lizard')) {

			 message = "Rock crushes Lizard. You Win!";
			 playerOneScore += 1;
		} else if (playerOne === document.getElementById('rock') && playerTwo === document.getElementById('scissors')) {

			 message = "Rock crushes Scissors. You Win!";
			 playerOneScore += 1;
		} else if (playerOne === document.getElementById('rock') && playerTwo === document.getElementById('paper')) {

			 message = "Paper covers Rock. Your oponent wins!";
			 playerTwoScore += 1;
		} else  if (playerOne === document.getElementById('rock') && playerTwo === document.getElementById('spock')) {

			 message = "Spock vaporizes Rock. Your opponent wins!";
			 playerTwoScore += 1;
		}  else if (playerOne === document.getElementById('lizard') && playerTwo === document.getElementById('spock')) {

			 message = "Lizard poisons Spock. You Win!";
			 playerOneScore += 1;
		} else if (playerOne === document.getElementById('lizard') && playerTwo === document.getElementById('paper')) {

			 message = "Lizard eats Paper. You Win!";
			 playerOneScore += 1;
		} else if (playerOne === document.getElementById('lizard') && playerTwo === document.getElementById('rock')) {

			 message = "Rock crushes Lizard. Your oponent wins!";
			 playerTwoScore += 1;
		} else  if (playerOne === document.getElementById('lizard') && playerTwo === document.getElementById('scissors')) {

			 message = "Scissors decapitates Lizard. Your opponent wins!";
			 playerTwoScore += 1;
		}  else if (playerOne === document.getElementById('spock') && playerTwo === document.getElementById('scissors')) {

			 message = "Spock smashes Scissors. You Win!";
			 playerOneScore += 1;
		} else if (playerOne === document.getElementById('Spock') && playerTwo === document.getElementById('rock')) {

			 message = "Spock vaporizes Rock. You Win!";
			 playerOneScore += 1;
		} else if (playerOne === document.getElementById('spock') && playerTwo === document.getElementById('lizard')) {

			 message = "Lizard poisons Spock. Your oponent wins!";
			 playerTwoScore += 1;
		} else  {

			 message = "Paper disproves Spock. Your opponent wins!";
			 playerTwoScore += 1;
		} 

		
			return message;
			
	}


	
characterList.addEventListener('click', (e) => {
 
		
		const characterChosen = e.target;

		if (e.target.tagName == 'IMG'){
		
		const text = document.createElement('h3');
		text.textContent = "You're playing with:";
		const div = document.createElement('span');
		div.setAttribute('id', 'myplayer-span');
		div.appendChild(text);
		div.appendChild(characterChosen);
		
		newWrapper.appendChild(div);
		

	}

	
	computerAvatar("Your opponent is:", imagesCharacters, newWrapper);

		for (let i = 0 ; i < imagesCharacters.length; i += 1) {
			let list = imagesCharacters[i];
			list.style.display = 'none';

		}

		headingTwo[0].style.display = 'none';


	createButton('Start game', newWrapper);


});

newWrapper.addEventListener('click', (e) => {

		const button = e.target;

		if (e.target.tagName == 'BUTTON') {
		bodyHTML.insertBefore(newWrapper, heading);
		bodyHTML.insertBefore(heading, tools);
		heading.style.display = 'block';
		tools.style.display = 'flex';
		newWrapper.removeChild(button);

 }

});



let weaponChosen;
let playerOpponent

tools.addEventListener('click', (e) => {

		weaponChosen = e.target;
		
		if (e.target.tagName == 'IMG'){
		
		const text = document.createElement('h3');
		text.textContent = "Your weapon:";
		const div = document.createElement('span');
		div.setAttribute('id', 'myweapon-span');

		div.appendChild(text);
		div.appendChild(weaponChosen);
		secondWrapper.appendChild(div);

	}

			
		playerOpponent = computerAvatar("His weapon:", toolsList, secondWrapper);

		for (let i = 0 ; i < toolsList.length; i += 1) {
			let list = toolsList[i];
			list.style.display = 'none';

		}

		headingTwo[1].style.display = 'none';

	

	let message = document.createElement('h3');
	secondWrapper.appendChild(message);
	message.textContent = whoWins(weaponChosen, playerOpponent);


	createButton('Play Again', secondWrapper);
	

	let score = document.createElement('h3');
	secondWrapper.appendChild(score);
	score.innerHTML = "You have won " + playerOneScore + " games. <br> Your opponent has won " + playerTwoScore + " games."

	createButton('Choose other player', secondWrapper);

	window.location.href = "#game-results";


	
});


secondWrapper.addEventListener('click', (e) => {

		const button = e.target;
		//location.reload();

		if (e.target.textContent == 'Play Again') {
		secondWrapper.style.display = 'block';
		tools.appendChild(weaponChosen);
		tools.appendChild(playerOpponent);

		
		for (let i = 0 ; i < toolsList.length; i += 1) {
			let list = toolsList[i];
			list.style.display = 'block';

		}

		headingTwo[1].style.display = 'block';

		for (let k = 0 ; k < wrapperChildren.length; k += 1) {
			let listTwo = wrapperChildren[k];
			listTwo.style.display = 'none';

		}


}

});

secondWrapper.addEventListener('click', (e) => {

		const button = e.target;
		

		if (e.target.textContent == 'Choose other player') {
		location.reload();

		

}

});

const rules = document.createElement('h4')
rules.textContent = "Show Rules of Game";
const rulesList = document.createElement('p');
rulesList.innerHTML = "Scissors cuts Paper <br> Paper covers Rock <br> Rock crushes Lizard <br>	Lizard poisons Spock <br> Spock smashes Scissors <br> Scissors decapitates Lizard <br> Lizard eats Paper <br> Paper disproves Spock <br> Spock vaporizes Rock <br> Rock crushes Scissors";
bodyHTML.appendChild(rules);

//rulesList.style.display = 'none';
const hide = document.createElement('h4');
hide.textContent = "Hide Rules of Game";
bodyHTML.appendChild(hide);
hide.style.display = 'none';


rules.addEventListener('click', (e) => {

	rules.style.display = 'none';
	hide.style.display = 'block';
	bodyHTML.appendChild(rulesList);
	rulesList.style.display = 'block';
	
	
	



});

hide.addEventListener('click', (e) => {

	rules.style.display = 'block';
	hide.style.display = 'none';
	rulesList.style.display = 'none';



});











