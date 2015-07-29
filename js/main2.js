$(document).ready(function () {

	$('#primary-nav li').click (function(e) {
		//prevent jumping around on page
		e.preventDefault();
		

	//handles slide down

		//if slide-down is not open
		if (!$('#slide-down').hasClass('open')) {
			//alert('if');

			$('#slide-down').addClass('open');
			$('#slide-down').css('display','block');
			var section = $(this).children('a').attr('href');
			$(section).css('display','block');
			console.log(section);
			$(section).siblings().css('display','none');

		$(this).addClass('active');
		$(this).siblings().removeClass('active');

		//else if slide-down is open and link has active class

		} else if ($('#slide-down').hasClass('open') && $(this).hasClass('active')) {
			//alert('else if');

			
			$(this).removeClass('active');
			$('#slide-down').removeClass('open');
			$('#slide-down').css('display','none');
			$('#slide-down').children().hide();

		//else (clicked on nonactive link while slide-down is open)
			
		} else {
			//alert('else');

			$(this).addClass('active');
			$(this).siblings().removeClass('active');

			$('#slide-down').css('display','block');
			var section = $(this).children('a').attr('href');
			$(section).css('display','block');
			console.log(section);
			$(section).siblings().css('display','none');



		}


		

		

		

	//handles primary-nav active
	//$(this).addClass('active');
	//$(this).siblings removeClass('active');

	//handles hide/show of drop sections
	//sections.show
	//sections.siblings .hide




	});
});