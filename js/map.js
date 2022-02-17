
/*Яндекс карта*/
let center = [59.93855969571643, 30.32401872222894];


function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 17
	});

	let placemark = new ymaps.Placemark(center, {}, {

		/*https://yandex.ru/map-constructor/location-tool/?from=club*/

		iconLayout: 'default#image',
		iconImageHref: '../img/icon_map.png',
		iconImageSize: [41, 41],
		iconImageOffset: [-19, -44]
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']);

	map.geoObjects.add(placemark);
}

ymaps.ready(init);