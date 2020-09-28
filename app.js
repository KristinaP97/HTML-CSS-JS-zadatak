const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


//Čuvanje podataka iz forme u localStorage-u
const inp1 = document.getElementById("inp1");
const inp2 = document.getElementById("inp2");
const inp3 = document.getElementById("inp3");
const inp4 = document.getElementById("inp4");
const btn = document.getElementById("btn");

btn.onclick = function() {

	const key1 = inp1.value;
	const key2 = inp2.value;
	const key3 = inp3.value;
	const key4 = inp4.value;

	console.log(key1);
	console.log(key2);
	console.log(key3);
	console.log(key4);

	if (key1 && key2 && key3 && key4) {
		localStorage.setItem(key1, key2, key3, key4);
		location.reload;
	}
};

for (let i=0; i<localStorage.length; i++){
	const key1 = localStorage.key1(i);
	const key2 = localStorage.key2(key1);
	const key3 = localStorage.key1(key2);
	const key4 = localStorage.key1(key3);
};	
