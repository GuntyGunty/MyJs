import openCloseList from './open-close-list.js';
import valueCheck from './value-check.js';

export default (list, openListName, closeListName, radioItems, inputEl, labelItems, indicator) => {
	const inputFunc = (event) => {
		//valueCheck(radioItems, inputEl);
		openCloseList(list, openListName, closeListName, radioItems, inputEl, labelItems, "noclose");
	};

	inputEl.addEventListener(`click`, inputFunc);
};