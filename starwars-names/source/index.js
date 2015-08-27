var starWarsNames = require('./starwarsnames.json'), 
uniqueRandomArray = require('unique-random-array');

module.exports = {
	all: starWarsNames,
	random: uniqueRandomArray(starWarsNames)
};