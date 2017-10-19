const inputItem = document.querySelector('.drop-list__input ');
const listBlock = document.querySelector('.drop-list__list');
const itemsArray = Array.from(document.querySelectorAll(`.drop-list__label`));

document.addEventListener(`keydown`, (event) => {
	//if (event.keyCode === 40) {
	//	for (let i = 0; i < itemsArray.length; i++) {
	//		if (itemsArray[i] === document.activeElement) {
	//			if (i !== itemsArray.length - 1) {
	//				itemsArray[i + 1].focus();
	//				return;
	//			} else {
	//				itemsArray[0].focus();
	//				console.log(11313);
	//				return;
	//			}
	//		}
	//	})
	const itemOnFocus = itemsArray.find((item) => {
		return item === document.activeElement;
	});
	if (event.keyCode === 40) {
		if (!itemOnFocus || itemsArray[itemsArray.length - 1] === itemOnFocus) {
			itemsArray[0].focus();
		} else {
			itemsArray.forEach((item, index, array) => {
				if (item === itemOnFocus) {
					array[index + 1].focus();
				}
			});
		}
	}
	if (event.keyCode === 38) {
		if (!itemOnFocus || itemsArray[0] === itemOnFocus) {
			itemsArray[itemsArray.length - 1].focus();
		} else {
			itemsArray.forEach((item, index, array) => {
				if (item === itemOnFocus) {
					array[index - 1].focus();
				}
			})
		}
	}
});