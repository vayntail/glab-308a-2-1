/* 
⋆ ˚｡⋆୨୧˚ Part 1: Humble Beginnings ˚୨୧⋆｡˚ ⋆
*/
//#region
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};
// log each item in Robin's inventory
adventurer.inventory.forEach((item) => {
  console.log(item);
});
// test roll
adventurer.roll();
//#endregion

/* 
⋆ ˚｡⋆୨୧˚ Part 2: Class Fantasy ˚୨୧⋆｡˚ ⋆
*/
//#region
class Character {
  static MAX_HEALTH = 100;
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;
  }
}
//#endregion

/* 
⋆ ˚｡⋆୨୧˚ Part 3: Class Features ˚୨୧⋆｡˚ ⋆
*/
//#region
class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];
  constructor(name, role) {
    super(name);
    // Adventurers have specialized roles.
    if (
      Adventurer.ROLES.includes(
        role[0].toUpperCase() + role.slice(1).toLowerCase()
      )
    ) {
      this.role = role[0].toUpperCase() + role.slice(1).toLowerCase();
    } else {
      throw Error("Role does not exist.");
    }

    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  // Adventurers can duel another adventurer.
  duel(adventurer) {
    // repeat until one of the adventurers health reaches 50
    while (this.health > 50 || adventurer.health > 50) {
      let a = super.roll();
      let b = adventurer.roll();
      // subtract 1 from adventurer with lower roll
      if (a > b) {
        adventurer.health -= 1;
      } else if (b > a) {
        this.health -= 1;
      }
    }
    if (this.health == 50) {
      console.log("Winner is: " + this.name + "!");
    } else if (adventurer.health == 50) {
      console.log("Winner is: " + adventurer.name + "!");
    }
  }
}
class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}
// create Robin using class
// const robin = new Adventurer("Robin", "fighter");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Companion("Leo", "Cat");
// robin.companion.companion = new Companion("Frank", "Flea");
// robin.companion.companion.inventory = ["small hat", "sunglasses"];
// console.log(robin);
//#endregion

/* 
⋆ ˚｡⋆୨୧˚ Part 5: Gather your Party ˚୨୧⋆｡˚ ⋆
*/
//#region
class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
    return newAdventurer;
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}
const healers = new AdventurerFactory("Healer");
const fighters = new AdventurerFactory("Fighter");
const robin = healers.generate("Robin");
const mary = fighters.generate("Mary");
//#endregion

/* 
⋆ ˚｡⋆୨୧˚ Part 6: Developing Skills ˚୨୧⋆｡˚ ⋆
*/
robin.duel(mary);

/* 
⋆ ˚｡⋆୨୧˚ Part 7: Adventure Forth ˚୨୧⋆｡˚ ⋆
*/
