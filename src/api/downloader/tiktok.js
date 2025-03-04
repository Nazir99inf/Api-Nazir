const axios = require('axios');

module.exports = function(app) {
app.get('/downloader/tiktok', async (req, res) => {
        try {
            const { url } = req.query;
            if (!url) {
                return res.status(400).json({ status: false, error: 'Text is required' });
            }
            let tikwm = "https://www.tikwm.com/api/?url=" + url + "?hd=1";
            let response = await axios.post(tikwm)
            let done = response.data
            const result = done;
            res.status(200).json({
                status: true,
                result
            });
        } catch (error) {
            res.status(500).json({ status: false, error: error.message });
        }
    });
};
