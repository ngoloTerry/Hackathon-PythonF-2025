const express = require('express');
const app = express();
const port = 3000;

const sallesW = [
	{num: 0, suite : 14, exceptions : ["Centre", "Centre2", "S4c"], description : "au Batiment S4C"}
	,{num : 1, suite :6, exceptions : null, description : "à la BU Sciences" }
	,{num : 2, suite :7 , exceptions : null, description : "à l'UFR Sciences"}
	,{num : 3, suite : 7, exceptions : null, description : "à l'Amphi Charpak"}
	,{num : 4, suite : 14, exceptions : ["Centre","Centre2"], description : "à l'Amphi Commerson"}
	,{num : 5, suite : 14, exceptions : ["Centre","Centre2","S4d"], description : "à l'Amphi B"}
	,{num : 6,  suite : 14, exceptions : ["Centre","Centre2","S4d"], description : "à l'Amphi A"}
	,{num : 7,  suite : 14, exceptions : ["Centre","Centre2","S4c"], description : "à l'Amphi C"}
	,{num : 8,  suite : 7, exceptions : null, description : "au Batiment S1"}
	,{num : 9,  suite : 10, exceptions : null, description : "au Batiment S2"}
	,{num : 10,  suite : 14, exceptions : ["Centre","Centre2"], description : "au Batiment S3"}
	,{num : 11,  suite : 14, exceptions : ["Centre","Centre2", "S4a"], description : "au Batiment S4A"}
	,{num : 12,  suite : 11, exceptions : ["S4b"], description : "au Batiment S4B"}
	,{num : 13,  suite : 13, exceptions : ["Centre","Centre2", "S4d"], description : "au Batument S4D"}
]
const sallesE = [
	{num: 0, suite : 10, exceptions : ["Centre", "Centre2", "S4c"], description : "au Batiment S4C"}
	,{num : 1, suite : 17, exceptions : null, description : "à la BU Sciences" }
	,{num : 2,  suite : 16, exceptions : null, description : "à l'UFR Sciences"}
	,{num : 3,  suite : 16, exceptions : null, description : "à l'Amphi Charpak"}
	,{num : 4,  suite : 10, exceptions : ["Centre", "Centre2"], description : "à l'Amphi Commerson"}
	,{num : 5,  suite : 10, exceptions : ["Centre","Centre2","S4d"], description : "à l'Amphi B"}
	,{num : 6,  suite : 10, exceptions : ["Centre","Centre2","S4d"], description : "à l'Amphi A"}
	,{num : 7,  suite : 10, exceptions : ["Centre","Centre2","S4c"], description : "à l'Amphi C"}
	,{num : 8,  suite : 16, exceptions : null, description : "au Batiment S1"}
	,{num : 9,  suite : 11, exceptions : null, description : "au Batiment S2"}
	,{num : 10,  suite : 10, exceptions : ["Centre", "Centre2"], description : "au Batiment S3"}
	,{num : 11,  suite : 10, exceptions : ["Centre","Centre2","S4a"], description : "au Batiment S4A"}
	,{num : 12,  suite : 10, exceptions : ["S4b"], description : "au Batiment S4B"}
	,{num : 13,  suite : 10, exceptions : ["Centre","Centre2","S4d"], description : "au Batument S4D"}
]

/*
 const salles = [
	{salle : "BU Sciences", num : 1}, 
	{salle : "Bibliotheque U" , num : 1}, 
	{salle : "UFR ST", num : 2}, 
	{salle : "UFR Science", num : 2}, 
	{salle : "Amphi Charpak", num : 3}, 
	{salle : "Amphi Commerson", num : 4}, 
	{salle : "Amphi B", num : 5}, 
	{salle : "Amphi A", num : 6}, 
	{salle : "Amphi C", num : 7}, 
	{salle : "S1-...", num : 8}, 
	{salle : "S2-...", num : 9}, 
	{salle : "S3-...", num : 10}, 
	{salle : "S4a-...", num : 11}, 
	{salle : "S4b-...", num : 12}, 
	{salle : "S4d-...", num : 13}, 
	{salle : "S4c-...", num : 0}
    ];
    */
// E || W -> Destination  
// E_0 
// W_0
let dernierChoix = null;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.post('/api/choix', (req, res) => {
	const { direction, salle } = req.body;
	console.log(salle);
	dernierChoix = {direction, salle};
	res.sendStatus(200);
});
app.get('/resultat', (req, res) => {
	res.sendFile(__dirname + '/public/resultat.html');
});

app.get('/api/images', (req, res) => {
	if (!dernierChoix) return res.status(400).json([]);
	const { direction, salle } = dernierChoix;
	let images = [];

	if (!direction) {
		//
		images.push('./img/E_1.jpg', './img/E_2.jpg');
	} else {
		images.push('./img/W_1.jpg', './img/W_2.jpg');
	}

	res.json(images);
});

app.listen(port, () => {
	console.log(`Serveur lancé sur http://localhost:${port}`);
});
// Cette fonction renvoie le nombre d'image à afficher en fonction du numéro en paramètre [9]

