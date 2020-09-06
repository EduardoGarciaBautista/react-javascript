const characters = ['Goku', 'Vegueta', 'Trunks'];


// Destructuring
const [, , ch3] = characters
console.log(ch3);

const returnArray = () => ['ABC', '123'];

const [letters] = returnArray();

console.log(letters);


//

const useState = (value) => [value, () => {
    console.log('Greeting from use , hi' + value);
}];

const [value, setValue] = useState('Eduardo');

console.log(value);
setValue();
