  
let $wrap = document.querySelector('.wrap'),
$opts = document.querySelectorAll('.bar a');

Array.prototype.forEach.call($opts, (el, i) => {
el.addEventListener('click', function (event) {
	$wrap.setAttribute('data-pos', i);			  
});
});

let count = 0,
$btns = document.querySelectorAll('.btn'),
$cart = document.querySelector('.cart');

Array.prototype.forEach.call($btns, (el, i) => {
el.addEventListener('click', function (event) {
	$cart.classList.add('add');
	$cart.querySelector('span').innerText = ++count;
	setTimeout(() => {
		$cart.classList.remove('add');
	}, 1500);			  
});
});

//document.querySelector('.wrap-clip').style.borderTopWidth = window.innerHeight * .8 + 'px';