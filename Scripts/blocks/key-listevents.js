import openCloseList from './open-close-list';
import removeBold from './remove-highlighting.js';
import listSearch from './list-search.js';

export default (list, radioItems, inputEl, labelItems, indicator, boldItems) => {
	const checkedRadio = Array.from(radioItems).find((radio) => {
		return radio.checked === true;
	});

	if (indicator === `down`) {
		if (!checkedRadio || checkedRadio === radioItems[radioItems.length - 1]) {
			radioItems[0].checked = true;
			inputEl.value = radioItems[0].nextElementSibling.innerText;
			removeBold(list, radioItems, inputEl, labelItems);
		} else {
			Array.from(radioItems, (item, index) => {
				if (item === checkedRadio) {
					radioItems[index + 1].checked = true;
					inputEl.value = radioItems[index + 1].nextElementSibling.innerText;
				}
			});
		}
	} else if (indicator === `up`) {
		if (!checkedRadio || checkedRadio === radioItems[0]) {
			radioItems[radioItems.length - 1].checked = true;
			inputEl.value = radioItems[radioItems.length - 1].nextElementSibling.innerText;
			removeBold(list, radioItems, inputEl, labelItems);
		} else {
			Array.from(radioItems, (item, index) => {
				if (item === checkedRadio) {
					radioItems[index - 1].checked = true;
					inputEl.value = radioItems[index - 1].nextElementSibling.innerText;
				}
			});
		}
	}
}