const express = require('express');
const router = express.Router();

const twwController = require('../controllers/tww.controller');

router.get('/legendary-lords', twwController.findLordsController);
router.get('/legendary-lords/:id', twwController.findLordByIdController);

router.post('/create-new-lord', twwController.createLordController);
router.put('/update-lord/:id', twwController.updateLordController);
router.delete('/delete-lord/:id', twwController.deleteLordController);

module.exports = router;
