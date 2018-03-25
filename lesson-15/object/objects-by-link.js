/*
 * This is the example of object mutation
 */

var alex = {
  gender: 'male',
  profession: 'engineer'
};


var oleg = alex;
var alexandra = oleg;

alexandra.gender = 'feemale';
alexandra.profession = 'qa';

// alex = { car: 'tesla'};

console.log('Mutating object: ', alexandra);


function mutate(obj) {
  obj.gender = 'none'
}

mutate(alex);

console.log('Mutating object by func: ', alexandra);

