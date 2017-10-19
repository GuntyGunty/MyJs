import keyDownFunc from './keydown-function.js';
import openCloseList from './open-close-list.js';

export default (keyCode, list, openListName, closeListName, radioItems, inputEl, indicator) => {
	if (event.keyCode == 13) {
		Array.from(radioItems, (radioEl) => {
			const radioLabelText = radioEl.nextElementSibling.innerText;
			return inputEl.value = radioLabelText;
		})
		openCloseList(keyCode, list, openListName, closeListName, ``, inputEl, `noopen`);
	}
}