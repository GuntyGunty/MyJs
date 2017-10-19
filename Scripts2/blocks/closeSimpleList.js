import { aaa } from '../blocks/utils.js';

const radioItems = document.querySelectorAll(`.drop-list__radio`);
const inputSelect = document.querySelector(`.drop-list__input`);
const listBlock = document.querySelector('.drop-list__list');
const itemsArray = document.querySelectorAll(`.drop-list__label`);

Array.from(radioItems, (radio) => {
	radio.addEventListener(`change`, (event) => {
		inputSelect.value = radio.nextElementSibling.innerText;
		listBlock.classList.add(`drop-list__list--close`);
		listBlock.classList.remove(`drop-list__list--open`);

		Array.from(itemsArray, (item) => {
			const itemText = item.textContent;
			const boldItems = document.querySelectorAll(`.boldItem`);

			if (boldItems) {
				Array.from(boldItems, (boldItem) => {
					item.innerText = itemText.replace(boldItem, boldItem.textContent), itemText[0];
				});
			}
		});
	});
});