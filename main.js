//////////////////////////////////////////////////
//  MAIN APPLICATION
//////////////////////////////////////////////////

const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

console.log("********************************************************");
console.log("An array of pokemon objects where the id is evenly divisible by 3\n");

console.log( pokemon.filter( pkmn => pkmn.id % 3 === 0 ) );

console.log("\n********************************************************");
console.log("An array of pokemon objects that are 'fire' type\n");

console.log( pokemon.filter( pkmn => pkmn.types.includes("fire") ) );

console.log("\n********************************************************");
console.log("An array of pokemon objects that have more than one type\n");

console.log( pokemon.filter( pkmn => pkmn.types.length > 1 ) );

console.log("\n********************************************************");
console.log("An array with just the names of the pokemon\n");

console.log( pokemon.map( pkmn => pkmn.name ) );

console.log("\n********************************************************");
console.log("An array with just the names of the pokemon with an id greater than 99\n");

const pkmnIdGreaterThan99 = pokemon.filter( pkmn => pkmn.id > 99 );
console.log( pkmnIdGreaterThan99.map( pkmn => pkmn.name ) );

console.log("\n********************************************************");
console.log("An array with just the names of the pokemon whose only type is poison\n");

const poisonPkmn = pokemon.filter( pkmn => pkmn.types.length === 1 && pkmn.types.includes("poison") );
console.log( poisonPkmn.map( pkmn => pkmn.name ));

console.log("\n********************************************************");
console.log("An array containing just the first type of all the pokemon whose second type is 'flying'\n");

const secondTypeFlyingPkmn = pokemon.filter( pkmn => {
    if (pkmn.types.length > 1) {
        if (pkmn.types[1] === "flying") {
            return true;
        }
    }
    return false;
} );
console.log( secondTypeFlyingPkmn.map( pkmn => pkmn.types[0] ) );