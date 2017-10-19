import openCloseList from './open-close-list.js';

export default (radioLabelText, radioEl, list, openListName, closeListName, radioItems, inputEl, labelItems) => {
	const checkedRadio = (event) => {
		inputEl.value = radioLabelText;
		openCloseList(list, openListName, closeListName, radioItems, inputEl, labelItems);
	}
	radioEl.addEventListener(`click`, checkedRadio);
}