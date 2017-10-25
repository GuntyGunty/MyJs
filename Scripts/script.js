const selects = document.querySelectorAll(".drop-list__list");
const lists = document.querySelectorAll(".drop-list__list-second");
const inputs = document.querySelectorAll(".drop-list__input");
const radioBlocks = document.querySelectorAll(".radio__block");
const myObject = {};
myObject.selects = [];
myObject.inputs = [];
myObject.radioBlocks = [];
myObject.lists = [];

Array.from(selects, (select, index) => {

	myObject.selects.push({})
	myObject.selects[`${index}`].id = select.id;
	myObject.selects[`${index}`].selectId = select.selectId;
	myObject.selects[`${index}`].selectType = false;
	myObject.selects[`${index}`].selectName = select.selectName;
	myObject.selects[`${index}`].formID = select.form.id;
	myObject.selects[`${index}`].name = select.name;
	myObject.selects[`${index}`].options = [];
	Array.from(select.options, (option, i) => {
		myObject.selects[`${index}`].options.push({});
		myObject.selects[`${index}`].options[`${i}`].value = option.value;
		myObject.selects[`${index}`].options[`${i}`].text = option.text;
		myObject.selects[`${index}`].options[`${i}`].selected = option.selected;
	})
});

Array.from(inputs, (input, ind) => {

	myObject.inputs.push({})
	myObject.inputs[`${ind}`].id = input.id;
	myObject.inputs[`${ind}`].name = input.name;
	myObject.inputs[`${ind}`].placeholder = input.placeholder;
	myObject.inputs[`${ind}`].type = input.type;
});


Array.from(lists, (list, elem) => {
	myObject.lists.push({})
	myObject.lists[`${elem}`].id = list.id;
	myObject.lists[`${elem}`].name = list.name;
	myObject.lists[`${elem}`].selectType = true;
	myObject.lists[`${elem}`].options = [];
	Array.from(list.options, (option, el) => {
		myObject.lists[`${elem}`].options.push({});
		myObject.lists[`${elem}`].options[`${el}`].value = option.value;
		myObject.lists[`${elem}`].options[`${el}`].text = option.text;
	})
});

Array.from(radioBlocks, (block, item) => {
	myObject.radioBlocks.push({})
	myObject.radioBlocks[`${item}`].id = block.id;
	myObject.radioBlocks[`${item}`].buttons = [];
	const blockButtons = block.querySelectorAll(`.drop-list__radio`);
	Array.from(blockButtons, (button, it) => {
		console.log(button);
		myObject.radioBlocks[`${item}`].buttons.push({});
		myObject.radioBlocks[`${item}`].buttons[`${it}`].id = button.id;
		myObject.radioBlocks[`${item}`].buttons[`${it}`].type = button.type;
	});
});

console.log(myObject);

const typeitemsFunc = (selectType) => {
	if (selectType === true) {
			return `checkbox`;
		} else {
			return `radio`;
		}
};

console.log(typeitemsFunc());

const renderAll = () => {
	return Array.from(myObject.selects).map((select, index) => {
		return renderDiv(index);
	});
}

const renderDiv = (index) => {
	return (
		`<div class="block">
			${renderInputs(index)}
			${renderList(index)}
			${renderRadio(index)}
		</div>`
	);
};


const renderInputs = (index) => {
	const input = myObject.inputs[index];

	return (
		`<input class="drop-list__input" id="${input.id}" type="${input.type}" name="${input.name}" placeholder="${input.placeholder}">`
	);

};

const renderRadioBlock = () => {
	return (
		`<div class="drop-list__list no-js">
			${renderRadio(myObject.radioBlocks[index].buttons).join(``)}
		</div>`
		);
}

const renderRadio = (index) => {
	const radio = myObject.radioBlocks[`${index}`].buttons[`${index}`];
	return (
		`<input class="radio__input" id="${radio.id}" type="${radio.type}">
		<input class="radio__input" id="${radio.id}" type="${radio.type}">
		<input class="radio__input" id="${radio.id}" type="${radio.type}">`
		)
}

const renderList = (index) => {
	return (
		`<ul class="drop-list__list no-js">
			${renderListItems(myObject.selects[index].options).join(``)}
		</ul>`
	);
};


console.log(typeitemsFunc());

const renderListItems = (options) => {
	return options.map((option) => {
		return (
			`<li class="drop-list__item">
				<input class="drop-list__radio" id="radio_id_${option.value}_1" type="${typeitemsFunc()}" name="drop_list_${option.value}" />
				<label class="drop-list__label drop-list__label--list" for="radio_id__1">${option.text}</label>
			</li>`
		);
	});
};


console.log(renderAll());

document.querySelector(`.block`).innerHTML = renderAll().join(``);







