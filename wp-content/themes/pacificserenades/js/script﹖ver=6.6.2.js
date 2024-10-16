/**
 * Pacific Serenades functions and definitions
 *
 */

//(function($) { // loaded in footer

jQuery(document).ready(function($) { //loaded in header




	/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
		designiate active filter panel
	:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
	$body = $('body');

	// <body> acquires these classes when user selects a filter
	// and taxonomy template is loaded
	if ($body.hasClass('tax-instrumentation')) {
		$('.filters #instrument').addClass('active');
	} else if ($body.hasClass('tax-ensemble')) {
		$('.filters #ensemble').addClass('active');
	} else if ($body.hasClass('tax-store')) {
		$('.filters #category').addClass('active');
	} else {
		$('.filters #instrument').addClass('active');
	}
	
	// change filter panel on click
	$('.tab').on('click', function() {
		$selected = $(this).attr('id');
		
		if ( $(this).hasClass('active') == false ) {
			$(this).parent().children().removeClass('active');
			$(this).addClass('active');
			
			$('.panels div').removeClass('active');
			$('.panels #' + $selected).addClass('active');
		}
	});

	
	
	/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
		divide Music filters into columns
	:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */	
	function filterColumns(numberColumns) {
		container = $('.panel'),
		listItem = 'li',
		listClass = 'column';
		container.each(function() {
			var items_per_col = new Array(),
			items = $(this).find(listItem),
			min_items_per_col = Math.floor(items.length / numberColumns),
			difference = items.length - (min_items_per_col * numberColumns);
			for (var i = 0; i < numberColumns; i++) {
				if (i < difference) {
					items_per_col[i] = min_items_per_col + 1;
				} else {
					items_per_col[i] = min_items_per_col;
				}
			}
			for (var i = 0; i < numberColumns; i++) {
				$(this).append($('<ul ></ul>').addClass(listClass));
				for (var j = 0; j < items_per_col[i]; j++) {
					var pointer = 0;
					for (var k = 0; k < i; k++) {
					    pointer += items_per_col[k];
					}
					$(this).find('.' + listClass).last().append(items[j + pointer]);
				}
			}
		});
	}

	if (window.innerWidth > 819) {
		filterColumns(5);	
	} else {
		filterColumns(3);
	}

	$(window).on('resize', function() {
		if (window.innerWidth > 819) {
			filterColumns(5);	
		} else {
			filterColumns(3);
		}
	});




	/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
		mobile nav
	:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */	
	$menu = $('.mobile');
	$page = $('.wrapper');
	
	$('.button-menu').on('click', function() {
		$menu.show();
		$page.addClass('fixed');
	});
	$('.close').on('click', function() {
		$menu.hide();
		$page.removeClass('fixed');
	});

	$(window).on('resize', function() {
		if (window.innerWidth > 819) {
			$menu.hide();
			$page.removeClass('fixed');
		}
	});





});