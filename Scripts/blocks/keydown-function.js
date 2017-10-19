import closeEsc from './close-on-esc.js';
import keyListEvents from './key-listevents.js';
import closeOnEnter from './close-on-enter.js';
import fastSelect from './fast-select.js';
export default (keyCode, list, openListName, closeListName, radioItems, inputEl, labelItems, indicator) => {
	switch (keyCode) {
		case 40:
			keyListEvents(radioItems, inputEl, labelItems, `down`);
			break;
		case 38:
			keyListEvents(radioItems, inputEl, labelItems, `up`);
			break;
		case 27:
			closeEsc(list, openListName, closeListName, radioItems, inputEl, labelItems, `noopen`);
			break;
		case 13:
			closeOnEnter(list, openListName, closeListName, radioItems, inputEl, labelItems, `oopen`);
			break;
		default:
			break;
	}
}