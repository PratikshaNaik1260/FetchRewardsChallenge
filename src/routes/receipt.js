const express = require('express');
const router = express.Router();
const receipts = require('../controllers/receipts');

router.post('/process', receipts.processReceipt);
router.get('/:id/points', receipts.getPoints);

module.exports = router;