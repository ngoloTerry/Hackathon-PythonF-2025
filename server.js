const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

let dernierChoix = null;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.post('/api/choix', (req, res) => {
	const { direction, salle } = req.body;
	dernierChoix = {direction, salle};
	res.sendStatus(200);
	/*fs.readdir(path, (err, files) => {
		if (err) return res.status(404).json([]);
		const imgPaths = files
			.filter(f => f.endsWith('.jpg'))
			.map(f => `/images/${aile}/${salle}/${f}`);
		res.json(imgPaths);
	});*/
});
app.get('/resultat', (req, res) => {
	res.sendFile(__dirname + '/public/resultat.html'); // selon ton arborescence
});

app.get('/api/images', (req, res) => {
	if (!dernierChoix) return res.status(400).json([]);

	const { direction, salle } = dernierChoix;
	let images = [];

	if (direction === 'est') {
		images.push('./img/E_1.jpg', './img/E_2.jpg');
	} else if (direction === 'ouest') {
		images.push('./img/W_1.jpg', './img/W_2.jpg');
	}

	if (salle.toLowerCase().includes('charpak')) {
		images.push('./img/W_6.jpg');
	}

	res.json(images);
});

app.listen(port, () => {
	console.log(`Serveur lancé sur http://localhost:${port}`);
});

