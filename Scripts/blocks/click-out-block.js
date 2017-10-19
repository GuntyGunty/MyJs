import openCloseList from './open-close-list';

export default (labelContainer, dropList, list, openListName, closeListName, radioItems, inputEl, labelItems, indicator) => {
	const focusOutFunc = () => {
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
	document.addEventListener('click', focusOutFunc);
}