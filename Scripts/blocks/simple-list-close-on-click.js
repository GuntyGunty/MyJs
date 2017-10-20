import openCloseList from './open-close-list.js';
import addListeners from './add-listeners.js';

export default (radioLabelText, list, openListName, closeListName, radioItems, inputEl, labelItems) => {
	Array.from(radioItems, (radioEl) => {
		const checkedRadio = (event) => {
			inputEl.value = radioLabelText;
			const radioLabelText = radioEl.nextElementSibling.innerText;
			openCloseList(list, openListName, closeListName, radioItems, inputEl, labelItems);
		}
	});
	//console.log(radioEl);
	addListeners(radioItems, list, openListName, closeListName, inputEl, labelItems, ``, ``, ``);
	//radioEl.addEventListener(`click`, checkedRadio);
}