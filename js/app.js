document.addEventListener('click', e => {
  const dropdownButton = e.target.matches('.dropdown-button')
  if (!dropdownButton && e.target.closest('.dropdown') !=null) return

  let currentDropdown;
  if (dropdownButton) {
    currentDropdown = e.target.closest('.dropdown')
    currentDropdown.classList.toggle('active')
  }

  document.querySelectorAll('.dropdown.active').forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove('active')
  })
})


const sideMenu = () => {
	const menuButton = document.querySelector('.hamburger');
	const mobileMenu = document.querySelector('.mobile-nav');
	menuButton.addEventListener('click', function () {
		menuButton.classList.toggle('is-active');
		mobileMenu.classList.toggle('mobile-active');
	});
};

document.addEventListener('DOMContentLoaded', sideMenu);