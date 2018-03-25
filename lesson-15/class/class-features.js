const fp = _;

class SuperPokemon {
  attack(){
    return {
      damage: Math.ceil(Math.pow(Math.random(), -2))
    }
  }

  move(){
    if (this.features.canFly) {
      return 'Flying in sky!';
    }

    return 'Going on foot!';
  }

  eat(food) {
    if (this.state.starving) {
      return 'Eating ' + food;
    }

    return 'Don\'t want to eat '  + food;
  }
}

class Pokemon extends SuperPokemon {
  constructor({ features, state }){
    super();

    this.state = { ...state };
    this.params = { ...features };
  }

  static getDefaultType(type) {
    if (!Pokemon.featuresTypesList.includes(type)) {
      return 'mixed'
    }
  }

  set params({ type, ...rest }) {
    const defaultType = Pokemon.getDefaultType(type);

    this.features = {
      type: defaultType || type,
      ...rest
    };
  }

  fight(pokemon) {
    if (!pokemon) return 'Can\'t find enemy';

    return this.attack();
  }
}


Pokemon.featuresTypesList = ['water', 'fire', 'earth'];

const blastois = new Pokemon({
  features:{
    name: 'Blastois',
    // type: 'water',
    color: 'blue',
    canFly: false
  },
  state: {
    starving: false
  }
});

console.log('Created pokemon: ', blastois);
console.log('Pokemo type: ', blastois.features.type);
