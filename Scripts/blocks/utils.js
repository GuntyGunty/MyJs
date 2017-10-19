export const caseToUp = (stringItem, firsLetter) => {
	return stringItem.replace(firsLetter[0], firsLetter[0].toUpperCase());
}

export const boldStyleRemover = (element, boldItem) => {
	boldItem = document.querySelectorAll('.boldItem');
}

export const aaa = () => {
	alert(`Меня экспортировали!`)
};