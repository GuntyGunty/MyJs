const button = document.querySelector('.list-btn');
const inputItem = document.querySelector('.data-input');
const container = document.querySelector('.container');
const itemsArray = document.getElementsByTagName(`li`);
const listBlock = document.querySelector('.list');
const containerXY = container.getBoundingClientRect();

button.addEventListener(`click`, event => {
	if (listBlock.classList.contains(`list--none`)) {
		inputItem.focus();
		listBlock.classList.remove(`list--none`);
	} else {
		button.focus();
		listBlock.classList.add(`list--none`);
	}
});

inputItem.addEventListener(`focusin`, (event) => {
	const a = !containerXY;

	if (inputItem.focus()) {
		a.addEventListener(`click`, event => {
			listBlock.classList.add(`list--none`);
		})
	}
	console.log(a);
});

//inputItem.addEventListener(`focusout`, (event) => {
//	listBlock.classList.add(`list--none`);

//});

// Поиск по списку
const caseToUp = (stringItem, firsLetter) => {
	return stringItem.replace(firsLetter[0], firsLetter[0].toUpperCase());
}

inputItem.addEventListener('keyup', event => {
	const str = inputItem.value.toLowerCase();
	inputItem.style.color = `red`;
	Array.from(itemsArray, (item) => {
		const itemText = item.textContent.toLowerCase();
		const boldItems = listBlock.querySelectorAll(`.boldItem`);
		item.style.display = `none`;
		if (boldItems) {
			Array.from(boldItems, (boldItem) => {
				item.innerText = caseToUp(itemText.replace(boldItem, boldItem.textContent));
			});
		}
		if (itemText.match(new RegExp(str, `ig`))) {
			item.innerHTML = caseToUp(itemText.replace(new RegExp(str, `ig`), `<b class="boldItem" style="color: #00a4e4;">${str}</b>`), itemText[0]);
			const keyFunc = () => {
				itemText.addEventListener(`click`, event => {
					inputItem.innerText = caseToUp(itemText.replace(new RegExp(str, `ig`), `<b class="boldItem" style="color: #00a4e4;">${str}</b>`), itemText[0]);
				});
			}
			item.removeAttribute(`style`);
			inputItem.removeAttribute(`style`);
		}
	});
});