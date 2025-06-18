import { Vehicule } from './vehicule.js';

export class Voiture extends Vehicule {
    #couleur;

    constructor(marque, modele, annee, couleur) {
        super(marque, modele, annee);
        this.#couleur = couleur;
    }

    get couleur() { return this.#couleur; }
    set couleur(val) { this.#couleur = val; }

    afficherDetails() {
        console.log(`🚘 ${this.afficherBase()} - Couleur : ${this.#couleur}`);
    }
}