const itemsArray = document.querySelectorAll(`.drop-list__label`);
const listBlock = document.querySelector(`.drop-list__list`);
const container = document.querySelector(`.drop-list`);
const inputItem = document.querySelector(`.drop-list__input`);
const boldItems = listBlock.querySelectorAll(`.boldItem`);

inputItem.addEventListener(`keyup`, (event) => {
	const str = inputItem.value;
	inputItem.style.color = (`red`);
	Array.from(itemsArray, (item) => {
		const itemText = item.textContent;

		if (itemText.match(new RegExp(str, `ig`))) {
			const replacedString = itemText.replace(new RegExp(str, `ig`), `<span class="boldItem" style="color: #467bc1; font-weight: 800;">${str.toLowerCase()}</span>`);
			if (replacedString[0] === `<`) {
				const tagNum = replacedString.indexOf(`>`) + 1;
				const repStr = replacedString.replace(replacedString[tagNum], replacedString[tagNum].toUpperCase());
				item.innerHTML = repStr;
			} else {
				item.innerHTML = replacedString;
			}
			inputItem.style.display = (`none`);
			inputItem.removeAttribute(`style`);
		}
	});
});