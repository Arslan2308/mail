console.log('init');

// inputMask
const form = document.querySelector('.form');
const telSelector = document.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector)

//	justValidate
new window.JustValidate('.form', {
	rules: {
		tel: {
			required: true,
			function: () => {
				const phone = telSelector.inputmask.unmaskedvalue();
				console.log(phone);
				return phone.length === 10;
			}
		}
	},
	colorWrong: 'green',
	messages: {
		name: {
			required: 'Введите имя',
			minLength: 'Введите 3 или более символов',
			maxLength: 'Запрещено вводить более 15 символов',
		},
		email: {
			email: 'Введите корректный email',
			required: 'Введите email',
		},
		tel: {
			required: 'Введите телефон',
			function: 'Здесь 10 символов без +7',
		}
	},
	submitHandler: function (thisForm) {
		let formData = new FormData(thisForm);

		let xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					console.log('Отправлено');
				}
			}
		}

		xhr.open('POST', 'mail.php', true);
		xhr.send(formData);

		thisForm.reset();
	}
})