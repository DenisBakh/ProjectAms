//import scss
import '~/pages/index/index.scss'
import '~/project/blocks/buttons/button.scss'

//import js
import '~/project/blocks/header/header.js'



//===================
/*
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			//console.log($(this).find('img').attr('src'))
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();
*/
window.addEventListener('resize', reportWindowSize); //запускаем скрипт при изменении размеров страницы
function reportWindowSize() {
	changeBg();
}

changeBg(); //запускаем скрипт при загрузке страницы

function changeBg() {
	$.each($('.ibg'), function (index, val) {
		const ibg = $(this);
		const ibgItem = $(this).find('.ibg__item');

		$.each(ibgItem, function (index, val) {
			const img = $(this).find('img')

			if (img.length > 0) {
				const attr = ibgItem[index].getAttribute('data-bg');
				const srcImg = img.attr('src');
				const currentWidth = window.innerWidth

				if (currentWidth <= +attr) {
					ibg.css('background-image', 'url("' + srcImg + '")');
					return false;
				}
			}
		})
	});
}





//=====================SLIDER===========================================================//
import '~/project/common/libs/slick.min.js'
import { func } from 'prop-types';



$(window).on('load', function () {
	$('.slider').slick({
		//autoplay: true,
		//infinite:false,
		dots: true,
		arrows: false,
		//accessibility:false,
		//slidesToShow:1,
		autoplaySpeed: 3000,
		speed: 1000
	});
});
