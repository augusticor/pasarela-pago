const mercadoPago = require('mercadopago');

mercadoPago.configure({
	access_token: 'TEST-7552479412287628-032101-27c077a6dd3825326c244fdfad7ae593-731879369',
});

let preference = {
	items: [
		{
			title: 'Camisa',
			quantity: 2,
			unit_price: 98999,
		},
	],
	back_urls: {
		success: 'http://localhost:3000/success',
	},
};

const createPreference = async () => {
	return await mercadoPago.preferences.create(preference);
};

module.exports = {
	createPreference,
};
