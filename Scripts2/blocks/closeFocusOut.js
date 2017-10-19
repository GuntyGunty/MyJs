const inputItem = document.querySelector('.drop-list__input ');
const listBlock = document.querySelector('.drop-list__list');
const container = document.querySelector('.drop-list');
const itemsArray = document.querySelectorAll(`.drop-list__label`);
const labelContainer = document.querySelector(`.drop-list__input-block`);

const closeList = () => {
	listBlock.classList.add(`drop-list__list--close`);
	listBlock.classList.remove(`drop-list__list--open`);
}

const clickBlock = (event) => {
	let eventTarget = event.target;
	if (eventTarget === labelContainer) {
		closeList();
	} else {
		while (eventTarget !== container) {
			if (eventTarget.parentNode) {
				eventTarget = eventTarget.parentNode;
			} else {
				closeList();
				return;
			}
		}
	}
};

document.addEventListener('click', clickBlock);