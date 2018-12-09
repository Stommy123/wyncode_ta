const rl = require('readline-sync');

const characterCreation = (name, species, specialty) => {
	return {
		name: name,
		species: species,
		specialty: specialty,
		level: 0,
		abilities: []
	}
}

console.log('Create character!');
const name = rl.question('Choose a name ');
const species = rl.question('Choose a species ');
const specialty = rl.question('Choose specialty ');

const player = characterCreation(name, species, specialty);
console.log(player);
