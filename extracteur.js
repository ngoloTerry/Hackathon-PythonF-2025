/* Il faut pouvoir récupérer l'URL du fichier .ics à exploiter */
let fichier = fetch('gunga_ginga.csv')
      .then(response => response.text())
      .then(csvText => {
        document.getElementById('csvText').textContent = csvText;
      })
      .catch(error => {
        document.getElementById('csvText').textContent = 'Erreur de chargement du fichier CSV.';
        console.error(error);
      });
      let contenu = document.getElementById("contenu");
      contenu.textContent = fichier;

      
/* Une fois fait, il nous faut transformer en donnée exploitable dans un tableau .csv les infos suivantes*/
/*Le cours en question 
Date
Plage Horraire 
Niveau L1 - L2 
Domaine (Informatique SV etc...)
Groupe 
Salle de classe */

// Donner, par rapport à l'heure actuelle, le prochain cours et le chemin vers celui-ci

// fichiers des photos
// base de données 
