// Classe Animal
class Animal {
  constructor(nom) {
    this.nom = nom;
  }

  // Méthode pour faire du bruit
  faireDuBruit() {
    console.log(`${this.nom} fait un bruit indéfini.`);
  }
}

// Classe Chien qui hérite de Animal
class Chien extends Animal {
  faireDuBruit() {
    console.log(`${this.nom} aboie : Wouf !`);
  }
}

// Classe Chat qui hérite de Animal
class Chat extends Animal {
  faireDuBruit() {
    console.log(`${this.nom} miaule : Miaou !`);
  }
}

// Classe pigeon qui hérite de Animal
class Pigeon extends Animal {
    faireDuBruit() {
        console.log(`${this.nom} roucoule : Rouuuu !`);
    }
}

// Classe mouton qui hérite de Animal
class Mouton extends Animal {
    faireDuBruit() {
        console.log(`${this.nom} bègle : Bééééééééé ! `)
    }
}

// Création d'une liste d'animaux (polymorphisme)
const animaux = [
  new Chien("Bethoven"),
  new Chat("Garfield"),
  new Chien("Chienchien"),
  new Chat("Chacha"),
  new Pigeon("Tony"),
  new Mouton("Lambal"),
];

// Parcours de la collection d'animaux
// et appel de la méthode faireDuBruit (polymorphisme en action)
for (const animal of animaux) {
  animal.faireDuBruit();
}