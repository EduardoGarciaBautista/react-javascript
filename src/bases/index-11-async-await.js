const apiKey = 'y5Tc9Ok07gYWTyZn3dFTMK9kcNV182GA';

const url = 'http://api.giphy.com/v1/gifs/random?api_key=';

const getImage = async () => {
    try {
        const httpCall = await fetch(`${url}${apiKey}`);
        const {data} = await httpCall.json();
        const img = document.createElement('img');
        img.src = data.images.original.url;
        document.body.append(img)
        console.log(data);
    } catch (e) {
        console.log(e);
    }

};
getImage();
/*





*/
