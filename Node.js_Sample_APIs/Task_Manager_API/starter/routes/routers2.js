const express = require('express')
//TEST SECOND ROUTER TO SEND IMAGE---USING MULTIPLE ALIASES
const router2 = express.Router()
router2.route('/img_1').get((req, res)=>{
    res.send('Image_1')
});
router2.route('/img_2').get((req, res)=>{
    res.send('Image_2')
});

module.exports = router2; //TEST SECOND ROUTER TO SEND IMAGE