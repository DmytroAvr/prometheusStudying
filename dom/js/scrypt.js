
// важно. если кнопка в кнопке - использую для отделения срабатывания 

const section = document.querySelector('section');
const span = document.querySelector('span');
const btn = document.querySelector('.btn-danger');

section.addEventListener("click", () => {
	console.log("I'm section");
});

span.addEventListener("click", () => {
	console.log('I\'m span');
});

btn.addEventListener("click", (event) => {
	event.stopPropagation();	//stop всливання занурення . батькывськи не реагують
	// если елемент имеет свойство bubbles: false - не подымается\спускается 
	//event.stopImmediatePropagation();	     если eventListener несколько. остальные перестанут работать после данного выражения
	//event.preventDefault();    включить поведение по умолчанию (ссылка как ссылка)
	console.log('I\m button');
});


//  поширення подий

const listItem = document.querySelectorAll('li');

listItem.forEach((item) => {
	item.addEventListener('click', (e) => {
		e.target.classList.toggle('red');
	});
});

