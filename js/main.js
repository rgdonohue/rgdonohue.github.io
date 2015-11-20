document.addEventListener("DOMContentLoaded", function() {
	
	// check for modern browser support

	var feature = {
	  addEventListener : !!window.addEventListener,
	  querySelectorAll : !!document.querySelectorAll,
	};
	if (feature.addEventListener && feature.querySelectorAll) {
  		init();
	} else {
		fallback();
	}
	function init() {


		var nav = $('.nav'),
			currentWidth = $(window).width() / parseFloat($("body").css("font-size")),
			navDistance = $('.nav').offset().top,
	    	$window = $(window);
		

		if(currentWidth <= 35) {
			nav.addClass('nav-close');
		}
		$(window).resize(function() {
			currentWidth = $(window).width() / parseFloat($("body").css("font-size"));

			if(currentWidth > 35 && nav.hasClass('nav-close')) {
				nav.removeClass('nav-close');
			}
			if ( currentWidth > 35 && nav.hasClass('nav-top')) {
			        var wrapper = $('#wrapper'),
					    rightEdge = ($(window).width() - (wrapper.offset().left + wrapper.outerWidth()));
			        nav.css({'right': rightEdge});
			} 
			if(currentWidth <= 35 && !nav.hasClass('nav-close')) {
				nav.addClass('nav-close');
			}
		});
		
		$('.nav-toggle').on('click', function(e) {
				toggleNav(e);
			});

		function toggleNav(e) {
			
			if(nav.hasClass('nav-close')) {
				nav.removeClass('nav-close');
				$(e.target).css('opacity','.3');
			} else {
				nav.addClass('nav-close');
				$(e.target).css('opacity','1');
			}
		}

		// $('.evals').slideUp();


		$window.scroll(function() {
			if(currentWidth > 35) {
			    if ( $window.scrollTop() >= navDistance ) {
			    	nav.addClass('nav-top');

			    	var $wrapper = $('#wrapper'),
					    rightEdge = ($(window).width() - ($wrapper.offset().left + $wrapper.outerWidth()));
			        
			        nav.css({'right': rightEdge});
			    }
			   	if ( $window.scrollTop() < navDistance ) {
			        nav.removeClass('nav-top');

			    }
			}

		});

		$("section").hide();

		if(document.location.hash) {
			updatePage(document.location.hash, null);
		} else {
			$('section:first-child').show().addClass('current-page');
		}
		
		$('.nav').on('click', function(e) {
			e.preventDefault();
			var target = $(e.target).attr('href'),
				currentPage = '#'+ $(".current-page").attr('id');
			if(target != currentPage)	document.location.hash = target;

			if(currentWidth <= 35) {
				nav.addClass('nav-close');
				$('.nav-toggle').css('opacity','1');
			}
		});

		window.onhashchange = function() {
			if(document.location.hash != '#') {
				updatePage(document.location.hash, '#'+ $(".current-page").attr('id'));
			}
		}

		function updatePage(target, currentPage) {
			
			if(!currentPage) {
				
				$(target).fadeIn().addClass('current-page');
				document.documentElement.scrollTop = 0;

			} else {
				
				if(target != currentPage){
					$(".current-page").fadeOut('fast', function() {
						$(currentPage).removeClass("current-page");
						$(target).fadeIn().addClass('current-page');
						document.documentElement.scrollTop = 0;
					});
				}
			}
		}

		// Mapping page

		var width = 800,
    		height = 540;
    	
    	var projection = d3.geo.albersUsa()
    		 .translate([width / 2, height / 2])
       		.scale(1000);
		
		var path = d3.geo.path()
    		.projection(projection);
    	

		var svg = d3.select("#map").append("svg")
			.attr("width", width)
			.attr("height", height);

		d3.json("data/us.json", function(error, us) {

			
			var states = topojson.feature(us, us.objects.us).features;		
			
			svg.append("g")
      			.attr("class", "states")
    			.selectAll("path")
      			.data(states)
    			.enter().append("path")
      			.attr("d", path)
      			.classed({'border':true, 'animate': true})
      			// .style("stroke-dasharray", function(d) { return this.getTotalLength(); })
      			// .style("stroke-dashoffset", function(d) { return this.getTotalLength(); });
      			.each(function(d,i) {
      				d3.select(this).style("stroke-dasharray", function(d) { return this.getTotalLength(); })
      				.style("stroke-dashoffset", function(d) { return this.getTotalLength(); });

      			})

		});
		console.log(document.styleSheets[1].rules[20]);

		// Courses code
		$('#courses').addClass('sub-menu clearfix');
		$('.course').hide();
		
		var target = 'mou';
		
		$('#courses').on('click', function(e) {
			e.preventDefault();

			if( target != $(e.target).attr('class') ) {
				$(target).fadeOut();

				var target = $(e.target).attr('href');

				$("#courses").fadeOut(400, function() {
					$(courses).removeClass('sub-menu').css({
						'width' : '20%',
						'display' : 'inline'
					}).fadeIn();
					$(target).fadeIn();
					console.log('new target ', target);
				});
			} else {
				console.log('howdy');
			}
		});

		
	} // end init()

}, false);