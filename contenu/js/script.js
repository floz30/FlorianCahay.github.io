$(function(){

	// Smooth scroll
	$('a[href*="#"]').not('[href="#"]').click(function(event) {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	     	var target = $(this.hash);
	     	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      	if (target.length) {
	        	event.preventDefault();
	        	$('html, body').animate({ scrollTop: target.offset().top }, 1000, function() {
		          	var $target = $(target);
		          	//$target.focus();
		          	if ($target.is(":focus")) {
		            	return false;
		          	} 
		          	else {
		            	$target.attr('tabindex','-1');
		            	//$target.focus();
	          		};
	        	});
	      	}
	    }
	})

	// Animation slide
	$(window).scroll(function() {
	    $(".slideanim").each(function(){
	      	var pos = $(this).offset().top;
	      	var winTop = $(window).scrollTop();
	        if (pos < winTop + 600) {
	          	$(this).addClass("slide");
	        }
	    });
	  });

	// Top link
	$('.top_link').css({ 
		'position':'fixed', 
		'right':'2%', 
		'bottom':'0', 
		'display':'none', 
		'padding':'5px 15px', 
		'background-color':'whitesmoke',  
		'font-size':'x-large', 
		'color':'black', 
		'opacity':'0.9', 
		'z-index':'20'}); 
	$(window).scroll(function(){
		posScroll = $(document).scrollTop();
		if(posScroll >=400) 
			$('.top_link').fadeIn(600);
		else
			$('.top_link').fadeOut(600);
	});

});

// Ecriture automatique
var pos_1 = 0;
var pos_2 = 0;
var txt = "Florian Cahay";
var txt_2 = "Etudiant en informatique";
function typeWriter() {
	if (pos_1 < txt.length) {
		document.getElementById("main-title").innerHTML += txt.charAt(pos_1);
		pos_1++;
		var speed = randomInteger(100, 150);
		setTimeout(typeWriter, speed);
	}
	else {
		typeWriter_2();
	}
}
function typeWriter_2() {
	if (pos_2 < txt_2.length) {
		document.getElementById("caption").innerHTML += txt_2.charAt(pos_2);
		pos_2++;
		var speed = randomInteger(50, 100);
		setTimeout(typeWriter_2, speed);
	}
}
function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Isotope
var $projects = $('.projects').isotope({
	itemSelector: '.project',
	getSortData: {
		tech: '.project-tech',
		name: '.project-name',
		date: '.project-date parseInt'
	},
	sortAscending: {
		tech: true,
		name: true,
		date: false
	},
	masonry: {
		fitWidth: true,
		gutter: 20
	},
	sortBy: "date"
});

// bind sort button click
$('#projects-sort').on( 'click', 'button', function() {
	var sortValue = $(this).attr('data-sort-value');
	$projects.isotope({ sortBy: sortValue });
  });

$('#projects-filters').on('click', 'button', function() {
	var filterValue = $( this ).attr('data-filter');
	$projects.isotope({ filter: filterValue });
})


// change is-checked class on buttons
$('.btn-group').each( function( i, buttonGroup ) {
	var $buttonGroup = $( buttonGroup );
	$buttonGroup.on( 'click', 'button', function() {
	  $buttonGroup.find('.checked').removeClass('checked');
	  $( this ).addClass('checked');
	});
  });