export default (inputEl, labelItems) => {
	Array.from(labelItems, (item) => {
		const boldItems = document.querySelectorAll(`.boldItem`);
		const itemText = item.textContent;
		Array.from(boldItems, (bolditem) => {
			item.innerText = itemText.replace(bolditem, bolditem.textContent);
			bolditem.removeAttribute(`style`);
		})
	})
}