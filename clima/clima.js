
const axios = require('axios');

const getClima = async (lat, lon) => {

  const resp = await  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3147ab054335a2ad81b92cc1bf75279e&units=metric`);



return resp.data.main.temp;

}



module.exports = {
    getClima
}