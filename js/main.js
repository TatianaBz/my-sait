const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const header = document.querySelector('.header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const nav = document.querySelectorAll('.menu__link');
const li = document.querySelector('.li');
const body = document.body;

/**/
const logotipWhite = document.querySelector('.logotip-white');
const logotipBlack = document.querySelector('.logotip-black');
const headerTop = document.querySelector('.header__top');

burger.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);

let keys = {
	ESC: 27,
};


let previousActiveElement;

const mQuery = window.matchMedia('(max-width: 1439px)');

function changeFontStyleMobile(e) {
	// Проверяем соответствие медиа-запроса
	if (e.matches) {
		menu.inert = false;
		header.inert = false;

	}
}
mQuery.addListener(changeFontStyleMobile);

function showMenu() {
	menu.classList.add('active');
	menu.classList.remove('hidden');
	logotipWhite.classList.add('hidden');
	logotipBlack.classList.remove('hidden');
	headerTop.classList.remove('header-color');
	burger.classList.add('hidden');
	close.classList.remove('hidden');


	previousActiveElement = document.activeElement;

	/*проверка необходимости скрывать меню на полноэкранном сайте */
	/* */
	window.addEventListener('scroll', () => {
		if (window.scrollY < 1) {
			logotipWhite.classList.add('hidden');
			logotipBlack.classList.remove('hidden');
			headerTop.classList.remove('header-color');
			for (let a of nav) {
				a.classList.add('menu__link--scroll');
			}
			li.classList.add('menu__li--scroll');
		}

	});

	menu.inert = false;
	header.inert = false;
	main.inert = true;
	footer.inert = true;

	setTimeout(() => {
		close.focus();
	}, 100);

	document.addEventListener('keydown', (e) => {
		console.log(e.keyCode);

		if (e.keyCode == keys.ESC) {
			close.focus();
			hideMenu();
		}
	});
}

function hideMenu() {
	menu.classList.remove('active');
	menu.classList.add('hidden');
	logotipWhite.classList.remove('hidden');
	logotipBlack.classList.add('hidden');
	headerTop.classList.add('header-color');
	burger.classList.remove('hidden');
	close.classList.add('hidden');

	/**/
	document.documentElement.scrollIntoView(true);

	menu.inert = true;
	main.inert = false;
	footer.inert = false;

	setTimeout(() => {
		previousActiveElement.focus();
	}, 100);


}

/**/
window.addEventListener('scroll', () => {
	if (window.scrollY >= 1) {
		logotipWhite.classList.add('hidden');
		logotipBlack.classList.remove('hidden');
		headerTop.classList.remove('header-color');
		for (let a of nav) {
			a.classList.add('menu__link--scroll');
		}
		li.classList.add('menu__li--scroll');
	} else {
		logotipWhite.classList.remove('hidden');
		logotipBlack.classList.add('hidden');
		headerTop.classList.add('header-color');
		for (let a of nav) {
			a.classList.remove('menu__link--scroll');
		}
		li.classList.remove('menu__li--scroll');
	}
});
/*раскрывающиеся фильтры в секции подбора попутчика*/

const tabs = document.querySelectorAll('.selection h3');

for (let tab of tabs) {
	tab.addEventListener('click', function () {
		if (this.classList.contains('opened')) {
			this.classList.remove('opened');
		} else
			this.classList.add('opened');
	});
}

/*тултипы в секции подбора попутчика*/
const buss = document.querySelectorAll('.check__input');
for (let bus of buss) {
	bus.addEventListener('click', function () {
		if (this.classList.contains('activ')) {
			this.classList.remove('activ');
		} else {
			for (let i = 0; i < buss.length; i++) {
				buss[i].classList.remove('activ');
			}
			this.classList.add('activ');
		}
	});
	bus.addEventListener('blur', function () {
		this.classList.remove('activ');
	});
}

