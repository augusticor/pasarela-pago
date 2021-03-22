const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

const { createPreference } = require('./mercado-pago/mercado-pago');

app.post('/buy', (req, res) => {
	createPreference()
		.then((success) => {
			res.status(200).send({
				id: success.body.id,
				url: success.body,
			});
		})
		.catch((error) => {
			console.error(error);
			res.status(300).send('Ocurrio un error en la pasarela de pagos');
		});
});

app.get('/success', (req, res) => {
	console.log(req.query);
});

app.listen(PORT, () => console.log(`Pasarela listening on ${PORT}`));
