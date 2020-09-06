// Destructuring

const person = {
    name: 'Eduardo',
    age: 23,
    location: 'Lomas de padierna'
};


const {age, ...all} = person;
console.log(all);
console.log(age);

const useContext = ({name, another= 10, ...all}) => {
    return {
        name,
        another,
        location: {
            lat: '1',
            lng: '2'
        }
    }
}
const avenger = useContext(person);
const {name, another, location: {lat}} = avenger;
console.log(name);
console.log(another);
console.log(lat);
