var colors = [];
var squares = document.querySelectorAll('.square');
var $squares = $('.square');
var $resetBtn = $('.reset');
var $feedback = $('.feedback');
var $easyBtn = $('.easy');
var $hardBtn = $('.hard');
var $h1 = $('h1');
var winnerColor = 0; 

function makeRandomColors(numOfSquares){
	colors = [];
	for(var i = 0; i < numOfSquares; i++){
		var one = Math.floor(Math.random() * 256);
		var two = Math.floor(Math.random() * 256);
		var three = Math.floor(Math.random() * 256);
		colors.push('rgb(' + one + ', ' + two + ', ' + three + ')');
	}
}

function makeRandomWinner(numOfSquares){
	winnerColor = Math.floor(Math.random() * numOfSquares);
	$('span').text(colors[winnerColor]);
}

function fillSquares(){
	$squares.css('display', 'none');
	for(var i = 0; i < colors.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = 'inline-block';
	}
}

function reset(numOfSquares){
	makeRandomColors(numOfSquares);
	makeRandomWinner(numOfSquares);
	fillSquares();
	$resetBtn.text('New colors');
	$feedback.text('');
	$h1.css('background', '#0088B5');
}

function init(){
	reset(6);
}

init();


/* ----------Event Listeners---------- */

$squares.on('click', function(){
	//if correct guess, change all squares background, h1 background
	//and reset it
	if($(this).css('background-color') === colors[winnerColor]){
		$squares.css('background', colors[winnerColor]);
		$h1.css('background', colors[winnerColor]);
		$resetBtn.text('Play Again?');
		$feedback.text('Correct');
	}
	//else, incorrect guess, keep guessing
	else {
		$(this).css('background', 'white');
		$feedback.text('Try Again');
	}
});

$resetBtn.on('click', function(){ 
	reset(6);
});

$easyBtn.on('click', function(){
	reset(3);
});

$hardBtn.on('click', function(){
	reset(6);
});