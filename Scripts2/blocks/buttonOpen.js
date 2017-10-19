import macarena from './openFocusOn.js';

macarena();

const button = document.querySelector('.drop-list__button');
const inputItem = document.querySelector('.drop-list__input');
const listBlock = document.querySelector('.drop-list__list');
const itemsArray = document.querySelectorAll(`.drop-list__label`);
const radioItems = document.querySelectorAll(`.drop-list__radio`);

listBlock.classList.remove(`no-js`);

const valueCheck = () => {
	if (inputItem.value === ``) {
		Array.from(radioItems, (radio) => {
			radio.checked = false;
		});
	}
};

button.addEventListener(`click`, event => {
	if (listBlock.classList.contains(`drop-list__list--open`)) {
		listBlock.classList.remove(`drop-list__list--open`)
		listBlock.classList.add(`drop-list__list--close`);
		valueCheck();
	} else {
		button.focus();
		listBlock.classList.remove(`drop-list__list--close`);
		listBlock.removeAttribute(`style`);
		listBlock.classList.add(`drop-list__list--open`);
		Array.from(itemsArray, (item) => {
			const itemText = item.textContent;
			const boldItems = listBlock.querySelectorAll(`.boldItem`);
			Array.from(boldItems, (bolditem) => {
				item.innerText = itemText.replace(bolditem, bolditem.textContent);
			})
		})
	}
})