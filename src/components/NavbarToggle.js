const navSlide = () => {
	const burger = document.querySelector('.burger');
	const navList = document.querySelector('.nav-list');
	const navItem = document.querySelectorAll('.nav-list a');

	burger.addEventListener('click', () => {
		navList.classList.toggle('open');
		burger.classList.toggle('toggle');
	});

	//close mobile nav when nav-link clicked
	for (let i = 0; i < navItem.length; i++) {
		let closeNav = navItem[i];

		closeNav.addEventListener('click', () => {
			navList.classList.toggle('open');
			burger.classList.toggle('toggle');
		});
	}
};
navSlide();
