export default () => {
	const inputItem = document.querySelector('.drop-list__input ');
	const listBlock = document.querySelector('.drop-list__list');
	const container = document.querySelector('.drop-list');
	const itemsArray = document.querySelectorAll(`.drop-list__label`);

	inputItem.addEventListener(`focusin`, (event) => {
		if (listBlock.classList.contains(`drop-list__list--close`)) {
			listBlock.removeAttribute(`style`);
			listBlock.classList.remove(`drop-list__list--close`);
			listBlock.classList.add(`drop-list__list--open`);
			Array.from(itemsArray, (item) => {
				item.removeAttribute(`style`);
			})
		}
		else {
			listBlock.classList.add(`drop-list__list--open`);
			Array.from(itemsArray, (item) => {
				item.removeAttribute(`style`);
			})
		}
	});
}