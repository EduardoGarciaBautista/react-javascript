const person = {
    name: 'Ed',
    lastName: 'Garcia',
    age: 23,
    location: {
        city: 'Mx',
    }
}




const person2 = {...person};

person2.name = 'New';
console.log(person);
console.log(person2);
