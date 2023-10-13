const router = require('express').Router();
const bodyParser = require('body-parser');
const { formatResponseData } = require('../../utils/utils');


//Post requests below this line will have body parsed via json method
router.use(bodyParser.json());

//Enable if url encoding needs parsing
// router.use(bodyParser.urlencoded({ extended: true }));

// Get videos
router.get('/', async (req, res) => {
    try {
        //Replace with actual data
        const videoData = null;
        const responseData = formatResponseData(videoData, null);

        res.send(responseData);
    } catch (err) {
        const responseData = formatResponseData(null, err);

        res.status(500).send(responseData);

        console.error(err);
    };
});

module.exports = router;