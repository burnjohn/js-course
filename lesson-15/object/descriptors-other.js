/**
 * Create new object property with destructor
 * Try to change it in console
 */


Object.defineProperty(animals, 'requestStatus', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'All good',
});

console.log('Object with destructor: ', animals);

/**
 * Object.freeze usage
 */

Object.freeze(animals);

// If we can change property
animals.status = 'All bad';

console.log('Changing property after freeze: ', animals);

// Changing deep property works even after freeze

animals.pig.icon = null;

console.log('Changing deep property works ', animals);

// If we can see property in keys list
console.log('Object keys after descriptor usage', Object.keys(animals));

// If we can delete property
delete animals.status;