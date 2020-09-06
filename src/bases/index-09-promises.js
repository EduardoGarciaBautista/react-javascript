import {getHeroById} from "./index-08-imports";

/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hola despues de 2s');
        resolve(getHeroById(2));

        //reject('Error')
    }, 2000);
});

promise.then(result => {
    console.log('Finished with', result);
});

promise.catch(error => {
    console.log(error);
});
*/

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola despues de 2s');
            const hero = getHeroById(id);
            if (hero) {
                resolve(hero);
            } else {
                reject('Error');
            }


            //reject('Error')
        }, 2000);
    });

}
getHeroByIdAsync(9).then(console.log).catch(console.warn);
