const express = require('express');
const app = express();
const port = 3000;

const sallesW = [
	{salle: 0, suite : 14, exceptions : ["Centre", "Centre2", "S4c"], titre : "au Batiment S4C"}
	,{salle : 1, suite :6, exceptions : null, titre : "à la BU Sciences" }
	,{salle : 2, suite :7 , exceptions : null, titre : "à l'UFR Sciences"}
	,{salle : 3, suite : 7, exceptions : null, titre : "à l'Amphi Charpak"}
	,{salle : 4, suite : 14, exceptions : ["Centre","Centre2"], titre : "à l'Amphi Commerson"}
	,{salle : 5, suite : 14, exceptions : ["Centre","Centre2","S4d"], titre : "à l'Amphi B"}
	,{salle : 6,  suite : 14, exceptions : ["Centre","Centre2","S4d"], titre : "à l'Amphi A"}
	,{salle : 7,  suite : 14, exceptions : ["Centre","Centre2","S4c"], titre : "à l'Amphi C"}
	,{salle : 8,  suite : 7, exceptions : null, titre : "au Batiment S1"}
	,{salle : 9,  suite : 10, exceptions : null, titre : "au Batiment S2"}
	,{salle : 10,  suite : 14, exceptions : ["Centre","Centre2"], titre : "au Batiment S3"}
	,{salle : 11,  suite : 14, exceptions : ["Centre","Centre2", "S4a"], titre : "au Batiment S4A"}
	,{salle : 12,  suite : 11, exceptions : ["S4b"], titre : "au Batiment S4B"}
	,{salle : 13,  suite : 13, exceptions : ["Centre","Centre2", "S4d"], titre : "au Batiment S4D"}
]
const sallesE = [
	{salle: 0, suite : 10, exceptions : ["Centre", "Centre2", "S4c"], titre : "au Batiment S4C"}
	,{salle : 1, suite : 17, exceptions : null, titre : "à la BU Sciences" }
	,{salle : 2,  suite : 16, exceptions : null, titre : "à l'UFR Sciences"}
	,{salle : 3,  suite : 16, exceptions : null, titre : "à l'Amphi Charpak"}
	,{salle : 4,  suite : 10, exceptions : ["Centre", "Centre2"], titre : "à l'Amphi Commerson"}
	,{salle : 5,  suite : 10, exceptions : ["Centre","Centre2","S4d"], titre : "à l'Amphi B"}
	,{salle : 6,  suite : 10, exceptions : ["Centre","Centre2","S4d"], titre : "à l'Amphi A"}
	,{salle : 7,  suite : 10, exceptions : ["Centre","Centre2","S4c"], titre : "à l'Amphi C"}
	,{salle : 8,  suite : 16, exceptions : null, titre : "au Batiment S1"}
	,{salle : 9,  suite : 11, exceptions : null, titre : "au Batiment S2"}
	,{salle : 10,  suite : 10, exceptions : ["Centre", "Centre2"], titre : "au Batiment S3"}
	,{salle : 11,  suite : 10, exceptions : ["Centre","Centre2","S4a"], titre : "au Batiment S4A"}
	,{salle : 12,  suite : 10, exceptions : ["S4b"], titre : "au Batiment S4B"}
	,{salle : 13,  suite : 10, exceptions : ["Centre","Centre2","S4d"], titre : "au Batiment S4D"}
]
const imgDescriptions = [
    // Commun :
    {image: "Centre", description: "Ici, nous sommes au centre de l’UFR ST, au bâtiment S2, au rez-de-chaussée. Devant vous, le chemin pour aller aux bâtiments S4a, S4c et S4d. À votre gauche, le couloir ouest du bâtiment S2. À votre droite, le couloir est du bâtiment S2."},
    {image: "Centre2", description: "Ici, nous sommes à l’intersection entre le bâtiment S2 et les bâtiments S4b et S4a. Devant vous, la place entre les salles de cours S4a, S4b, S4c et S4d. À votre gauche, à la fin des escaliers, le bâtiment S4a et, plus loin, S4b. À votre droite, à la fin des escaliers, le chemin pour aller directement à l’amphi Commerson."},

    {image: "S4a", description: "Ici, nous sommes à l’intersection entre le bâtiment S2 et les bâtiments S4. Devant vous, c’est le bâtiment S4a. À votre gauche, en montant les escaliers, le hall de l’UFR ST. À votre droite, en descendant les escaliers, la place des étudiants entre les bâtiments S4."},

    {image: "S4b", description: "Devant vous, le chemin pour aller au bâtiment S4b au premier étage. À votre gauche, le couloir ouest pour se diriger vers le bâtiment S1. À votre droite, le chemin pour aller au hall du bâtiment S2 de l’UFR ST."},

    {image: "S4c", description: "Ici, nous sommes au bâtiment S4c. Devant vous, au rez-de-chaussée, se trouvent l’amphi C et des salles de TD. À votre gauche, la place entre les bâtiments de l’UFR ST. À votre droite, le bâtiment S4d avec, à côté, l’amphi A au rez-de-chaussée."},

    {image: "S4d", description: "Ici, nous sommes au bâtiment S4d. Devant vous, les salles de TD et TP qui se situent au premier étage. Au rez-de-chaussée, l’amphi A et l’amphi B. À votre gauche, le bâtiment S4c. À votre droite, le chemin qui mène directement à l’amphi Commerson."},

    // Est :
    {image: "E_0", description: "Ici, nous sommes à l’entrée Est. Devant vous, la route principale pour se diriger vers le centre de l’université (entre l’UFR DE et l’UFR ST). À votre gauche, la route venant de l’ouest de la fac."},

    {image: "E_1", description: "Ici, nous sommes à proximité des bâtiments Crous. Devant vous, le chemin pour arriver à l’UFR ST. À votre gauche, le carrefour à sens giratoire de l’est de l’université. À votre droite, la route pour aller à l’accueil du Crous."},

    {image: "E_2", description: "Ici, nous sommes à proximité des bâtiments Crous. Devant vous, le chemin pour arriver à l’UFR ST. À votre gauche, il y a un parking à deux étages. À votre droite, la route pour aller à l’accueil du Crous."},

    {image: "E_3", description: "Ici, nous sommes à proximité des bâtiments Crous. Devant vous, le chemin pour arriver à l’UFR ST. À votre gauche, vous pouvez aller au parking ou vous rendre à l’amphi Bioclimatique. À votre droite, le bâtiment Crous pour les étudiants étrangers."},

    {image: "E_4", description: "Ici, nous sommes à proximité des bâtiments Crous. Devant vous, le chemin pour arriver à l’UFR ST. À votre gauche, vous pouvez aller au parking ou vous rendre à l’amphi Bioclimatique. À votre droite, le bâtiment Crous pour les étudiants étrangers."},

    {image: "E_5", description: "Ici, nous sommes sur le chemin pour rejoindre le hall de l’UFR Sciences. Devant vous, le trottoir pour aller à l’UFR ST. À votre gauche, la route principale pour aller à l’entrée ouest de l’université. À votre droite, à quelques mètres, des escaliers pour se diriger vers l’Espace Vie Étudiante (EVE) ou l’amphi Commerson."},

    {image: "E_6", description: "Ici, nous sommes dans une allée ou un raccourci pour se diriger vers le hall de l’UFR ST. À votre gauche, le trottoir pour aller au carrefour de l’UFR ST. À votre droite, le chemin pour aller à l’entrée Est de l’université."},

    {image: "E_7", description: "Ici, nous sommes dans une allée ou un raccourci pour se diriger vers le hall de l’UFR ST. Devant vous, on peut voir des bancs pour s’asseoir."},

    {image: "E_8", description: "Devant vous, le bâtiment S2 de l’UFR ST avec son hall. À votre gauche, le chemin pour aller à la route principale qui mène vers l’entrée ouest."},

    {image: "E_9", description: "Devant vous, le bâtiment S2 de l’UFR ST avec son hall. À votre gauche, un parking. À votre droite, une allée avec des bancs qui mène vers la route principale."},

    {image: "E_10", description: "Ici, nous sommes dans le hall du bâtiment S2 de l’UFR ST."},

    {image: "E_11", description: "Devant vous, se trouve le couloir pour aller vers le bâtiment S1. À votre gauche, le hall du bâtiment S2 pour se diriger vers la route principale de l’université. À votre droite, en descendant les escaliers, du côté gauche, le bâtiment S4a et, en face, les bâtiments S4c et S4d."},

    {image: "E_12", description: "Ici, nous sommes au couloir ouest du bâtiment S2 de l’UFR ST. À votre gauche, le chemin pour aller au bâtiment S4b au premier étage. À votre droite, une sortie pour aller au parking."},

    {image: "E_13", description: "Devant vous, le chemin qui mène vers le bâtiment S1. À côté, un kiosque pour s’installer. À votre gauche, des escaliers pour aussi se diriger vers le bâtiment S1. À votre droite, en descendant les escaliers, se trouve le bâtiment S4b."},

    {image: "E_14", description: "Ici, nous sommes au sud du bâtiment S1. Devant vous, en montant les escaliers, se trouve le bâtiment S1. À votre gauche, après la route, le bâtiment S2. À votre droite, il y a un parking."},

    {image: "E_15", description: "Devant vous, l’intérieur du bâtiment S1 au rez-de-chaussée. À votre gauche, les escaliers qui mènent au bâtiment. À votre droite, en montant les escaliers, un espace réservé pour les étudiants."},

    {image: "E_16", description: "Ici, vous êtes au bâtiment S1 au premier étage. Devant vous, se trouvent les portes d’entrée et de sortie du bâtiment S1. À votre gauche, vous pouvez soit monter les escaliers au deuxième étage, soit aller voir les autres salles disponibles. À votre droite, au loin, vous trouverez les salles S1. Vous pouvez aussi descendre au rez-de-chaussée ou monter au deuxième étage."},

    {image: "E_17", description: "Devant vous, se trouve la BU Sciences. À votre gauche, après la route, vous trouverez les escaliers pour aller à la cafétéria, par exemple. À votre droite, se trouve le bâtiment S1."},

    // Ouest :
    {image: "W_0", description: "Ici, nous sommes à l’entrée ouest. Devant vous, après la route, se trouve l’UFR Lettres et Sciences Humaines. À votre droite, le carrefour à sens giratoire de l’entrée ouest et, encore plus loin, l’administration de l’université."},

    {image: "W_1", description: "Ici, nous sommes à proximité de l’UFR LSH. Devant vous, il y a la route qui mène vers la BU Sciences. À votre gauche, des places de parking en épi. À votre droite, le carrefour à sens giratoire de l’ouest de l’université."},

    {image: "W_2", description: "Ici, nous sommes à proximité de l’UFR LSH. Devant vous, il y a la route qui mène vers la BU Sciences. À votre gauche, la route avec des places de parking en épi. À votre droite, les bâtiments de l’UFR LSH."},

    {image: "W_3", description: "Ici, nous sommes à l’intersection entre l’UFR ST et l’UFR LSH. Devant vous, il y a la route qui mène vers la BU Sciences. À votre droite, les bâtiments de l’UFR LSH."},

    {image: "W_4", description: "Ici, nous sommes arrivés à la faculté UFR ST. Devant vous, à quelques mètres, l’entrée de la BU Sciences."},

    {image: "W_5", description: "Ici, nous sommes sur la place entre la BU Sciences et le bâtiment S1. Devant vous, au loin, l’entrée nord du bâtiment S1. À côté de l’entrée, l’amphi Charpak. À votre gauche, l’entrée de la BU Sciences. À votre droite, la route pour aller à l’entrée ouest de l’université."},

    {image: "W_6", description: "Devant vous, se trouve la BU Sciences. À votre gauche, après la route, vous trouverez les escaliers pour aller à la cafétéria, par exemple. À votre droite, se trouve le bâtiment S1."},

    {image: "W_7", description: "Ici, nous sommes à l’entrée nord du bâtiment S1 au premier étage. Devant vous, le hall principal du bâtiment S1. Plus loin, en descendant les escaliers, la sortie pour rejoindre le hall de l’UFR ST. À votre gauche, de l’intérieur, les principales salles de cours S1 et la scolarité. À votre droite, de l’extérieur, l’amphi Charpak."},

    {image: "W_8", description: "Ici, nous sommes à l’entrée sud du bâtiment S1 au rez-de-chaussée. Devant vous, le chemin pour aller au bâtiment S2. À votre gauche, des salles de cours ou du personnel."},

    {image: "W_9", description: "Ici, nous sommes à l’entrée sud du bâtiment S1 au rez-de-chaussée. Devant vous, en descendant les escaliers, le chemin pour aller au bâtiment S2."},

    {image: "W_10", description: "Ici, nous sommes à l’intersection entre le bâtiment S1 et le bâtiment S2. Devant vous, après les escaliers, le couloir ouest du bâtiment S2. À votre gauche, un kiosque pour les étudiants. À votre droite, après la route, le bâtiment S1."},

    {image: "W_11", description: "Devant vous, en descendant les escaliers, se trouve le bâtiment S4b. À votre gauche, la direction pour se rendre au bâtiment S1. À votre droite, le couloir pour rejoindre le hall du bâtiment S2."},

    {image: "W_12", description: "Ici, nous sommes au couloir ouest du bâtiment S2. Devant vous, le chemin pour se rendre au hall de l’UFR ST. À votre gauche, derrière la verdure, le bâtiment S4b. À votre droite, les salles de TP pour les licences Physique, SV et ST."},

    {image: "W_13", description: "Ici, nous sommes au couloir ouest du bâtiment S2 de l’UFR ST. À votre gauche, le chemin pour aller au bâtiment S4b au premier étage. À votre droite, une sortie pour aller au parking."},

    {image: "W_14", description: "Ici, nous sommes dans le couloir ouest du bâtiment S2. Devant vous, se trouve le hall de l’UFR ST. À votre droite, des salles de cours (TD/TP) toujours dans le bâtiment S2."}
];
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
	console.log(direction);
	dernierChoix = {direction, salle};
	res.sendStatus(200);
});
app.get('/resultat', (req, res) => {
	res.sendFile(__dirname + '/public/resultat.html');
});

app.get('/api/images', (req, res) => {
    if (!dernierChoix) return res.status(400).json([]);
    const { direction, salle } = dernierChoix;
    const salleNum = Number(salle); // <-- conversion ici
    let images = [];
    let meta = null;

    function getDescription(imageName) {
        const found = imgDescriptions.find(img => img.image === imageName);
        return found ? found.description : "";
    }

    if (direction == 1) {
         // Ouest
        meta = sallesW.find(s => s.salle === salleNum); // <-- utilise salleNum
        if (!meta) return res.status(400).json([]);
        for (let i = 0; i <= meta.suite; i++) {
            const imageName = `W_${i}`;
            images.push({
                src: `/img/West/${imageName}.jpg`,
                description: getDescription(imageName)
            });
        }
        if (meta.exceptions && Array.isArray(meta.exceptions)) {
            meta.exceptions.forEach(ex => {
                let src = `/img/Commun/${ex}.jpg`;
                if (!imgDescriptions.find(img => img.image === ex)) {
                    src = `/img/West/${ex}.jpg`;
                }
                images.push({
                    src: src,
                    description: getDescription(ex)
                });
            });
        }
    } else {
		// Est
        meta = sallesE.find(s => s.salle === salleNum); // <-- utilise salleNum
        if (!meta) return res.status(400).json([]);
        for (let i = 0; i <= meta.suite; i++) {
            const imageName = `E_${i}`;
            images.push({
                src: `/img/Est/${imageName}.jpg`,
                description: getDescription(imageName)
            });
        }
        if (meta.exceptions && Array.isArray(meta.exceptions)) {
            meta.exceptions.forEach(ex => {
                images.push({
                    src: `/img/Commun/${ex}.jpg`,
                    description: getDescription(ex)
                });
            });
        }
       
    }

    res.json({
        titre: meta.titre,
        images: images.map(img => ({
            src: img.src,
            description: img.description
        }))
    });
});
app.listen(port, () => {
	console.log(`Serveur lancé sur http://localhost:${port}`);
});
// Cette fonction renvoie le nombre d'image à afficher en fonction du numéro en paramètre [9]

