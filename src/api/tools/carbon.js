const axios = require('axios');
const fetch = require("node-fetch")
module.exports = function(app) {
    async function carbon(query) {
        try {
  let Blobs = await fetch("https://carbonara.solopov.dev/api/cook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code: query
    }),
  }).then((response) => response.blob());
  let arrayBuffer = await Blobs.arrayBuffer();
  let buffer = Buffer.from(arrayBuffer);
            return buffer;
        } catch (error) {
            throw error;
        }
    }
    app.get('/tools/carbon', async (req, res) => {
        try {
            const { text } = req.query;
            if (!text) {
                return res.status(400).json({ status: false, error: 'Text is required' });
            }
            const pedo = await carbon(text);
            res.writeHead(200, {
                'Content-Type': 'image/png',
                'Content-Length': pedo.length,
            });
            res.end(pedo);
        } catch (error) {
            res.status(500).send(`Error: ${error.message}`);
        }
    });
};