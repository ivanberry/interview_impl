function detectClickEvent(e) {
	console.log('event happend', e.type);
	function test() {
		console.log('emulate click');
	}
	if (e.type === 'touchend') {
		e.preventDefault();
		emulateClick(e, test);
	}
}

function emulateClick(e, fn) {
	const customE = new CustomEvent('niceClick');
	e.target.removeEventListener('niceClick', fn, true);
	e.target.addEventListener('niceClick', fn, true);
	e.target.dispatchEvent(customE);
}

document.body.addEventListener('touchstart', detectClickEvent);
document.body.addEventListener('touchmove', detectClickEvent);
document.body.addEventListener('touchend', detectClickEvent);
document.body.addEventListener('mousemove', detectClickEvent);
document.body.addEventListener('mousedown', detectClickEvent);
document.body.addEventListener('mouseup', detectClickEvent);
document.body.addEventListener('click', detectClickEvent);
