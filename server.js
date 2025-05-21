const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/api/donnees', (req, res) => {
	console.log('Données reçues :', req.body);
	res.json({ message: 'Reçu !' });
});

app.listen(port, () => {
	console.log(`Serveur lancé sur http://localhost:${port}`);
});

