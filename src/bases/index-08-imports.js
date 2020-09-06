import heroes, {owners} from '../data/heroes';

//console.log(heroes);

export const getHeroById = idHero => heroes.find(({id}) => id === idHero);

const hero = getHeroById(1);

//console.log(hero);

const getHeroByOwner = heroOwner => heroes.filter(({owner}) => owner === heroOwner);

//console.log(getHeroByOwner('DC'));
