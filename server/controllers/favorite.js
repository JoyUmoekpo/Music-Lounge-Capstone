const axios = require('axios');

module.exports = {
  favorite: async (req, res) => {
      const {song_id, userId} = req.body;
      
      console.log(req.body);
      res.send(req.body);
  }
}