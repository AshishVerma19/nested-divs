const container = document.getElementById('1');

function addDiv(parent, count) {
	const div = document.createElement('div');

	div.id = parseInt(count) + 1;
	parent.appendChild(div);

	return parent.firstElementChild;
}

function createDivs(count) {
	let i = 1;
	let parent = container;

	while (i <= count) {
		parent = addDiv(parent, i);
		i++;
	}
}

createDivs(100);
