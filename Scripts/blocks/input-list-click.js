import openCloseList from './open-close-list.js';
import valueCheck from './value-check.js';
import addListeners from './add-listeners.js';

export default (list, openListName, closeListName, radioItems, inputEl, labelItems, indicator) => {
	const inputFunc = () => {
		//valueCheck(radioItems, inputEl);
		openCloseList(list, openListName, closeListName, radioItems, inputEl, labelItems, "noclose");
	};
	addListeners(``, ``, ``, list, openListName, closeListName, inputEl, labelItems, indicator, ``, inputFunc, ``, ``, ``);
	//inputEl.addEventListener(`click`, inputFunc);
};