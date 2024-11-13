const axios = require('axios');

async function postUser() {
  try {
    let res = await axios.post('http://localhost:3000/users', {
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'jane.smith@example.com'
    });
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
}

postUser();
