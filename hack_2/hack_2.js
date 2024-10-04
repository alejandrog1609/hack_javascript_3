const axios = require("axios");
/*
- Mediante la libreria: axios
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: "response" global de la petición 
*/

async function fnTest() {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts');
    return response;
  } catch (error) {
    console.error(error);
  }
}
module.exports = fnTest;