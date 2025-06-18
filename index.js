//Fichier qui teste le système

import { Voiture } from './voiture.js';

// Création d'instance (nouvelle voiture)
const v1 = new Voiture("Renault", "Zoé", 2024, "bleu");
const v2 = new Voiture("Fiat" , "500" , 2007, "rose");

// Affichage de base
v1.afficherDetails();
v2.afficherDetails()

// Affichage du changement de couleur de la première voiture
v1.couleur = "vert fluo";
v1.afficherDetails();

// Affichage du changement de couleur de la deuxième voiture
v2.couleur = "blanc crème"
v2.afficherDetails();