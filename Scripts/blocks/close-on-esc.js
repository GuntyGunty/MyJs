import openCloseList from './open-close-list';
import removeBold from './remove-highlighting.js';

export default (keyCode, list, openListName, closeListName, radioItems, inputEl, labelItems, indicator) => {
	if (event.keyCode === 27) {
		openCloseList(keyCode, list, openListName, closeListName, radioItems, inputEl, labelItems, "noopen");
	}
}