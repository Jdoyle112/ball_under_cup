var cup;
var rand;

function reset(){
	$('.balls').css('display', 'none');
}


$(document).ready(function(){
	
	$('.cup').click(function(){
		cup = $(this).attr('id');
		reset();
		rand = Math.floor((Math.random() * 3)) + 1;
		if(rand == 1){
			$('#ball1').css('display', 'block');
		} else if(rand == 2){
			$('#ball2').css('display', 'block');
		} else {
			$('#ball3').css('display', 'block');
		}
		message();
	});

	function message(){
		var str = cup.slice(3);
		if(str == rand){
			alert("Congrats! You picked the right cup!");
		} else {
			alert("So sorry. Try again!")
		}
	}	
});