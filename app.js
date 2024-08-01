const pokemon = require('./data.js')

console.log('sanity check');

// name here is "Game"

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

console.dir(pokemon, { maxArrayLength: null })

//Exercise 1 below

const pokemonWithNumber59 = pokemon.find(p => p.number === 59);

console.log(pokemonWithNumber59)
console.log(pokemonWithNumber59.name);

// Exercise 2 below

console.log(game)

//party
game.party.push(pokemon.find(p => p.number === 4));

//Gym
// Find a specific gym by its location and mark it as completed
const ceruleanGym = game.gyms.find(gym => gym.location === "Cerulean City");
if (ceruleanGym) {
  ceruleanGym.completed = true;
}
console.log(ceruleanGym);

//Item
// Find an item by name and decrease its quantity
const pokeball = game.items.find(item => item.name === "pokeball");
if (pokeball) {
  pokeball.quantity--;
}
console.log(pokeball);

//party
// Find a Pokémon by its number and add it to the party
const bulbasaur = pokemon.find(p => p.number === 1);
game.party.push(bulbasaur);
console.log(bulbasaur);

// Exercise 3 Below
game.difficulty = 'Medium';
console.log(game.difficulty)

//Exercise 4

// Find the first starter Pokémon in the pokemon array
const starterPokemon = pokemon.find(pokemon => pokemon.starter);

// Add the starter Pokémon to the game.party array
game.party.push(starterPokemon);
console.log(starterPokemon);
console.log(game.party);

//Exercise 5
// Choose the Pokémon to add
const pikachu = pokemon.find(pokemon => pokemon.number === 25);
const Butterfree = pokemon.find(pokemon => pokemon.number === 12);
const charmeleon = pokemon.find(pokemon => pokemon.number === 5);

// Add the selected Pokémon to the game.party array
game.party.push(pikachu, Butterfree, charmeleon);

// Log the updated game object
console.log(game);

//Exercise 6
// Loop through the gyms array
game.gyms.forEach(gym => {
  // Check if the difficulty is less than 3
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});

console.log(game);

// Exercise #7

// Define the evolved Pokémon
const evolvedPokemon = {
  1: { number: 2, name: "Ivysaur", type: "grass", hp: 60, starter: false },
  4: { number: 5, name: "Charmeleon", type: "fire", hp: 58, starter: false },
  7: { number: 8, name: "Wartortle", type: "water", hp: 59, starter: false },
  25: { number: 26, name: "Raichu", type: "electric", hp: 60, starter: false }
};

// Iterate over the party to find and replace starter Pokémon
game.party.forEach((pokemon, index) => {
  if (pokemon.starter) {
    // Find the evolved Pokémon
    const evolved = evolvedPokemon[pokemon.number];
    
    if (evolved) {
      // Replace the current starter Pokémon with its evolved form
      game.party.splice(index, 1, evolved);
    }
  }
});

console.log(game.party); // Check the updated party

//Exercise #8

// Iterate over the party array and print the name of each Pokémon
game.party.forEach(pokemon => {
  console.log(pokemon.name);
});

// Exercise 9

// Filter out starter Pokémon and print their names
pokemon.filter(pokemon => pokemon.starter) 
       .forEach(starter => console.log(starter.name)); 

   // Exercise #10
   
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};

pokemon.find(pokemon => pokemon.number === 25);
game.catchPokemon(pikachu);

console.log(game.party);

// Exercise #11

game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);

  const pokeballItem = this.items.find(item => item.name === 'pokeball');

  if (pokeballItem) {
    pokeballItem.quantity -= 1;
  }
};

const eevee = pokemon.find(pokemon => pokemon.number === 133);

game.catchPokemon(eevee);  

console.log(game.party);

console.log(game.items);

// Exercise 12

game.gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
});

console.log(game.gyms);

// Exercise 13

game.gymStatus = function() {
  const gymTally = {
    completed: 0,
    incomplete: 0
  };

  this.gyms.forEach(gym => {
    if (gym.completed) {
      gymTally.completed += 1;
    } else {
      gymTally.incomplete += 1;
    }
  });

  console.log(gymTally);
};

game.gymStatus();

// Exercise #14

game.partyCount = function() {
  return this.party.length;
};

console.log(game.partyCount()); 

//Exercise 15

game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});

console.log(game.gyms);

// Exercise 16

console.log(game);



