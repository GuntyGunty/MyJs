//import addDefaultListener from './blocks/add-default-listener.js';
//import noJs from './blocks/remove-no-js.js';

////addDefaultListener();
//noJs();

//const block = document.querySelector(`.block`).innerHTML;

//console.log(block);
const selects = document.querySelectorAll(".drop-list__list");
const options = document.querySelectorAll(".drop-list__item");
const itemObject = {};
const myObject = {};
myObject.selects = [];

Array.from(selects, (select, index) => {
	myObject.selects.push({});
	myObject.selects[`${index}`].id = select.id;
	myObject.selects[`${index}`].title = select.previousElementSibling.textContent || select.previousElementSibling.innerText;
	myObject.selects[`${index}`].selectType = select.selectType;
	myObject.selects[`${index}`].formID = select.form.id;
	myObject.selects[`${index}`].name = select.name;
	myObject.selects[`${index}`].options = [];
	Array.from(select.options, (option, i) => {
		myObject.selects[`${index}`].options.push({});
		myObject.selects[`${index}`].options[`${i}`].value = option.value;
		myObject.selects[`${index}`].options[`${i}`].text = option.textContent || option.innerText;
		myObject.selects[`${index}`].options[`${i}`].selected = option.selected;
	});

});
setTimeout(() => {
	console.log(myObject);
}, 500);


const renderListItems = () => {

	//const selectOptions = myObject.selects[0];
	//console.log(selectOptions);
	//	selectOptions.map((option) => {
	//		console.log(option);
			return (
				`<ul class="drop-list__list no-js" id="list__id__${myObject.selects.id}" >
				<li class="drop-list__item">
					<input class="drop-list__radio" id="radio_id_${myObject.selects.id}_1" type="${myObject.selects.selectType}" name="drop_list_${myObject.selects.id}" />
					<label class="drop-list__label drop-list__label--list" for="radio_id__1">${myObject.selects.options.text}</label>
				</li>
			</ul>`
			);
	/*	})*/
}


document.querySelector(`.block`).innerHTML = renderListItems();

//block = renderListItems();

//${myObject.selects.options.value }
//${myObject.selects.options.text }


//const myObject = {
//	selects: [
//		{
//			title: `Простой список`,
//			selectId: `selectID`,
//			selectType: `selectType`,
//			selectName: `selectName`,
//			placeHolder: `Пожалуйста, введите текст`,
//			formID: `formID`,
//			type: `text`,
//			name: `name`,
//			options: [
//				{
//					value: `value`,
//					text: `text`,
//					tabindex: `0`,
//					selected: false
//				}
//			]
//		}
//	]
//};

//const typeitemsFunc = () => {
//	if (myObject.selects[0].type === `multiple`) {
//		return `checkbox`;
//	} else {
//		return `radio`;
//	}
//};

//const selectFunc = () => {
//	if (myObject.selects[0].options.checkes === true) {
//		return `false`;
//	} else {
//		return `true`;
//	}
//};

//const selectOptions = myObject.selects[0].options;

//const renderListItems = (selectOptions) => {
//	return selectOptions.map((option) => {
//		return (
//			`<li class="drop-list__item">
//				<input class="drop-list__radio" id="radio_id_${myObject.selects[0].options[0].value}_1" type="${typeitemsFunc()}" name="drop_list_${myObject.selects[0].options[0].value}" selected="${selectFunc()}" />
//				<label class="drop-list__label drop-list__label--list" tabindex="${myObject.selects[0].options[0].tabindex} " for="radio_id_${myObject.selects[0].options[0].value}_1">${myObject.selects[0].options[0].text}</label>
//			</li>`
//		);
//	});
//}

//const renderHTML = () => {
//	return (
//		`<section class="block block--1">
//		<div class="block__toggle">
//			<button class="block__button">
//				<svg class="block__svg" width="15" height="15">
//				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-open"></use>
//				</svg >
//				Раскрыть блок
//			</button >
//			<h2 class="block__header">${myObject.selects[0].title}</h2>
//		</div >
//	<div class="block__body">
//		<div class="drop-list">
//			<div class="drop-list__input-block">
//			<label class="drop-list__label-title drop-list__label--input" for="${myObject.selects[0].selectId}">Введите данные</label>
//			<div class="drop-list__inner">
//				<input class="drop-list__input" id="${myObject.selects[0].selectId}" type="${myObject.selects[0].type}" name="${myObject.selects[0].name}" placeholder="${myObject.selects[0].placeHolder}">
//				<button class="drop-list__button">
//					<svg class="drop-list__svg" width="25" height="13">
//						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-open-list"></use>
//					</svg>
//					Открыть список
//				</button>
//			</div>
//		</div>
//		<ul class="drop-list__list no-js">
//			${renderListItems().join(`,`)}
//		</ul>
//		</div>
//	</div>
//</section>`
//	);
//};
//console.log()
//document.getElementsByTagName(`body`)[0].innerHTML = renderHTML();