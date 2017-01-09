var colors = [
	'rgb(0, 0, 0)',
	'rgb(255, 0, 0)', 
	'rgb(0, 255, 0)', 
	'rgb(0, 0, 255)', 
	'rgb(255, 255, 0)', 
	'rgb(0, 255, 255)'];
var squares = document.querySelectorAll('.square');
var winnerColor = 0;

$('span').text(colors[winnerColor]);


for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
}

$('.square').on('click', function(event){
	if($(this).css('background-color') === colors[winnerColor]){
		console.log('winner');
	}
	// console.log($(this).css('background-color'));
});
