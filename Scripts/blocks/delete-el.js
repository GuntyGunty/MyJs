//import buttonListClick from './button-list-click.js';
import addDefList from './add-default-listener.js';

export default (list, radioItems, inputEl, labelItems) => {
	const dropEl = list.cloneNode(true);
	if (inputEl.value !== ``) {
		Array.from(labelItems, (item) => {
			const itemText = item.innerHTML;
			let string = inputEl.value;
			const itemInput = item.parentNode.querySelector(`.drop-list__radio`);
			if (itemInput) {
				if (!itemText.match(new RegExp(string, `ig`)) && !itemInput.checked === true) {
					item.style.display = (`none`);
				} else if (itemInput.checked) {
					item.style.display = (`block`);
					const listItem = item.parentNode;
					const dropList = listItem.parentNode;
					const dropItem = itemInput.parentNode;
					dropList.appendChild(dropItem);
				}
			}
		});
	} else {
		const dropList = document.querySelector(`.drop-list`);
		list.parentNode.removeChild(list);
		console.log(46464646)
		dropList.parentNode.appendChild(dropEl);
		//Array.from(labelItems, (item) => {
		//	item.style.display = (`block`);
		//});
	}
}
//console.log(445454);
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