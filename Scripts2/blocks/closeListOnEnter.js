const radioItems = document.querySelectorAll(`.drop-list__radio`);
const inputSelect = document.querySelector(`.drop-list__input`);
const listBlock = document.querySelector('.drop-list__list');
const itemsArray = document.querySelectorAll(`.drop-list__label`);

Array.from(itemsArray, (item) => {
	item.addEventListener(`keyup`, (event) => {
		const itemsArray = Array.from(document.querySelectorAll(`.drop-list__label`));
		const itemOnFocus = itemsArray.find((item) => {
			return item === document.activeElement;
		});

		if (event.keyCode == 13) {
			if (itemOnFocus) {
				document.getElementById(`${itemOnFocus.htmlFor}`).checked = true;
				inputSelect.value = itemOnFocus.textContent || itemOnFocus.innerText;
			}
			const itemText = item.textContent;
			const boldItems = listBlock.querySelectorAll(`.boldItem`);
			if (boldItems) {
				Array.from(boldItems, (boldItem) => {
					item.innerText = itemText.replace(boldItem, boldItem.textContent), itemText[0];
					boldItem.removeAttribute(`style`);
					listBlock.classList.remove(`drop-list__list--open`);
					listBlock.classList.add(`drop-list__list--close`);
				});
			}
			console.log(itemOnFocus);
			listBlock.style.display = (`none`);
		}
	})
});