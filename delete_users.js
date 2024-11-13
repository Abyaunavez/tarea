const axios = require('axios');

async function deleteUser() {
  try {
    let res = await axios.delete('http://localhost:3000/users/2');
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
}

deleteUser();
