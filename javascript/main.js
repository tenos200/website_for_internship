const openModalBtn = document.querySelectorAll('[data-modal-target]');
const closeModalBtn = document.querySelectorAll('[data-modal-close]');
const overlay = document.getElementById('overlay');


window.addEventListener('scroll', scrolling);

openModalButtons.foreach(button=> {

	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		openModal(modal);

	})
});


closeModalButtons.foreach(button=> {

	button.addEventListener('click', () => {
		const modal = button.closest('.modal');
		closeModal(modal);

	})
});


function scrolling() {
	let header = document.querySelector('header');
	header.classList.toggle('scrolling-active', window.scrollY > 0);

}

function openModal(modal) {
	if (modal == null) {
		return;
	}
	modal.classList.add('active');
	overlay.classList.add('active');

}

function closeModal(modal) {
	if (modal == null) {
		return;
	}
	modal.classList.remove('active');
	overlay.classList.remove('active');

}

function scrollToTim() {
	window.scrollTo({
		top: 1000,
		behavior: 'smooth'
	});
}
