
from ics import Calendar
import csv
from datetime import datetime
import re

def extraire_infos(description):
    lignes = description.strip().split('\n')
    niveau = domaine = groupe = enseignant = ""

    for ligne in lignes:
        if "L1" in ligne or "L2" in ligne or "L3" in ligne:
            niveau = ligne.strip()
        elif '-' in ligne and "CM" not in ligne:
            groupe = ligne.strip()
        elif ligne and not ligne.startswith("Exporté"):
            enseignant = ligne.strip()

    # Domaine (ex: Informatique, SV...) -> on l'extrait depuis le niveau si format comme L3CH, L2INFO, etc.
    domaine_match = re.match(r"L[123]([A-Z]+)", niveau.replace(" ", ""))
    domaine = domaine_match.group(1) if domaine_match else ""

    return niveau, domaine, groupe, enseignant

with open("./ADECal.ics", "r", encoding="utf-8") as f:
    cal = Calendar(f.read())

with open("EDT.csv", "w", newline='', encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(["Cours", "Date", "Plage", "Horaire", "Niveau", "Domaine", "Groupe", "Enseignant", "Salle"])

    for e in cal.events:
        cours = e.name
        date = e.begin.format("YYYY-MM-DD")
        plage = f"{e.begin.format('HH:mm')} - {e.end.format('HH:mm')}"
        horaire = f"{e.begin.time()} - {e.end.time()}"
        salle = e.location if e.location else ""

        niveau, domaine, groupe, enseignant = extraire_infos(e.description)

        writer.writerow([cours, date, plage, horaire, niveau, domaine, groupe, enseignant, salle])

