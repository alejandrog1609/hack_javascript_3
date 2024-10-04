const axios = require("axios");

/*
- Mediante la libreria: axios
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/users/1
- Return: "response" global de la petición 
*/

async function fnTest() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      return response;
    } catch (error) {
      console.error(error);
    }
  }

module.exports = fnTest;