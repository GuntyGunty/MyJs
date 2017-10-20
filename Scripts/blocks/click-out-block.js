import openCloseList from './open-close-list';
import addListeners from './add-listeners.js';

export default (labelContainer, dropList, list, openListName, closeListName, radioItems, inputEl, labelItems, indicator) => {
	const focusOutFunc = () => {
		console.log(`оно работает`);
		let eventTarget = event.target;
		if (eventTarget === labelContainer) {
			openCloseList(list, openListName, closeListName, radioItems, inputEl, labelItems);
		} else {
			while (eventTarget !== dropList) {
				if (eventTarget.parentNode) {
					eventTarget = eventTarget.parentNode;
				} else {
					openCloseList(list, openListName, closeListName, radioItems, inputEl, labelItems, `noopen`);
					return;
				}
			}
		}
	}
	addListeners(dropList, list, openListName, closeListName, inputEl, labelItems, indicator, ``, ``, focusOutFunc, ``);
	//document.addEventListener('click', focusOutFunc);
}