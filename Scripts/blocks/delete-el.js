export default (list, inputEl, labelItems) => {
	if (inputEl.value === ``) {
		const dropEl = list.cloneNode(true);
		const dropList = document.querySelector(`.drop-list`);
		const rep = dropList.replaceChild(dropEl, list);
	} else {
		Array.from(labelItems, (item) => {
			const itemText = item.innerHTML;
			let string = inputEl.value
			item.style.display = (`block`)
			const itemInput = item.parentNode.querySelector(`.drop-list__radio`);
			if (!itemText.match(new RegExp(string, `ig`)) && !itemInput.checked === true) {
				item.style.display = (`none`);
			}
		})
	}
}

//export default (list, inputEl, labelItems) => {
//	if (inputEl.value !== ``) {
//		Array.from(labelItems, (item) => {
//			const itemText = item.innerHTML;
//			let string = inputEl.value;
//			const itemInput = item.parentNode.querySelector(`.drop-list__radio`);
//			//if (itemInput) {
//			if (!itemText.match(new RegExp(string, `ig`)) && !itemInput.checked === true) {
//				item.style.display = (`none`);
//			} else if (itemInput.checked) {
//				const listItem = item.parentNode;
//				const dropList = listItem.parentNode;
//				const dropItem = itemInput.parentNode;
//				dropList.appendChild(dropItem);
//			}
//			//}
//		});
//	} else {
//		const dropEl = list.cloneNode(true);
//		list.removeChild;
//		dropEl.appendChild;
//		Array.from(labelItems, (item) => {
//			item.style.display = (`block`);
//		});
//	}
//}