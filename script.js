// Section 1 — Favorite Color Radio Buttons

const favForm = document.querySelector('#fav_color');
const radioOutput = document.querySelector('#radio-output');

if (favForm && radioOutput) {
	favForm.addEventListener('change', (e) => {
		const target = e.target;
		if (!target || target.type !== 'radio') return;
		const val = target.value;
		let heart = '';

		if (val === 'blue') {
			heart = '💙';
		} else if (val === 'green') {
			heart = '💚';
		} else if (val === 'pink') {
			heart = '💕';
		} else if (val === 'black') {
			heart = '🖤';
		}

		radioOutput.innerHTML = `You picked ${val} ${heart}`;
	});
}

// Note: utility functions are in utils.js: getRandomInt() and is_dark(hex)

// Section 2 — Guessing Game
const numInput = document.querySelector('#num-input');
const numOutput = document.querySelector('#num-output');
let secretNumber = typeof getRandomInt === 'function' ? getRandomInt() : Math.floor(Math.random() * 100) + 1;

if (numInput && numOutput) {
	numInput.addEventListener('change', (e) => {
		const val = parseInt(e.target.value, 10);
		if (Number.isNaN(val) || val < 1 || val > 100) {
			numOutput.innerText = 'Please enter a number between 1 and 100.';
			return;
		}

		if (val === secretNumber) {
			numOutput.innerText = `Correct! The number was ${secretNumber}. Generating a new number...`;
			secretNumber = typeof getRandomInt === 'function' ? getRandomInt() : Math.floor(Math.random() * 100) + 1;
		} else if (val < secretNumber) {
			numOutput.innerText = 'Too low — try a higher number.';
		} else {
			numOutput.innerText = 'Too high — try a lower number.';
		}
	});
}

// Section 3 — Continents
const textInput = document.querySelector('#text-input');
const srAlert = document.querySelector('#sr-continent-alert');
const continentMap = {
	'north america': 'north-america',
	'south america': 'south-america',
	'europe': 'europe',
	'asia': 'asia',
	'africa': 'africa',
	'australia': 'australia',
	'antarctica': 'antarctica'
};

if (textInput && srAlert) {
	textInput.addEventListener('input', (e) => {
		const raw = (e.target.value || '').toLowerCase().trim();
		const normalized = raw.replace(/[^a-z]/g, ' ').replace(/\s+/g, ' ').trim();

		// remove previous highlights
		Object.values(continentMap).forEach(id => {
			const el = document.getElementById(id);
			if (el) el.classList.remove('found');
		});

		if (!normalized) {
			srAlert.innerText = '';
			return;
		}

		const matchedId = continentMap[normalized];
		if (matchedId) {
			const img = document.getElementById(matchedId);
			if (img) img.classList.add('found');
			srAlert.innerText = `You found ${normalized}!`;
		} else {
			srAlert.innerText = 'No match yet.';
		}
	});
}

// Section 4 — Background Color
const backForm = document.querySelector('#back_color');
const colorInput = document.querySelector('#color');
const humanCheckbox = document.querySelector('#human');

if (backForm && colorInput && humanCheckbox) {
	backForm.addEventListener('submit', (e) => {
		e.preventDefault();
		if (!humanCheckbox.checked) {
			alert('Please confirm you are not a robot.');
			return;
		}

		const hex = colorInput.value || '#FFFFFF';
		document.body.style.background = hex;

		// Use is_dark from utils.js if available
		if (typeof is_dark === 'function') {
			document.body.style.color = is_dark(hex) ? 'white' : 'black';
		}
	});
}