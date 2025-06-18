export class Vehicule {
    #marque;
    #modele;
    #annee;

    constructor(marque, modele, annee) {
        this.#marque = marque;
        this.#modele = modele;
        this.#annee = annee;
    }

    get marque() { return this.#marque; }
    get modele() { return this.#modele; }
    get annee() { return this.#annee; }

    afficherBase() {
        return `${this.#marque} ${this.#modele} (${this.#annee})`;
    }
}