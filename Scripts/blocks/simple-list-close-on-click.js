import openCloseList from './open-close-list.js';
import addListeners from './add-listeners.js';

export default (list, openListName, closeListName, radioItems, inputEl, labelItems) => {
	Array.from(radioItems, (radioEl) => {
		const checkedRadio = (event) => {
			inputEl.value = radioLabelText;
			const radioLabelText = radioEl.nextElementSibling.innerText;
			openCloseList(list, openListName, closeListName, radioItems, inputEl, labelItems);
		}

		addListeners(``, radioItems, ``, list, openListName, closeListName, inputEl, labelItems, ``, ``, ``, radioEl, checkedRadio);
	});

	//radioEl.addEventListener(`click`, checkedRadio);
}