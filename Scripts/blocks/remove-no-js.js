export default () => {
	const noJsBlocks = document.querySelectorAll(`.no-js`);
	Array.from(noJsBlocks, (list) => {
		list.classList.remove(`no-js`);
	});
}