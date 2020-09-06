const greeting = function (name) {
    return `Hola ${name}`;
}

const greeting2 = (name) => `Hola ${name}`;


console.log(greeting2('Eduardo'));


const getUser = () => ({
    uid: '123',
    userName: 'holamundo'
});

console.log(getUser());

// Transformarla a flecha
// retornar el obj implicito
//Pruebas

function getActiveUser(name) {
    return {
        uid: '12345',
        userName: name
    }
}

const activeUser = getActiveUser('Eduardo Garcia');

console.log(activeUser);

// Solution
const getActiveUserArrowFunction = name => ({
    uid: 'arrow',
    userName: name
});

const arrowActiveUser = getActiveUserArrowFunction('Ed');
console.log(arrowActiveUser);
