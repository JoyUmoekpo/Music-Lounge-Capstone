const axios = require('axios');

module.exports = {
  getSongResults: async (req, res) => {
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
},
  getNews: async (req, res) => {
    try {
      const item = req.params.news_item;

      const response = await axios.get(`https://newsapi.org/v2/everything?q=${item}&from=2023-02-01&sortBy=popularity&apiKey=7477cb63460f442e8b7184074c5689c2`);
      res.send(response.data)
    } catch (error) {
      console.error(error);
      res.status(400).send('ERROR IN getNews function');      
    }
  },
  getLyrics: async (req, res) => {
    try {
      
    } catch (error) {
      console.error(error);
      res.status(400).send('ERROR IN getLLyrics function');      
    }
  }
}
