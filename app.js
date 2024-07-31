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

// Exercise 7
// Define the evolved forms of the starter Pokémon
const evolvedForms = {
  1: 2,   // Bulbasaur evolves into Ivysaur
  4: 5,   // Charmander evolves into Charmeleon
  7: 8,   // Squirtle evolves into Wartortle
  25: 26  // Pikachu evolves into Raichu
};

// Loop through the party array to find and replace starter Pokémon with their evolved forms
game.party.forEach((pokemon, index) => {
  if (pokemon.starter) {
    // Find the evolved Pokémon number
    const evolvedNumber = evolvedForms[pokemon.number];
    
    // Find the evolved Pokémon from the pokemon array
    const evolvedPokemon = pokemonArray.find(poke => poke.number === evolvedNumber);
    
    // Replace the current starter Pokémon with its evolved form
    if (evolvedPokemon) {
      game.party.splice(index, 1, evolvedPokemon);
    }
  }
});
console.log(game);

