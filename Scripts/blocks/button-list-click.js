import valueCheck from './value-check.js';
import openCloseList from './open-close-list';

export default (btn, radioItems, dropList, list, openListName, closeListName, inputEl, labelItems, indicator) => {
	const btnFunc = () => {
		openCloseList(list, openListName, closeListName, radioItems, inputEl, labelItems, indicator);
	}

	btn.addEventListener(`click`, btnFunc);
}