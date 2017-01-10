var colors = [];
var squares = document.querySelectorAll('.square');
var $squares = $('.square');
var winnerColor = 0; 

function makeRandomColors(numOfSquares){
	for(var i = 0; i < numOfSquares; i++){
		var one = Math.floor(Math.random() * 256);
		var two = Math.floor(Math.random() * 256);
		var three = Math.floor(Math.random() * 256);
		colors.push('rgb(' + one + ', ' + two + ', ' + three + ')');
	}
}

function makeRandomWinner(){
	winnerColor = Math.floor(Math.random() * 6);
	$('span').text(colors[winnerColor]);
}

function fillSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
}

function init(){
	makeRandomColors(6);
	makeRandomWinner();
	fillSquares();
}

init();

$squares.on('click', function(event){
	if($(this).css('background-color') === colors[winnerColor]){
		$squares.css('background', colors[winnerColor]);
	}
	
});
