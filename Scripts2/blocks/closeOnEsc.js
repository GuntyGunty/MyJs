const listBlock = document.querySelector('.drop-list__list');
const inputItem = document.querySelector('.drop-list__input');

document.addEventListener(`keydown`, event => {
	if (listBlock.classList.contains(`drop-list__list--open`)) {
		escFunction();
	} else {
		document.addEventListener(`keydown`, escFunction);
	}
});

const escFunction = (event) => {
	document.addEventListener(`keydown`, event => {
		if (event.keyCode == 27) {
			listBlock.classList.add(`drop-list__list--close`);
			listBlock.classList.remove(`drop-list__list--open`);
			document.removeEventListener(`keydown`, escFunction);
		}
	})
}