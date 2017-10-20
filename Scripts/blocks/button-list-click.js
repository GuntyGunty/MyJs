import valueCheck from './value-check.js';
import openCloseList from './open-close-list.js';
import addListeners from './add-listeners.js';

export default (btn, radioItems, dropList, list, openListName, closeListName, inputEl, labelItems, indicator) => {
	const btnFunc = () => {
		openCloseList(list, openListName, closeListName, radioItems, inputEl, labelItems, indicator);
	}
	addListeners(btn, radioItems, dropList, list, openListName, closeListName, inputEl, labelItems, btnFunc);
	//btn.addEventListener(`click`, btnFunc);
}