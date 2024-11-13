const axios = require('axios');

async function getUsers() {
  try {
    let res = await axios.get('http://localhost:3000/users');
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
}

getUsers();
