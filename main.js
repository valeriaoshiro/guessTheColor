var colors = [];
var squares = document.querySelectorAll('.square');
var $squares = $('.square');
var winnerColor = Math.floor(Math.random() * 6);

function makeColorSquares(numOfSquares){
	for(var i = 0; i < numOfSquares; i++){
		var one = Math.floor(Math.random() * 256);
		var two = Math.floor(Math.random() * 256);
		var three = Math.floor(Math.random() * 256);
		//console.log('rgb(' + one + ', ' + two + ', ' + three + ')');
		colors.push('rgb(' + one + ', ' + two + ', ' + three + ')');
	}
	

}

makeColorSquares(6);

$('span').text(colors[winnerColor]);


for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
}

$squares.on('click', function(event){
	if($(this).css('background-color') === colors[winnerColor]){
		$squares.css('background', colors[winnerColor]);
	}
	
});
