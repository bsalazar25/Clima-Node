
const axios = require('axios');





const getLugarLatLng = async (direccion) => {

    const encodedURL = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidAPI-Key': '4f070c8f6cmsh1c73ff8386df5d3p1ceb47jsn016a4edb83c6' }
    });

    const resp = await instance.get();


    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const { name, lat, lon } = resp.data.Results[0];


    return {
        name,
        lat,
        lon
    }


}


module.exports = {
    getLugarLatLng
}