const axios = require('axios');
const cheerio = require("cheerio");
const fetch = require("node-fetch");

module.exports = function(app) {
app.get('/downloader/capcut', async (req, res) => {
        try {
            const { url } = req.query;
            if (!url) {
                return res.status(400).json({ status: false, error: 'Text is required' });
            }
  const response = await fetch(url);
  const data = await response.text();
  const $ = cheerio.load(data);
  let data { thumbnail: $("video").attr("poster"), video: $("video").attr("src") };
  
            const result = data;
            res.status(200).json({
                status: true,
                result
            });
        } catch (error) {
            res.status(500).json({ status: false, error: error.message });
        }
    });
};
