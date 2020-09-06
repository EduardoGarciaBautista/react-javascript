const apiKey = 'y5Tc9Ok07gYWTyZn3dFTMK9kcNV182GA';

const url = 'http://api.giphy.com/v1/gifs/random?api_key=';

const httpCall = fetch(`${url}${apiKey}`);

httpCall
    .then(res => res.json())
    .then(({data})=> {
        const {url}  = data.images.original;
        const  img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    })
    .catch(console.warn);
