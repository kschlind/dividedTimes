$(document).ready(function () {

	$('#primary-nav li').click (function(e) {
		//prevent jumping around on page
		e.preventDefault();

		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		

	//handles slide down

		//if slide-down is not open
		if (!$('#slide-down').hasClass('open')) {
			$('#slide-down').addClass('open');
			$('#slide-down').css('display','block');
			var section = $(this).children('a').attr('href');
			$(section).css('display','block');
			console.log(section);
			$(section).siblings().css('display','none');


		//else if slide-down is open and link has active class

		} else if ($('#slide-down').hasClass('open') && $(this).hasClass('active')) {

			$('#slide-down').css('display','block');
			var section = $(this).children('a').attr('href');
			$(section).css('display','block');
			console.log(section);
			$(section).siblings().css('display','none');

			

		//else (clicked on nonactive link while slide-down is open)
			
		} else {

			$(this).removeClass('active');
			$('#slide-down').removeClass('open');
			$('#slide-down').css('display','none');
			$('#slide-down').children().css('display','none');


		}


		

		

		

	//handles primary-nav active
	//$(this).addClass('active');
	//$(this).siblings removeClass('active');

	//handles hide/show of drop sections
	//sections.show
	//sections.siblings .hide




	});
});