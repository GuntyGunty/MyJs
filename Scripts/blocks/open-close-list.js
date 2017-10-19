import keyDownFunc from './keydown-function.js';
import closeOnEnter from './close-on-enter.js';
import removeBold from './remove-highlighting.js';

let MyArray = {};

const keyDown = (event) => {
	console.log(`i'am a live!`);
	if (!MyArray.list.classList.contains(MyArray.closeListName)) {
		keyDownFunc(event.keyCode, MyArray.list, MyArray.openListName, MyArray.closeListName, MyArray.radioItems, MyArray.inputEl, MyArray.labelItems);
	}
};

export default (list, openListName, closeListName, radioItems, inputEl, labelItems, indicator, boldItems) => {
	MyArray = {
		list: list,
		openListName: openListName,
		closeListName: closeListName,
		radioItems: radioItems,
		inputEl: inputEl,
		labelItems: labelItems,
	}

	if (list.classList.contains(openListName) && indicator !== `noclose`) {
		list.classList.remove(openListName);
		list.classList.add(closeListName);
		removeBold(inputEl, labelItems);
		document.removeEventListener(`keydown`, keyDown);
	} else if (indicator !== `noopen`) {
		list.classList.add(openListName);
		list.classList.remove(closeListName);
		document.addEventListener(`keydown`, keyDown);
	}
}