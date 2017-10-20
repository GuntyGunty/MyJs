import btnListClick from './button-list-click.js';
import inputListClick from './input-list-click.js';
import clickOutBlock from './click-out-block.js';
import closeOnEsc from './close-on-esc.js';
import closeSimpleListClick from './simple-list-close-on-click.js';
import closeOnEnter from './close-on-enter.js';
import changeValue from './change-input-value.js';
import keyListEvents from './key-listevents.js';
import listSearch from './list-search.js';
import removeBold from './remove-highlighting.js';
import addAllListeners from './add-listeners.js';

export default () => {
	const dropLists = document.querySelectorAll(`.drop-list`);

	Array.from(dropLists, (dropList) => {
		const btn = dropList.querySelector(`.drop-list__button`);
		const inputEl = dropList.querySelector(`.drop-list__input`);
		const list = dropList.querySelector(`.drop-list__list`);
		const closeListName = `drop-list__list--close`;
		const openListName = `drop-list__list--open`;
		const radioItems = list.querySelectorAll(`.drop-list__radio`);
		const labelContainer = dropList.querySelector(`.drop-list__input-block`);
		const labelItems = list.querySelectorAll(`.drop-list__label`);

		btnListClick(btn, radioItems, dropList, list, openListName, closeListName, radioItems, labelItems, inputEl);

		inputListClick(list, openListName, closeListName, radioItems, inputEl, labelItems);

		clickOutBlock(labelContainer, dropList, list, openListName, closeListName, radioItems, inputEl, labelItems);

		listSearch(list, radioItems, inputEl, labelItems);

		closeSimpleListClick(list, openListName, closeListName, radioItems, inputEl, labelItems);
	});
}