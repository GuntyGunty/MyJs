import keyUp from './key-listevents.js';
import removeBold from './remove-highlighting.js';
import delEl from './delete-el.js';

export default (btn, radioItems, dropList, list, openListName, closeListName, inputEl, labelItems) => {
	inputEl.addEventListener(`keyup`, (event) => {
		if (event.keyCode === 40 || event.keyCode === 38) {
			console.log(`Снять подкрашивание при клавишах вверх/вниз`);
		} else {
			inputEl.style.color = (`red`);
			const str = inputEl.value;
			delEl(btn, radioItems, dropList, list, openListName, closeListName, inputEl, labelItems);
			Array.from(labelItems, (item) => {
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
					inputEl.style.display = (`none`);
					inputEl.removeAttribute(`style`);
				}
			});
			//removeBold(list, radioItems, inputEl, labelItems);
		}
	})
};