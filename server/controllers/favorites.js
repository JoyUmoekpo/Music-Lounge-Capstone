const axios = require('axios');

module.exports = {
  favorite: async (req, res) => {
    try {
      
    }  catch (error) {
      console.error(error);
      res.status(400).send('ERROR IN favorite function');
    }
  }
}