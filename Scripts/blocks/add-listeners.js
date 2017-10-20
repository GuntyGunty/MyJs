export default (btn, radioItems, dropList, list, openListName, closeListName, inputEl, labelItems, btnFunc, inputFunc, focusOutFunc, radioEl, checkedRadio) => {
	console.log(radioEl);
	if (btnFunc) {
		btn.addEventListener(`click`, btnFunc);
	}
	if (inputEl) {
		inputEl.addEventListener(`click`, inputFunc);
	}
	if (focusOutFunc) {
		document.addEventListener(`click`, focusOutFunc);
	}
	if (checkedRadio) {
		radioEl.addEventListener(`click`, checkedRadio);
	}
}