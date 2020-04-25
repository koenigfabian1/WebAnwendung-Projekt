$( document ).ready(function() {

var el = document.querySelector('.el');
var height = el.scrollHeight;
var p = 0;
var n = 0;

	/* Hochdruckreinigung */

	$( ".trigger" ).click(function() {
		if ( p % 2 == 0 ) {
			 $('#para1').addClass('highlight');
			$('.trigger').css('background-color', 'white');
			$('.trigger').css('color', 'black');
				$(".trigger").hover(function(){
				$(this).css("background-color", "white");
				}, function(){
				$(this).css("background-color", "white");
				});
			p++;
			console.log('Click count Hochdruckreinigung: ' + p);
		}
		else {
			 $('#para1').removeClass('highlight');
			$('.trigger').css('background-color', '#333333');
				$(".trigger").hover(function(){
				$(this).css("background-color", "#707070");
				}, function(){
				$(this).css("background-color", "#333333");
				});
			p++;
			console.log('Click count Hochdruckreinigung: ' + p)
			  
		}
		});
		
		
		/* Handwäsche */
		
		$( ".trigger2" ).click(function() {
				if ( n % 2 == 0 ) {
					$('#para2').addClass('highlight2');
					$('.trigger2').css('background-color', 'white');
					$('.trigger2').css('color', 'black');
						$(".trigger2").hover(function(){
						$(this).css("background-color", "white");
						}, function(){
						$(this).css("background-color", "white");
						});
					n++;
					console.log('Click count Handwäsche: ' + n);
				}
				else {
					$('#para2').removeClass('highlight2');
					$('.trigger2').css('background-color', '#333333');
					$('.trigger2').css('', '#333333');
						$(".trigger2").hover(function(){
						$(this).css("background-color", "#707070");
						}, function(){
						$(this).css("background-color", "#333333");
						});
					n++;
					console.log('Click count Handwäsche: ' + n)
					 
				}			
	});}); /* Ohne document ready gibt es ein fehler :/ */