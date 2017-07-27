// preloader
$(window).on('load', function() { 
	$('.loader-inner').fadeOut(); 
	$('.loader').delay(400).fadeOut('slow'); 
});


$(function() {

// autoresize textarea
$('#message-field').autoResize({
	extraSpace : 11
});


//Tabs in login form
$('.login-form .tab-item').not(':first').hide();
$('.login-form .tab').on('click', function() {
	$('.login-form .tab').removeClass('active').eq($(this).index()).addClass('active');
	$('.login-form .tab-item').hide().eq($(this).index()).fadeIn();
}).eq(0).addClass('active');


// open-close sidebar
$('.js-toggle-btn').on('click', function() {
	var wWidth = $(window).width();
	if (wWidth <= '480') {
		$('.js-user-list').removeClass('show');
		$(this).removeClass('on');
	} else if (wWidth > '480' && wWidth <= '768') {
		$(this).toggleClass('on');
		$('.js-user-list').toggleClass('show');
	}
	return false;
});

$('.js-toggle-btn--fixed').on('click', function() {
	$('.js-user-list').toggleClass('show');
	$('.js-toggle-btn').toggleClass('on');
	return false;
});


// open-close searchform
$('.js-search-btn-post').on('click', function(){

	var searchField = $(this).prev('.js-search-field-post');

	searchField.on('change', function(){
		if(searchField.value !== "") {
			$('.js-post-form').submit();
		}
	});

	if (searchField.hasClass('on')) {
		searchField.removeClass('on').fadeOut().blur();
	} else {
		searchField.addClass('on').fadeIn().focus();
	}

});


// open-close dropdown menu
$('.js-dropdown-toggle').on('click', function() {
	$('.js-dropdown-menu').slideToggle(200);
	return false;
});


// Close drop down menu and searchform by clicking outside
$(document).on('click', function(){
	$('.js-search-field-post').fadeOut().removeClass('on');
	$('.js-dropdown-menu').slideUp(200);
});

$(".js-search-btn-post").on('click', function(e){
	e.stopPropagation();
});

$('.js-search-field-post').on('click', function(e){
	e.stopPropagation();
});


//set check when click on message-item
$('.message').on('click', function() {
	var checkbox = $(this).find('input[type="checkbox"]');
		if(checkbox.is(':checked')) {
			checkbox.prop('checked', false);
			$(this).removeClass('checked');
			$('.footer-buttons').removeClass('show');
		} else {
			checkbox.prop('checked', true);
			$(this).addClass('checked');
			$('.footer-buttons').addClass('show');
		}
});


//open-close footer menu
$('.footer-button-close').on('click', function() {
	$('.footer-buttons').removeClass('show');
});


//delete post when click to delete button
$('.footer-button-delete').on('click', function() {

	$('.message').each(function(){
		if( $(this).hasClass('checked') ) {
			$(this).remove();
		}
	});

	$('.footer-buttons').removeClass('show');
});


});
