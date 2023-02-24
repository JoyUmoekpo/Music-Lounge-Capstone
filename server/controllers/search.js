const axios = require('axios');

module.exports = {
  search: async (req, res) => {
    try {
      const title = req.params.search_item;

      const response = await axios.get(`https://api.deezer.com/search?q=${title}`);
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");
      res.send(response.data);
    } catch (error) {
      console.error(error);
      res.status(400).send('ERROR IN search function');
    }
  },
  getOneSong: async (req, res) => {
    try {
    const {id} = req.params;
    console.log(id);
    const response = await axios.get(`https://api.deezer.com/track/${id}`);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.send(response.data)
  } catch (error) {
    console.error(error);
    res.status(400).send('ERROR IN getOneSong function');
  }
}
}