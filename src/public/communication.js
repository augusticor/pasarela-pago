'use strict';

async function updatePreferenceID() {
	let newPreferenceID = '';
	const options = {
		method: 'POST',
	};

	await fetch('/buy', options)
		.then((res) => res.json())
		.then((comingID) => {
			console.log(comingID.url);
			newPreferenceID = comingID.id;
		})
		.catch((error) => console.log('Error en fetch peticion cliente ', error));

	document.getElementById('mercadopago').setAttribute('data-preference-id', newPreferenceID);
}

updatePreferenceID();
