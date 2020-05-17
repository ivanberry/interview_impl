function detectClickEvent(e) {
	console.log('event happend', e.type);
	if (e.type === 'touchend') {
		e.preventDefault();
	}
}

document.body.addEventListener('touchstart', detectClickEvent);
document.body.addEventListener('touchmove', detectClickEvent);
document.body.addEventListener('touchend', detectClickEvent);
document.body.addEventListener('mousemove', detectClickEvent);
document.body.addEventListener('mousedown', detectClickEvent);
document.body.addEventListener('mouseup', detectClickEvent);
document.body.addEventListener('click', detectClickEvent);
