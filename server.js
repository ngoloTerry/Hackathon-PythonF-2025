const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/api/chemin', (req, res) => {

	const { aile, salle } = req.body;
	console.log(aile);
	console.log(salle);

	/*fs.readdir(path, (err, files) => {
		if (err) return res.status(404).json([]);
		const imgPaths = files
			.filter(f => f.endsWith('.jpg'))
			.map(f => `/images/${aile}/${salle}/${f}`);
		res.json(imgPaths);
	});*/
});

app.listen(port, () => {
	console.log(`Serveur lancé sur http://localhost:${port}`);
});

