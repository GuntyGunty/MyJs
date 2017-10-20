export default (btn, radioItems, dropList, list, openListName, closeListName, inputEl, labelItems, indicator, btnFunc, inputFunc, focusOutFunc, checkedRadio, radioEl) => {
	btn.addEventListener(`click`, btnFunc);
	console.log(inputEl, inputFunc);
	inputEl.addEventListener(`click`, inputFunc);
	//console.log(focusOutFunc);
	//inputEl.addEventListener(`click`, focusOutFunc);
	/*radioEl.addEventListener(`click`, checkedRadio)*/;
}