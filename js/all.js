$(document).ready(function() {
	$('.header-burger').click(function(event) {
		$('.header-burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	// Закрытие меню при клике на пункт меню
	$('.menu__link').click(function(event){
		$('.header-burger,.menu').removeClass('active');
		$('body').removeClass('lock');
	});
});