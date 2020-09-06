const name = 'Eduardo';
const lastName = 'García';

const completeName = `${name} 
${lastName}`;
console.log(completeName);


function getGreetings(name) {
    return 'Hola ' + name;
}

console.log(`Este es un texto: ${getGreetings('Eduardo')}`)
